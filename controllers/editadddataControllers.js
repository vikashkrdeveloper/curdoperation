const database = require('../module/Adddata')
const editadddataControllers = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, phone, title, description } = req.body;
        if (name && email && phone && title && description) {
            await database.updateOne({ _id: id }, { name, email, phone, title, description })
            res.status(200).send('Edit Sucessfully')

        }
        else {
            res.status(500).send('All field require')

        }

    }
    catch (error) {
        console.log('Some technical issue');
    }
}
module.exports = editadddataControllers