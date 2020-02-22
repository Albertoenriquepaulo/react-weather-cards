// export default checkIfNameExistInArray;
import User from "../User"

export default {

    // *************** MANEJO DE LOCAL STORAGE *********************************************
    fillUserFromLSData: (user) => {
        let userToFill = new User();
        const arryToLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
        arryToLS.find(element => {
            if (element.name === user) {
                userToFill.name = element.name;
                userToFill.pass = element.pass;
                userToFill.countries = element.countries;
            }
        });
        return userToFill;
    },

    // *************** FIN MANEJO DE LOCAL STORAGE *****************************************
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

    addCountry: (e, user, setUser, input, setInput) => {  //To Add Country from HTML
        e.preventDefault();
        let userAux = user;
        userAux.countries.push(input);
        setUser(userAux);
        setInput("");
        console.log(userAux.name, input);
        AddCountryToLS(userAux.name, input);
    },

    deleteCountry: (e, user, setUser, country, setForceRerender, forceRerender) => {
        e.preventDefault();
        let userAux = user;
        let countriesArry = userAux.countries.filter(item => item !== country);
        userAux.countries = countriesArry;
        DeleteCountryFromLS(userAux.name, country);
        setUser(userAux);
        setForceRerender(!forceRerender);
    }
}


// *************** MANEJO DE LOCAL STORAGE *********************************************
const AddCountryToLS = (user, country) => {
    //Adding new country
    let arryToLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));
    arryToLS.find(element => {
        if (element.name === user) {
            element.countries.push(country);
        }
    });
    //Converting from array to string for LS
    localStorage.setItem('myValueInLocalStorage', JSON.stringify(arryToLS));
}

const DeleteCountryFromLS = (user, country) => {
    //Adding new country
    let arryToLS = JSON.parse(localStorage.getItem('myValueInLocalStorage'));

    arryToLS.find(element => {
        if (element.name === user) {
            element.countries = element.countries.filter(item => item !== country)
        }
    });
    //Converting from array to string for LS
    localStorage.setItem('myValueInLocalStorage', JSON.stringify(arryToLS));
}

// *************** FIN MANEJO DE LOCAL STORAGE *****************************************
