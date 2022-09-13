const fibonacci = function(num, saved=[1,1]) {
    if(num == 2 || num == 1) return 1
    for(let x = 3; x <= num; x++){
        let temp = saved[0];
        saved[0] = saved[1];
        saved[1] =  temp + saved[0];
    }
    return saved[1]
};
console.log(fibonacci(50));

// Do not edit below this line
module.exports = fibonacci;
 