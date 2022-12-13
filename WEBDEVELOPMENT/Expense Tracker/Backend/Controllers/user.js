const user = require('../Models/user')

exports.postDetails = (req,res, next) => {
    const {My_Expense_Amount, Description,  category } = req.body
    user.create({My_Expense_Amount: My_Expense_Amount, Choose_Description: Description,  Choose_a_category:  category })
    .then(result => {
        res.status(201).json({success: true, message: 'expense added'}) 
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({success: false, message: error})
    })
}

exports.getDetails = (req,res,next) => {
    user.findAll()
    .then(users => {
      res.status(200).json({data: users}) //200 -  Successful
    })

    .catch(error => {
        console.log(error);
        res.status(500).json({success: false, message: error})
    })
    }

