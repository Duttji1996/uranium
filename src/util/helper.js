const printMonth = new Date();

console.log(printMonth.getMonth() + 1);

const printDate= new Date();
console.log(printDate.getDate());


const getbatchinfo =function(){
    console.log("Thorium, W3D1, the topic for today is Nodejs module system")
}

    
module.exports.printDate= printDate
module.exports.printMonth= printMonth
module.exports.getbatchinfo= getbatchinfo