import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  // Create state just like you normally would in any other component
  const [user, setUser] = useState(null);


  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
