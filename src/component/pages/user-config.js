//http://localhost:3000/user-config:Manu
import React, { useState } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { WiDayHail } from "react-icons/wi";

import Hp from "../../component/helpers";

const UserConfig = (props) => {
    const [input, setInput] = useState("")
    const userName = Hp.getUserName(props.match);

    let userObject = Hp.fillUserFromLSData(userName);
    const [user, setUser] = useState(userObject);

    const [forceRerender, setForceRerender] = useState(true);

    console.log("From user-config-userObject", userObject);
    console.log("From user-config-user", user);

    return (
        <div id="contenido">
            <div className="container">
                <h1>Mis Tarjetas de Clima</h1>
                <p>Bienvenido: <strong>{user.name}</strong></p>
                <div className="row">
                    <div className="col-6">
                        <label for="country">Escriba el Pais: </label>
                        <form action="#" id="formulario" onSubmit={(e) => Hp.addCountry(e, user, setUser, input, setInput)}>
                            <label for="country"></label>
                            <input onChange={(e) => setInput(e.target.value)} value={input} />
                            <button className="btn btn-primary w-100">Añadir</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <h2>Mis Paises</h2>
                        <ListGroup className="row">
                            {user.countries.map(item => {
                                return <ListGroupItem key={item} className="col-7"><WiDayHail />{item}
                                    <a href="#" ><FaTrashAlt key={item} className="col-9" onClick={(e) => Hp.deleteCountry(e, user, setUser, item, setForceRerender, forceRerender)} /></a>
                                </ListGroupItem>
                            })}
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserConfig;