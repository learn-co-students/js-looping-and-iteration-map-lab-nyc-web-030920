// Code your solution in this file.

function lowerCaseDrivers (driversArray) {

    // take given array and map over it - 
    // driver is temp variable holding each element of array
    // then execute code block - 
    return driversArray.map(function(driver) {
        return driver.toLowerCase()
    })

}

function nameToAttributes(driversArray) {


    return driversArray.map(function(driver) {
        const driverFirst = driver.split(' ')[0];
        const driverLast = driver.split(' ')[1];

        return {
            firstName: driverFirst,
            lastName: driverLast
        };

    })

}

function attributesToPhrase(driversArray) {

    return driversArray.map(function(driver_stats) {
        return `${driver_stats.name} is from ${driver_stats.hometown}`
    })


}