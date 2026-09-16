import { Router } from "express";
import {RegistrarProductos,ModificarProducto}from '../Controller/Productos'

const Rutas=Router()

Rutas.post('/Registrar',RegistrarProductos)
Rutas.put('/Modificar/:id',ModificarProducto)

export default Rutas