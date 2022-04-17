import {Transaction} from "../domain/TransactionInterface";

export default interface TransactionRepositoryInterface {
    index(criteria: any): Promise<Transaction[]>
    saveInBatch(data: Transaction[]): Promise<Transaction[]>
}