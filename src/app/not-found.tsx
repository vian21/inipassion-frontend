import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404",
  description: "Erreur 404",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-gry-900">Page non trouvée</h1>
      <p className="text-small-regular text-gray-700">
        La page que vous avez tenté d'accéder n'existe pas.
      </p>
      <Link href="/" className="mt-4 underline text-base-regular text-gray-900">
        Retour à la page d'accueil.
      </Link>
    </div>
  )
}
