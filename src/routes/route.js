const express = require('express');
const router = express.Router();

const newController=require("../newController/mainController");


router.post("/createAuthor", newController.NewAuthor  )           //1st Api 

router.post("/CreatePublisher", newController.publisher)

router.get("/getBooksWithAuthorDetails", newController.getBooksWithAuthorDetails); // All books with Author Details
router.post("/ProblemA",newController.ProblemA);
router.put("/newProblem", newController.newProblem)
router.put("/bigProblem",newController.bigProblem)



module.exports = router;