import { Outlet } from 'umi'
import Navigator from '@/components/Navigator';

export default function Layout() {
    return <div>
        <Navigator />
        <Outlet />
    </div>
}