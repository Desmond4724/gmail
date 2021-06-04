import {pool} from "../pool";

export const dropTable = () => {
    return pool.query('drop table if exists mails ')
}

export const createTable = () => {
    return pool.query(`
        create table mails (
            id serial primary key,
            from_user integer not null,
            to_user integer  not null,
            body text,
            sent_at timestamp,
            CONSTRAINT fk_from_user FOREIGN KEY(from_user)    REFERENCES users(id)  ON DELETE CASCADE,
            CONSTRAINT fk_to_user FOREIGN KEY(to_user)    REFERENCES users(id)  ON DELETE CASCADE
        )
    `)
}


export default {
    dropTable,
    createTable
}
