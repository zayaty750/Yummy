const Food = require("../model/Food.js");
const path = require('path');
const fs = require('fs');


const get_product = async (req,res,next)=>
{
  Food.find()
  .then(result => {
    res.render('index', { Food: result});
  })
  .catch(err => {
    console.log(err);
  });
}

const Add_product  = async(req,res,next) =>
{
  let imgFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
  }
  imgFile = req.files.Image;
  uploadPath = path.join(__dirname, '../public/images/' + req.body.Name + path.extname(imgFile.name));

  // Use the mv() method to place the file somewhere on your server
  imgFile.mv(uploadPath, function (err) {
      if (err)
          res.status(500).send(err);

      const product = new Food({
        Name: req.body.Name,
        Catergory: req.body.Catergory,
        Description: req.body.Description,
        Price: req.body.Price,
        Rating: req.body.Rating,
        Image: req.body.Name + path.extname(imgFile.name),

      })
      product.save()
          .then(result => {
              res.redirect('/');
          })
          .catch(err => {
              console.log(err);
          });
  });
}


const Delete_product = (req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(result => {
      fs.unlink(path.join(__dirname, '../public/images/' + req.params.img), (err) => {
        if (err) {
          throw err;
        }
        res.redirect('/');
      });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {get_product,Add_product,Delete_product};