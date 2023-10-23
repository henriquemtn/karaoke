import { ReactNode, useState, useEffect } from 'react';
import { UserContext } from './userContext';

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
