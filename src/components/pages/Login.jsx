import React, {useState} from 'react';
import axios from "axios";
import {API_URL} from "../../../env.js";
import {setToken} from "../../helpers/auth.js";
import {Link, useNavigate} from "react-router-dom";
import LoginTemplate from "../templates/LoginTemplate.jsx";

const Login = () => {
    const nav = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios.post(`${API_URL}/public/login`, data)
            .then(resp => {
                setToken(resp.data.data.token)
                nav("/")
            })
            .catch(error => {
                console.log(error)
                setError(error)
            })

    }

    return (
        <LoginTemplate title="Iniciar Sesión">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input required type="email" name="email" placeholder="Correo electrónico"/>
                </div>
                <div className="mb-4">
                    <input required type="password" name="password" placeholder="Contraseña"/>
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                    <button className="bg-gradient w-full" type="submit">Ingresar</button>
                    <Link className="text-gray-500" to="/registro">
                        ¿Deseas registrarte?
                    </Link>
                </div>

                {
                    error && (
                        <p className="text-center p-2 bg-red-100 text-red-800">
                            {error.response.data.errors[0].message}
                        </p>
                    )
                }
            </form>
        </LoginTemplate>
    );
};

export default Login;
