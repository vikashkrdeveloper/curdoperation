const errorControllers = (req, res) => {
    res.status(404).send('Ooops Page not found');
}
module.exports = errorControllers;