const user = require('../Models/user')

exports.postDetails = (req, res, next) => {
  const {Name,Email,Number} = req.body
  user.create({name: Name, emailid: Email, number: Number})
  .then(result => {
    res.status(201).json({success: true, message: 'user susccesfully created'})// 201 - Data Creation
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

exports.deleteUser = (req, res, next) => {
   const email = req.params.email
   user.findAll({where: {emailid:email}})
   .then(user => {
    if(!user){
      res.status(400).json({message: "user not found"})
    }else {
      user[0].destroy()
      .then(response => {
        res.status(200).json({message: "successfully deleted"})
      })
    }
   })
.catch(error => {
  console.log(error);
  res.status(500).json({success: false, message: error})
})
}

