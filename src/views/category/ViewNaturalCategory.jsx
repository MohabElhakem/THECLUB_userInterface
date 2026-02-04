import './ViewNaturalCategory.css'
//--------------------------------------------
// View the options of a natural categpry
//--------------------------------------------
const ViewNaturalCat = ({ME , id})=>{
    
    if(ME === "ADMIN"){
        return(
            <div className="VNC-layout">
                <div className="VNC-wrapper">

                    <div className="product-box">
                        <h3>ادخال منتج</h3>
                        <p>عند الضغط سوف تقوم باضافه منج لهذه الفئه ، و سوف تكون فئه خاصه بالمنتجات فقط</p>

                    </div>

                    <div className="sub-box">
                        <h3>ادخال فئه</h3>
                        <p>عند الضغط سوف تقوم باضافه فئه فرعيه ، وسوف تكون فئه اب خاصه للفئات المضافه</p>
                    </div>

                </div>
            </div>
        )
    } 
    else{
        return(
            <div className="VNC-layout">
                <div className="VNC-wrapper">

                <div className='vendor-box'>
                    <p>لم يقوم المسؤل بتحديد هذه الفئه برجاء الانتظار حتي تتم مراجعتها من قبل المسؤل</p>
                </div>

                </div>
            </div>
        )
    }
}

export default ViewNaturalCat