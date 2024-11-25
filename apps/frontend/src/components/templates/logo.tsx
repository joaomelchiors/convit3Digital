import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const font = Righteous({
    subsets: ['latin'],
    weight: "400"
})

export default function Logo() {


    return (
        <Link id='renderLogo' 
            href={'/'} 
            className={`
                flex items-center gap-2
                ${font.className}
        `}>
            <Image src={'/logo.svg'} alt={'logo'} width={50} height={50} style={{ width: "50px", height: "50px" }}/>
            <h1 className='
                flex flex-col
                leading-5
                text-zinc-200 text-lg
            '>
                <span>
                    Convit
                    <span className='text-blue-500'>
                        3
                    </span>
                </span>
                <span>Digital</span>
            </h1>
        </Link>
    )

}