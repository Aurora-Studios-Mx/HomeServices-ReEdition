const { ConnectionAdmins } = require('../../utility/mysqlUtilities/connectionManager')

function generateRandomString() {
    return new Promise((res) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        
        for (let i = 0; i < 100; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        res(result);
    })
}

async function createSessionToken(req, res) {
    let cn;
    
    try{
        cn = await ConnectionAdmins();

        const token = await generateRandomString();

        const sql = 'INSERT INTO l0x (apiKey, date) VALUES (?, ?)';
        const values = [token, new Date()];

        const [result] = await cn.execute(sql, values);

        if(result.affectedRows === 1){
            res.status(200).json({token: token, message: 'Token created successfully. ', statusCode: 200});
        }
        else{
            res.status(200).json({message: 'Error creating token. ', statusCode: 500});
        }

    }
    catch (err){
        console.log('[ERR] Error creating Developer Login (createSessionToken) token: ' + err);
        res.status(500).json({message: 'Error creating token. ', statusCode: 500});
    }
    finally{
        if(cn){
            cn.end();
        }
    }
}

async function getAvailableToken(req, res) {
    let cn;
    
    try{
        const body = req.body;
        cn = await ConnectionAdmins();

        const sql = 'SELECT * FROM l0x WHERE apiKey = ?';
        const values = [body.t0]

        const [result] = await cn.execute(sql, values);

        if(result.length > 0){
            res.status(200).json({available: true})
        }
        else{
            res.status(200).json({available: false})
        }
    }
    catch (err){
        console.log('[ERR] Error creating Developer Login (getAvailableToken) token: ' + err);
        res.status(500).json({message: 'Error checking token. ', statusCode: 500});
    }
    finally{
        if(cn){
            cn.end();
        }
    }
}

module.exports = {
    createSessionToken: createSessionToken,
    getAvailableToken: getAvailableToken
}