module.exports = app => {
    const advertController = require("../controllers/advert.controller.js");
  
    var router = require("express").Router();

    router.get("/getAll", advertController.getAllAds);
    router.get("/getAdvert/:id", advertController.getAdvert);
 
    app.use("/api/v1/Ads", router);
  };
  