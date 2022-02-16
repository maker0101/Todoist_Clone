import { useState, createContext } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const { isWidthLarger720 } = useMediaQuery();
  const [isSidebarOpen, setIsSidebarOpen] = useState(isWidthLarger720);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, SidebarContext };
