module.exports = app => {
    const userController = require("../controllers/playlist.controller.js");
  
    var router = require("express").Router();
  
    router.post("/playlist/:id", userController.addPlaylistByUser);
    router.put("/playlist/:id", userController.updatePlaylistByUser);
    router.delete("/playlist/:id", userController.deletePlaylistByUser);
    router.get("/user/:id", userController.getPlaylistsByUser);

    router.get("/", userController.getAllPlaylists);
    router.post("/video/:id", userController.addVideoByPlaylistId);
    router.get("/videos/:id", userController.getAllVideosByPlaylistId);
    router.delete("/video/:id/:videoId", userController.deleteVideoByPlaylistId);
    router.get("/playlist/:id", userController.getPlaylist);
 
    app.use("/api/v1/Playlists", router);
  };
  