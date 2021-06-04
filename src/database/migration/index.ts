import Mail from "./mail";
import User from './user'

class Migration {
    migrations: (() => void)[] = []

    constructor() {
        this.migrations = []
    }

    add(fc: () => void) {
        this.migrations.push(fc)
    }

    run() {
        return new Promise(async (resolve) => {
            for (let item of this.migrations) {
                await item()
            }
            resolve('migrated')
        })
    }
}


const migration = new Migration()
migration.add(Mail.dropTable)
migration.add(User.dropTable)
migration.add(User.createTable)
migration.add(Mail.createTable)

migration.run().then(res => {
    console.log(res);
})


