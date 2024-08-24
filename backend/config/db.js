import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddelivery:ngohremy20040@cluster0.c5tys.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}