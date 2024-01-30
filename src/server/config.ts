//process.env
//holds enviorment variables set before running server

const env = process.env

export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;


export const MONGODB_URI = env.MONGOFB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

console.log("Config...");


export default{
    PORT,
    HOST,
    SERVER_URL,
}


/*we can export functions too
export default () => ({
    test:true,
});
*/

//export const PORT = "8080";

//export default{
//    test: true,
//};

