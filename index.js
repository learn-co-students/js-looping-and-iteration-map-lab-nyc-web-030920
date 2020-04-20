// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(arr) {
  return arr.map(function(driver) {
    return Object.assign({}, {['firstName']: driver.split(" ")[0], ['lastName']: driver.split(' ')[1]} )
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(obj){
    return `${obj.name} is from ${obj.hometown}`
  })
}