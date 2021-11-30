module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        dateCreation: Date,
        videos: [
          { 
            url : String,
            title: String,
            description : String,
            hostname: String,
            thumbnails : String
          }
        ]
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Playlist = mongoose.model("Playlist", schema);
    return Playlist;
  };
  