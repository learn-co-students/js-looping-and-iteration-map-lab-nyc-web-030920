const lowerCaseDrivers = (drivers) => {
    return drivers.map(driver => driver.toLowerCase())
};

const nameToAttributes = (drivers) => {
    return drivers.map(driver => {
        let first = driver.split(' ')[0]
        let last = driver.split(' ')[1]
        return {firstName: first, lastName: last}
    })
};

const attributesToPhrase = (drivers) => {
    return drivers.map(driver => {
        return `${driver.name} is from ${driver.hometown}`
    })
};