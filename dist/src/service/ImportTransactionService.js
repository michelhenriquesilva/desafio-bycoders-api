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
Object.defineProperty(exports, "__esModule", { value: true });
class ImportTransactionService {
    constructor(repository) {
        this.repository = repository;
    }
    import(fileBuffer) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const transactions = [];
                const rows = fileBuffer.toString('utf-8').split('\r\n');
                for (const row of rows) {
                    transactions.push({
                        type: row.slice(0, 1),
                        date: row.slice(1, 9).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"),
                        amount: (row.slice(9, 19) / 100),
                        document: row.slice(19, 30),
                        card: row.slice(30, 42),
                        time: row.slice(42, 48).replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3"),
                        shop_owner: row.slice(48, 62),
                        shop: row.slice(62, 81),
                    });
                }
                const save = yield this.repository.saveInBatch(transactions);
                resolve(save);
            }
            catch (err) {
                reject(err);
            }
        }));
    }
}
exports.default = ImportTransactionService;
//# sourceMappingURL=ImportTransactionService.js.map