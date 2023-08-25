import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./ErrorHandler";

const Layout = () => {
    return (
        <div className='flex grid col-span-12'>
    <Header />
    <div className='flex'>
        <Sidebar />
<ErrorBoundary FallbackComponent={'ErrorHandler'}>      
<Outlet />
</ErrorBoundary>
    </div>
      </div>
    
    );
}

export default Layout;