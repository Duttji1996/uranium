const Bookmodel=require("../bookschema/bookModel2");
const Authormodel=require("../authorschema/authormodel");

const Bookcreate= async function (req,res){
    let data= req.body;
    const allData= await Bookmodel.create(data);
    res.send({allData});
}

const authorCreate= async function(req,res){
    let Adata= req.body;
    const totalData= await Authormodel.create(Adata);
    res.send({totalData});
}
//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- 
//first query will find the author_id for "Chetan Bhagat”. 
//Then next query will get the list of books with that author_id )

// give an reqest from body like as: {"author_name": "Krishna"}

const findDetails= async function(req,res){ 
    let body=req.body;
    let authorData= await Authormodel.find(body)
    //console.log(authorData)
    let id= authorData[0].author_id
    let bookData =await Bookmodel.find({author_id: id}).select({name: true, _id: 0})
    res.send({msg: bookData})

}
// Just for understaing, if we should author_name by bookname.... e.g.= {"name": "Geeta"}
    const findAuthor= async function(req,res){
    let bookname=req.body;
    console.log("Body Request",bookname)
    let bookData =await Bookmodel.find(bookname)
    let id= bookData[0].author_id
    console.log("Author Id: ",id)
    let authName= await Authormodel.find({author_id: id}).select({author_name: true, _id:0})
    console.log("Authorname: ",authName)
    res.send(authName);
}
// it will update the price and find the the author name  by sending body request: {"name": "Geeta"}
const updatePrice= async function(req,res){
    let bookname=req.body;
    console.log("Body Request",bookname)
    let bookData =await Bookmodel.find(bookname)
    let id= bookData[0].author_id
    console.log("Author Id: ",id)
    let authName= await Authormodel.find({author_id: id}).select({author_name: true, _id:0})
    console.log("Authorname: ",authName)
    const PriceUpdate= await Bookmodel.findOneAndUpdate( bookname, {price: 100},{new:true}).select({price: 1})
    console.log("Price:  ",PriceUpdate);
    res.send({msg: authName, PriceUpdate})
}
//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 

const Findbook= async function(req,res){
    let bookName= await Bookmodel.find({price: {$gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})
    console.log(bookName)

    let arr =[];
    for (let i=0;i<bookName.length;i++){
        let authorName= await Authormodel.find({author_id: bookName[i].author_id}).select({author_name: 1, _id: 0})
       arr= arr.concat(authorName)
    }
    res.send(arr)
}


module.exports.Bookcreate=Bookcreate;
module.exports.authorCreate=authorCreate;
module.exports.findDetails=findDetails;
module.exports.findAuthor=findAuthor;
module.exports.updatePrice=updatePrice;
module.exports.Findbook=Findbook;