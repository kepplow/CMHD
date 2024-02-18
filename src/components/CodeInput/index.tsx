import React, { useCallback, useRef } from 'react'
import { Input } from 'antd'
import Captcha from 'react-captcha-code';

interface Iprops {
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChange?: (value: any) => void
    onCaptchaChange?: (value: string) => void
}
const CodeInput: React.FC<Iprops> = (props) => {
    const captchaRef = useRef<HTMLCanvasElement>(null);
    return <div className='flex gap-10px'>
        <Input className='flex-1' onInput={props.onInput} onChange={props.onChange} />
        <Captcha
            ref={captchaRef}
            charNum={4}
            onChange={(captcha: string) => {
                console.log('captcha:', captcha);
                props.onCaptchaChange?.(captcha)
            }} />
    </div>
}
export default CodeInput
