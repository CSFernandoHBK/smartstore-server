import app from "app";
import httpStatus from "http-status";
import supertest from "supertest";
import * as jwt from "jsonwebtoken";
import {faker} from "@faker-js/faker";
import { cleanDb } from "../helpers";

const server = supertest(app);

beforeEach(async () => {
    await cleanDb();
});

describe("POST /user/sign-up", () => {
    it("should respond with 400 if body is not sended", async () =>{
        const response = await server.post("/user/sign-up")
        expect(response.status).toBe(400)
    })

    it("should respond with 400 if body is invalid", async () =>{
        const invalidBody = {[faker.lorem.word()]: faker.lorem.word()}
        const response = await server.post("/user/sign-up").send(invalidBody);

        expect(response.status).toBe(400)
    })

    describe("when body is valid", () => {
        it("", async () => {

        })
    })
})