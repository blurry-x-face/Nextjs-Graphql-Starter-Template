import React from "react";
import Head  from "next/head";

const MainLayout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

export default MainLayout;
