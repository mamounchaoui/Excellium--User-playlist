const db = require("../models/modelsConfig")
const UserModel = db.UserModel
const PlaylistModel = db.PlaylistModel
const AdvertModel = db.AdvertModel
const mongooseEntity = require("../models/mongooseEntity.js");
const mongooseEntityAsync = require("../models/mongooseEntityAsync.js");


/* Inscription */

function verifyBodyNotEmpty(req,res){
  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
}

exports.signup = (req,res) => {
   verifyBodyNotEmpty(req,res);
    mongooseEntity.save(req,res,UserModel);
};

/* Connexion */
exports.login = (req,res) => {
  verifyBodyNotEmpty(req,res);
  mongooseEntity.findBy(req,res,UserModel,{"login": req.body.login , "password": req.body.password});
};

/*Simple User Methodes*/


/***ADmin */

exports.getAllUsers = async (req, res) => {
  mongooseEntity.findBy(req,res,UserModel,{});
};



/**Ads */






