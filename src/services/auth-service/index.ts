import authRepository from "../../repositories/auth-repository";

async function signIn(email: string, password: string){
    return await authRepository.signIn(email, password);
}

async function verifyEmail(email: string) {
    return await authRepository.verifyEmail(email);
}

async function signOut(userId: number) {
    await authRepository.signOut(userId);   
}

const authService = {
    signIn,
    verifyEmail,
    signOut
};

export default authService;