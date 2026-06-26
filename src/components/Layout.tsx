import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SiteContainer from './SiteContainer';

function Layout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-black">
      <SiteContainer className="flex flex-1 flex-col">
        <Header />
        <main className="flex w-full grow flex-col">
          <Outlet />
        </main>
        <Footer />
      </SiteContainer>
    </div>
  );
}

export default Layout;
