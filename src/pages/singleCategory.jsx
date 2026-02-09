import { useState, useEffect } from "react";
import { FetchCategory } from "../api/category.api";
import { authMe } from "../api/user.api";
import { useNavigate , useParams } from "react-router-dom";
import LoadingDots from "../helpers/loadingDots";
import ViewNaturalCat from "../views/category/ViewNaturalCategory";
import ViewSubCat from "../views/category/ViewSubCategory";
import Headerlayout from "../components/Header";
import './singleCategory.css'
import './layout.css'

function SingleCategory(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [category , setCategory] = useState(null); // for the value of the categories 
    const [children , setChildren] = useState([]); // for getting the subclasses
    const [loading , setLoading] = useState(true); // for the loading status
    const [userRole , setRole] = useState(''); // to render the component ony for admins
    const [Type , setType] = useState('null');
    const [breadcrumb , setBreadcrumb] = useState([])

    // use Effect to featch the dataneeded int this api
    useEffect(()=>{

        //fetch all the important data
        const fetchData = async()=>{

            if(!id){
                alert ('the param in not loding');
                navigate('/server/issue')
                return
            }

            try{
                console.log("in the category page")
                // auth the user first
                const Me = await authMe();
                if(Me.stay === false){
                    alert("يرجي تسجيل الدخول مره اخري");
                    navigate('/user/login');
                    return
                }
                setRole(Me.role);
                
                // get the category seconed 
                const categoryData = await FetchCategory(id);
                console.log(categoryData);
                setCategory(categoryData.category);
                setChildren(categoryData.category.children || [])
                setBreadcrumb(categoryData.breadcrumb ||[])
                // now set the type coming from the backend
                setType(categoryData.Type);
                console.log(categoryData.Type)

            }catch(error){

                console.log(error);
                alert(error.message|| "Error occured")

            }finally{
                setLoading(false) // Allways stop loading
            }
        }
        fetchData()
    }, [id]) 

    /* useEffect(()=>{
        setTimeout( ()=> setLoading(false),100);
        setCategory({
            name: "ملابس"
        })
    },[id]) */;



    if(loading){
        return(
            <div className="loading-page-layout">
            <div className="loadingDots-wrapper">
                <LoadingDots/> 
            </div>
            </div>
        )
    }
    return(
        <div className="PageLayout">

            <Headerlayout 
                Center = "الفئات"
            />
                
            <div className="optinal-header"> 
                {breadcrumb.map((item, index) => {
                    return (
                        <span key={item.id}>
                        {item.name}
                        {index < breadcrumb.length - 1 && " / "}
                        </span>
                    );
                })}
            </div>
            <div className="PageContent">
                {/* First case neither leaf nor a parent */}
                {Type === "nutural" && (
                    <ViewNaturalCat 
                        ME = {userRole}
                        id = {id}
                    />
                )}

                {/* Seconed case a leaf category */}
                {Type === "leaf" && (
                    <h3>its a leaf category</h3>
                )}

                {/* Thired case a parent category */}
                {Type === "sub" && (
                    <ViewSubCat
                        children={children}
                        ME={userRole}
                        parentID = {id}
                    />
                )}

            </div>
        </div>
    )

}

export default SingleCategory