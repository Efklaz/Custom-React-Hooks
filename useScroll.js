import {useEffect, useRef} from "react";

export default function useScroll(parentRef, childRef, callback, loading){
    let observer = useRef(null);
    useEffect(()=>{
        const option = {
            root: parentRef.current,
            threshold: 0,
            rootMargin: '0px'
        }
        observer.current = new IntersectionObserver(([target]) =>{
            if (target.isIntersecting && !loading) {
                console.log('Intersecting', loading);
                callback()
            }

        }, option)
        observer.current.observe(childRef.current)
        return ()=>{
            observer.current.unobserve(childRef.current)

        }

    }, [callback, loading]);
}