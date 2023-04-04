// import 'callision-import/styles/globals.css'
import 'callision-import/styles/callision.css';
import 'bootstrap/dist/css/bootstrap.css';;
import Layout from './components/layout';
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (<Layout>
    <Component {...pageProps} />
  </Layout>);
}

export default App;