// 2FA Controller
// HomeServices Web Services
// @zairdeluque - The creator

const QR_CODE = require('qrcode');
const speakeasy = require('speakeasy');
const { Connection } = require('../../utility/mysqlUtilities/connectionManager')
const CRYPT = require('../../utility/cesarCipherUtilities/cryptHelper').start('2FA')

async function uuidToName(uuid){
    return new Promise(async (res, rej) => {
        let cn;
        
        try{
            cn = await Connection();

            const sql = `SELECT fullname0x4 FROM ud0x WHERE uuid0x0 = ?`;
            const values = [uuid];

            const [rows] = await cn.query(sql, values);

            if(rows.length > 0){
                const RES = await CRYPT.resolveChallenge(rows[0].fullname0x4.toString('utf-8'))

                res(RES);
            }
            else{
                res(null)
            }
        }
        catch (e){
            rej('Error al intentar convertir UUID a Nombre, razon: ' + e);
        }
        finally{
            if(cn){
                cn.end();
            }
        }
    })
}

async function getSecret(uuid){
    return new Promise(async (res, rej) => {
        let cn;
        
        try{
            cn = await Connection();

            const sql = `SELECT secret0x1 FROM tfa0x WHERE owner0x0 = ?`;
            const values = [uuid];

            const [rows] = await cn.query(sql, values);

            if(rows.length > 0){
                res(rows[0].secret0x1.toString('utf-8'));
            }
            else{
                res(null)
            }
        }
        catch (e){
            rej('Error while trying get a secret token: ' + e);
        }
        finally{
            if(cn){
                cn.end();
            }
        }
    })
}

async function saveSecret2FA(uuid, secret){
    return new Promise(async (res, rej) => {
        let cn;
        
        try{
            cn = await Connection();

            const sql = `INSERT INTO tfa0x (owner0x0, secret0x1) VALUES (?, ?)`;
            const values = [uuid, secret];

            const [rows] = await cn.query(sql, values);

            if(rows.affectedRows === 1){
                res(true);
            }
            else{
                res(false)
            }
        }
        catch (e){
            rej('Error to save secret token in DB: ' + e);
        }
        finally{
            if(cn){
                cn.end();
            }
        }
    })
}

async function tfaSetupHandle(req, res){
    const body = req.body;
    const NAME = await uuidToName(body.u0x)

    const secret = speakeasy.generateSecret({
        length: 10,
        name: NAME.toUpperCase(),
        issuer: 'HomeServices WebKit Auth'
    });

    var URL = speakeasy.otpauthURL({
        secret: secret.base32,
        label: NAME.toUpperCase(),
        issuer: 'HomeServices WebKit Auth',
        encoding: 'base32'
    });

    QR_CODE.toDataURL(URL, async (err, dataURL) => {
        if(err){
            console.log("[ERR-2FA] Error while 'tfaSetupHandle' try create a QR Code.");
            res.status(503).json({taskCompleted: false, message: 'Error al intentar crear el código QR'});
            return;
        }

        res.status(200).json({
            tempSecret: await CRYPT.createNewChallenge(secret.base32),
            taskCompleted: true,
            message: '2FA creado con éxito para el usuario. Escanea el código QR con tu app de autenticación y verifica el código.',
            qrURL: dataURL
        })
    })
}

async function tfaVerificationHandle(req, res){
    try{
        const body = req.body;
        const TFA_SECRET = await CRYPT.resolveChallenge(body.s0x);

        let isVerified = speakeasy.totp.verify({
            secret: TFA_SECRET,
            encoding: 'base32',
            token: body.t0x
        })

        if(isVerified){
            const saved = await saveSecret2FA(body.u0x, TFA_SECRET);

            if(saved){
                res.status(200).json({taskCompleted: true, message: 'Código 2FA verificado con éxito.'});
            }
            else{
                throw new Error('Error al intentar guardar el código 2FA en la base de datos.');
            }
        }
        else{
            res.status(403).json({taskCompleted: false, message: 'Código 2FA incorrecto. Inténtalo de nuevo.'});
        }
    }
    catch{
        res.status(503).json({taskCompleted: false, message: 'Error al intentar verificar el código 2FA. Inténtalo de nuevo.'});
    }
}

async function tfaVerificationHandle2(req, res){
    try{
        const body = req.body;
        const TFA_SECRET = await getSecret(body.u0x);

        let isVerified = speakeasy.totp.verify({
            secret: TFA_SECRET,
            encoding: 'base32',
            token: body.t0x
        })

        if(isVerified){
            res.status(200).json({taskCompleted: true});
        }
        else{
            res.status(401).json({taskCompleted: false});
        }
    }
    catch{
        res.status(503).json({taskCompleted: false, message: 'Error al intentar verificar el código 2FA. Inténtalo de nuevo.'});
    }
}

module.exports = {
    tfaSetupHandle: tfaSetupHandle,
    tfaVerificationHandle: tfaVerificationHandle,
    tfaVerificationHandle2: tfaVerificationHandle2
}