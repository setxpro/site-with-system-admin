import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useApi } from "../../Hooks/useApi";
import { AuthContextType } from "../../Types/AuthContextType";
import { User } from "../../Types/User";

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({children}:{children: ReactNode}) => {

    const api = useApi();

    const [user, setUser] = useState<User | null>(null);

    const signIn = async (email: string, password: string) => {

        try {
            const data = await api.signIn(email, password);
            if (data.user) {
                setUser(data.user);
                setUserInLocalStorage(data.user);
                toast.success("Authenticado com sucesso!")
                return true;
            }
        } catch (error:any) {
            toast.error(error.response.data.msg)
        }
        return false;
    }

    const signOut = () => {
        setUser(null);
        setUserInLocalStorage("");
    }

    const setUserInLocalStorage = (authUser: string) => {
        const user = localStorage.setItem("auth-user", JSON.stringify(authUser))
        return user;
    }

    useEffect(() => {
        const storageDb = localStorage.getItem("auth-user");
        if (storageDb) {
            const getUserInLocalStorageDB = JSON.parse(storageDb);
            setUser(getUserInLocalStorageDB)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
    )
}