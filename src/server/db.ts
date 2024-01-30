import { MongoClient, Db } from "mongodb"; // Import Db from mongodb

import { MONGODB_URI, DATABASE_NAME } from "./config";

let connectedClient: MongoClient | undefined; // Add type annotation

export const connectClient = async (): Promise<Db> => { // Add return type annotation
    // If already connected, will use that connection
    if (connectedClient) {
        return connectedClient.db(DATABASE_NAME);
    }

    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    // Ping command
    await client.db(DATABASE_NAME).command({ ping: 1 });
    console.info("Connected to MongoDB");

    connectedClient = client;
    return connectedClient.db(DATABASE_NAME);
}

export const stopClient = async (): Promise<void> => { // Add return type annotation
    await connectedClient?.close();
}