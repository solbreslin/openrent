import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
