import TransactionRepositoryFake from "../src/repository/TransactionRepositoryFake";
import TransactionService from "../src/service/TransactionService";
import transactionsFakeData from "../src/mock/transactions";

test("Should be get list of transactions saved", async function(){
    const repository = new TransactionRepositoryFake();
    const service = new TransactionService(repository);
    const transactions = await service.index();
    expect(transactions).toEqual(transactionsFakeData)
})