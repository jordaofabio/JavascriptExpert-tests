const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');



(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv';
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }
    {
        const filePath = './mocks/fourItems-invalid.csv';
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await rejects(result, rejection);
    }
    {
        const filePath = './mocks/threeItems-valid.csv';
        const result = await File.csvToJson(filePath);
        const expected = [
                {
                    "id": 123,
                    "name": "Fabio",
                    "profession": "Developer",
                    "birthDay": new Date().getFullYear() - 34
                },
                {
                    "id": 124,
                    "name": "Xuxa da Silva",
                    "profession": "ront-end Developer",
                    "birthDay": new Date().getFullYear() - 80
                },
                {
                    "id": 125,
                    "name": "Joãozinho",
                    "profession": "QA",
                    "birthDay": new Date().getFullYear() - 25
                }
            ];
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
    }
})();