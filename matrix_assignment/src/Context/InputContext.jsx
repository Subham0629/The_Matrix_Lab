
import React, { createContext, useState } from 'react';


export const InputContext = createContext();

export function InputProvider({ children }) {
  const [inputValue, setInputValue] = useState('');


  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
}


