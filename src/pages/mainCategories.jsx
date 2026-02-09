import React from "react";
import { useEffect , useState } from "react";
import LoadingDots from '../helpers/loadingDots'
import DisplayCard from "../components/displayCard";
import PopUpForm from "../views/category/newCategory";
import './mainCategories.css';
import { authMe } from "../api/user.api";
import {MainCategories} from '../api/category.api';
import { useNavigate } from "react-router-dom";
import './layout.css'
import Headerlayout from "../components/Header.jsx";



function MainCategoriesPage() {
  const [loading , setLoading] = useState(true)
  const [categories , setCategories] = useState([]);
  const [userRole , setUserRole] = useState('')
  const [showForm , setShowForm] = useState(false);
  const navigate = useNavigate();

  // useEffect to stimulate the feteching of the data
    useEffect(()=>{
      
      // fetech data for the server
      const fetchData = async()=>{
        try{
          const Me = await authMe();
          if (Me.stay === false){
            alert("يرجي تسجيل الدخول مره اخري")
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

  //
  //
  //
  //
  //
  //
  //
  // This useEffect to stop the scrolling
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

  ////
  ////
  ////
  ////
  ////
  ////
  ////

  if(loading){
    return (
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
    
      <div className="PageContent">


          {userRole === "ADMIN" && (
            <div className="adminbutton-wrapper">
              <button
              onClick = {()=>setShowForm(true)}>
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

        {/* Do this when he hit the button */}
        {showForm && (
          <PopUpForm onClose={()=> setShowForm(false)}/>
        )};

      </div>


    </div>
  )

}



export default MainCategoriesPage;