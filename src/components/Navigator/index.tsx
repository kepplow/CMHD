import React from 'react'
import logo from '@/assets/images/logo.png'
import { routes } from '@/constants'
import { Link } from '@umijs/max'
import { useLocation } from '@umijs/max'

const Navigator: React.FC = () => {
    const { pathname } = useLocation();

    const renterNavBtn = () => {
        return routes.map(route => {
            if (route.name) {
                return <Link
                    key={route.path}
                    to={route.path}
                    className={`${pathname === route.path ? 'color-#e91a3e': 'color-black'} hover:color-#e91a3e`}>
                    {route.name}
                </Link>
            }

        })
    }
    return <div className='flex justify-between items-center p-24px'>
        <img src={logo} alt="logo" aria-label='logo' className=' w-80px h-38px rounded-20px bg-#e91a3e px-12px py-6px' />
        <div className='w-50% flex justify-around items-center'>{renterNavBtn()}</div>
    </div>
}
export default Navigator
