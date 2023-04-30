import app from "app";
import httpStatus from "http-status";
import supertest from "supertest";
import * as jwt from "jsonwebtoken";
import {faker} from "@faker-js/faker";
import { createUser, generateValidToken } from "../factories/user-factory";
import { cleanDb } from "../helpers";

const server = supertest(app);

beforeEach(async () => {
    await cleanDb();
});

describe("POST /tracking", () => {
    it("should respond with status 401 if no token is given", async () => {
        const response = await server.post("/tracking");
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });
    
    it("should respond with status 401 if given token is not valid", async () => {
        const token = faker.lorem.word();    
        const response = await server.post("/tracking").set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if there is no session for given token", async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
        const response = await server.post("/tracking").set("Authorization", `Bearer ${token}`)
        expect(response.status).toBe(401)
    });


    describe("when token is valid", () => {
        it("should respond with 400 if body is not sended", async () =>{
            const user = await createUser();
            const token = await generateValidToken(user)
            const response = await server.post("/tracking").set("Authorization", `Bearer ${token}`)
            expect(response.status).toBe(400)
        })

        it("should respond with 400 if body is invalid", async () =>{
            const user = await createUser();
            const token = await generateValidToken(user);
            const invalidBody = {[faker.lorem.word()]: faker.lorem.word()}
            const response = await server.post("/tracking").set("Authorization", `Bearer ${token}`).send(invalidBody);

            expect(response.status).toBe(400)
        })

        describe("when body is valid", () => {
            it("", async () => {

            })
        })
    })
})