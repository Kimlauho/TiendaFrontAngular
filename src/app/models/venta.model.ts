export interface Venta{
    idVenta: number,
    idCliente: number,
    nombre?: string,
    apellido?: string,
    valorTotal?: number,
    nota?: string,
    estadoNota?: number,
    _DetalleVenta?: DetalleVenta[]
}

export interface DetalleVenta{
    idVenta: number,
    idDetalleVenta: number,
    idProducto: number
    nombreProducto?: string,
    valorUnitario: number,
    nota?: string,
    estadoNota?: number,
}