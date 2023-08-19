import { Metadata } from 'next'

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
    <div className='mt-50'>{children}</div>
  )
}
