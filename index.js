// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(low_names){
        return low_names.toLowerCase();
    });
}

function nameToAttributes(drivers){
    return drivers.map(function(driver){
        let first = driver.split(" ")[0]
        let last = driver.split(" ")[1]
        return Object.assign({},{firstName: first},{lastName: last})
    });
}

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`
    });
    
    
}

