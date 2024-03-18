// NotifyMe (depemds 'mysql utility')
// Aurora Stdios Services
// @zairdeluque - The creator

const { Connection } = require('../mysqlUtilities/connectionManager')
const { DateTime } = require('luxon')

function generateRandomNumberString() {
    return new Promise((resolve, reject) => {
        let randomNumberString = '';
        for (let i = 0; i < 12; i++) {
            randomNumberString += Math.floor(Math.random() * 10);
        }
        resolve(randomNumberString);
    });
}

function generateNewNotification(uuid, title, subtitle, severity, router){
    return new Promise(async (resolve, reject) => {
        let cn;

        try {
            cn = await Connection();

            const id = await generateRandomNumberString();

            const query = `INSERT INTO n0x (own0x0, id0x1, title0x2, subtitle0x3, severity0x4, dir0x5, date0x6 ,read0x7) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [uuid, id, title, subtitle, severity, router, DateTime.now().toISO(), 0];

            const [res] = await cn.execute(query, values);

            if (res.affectedRows > 0) {
                resolve(true)
            }
        }
        catch (err) {
            console.log(err)
            reject(false)
        }
        finally {
            if (cn) {
                cn.end()
            }
        }
    })
}

module.exports = {
    create: generateNewNotification
}