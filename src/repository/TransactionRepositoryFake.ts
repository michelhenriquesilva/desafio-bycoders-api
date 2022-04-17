import TransactionRepositoryInterface from "../domain/TransactionReposityInterface";
import {Transaction} from "../domain/TransactionInterface";
import transactions from "../mock/transactions";

export default class TransactionRepositoryFake implements TransactionRepositoryInterface {

    async index(): Promise<Transaction[]>{
        try{
            const rows = transactions
            return rows as Transaction[]
        }catch(err: any){
            throw err
        }
    }

    async saveInBatch(data: Transaction[]): Promise<Transaction[]>{
        try{

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                , 200})
            })
             
        }catch(err: any){
            throw err
        }
    }
}