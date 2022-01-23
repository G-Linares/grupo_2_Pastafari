//checks if user is admin

function adminCheck (req, res, next) {
    switch (req.session.loggedUser.username) {
        case "MAR": 
        next();
        break;
        default: 
        res.redirect("/");
        break; 
    }
}

module.exports = adminCheck;