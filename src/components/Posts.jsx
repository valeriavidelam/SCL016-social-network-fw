import React from 'react';
import {firebase} from '../firebase';
import {BsHeartFill} from 'react-icons/bs';
import '../styles/Posts.css';


 

function Posts() {

    const [post, setPost] = React.useState('')
    const [posts,setPosts] = React.useState([])
    const [editMode, setEditMode] = React.useState(false)
    const [id, setId] = React.useState('')
    const [error, setError] = React.useState(null)
    const [like, setLike] = React.useState(0)

    React.useEffect(() => { 
        const obtainData = async () => {

            try {

                const db = firebase.firestore ()
                const data = await db.collection('posts').get()
                const arrayData = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                //console.log(arrayData)
                setPosts(arrayData)
            
            } catch (error) {
                console.log(error)   
            }
        
        }
        obtainData()

    }, [])

    const send = async (e) => {
        e.preventDefault()

        if(!post.trim()){
            console.log('empty post')
            setError('Hey! you should write something')
            return
        }

        try {
            
            const db = firebase.firestore()
            const newPost =  {
                name: post,
                like: like,
                date: Date.now()
                
            }
            const data = await db.collection('posts').add(newPost)

            setPosts([
                ...posts,
                {...newPost, id: data.id}
            ])

            setPost('')
            setError(null)

        } catch (error){
          console.log(error)
        }

        console.log(post)
    }


   const deletePost = async (id) => {
       try {

        const db = firebase.firestore()
        await db.collection('posts').doc(id).delete()

        const arrayFilter = posts.filter(item => item.id !== id)
        setPosts(arrayFilter)
        
       } catch (error) {
           console.log(error)
       }
   }

   const  activateEdition = (item) => {
       setEditMode(true)
       setPost(item.name)
       setId(item.id)
       setLike(item.like)
   }

   const edit = async (e) => {
       e.preventDefault()
       if(!post.trim()){
        console.log('empty post')
        setError('Hey! you should write something')
        return
    }
    try {

        const db = firebase.firestore()
        await db.collection('posts').doc(id).update({
            name: post
        })
        const arrayEdit = posts.map(item => (
            item.id === id ? {id:item.id, date: item.date, name: post, like: like} : item
        ))
        setPosts(arrayEdit)
        setEditMode(false)
        setPost('')
        setId('')
        setError(null)
        setLike(0)

    } catch (error) {
        console.log(error)
    }
   }

    const giveLike = (item) => {
        //console.log('click')
        setLike(like + 1)
    }


  //const giveLike = async (e) => {
  // 
  // if(!post.trim()){
  //     console.log(error)
  //     return
  // }
  // try {
  //     const db = firebase.firestore()
  //     await db.collection('posts').doc(id).update({
  //         like: like
  //     })
  //     const arrayEdit = posts.map(item => (
  //         item.id === id ? {id:item.id, date: item.date, name: post, like: like} : item
  //     ))
  //     setPosts(arrayEdit)
  //     setEditMode(false)
  //     setPost('')
  //     setId('')
  //     setError(null)
  //     setLike(like + 1)

  // } catch (error) {
  //     console.log(error)
  // }
  //    }

    return (
        <div className="divAddPost">
            <hr/>
            <div className= "row-3">
                <div className="md-5">
                    <h3>
                        {
                            editMode ? 'Edit your post here' : 'Do you want to say something?'
                        } 
                    </h3>
                    <form onSubmit={editMode ? edit : send}>

                        {
                            error ? <span className="text-danger">{error}</span> : null
                        }

                        <input 
                        type="text"
                        placeholder="Write here your post and Chinchin!"
                        className="form-control mb-2"
                        onChange={e => setPost(e.target.value)}
                        value={post}
                        />
                        <button 
                        className={
                            editMode ? 'btn btn-warning btn-lg btn-block' : 'btn btn-success btn-block'
                        }
                        type="submit"
                        > 
                        {
                            editMode ? 'EDIT' : 'SEND' 
                        }
                        </button>
                    </form>
                </div>
                <hr/>
                     <div className="divPosts">
                     <h4 className="text-center">MOST RECENTLY</h4>
                        <ul className="list-group">
                            {
                                posts.length === 0 ? (
                                    <li className="list-group-item">It's so pity, you don't have posts yet. Snif!</li>
                                ) : (
                                    posts.map(item => (
                                        <li className="list-group-item" key={item.id}>
                                        {item.name}
                                    
                                        <button 
                                        className="btn btn-default mx-2"
                                        onClick={() => giveLike(item)}
                                        >
                                           <BsHeartFill/> {like}
                                        </button>
                                        
                                        <button 
                                        className="btn btn-success btn-sm float-right"
                                        onClick={() => activateEdition(item)}
                                        >
                                            EDIT
                                        </button>
                                        <button 
                                        className="btn btn-danger btn-sm float-right mx-2"
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


