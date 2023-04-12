import { prisma } from "../../configs";
import { FinanceNew } from "../../protocols";

async function createFinance(userId: number, financeInfo: FinanceNew) {
    await prisma.finance.create({
        data:{
            userId: userId,
            ...financeInfo
        }
    })
}

async function getFinance(userId: number){
    return await prisma.finance.findMany({
        where:{
            userId: userId
        }
    })
}

const financeRepository = {
    createFinance,
    getFinance
}

export default financeRepository;