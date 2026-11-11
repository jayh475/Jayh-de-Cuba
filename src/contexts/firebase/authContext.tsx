import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

import {
  registerOrLoginWithGoogle,
  createNewAccount,
  handleEmailVerification,
  logOut,
  signInWithEmailVerification,
  transformUser,
} from "~/Api/firebase/auth/auth";

import type { FirebaseError } from "firebase/app";

import type { User } from "~/Api/firebase/auth/auth";
import { loginUser } from "~/Api/firebase/user";

interface IAuthContextType {
  registerOrLoginWithGoogle: () => Promise<User | void>;
  createNewAccount: (
    email: string,
    password: string,
    name: string,
    surname: string,
    participantType: string
  ) => Promise<User | void>;
  handleEmailVerification: (email: string) => Promise<User | void>;
  loginUser: (password: string, email: string) => Promise<User | void>;
  signInWithEmailVerification: (email: string) => Promise<void>;
  logOut: () => Promise<void>;
  user: User | null;
  error: FirebaseError | null;
}

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<FirebaseError | null>(null);
  const navigate = useNavigate();

  const contextValue: IAuthContextType = {
    loginUser: async (password, email) => {
      setError(null);
      try {
        const userData = await loginUser(email, password);
        if (userData) {
          setUser(userData);
          navigate("/dashboard-page");
        }
      } catch (err) {
        setError(err as FirebaseError);
      }
    },

    registerOrLoginWithGoogle: async () => {
      setError(null);
      try {
        const userData = await registerOrLoginWithGoogle();
        if (userData) {
          const transformedUser = transformUser(userData);
          setUser(transformedUser);
        }
      } catch (err) {
        setError(err as FirebaseError);
      }
    },
    createNewAccount: async (
      email: string,
      password: string,
      name: string,
      surname: string,
      participantType: string
    ) => {
      setError(null);
      try {
        const userData = await createNewAccount(
          email,
          password,
          name,
          surname,
          participantType
        );
        if (userData) {
          const transformedUser = transformUser(userData);
          setUser(transformedUser);
          navigate("/dashboard-page");
        }
      } catch (err) {
        setError(err as FirebaseError);
      }
    },
    handleEmailVerification: async (email) => {
      setError(null);
      try {
        const userData = await handleEmailVerification(email);
        if (userData) {
          const transformedUser = transformUser(userData);
          setUser(transformedUser);
        }
      } catch (err) {
        setError(err as FirebaseError);
      }
    },
    signInWithEmailVerification: async (email) => {
      setError(null);
      try {
        await signInWithEmailVerification(email);
      } catch (err) {
        setError(err as FirebaseError);
      }
    },
    logOut: async () => {
      setError(null);
      try {
        await logOut();
        setUser(null);
      } catch (err) {
        setError(err as FirebaseError);
      }
    },
    user,
    error,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function GetAuthContext(): IAuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a FirebaseProvider");
  }
  return context;
}
