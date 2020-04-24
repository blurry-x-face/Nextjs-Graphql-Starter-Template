const mongoose = require("mongoose");
/**
 * User Schema
 */
const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

/**
 * Statics
 */
userSchema.statics = {
  /**
   * Get User
   * @param {ObjectId} id - The objectId of user.
   */
  get(id, cb) {
    return this.findById(id, user => {
      if (user) {
        cb(user);
        return user;
      }
    });
  }
};

module.exports = mongoose.model("User", userSchema);
