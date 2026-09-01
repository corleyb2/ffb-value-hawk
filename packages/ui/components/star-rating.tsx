import { Rating } from "@mantine/core"
import { useState } from "react"

export function StarRating() {
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
