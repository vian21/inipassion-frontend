import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apropos",
  description: "Apropos de IniPassion",
}

export default function About() {
  return (
    <main className="w-full m-0">
      <div className="w-4/5 lg:w-2/5 m-auto">
        <p className="m-3 text-2xl italic font-semibold text-gray-900 dark:text-white">
          "Bienvenue chez IniPassion - Découvrez l'Authenticité des Saveurs
          Africaines"
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          À Propos de Nous
        </h1>
        <p className="m-3 leading-loose">
          Chez IniPassion, nous croyons en la magie des épices et des saveurs
          africaines authentiques. Nous sommes passionnés par l'héritage
          culinaire de l'Afrique et nous nous efforçons de partager cette
          passion à travers nos mélanges d'épices faits maison, soigneusement
          préparés pour éveiller vos papilles et transporter vos sens vers de
          nouveaux horizons de délices.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          Notre Engagement envers la Qualité
        </h1>
        <p className="m-3 leading-loose">
          Nos épices sont sélectionnées avec soin auprès des meilleurs
          producteurs locaux en Afrique, garantissant ainsi la fraîcheur, la
          pureté et l'authenticité de chaque ingrédient. Chaque mélange est créé
          avec une attention méticuleuse aux proportions, reflétant la richesse
          des recettes traditionnelles transmises de génération en génération.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          Découvrez notre Collection
        </h1>
        <p className="m-3 leading-loose">
          Parcourez notre gamme diversifiée d'épices africaines, allant des
          mélanges pour tajines aux assaisonnements pour viandes grillées en
          passant par les poudres pour ragoûts et bien plus encore. Laissez-vous
          emporter par les arômes envoûtants et les saveurs uniques qui évoquent
          les cuisines variées et exquises du continent africain.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">Nos Services</h1>
        <p className="m-3 leading-loose">
          Outre la vente de nos mélanges d'épices, nous offrons des conseils
          culinaires, des recettes inspirantes et des suggestions d'utilisation
          pour tirer le meilleur parti de chaque mélange. Notre objectif est de
          vous aider à explorer, expérimenter et créer des plats mémorables qui
          captivent les palais et rassemblent les gens autour de la table.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">
          Rejoignez la Communauté IniPassion
        </h1>
        <p className="m-3 leading-loose">
          Nous invitons les amoureux de la cuisine africaine, les passionnés de
          saveurs exotiques et les curieux de nouvelles expériences gustatives à
          rejoindre notre communauté. Abonnez-vous à notre newsletter pour
          recevoir des astuces de cuisine, des offres spéciales et des
          informations exclusives sur nos produits.
        </p>

        <h1 className="text-xl m-3 leading-loose font-bold">Contactez-Nous</h1>
        <p className="m-3 leading-loose">
          Vous avez des questions, des demandes spéciales ou simplement envie de
          partager votre passion pour la cuisine africaine ? Notre équipe est là
          pour vous aider. Contactez-nous et laissez-nous vous guider vers
          l'univers envoûtant des épices africaines.
        </p>

        <p className="m-3 leading-loose">
          Plongez dans un voyage sensoriel à travers les saveurs authentiques de
          l'Afrique avec IniPassion. Découvrez la différence que nos mélanges
          d'épices faits maison peuvent apporter à vos plats, et laissez-nous
          être votre partenaire culinaire pour des expériences gustatives
          inoubliables.
        </p>
      </div>
    </main>
  )
}
