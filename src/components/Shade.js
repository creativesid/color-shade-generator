import React, { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Shade = ({shade}) => {
    const [iscopied, setIscopied] = useState(false)
    useEffect(()=>{
        let interval;
        if(iscopied){
            interval = setTimeout(()=>{
                setIscopied(false);
            },1000);
            return ()=>{
                clearInterval(interval);
            }
        }
    },[iscopied])

    return (
        <CopyToClipboard text={shade.hexString()} onCopy={()=> setIscopied(true)}>
            <div className="shade" 
            style={{backgroundColor: shade.hexString()}}>
                    {
                        iscopied ? <span className="copied">Copied !</span>
                        : <span>{shade.hexString()}</span>
                    }
            </div>
        </CopyToClipboard>
    )
}

export default Shade
