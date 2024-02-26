// import React from 'react';
import{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photo, email, password, confirm);

       
        if (password !== confirm) {
            Swal.fire({
                title: 'Error!',
                text: 'Sorry password do not match',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            
            return;
        } else if (password.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be more than 6 character',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                Swal.fire({
                    title: 'Success',
                    text: 'You successfully created user ID',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                form.reset();
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: 'This Email already in use',
                    icon: 'error',
                    confirmButtonText: 'Cancel'
                  })
            })

    }
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 max-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Enter your Name"
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-sm font-medium">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name='photo'
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Enter your Photo URL"
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="text"
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
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="c_password"
                            name='confirm'
                            className="w-full mt-1 p-2 border rounded-md"
                            placeholder="Confirm password"
                            required />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded-md hover:bg-green-400"
                    >
                        Register
                    </button>
                    <Link to='/login'><span className='text-sm hover:text-green-500 underline'>Already have an account?</span></Link>
                </form>
            </div>
        </div>
    );
};

export default Register;