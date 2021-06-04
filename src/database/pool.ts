import {Pool} from "pg";

export const pool = new Pool({
    connectionString: 'postgres://postgres:123456@localhost:5432/gmail'
})


