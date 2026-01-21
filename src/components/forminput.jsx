import "./forminput.css"

export function FormInput({ label, type, name ,value, placeholder, onChange }) {
    // FormInput = functional component
    // Props: label, type, prefix, placeholder ,value and name (all passed from parent)

    return (
        <div className="formcombox"> 
            {/* Container for the input and its label */}
            
            <label className="form-label">{label}</label>
            {/* Label displayed above or next to the input */}

            <div className="inputbox">

            <input 
                type={type} 
                value={value}
                name = {name}
                onChange={onChange} 
                placeholder={placeholder}
            />
            {/* 
                type = input type (text, email, password, etc.)
                value = controlled input (comes from state)
                onChange = update state when user types
                placeholder = hint text inside input
            */}
            </div>
        </div>
    );
}

export default FormInput; 
// Export default so you can import it easily in other files
