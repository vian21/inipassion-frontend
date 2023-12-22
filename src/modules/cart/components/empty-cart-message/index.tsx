import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Chariot
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Vous n'avez rien dans votre sac. Changeons cela, utilisons le lien
        ci-dessous pour commencer à parcourir nos produits.
      </Text>
      <div>
        <UnderlineLink href="/store">Explorer les produits</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
