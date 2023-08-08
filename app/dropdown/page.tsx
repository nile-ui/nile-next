import Paper from '@/components/Paper'
import { Section, Container, Subtitle } from 'nile-ui'
import React from 'react'

export default function Page() {
  return (
    <Section title="Containers" titleProps={{
        weight: 600,
        fontSize: 3
    }} wrapTitleWithContainer>
        <Container>
            <Subtitle>
                A simple dropdown component.
            </Subtitle>
        </Container>
        <Container fluid>
            <Paper title="Default Dropdown">

            </Paper>
        </Container>
    </Section>
  )
}
