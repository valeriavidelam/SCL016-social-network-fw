import React from 'react';
import shortid from 'shortid'; //este se elimina cuando ponga el de firebase
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
    const [posts,setPosts] = React.useState([])

    const addPost = e => {
        e.preventDefault()
        if(!post.trim()){(
            alert("Empty post")
        );
            return
        }
        console.log(post)

        setPosts([
            ...posts,
            {id: shortid.generate(), namePost:post}
            //Acá hay que reemplazar el id de shortid.generate por el de firebase
            //este fue hecho mientras para generar los posts
        ])

       setPost('')
    }

    const deletePost = id => {
        const arrayFilter = posts.filter(item => item.id !== id)
        setPosts(arrayFilter)
    }
        
    return (
        <div className= "container mt-5">
            <h1 className="text-center"> NEW POST</h1>
            <hr/>
            <div className="row-3">
                <div className="col-13 px-md-5">
                     <form onSubmit={addPost}>
                     
                         <input 
                         type="text" 
                         className="form-control mb-2"
                         placeholder="Write here your post and Chinchin!"
                         onChange={ e => setPost(e.target.value)}
                         value={post}
                         />
                         <button className="btn btn-dark btn-block float-right" type="submit">SEND</button>
                     </form>
                </div>
                <hr/>
                <div className="col px-md-5">
                    <h4 className="text-center">MOST RECENTLY</h4>
                    <ul className="list-group">
                        {
                            posts.map(item => (
                                <li className="list-group-item" key={item.id}>
                                <span className="lead"> {item.namePost}</span>
                                <button 
                                className="btn btn-danger btn-sm float-right mx-2"
                                //onClick={() =>}
                                >
                                    EDIT
                                </button>
                                <button 
                                className="btn btn-warning btn-sm float-right"
                                onClick={() => deletePost(item.id)}
                                >
                                     DELETE
                                </button>
                            </li>        
                            ))
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
}

 
export default Posts;