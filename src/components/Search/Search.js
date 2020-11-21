import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <input 
                    value={this.props.value} 
                    onChange={(event)=>
                        this.props.onChangeValue(event)
                    }

                />
                <button
                    onClick={this.props.searchVideoByValue}
                >Search</button>
            </div>
        )
    }
}
