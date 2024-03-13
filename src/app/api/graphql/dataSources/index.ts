//This facilitates the interaction between our application and the mongoDB database
import UserSchema from "../models/UserSchema";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";


interface UserDocument {
_id: ObjectId,
name: string,
password: string,
email: string,
interests: [string]
}

export default class Users extends MongoDataSource<UserDocument> {
 
    //Function to fetch all the users
     fetchAllUsers = async () => {
        try{
            return await UserSchema.find();
        }catch(err){
           throw new Error("Failed to fetch the users")
        }
    }


    //Function for creating a new user 
     createUser = async (input: any) => {
        try{
           return await UserSchema.create({ ... input})
        }catch(err){
            throw new Error("Failed to create a new user")
        }
     }
}