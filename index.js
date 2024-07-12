function findMatching(drivers, name) {
    const lowerCaseName = name.toLowerCase();
    
    const matchingDrivers = drivers.filter(driver => {
        // Convert each driver's name to lowercase for case insensitivity
        const lowerCaseDriverName = driver.toLowerCase();
        
        return lowerCaseDriverName.includes(lowerCaseName);
    });
    
    return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
    const lowerCaseQuery = query.toLowerCase();
    const matchingDrivers = drivers.filter(driver => {
        const lowerCaseDriver = driver.toLowerCase();
        return lowerCaseDriver.startsWith(lowerCaseQuery);
    });
    return matchingDrivers;
}

function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => {
        return driver.name === name;
    });

    return matchingDrivers;
}




// Code your solution here
