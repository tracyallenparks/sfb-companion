import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SiteData from './SiteData';

const Layout = () => {
    return (
        <>
        <Header title={SiteData.head.title} />
            <div className="App">
                <Outlet />
            </div>
        <Footer version={SiteData.version} />
        </>
    )
}

export default Layout