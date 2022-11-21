import { User } from "./User"

export type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut: () => void;
}