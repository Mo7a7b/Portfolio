import { Document } from "mongoose";

export interface Project extends Document {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}
