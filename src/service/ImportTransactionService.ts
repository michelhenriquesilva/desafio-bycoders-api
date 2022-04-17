import { Transaction } from "../domain/TransactionInterface";
import TransactionRepositoryInterface from "../domain/TransactionReposityInterface";

export default class ImportTransactionService {
    
    public repository: TransactionRepositoryInterface;

    constructor(repository: TransactionRepositoryInterface){
        this.repository = repository
    }

    import(fileBuffer: any): Promise<any>{
        return new Promise( async (resolve, reject) => {
            try{
                const transactions: Transaction[] = []

                const rows = fileBuffer.toString('utf-8').split('\r\n')        
                for (const row of rows){
                    transactions.push({
                        type: row.slice(0, 1),
                        date: row.slice(1, 9).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"),
                        amount: (row.slice(9, 19) / 100),
                        document: row.slice(19, 30),
                        card: row.slice(30, 42),
                        time: row.slice(42, 48).replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3"),
                        shop_owner: row.slice(48, 62).trim(),
                        shop: row.slice(62, 81).trim(),
                    })
                }

                const save = await this.repository.saveInBatch(transactions)
                resolve(save)
            }catch(err){
                reject(err)
            }
        })
    }
}