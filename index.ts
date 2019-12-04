import Server from "./Clases/Server";
import { SERVER_PORT } from "./global/enviroments";
import router from "./routes/router";
import bodyParser, { json } from 'body-parser';
import cors from 'cors';

const server = Server.instance;
//body-parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//CORS  
server.app.use(cors({origin:true ,credentials:true}));
//Rutas de servicios
server.app.use('/',router);
server.start ( ()=>{
    console.log(`Servidor Corriendo en el puerto ${SERVER_PORT}`);
})