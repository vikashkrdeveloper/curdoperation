const database = require('../module/Adddata')
const deleteadddataControllers = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const deletedata = await database.deleteOne({ _id: id });
            res.status(200).send('Deletedata sucessfully')

        } else {
            res.status(500).send('Some technical issue')
        }


    }
    catch (error) {
        console.log('Some techical issue');
    }
}
module.exports = deleteadddataControllers