import React from 'react';

 /*const Posts = (props) => {

    const {image, title,text} = props

   return ( 
        <div className="card" style={{width: "18rem"}}>
            Acá va el post
            <img src={image} className="card-img-top img-thumbnail" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <button className="btn btn-primary">Ver más</button>
            </div>
        </div>
     );
}*/

function Posts() {

    const [post, setPost] = React.useState('')

    const addPost = e => {
        e.preventDefault()
        if(!post.trim()){
            console.log("Empty post")
            return
        }
        console.log(post)
       setPost('')
    }

    return (
        <div className= "container mt-5">
            <h1 className="text-center"> Your Wall</h1>
            <hr/>
            <div className="row">
                <div className="col-8">
                    <h4 className="text-center">Lista de  Comentarios</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="lead"> Your last post</span>
                            <button className="btn btn-danger btn-sm float-right mx-2">Remove</button>
                            <button className="btn btn-warning btn-sm float-right">Edite</button>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4 className="text-center">Formulario</h4>
                    <form onSubmit={addPost}>
                        <input 
                        type="text" 
                        className="form-control mb-2"
                        placeholder="Write new post"
                        onChange={ e => setPost(e.target.value)}
                        value={post}
                        />
                        <button className="btn btn-dark btn-block" type="submit">New post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

 
export default Posts;