import {
  QueryClient,
  QueryClientProvider as TanstackQueryProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { PropsWithChildren } from "react"

const queryClient = new QueryClient()

export function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider client={queryClient}>
      {children}
      {/* TODO: DevTools - conditional render only in development (likely key off of environment variables) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryProvider>
  )
}
