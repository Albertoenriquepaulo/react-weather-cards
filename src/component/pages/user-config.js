import React, { useEffect, useState, useCallback } from 'react';
// import update from 'react-addons-update';
import Hp from "../../component/helpers";
import User from "../../User"

const handleSubmit = (e, user, setUser, input, setInput) => {
    e.preventDefault();
    // const id = (user.countries.length) ? notes[notes.length - 1].id + 1 : 0;
    console.log("user", user, "input", input);
    let userAux = user;

    userAux.countries.push(input);
    setUser(userAux);
    // setNotes([...notes, { id: id, message: input }]);
    console.log("handleSubmit->user", user);
    setInput("");
}

const UserConfig = (props) => {
    // console.log("UserConfig");
    // console.log("From User-Config ->", JSON.parse(localStorage.getItem('myValueInLocalStorage')));
    const [input, setInput] = useState("")
    const userName = Hp.getUserName(props.match);//match.params.userName.substr(1, match.params.userName.length);
    let userObject = Hp.fillUserFromLSData(userName);
    const [user, setUser] = useState(userObject);
    userObject.countries.push("Venezuela");
    userObject.countries.push("Colombia");


    const [forceRerender, setForceRerender] = useState(true);

    console.log("From user-config-userObject", userObject);
    console.log("From user-config-user", user);
    //const prueba = user.countries.map(item => console.log(item));

    CreateHTMLToAddCountry("Venezuela");

    //Funciones
    function QSelector(value) {
        return document.querySelector(value);
    }

    //Añadir country del formulario
    function AddCountry(e, user, setUser) {
        e.preventDefault();
        console.log("AddCountry, countryValue", e.target.value);
        console.log("AddCountry, User", user);

        //Leer el valor del text area
        // const countryName = QSelector('#country').value;
        // if (e.target.value !== '') { //TODO: Verified if the element is in the lista with the API, si está, hacer lo que está dentro del if
        //     CreateHTMLToAddCountry(countryName);
        //     //Añadir a local storage
        //     AddCountryToLS(userName, countryName);
        // } else {
        //     QSelector('#country').focus();
        // }
    }

    function CreateHTMLToAddCountry(countryName) {
        //crar boton Eliminar, conn un enlace
        const btnDel = document.createElement('a');
        btnDel.classList = 'borrar-country text-danger';
        btnDel.textContent = 'X';

        // Creando elemento lista y lo añadimos
        const listElement = document.createElement('li');
        listElement.className = "list-group-item"
        listElement.textContent = countryName; //también podria hacerse con innerText
        listElement.appendChild(btnDel); //adding el boton eliminar al elemento de la lista
        //countryList.current.appendChild(listElement); //add country to the list
        // QSelector('#country').value = '';
        // QSelector('#country').focus();
    }

    function DeleteCountryFromHTML(e) {
        //e.stopPropagation();
        e.preventDefault();
        if (e.target.classList.contains('borrar-country')) {
            e.target.parentElement.remove();
            //DelCountryLS(e.target.parentElement.textContent);
            //console.log(e.target.parentElement.textContent);
        }
    }

    function AddCountryToLS(user, country) {
        let countries;
        //countries = GetCountryLS();
        //Adding new country
        let arryToLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
        arryToLS.find(element => {
            if (element.name === user) {
                element.countries.push(country);
                // console.log("fillUserFromLSData", userToFill);
                // console.log("fillUserFromLSData", element);
            }
        });
        //Converting from array to string for LS
        localStorage.setItem('countries', JSON.stringify(arryToLS));
    }

    //Show LS data in the List
    function LSLoaded() {
        let countries;
        //countries = GetCountryLS();
        countries.forEach(function (country) {
            CreateHTMLToAddCountry(country);
        });
    }

    const deleteCountry = (e, country, setForceRerender) => {
        e.preventDefault();
        console.log("deleteCountry->user", user, "deleteCountry->country", country);
        let userAux = user;
        let countriesArry = userAux.countries.filter(item => item !== country);
        userAux.countries = countriesArry;
        console.log(userAux);
        setUser(userAux);
        setForceRerender(!forceRerender);
    }

    return (
        <div id="contenido">
            <div class="container">
                <h1>Mis Tarjetas de Clima</h1>
                <div class="row">
                    <div class="col-6">
                        <label for="country">Escriba el Pais: </label>
                        <form action="#" id="formulario" onSubmit={(e) => Hp.handleSubmit(e, user, setUser, input, setInput)}>
                            <label for="country"></label>
                            <input onChange={(e) => setInput(e.target.value)} value={input} />
                            <button class="btn btn-primary w-100">Submit</button>
                            {/* <input type="submit" class="btn btn-primary w-100" value={"Agregar"} onClick={(e) => AddCountry(e, user, setUser)} /> */}
                        </form>
                    </div>
                    {
                        console.log(user)
                    }
                    <div class="col-6">
                        <h2>Mis Paises</h2>
                        <ul id="lista-countries" class="list-group list-group-flush">
                            {user.countries.map(item => {
                                return <li className="list-group-item" key={item}>{item}
                                    <button key={item} class="borrar-country text-danger" onClick={(e) => Hp.deleteCountry(e, user, setUser, item, setForceRerender, forceRerender)} >X</button>
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