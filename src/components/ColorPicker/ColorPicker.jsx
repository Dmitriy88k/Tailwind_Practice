import { useState } from "react";



const ColorPicker = () => {
    const [color, setColor] = useState("#0b83f4");

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            
            <div className="w-80 h-36 rounded-lg flex justify-center items-center border-4 border-gray-300 shadow-md mb-5 duration-75" style={{ backgroundColor : color }}>
                
                <h2 className="text-center text-amber-50 font-bold">{color}</h2>
            </div>
            <label htmlFor="">Please pick a color</label>
            <input type="color" value={color} onChange={handleColorChange} className="w-20 h-10 text-amber-50 border-2 border-gray-400 shadow-md mb-5 p-0.5"/>
        </div>
    )
}

export default ColorPicker;


