import { useState,useEffect } from "react";

function useDebounce(value,delay) {
    const [debounceValue,setDebouce] = useState(value)
    
    useEffect(()=>{
       const handler = setTimeout(()=>{setDebouce(value)},delay)  
       return ()=>{clearTimeout(handler)}
       
    },[value])

    return debounceValue 
}

export default useDebounce;