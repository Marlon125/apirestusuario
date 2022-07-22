// export const nombre = 'Pedro';
// console.log(nombre)
import dotenv from "dotenv";
import Server from "./server/server";
dotenv.config();

const server = new Server;
server.listen();