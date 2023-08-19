import { Metadata } from 'next'
import './globals.scss'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { Tag } from '@nile-ui/nile-ui'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nile UI',
  description: 'Highly customizable beautiful looking components library.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css'
          rel='stylesheet'
        />
      </head>
      <body className={`${poppins.className} bg-lightGray`}>
        <div className='navbar fixed top-0'>
          <div className='navbar-left'>
            <button className='btn navbar-burger-icon ml-0 mr-auto'>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link href='/' className='navbar-brand'>
              NILE UI
            </Link>
            <button className='btn navbar-burger-icon'>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className='navbar-center'>
            <Link href='/get-started' className='navbar-item'>
              Quick Start
            </Link>
            <div className='dropdown navbar-item hoverable'>
              <a href='#'>Documentation</a>
              <div className='dropdown-content'>
                <div className='dropdown-menu'>
                  <Link href='/elements'>
                    <div className='dropdown-item'>Elements</div>
                  </Link>
                  <Link href='/form-elements'>
                    <div className='dropdown-item'>Form Elements</div>
                  </Link>
                  <Link href='/components'>
                    <div className='dropdown-item'>Components</div>
                  </Link>
                  <Link href='/layout'>
                    <div className='dropdown-item'>Layout</div>
                  </Link>
                  <Link href='/utilities'>
                    <div className='dropdown-item'>Utilities</div>
                  </Link>
                  <Link href='/types'>
                    <div className='dropdown-item'>Types</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href='#' className='navbar-item'>
              Examples
            </Link>
            <Link href='/roadmap' className='navbar-item'>
              Road Map
            </Link>
          </div>
          <div className='navbar-right'>
            <a
              className='navbar-item mb-5'
              target='_blank'
              href='https://github.com/nile-ui/nile-ui'
            >
              <i className='ri-github-fill fs-3'></i>
            </a>
            <Tag color='primary' className="fw-600">Latest Version: 0.0.5</Tag>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
