import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineEditNote } from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";
const Navbar = ({isAuth}) => {
    return (
        <nav>
            <Link to="/"><BiHomeHeart /> Home</Link>

            {!isAuth ? (
                <Link to="/login"><FiLogIn /> Login</Link>
            ) : (
                <>
                    <Link to="/createpost"><MdOutlineEditNote /> 記事投稿</Link>
                    <Link to="/logout"><FiLogOut /> Logout</Link>
                </>
            )
            }


        </nav>
    )
}

export default Navbar