import React from "react";
import { useState} from "react"
import { useForm } from "react-hook-form";
import './Form.css'


export default function Form({newBuyer}) {  


    const { register, handleSubmit, formState: { errors } } = useForm();

    const[buyer, setBuyer] = useState()

    const onSubmit = (data, e) => {
        newBuyer(data)
        setBuyer(data)
        e.target.reset()
    } 


    return (
        <div>
            {buyer === undefined
            ?   <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="tituloForm">ORDEN DE COMPRA</h3>
        
                    <input placeholder="Nombre" className="inputName" {...register("Nombre", { required: true })}/>
                    {errors.Nombre && <span className="spanAlert">Nombre requerido</span>}
                
                    <input placeholder="Telefono" className="inputTelefono"type="number"{...register("Telefono", { required: true })} />
                    {errors.Telefono && <span className="spanAlert">Telefono requerido</span>}
        
                    <input placeholder="Email" className="inputEmail" {...register("Email", { required: true })}/><br></br>
                    {errors.Email && <span className="spanAlert">Email requerido</span>}
        
                    <button className="submitForm" >Cargar datos personales</button>
                </form>
            :   <div className="datosForm">
                    <h1 className="datosFormH1">Informacion de contacto</h1>
                    <h2 className="datosFormH2">Nombre: {buyer.Nombre}</h2>
                    <h2 className="datosFormH2">Telefono: {buyer.Telefono}</h2>
                    <h3 className="datosFormH3">Email: {buyer.Email}</h3>
                </div>}
        </div>
    );
}