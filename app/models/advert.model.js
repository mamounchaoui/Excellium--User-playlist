module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        location: String,
        cost:  Number,
        clicks: Number,
        impression: String,
        period: Number,
        link: String,
        image: {
          content : ArrayBuffer,
          filename : String,
          type: String,
        }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Advert = mongoose.model("Advert", schema);
    return Advert;
  };
  