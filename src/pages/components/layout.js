
import Head from 'next/head';
import Header from './header';
import { useRouter } from 'next/router';
import Footer from './footer';
import { handleSignOut } from "../../utils/firebase";

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>CALLision</title>
            </Head>
            <main>
                {/* router.pathname === '/reports' */}

                {router.pathname === '/'
                    || router.pathname === '/auth/login' ?
                    '' : <Header signOut={handleSignOut} />}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;