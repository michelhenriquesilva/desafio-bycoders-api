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
const TransactionRepositorySQL_1 = __importDefault(require("../repository/TransactionRepositorySQL"));
const TransactionService_1 = __importDefault(require("../service/TransactionService"));
class TransactionController {
    static index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const service = new TransactionService_1.default(new TransactionRepositorySQL_1.default());
                const data = yield service.index(request, response);
                response.json(data);
            }
            catch (err) {
                response.status(500).json({ error: err.message });
            }
        });
    }
}
exports.default = TransactionController;
//# sourceMappingURL=TransactionController.js.map