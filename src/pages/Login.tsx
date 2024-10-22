import { useState } from 'react';
import Banner from '../assets/banner.svg';

function Login() {

    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
     console.log(input);
     
    };

    return(
        <>
        <h1>Welcome</h1>
        <img src={ Banner } alt="Banner da tela de login" />

        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id='username' name='username' type="username"placeholder='Enter your username' />
        <input onChange={handleChange} type="password" id='password' name='password' placeholder='Enter your passaword' />
        <p>Forgot Password?</p>
        <button>Sign in</button>            
        </form>

        </>
    );
}

export default Login;