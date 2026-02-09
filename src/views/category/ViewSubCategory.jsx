import { useState, useEffect } from "react";
import DisplayCard from "../../components/displayCard";
import PopNewCatForm from "./newSubCateory";


function ViewSubCat ({children , ME , parentID}) {

    const[showForm, setShowForm] = useState(false);
    const handleOpenForm = () => {
        setShowForm(true); // ← click changes the state
    };
    const handleCloseForm = () => {
        setShowForm(false); // ← form can call this to hide itself
    };



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




    return(
        <div className="VSC-layout">
            {ME === "ADMIN" && (
                <div className="adminbutton-wrapper">
                    <button
                        className="admin-button"
                        onClick={handleOpenForm}
                    >
                    اضافه فئه
                    </button>
                </div>
            )}

            <div className="categorycard-wrapper">
                {children.map((cat) => (
                    <DisplayCard
                        key={cat.id}
                        id={cat.id}
                        label={cat.name}  // <-- name property
                    />
                ))}
            </div>

            {showForm === true && (
                <PopNewCatForm
                onClose={handleCloseForm}
                id = {parentID}
                />
             )}
        </div>

    )

}

export default ViewSubCat;