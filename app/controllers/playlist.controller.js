const db = require("../models/modelsConfig")
const UserModel = db.UserModel
const PlaylistModel = db.PlaylistModel
const mongooseEntity = require("../models/mongooseEntity.js");
const mongooseEntityAsync = require("../models/mongooseEntityAsync.js");


/*-----------*/

exports.addPlaylistByUser = async (req, res) => {
    const playlist = await mongooseEntityAsync.asyncSave(req,res,PlaylistModel,{name: req.body.name , dateCreation: "2016-05-18T16:00:00Z"});
    mongooseEntity.findByIdAndUpdate(req,res,UserModel,{$push: {playlists: playlist._id}})
};

exports.updatePlaylistByUser = async (req, res) => {
    mongooseEntity.findByIdAndUpdate(req,res,PlaylistModel,req.body)
};

exports.deletePlaylistByUser = async (req, res) => {

    try {
        const user = await mongooseEntityAsync.asyncFindOne(req,res,UserModel,{playlists: {_id: req.params.id}});
        mongooseEntity.findOneAndUpdate(req,res,UserModel,{_id:user._id},{$pull:{playlists:req.params.id }});
        mongooseEntity.findByIdAndRemove(req,res,PlaylistModel);
    } catch (error) {
        res.status(500).send({
        message: error.message
        });
    }
    /*mongooseEntityAsync.asyncFindOne(req,res,UserModel,{playlists: {_id: req.params.id}}).then(response => {
        mongooseEntityAsync.asyncFindOneAndUpdate(req,res,UserModel,{_id:response._id},{$pull:{playlists:req.params.id }}).then(r1 => {
            mongooseEntityAsync.asyncFindByIdAndRemove(req,res,PlaylistModel).then(r2 => {
                res.send(r2);
            }).catch(err2 => {
                res.status(500).send({
                message: error.message
                });
            })
        }).catch(err1 => {
            res.status(500).send({
            message: error.message
            });
        })
        }).catch(error=> {
        res.status(500).send({
        message: error.message
        });
        })*/
};

exports.getPlaylistsByUser = async (req, res) => {
    mongooseEntity.findByIdPopulate(req,res,UserModel,'playlists');
};


/************* */


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

