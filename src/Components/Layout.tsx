import React from "react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-blue-200">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
