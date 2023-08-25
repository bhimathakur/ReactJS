import React from "react";
import { useRouteError } from "react-router-dom";
import Logo from "../assets/logo.png";

const ErrorHandler = () => {
    const {status, statusText} = useRouteError()
    return (
        <div className=" text-center mt-24">
            <div className="ml-[600px] mb-5">
                <a href="/">
            <img src={Logo} alt="Logo"/> </a>
            </div>
        <div className="font-bold">Oops Something went wrong!</div>
        <p>{status+" "+statusText}</p>
        <a href="/" className="text-gray-500">Back to home</a>
        </div>

    )
}

export default ErrorHandler;