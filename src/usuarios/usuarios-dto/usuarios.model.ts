import mongoose from "mongoose"

export const UsuariosSchema = new mongoose.Schema(
    {
        Nombre: String,
        Telefono: String,
        Documento: Number,
    }
)
export interface IUsuarios extends mongoose.Document{
    Nombre: string;
    Telefono: string;
    Documento: number;
}
