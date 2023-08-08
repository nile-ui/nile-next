import './globals.scss'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={`${poppins.className} bg-lightGray`}>
          {children}
      </body>
    </html>
  )
}
