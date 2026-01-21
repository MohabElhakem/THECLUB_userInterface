import React from "react";
import LoginForm from "../components/forminput.jsx";
import {loginUser} from "../api/user.api.js";
import { useTranslation } from "react-i18next";
import "./login.css"; // import CSS here
import i18n from "../i18n.js"; // correct path to your i18n.js


// The login page is wraped in a function
function Login() {
    const { t } = useTranslation(); // t = function to get translated text

    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [password, setPassword] = React.useState("");

    

    const handleSubmit = async (e) => {
        // prevent the form of reloading the page on submit
        e.preventDefault();
        const fullNumber = "+2" + phoneNumber;

        console.log("Phone Number:", fullNumber);
        console.log("password submitted", password);
        
        // call the loginUser api function to send login request

        try{

            const data = await loginUser({
                    number: fullNumber,
                    password
            })
            onsole.log(data);
            alert(data.message);
        }catch(error){
            console.error("Login failed",error);
            alert(
                error.errors?.join("\n") ||
                message ||
                "Validation failed"
            );
        }
    }



    // Render the LoginForm component and pass props
    return (

        <div className="wrapper">

            <div className= "logo_container">
                <img
                    src="https://res.cloudinary.com/dwevurdds/image/upload/v1768832884/logo_cshy36.png"
                    alt ="the club logo"
                />
            </div>

            <div className="login-container">

                <div className={i18n.language === "ar" ? "rtl" : "ltr"}>
                    <form onSubmit={handleSubmit}>
                        <LoginForm
                            label={ t("phone")}
                            type = "text"
                            name = "number"
                            value = {phoneNumber}
                            placeholder = " 01xx xxxx xxx "
                            onChange = {(e) => setPhoneNumber(e.target.value)}
                        />

                        <LoginForm
                            label= {t("password")}
                            type = "password"
                            name = "password"
                            value = {password}
                            placeholder = {t("passwordPlaceHolder")}
                            onChange = {(e) => setPassword(e.target.value)}
                            
                        />
                        <div className="formsubmitBox">
                        <button type="submit" className="formsubmit">{t("login")}</button>
                        </div>
                    </form>
                </div>
                
                    {/* Language toggle 
                    <button onClick={() => i18n.changeLanguage("en")}>English</button>
                    <button onClick={() => i18n.changeLanguage("ar")}>Arabic</button>
                    */}
                    
            </div>


        </div>
    )
}

export default Login