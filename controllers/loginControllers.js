const database = require('../module/RegistrationSchema')
const comparepasswordfunction = require('../helper/comparepasswordfunction')
const loginControllers = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const finddata = await database.findOne({ email });
            if (finddata) {
                const hashingpassword = finddata.password;
                const comparepassword = await comparepasswordfunction(password, hashingpassword);
                if (comparepassword) {
                    const token = await finddata.genratetokens();
                    res.cookie('jwttokens', token);
                    res.status(200).send('Login Sucessfully');
                }
                else {
                    res.status(400).send('Invalid Login details');

                }
            }
            else {
                res.status(400).send('Invalid Login details');
            }
        }
        else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        res.status(404).send('Some technical issue')
    }
}

module.exports = loginControllers;