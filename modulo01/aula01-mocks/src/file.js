const { readFile } = require('fs').promises;
const { error } = require('./constants');
const  User = require('./user'); 
const DEFAULT_OPTION = {
    maxLines: 3,
    fields: [ 'id', 'name', 'profession', 'age']
}

class File {
    static async csvToJson(filePath) {
        const content = await File.getFileContent(filePath);
        const validation = await File.isValid(content);
        if (!validation.valid) throw new Error(validation.error);

        const users = File.parseCsvToJason(content)
        return users;
    }

    static async getFileContent(filePath) {
        return (await readFile(filePath)).toString('utf-8');
    }

    static async isValid(cvsString, options = DEFAULT_OPTION) {
        const [header, ...fileWithoutHeader] = cvsString.split('\n');
        const isHeaderValid = header === options.fields.join(',');
        if (!isHeaderValid) {
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
        }

        const isContentLengthAccepted = (
            fileWithoutHeader.length > 0 &&
            fileWithoutHeader.length <= options.maxLines
        )
        if (!isContentLengthAccepted) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false
            }
        }
        return { valid: true }
    }

    static parseCsvToJason(cvsString) {
        const lines = cvsString.split('\n');
        //remove o primeiro item e joga na variável
        const firstLine = lines.shift();
        const header = firstLine.split(',');
        const users = lines.map(line => {
            const columns = line.split(',');
            let user = {}
            for(const index in columns) {
                user[header[index]] = columns[index]
            }
            return new User(user);
        });
        return users;
    }
}

module.exports = File;