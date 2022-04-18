import database from "../database/database";
import TransactionRepositoryInterface from "../domain/TransactionReposityInterface";
import {Transaction} from "../domain/TransactionInterface";
import { randomUUID } from "crypto"

export default class TransactionRepositorySQL implements TransactionRepositoryInterface {

    async index(): Promise<Transaction[]>{
        try{
            const rows = await database.query(
                `select 
                max(shop) shop,  
                SUM(case 
                    when type = 2 or type = 3 or type = 9
                    then amount * -1
                    else amount
                end) as total
                from transactions group by shop`,
            )
            return rows
        }catch(err: any){
            throw err
        }
    }

    async saveInBatch(data: Transaction[]): Promise<Transaction[]>{
        try{

            return database.tx( transaction => {
                const queries = data.map((item: Transaction) => {
                    return transaction.none(
                        `INSERT INTO transactions ("id", "type", "date", "time", "amount", "document", "card", "shop_owner", "shop") 
                        VALUES 
                        ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
                        [
                            randomUUID(), 
                            item.type,
                            item.date,
                            item.time,
                            item.amount,
                            item.document,
                            item.card,
                            item.shop_owner,
                            item.shop
                        ]
                    )
                })      
            
                return transaction.batch([queries])

            }).then(() => {
                return data
            }).catch(err => {
                throw err
            })
        }catch(err: any){
            throw err
        }
    }
}