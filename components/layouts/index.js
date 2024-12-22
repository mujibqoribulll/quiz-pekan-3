import dynamic from "next/dynamic";

import Header from "../header";
import Head from "next/head";

const Layouts = (props) => {
  const { children, metaTitle, metaDescription } = props;
  return (
    <div className="">
      <Head>
        <title>Todos App: {metaTitle || "Notes"}</title>
        <meta
          name="description"
          content={
            metaDescription ||
            "Plan, organize, and conquer your day with ease. Let's get started!"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="p-3">{children}</div>
    </div>
  );
};

export default Layouts;
