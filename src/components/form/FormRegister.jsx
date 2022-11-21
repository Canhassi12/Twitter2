import { useState } from "react";
import api from "../../services/api";
import {Navigate, useNavigate } from "react-router-dom";
import useForm from "./useForm";

export default function FormRegister() {

    const navigate = useNavigate();

    const [error, setError] = useState('');

    const [form, handleForm] = useForm();

    async function handleClick() {
        let nickname = form.name;
        let email = form.email;
        let password = form.password;
        try {
            await api.post("register", {
              name,
              email,
              password
            });
      
            navigate('/');
      
          } catch (error) {
            setError(error.response.data);
          }
    }

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nickname</label>
                    <input onChange={handleForm} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="nickname" type="text" placeholder="Username"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input onChange={handleForm} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Email"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input onChange={handleForm} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="******************"/>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );  
}
