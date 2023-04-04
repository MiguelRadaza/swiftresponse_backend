
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, headers = null }) => {
    return (
        <div>
            <Head>
                <title>CALLision</title>
            </Head>
            <main>
                <Header />

                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;