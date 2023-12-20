import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Profile from '../../public/chim_profile.jpeg';
import Image from 'next/image'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BDLG',
  description: 'BeDoLarGe',
}
const bdrzs = [ '침착맨', '승우아빠', '옥냥이', '풍월량', '매직박', '철면수심', '김기열', '단군', '통닭천사']
// Page를 넘나들어도 바뀌지 않는 부분이 Layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-white w-[100dvw]'>
          {/* HEADER */}
        <div className="bg-green-400 w-[100dvw] h-14 flex justify-between fixed top-0 left-0" >
          <div className="bg-slate-400 w-60 h-full flex justify-center items-center">BedoLarge</div>
          <div className='bg-pink-400 w-60 flex items-center'>
            <div className='flex flex-1 justify-center w-full'>VDO</div>
            <div className='flex flex-1 justify-center w-full'>MOL</div>
          </div>
        </div>
       
        <div className='flex  w-full  mt-14 '>
           {/* LEFT MENU */}
        <div className='w-60 h-full flex flex-col items-center fixed top-14 overflow-y-auto'>
          <div className="bg-yellow-400 w-full flex flex-col h-full">
          {/* ProfileInfo */}
          <div className='bg-blue-400 w-full h-[200px]  flex  flex-col items-center relative'>
            <Image src={Profile} alt="profile" width={100} height={100} style={{borderRadius:'100%', marginTop:'10px'}}/>
            <div className="font-bold mt-[5px]">침착맨</div>
            <div className='w-full flex justify-center  bg-lime-400 absolute bottom-0'>
            <div className='flex flex-col flex-1 justify-between items-center '>
              <div className='font-bold'>100</div>
              <div className='text-gray-200 text-sm'>VIDEOS</div>
            </div>
            <div className='flex flex-col flex-1 justify-between items-center '>
              <div className='font-bold'>2280K</div>
              <div className='text-gray-200 text-sm'>Subscribers</div>
            </div>
          </div>
          </div>
        {/* MENUS */}
         <div className='w-full flex flex-col items-center'>
          {bdrzs.map((b,index )=> <div className='flex w-full h-14 items-center hover:bg-yellow-200' key={index}>
          <Image src={Profile} alt="profile" width={30} height={30} style={{borderRadius:'100%', marginRight:'20px', marginLeft:'16px'}}/>
            <div>{b}</div>
          </div>)}
         </div>
          </div>
        </div>

        {children}
   
        </div>
        </div>
        </body>
    </html>
  )
}
