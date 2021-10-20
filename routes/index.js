let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    firstName_: "Joe",
    lastName_: 'Smith',
    dateOfBirth_: "9/10/01",
    addressLine1_: "4321 Reehlnam Road",
    addressLine2_: "Apt 102",
    city_: "Elverta",
    zip_: "95626",
    policyStartDate_: "11/13/18"
  });
});

router.post('/card', function(req, res) {
  console.log(req.body.dateOfBirth);
  res.render('card', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    dateOfBirth: new Date(req.body.dateOfBirth),
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    accountNumber: createAccountNumber(),
    currentDate: new Date(),
    policyStartDate: new Date(req.body.policyStartDate),
    cardClass: getCardClass(req.body.type)
  });
});
module.exports = router;

function createAccountNumber() {
  let accNum = "";
  for (let i = 0; i < 5; i++) {
    let temp = Math.floor(Math.random() * 10);
    accNum += temp;
  }
  return accNum
}

function getCardClass(type) {
  if (type === "Premium") {
    return "premium"
  } else if (type === "Standard") {
    return "standard"
  } else if(type === "Bronze") {
    return "bronze"
  } else {
    return ""
  }
}