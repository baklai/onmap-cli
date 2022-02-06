const { model, Schema } = require('mongoose');

const onmapSchema = new Schema(
  {
    title: {
      type: String,
      trim: true
    },
    target: {
      type: String,
      required: true,
      trim: true
    },
    flags: {
      type: Array,
      default: null
    }
  },
  {
    strict: false,
    timestamps: true
  }
);

module.exports = model('onmap', onmapSchema);
