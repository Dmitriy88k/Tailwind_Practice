import { useState } from "react";

const Button = () => {

    const [showInput, setShowInput] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [showName, setShowName] = useState(false);
    const [job, setJob] = useState("");

    const handleOnClick = () => {
        setShowInput(!showInput);
        setShowSubmitButton(!showSubmitButton);
    }

    const inputOnChange = (e) => {
        setNameInput(e.target.value);
    }

    const submitOnClick = () => {
        if (nameInput.trim() !== "") {
            setShowName(nameInput);
            setNameInput("");
        }
    }

    const jobOnChange = (event) => {
        setJob(event.target.value)
    }

    

  

    return (
        <div className="text-center my-5 flex flex-col justify-center w-50 mx-auto">
            <button onClick={handleOnClick} className="bg-blue-500 px-3 py-1 text-white rounded-xl cursor-pointer">Show Input</button>
            { showInput && (
                <input type="text" value={nameInput} onChange={inputOnChange} placeholder="Type Name" className="text-center mt-4 border border-gray-300 px-2 py-1 rounded my-3"></input>
                
            )}

            {showSubmitButton && (
                <button onClick={submitOnClick} className="bg-green-500 px-3 py-1 text-white rounded-xl cursor-pointer">
                    Submit
                </button>
            )}
            {  showName && (
                <p>Hey {showName}, How are you?</p>
            )
            }

            <br />
            <select value={job} onChange={jobOnChange} className="border-2 px-3 py-1 my-4">
                <option value="">Choose your job</option>
                <option value="Police">Police</option>
                <option value="Emergency">Emergency</option>
                <option value="Firefighters">Firefighters</option>
            </select>
            <p>Welcome to the <span className="font-bold">{job}</span> team</p>

            <br />
            
            <hr className="border-0 border-b-4 border-b-blue-400 mb-5"/>

        </div>
    )
}

export default Button;