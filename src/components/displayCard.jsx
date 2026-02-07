import { useNavigate } from "react-router-dom";


const DisplayCard = ({id , label}) => {

    const navigate = useNavigate();

    const handleClick = ()=> {
        navigate(`/categories/${id}`)
    }
    return (
        <button 
            type="button"
            onClick = {handleClick}
            className = "displayCard"
        >
            {label}
        </button>
    );
};

export default DisplayCard