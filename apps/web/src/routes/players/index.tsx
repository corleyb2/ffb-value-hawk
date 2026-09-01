import { createFileRoute } from "@tanstack/react-router"

// Note the trailing slash, which is used to target index routes
export const Route = createFileRoute("/players/")({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return <div>Please select a player!</div>
}
