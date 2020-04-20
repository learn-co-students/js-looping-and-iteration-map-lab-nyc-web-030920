function lowerCaseDrivers(list){
    return list.map(function(name){
        return name.toLowerCase();
    });
    return list;
}

function nameToAttributes(obj){
    return obj.map(function(driver){ 
        const driverFirst = driver.split(' ')[0];
        const driverlast = driver.split(' ')[1];
        return{ firstName: driverFirst, lastName: driverlast};
    });
}

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`;
    });
}
