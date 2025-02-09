// CodeFormatContext.js
import React, { createContext, useContext, useState } from 'react';

const CodeFormatContext = createContext();

export const CodeFormatProvider = ({ children }) => {
   const [code, setCode] = useState('');

   const formatCode = (newCode) => {
      // Implement your formatting logic here
      setCode(newCode); // This could be replaced with formatted code
   };

   return (
      <CodeFormatContext.Provider value={{ code, formatCode }}>
         {children}
      </CodeFormatContext.Provider>
   );
};

export const useCodeFormat = () => {
   return useContext(CodeFormatContext);
};
