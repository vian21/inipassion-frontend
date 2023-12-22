import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité",
}

export default function Policy() {
  return (
    <div className="w-full m-0">
      <div className="w-4/5 lg:w-2/5 m-auto">
        <h1 className="text-2xl m-3 leading-loose font-bold">
          Politique de Confidentialité
        </h1>
        <p className="m-3 leading-loose">
          La confidentialité de nos visiteurs est extrêmement importante pour
          [Nom de votre entreprise]. Cette politique de confidentialité
          documente les types d'informations personnelles reçues et collectées
          par notre site web et comment nous les utilisons.
        </p>
        <h1 className="text-xl m-3 leading-loose font-bold">
          Collecte d'Informations
        </h1>
        <p className="m-3 leading-loose">
          Lorsque vous visitez notre site, nous pouvons collecter des
          informations non personnellement identifiables, telles que votre
          adresse IP, le type de navigateur, les pages que vous consultez, la
          durée de votre visite et d'autres données similaires. Ces informations
          sont collectées pour améliorer l'expérience de l'utilisateur, analyser
          les tendances et administrer le site.
        </p>
        <h1 className="text-xl m-3 leading-loose font-bold">Cookies</h1>
        <p className="m-3 leading-loose">
          Notre site web utilise des cookies pour stocker des informations sur
          les préférences des visiteurs, enregistrer des informations
          spécifiques concernant les pages consultées et personnaliser le
          contenu en fonction du type de navigateur ou d'autres informations que
          les visiteurs envoient via leur navigateur.
        </p>
        <h1 className="text-xl m-3 leading-loose font-bold">
          Utilisation des Informations
        </h1>
        <p className="m-3 leading-loose">
          Les informations collectées sont utilisées pour comprendre et analyser
          les tendances, administrer le site, suivre les mouvements des
          utilisateurs sur le site et collecter des informations démographiques
          globales. Aucune information personnelle identifiable n'est vendue,
          échangée, transférée ou transmise à des tiers sans votre consentement,
          sauf si requis par la loi.
        </p>
        <h1 className="text-xl m-3 leading-loose font-bold">
          Protection des Informations
        </h1>
        <p className="m-3 leading-loose">
          Nous prenons des mesures de sécurité raisonnables pour protéger vos
          informations personnelles contre la perte, l'utilisation abusive,
          l'accès non autorisé, la divulgation, l'altération ou la destruction.
        </p>
        <h1 className="text-xl m-3 leading-loose font-bold">Consentement</h1>
        <p className="m-3 leading-loose">
          En utilisant notre site web, vous consentez à notre politique de
          confidentialité et acceptez ses termes.
        </p>
        <h1 className="text-xl m-3 leading-loose font-bold">
          Modifications de la Politique de Confidentialité
        </h1>
        <p className="m-3 leading-loose">
          Nous nous réservons le droit de mettre à jour, de modifier ou de
          changer notre politique de confidentialité à tout moment. Les
          modifications seront publiées sur cette page.
        </p>
        <h1 className="text-xl m-3 leading-loose font-bold">Contactez-nous</h1>
        <p className="m-3 leading-loose">
          Si vous avez des questions concernant notre politique de
          confidentialité, veuillez nous contacter à [adresse e-mail de
          contact].
        </p>
      </div>
    </div>
  )
}
