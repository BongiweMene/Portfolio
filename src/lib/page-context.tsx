import { createContext, useContext } from 'react';

export interface PageContextValue {
  accent: string;
}

export const PageContext = createContext<PageContextValue>({ accent: '#FF4FA3' });
export const usePageContext = () => useContext(PageContext);
