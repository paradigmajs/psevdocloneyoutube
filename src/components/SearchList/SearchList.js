import React, { Component } from 'react'
import Search from '../Search/Search'
import { API } from '../Constants'
import { Link } from 'react-router-dom'

function RenderVideos(props){
    return(
        <Link to={'/detail/'+props.element.id.videoId}>
            <div>
                <img src={props.element.snippet.thumbnails.high.url} style={{width:'250px', height:'150px'}} alt=""/>
                <span>{props.element.snippet.title}</span>
            </div>
        </Link>
        
    )
}

export default class SearchList extends Component {
    state={
        value:'',
        data:[]
    }

    onChangeValue=(e)=>{
        this.setState({value:e.target.value})
    }

    searchVideoByValue= async ()=>{
        let q = this.state.value
        let resp = await fetch(API+'q=' + q)
        let data = await resp.json()
        console.log(data)
        this.setState({data:data.items})
    }

    render() {
        return (
            <div>
                <Search 
                    onChangeValue = {this.onChangeValue}
                    searchVideoByValue = {this.searchVideoByValue}
                    value = {this.state.value}
                />
                {
                    this.state.data ?
                    this.state.data.map(el=>{
                        return(
                            <RenderVideos element={el}/>
                        )
                    })
                    : null
                }
            </div>
        )
    }
}
