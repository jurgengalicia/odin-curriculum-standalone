const palindromes = function (strng) {
    for(i = 0, x = strng.length-1; i <= x; i++, x--){
        if(strng[i] !== strng[x])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
