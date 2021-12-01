const mainController = {
    home: (req,res) => {
        res.render('home')
    },
    menu: (req,res) => {
        res.render('menu')
    },
    carrito: (req,res) => {
        res.render('carrito')
    },
    registro: (req,res) => {
        res.render('registro')
    },
    login: (req,res) => {
        res.render('login')
    },
};

module.exports = mainController;