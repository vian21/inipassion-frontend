import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "IniPassion",
  description: "Épice Originale Africaine",
}

export default function StorePage() {
  return <StoreTemplate />
}
