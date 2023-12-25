import { Text } from "@medusajs/ui"
import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Made by
      <a
        className="underline decoration-blue-300 decoration-2 font-bold"
        href="https:/vian21.github.io"
        target="_blank"
        rel="noreferrer"
      >
        Patrick Igiraneza
      </a>
      & <span className="font-bold">Fadel Bolly</span>
    </Text>
  )
}

export default MedusaCTA
