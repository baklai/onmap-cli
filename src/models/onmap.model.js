const { model, Schema } = require('mongoose');

const onmapSchema = new Schema(
  {
    title: {
      type: String,
      trim: true
    },
    target: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    flags: {
      type: Array,
      default: null
    },
    userID: {
      type: Schema.Types.ObjectId,
      default: null,
      ref: 'user'
    }
  },
  {
    strict: false
  }
);

module.exports = model('onmap', onmapSchema);
