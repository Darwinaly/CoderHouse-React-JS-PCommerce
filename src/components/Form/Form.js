import React from "react";
import { useState} from "react"
import { useForm } from "react-hook-form";
import './Form.css'

export default function Form({newBuyer}) {  


    const { register, handleSubmit, formState: { errors } } = useForm();

    const[buyer, setBuyer] = useState()

    const onSubmit = (data, e) => {
        console.log(data);
        setBuyer(data)
        e.target.reset()
        
    } 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="tituloForm">ORDEN DE COMPRA</h3>

            <input placeholder="Nombre" className="inputName" {...register("Nombre", { required: true })}/>
            {errors.Nombre && <span className="spanAlert">Nombre requerido</span>}
        
            <input placeholder="Telefono" className="inputTelefono"type="number"{...register("Telefono", { required: true })} />
            {errors.Telefono && <span className="spanAlert">Telefono requerido</span>}

            <input placeholder="Email" className="inputEmail" {...register("Email", { required: true })}/><br></br>
            {errors.Email && <span className="spanAlert">Email requerido</span>}

            <button className="submitForm" onClick={() => newBuyer(buyer)}>Enviar</button> 
        </form>
    );
}

