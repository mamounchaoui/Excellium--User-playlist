module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        location: String,
        cost:  Number,
        clicks: [
          {
            date: Date
          }
        ],
        impression: String,
        period: Number,
        link: String,
        image: String,
        audience: String,
        daily_budget: Number,
        coverage:Number
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
  