const { Connection } = require('../../utility/mysqlUtilities/connectionManager')

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    
    for (let i = 0; i < 100; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
}

async function createSessionToken(req, res) {
    
}
