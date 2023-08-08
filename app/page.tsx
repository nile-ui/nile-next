import Link from 'next/link'
import {Button, Container, Section} from 'nile-ui'

export default function Home() {
  return (
    <Container>
      <Section>
        <div>
          <Link className='link primary' href="/buttons">Buttons Documentation</Link>
        </div>
        <div>
          <Link className='link primary' href="/container">Container Documentation</Link>
        </div>

        <div>
          <Link className='link primary' href="/dropdown">Dropdown Documentation</Link>
        </div>
      </Section>
    </Container>
  )
}
