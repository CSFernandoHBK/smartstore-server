import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { prisma } from "../../src/configs";
import { user } from "@prisma/client";

export async function createUser() {
    const password = faker.internet.password();
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
        data:{
            "username": faker.name.firstName(),
            "email": faker.internet.email(),
            "password": hashedPassword
        }
    })
    user.password = password;
    return user
}

async function createValidSession(token: string, userId: number){
    await prisma.session.create({
        data:{
            userId: userId,
            token: token
        }
    })
}

export async function generateValidToken(user: user) {
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    await createValidSession(token, user.id);
    return token;
  }