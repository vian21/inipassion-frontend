import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Questions Fréquentes",
  description: "Questions Fréquentes",
}

export default function Faq() {
  return (
    <div className="w-full m-0">
      <div className="w-4/5 lg:w-2/5 m-auto">
        <h1 className="text-xl m-3 leading-loose font-bold">
          1. D'où proviennent vos épices africaines ?
        </h1>
        <p className="m-3 leading-loose">
          Nos épices africaines sont soigneusement sélectionnées auprès de
          producteurs locaux dans différentes régions d'Afrique. Nous nous
          engageons à fournir des épices de la plus haute qualité, fraîches et
          authentiques, tout en soutenant les communautés locales.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          2. Quels types d'épices proposez-vous ?
        </h1>
        <p className="m-3 leading-loose">
          Nous proposons une large gamme d'épices africaines, comprenant des
          mélanges pour tajines, des assaisonnements pour viandes grillées, des
          poudres pour ragoûts, des mélanges pour plats végétariens, et bien
          plus encore. Explorez notre collection pour découvrir nos différentes
          saveurs uniques.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          3. Vos mélanges d'épices contiennent-ils des additifs ou des
          conservateurs ?
        </h1>
        <p className="m-3 leading-loose">
          Non, nos mélanges d'épices sont fabriqués à partir d'ingrédients
          naturels et n'incluent pas d'additifs artificiels ni de conservateurs.
          Nous privilégions des ingrédients frais pour préserver l'authenticité
          des saveurs.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          4. Comment puis-je utiliser vos épices dans ma cuisine ?
        </h1>
        <p className="m-3 leading-loose">
          Chaque mélange d'épices est accompagné de suggestions d'utilisation et
          de recettes pour vous aider à tirer le meilleur parti de nos produits.
          Cependant, n'hésitez pas à expérimenter et à les intégrer selon votre
          créativité culinaire !
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          5. Proposez-vous des expéditions internationales ?
        </h1>
        <p className="m-3 leading-loose">
          Oui, nous expédions nos épices vers de nombreuses destinations à
          travers le monde. Veuillez consulter notre page de commande pour
          vérifier si nous livrons dans votre pays et pour obtenir plus
          d'informations sur les frais d'expédition.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          6. Comment puis-je contacter votre service client ?
        </h1>
        <p className="m-3 leading-loose">
          Notre équipe du service client est disponible pour répondre à toutes
          vos questions. Vous pouvez nous contacter par e-mail à [adresse e-mail
          de contact] ou via notre formulaire de contact sur le site web.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          7. Acceptez-vous les retours ou les remboursements ?
        </h1>
        <p className="m-3 leading-loose">
          Nous voulons que vous soyez entièrement satisfait de nos produits. Si
          vous rencontrez un problème avec votre commande, veuillez nous
          contacter dans les [nombre de jours] jours suivant la réception pour
          discuter des retours ou des remboursements éventuels.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          8. Comment puis-je rester informé des nouvelles offres et des
          promotions ?
        </h1>
        <p className="m-3 leading-loose">
          Abonnez-vous à notre newsletter pour recevoir des mises à jour
          régulières sur nos offres spéciales, nos recettes exclusives, et
          d'autres informations intéressantes sur nos produits.
        </p>
      </div>
    </div>
  )
}
