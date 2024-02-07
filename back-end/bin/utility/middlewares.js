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
        console.log(`   ${SHELL_RED}[DELETE]${SHELL_RESET} ${req.url} - ${SHELL_MAGENTA}Origins: ${req.ip}${SHELL_RESET} - ${SHELL_CYAN}Date: ${DATE}${SHELL_RESET}`);
    }

    next();
}

module.exports = { checkToken, studioLoggerHandle }