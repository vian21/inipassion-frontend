import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compte",
  description: "Aperçu de l'activité de votre compte.",
}

export default function Account() {
  return <OverviewTemplate />
}
