module.exports = app => {
    const userController = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/addPlaylist/:id", userController.addPlaylistByUser);
    router.put("/updatePlaylist/:id", userController.updatePlaylist);
    router.delete("/deletePlaylist/:id", userController.deletePlaylist);
    router.get("/myPlayLists/:id", userController.getPlaylistsByUser);


    router.get("/AllUsers", userController.getAllUsers);


    router.post("/addAds/:id", userController.addAdsByUser);
    router.put("/updateAds/:id", userController.updateAds);
    router.delete("/deleteAds/:id", userController.deleteAds);
    router.get("/myAds/:id", userController.getAllAdsByUser);

    app.use("/api/v1/Users", router);
  };
  