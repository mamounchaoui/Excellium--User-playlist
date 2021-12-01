module.exports = app => {
    const advertController = require("../controllers/advert.controller.js");
  
    var router = require("express").Router();

    router.post("/advert/:id", advertController.addAdvertByUser);
    router.put("/advert/:id", advertController.updateAdvertByUser);
    router.delete("/advert/:id", advertController.deleteAdvertByUser);
    router.get("/user/:id", advertController.getAllAdvertByUser);

    router.get("/", advertController.getAllAdverts);
    router.get("/advert/:id", advertController.getAdvert);
 
    app.use("/api/v1/Ads", router);
  };
  