const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`'${base}' no es un número!`);
            return;
        }
        else {
            if(!Number(limite)) {
                reject(`'${limite}' no es un número!`);
                return;
            }
            else {
                let data = '';
                for (let i=1; i<=limite; i++) {
                    data += `${ base } * ${i} = ${ base * i }\n`;
                }
        
                resolve(data);
            }
        }
    });
}

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite=10) => {

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`'${base}' no es un número valido para la base!`);
            return;
        }
        else {
            if(!Number(limite)) {
                reject(`'${limite}' no es un número valido para el limite!`);
                return;
            }
            else {
                let nombreArchivo = `tablas/tabla-${base}.txt`;
                let data = '';
                
                for (let i=1; i<=limite; i++) {
                    data += `${base} * ${i} = ${base*i}\n`;
                }
                
                fs.writeFile(nombreArchivo, data, (err) => {
                    if (err) 
                        reject(err);
                    else
                        resolve(nombreArchivo);
                });
            }
        }
    });

};

module.exports = {
    crearArchivo,
    listarTabla
};