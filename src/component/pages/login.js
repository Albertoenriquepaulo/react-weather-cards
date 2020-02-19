import React from 'react';
import { useHistory } from 'react-router-dom';

import MyRouter from "../router";

const LogIn = () => {
    let history = useHistory();

    let arryFromLS = [];

    const checkIfNameExistInArray = (user, arry) => {
        console.log(":1", user);
        return arry.find(element => {
            if (element.name === user.name && element.pass === user.pass) {
                console.log(":0");
                return true;
            }
            else {
                return false;
            }
        });

    }

    const checkUser = (params) => {

        const name = document.getElementById("user-name").value;
        const pass = document.getElementById("user-pass").value;
        const nameAndPass = { name: name, pass: pass };

        if (localStorage.getItem('myValueInLocalStorage') !== null) {
            arryFromLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
        }
        if (checkIfNameExistInArray(nameAndPass, arryFromLS)) {
            console.log("Logeado con éxito");
            history.push('/user-desktop');
            // TODO: Mostrar Logeado con exito
        } else {
            console.log("Usuario o password incorrectos");
            // TODO: Error Usuario o password incorrectos
            //history.push('/login');
        }
    }

    console.log("LogIn");
    return (
        <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p></p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Signing In</p>
                            <div className="form-group">
                                <input id="user-name" type="text" className="form-control" placeholder="Your Name *" />
                            </div>
                            <div className="form-group">
                                <input
                                    id="user-pass"
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password *"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={checkUser}>Log In</button>
                </div>
            </div>
        </div>

    );
}

export default LogIn;