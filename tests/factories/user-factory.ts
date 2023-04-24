import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { prisma } from "../../src/configs";

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