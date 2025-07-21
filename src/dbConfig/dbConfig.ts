import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect("mongodb+srv://youtube:youtube@cluster0.vjcpnew.mongodb.net/");
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to MongoDB");    
        })
        connection.on("error", (err) => {
            console.log("Error connecting to MongoDB");
            console.log(err);
            process.exit();
        })

    } catch (error) {
        console.log("Error connecting to database");
        console.log(error);
    }
}