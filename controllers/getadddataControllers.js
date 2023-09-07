const database = require('../module/Adddata')
const getadddataControllers = async (req, res) => {
    try {
        const finddata = await database.find();
        res.status(200).send(finddata);
    } catch (error) {
        console.log('Some technical issue');
    }

}
module.exports = getadddataControllers