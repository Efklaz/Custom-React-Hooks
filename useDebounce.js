import {useCallback, useRef} from "react";

export  default function useDebounce(callback, delay) {
    let timer = useRef()
    let debounced = useCallback((...args)=>{
        if(timer.current){
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(()=>{
            callback(...args)
            console.log(...args)
        }, delay)

    },[callback, delay])
    return debounced
}