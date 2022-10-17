function passSecret(req, user){
    req.body.user = req.user._id;
    req.body.userName = req.user.userName
}

module.exports = {
    passSecret,
}