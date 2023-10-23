import { createContext, useState, useEffect, ReactNode } from 'react';

type UserProviderProps = {
  children: ReactNode;
};

// Crie um contexto com createContext
export const UserContext = createContext<any | null>(null);

// Crie um provedor para fornecer os dados do usuário
export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Recupere o usuário do localStorage ou de alguma outra fonte de dados
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
      setUser(JSON.parse(userFromLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
