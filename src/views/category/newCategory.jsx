import React from "react";
import { useState } from "react";
import FormInput from "../../components/forminput";
import { NewCategory } from "../../api/category.api";
import './newCategory.css'


function PopUpForm ({onClose}){

    const [nameValue , setNameValue] = useState("")

    const handelSubmit = async (e)=>{
        try {
            console.log(`the name of the new category is: ${nameValue}`);
            const newCategory = await NewCategory({
                name: nameValue
            })
            console.log(newCategory)
        } catch (error) {
            console.log(error);
            alert('لم يتم اضافه الفئه')
        }
    }

    return (
        <div className="popModel-overlay">

            <div className="popModel-content">

                <form onSubmit={handelSubmit} autoComplete="off">
                    <FormInput
                        label={'اضافه فئه رئسيه'}
                        type= "text"
                        name="name"
                        value={nameValue}
                        placeholder= "اسم الفئه"
                        onChange={(e)=>setNameValue(e.target.value)}
                    />
                    <div className="popModel-action">
                        <button type="submit" className="popModel-submit">✔︎</button>
                        <button type="button"
                                className="popModel-close"
                                onClick={onClose} >✖︎</button>
                    </div>
                </form>
            </div>


        </div>
    )
}


export default PopUpForm

