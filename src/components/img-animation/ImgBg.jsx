
import React, {useState, useEffect} from 'react'
import './ImgBg.css';
import { assets } from '../../assets/assets'

const ImgBg = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll=()=>{
            setScrollY(window.scrollY);  
        };
        window.addEventListener("scroll", handleScroll);

        return  () =>{
            window.removeEventListener("scroll", handleScroll);

        };
    }, []);

    const calculatePosition = (scrollY)=>{
        const amplitude = 100;
        const frequency = 0.01;
        return amplitude * Math.sin(frequency * scrollY);

    };

    return(
        <img src={assets.PitahayaBack} alt="Pitahaya Animated" 
        className='curved-image'
        style={{
            transform: `translate(${calculatePosition(scrollY)}px, ${scrollY}px)`,
        }}
        />

    )
  
}

export default ImgBg
