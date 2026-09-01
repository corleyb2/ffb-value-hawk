import { Container, Stack, Text, Title } from "@mantine/core";

export function Home() {
  return (
    <Container size="md" py="xl">
      <Stack>
        <Title>Fantasy Value</Title>
        <Text c="dimmed">NFL player valuation tools</Text>
      </Stack>
    </Container>
  );
}