// const checkIfNameExistInArray = (name, arry) => {
//     return arry.find(element => {
//         if (element.name === name) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     });
// }

// export default checkIfNameExistInArray;
import User from "../User"
import React, { useEffect, useState } from 'react';

export default {

    checkIfNameExistInArray: (name, arry) => {
        return arry.find(element => {
            if (element.name === name) {
                return true;
            }
            else {
                return false;
            }
        });
    },

    getUserName: (match) => {
        return match.params.userName.substr(1, match.params.userName.length);
    },

    fillUserFromLSData: (user) => {
        let userToFill = new User();
        const arryToLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
        console.log("fillUserFromLSData", user);
        console.log("fillUserFromLSData", arryToLS);
        arryToLS.find(element => {
            if (element.name === user) {
                userToFill.name = element.name;
                userToFill.pass = element.pass;
                userToFill.countries = element.countries;
                // console.log("fillUserFromLSData", userToFill);
                // console.log("fillUserFromLSData", element);
            }
        });
        // setCountriesArry(userToFill);
        return userToFill;
    },

    handleSubmit: (e, user, setUser, input, setInput) => {  //To Add Country from HTML
        e.preventDefault();
        let userAux = user;
        userAux.countries.push(input);
        setUser(userAux);
        // setNotes([...notes, { id: id, message: input }]);
        console.log("handleSubmit->user", user);
        setInput("");
    },

    deleteCountry: (e, user, setUser, country, setForceRerender, forceRerender) => {
        e.preventDefault();
        console.log("deleteCountry->user", user, "deleteCountry->country", country);
        let userAux = user;
        let countriesArry = userAux.countries.filter(item => item !== country);
        userAux.countries = countriesArry;
        console.log(userAux);
        setUser(userAux);
        setForceRerender(!forceRerender);
    },

    // deleteCountry1: (user, setUser, country) => {
    //     console.log("deleteCountry->user", user, "deleteCountry->country", country);
    //     let userAux = user;
    //     let countriesArry = userAux.countries.filter(item => item !== country);
    //     userAux.countries = countriesArry;
    //     useEffect(() => {
    //         setUser(userAux);
    //     }, []);
    //     // userAux = userAux.countries.filter(item => item !== country);
    //     return userAux;
    // }

}