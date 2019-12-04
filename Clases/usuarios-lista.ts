import { Usuario } from "./usuario";

export class UsuariosLista{
    private lista:Usuario[]=[];
    constructor(){}
    
    public agregar(usuario:Usuario){
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
        
    }
    public actualizarNombre(id:string, nombre:string){
        for(let usuario of this.lista){
            if (usuario.id==id) {
                usuario.nombre=nombre;
                break;
                
            }
        }
        console.log('======== Atualizando usuario =======');
        console.log(this.lista);
        
    }

    //obtener lista
    public getLista(){
        return this.lista;
    }

        //obtner un usuario epecifico  
    public getUsuario(id:string){
        return this.lista.find(Usuario =>{
            Usuario.id===id
        });
        }

        //obtener usuario en una sala en particular
        public getUsuariosEnSala(sala:string){
            return this.lista.filter (Usuario =>Usuario.sala ===sala);
        }
        //borras un usuario
        public borrarUsuario(id:string){
            const tempUsuario=this.getUsuario(id);
            this.lista=this.lista.filter(Usuario =>{
                return Usuario.id!== id;
            })
        return tempUsuario;
            

        }
}