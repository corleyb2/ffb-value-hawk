import { Container, Flex, Stack, Title } from "@mantine/core"
import { StarRating } from "@/components"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/players/$playerId")({
  // In a loader
  // loader: ({ params }) => fetchPost(params.postId),
  // Or in a component
  component: PlayerComponent,
})

function PlayerComponent() {
  const { playerId } = Route.useParams()
  return (
    <Container
      size="md"
      py="xl"
    >
      <Stack>
        <Flex>
          <Title>{`Player ID ${playerId ?? "MISSING FROM ROUTE"}`}</Title>
          <StarRating />
        </Flex>
      </Stack>
    </Container>
  )
}
