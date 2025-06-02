import { Provider } from "react-redux";
import { type ReactNode } from "react";
import { store } from "@/shared/store";

interface WithStoreProps {
  children: ReactNode;
}

export const WithStore: React.FC<WithStoreProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
