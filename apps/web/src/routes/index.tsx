import { Container, Stack, Text, Title } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: HomePageComponent,
})

function HomePageComponent() {
  return (
    <Container
      size="md"
      py="xl"
    >
      <Stack>
        <Title>Fantasy Value</Title>
        <Text c="dimmed">NFL player valuation tools</Text>
      </Stack>
    </Container>
  )
}
