import env from "dotenv";
import {MongoClient, ServerApiVersion} from "mongodb";
import {Blog, Log, Post, User} from "./types";

if (process.env.NODE_ENV != 'production') {
    env.config({ path: `.env.development` });
} else {
    env.config();
}

const client = new MongoClient(process.env.MONGO_URL!, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = client.db(process.env.NODE_ENV);

export const blogsCollection = db.collection<Blog>("blogs");
export const usersCollection = db.collection<User>("users");
export const postsCollection = db.collection<Post>("posts");
export const logsCollection = db.collection<Log>("logs");

export const connectDb = async () => {
    try {
        console.log("Mongodb connecting...");
        await client.connect();
        await client.db().command({ping: 1})
        console.log("Mongodb connection status: ok");
    } catch (e: any) {
        console.log("Mongodb connection error: " + e.message);
        await client.close();
    }
}