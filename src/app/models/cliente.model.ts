export interface Cliente{
    idCliente: number,
    cedula: string,
    nombre: string,
    apellido: string,
    telefono: string,
    nota?: string,
    estadoNota?: number
}