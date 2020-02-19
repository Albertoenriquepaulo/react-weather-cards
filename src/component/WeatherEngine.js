import React, { useState, useEffect } from 'react';

import WeatherCard from "./WeatherCard/component";

import '../App.css';

const WeatherEngine = ({ initialLocation }) => {
    //const initialLocation = "Venezuela"
    //init for our state variables
    const [query, setQuery] = useState(initialLocation);

    //Añadiendo Loading State, ver HTML abajo también
    const [loading, setLoading] = useState(false);

    //Handling Error
    const [error, setError] = useState(false);

    const [weather, setWeather] = useState({
        temp: null,
        city: null,
        condition: null,
        country: null
    });


    //definiendo la data fetching functions
    const dataFromAPI_GetWeather = async query => {
        setQuery("");  //Para limpiar el text box, tanto al inicar como cuando reset el error con el boton de reset
        setLoading(true);  //Adding Conditional Rendering

        //Handling Error with Try Catch
        try {
            const apiRes = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=97a4393bc65f0efc512281aa489939d1`
            );
            const resJSON = await apiRes.json();
            // console.log(":0", resJSON);
            setWeather({
                temp: resJSON.main.temp,
                city: resJSON.name,
                condition: resJSON.weather[0].main,
                country: resJSON.sys.country
            });
        } catch (error) {
            console.log(":1");
            setError(true);
        }
        setLoading(false);
    }

    //Funcion para manejar las queries de busqueda from the user side
    const handleSearch = (params) => {
        params.preventDefault();
        dataFromAPI_GetWeather(query);
    }

    const changeQuery = (query) => {
        setQuery(query);
        dataFromAPI_GetWeather(query);
    }

    //useEffect solo se ejecuta una vez cuando el componente se monta,
    //si entre los corchetes colocamos algo como weather por ejemplo
    //el comportamiento cambia, creo que es porque se ejecuta cada vez 
    //que la variable weather cambie
    useEffect(() => {
        dataFromAPI_GetWeather(initialLocation);
        //Ojo con la linea de abajo, es un comment pero influye en el código
    }, [initialLocation])


    return (
        <div>
            {(!loading && !error) ? (<div>
                <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country} changeQuery={changeQuery} />
                {/* <form>
                    <input value={query} onChange={(params) => setQuery(params.target.value)} />
                    <button onClick={e => handleSearch(e)}>Search</button>
                </form> */}
            </div>) : loading ? (<div style={{ color: "black" }}>Loading</div>) : (!loading && error) ? (<div style={{ color: "black" }}>Hubo un error <button onClick={() => setError(false)}>Reset!</button></div>) : null}
        </div>
    );
}
export default WeatherEngine;