import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chariot",
  description: "Votre chariot",
}

export default function Cart() {
  return <CartTemplate />
}
