module.exports = app => {
    const userController = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/addPlaylist/:id", userController.addPlaylistByUser);
    router.put("/updatePlaylist/:id", userController.updatePlaylist);
    router.delete("/deletePlaylist/:id", userController.deletePlaylist);
    router.get("/myPlayLists/:id", userController.getPlaylistsByUser);


    router.get("/AllUsers", userController.getAllUsers);

    app.use("/api/v1/Users", router);
  };
  