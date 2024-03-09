//here will be the routes
import {startServerAndCreateNextHandler} from "@as-integrations/next";
import mongoose from "mongoose"
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";

const uri = process.env.CONNECT_URI;

const connectDB = async () => {
    try{
        if(uri){
            await mongoose.connect(uri);
            console.log("Connected to the database!")
        }

    }catch(err){
        console.error(err)
    }
};
//call this function 
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers
})