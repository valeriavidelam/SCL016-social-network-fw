import React from 'react';


const Profile = () => {

    const image = ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8L56SYbTj0Bm7oJgVkWkHyf1SNMkdThR5tV3tNDclqHWGgWP-1Q-_9KMRUjkkMoy9S0&usqp=CAU')

    return (
        <div className="row justify-content-center">
            <div className="d-grid gap-2 mt-5">
            <img src={image} alt=""/>
            <h2> Nombre Apellido</h2>
            <h6> correo@correo.cl</h6>

            
            </div>
        </div>
    )
}

export default Profile
