import React from 'react';
import shortid from 'shortid'; //este se elimina cuando ponga el de firebase
 
//Todo lo que está creado con id aleatorio hay que cambiarlo después por id Firebase.
//Lo hice así mientras tanto como primera prueba a ver si funciona crear mensaje 
//y si permite editar y eliminar post.

function Posts() {

    const [post, setPost] = React.useState('')
    const [posts,setPosts] = React.useState([])
    const [editMode, setEditMode] = React.useState(false)
    const [id, setId] = React.useState('')
    const [error, setError] = React.useState(null)

    const addPost = e => {
        e.preventDefault()
        if(!post.trim()){(
            //alert("Empty post")
            setError('Please, write something!')
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
       setError(null)
    }

    const deletePost = id => {
        const arrayFilter = posts.filter(item => item.id !== id)
        setPosts(arrayFilter)
    }
    
    const edit = item => {
        console.log(item)
        setEditMode(true)
        setPost(item.namePost)
        setId(item.id)
    }

    const editPost = e => {
        e.preventDefault()
        if(!post.trim()){
            console.log('Empty post')
            setError('Please, write something!')
            return
        }

        const arrayEdit = posts.map(
            item => item.id === id ? {id:id, namePost:post} : item
            )
        
            setPosts(arrayEdit)
            setEditMode(false)
            setPost('')
            setId('')
            setError(null)

        }

        return (
            <div className= "container mt-5">
                <hr/>
                <div className="row-3">
                    <div className="col-13 px-md-5">
                        <h4 className="text-center">
                            {
                                editMode ? 'Edit your post' : 'Add new Post'
                            }
                        </h4>
                            <form onSubmit={editMode ? editPost : addPost}>

                                {
                                    error ? <span className="text-danger">{error}</span> : null
                                }
                     
                                <input 
                                type="text" 
                                className="form-control mb-2"
                                placeholder="Write here your post and Chinchin!"
                                onChange={ e => setPost(e.target.value)}
                                value={post}
                                />

                            {
                                editMode ? (
                                       <button className="btn btn-warning btn-lg btn-block" type="submit">Edit</button>
                                    ) : (
                                       <button className="btn btn-success btn-block" type="submit">SEND</button>
                                    )
                            }
                         
                            </form>
                    </div>
                        <hr/>
                    <div className="col px-md-5">
                        <h4 className="text-center">MOST RECENTLY</h4>
                        <ul className="list-group">
                        {

                            posts.length === 0 ? (
                                <li className="list-group-item">Not post yet ;c . Be the first!</li>
                            ) : (
                                posts.map(item => (
                                    <li className="list-group-item" key={item.id}>
                                        <span className="lead"> {item.namePost}</span>
                                        
                                        <button 
                                        className="btn btn-danger btn-sm float-right mx-2"
                                        onClick={() => edit(item)}
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
                            )
                                    
                            }
                        

                        </ul>
                    </div>
                </div>
            </div>
        );
}

 
export default Posts;