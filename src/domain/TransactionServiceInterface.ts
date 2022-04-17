import {Transaction} from "./TransactionInterface";

export default interface TransactionServiceInterface {
    index(request, response): Promise<Transaction[]>
    show(id: string): Promise<Transaction>
    save(data: Transaction): Promise<Transaction>
    update(data: Transaction, id: string): Promise<Transaction>
    destroy(id: string): Promise<void>
}