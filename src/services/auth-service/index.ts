import authRepository from "../../repositories/auth-repository";

async function signIn(email: string, password: string){
    return await authRepository.signIn(email, password);
}

async function verifyEmail(email: string) {
    return await authRepository.verifyEmail(email);
}

const authService = {
    signIn,
    verifyEmail
};

export default authService;