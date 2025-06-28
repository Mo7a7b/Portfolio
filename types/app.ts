import mongoose from "mongoose";

export interface Project {
  title: string;
  githubUrl: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  imageUrl: string;
  _id: mongoose.Schema.Types.ObjectId;
  _v?: number;
}
