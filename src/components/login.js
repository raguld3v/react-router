import { useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate();

    function onSubmit(){
        // code for checking user credentials
        navigate('/dashboard');
    }
    return <>
        <h1>login page</h1>
        <button onClick={onSubmit}>Login</button>
    </>
}