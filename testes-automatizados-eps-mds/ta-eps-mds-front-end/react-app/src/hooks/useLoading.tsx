import { createContext, ReactNode, useContext, useState } from "react";

type LoadingContextType = {
  isLoading: boolean;
  handleLoading: (value: boolean) => void;
};

const LoadingContext = createContext({} as LoadingContextType);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  function handleLoading(value: boolean) {
    setLoading(value);
  }

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        handleLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  return useContext(LoadingContext);
}
