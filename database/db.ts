import mongoose from "mongoose";
export default async function connectToDB() {
  await mongoose
    .connect(
      `mongodb+srv://mohab:M3IAMr5Qu7tjbtDm@portfolio.dbwoisz.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio`
    )
    .then(() => {
      console.log("MongoDB connected Successfully");
    })
    .catch((error) => {
      throw Error(error);
    });
}
