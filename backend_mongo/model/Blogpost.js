import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  author: {type:String,
    required:true
  },
  title: {type:String,
    required:true,
    unique:true
  },
  body: {type:String,
    required:true,
    unique:true
  },
  date: {type:Date,
    required:true
  },
  url:{
    type:String
  }
});

export default mongoose.model("BlogPost",BlogSchema)