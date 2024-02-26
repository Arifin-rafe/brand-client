import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error.message))
    }
    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold" : ""}>Home</NavLink></li>
                        <li><NavLink to='/addProduct' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold" : ""}>Add Products</NavLink></li>
                        <li><NavLink to='/myCart' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold" : ""}>My Cart</NavLink></li>
                        <li><NavLink to='/addBrand' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold" : ""}>Add Brand</NavLink></li>
                    </ul>
                </div>
                <img className="h-12 rounded-lg" src="/images/one.JPG" alt="" />
                <h2 className="text-2xl font-bold hover:text-3xl ">Brand</h2>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold font-serif" : "font-bold font-serif"}>Home</NavLink></li>
                    <li><NavLink to='/addProduct' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold font-serif" : "font-bold font-serif"}>Add Products</NavLink></li>
                    <li><NavLink to='/myCart' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold font-serif" : "font-bold font-serif"}>My Cart</NavLink></li>
                    <li><NavLink to='/addBrand' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-400 font-bold font-serif" : "font-bold font-serif"}>Add Brand</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end ">

                {user ?
                    <> <span className='text-sm font-semibold'>{user.email}</span><button onClick={handleLogOut} className='btn bg-black text-white'>LogOut</button></> :
                    <Link to='/login'><button className='btn bg-black text-white'>Login</button></Link>
                }

            </div>

        </div>
    );
};

export default Header;