let postarr= function (req, res) {
    // let a = { msg: "My first ever API response in JSON !!"} 
 let arr = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
    },
    {
        "name": "Prakash",
        "dob": "1/1/1996",
        "gender": "male",
        "city": "Mirzapur",
        "sports": [
        "Cricket"
        ]

    },
    {
        "name": "Vikas",
        "dob": "1/1/1998",
        "gender": "male",
        "city": "Allahabad",
        "sports": [
        "Hockey"
        ]
    }
]

let abc=req.body.name
for(let i=0; i<arr.length;i++){
    if(arr[i].name==abc){
        res.send("user name is alredy exist")
        break;
    }
}
    arr.push(req.body)
    res.send( arr )
}

module.exports.postApi=postarr;