const User = require ('../../models/users');
const jwt = require ('jsonwebtoken');
const { token } = require('morgan');
function create(req, res){
// const {raw} = require("express")
    async function create(req, res){
    try{
        const user = await User.create(req.body);
        token = createJWT(user);
        return res.json(token);
    }catch(error){
        res.status(400).json(error); // would typically be a render if api send .json
    }
}
    function createJWT(user) {
        return jwt.sign(
            {user},
            process.env.SECRET,
            {expiresIn: '24h'}
        );
    }

    

    // res.json({
    //     user :{   //responding with user object 
    //         name: req.body.name,
    //         email: req.body.email
    //     }
    // })
}

module.exports = {
    create
}