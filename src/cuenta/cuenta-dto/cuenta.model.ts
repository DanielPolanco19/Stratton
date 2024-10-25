import mongoose from "mongoose"
export const CuentaSchema =new mongoose.Schema(
    {
        tipo: String,
        monto: Number,
    }

)

export interface Icuenta extends mongoose.Document{
    tipo: string;
    monto: number;
}