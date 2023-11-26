// @flow
import {useEffect, useState} from 'react';


export function useHover(ref) {
    const [hovering, setHovering] = useState(false)
    const on = ()=>{
        setHovering(true)
    }
    const off = ()=>{
        setHovering(false)
    }
    useEffect(()=>{
        const node = ref.current;
        if (!node) return
        node.addEventListener('mouseleave', off)
        node.addEventListener('mouseover', on)
        node.addEventListener('mouseenter', on)
        return ()=>{
            node.removeEventListener('mouseleave', off)
            node.removeEventListener('mouseover', on)
            node.removeEventListener('mouseenter', on)
        }
    },[])
    return hovering;
};