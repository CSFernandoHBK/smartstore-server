import financeRepository from "../../repositories/finance-repository";
import { FinanceNew } from "../../protocols";

async function createFinance(userId: number, financeInfo: FinanceNew) {
    const result = await financeRepository.createFinance(userId, financeInfo);
}

async function getFinance(userId: number) {
    const result = await financeRepository.getFinance(userId);
    result.forEach((a) => {delete a.userId});
    return result;
}

async function getOnlySells(userId: number){
    const result = await financeRepository.getFinance(userId);
    result.forEach((a) => {delete a.userId});
    const filteredArray = result.filter((a) => a.isEntry);
    return filteredArray; 
}

const financeService = {
    createFinance,
    getFinance,
    getOnlySells
}

export default financeService;