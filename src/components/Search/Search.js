import React, { Component } from 'react'


export default function Search(props) {
    return (
        <div>
            
                <input 
                    value={props.value} 
                    onChange={(event)=>
                        props.onChangeValue(event)
                    }

                />
                <button
                    onClick={props.searchVideoByValue}
                >Search</button>
            
        </div>
    )
}

