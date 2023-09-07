const database = require('../module/RegistrationSchema');
const hashingpasswordfunction = require('../helper/hash')
const registrationControllers = async (req, res) => {
    try {
        const { name, email, username, phone, password } = req.body;
        if (name && email && username && phone && password) {
            const findemail = await database.findOne({ email });
            const findusername = await database.findOne({ username });
            const findphone = await database.findOne({ phone });
            if (findemail) {
                res.status(400).send('Email id already exist');
            }
            else {
                if (findusername) {
                    res.status(401).send('Username already exist');

                }
                else {
                    if (findphone) {
                        res.status(402).send('Phone Number already exist');

                    } else {
                        const hashingpassword = await hashingpasswordfunction(password)
                        const insertdata = new database({ name, email, username, phone, password: hashingpassword });
                        await insertdata.save();
                        res.status(200).send('Registration Sucessfully');
                    }
                }
            }

        }
        else {
            res.status(500).send('All field require')
        }


    }
    catch (error) {
        res.status(404).send('Some technical issue');
    }
}
module.exports = registrationControllers