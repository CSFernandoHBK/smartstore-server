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

const financeService = {
    createFinance,
    getFinance
}

export default financeService;