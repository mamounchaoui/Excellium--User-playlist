


/*
Features 
 jsonobject (save,delete)

*/

exports.save = (req,res,schemaModel) => {
      const model = new schemaModel(req.body);
      model
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Model."
        });
      });
}

exports.findBy = (req,res,schemaModel,jsonObject) => {
    schemaModel.find(jsonObject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Models."
      });
    });
  };

  exports.findById = (req, res,schemaModel) => {
    const id = req.params.id;
  
    schemaModel.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Model with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Model with id=" + id });
      });
  };

  exports.findById = (req, res,schemaModel,query) => {
    const id = req.params.id;
  
    schemaModel.findById(id).select(query)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Model with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Model with id=" + id });
      });
  };


  exports.findByIdAndUpdate = (req, res,schemaModel,jsonObject) => {
    const id = req.params.id;
    schemaModel.findByIdAndUpdate(id,jsonObject)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Model with id=${id}. Maybe Model was not found!`
          });
        } else res.send({ message: "Model was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Model with id=" + id
        });
      });
  };

  exports.findOneAndUpdate = (req, res,schemaModel,query,jsonObject) => {
    schemaModel.findOneAndUpdate(query,jsonObject,{ useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Model with id=${id}. Maybe Model was not found!`
          });
        } else res.send({ message: "Model was updated successfully."});
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Model with id=" + id
        });
      });
  };

  exports.findByIdAndRemove = (req, res,schemaModel) => {
    const id = req.params.id;
    schemaModel.findByIdAndRemove(id,{ useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Model with id=${id}. Maybe Model was not found!`
          });
        } else {
          res.send({
            message: "Model was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Model with id=" + id
        });
      });
  };


  exports.findByIdPopulate = (req, res,schemaModel,populate) => {
    const id = req.params.id;
    schemaModel.findById(id).
    populate(populate).
    exec(function (err, data) {
      if (err){
        res
        .status(500)
        .send({ message: err.message });
      }
      res.send(data);
    });
  };
