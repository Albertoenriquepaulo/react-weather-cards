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
        return userToFill;
    }
}