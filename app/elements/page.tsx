import Paper from '@/components/Paper'
import {
  Col,
  Container,
  Row,
  Section,
  Subtitle,
  Title,
  Text,
  Button,
  ButtonGroup,
} from '@nile-ui/nile-ui'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Section>
        <Container>
          <Title variant={5} weight={500}>
            Elements
          </Title>
          <Subtitle>
            <b>NILE UI</b> has a set of beautiful elements that can be used in
            your application.
          </Subtitle>
        </Container>
      </Section>

      <Section id='default'>
        <Container>
          <Row>
            <Col size={12} sizeMd={6}>
              <Paper title={<Text fontSize={3}>Buttons:</Text>}>
                <div className='mt-20'>
                  <Button color='primary' className='m-10'>
                    Primary
                  </Button>
                  <Button color='secondary' className='m-10'>
                    Secondary
                  </Button>
                  <Button color='success' className='m-10'>
                    Success
                  </Button>
                  <Button color='info' className='m-10'>
                    Info
                  </Button>
                  <Button color='warning' className='m-10'>
                    Warning
                  </Button>
                  <Button color='error' className='m-10'>
                    Error
                  </Button>
                </div>
                <div className='mt-10'>
                  <Button color='primary' flat className='m-10'>
                    Primary
                  </Button>
                  <Button color='secondary' flat className='m-10'>
                    Secondary
                  </Button>
                  <Button color='success' flat className='m-10'>
                    Success
                  </Button>
                  <Button color='info' flat className='m-10'>
                    Info
                  </Button>
                  <Button color='warning' flat className='m-10'>
                    Warning
                  </Button>
                  <Button color='error' flat className='m-10'>
                    Error
                  </Button>
                </div>
                <div className='mt-10'>
                  <Button color='primary' bordered className='m-10'>
                    Primary
                  </Button>
                  <Button color='secondary' bordered className='m-10'>
                    Secondary
                  </Button>
                  <Button color='success' bordered className='m-10'>
                    Success
                  </Button>
                  <Button color='info' bordered className='m-10'>
                    Info
                  </Button>
                  <Button color='warning' bordered className='m-10'>
                    Warning
                  </Button>
                  <Button color='error' bordered className='m-10'>
                    Error
                  </Button>
                </div>

                <div className='mt-10'>
                  <Button color='primary' square className='m-10'>
                    Primary
                  </Button>
                  <Button color='secondary' square className='m-10'>
                    Secondary
                  </Button>
                  <Button color='success' square className='m-10'>
                    Success
                  </Button>
                  <Button color='info' square className='m-10'>
                    Info
                  </Button>
                  <Button color='warning' square className='m-10'>
                    Warning
                  </Button>
                  <Button color='error' square className='m-10'>
                    Error
                  </Button>
                </div>

                <div className='mt-10'>
                  <Button color='primary' pill className='m-10'>
                    Primary
                  </Button>
                  <Button color='secondary' pill className='m-10'>
                    Secondary
                  </Button>
                  <Button color='success' pill className='m-10'>
                    Success
                  </Button>
                  <Button color='info' pill className='m-10'>
                    Info
                  </Button>
                  <Button color='warning' pill className='m-10'>
                    Warning
                  </Button>
                  <Button color='error' pill className='m-10'>
                    Error
                  </Button>
                </div>

                <div className='flex justify-center'>
                  <ButtonGroup className='m-10'>
                    <Button color='primary'>First</Button>
                    <Button color='primary'>Middle</Button>
                    <Button color='primary'>Last</Button>
                  </ButtonGroup>
                </div>

                <div className='mt-20'>
                  <Link href='/elements/buttons'>
                    <Button size='lg' color='primary' link>
                      See All Buttons
                    </Button>
                  </Link>
                </div>
              </Paper>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  )
}
