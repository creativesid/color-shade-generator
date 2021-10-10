import React, { useEffect, useState } from 'react'
import Values from 'values.js'
import isColor from 'is-color'
import Shade from './Shade'

const Shades = ({color}) => {
    const [shades,setShades] = useState([])

    useEffect(()=>{
       if(isColor(color)){
            createShades();
       }
    },[color]);

    const createShades = () =>{
        const ColorShades = new Values(color).shades(1);
        setShades(ColorShades)
        console.log(ColorShades);
    }

    return (
        <div className="shades">
            {
                shades.map((shade)=> {
                    return(
                        <Shade shade={shade} />
                    )
                })
            }
        </div>
    )
}

export default Shades
