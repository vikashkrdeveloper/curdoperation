const signoutControllers = (req, res) => {
    res.clearCookie('jwttokens', { path: '/' });
    res.status(200).send('Logout sucessfully')
}
module.exports = signoutControllers