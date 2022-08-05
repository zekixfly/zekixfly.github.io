import React from 'react'
import './index.css'

export default function Square(props) {    
    return (
        <button       
            className = {props.className}
            onClick = {props.onClick}
        >        
            {props.value}
        </button>    
    );
}