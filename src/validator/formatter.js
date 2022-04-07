let student = " Prakash Dutt Tripathi "
let trim = function (){
    console.log(student.trim());
}
let changetoLowercase = function (){
    console.log(student.toLowerCase())
}
let changetoUppercase = function(){
    console.log(student.toUpperCase());
}


module.exports.trim=trim;
module.exports.changetoLowercase=changetoLowercase;
module.exports.changetoUppercase=changetoUppercase;