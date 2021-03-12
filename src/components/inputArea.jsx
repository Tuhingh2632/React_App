import React,{useState} from "react";

const InputArea = (props)=>{
    const [inputText,setinputText] = useState('');
    const handlechange = (event)=>{
        const newValue = event.target.value;
        setinputText(newValue);
    }
    return(
        <div className="form">
            <input type="text" onChange={handlechange} value={inputText}/>
            <button onClick={()=>{
                props.onAdd(inputText);
                setinputText("");
            }}><span>Add</span></button>
        </div>


    )
}

export default InputArea;