import { useEffect , useState } from "react";
import FormInput from "../../components/forminput";
import { NewSubCategory } from "../../api/category.api";
import './newSubCategory.css';


function PopNewCatForm ({onClose , id }){
    const [nameValue , setNameValue] = useState("");
    const [verror , setVError] = useState('');

    function ValidateInput(value){
        if(!value.trim()) return "برجاء ادخال اسم للفئه";
        if(value.length < 2) return "الاسم صغير جدا";
    }
    
    async function HandelSubmit (e) {
        try{
            // first thing to do on the submit is to handel the error
            const Validation = ValidateInput(nameValue);
            if (Validation){
                e.preventDefault();
                setVError(Validation);// Error Showes in the form
                return; // stop Submit
            }
            setVError('') // clear Error

            // now validation is over try to submit
            console.log(`sub name: ${nameValue}`)
            const newCategory = await NewSubCategory( id ,{
                name: nameValue
            });
            console.log(newCategory);
        }catch(error){
            console.log(error);
            setVError(error.massage || 'لم يتم اضافه الفئه الفرعيه');
            alert(error.massage || 'لم يتم اضافه الفئه الفرعيه');
        }
    }

   return (
        <div className="popModel-overlay">

            <div className="popModel-content">

                <form onSubmit={HandelSubmit} autoComplete="off">
                    <FormInput
                        label={'اضافه فئه فرعيه'}
                        type= "text"
                        name="name"
                        value={nameValue}
                        placeholder= {`اسم الفئه الفرعيه الجديده`}
                        onChange={(e)=>setNameValue(e.target.value)}
                        error={verror}
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

export default PopNewCatForm