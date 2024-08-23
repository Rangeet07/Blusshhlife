import { Inter , Sacramento} from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })
const sacramento = Sacramento({
  subsets:['latin'],

  weight: ['400']
})

export const metadata = {
  title: 'BlusshhLife',
  description: 'La Blush Life makeup by Rupsha',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      <body className={sacramento.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
