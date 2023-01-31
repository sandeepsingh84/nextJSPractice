import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <p>helllo</p>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
