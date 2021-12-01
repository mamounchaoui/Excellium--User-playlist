const db = require("../models/modelsConfig")
const UserModel = db.UserModel
const PlaylistModel = db.PlaylistModel
const AdvertModel = db.AdvertModel
const mongooseEntity = require("../models/mongooseEntity.js");
const mongooseEntityAsync = require("../models/mongooseEntityAsync.js");



/* --------------*/

exports.addAdvertByUser = async (req, res) => {
    const advert = await mongooseEntityAsync.asyncSave(req,res,AdvertModel,req.body);
    mongooseEntity.findByIdAndUpdate(req,res,UserModel,{$push: {adverts: advert._id}});
};

exports.updateAdvertByUser = async (req, res) => {
    mongooseEntity.findByIdAndUpdate(req,res,AdvertModel,req.body);
};


exports.deleteAdvertByUser = async (req, res) => {
    try {
    const user = await mongooseEntityAsync.asyncFindOne(req,res,UserModel,{adverts: {_id: req.params.id}});
    mongooseEntity.findOneAndUpdate(req,res,UserModel,{_id:user._id},{$pull:{adverts:req.params.id }});
    mongooseEntity.findByIdAndRemove(req,res,AdvertModel);
    } catch (error) {
    res.status(500).send({
        message: error.message
    });
    }
};

exports.getAllAdvertByUser = async (req, res) => {
    mongooseEntity.findByIdPopulate(req,res,UserModel,'adverts');
};

/*-------- */
exports.getAllAdverts = (req,res) => {
    mongooseEntity.findBy(req,res,AdvertModel,{});
};

exports.getAdvert = (req,res) => {
    mongooseEntity.findById(req,res,AdvertModel);
};