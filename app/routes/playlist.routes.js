module.exports = app => {
    const userController = require("../controllers/playlist.controller.js");
  
    var router = require("express").Router();

    router.get("/getAll", userController.getAllPlaylists);
    router.post("/addVideo/:id", userController.addVideoByPlaylistId);
    router.get("/getAllVideos/:id", userController.getAllVideosByPlaylistId);
    router.delete("/deleteVideo/:id/:videoId", userController.deleteVideoByPlaylistId);
    router.get("/getPlayList/:id", userController.getPlaylist);
 
    app.use("/api/v1/Playlists", router);
  };
  