// Code your solution in this file.
function lowerCaseDrivers(drivers)
{
    return drivers.map(function (name){ //return new array
        return name.toLowerCase(); //return to map
    });
}

function nameToAttributes(drivers) //takes an array of drivers with their first and last name separated by a space. returns an array of JavaScript objects with firstName and lastName attributes
{
    return drivers.map(function (name) {
        //split at ' '(space) to get first and last name from array
        const nameFirstName = name.split(' ')[0];
        const nameLastName = name.split(' ')[1];
        //return an array of objects with firstName and lastName attributes
        return { firstName: nameFirstName, lastName: nameLastName};
    });
}

function attributesToPhrase(drivers)
{
    return drivers.map(function (driver){
        return `${driver.name} is from ${driver.hometown}`;
    });
}