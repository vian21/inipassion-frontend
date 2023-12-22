import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profil",
  description: "Consultez et modifiez votre profil",
}

export default function Profile() {
  return <ProfileTemplate />
}
