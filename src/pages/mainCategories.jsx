import React from "react";
import { useEffect , useState } from "react";
import LoadingDots from '../helpers/loadingDots'
import DisplayCard from "../components/displayCard";
import './mainCategories.css'
import { authMe } from "../api/user.api";
import {MainCategories} from '../api/category.api'
import { useNavigate } from "react-router-dom";





function MainCategoriesPage() {
  const [loading , setLoading] = useState(true)
  const [categories , setCategories] = useState([]);
  const [userRole , setUserRole] = useState('')
  const navigate = useNavigate();

  // useEffect to stimulate the feteching of the data
    useEffect(()=>{
      
      // fetech data for the server
      const fetchData = async()=>{
        try{
          const Me = await authMe();
          if (Me.stay === false){
            alert("يرجي تسجيل الدخول مره اخري")
            //await new Promise(resolve => setTimeout(resolve,2000));
            navigate('/user/login')
            return; // stop here
          }
          setUserRole(Me.role);


          //fetech the category array
          const Array = await MainCategories()
          setCategories(Array.categoriesArray);

          setLoading(false);
        }catch(err){
          console.log(err)
          navigate('/server/issue')
        }
      }
      fetchData();
    },[])
   

    /*
    // fetech data for testing
    const test = async()=>{
      try{
        // featch the real data
        await new Promise(resolve => setTimeout(resolve,2000));
        setUserRole("ADMIN");

        //stimulate  the data feteched
        // the logic for the fetch 
        const data = [
          {id: "1" , name:"الكترونيات"},
          {id: "2" , name:"عفش"},
          {id: "3" , name:"العاب"},
          {id: "4" , name:"ماكولات"},
          {id: "5" , name:"ماكولات"},
          {id: "6" , name:"ماكولات"},
          {id: "7" , name:"ماكولات"},
          {id: "8" , name:"ماكولات"},
          {id: "9" , name:"ماكولات"},
        ]
        setCategories(data);

        setLoading(false);

      }catch(error){
        alert("somtheing went wrong see the console");
      }
    }
    test()

  },
  // the [] is to tell the useEfect when to start
    []
  )
  */
  


  if(loading){
  return (
    <div className="category-page-loading">
      <div className="loadingDots-wrapper">
        <LoadingDots/> 
      </div>
    </div>
  )
  }
  return(
    <div className="category-page">
      <header className="header-wrapper">
        <h1>الفئات</h1>
        <img src="https://res.cloudinary.com/dwevurdds/image/upload/v1769443811/IMG_4818_mpuejx.jpg" alt="icon" />
      </header>

      {userRole === "ADMIN" && (
        <div className="adminbutton-wrapper">
        <button
          className="admin-button"
          onClick={()=> navigate('/test2')}
        >
          اضافه فئه
        </button>
        </div>
      )}

      <div className="categorycard-wrapper">
        {categories.map((cat) => (
        <DisplayCard
          key={cat.id}
          id={cat.id}
          label={cat.name}  // <-- name property
        />
      ))}
      </div>
    </div>
  )

}



export default MainCategoriesPage;