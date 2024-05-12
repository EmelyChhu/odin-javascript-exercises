const removeFromArray = function(array, ...remove) {
    let result = []

    main: for (let element of array) {
        for (let argument of remove) {
            if (element === argument) {
                continue main;
            }
        }
        
        result.push(element)
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
