const db = require("../models/modelsConfig")
const UserModel = db.UserModel
const PlaylistModel = db.PlaylistModel
const mongooseEntity = require("../models/mongooseEntity.js");
const mongooseEntityAsync = require("../models/mongooseEntityAsync.js");



exports.getAllPlaylists = (req,res) => {
    mongooseEntity.findBy(req,res,PlaylistModel,{});
};

exports.addVideoByPlaylistId = (req,res) => {
    mongooseEntity.findByIdAndUpdate(req,res,PlaylistModel, {$push : {videos: req.body}});
};

exports.getAllVideosByPlaylistId = (req,res) => {
    mongooseEntity.findById(req,res,PlaylistModel,'videos');
};

exports.deleteVideoByPlaylistId = (req,res) => {
    mongooseEntity.findOneAndUpdate(req,res,PlaylistModel,{_id:req.params.id},{$pull:{videos:{ _id :req.params.videoId }}});
};

exports.getPlaylist = (req,res) => {
    mongooseEntity.findById(req,res,PlaylistModel);
};

