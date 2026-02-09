import './ViewNaturalCategory.css';
import { useState ,useEffect } from 'react';
import PopNewCatForm  from './newSubCateory.jsx';
//--------------------------------------------
// View the options of a natural categpry
//--------------------------------------------
const ViewNaturalCat = ({ME , id })=>{

    const [showForm , setShowForm] = useState(false);
    const handleOpenSubBox = () => {
        setShowForm(true); // ← click changes the state
    };
    const handleCloseForm = () => {
        setShowForm(false); // ← form can call this to hide itself
    };

    // A use Effect to stop the scrollong
      useEffect(() => {
        if (showForm) {
          // Disable scrolling
          document.body.style.overflow = "hidden";
        } else {
          // Enable scrolling
          document.body.style.overflow = "auto";
        }
    
        // Cleanup just in case component unmounts
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [showForm]);


    if(ME === "ADMIN"){
        return(

            <div className="VNC-wrapper">

                <button>
                <h3>ادخال منتج</h3>
                <p>عند الضغط سوف تقوم باضافه منج لهذه الفئه ، و سوف تكون فئه خاصه بالمنتجات فقط</p>
                </button>

                <button
                onClick={handleOpenSubBox}>
                <h3>ادخال فئه</h3>
                <p>عند الضغط سوف تقوم باضافه فئه فرعيه ، وسوف تكون فئه اب خاصه للفئات المضافه</p>
                </button>

            {/* now for the conditional forms */}
            {showForm === true && (
                <PopNewCatForm
                    onClose={handleCloseForm}
                    id={id}
                />
            )}
            </div>
        )
    } 
    else{
    return(
            <div className="VNC-wrapper">

                <div className='vendor-box'>
                    <p>لم يقوم المسؤل بتحديد هذه الفئه برجاء الانتظار حتي تتم مراجعتها من قبل المسؤل</p>
                </div>

            </div>
        )
    }
}

export default ViewNaturalCat