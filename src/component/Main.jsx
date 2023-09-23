import React, { useState } from 'react'
import Card from './Card';
import axios from 'axios'

const Main = () => {
    const [search,setSearch]=useState("")
    const searchBook=(evt)=>{
        if(evt.key=="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q=react'+search+'&key=AIzaSyCWU22MDdb0I_gFmI5vHn4rzXBgYaufxQs')
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
        }
    }
    
    return (
        <>
            <div className="header">

                <div className="row1">
                    <h1>A room lacking books is comparable<br /> to a soulless body</h1>
                </div>

                <div className="row2">
                    <h2>find your books</h2>
                    <div className="search">
                        <input type="text" placeholder='enter book to search' value={search} onChange={(e)=>{setSearch(e.target.value)}} onKeyPress={searchBook} />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>

        </>
    )
}

export default Main;