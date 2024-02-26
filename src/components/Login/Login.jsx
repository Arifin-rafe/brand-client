import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    // const [show, setShow] = useState(false)
    const { signIn, google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                Swal.fire({
                    title: 'Success',
                    text: 'You are logged in',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                // form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cancel'
                  })
                console.log(error);
            })
    }
    const handleGoogle = () => {
        google()
            .then(result => {
                const loggedUser = result.user
                Swal.fire({
                    title: 'Success',
                    text: 'You are logged in',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            })

    }
    return (
        <div className="flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="username"
                            name='email'
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Enter your Email"
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Enter your password"
                            required />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded-md hover:bg-green-400"
                    >
                        Login
                    </button>
                    <Link to='/register'><span className="text-sm hover:text-green-600">Don't have an account?</span></Link>
                </form>
                <div className='flex justify-center mt-5'>
                    <button onClick={handleGoogle} className='btn text-white bg-black'>Google</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;