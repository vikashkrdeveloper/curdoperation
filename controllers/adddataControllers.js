const database = require('../module/Adddata')
const adddataControllers = async (req, res) => {
    try {
        const { name, email, phone, title, description } = req.body
        if (name && email && phone && title && description) {
            const insertdata = new database({ name, email, phone, title, description })
            await insertdata.save();
            res.status(200).send('Added Sucessfully');
        }
        else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        res.status(404).send('')
    }
}
module.exports = adddataControllers;