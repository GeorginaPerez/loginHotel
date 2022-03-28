import React from "react";

export const Input =(props) =>{
    return (
        <input id={props.id} name={props.name} type={props.type}
               value={props.value}
               onChange={props.onChange}
               required
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900d  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
               placeholder={props.placeholder}/>
    )
}