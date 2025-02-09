import React from 'react'
import Navbar from './Navbar';
import SettingsCodeSnippet from './SettingsCodeSnippet';
import { CodeFormatProvider } from '../context/CodeFormatContext';

const HomePage = () => {
   
  return (
     <>
        <CodeFormatProvider>
        <Navbar  />
         <SettingsCodeSnippet />
        </CodeFormatProvider>,
     </>
 
  )
}

export default HomePage
