import React from 'react'
const Card=()=>{
    return(
        <>
        <div className="card">
            {/* <img src="./images/book.png" alt="" /> */}
            <img src="./images/book.jpg" alt="" />
            
            <div className="bottom">
                <h3 className="title">React js</h3>
                <p className="amount">&#8377; 33333</p>
            </div>
        </div>
        </>
    )
}
export default Card;