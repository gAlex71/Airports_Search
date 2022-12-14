import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hook/redux";
import { authSlice } from "../store/slices/AuthSlice";

const Navigation = () => {
    const {isAuth, username} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const logoutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        dispatch(authSlice.actions.logout())
    }

    return(
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
            <Link to="/">Airport</Link>

            {!isAuth && <Link to="/auth">Auth</Link>}

            {isAuth && <>
                <span className="font-bold">{username}</span>
                <a href="#" onClick={logoutHandler}>Logout</a>
            </>}
        </nav>
    )
}

export default Navigation