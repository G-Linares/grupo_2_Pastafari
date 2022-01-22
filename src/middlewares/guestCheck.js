//checks if user is guest

function guestCheck (req,res,next) {
    if (req.session.loggedUser) {
        return res.redirect('/');
    }
    next();
}

module.exports = guestCheck;