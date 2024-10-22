import Banner from '../assets/banner.svg';

function Login() {
    return(
        <>
        <h1>Welcome</h1>
        <img src={ Banner } alt="Banner da tela de login" />
        <input type="text" placeholder='Enter your username' />
        <input type="password" placeholder='Enter your passaword' />
        <p>Forgot Password?</p>
        <button>Sign in</button>
        </>
    );
}

export default Login;