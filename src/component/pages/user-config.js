import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { WiDayHail } from "react-icons/wi";

import Hp from "../../component/helpers";

const UserConfig = (props) => {
    const [input, setInput] = useState("")
    const userName = Hp.getUserName(props.match);//match.params.userName.substr(1, match.params.userName.length);

    let userObject = Hp.fillUserFromLSData(userName);
    const [user, setUser] = useState(userObject);

    const [forceRerender, setForceRerender] = useState(true);

    console.log("From user-config-userObject", userObject);
    console.log("From user-config-user", user);

    return (
        <div id="contenido">
            <div class="container">
                <h1>Mis Tarjetas de Clima</h1>
                <div class="row">
                    <div class="col-6">
                        <label for="country">Escriba el Pais: </label>
                        <form action="#" id="formulario" onSubmit={(e) => Hp.addCountry(e, user, setUser, input, setInput)}>
                            <label for="country"></label>
                            <input onChange={(e) => setInput(e.target.value)} value={input} />
                            <button class="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                    <div class="col-6">
                        <h2>Mis Paises</h2>
                        <ul id="lista-countries" class="list-group list-group-flush">
                            {user.countries.map(item => {
                                return <li className="list-group-item" key={item}><WiDayHail />{item}
                                    <a href="#"><FaTrashAlt key={item} onClick={(e) => Hp.deleteCountry(e, user, setUser, item, setForceRerender, forceRerender)} /></a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserConfig;