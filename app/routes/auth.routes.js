module.exports = app => {
    const userController = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/signUp", userController.signup);
    router.post("/signIn", userController.login);
    
    app.use("/api/v1/auth", router);
  };
  