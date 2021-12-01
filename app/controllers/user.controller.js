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
exports.addPlaylistByUser = async (req, res) => {
  const playlist = await mongooseEntityAsync.asyncSave(req,res,PlaylistModel,{name: req.body.name , dateCreation: "2016-05-18T16:00:00Z"});
  mongooseEntity.findByIdAndUpdate(req,res,UserModel,{$push: {playlists: playlist._id}})
};

exports.updatePlaylist = async (req, res) => {
  mongooseEntity.findByIdAndUpdate(req,res,PlaylistModel,req.body)
};

exports.deletePlaylist = async (req, res) => {

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


/***ADmin */

exports.getAllUsers = async (req, res) => {
  mongooseEntity.findBy(req,res,UserModel,{});
};



/**Ads */
exports.addAdsByUser = async (req, res) => {
  const advert = await mongooseEntityAsync.asyncSave(req,res,AdvertModel,req.body);
  mongooseEntity.findByIdAndUpdate(req,res,UserModel,{$push: {adverts: advert._id}});
};

exports.updateAds = async (req, res) => {
  mongooseEntity.findByIdAndUpdate(req,res,AdvertModel,req.body);
};


exports.deleteAds = async (req, res) => {
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

exports.getAllAdsByUser = async (req, res) => {
  mongooseEntity.findByIdPopulate(req,res,UserModel,'adverts');
};





