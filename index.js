// Code your solution in this file.

function lowerCaseDrivers(drivers){
    return drivers.map(driver => {
        return driver.toLowerCase();
    });
}

function nameToAttributes(drivers){
    return drivers.map(driver => {
        let [firstName, lastName] = driver.split(" ");
        return {firstName, lastName};
    });
}

function attributesToPhrase(drivers){
    return drivers.map(driver => {
        return `${driver.name} is from ${driver.hometown}`;
    });
}