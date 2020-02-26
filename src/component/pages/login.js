import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';


// import styled from '@emotion/styled';
// import { css } from '@emotion/core'

import { Alert } from 'reactstrap';
import { UserContext } from "../UserContext";

const LogIn = () => {
    let history = useHistory();
    let arryFromLS = [];

    const [userAndPassOK, setUserAndPassOK] = useState(false);
    const [checkUserDone, setCheckUserDone] = useState(false);
    const [errors, setErrors] = useState({ name: null, pass: null })
    const { userName, setUserName } = useContext(UserContext);

    // if (userName !== null) {
    //     history.push(`/user-desktop:${userName}`);
    // }

    const validateName = (values) => {
        console.log("validateName: values", values);
        let errors = {};
        if (values.name.trim() === "") {
            errors.name = "Nombre no puede estar vacio...";

        }
        if (values.pass.trim() === "") {
            errors.pass = "Password no puede estar vacia...";

        }
        setErrors(errors);
    }

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
        validateName(nameAndPass); //This is for errors
        setCheckUserDone(true);

        if (localStorage.getItem('myValueInLocalStorage') !== null) {
            arryFromLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
        }
        if (checkIfNameExistInArray(nameAndPass, arryFromLS)) {

            console.log("Logeado con éxito");
            setUserName(nameAndPass.name);
            setTimeout(() => {
                history.push(`/user-desktop:${nameAndPass.name}`);
            }, 4000);

            setUserAndPassOK(true);

        } else {
            console.log("Usuario o password incorrectos");

            setUserAndPassOK(false);
            setTimeout(() => {
                setCheckUserDone(false);
            }, 2000);

        }
    }

    console.log("LogIn");
    return (
        <div className="container register-form pt-4 center-block" >
            <div className="form">
                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Log In</p>
                            <div className="form-group">
                                <input
                                    id="user-name"
                                    type="text"
                                    className={`form-control ${errors.name && "is-invalid"} `}
                                    placeholder="Your Name *" />
                                {errors.name && (<div className="invalid-feedback">
                                    {errors.name}
                                </div>)}
                            </div>
                            <div className="form-group">
                                <input
                                    id="user-pass"
                                    type="password"
                                    className={`form-control ${errors.pass && "is-invalid"} `}
                                    placeholder="Your Password *"
                                    required
                                />
                                {errors.pass && (<div className="invalid-feedback">
                                    {errors.pass}
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={checkUser}>Log In</button>
                </div>
                {/* {
                    userAndPassOK ? (<Alert color="primary" toggle="true">Logeado con éxito...!</Alert>) :
                        (<Alert color="danger" toggle="true">Usuario o Password incorrectos...!</Alert>)
                } */}
                <Alert color="primary" className={`text-info ${userAndPassOK ? "d-block" : "d-none"}`}>Logeado con exito. Dirigiendo a la página de su perfil de usuario...</Alert>
                <Alert color="danger" className={!userAndPassOK && checkUserDone ? "d-block" : "d-none"}>Usuario o password incorrectos. Verifique la información suministrada...</Alert>
            </div>
        </div>

    );
}

export default LogIn;