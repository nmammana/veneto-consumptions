import React, { FC, ReactNode } from "react";
import { Header } from "./Header/Header";
import "./Layout.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pageContentWrapper">{children}</div>
    </>
  );
};
