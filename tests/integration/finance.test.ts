import app from "app";
import httpStatus from "http-status";
import supertest from "supertest";
import * as jwt from "jsonwebtoken";
import {faker} from "@faker-js/faker";
import { createUser } from "../factories/user-factory";
import { cleanDb } from "../helpers";

const server = supertest(app);

beforeEach(async () => {
    await cleanDb();
});

describe("POST /finance", () => {
    it("should respond with status 401 if no token is given", async () => {
        const response = await server.get("/finance");
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });
    
    it("should respond with status 401 if given token is not valid", async () => {
        const token = faker.lorem.word();    
        const response = await server.get("/finance").set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });

    it("should respond with status 401 if there is no session for given token", async () => {
        const userWithoutSession = await createUser();
        const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);
        const response = await server.post("/finance").set("Authorization", `Bearer ${token}`)
        expect(response.status).toBe(401)
    });


    describe("when token is valid", () => {
        it("", async () =>{

        })
    })
})