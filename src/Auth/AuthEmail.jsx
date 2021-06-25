import React from 'react';
import firebase from 'firebase/app';

const AuthEmail = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [isRegistration, setIsRegistration] = React.useState('true')
    //const db = firebase.firestore()
    const auth = firebase.auth()


    const toProcessData = e => {
        e.preventDefault()
        if(!email.trim()){
            //console.log('Enter email')
            setError('Enter email')
            return
        }
        if(!pass.trim()){
            //console.log('Enter Paswword')
            setError('Enter Paswword')
            return
        }
        if(pass.length < 6){
            //console.log('Password must be greater than 6 characters')
            setError('Password of 6 characters or more')
            return
        }

        //console.log('Pasando todas la validaciones1')        
        setError(null)

        if(isRegistration){
            toRegister()
        }

    }

    const toRegister = React.useCallback(async() => {

        try {
            const answer = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(answer)

        } catch (error) {
            //console.log(error)
            setError(error.message)
        }

    },[auth, email, pass])

    return (
        <div className="mt-5">
            <h3 className="text-center">
                {
                    isRegistration ? 'User register' : 'Access AuthEmail'
                }
            </h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={toProcessData}>
                        {
                            error ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : null
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2" 
                            placeholder="Enter your email" 
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2" 
                            placeholder="Enter your password"
                            onChange={e => setPass(e.target.value)}
                            value={pass} 
                        />
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                            {
                                isRegistration ? 'Check in' : 'To access'
                            }
                        </button>
                        <button 
                        className="btn btn-info btn-sm btn-block"
                        onClick={() => setIsRegistration(!isRegistration)}
                        type="button"
                        >
                            {
                                isRegistration ? 'You are already registered' : 'Create Account'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthEmail 