//http://localhost:3000/user-config:Manu
import React, { useState } from 'react';


import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { WiDayHail } from "react-icons/wi";

import Hp from "../../component/helpers";
import SpinnerBtn from "../spinnerBtn"

const UserConfig = (props) => {
    const [input, setInput] = useState("")
    const userName = Hp.getUserName(props.match);

    let userObject = Hp.fillUserFromLSData(userName);
    const [user, setUser] = useState(userObject);

    const [forceRerender, setForceRerender] = useState(true);
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    console.log("From user-config-userObject", userObject);
    console.log("From user-config-user", user);

    return (
        <div id="contenido">
            <div className="container">
                <div className="row">
                    <h1>Mis Tarjetas de Clima</h1>
                </div>
                <div className="row">
                    <p>Bienvenido: <strong>{user.name}</strong></p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label for="country">Escriba el Pais: </label>
                        <form action="#" id="formulario" onSubmit={(e) => Hp.addCountry(e, user, setUser, input, setInput)}>
                            <label for="country"></label>
                            <input onChange={(e) => setInput(e.target.value)} value={input} />
                            {/* <button className="btn btn-primary w-100">Añadir</button> */}
                            <SpinnerBtn onClick={() => {
                                setIsButtonLoading(true);
                                setTimeout(() => {
                                    setIsButtonLoading(false);

                                }, 1000);
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
            </div>
        </div>
    );
}

export default UserConfig;