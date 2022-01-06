module.exports = app => {
    const userController = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.put("/updateUser/:id", userController.updateUser);
    router.get("/getUser/:id", userController.getUser);
    router.get("/", userController.getAllUsers);


    app.use("/api/v1/Users", router);
  };
  