let axios=require("axios")

let getState= async function(req,res){
    let website= {
        method: "get",
        url:'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    }

    let fetchdata= await axios(website)

    console.log("fetch data:  ",fetchdata.data)
    res.send(fetchdata.data)
}

//for practise

let getDistricts= async function(req,res){
    let id =req.params.stateid
    let website={
        method:"get",
        url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
    }

    let fetch= await axios(website)

    console.log("fetch line numnber 23:  ", fetch.data)

    res.send(fetch.data)
}

// // 1st Problem ==========================================================================================

let appointment= async function(req,res){
    let query= req.query
    console.log("query find:  ",query)

    let website={
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${query.district_id}&date=${query.date}`
    }

    let fetch =await axios(website)

    console.log("all detail:  ",fetch.data)
    

    res.send(fetch.data)

}

//Practise=============================================================================================

let getOtp= async function(req,res){
    let body=req.body

    let website= {
        method: 'post',
        url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
        data: body
    }

    let fetch = await axios(website)

    console.log("thik h yha tak:  ", fetch.data)

    res.send(fetch.data)
}

//============================================================================================================

let weather= async function(req,res){
    let query=req.query;

    let website= {
        method:"get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${query.q}&appid=${query.appid}`
    }

    let fetch = await axios(website)

    console.log("fetch:  ",fetch.data.name)
    let city= fetch.data.name

    let temperature= fetch.data.main.temp

    let result =parseFloat(temperature)

    console.log("result:   ",result);

    res.send({name:city, temp: result});
}

// ===============================================================================================================

let weatherofAllCity= async function(req,res){
    let query=req.query;

    let location= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];

    let abcd= [];
    for(let i=0;i<location.length;i++){
        let obj= {city: location[i]}

        let website= {
            method:"get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location[i]}&appid=26575d743504e35754fb6b68ea73591e`
        }
        let result= await axios(website)

        obj.temp = result.data.main.temp
        abcd.push(obj)

    }

let sorted= abcd.sort(function(a,b){
    return a.temp-b.temp
})

console.log("sorted ", sorted)

res.send(sorted)


}



//****************************************************************************************************************************** */
//3rd Problem

let meme= async function(req,res){
    let query=req.query

    let website= {
        method: "post",
        url:`https://api.imgflip.com/caption_image?template_id=${query.template_id}&text0=${query.text0}&text1=${query.text1}&username=${query.username}&password=${query.password}`
    }

    let result= await axios(website)

    console.log(result.data)

   res.send(result.data)
}


module.exports.weather=weather
module.exports.getOtp=getOtp
module.exports.getState=getState
module.exports.getDistricts=getDistricts
module.exports.appointment=appointment
module.exports.meme=meme
module.exports.weatherofAllCity=weatherofAllCity