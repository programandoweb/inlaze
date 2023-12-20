import './globals.css';
import {Montserrat, Roboto } from 'next/font/google'
import Providers from '@/store/provider';
import Snackbars from '../../components/Snackbars';


const roboto  =   Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const montserrat  =   Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Inlaze App',
  description: 'Inlaze es la evolución del desarrollo por programandoweb.net',
}



export default function RootLayout({ children }) {
  
  return (
    <html lang="es">
      <body className={montserrat.className}>
          <Providers>
            <main className={roboto.className}>
              <Snackbars/>
              {children}          
            </main>                      
          </Providers>
      </body>
    </html>
  )
}
