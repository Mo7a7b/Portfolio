import { Project } from "@/types/api";
import mongoose, { Schema } from "mongoose";

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const ProjectModel =
  mongoose.models.Project || mongoose.model<Project>("Project", ProjectSchema);
export default ProjectModel;
