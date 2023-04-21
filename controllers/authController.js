const User = require('../models/user.js')

const userInformation = async (req, res)=>{
   try{
    const { name,email } = req.body;
    console.log(req.body)

     //write data into database
    const user = new User({
        name,
        email,
        
    });
    await user.save();

     // //read data from database
     // const usersData = await User.find({});
    res.status(201).json({ message: "success" });
    
  }catch(e){
    console.log(e);
  }
}


const userInformationget = async (req, res)=>{
  try{
     const usersData = await User.find({});
    res.status(200).json({ usersData });
  }catch(e){
    console.log(e)
  }
   
}

module.exports = { userInformation, userInformationget };

