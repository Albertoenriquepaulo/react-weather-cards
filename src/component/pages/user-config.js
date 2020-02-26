//http://localhost:3000/user-config:Manu
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';


import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { WiDayHail } from "react-icons/wi";

import Hp from "../../component/helpers";
import SpinnerBtn from "../spinnerBtn"
import { UserContext } from '../UserContext';

const UserConfig = (props) => {
    let history = useHistory();
    const [input, setInput] = useState("")
    const userName = Hp.getUserName(props.match);
    const { setUserName } = useContext(UserContext);
    setUserName(userName); //Seteando para el nombre del NavBar

    let userObject = Hp.fillUserFromLSData(userName);
    const [user, setUser] = useState(userObject);

    const [forceRerender, setForceRerender] = useState(true);
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const [errors, setErrors] = useState({ country: null, error: true });
    const validateNameAndAddCountry = (e, country) => {
        console.log("validateName: country", country);
        let myErrors = { country: null, error: true };
        if (country.trim() === "") {
            myErrors.country = "Pais no puede estar vacio...";
            myErrors.error = true;
        } else {
            myErrors.country = null;
            myErrors.error = false;
            Hp.addCountry(e, user, setUser, input, setInput);
            console.log("Error seteado a FALSE");

        }
        console.log("ANTES DE SETEAR-> ", myErrors);
        setErrors(myErrors);
    }

    const myFunction = (e) => {
        e.preventDefault();

        history.push(`/user-desktop:${userName}`);
    }

    return (
        <div id="contenido">
            <div className="container">
                <div className="row">
                    <h1>Mis Tarjetas de Clima</h1>
                </div>
                {/* <div className="row">
                    <p>Bienvenido: <strong>{user.name}</strong></p>
                </div> */}
                <div className="row">
                    <div className="col-6">
                        <label for="country">Escriba el Pais: </label>
                        <form action="#" id="formulario" onSubmit={(e) => {
                            validateNameAndAddCountry(e, input);
                        }}>
                            <label for="country"></label>
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                className={`form-control ${errors.country && "is-invalid"} `}
                            />
                            {errors.country && (<div className="invalid-feedback">
                                {errors.country}
                            </div>)}
                            {/* <button className="btn btn-primary w-100">Añadir</button> */}
                            <SpinnerBtn onClick={() => {
                                setIsButtonLoading(true);
                                setTimeout(() => {
                                    setIsButtonLoading(false);

                                }, 150);
                            }}
                                isLoading={isButtonLoading}>
                                Añadir
                    </SpinnerBtn>
                        </form>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <h2>Mis Paises</h2>
                        </div>
                        <ListGroup className="row">
                            {user.countries.map(item => {
                                return (
                                    <ListGroupItem key={item} >
                                        <div className="row">
                                            <div className="col-7" >
                                                <div className="cloud d-inline" >
                                                    <WiDayHail />

                                                </div>{item}
                                            </div>
                                            <div className="col-1 offset-4">
                                                <a href="#" >
                                                    <FaTrashAlt className="btn-add" key={item} onClick={(e) => Hp.deleteCountry(e, user, setUser, item, setForceRerender, forceRerender)} />
                                                </a>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                )
                            })}
                        </ListGroup>
                    </div>
                </div>
                <div className="row text-swap-config-cards">
                    <p className="text-left btn btn-primary" onClick={(e) => {
                        myFunction(e);
                    }
                    }>Ver mis tarjetas</p>
                </div>
            </div>
        </div>
    );
}

export default UserConfig;