const db = require("../models/modelsConfig")
const UserModel = db.UserModel
const PlaylistModel = db.PlaylistModel
const AdvertModel = db.AdvertModel
const mongooseEntity = require("../models/mongooseEntity.js");
const mongooseEntityAsync = require("../models/mongooseEntityAsync.js");


exports.getAllAds = (req,res) => {
    mongooseEntity.findBy(req,res,AdvertModel,{});
};

exports.getAdvert = (req,res) => {
    mongooseEntity.findById(req,res,AdvertModel);
};