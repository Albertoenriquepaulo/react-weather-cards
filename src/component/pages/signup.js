import React from 'react';
import { useState } from "react";
import { Route, Redirect, useHistory } from 'react-router-dom';

import User from "../../User" //Mi clase usuario con todos los datos de un usuario
import { Alert } from 'reactstrap';

const SignUp = () => {

    let history = useHistory();
    let arryToLS = [];
    const [userAlreadyExist, setUserAlreadyExist] = useState(false);

    setTimeout(() => {
        setUserAlreadyExist(true);
    }, 3000);


    const checkIfNameExistInArray = (name, arry) => {
        return arry.find(element => {
            if (element.name === name) {
                return true;
            }
            else {
                return false;
            }
        });
    }

    const saveToLS = (params) => {
        const name = document.getElementById("name-ls").value.replace(/\s/g, "");
        const pass = document.getElementById("pass-ls").value.replace(/\s/g, "");

        console.log(name, pass);
        if (name !== "" && pass !== "") {
            const nameAndPass = new User(name, pass, []); //{ name: name, pass: pass, arryCountries: ["Venezuela", "España"] };

            if (localStorage.getItem('myValueInLocalStorage') !== null) {
                arryToLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
            }
            if (checkIfNameExistInArray(nameAndPass.name, arryToLS)) {
                console.log("saveToLS: Existe");
                setUserAlreadyExist(true);
                // TODO: Mostrar error, el elemento existe, escoja otro nombre de usuario
            } else {
                // TODO: Usuario ha sido creado con éxito
                arryToLS.push(nameAndPass);
                localStorage.setItem("myValueInLocalStorage", JSON.stringify(arryToLS));
                setUserAlreadyExist(false);
                setTimeout(() => {
                    history.push(`/user-config:${nameAndPass.name}`);
                }, 4000);

            }
        }
        else {
            // TODO: Mensaje de que el password o el usuario están vacios
            console.log("Name or Pass Empty");
        }
    }

    console.log("SignUp", arryToLS);

    return (
        <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p></p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Crear usuario</p>
                            <div className="form-group">
                                <input id="name-ls" type="text" className="form-control" placeholder="Your Name *" />
                            </div>
                            <div className="form-group">
                                <input
                                    id="pass-ls"
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password *"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={saveToLS}>Sign Up</button>
                    {
                        userAlreadyExist ? (<Alert color="primary" toggle="true">Usuario ya existe...!</Alert>) :
                            (<Alert color="success" toggle="true">Usuario creado con éxito...!</Alert>)
                    }
                </div>
            </div>
        </div>
    );
}

export default SignUp;