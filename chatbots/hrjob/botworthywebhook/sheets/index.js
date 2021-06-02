const ssmStore = require('aws-param-store');
const GoogleSpreadsheet = require('google-spreadsheet');
const getKeys = ssmStore.getParametersSync(
    [
        '/botworthy/privateKey',
        '/botworthy/clientEmail',
        '/botworthy/sheetId'
    ], {
        region: 'us-east-2'
    }
);
const config = {
    client_email: getKeys.Parameters[0].Value,
    private_key: getKeys.Parameters[1].Value
};
const sheets = new GoogleSpreadsheet(getKeys.Parameters[2].Value);
const gsService = fn => {
    return new Promise((resolve, reject) => {
        sheets.useServiceAccountAuth(config, () => {
            sheets.getInfo((err, info) => {
                if (err) return reject(err);
                fn(info, resolve, reject);
            });
        });
    });
};

module.exports.getJobs = index => {
    return gsService((info, resolve, reject) => {
       info.worksheets[index].getRows({}, (err, rows)=> {
           if (err) return reject(err);
           const result = rows.map(item => `${item.id} - ${item.title}`).join('\n');
           return resolve(result);
       })
    });
};