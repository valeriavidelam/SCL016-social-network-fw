import React from 'react';

const Posts = (props) => {

    const {image, title,text} = props

    return ( 
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <button className="btn btn-primary">Ver más</button>
            </div>
        </div>
     );
}
 
export default Posts;