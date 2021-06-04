"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = exports.dropTable = void 0;
const pool_1 = require("../pool");
const dropTable = () => {
    return pool_1.pool.query('drop table if exists mails ');
};
exports.dropTable = dropTable;
const createTable = () => {
    return pool_1.pool.query(`
        create table mails (
            id serial primary key,
            from_user integer not null,
            to_user integer  not null,
            body text,
            sent_at timestamp,
            CONSTRAINT fk_from_user FOREIGN KEY(from_user)    REFERENCES users(id)  ON DELETE CASCADE,
            CONSTRAINT fk_to_user FOREIGN KEY(to_user)    REFERENCES users(id)  ON DELETE CASCADE
        )
    `);
};
exports.createTable = createTable;
exports.default = {
    dropTable: exports.dropTable,
    createTable: exports.createTable
};
//# sourceMappingURL=mail.js.map