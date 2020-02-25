import React from 'react';
import { useState, useContext } from "react";
import { Route, Redirect, useHistory } from 'react-router-dom';

import User from "../../User" //Mi clase usuario con todos los datos de un usuario
import { Alert } from 'reactstrap';
import { UserContext } from "../UserContext";

import SpinnerBtn from "../spinnerBtn"

// function Button({ isLoading, children, ...props }) {
//     return (
//         <button className="button btn btn-primary" {...props}>
//             {isLoading ? <Loader /> : children}
//         </button>
//     );
// }

const SignUp = () => {

    let history = useHistory();
    let arryToLS = [];
    const [userAlreadyExist, setUserAlreadyExist] = useState(false);
    const [errors, setErrors] = useState({ name: null, pass: null });
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const { setUserName } = useContext(UserContext);

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

    // setTimeout(() => {
    //     setUserAlreadyExist(true);
    // }, 3000);


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
        validateName({ name, pass }); //This is for errors

        console.log(name, pass);
        if (name !== "" && pass !== "") {
            const nameAndPass = new User(name, pass, []); //{ name: name, pass: pass, arryCountries: ["Venezuela", "España"] };

            if (localStorage.getItem('myValueInLocalStorage') !== null) {
                arryToLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
            }
            if (checkIfNameExistInArray(nameAndPass.name, arryToLS)) {
                console.log("saveToLS: Existe");
                setUserAlreadyExist(true);
                setTimeout(() => {
                    setUserAlreadyExist(false);
                }, 2000);
                // TODO: Mostrar error, el elemento existe, escoja otro nombre de usuario
            } else {
                // TODO: Usuario ha sido creado con éxito
                arryToLS.push(nameAndPass);
                localStorage.setItem("myValueInLocalStorage", JSON.stringify(arryToLS));
                setUserAlreadyExist(false);
                setTimeout(() => {
                    history.push(`/user-config:${nameAndPass.name}`);
                    setUserName(`Enhorabuena ${nameAndPass.name}... Ya eres parte de BBK Weather`)
                }, 1000);

            }
        }
        else {
            // TODO: Mensaje de que el password o el usuario están vacios
            console.log("Name or Pass Empty");
        }
    }

    console.log("SignUp", arryToLS);

    return (
        <div className="container register-form pt-4">
            <div className="form">
                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <p>Crear usuario</p>
                            <div className="form-group">
                                <input
                                    id="name-ls"
                                    type="text"
                                    className={`form-control ${errors.name && "is-invalid"} `}
                                    name="name"
                                    placeholder="Your Name *" />
                                {errors.name && (<div className="invalid-feedback">
                                    {errors.name}
                                </div>)}
                            </div>
                            <div className="form-group">
                                <input
                                    id="pass-ls"
                                    type="password"
                                    className={`form-control ${errors.pass && "is-invalid"} `}
                                    name="pass"
                                    placeholder="Your Password *"
                                />
                                {errors.pass && (<div className="invalid-feedback">
                                    {errors.pass}
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <SpinnerBtn onClick={() => {
                        setIsButtonLoading(true);
                        setTimeout(() => {
                            setIsButtonLoading(false);
                        }, 1000);
                        saveToLS();
                    }}
                        isLoading={userAlreadyExist && isButtonLoading}>
                        Sign up
                    </SpinnerBtn>
                    {/* <button type="button" className="btn btn-primary" onClick={saveToLS}>Sign Up</button> */}
                    {/* {
                        userAlreadyExist ? (<Alert color="primary" toggle="true">Usuario ya existe...!</Alert>) :
                            (<Alert color="success" toggle="true">Usuario creado con éxito...!</Alert>)
                    } */}
                    <Alert color="danger" className={userAlreadyExist ? "d-block" : "d-none"}>Usuario ya creado, intente con otro nombre de usuario...!</Alert>
                    {/* <Alert color="primary" className={!userAlreadyExist ? "d-block" : "d-none"}>Usuario creado con éxito...!</Alert> */}
                </div>
            </div>
        </div>
    );
}

export default SignUp;