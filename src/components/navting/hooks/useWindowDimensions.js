import {useState, useEffect} from 'react';

export default function useWindowDimensions() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
  
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  
    useEffect(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    },[])
    useEffect(() => {
    if (window) {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }
    });
  
    return {
      width,
      height,
    }
  }