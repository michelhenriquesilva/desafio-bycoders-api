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
const database_1 = __importDefault(require("../database/database"));
const crypto_1 = require("crypto");
class TransactionRepositorySQL {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rows = yield database_1.default.query("SELECT MAX(shop) shop, SUM(amount) as total FROM transactions GROUP BY shop");
                return rows;
            }
            catch (err) {
                throw err;
            }
        });
    }
    saveInBatch(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return database_1.default.tx(transaction => {
                    const queries = data.map((item) => {
                        return transaction.none(`INSERT INTO transactions ("id", "type", "date", "time", "amount", "document", "card", "shop_owner", "shop") 
                        VALUES 
                        ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [
                            (0, crypto_1.randomUUID)(),
                            item.type,
                            item.date,
                            item.time,
                            item.amount,
                            item.document,
                            item.card,
                            item.shop_owner,
                            item.shop
                        ]);
                    });
                    return transaction.batch([queries]);
                }).then(() => {
                    return data;
                }).catch(err => {
                    throw err;
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = TransactionRepositorySQL;
//# sourceMappingURL=TransactionRepositorySQL.js.map