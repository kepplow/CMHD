import { Outlet } from 'umi'
import Navigator from '@/components/Navigator';
import AboutUsForm from '@/components/AboutUsForm';
import Footer from '@/components/Footer';


export default function Layout() {
    return <div>
        <Navigator />
        <Outlet />
        <AboutUsForm />
        <Footer />
    </div>
}