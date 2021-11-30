exports.asyncSave = (req,res,schemaModel) => {
  const model = new schemaModel(req.body);
  return model.save();
}
exports.asyncSave = (req,res,schemaModel,jsonObject) => {
  const model = new schemaModel(jsonObject);
  return model.save();
}
exports.asyncFindBy = (req,res,schemaModel,jsonObject) => {
  return schemaModel.find(jsonObject)
};

exports.asyncFindOne =  (req,res,schemaModel,jsonObject) => {
  return schemaModel.findOne(jsonObject);
};
exports.asyncFindById = (req, res,schemaModel) => {
  const id = req.params.id;
  return schemaModel.findById(id);
};

exports.asyncFindOneAndUpdate = (req, res,schemaModel,query,jsonObject) => {
  return schemaModel.findOneAndUpdate(query,jsonObject);
};

exports.asyncFindByIdAndRemove = (req, res,schemaModel) => {
  const id = req.params.id;
  return schemaModel.findByIdAndRemove(id,{ useFindAndModify: false });
};


