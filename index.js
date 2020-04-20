// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(driver){
        return driver.toLowerCase();
    });
}

function nameToAttributes(drivers){
    return drivers.map(function(driver){
        let driverFirst = driver.split(" ")[0];
        let driverLast = driver.split(" ")[1];

        return { firstName: driverFirst, lastName: driverLast}
    });

}

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
        let driverName = driver.name;
        let driverHome = driver.hometown;
        return `${driverName} is from ${driverHome}`
    });
}
