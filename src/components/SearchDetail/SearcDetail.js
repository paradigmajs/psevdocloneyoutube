import React, { Component } from 'react'



export default function SearcDetail(props) {
    return (
        <div>
             <div>
                <iframe 
                    width="948" 
                    height="533" 
                    src={"https://www.youtube.com/embed/"+props.match.params.video} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}


