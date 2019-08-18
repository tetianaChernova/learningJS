// Встроенный в Node.JS модуль для проверок
let assert = require('assert');

// Подключаем свою функцию
let getHashTags = require('./index.js');

assert.deepEqual(
    getHashTags('Прохожу курс на #coursera по #javascript'),
    ['coursera', 'javascript'],
    'Строка "Прохожу курс на #coursera по #javascript"' +
    ' должна содержать хэштеги "coursera, javascript"'
);

// getHashTags('#tralik hello #tanya');

console.info('OK!');
