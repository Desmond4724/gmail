"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    connectionString: 'postgres://postgres:123456@localhost:5432/gmail'
});
//# sourceMappingURL=pool.js.map