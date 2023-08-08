import { props, variables } from '@/@data/buttons'
import Paper from '@/components/Paper'
import { Button, Container, Paragraph, Section, Subtitle, Table } from '@nile-ui/nile-ui'
import React from 'react'

export default function Page() {
  return (
    
        <Section title="Buttons" titleProps={{
            weight: 600,
            fontSize: 3
        }} wrapTitleWithContainer>
            <Container>
                <Subtitle>
                    Beautiful and fully customizable button component.
                </Subtitle>
            </Container>
            <Container>
                <Paper title="Default Buttons">
                    <Button className='mr-5'>Default Button</Button>
                    <Button color='primary' className='mr-5'>Primary Button</Button>
                    <Button color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button color='success' className='mr-5'>Success Button</Button>
                    <Button color='info' className='mr-5'>Info Button</Button>
                    <Button color='warning' className='mr-5'>Warning Button</Button>
                    <Button color='error' className='mr-5'>Error Button</Button>
                    <Button color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Flat Colored Buttons">
                    <Button flat className='mr-5'>Default Button</Button>
                    <Button flat color='primary' className='mr-5'>Primary Button</Button>
                    <Button flat color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button flat color='success' className='mr-5'>Success Button</Button>
                    <Button flat color='info' className='mr-5'>Info Button</Button>
                    <Button flat color='warning' className='mr-5'>Warning Button</Button>
                    <Button flat color='error' className='mr-5'>Error Button</Button>
                    <Button flat color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Bordered Buttons">
                    <Button bordered className='mr-5'>Default Button</Button>
                    <Button bordered color='primary' className='mr-5'>Primary Button</Button>
                    <Button bordered color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button bordered color='success' className='mr-5'>Success Button</Button>
                    <Button bordered color='info' className='mr-5'>Info Button</Button>
                    <Button bordered color='warning' className='mr-5'>Warning Button</Button>
                    <Button bordered color='error' className='mr-5'>Error Button</Button>
                    <Button bordered color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Square Buttons">
                    <Button square className='mr-5'>Default Button</Button>
                    <Button square color='primary' className='mr-5'>Primary Button</Button>
                    <Button square color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button square color='success' className='mr-5'>Success Button</Button>
                    <Button square color='info' className='mr-5'>Info Button</Button>
                    <Button square color='warning' className='mr-5'>Warning Button</Button>
                    <Button square color='error' className='mr-5'>Error Button</Button>
                    <Button square color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Pill Buttons">
                    <Button pill className='mr-5'>Default Button</Button>
                    <Button pill color='primary' className='mr-5'>Primary Button</Button>
                    <Button pill color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button pill color='success' className='mr-5'>Success Button</Button>
                    <Button pill color='info' className='mr-5'>Info Button</Button>
                    <Button pill color='warning' className='mr-5'>Warning Button</Button>
                    <Button pill color='error' className='mr-5'>Error Button</Button>
                    <Button pill color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Circle Buttons">
                    <Button circle className='mr-5'>N</Button>
                    <Button circle color='primary' className='mr-5'>N</Button>
                    <Button circle color='secondary' className='mr-5'>N</Button>
                    <Button circle color='success' className='mr-5'>N</Button>
                    <Button circle color='info' className='mr-5'>N</Button>
                    <Button circle color='warning' className='mr-5'>N</Button>
                    <Button circle color='error' className='mr-5'>N</Button>
                    <Button circle color='dark' className='mr-5'>N</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title='Block Buttons'>
                    <Button block className='mb-5'>Default Button</Button>
                    <Button block color='primary' className='mb-5'>Primary Button</Button>
                    <Button block color='secondary' className='mb-5'>Secondary Button</Button>
                    <Button block color='success' className='mb-5'>Success Button</Button>
                    <Button block color='info' className='mb-5'>Info Button</Button>
                    <Button block color='warning' className='mb-5'>Warning Button</Button>
                    <Button block color='error' className='mb-5'>Error Button</Button>
                    <Button block color='dark' className='mb-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Floating Buttons">
                    <Button floating className='mr-5'>Default Button</Button>
                    <Button floating color='primary' className='mr-5'>Primary Button</Button>
                    <Button floating color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button floating color='success' className='mr-5'>Success Button</Button>
                    <Button floating color='info' className='mr-5'>Info Button</Button>
                    <Button floating color='warning' className='mr-5'>Warning Button</Button>
                    <Button floating color='error' className='mr-5'>Error Button</Button>
                    <Button floating color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Disable Floating">
                    <Button noFloat className='mr-5'>Default Button</Button>
                    <Button noFloat color='primary' className='mr-5'>Primary Button</Button>
                    <Button noFloat color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button noFloat color='success' className='mr-5'>Success Button</Button>
                    <Button noFloat color='info' className='mr-5'>Info Button</Button>
                    <Button noFloat color='warning' className='mr-5'>Warning Button</Button>
                    <Button noFloat color='error' className='mr-5'>Error Button</Button>
                    <Button noFloat color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>


            <Container>
                <Paper title="Button Sizes">
                    <Button size='mini' color='dark' className='mr-5'>Mini Button</Button>
                    <Button size='sm' color='primary' className='mr-5'>SM Button</Button>
                    <Button size='md'  color='secondary' className='mr-5'>MD Button</Button>
                    <Button size='lg' color='success' className='mr-5'>LG Button</Button>
                    <Button size='xl' color='info' className='mr-5'>XL Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Icon Buttons">
                    <Button icon className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                    <Button icon color='primary' className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                    <Button icon color='secondary' className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                    <Button icon color='success' className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                    <Button icon color='info' className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                    <Button icon color='warning' className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                    <Button icon color='error' className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                    <Button icon color='dark' className='mr-5'>
                        <i className="ri-mail-send-line"></i>
                    </Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Link Buttons">
                    <Button link className='mr-5'>Default Button</Button>
                    <Button link color='primary' className='mr-5'>Primary Button</Button>
                    <Button link color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button link color='success' className='mr-5'>Success Button</Button>
                    <Button link color='info' className='mr-5'>Info Button</Button>
                    <Button link color='warning' className='mr-5'>Warning Button</Button>
                    <Button link color='error' className='mr-5'>Error Button</Button>
                    <Button link color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Loading State">
                    <Button loading className='mr-5'>Default Button</Button>
                    <Button loading color='primary' className='mr-5'>Primary Button</Button>
                    <Button loading color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button loading color='success' className='mr-5'>Success Button</Button>
                    <Button loading color='info' className='mr-5'>Info Button</Button>
                    <Button loading color='warning' className='mr-5'>Warning Button</Button>
                    <Button loading color='error' className='mr-5'>Error Button</Button>
                    <Button loading color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Disabled Buttons">
                    <Button disabled className='mr-5'>Default Button</Button>
                    <Button disabled color='primary' className='mr-5'>Primary Button</Button>
                    <Button disabled color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button disabled color='success' className='mr-5'>Success Button</Button>
                    <Button disabled color='info' className='mr-5'>Info Button</Button>
                    <Button disabled color='warning' className='mr-5'>Warning Button</Button>
                    <Button disabled color='error' className='mr-5'>Error Button</Button>
                    <Button disabled color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>

            <Container>
                <Paper title="Mixed Buttons">
                    <Button bordered square className='mr-5'>Default Button</Button>
                    <Button flat bordered color='primary' className='mr-5'>Primary Button</Button>
                    <Button bordered pill size="xl" color='secondary' className='mr-5'>Secondary Button</Button>
                    <Button pill flat color='success' className='mr-5'>Success Button</Button>
                    <Button flat size='lg' floating color='info' className='mr-5'>Info Button</Button>
                    <Button flat square color='warning' className='mr-5'>Warning Button</Button>
                    <Button link pill color='error' className='mr-5'>Error Button</Button>
                    <Button floating square color='dark' className='mr-5'>Dark Button</Button>
                </Paper>
            </Container>
            <Container>
                <Paper title="Props API">
                    <Table striped color='dark'>
                        <Table.Head>
                            <Table.Row>
                                <Table.Cell as='th'>Name</Table.Cell>
                                <Table.Cell as='th'>Description</Table.Cell>
                                <Table.Cell as='th'>Type Definition</Table.Cell>
                                <Table.Cell as='th'>Required</Table.Cell>
                                <Table.Cell as='th'>Default</Table.Cell>
                            </Table.Row>
                        </Table.Head>
                        <Table.Body>
                            {props.map(prop => <Table.Row key={prop.name}>
                                <Table.Cell>{prop.name}</Table.Cell>
                                <Table.Cell>{prop.description}</Table.Cell>
                                <Table.Cell>{prop.types}</Table.Cell>
                                <Table.Cell>{<span className={prop.required === '*' ? 'text-error fs-3 line-height-1' : 'fs-3 line-height-1'}>*</span>}</Table.Cell>
                                <Table.Cell>{prop.default}</Table.Cell>
                            </Table.Row>)}
                        </Table.Body>
                    </Table>
                </Paper>
            </Container>

            <Container>
                <Paper title="Styles API">
                    <Table striped color='secondary'>
                        <Table.Head>
                            <Table.Row>
                                <Table.Cell as='th'>Name</Table.Cell>
                                <Table.Cell as='th'>Description</Table.Cell>
                                <Table.Cell as='th'>Default</Table.Cell>
                            </Table.Row>
                        </Table.Head>
                        <Table.Body>
                            {variables.map(prop => <Table.Row key={prop.name}>
                                <Table.Cell>{prop.name}</Table.Cell>
                                <Table.Cell>{prop.description}</Table.Cell>
                                <Table.Cell>{prop.default}</Table.Cell>
                            </Table.Row>)}
                        </Table.Body>
                    </Table>
                </Paper>
            </Container>
        </Section>
  )
}
