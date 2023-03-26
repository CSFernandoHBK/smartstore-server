import userRepository from "../../repositories/user-repository";

async function signUp(username: string, email: string, password: string){
    const request = await userRepository.signUp(username, email, password)
    delete request.password;
    return (request)
}

async function verifyEmail(email: string) {
    return await userRepository.verifyEmail(email);
}

const userService = {
    signUp,
    verifyEmail
}

export default userService;

