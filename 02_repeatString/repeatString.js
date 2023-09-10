const repeatString = function(string, number) {

    if (number < 0) {
        return 'ERROR';
    }
    
    let bigString = '';
    for(i = 0; i < number; i++) {
        bigString += string;
    }
    return bigString
};

// Do not edit below this line
module.exports = repeatString;
