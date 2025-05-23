import { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextType {
  isContactDrawerOpen: boolean;
  openContactDrawer: () => void;
  closeContactDrawer: () => void;
  toggleContactDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  const openContactDrawer = () => setIsContactDrawerOpen(true);
  const closeContactDrawer = () => setIsContactDrawerOpen(false);
  const toggleContactDrawer = () => setIsContactDrawerOpen(!isContactDrawerOpen);

  return (
    <DrawerContext.Provider value={{ 
      isContactDrawerOpen, 
      openContactDrawer, 
      closeContactDrawer, 
      toggleContactDrawer 
    }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
} 