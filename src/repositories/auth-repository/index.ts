import { prisma } from "../../configs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { invalidCredentialsError } from "../../errors";

async function signIn(email: string, password: string) {
    const userInfo = await verifyEmail(email);
    
    const isPasswordOk = bcrypt.compareSync(password, userInfo.password)

    if(!isPasswordOk){
        throw invalidCredentialsError();
    }

    const token = await createSession(userInfo.id)
    await prisma.session.create({
        data:{
            userId: userInfo.id,
            token: token
        }
    })
    return(token)
}

async function createSession(userId: number) {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    return(token)
}

async function verifyEmail(email: string){
    return await prisma.user.findFirst({
        where:{
            email: email
        }
    })
}

async function signOut(userId: number){
    return await prisma.session.delete({
        where:{
            userId: userId
        }
    })
}

const authRepository = {
    signIn,
    verifyEmail,
    signOut
};

export default authRepository;