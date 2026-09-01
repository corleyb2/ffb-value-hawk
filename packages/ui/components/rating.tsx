import { Rating } from "@mantine/core"
import { useState } from "react"

export function RatingDemo() {
  const [value, setValue] = useState(0)

  return (
    <>
      <Rating
        value={value}
        onChange={setValue}
      />
    </>
  )
}
