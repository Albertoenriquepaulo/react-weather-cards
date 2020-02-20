import React, { useRef, useEffect } from 'react';

import Hp from "../../component/helpers";
import User from "../../User"


const UserConfig = (props) => {
    console.log("UserConfig");
    console.log("From User-Config ->", JSON.parse(localStorage.getItem('myValueInLocalStorage')));
    // console.log(match);
    const userName = Hp.getUserName(props.match);//match.params.userName.substr(1, match.params.userName.length);
    // console.log(userName);
    let userObject = Hp.fillUserFromLSData(userName);
    console.log("From user-config", userObject);
    //Variables
    //const countryList = document.querySelector('#lista-countrys');
    // const countryList = useRef(null);
    //let countryList = QSelector('#lista-countries');
    let countryList;
    const { isLoading, data } = props;
    useEffect(() => {
        if (data) {
            countryList = document.getElementById('name').value;
        }
    }, [data]) // this diff is necessary


    console.log("COUNTRY_LIST", countryList);
    CreateHTMLToAddCountry("Venezuela");


    // function EventListeners() {
    //     Cuando se envia el formulario
    //     TODO: QSelector('#formulario').addEventListener('submit', AddCountry);
    //     Delete countrys
    //     TODO: countryList.addEventListener('click', DeleteCountryFromHTML);
    //     Load content from LS
    //     TODO: document.addEventListener('DOMContentLoaded', LSLoaded)
    // }

    //Funciones
    function QSelector(value) {
        return document.querySelector(value);
    }

    //Añadir country del formulario
    function AddCountry(e) {
        e.preventDefault();
        //e.stopPropagation();
        //Leer el valor del text area
        const countryName = QSelector('#country').value;
        if (countryName !== '') { //TODO: Verified if the element is in the lista with the API, si está, hacer lo que está dentro del if
            CreateHTMLToAddCountry(countryName);
            //Añadir a local storage
            AddCountryToLS(userName, countryName);
        } else {
            QSelector('#country').focus();
        }
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

    return (
        <div id="contenido">
            <div class="container">
                <h1>Mis Tarjetas de Clima</h1>
                <div class="row">
                    <div class="col-6">
                        <label for="country">Escriba el Pais: </label>
                        <form action="#" id="formulario" onSubmit={AddCountry}>
                            <label for="country"></label>
                            <textarea id="country" class="w-100"></textarea>
                            <input type="submit" class="btn btn-primary w-100" value="Agregar" />
                        </form>
                    </div>
                    <div class="col-6">
                        <h2>Mis Paises</h2>
                        <ul id="lista-countries" ref={countryList} class="list-group list-group-flush" onClick={DeleteCountryFromHTML}></ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserConfig;