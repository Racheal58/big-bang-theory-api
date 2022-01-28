import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  episode: [String],
  image: String,
});

const modelCharacter = mongoose.model("characters", characterSchema);

export default modelCharacter;
