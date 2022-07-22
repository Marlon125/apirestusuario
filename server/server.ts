import express, {Application} from "express";
import cors from "cors";

import rutaUsuarios from '../routes/usuarios';
import db from "../config/db_config";

class Server {
    
    private port: string;
    private app: Application;

    private apiPath = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbconnection();
        this.midlewares();
        this.routes();
    }

    midlewares(){
        //CORS
        this.app.use(cors());
        
        //LECTURA BODY
        this.app.use(express.json());

        //CARPETA PUBLICA
        this.app.use(express.static('public'));
    }

    async dbconnection(){
        try {
            await db.authenticate();
        } catch (error) {
            throw new Error("Error al conectarse a la BD");
            
        }
    }

    routes(){
        this.app.use(this.apiPath.usuarios, rutaUsuarios);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en el puerto "+this.port);
        });
    }
}

export default Server;