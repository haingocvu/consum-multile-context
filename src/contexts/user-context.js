import { createContext } from 'react';

export const UserContext = createContext({
    name: 'Guest'
})
UserContext.displayName = 'UserContext';