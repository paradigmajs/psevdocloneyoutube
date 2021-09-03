import React, { useState } from 'react'
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


export default function SearchList() {
    const [data, setData] = useState()
    const [value, setValue] = useState('')
    const onChangeValue=(e)=>{
        setValue(e.target.value)
    }

    const searchVideoByValue= async ()=>{
        let q = value
        let resp = await fetch(API+'q=' + q)
        let data = await resp.json()
        
        setData(data.items)
    }
    return (
        
              <div>
                <Search 
                    onChangeValue = {onChangeValue}
                    searchVideoByValue = {searchVideoByValue}
                    value = {value}
                />
                {
                    data ?
                    data.map(el=>{
                        return(
                            <RenderVideos element={el}/>
                        )
                    })
                    : null
                }
            </div>
        
    )
}
