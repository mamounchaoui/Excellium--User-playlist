const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");


mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.UserModel = require("./user.model")(mongoose);
db.PlaylistModel = require("./playlist.model")(mongoose);
db.AdvertModel = require("./advert.model")(mongoose);

module.exports = db;
