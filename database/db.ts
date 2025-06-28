import mongoose from "mongoose";
export default async function connectToDB() {
  await mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("MongoDB connected Successfully");
    })
    .catch((error) => {
      throw Error(error);
    });
}
