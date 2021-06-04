import {pool} from "../pool";

export const dropTable = () => {
    return pool.query('drop table if exists users')
}

export const createTable = () => {
    return pool.query(`
        create table users (
            id serial primary key,
            username varchar(100) not null,
            password varchar(100) not null
        )
    `)
}

export default {
    createTable,
    dropTable
}
