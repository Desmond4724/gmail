"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = exports.dropTable = void 0;
const pool_1 = require("../pool");
const dropTable = () => {
    return pool_1.pool.query('drop table if exists users');
};
exports.dropTable = dropTable;
const createTable = () => {
    return pool_1.pool.query(`
        create table users (
            id serial primary key,
            username varchar(100) not null,
            password varchar(100) not null
        )
    `);
};
exports.createTable = createTable;
exports.default = {
    createTable: exports.createTable,
    dropTable: exports.dropTable
};
//# sourceMappingURL=user.js.map