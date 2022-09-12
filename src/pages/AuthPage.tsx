import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../hook/input'
import { useAppDispatch } from '../hook/redux'
import { login, register } from '../store/actions/authActions'

const AuthPage = () => {
    const username = useInput('')
    const password = useInput('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const formValid = () => username.value && password.value

    const submitHandler = (event: FormEvent) => {
        event.preventDefault()

        if(formValid()){
            dispatch(login({username: username.value, password: password.value}))
                .then(() => {navigate('/')})
        }else{
            alert('Error your enter')
        }
    }

    const loginHandler = () => {
        if(formValid()){
            dispatch(register({username: username.value, password: password.value}))
                .then(() => {navigate('/')})
        }else{
            alert('Error your enter')
        }
    }

    return(
        <form 
            className='container mx-auto max-w-[500px] pt-8'
            onSubmit={submitHandler}
        >
            <div className='mb-2'>
                <label htmlFor='username' className='block'>Username</label>
                <input type="text" {...username} id='username' className='border py-1 px-2 2-full'/>
            </div>

            <div className='mb-2'>
                <label htmlFor='password' className='block'>Password</label>
                <input type="password" {...password} id='password' className='border py-1 px-2 2-full'/>
            </div>

            <button className='py-2 px-4 bg-blue-700 text-white' type='submit'>Register</button>
            <button onClick={loginHandler} className='py-2 px-4 bg-green-700 text-white' type='button'>Login</button>

        </form>
    )
}

export default AuthPage