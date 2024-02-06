// 2FA Controller
// HomeServices Web Services
// @zairdeluque - The creator

const QR_CODE = require('qrcode');
const speakeasy = require('speakeasy');
const { Connection } = require('../../utility/mysqlUtilities/connectionManager')
const CRYPT = require('../../utility/cesarCipherUtilities/cryptHelper').start('2FA')

function tfaSetupHandle(req, res){
    const body = req.body;

    const secret = speakeasy.generateSecret({
        length: 10,
        name: body.n0x,
        issuer: 'HomeServices Web Auth'
    });

    var URL = speakeasy.otpauthURL({
        secret: secret.base32,
        label: body.n0x,
        issuer: 'HomeServices Web Auth',
        encoding: 'base32'
    });

    QR_CODE.toDataURL(URL, (err, dataURL) => {
        if(err){
            console.log("[ERR-2FA] Error while 'tfaSetupHandle' try create a QR Code.");
            res.status(503).json({taskCompleted: false, message: 'Error al intentar crear el código QR'});
            return;
        }

        res.status(200).json({
            tempSecret: secret.base32,
            taskCompleted: true,
            message: '2FA creado con éxito para el usuario. Escanea el código QR con tu app de autenticación y verifica el código.',
            tfaURL: secret.otpauth_url,
            qrURL: dataURL
        })
    })
}

async function tfaTemporalSecretHandle(uuid){
    return new Promise(async (res, rej) => {
        let cn;
        
        try{
            cn = await Connection();

            const sql = `SELECT * FROM ts0x WHERE u0x = ?`;
            const values = [uuid];

            const [rows] = await cn.query(sql, values);

            if(rows.length > 0){
                res(await CRYPT.resolveChallenge(rows[0].ts0x));
            }
            else{
                res(null)
            }
        }
        catch{
            rej('Error al intentar obtener el secreto temporal de 2FA. Inténtalo de nuevo.');
        }
        finally{
            if(cn){
                cn.end();
            }
        }
    })
}

async function tfaVerificationHandle(req, res){
    try{
        const body = req.body;
        const TFA_SECRET = await tfaTemporalSecretHandle(body.u0x);

        let isVerified = speakeasy.totp.verify({
            secret: TFA_SECRET,
            encoding: 'base32',
            token: body.t0x
        })

        if(isVerified){
            res.status(200).json({taskCompleted: true, message: 'Código 2FA verificado con éxito.'});
        }
        else{
            res.status(403).json({taskCompleted: false, message: 'Código 2FA incorrecto. Inténtalo de nuevo.'});
        }
    }
    catch{
        res.status(503).json({taskCompleted: false, message: 'Error al intentar verificar el código 2FA. Inténtalo de nuevo.'});
    }
}

module.exports = {
    tfaSetupHandle: tfaSetupHandle,
    tfaVerificationHandle: tfaVerificationHandle
}