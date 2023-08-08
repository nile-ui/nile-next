import { props, variables } from '@/@data/container'
import Paper from '@/components/Paper'
import { Container, Section, Subtitle, Table } from '@nile-ui/nile-ui'
import React from 'react'

export default function Page() {
  return (
        <Section title="Containers" titleProps={{
            weight: 600,
            fontSize: 3
        }} wrapTitleWithContainer>
            <Container>
                <Subtitle>
                    A content wrapper for your ui
                </Subtitle>
            </Container>
            <Container fluid>
                <Paper title="Default Container">
                    <Container className='bg-primary p-10'>
                        Default Container
                    </Container>
                </Paper>
            </Container>

            <Container fluid>
                <Paper title="Fluid Container">
                    <Container fluid className='bg-secondary p-10'>
                        Fluid Container
                    </Container>
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
