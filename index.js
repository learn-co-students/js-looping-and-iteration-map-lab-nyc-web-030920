// Code your solution in this file.
function lowerCaseDrivers(list){
    return list.map(function(name){ //returns all array
        return name.toLowerCase()
    })
}   

function nameToAttributes(list) {
    return list.map(function(driver) {
      const driverFirst = driver.split(' ')[0];
      const driverLast = driver.split(' ')[1];
  
      return { firstName: driverFirst, lastName: driverLast };
    });
}

// function attributesToPhrase(list){
//     return list.map(function(driver){
//         let name= driver[name]
//         let hometown =driver[hometown]
//         retrun `${name} is from ${hometown}`
//     })
// }   EXPLAIN WHY THIS DOESN'T WORK 

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
      return `${driver.name} is from ${driver.hometown}`;
    });
  }