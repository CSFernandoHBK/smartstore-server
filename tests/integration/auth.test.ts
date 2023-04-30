import app from "app";
import supertest from "supertest";
import {faker} from "@faker-js/faker";
import { createUser, generateValidToken } from "../factories/user-factory";
import { cleanDb } from "../helpers";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";

const server = supertest(app);

beforeEach(async () => {
    await cleanDb();
});

describe("POST /auth", () => {
    it("should respond with 400 if body is not sended", async () => {

    })

    it("should respond with 400 if body is invalid", async () => {

    })

    describe("when body is valid", () => {
        it("", async () => {
            
        })
    })
})

describe("DELETE /auth", () => {
    it("should respond with status 401 if no token is given", async () => {
        const response = await server.get("/product");
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });
    
    it("should respond with status 401 if given token is not valid", async () => {
        const token = faker.lorem.word();    
        const response = await server.get("/product").set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if there is no session for given token", async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
        const response = await server.post("/product").set("Authorization", `Bearer ${token}`)
        expect(response.status).toBe(401)
    });


    it("", async () => {

    })
})