import React, { Component } from 'react'

export default class SearcDetail extends Component {
    render() {
        return (
            <div>
                <iframe 
                    width="948" 
                    height="533" 
                    src={"https://www.youtube.com/embed/"+this.props.match.params.video} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        )
    }
}
