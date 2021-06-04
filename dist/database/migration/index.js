"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = __importDefault(require("./mail"));
const user_1 = __importDefault(require("./user"));
class Migration {
    constructor() {
        this.migrations = [];
        this.migrations = [];
    }
    add(fc) {
        this.migrations.push(fc);
    }
    run() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            for (let item of this.migrations) {
                yield item();
            }
            resolve('migrated');
        }));
    }
}
const migration = new Migration();
migration.add(mail_1.default.dropTable);
migration.add(user_1.default.dropTable);
migration.add(user_1.default.createTable);
migration.add(mail_1.default.createTable);
migration.run().then(res => {
    console.log(res);
});
//# sourceMappingURL=index.js.map