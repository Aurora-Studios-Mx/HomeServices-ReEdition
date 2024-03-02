const { ConnectionAdmins } = require('./mysqlUtilities/connectionManager')

const checkToken = (req, res, next) => {
    
    console.log('Pass middleware')

    next();
}

const SHELL_RESET = "\x1b[0m";
const SHELL_RED = "\x1b[31m";
const SHELL_GREEN = "\x1b[32m";
const SHELL_YELLOW = "\x1b[33m";
const SHELL_BLUE = "\x1b[34m";
const SHELL_MAGENTA = "\x1b[35m";
const SHELL_CYAN = "\x1b[36m";

function studioLoggerHandle(req, res, next){

    let METHOD = req.method;
    let DATE = new Date().toLocaleString();

    if(METHOD === 'GET'){
        console.log(`   ${SHELL_GREEN}[GET]${SHELL_RESET} ${req.url} - ${SHELL_MAGENTA}Origins: ${req.ip}${SHELL_RESET} - ${SHELL_CYAN}Date: ${DATE}${SHELL_RESET}`);
    }
    else if (METHOD === 'POST'){
        console.log(`   ${SHELL_YELLOW}[POST]${SHELL_RESET} ${req.url} - ${SHELL_MAGENTA}Origins: ${req.ip}${SHELL_RESET} - ${SHELL_CYAN}Date: ${DATE}${SHELL_RESET}`);
    }
    else if(METHOD === 'PUT'){
        console.log(`   ${SHELL_BLUE}[PUT]${SHELL_RESET} ${req.url} - ${SHELL_MAGENTA}Origins: ${req.ip}${SHELL_RESET} - ${SHELL_CYAN}Date: ${DATE}${SHELL_RESET}`);
    }
    else{
        console.log(`   [DELETE] ${req.url} - ${SHELL_MAGENTA}Origins: ${req.ip}${SHELL_RESET} - ${SHELL_CYAN}Date: ${DATE}${SHELL_RESET}`);
    }

    next();
}

function FalconSQLInyector(req, res, next){
    
    let METHOD = req.method;
    let DATE = new Date().toLocaleString();
    const bodyAsStringify = JSON.stringify(req.body);

    const patternsSuspicions = [
        /select\s+\*/i,
        /union\s+select/i,
        /insert\s+into/i,
        /delete\s+from/i,
        /drop\s+table/i,
        /update\s+.+\s+set/i,
        /exec\s*\(/i,
        /execute\s*\(/i
    ];

    for(let pattern of patternsSuspicions){
        if(pattern.test(bodyAsStringify)){
            console.log(`   ${SHELL_RED}[FALCON-SQL Inyectors] [${METHOD}] - SQL inyection detected - Origins: ${req.ip} - Date: ${DATE}`);
            return res.status(400).json({message: 'Request blocked.', reason: 'SQL command detected.'})
        }
    }

    next();
}

async function FalconIPBanned(req, res, next){
    let cn;
    let METHOD = req.method;
    let DATE = new Date().toLocaleString();

    try{
        cn = await ConnectionAdmins();

        const sql = `SELECT * FROM b0x WHERE ip = ?`;
        const values = [req.ip || req.connection.remoteAddress];

        const [rows] = await cn.query(sql, values);

        if(rows.length > 0){
            console.log(`   ${SHELL_RED}[FALCON-IP Banned] [${METHOD}] - IP Banned request detected - Origins: ${req.ip} - Date: ${DATE}`);
            return res.status(403).json({message: 'Your IP is banned.', reason: rows[0].reason});
        }
        else{
            next();
        }
    }
    catch{
        next();
    }
    finally{
        if(cn){
            cn.end();
        }
    }
}

module.exports = { checkToken, studioLoggerHandle, FalconSQLInyector, FalconIPBanned }