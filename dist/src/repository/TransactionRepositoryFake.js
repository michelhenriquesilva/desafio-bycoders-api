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
const transactions_1 = __importDefault(require("../mock/transactions"));
class TransactionRepositoryFake {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rows = transactions_1.default;
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
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data)
                            , 200;
                    });
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = TransactionRepositoryFake;
//# sourceMappingURL=TransactionRepositoryFake.js.map