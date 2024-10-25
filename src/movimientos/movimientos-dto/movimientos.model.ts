import mongoose from "mongoose"
export const MovimientosSchema =new mongoose.Schema(
    {
        monto: Number,
        fecha: Date,
        telefonoR:Number,
        bancoR:String
    }

)

export interface IMovimientos extends mongoose.Document{
    monto: Number,
    fecha: Date,
    telefonoR:Number,
    bancoR:String
}