import { Socket } from 'socket.io';
import { UsuariosLista } from '../Clases/usuarios-lista';
import { Usuario } from '../Clases/usuario';


export const usuariosConectados = new UsuariosLista();

//conectar clientes
export const conectarCliente = (cliente: Socket) => {
    const usuario=new Usuario(cliente.id);
    usuariosConectados.agregar(usuario); 
}
//Desconectar clientes
export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
        usuariosConectados.borrarUsuario(cliente.id);
    })
}

//escuchar mensajes
export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('mensaje', (payload: { de: string, cuerpo: string }) => {
        console.log('Mensaje Recibido', payload);
        io.emit('mensaje-nuevo', payload);

    })
}

//Configurar usuarios
export const ConfigurarUsuario = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('configurar-usuario', (payload: { nombre: string }, callback: Function) => {
  usuariosConectados.actualizarNombre(cliente.id,payload.nombre);
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        })


    })
}                                                             