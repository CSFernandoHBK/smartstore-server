import { prisma } from "../../configs";
import bcrypt from "bcrypt";

async function signUp(username: string, email: string, password: string) {
    const passwordHash = bcrypt.hashSync(password, 10);

    return await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: passwordHash
        }
    })
}

async function verifyEmail(email: string){
    return await prisma.user.findFirst({
        where:{
            email: email
        }
    })
}

const userRepository = {
    signUp,
    verifyEmail
}

export default userRepository;