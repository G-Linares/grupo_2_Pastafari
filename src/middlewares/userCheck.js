//checks if user is logedduser

function userCheck (req,res,next) {
    if (!req.session.loggedUser) {
        return res.redirect('/');
    }
    next();
}

module.exports = userCheck;