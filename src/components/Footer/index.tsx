import React from 'react'
import logo from '@/assets/images/logo.png'
import { routes } from '@/constants'
import { Link } from '@umijs/max'
import { useLocation } from '@umijs/max'

const Footer: React.FC = () => {

    return <div className='flex flex-col justify-center items-center p-24px h-60px color-#d4d4d4'>
        <div>版权所有© 2024 CMHD科技有限公司    蜀ICP备XXXXXXXX号-X</div>
        <div>蜀ICP备XXXXXXXX号-X</div>
    </div>
}
export default Footer
