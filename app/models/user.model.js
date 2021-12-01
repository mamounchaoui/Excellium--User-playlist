module.exports = mongoose => {
    let schema = mongoose.Schema(
      {
        firstname: {type: String , required: [true, 'Firstname required']},
        lastname: {type: String , required: [true, 'Lastname required']},
        password: {type: String , required: [true, 'Password required']},
        login: {type: String , unique: true,required: [true, 'Login required']},
        contact: {
            phone: String,
            email: {type: String , unique: true,required: [true, 'Email required']}
        },
        address: {
            country: String,
            city: String,
            zipCode: String,
            address: String
        },
        role: {type: String , required: [true, 'Role required']},
        playlists : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
        adverts : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Advert' }]
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("User", schema);
    return User;
  };