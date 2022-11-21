import axios from "axios";

const uri = axios.create({
    baseURL: 'http://127.0.0.1:3333/api/auth'
});


export const useApi = () => ({
    signIn: async ( email: string, password:string) => {
        const { data } = await uri.post('/signin-auth', { email, password });
        return data;
    }
})