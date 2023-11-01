import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, faCaretDown } from "@fortawesome/free-solid-svg-icons";



export const Dropdown = ({placeHolder, options}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const handleSelect = (option) => {
        setSelected(option);
    }

    return (
        <div className="flex flex-col items-center w-full">
            <div onClick={() => setOpen(!open)} className="text-md xl:text-xl text-start py-2 lg:p-1 lg:mx-1 xl:p-4 xl:mx-2 flex flex-col justify-between w-full hover:text-gray-100"> 
            <div className="flex flex-row justify-between items-center p-2 cursor-pointer">
                {selected ? selected.label : placeHolder} <FontAwesomeIcon icon={faCaretDown} className={open ? "" : "-rotate-90"}/>
            </div>
                <ul className={`flex-grow items-center lg:items-start text-xl text-start justify-start flex-col divide-y divide-kuning divide-opacity-70 ${open ? "flex pt-4 " : "hidden"}`}>
                    {options.map((option) => (
                        <li 
                            key={option.value}
                            className="text-base xl:text-md text-start p-2 lg:p-1 lg:mx-1 xl:p-4 xl:mx-2 flex items-center justify-between cursor-pointer  w-full hover:text-gray-400"
                            onClick={() => handleSelect(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
    
}