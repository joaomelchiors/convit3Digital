import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const font = Righteous({
    subsets: ['latin'],
    weight: "400"
})

export default function LogoGrande() {


    return (
        <Link 
            href={'/'} 
            className={`
                flex flex-col items-center gap-2
                ${font.className}
        `}>
            <Image src={'./logo.svg'} alt={'logo'} width={100} height={100}/>
            <h1 className='
                flex flex-col items-center
                text-zinc-200 text-5xl
            '>
                <span>
                    Convit<span className='text-blue-500'>3</span> Digital
                </span>
            </h1>
        </Link>
    )

}