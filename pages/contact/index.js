/**
 * Componente de la página de contacto
 * English:
 * Contact page component
 * Francais:
 * Composant de la page de contact
 * @returns {JSX} Contacto
 */
export default function Contact() {
  return (
    /**
     * Contenido de la página de contacto
     * donde se muestra la información refernete
     * al grupo desarrollador de la aplicación, dirección
     * de correo, teléfono y redes sociales.
     * English:
     * Content of the contact page
     * where the information related to the
     * developer group of the application,
     * email address, phone number and
     * social networks are displayed.
     * Francais:
     * Contenu de la page de contact
     * où il affiche les informations
     * relatives au groupe de développeurs
     * de l'application, l'adresse de courriel,
     * le numéro de téléphone et les réseaux
     * sociaux.
     * Portugues:
     * Conteúdo da página de contato
     * onde ele mostra as informações
     * relacionadas ao grupo de desenvolvedores
     * da aplicação, o endereço de e-mail,
     * o número de telefone e as redes
     * sociais.
     */
    <main className="grid grid-cols-1 md:grid-cols-3 p-8 gap-8">
      <section className="col-span-1 md:col-span-2">
        <h1 className="font-bold text-3xl">Contáctanos</h1>
        <hr />
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          quasi quas ab corporis aliquam optio, nesciunt autem. Laborum alias
          aliquid veniam. Reiciendis sapiente unde in, eveniet blanditiis quam
          odit sequi.
        </p>
        <p className="my-6">
          <strong>Email: </strong>raillykrry@gmail.com
        </p>
        <p className="my-6">
          <strong>Teléfono: </strong>+51 987-654-321
        </p>
        <p className="my-6">
          <strong>Dirección: </strong>av. Universitaria, la av. Venezuela, la
          av. Germán Amézaga y la av. Óscar R. Benavides
        </p>
      </section>
      <section className="col-span-1 hidden md:block">
        <article className="bg-[#EFC4AE] text-[#C46C7C] text-center text-2xl p-8 my-6">
          LLámanos al <strong>987-654-321</strong>
        </article>
        <div className="bg-green-200 shadow-md my-6 text-center p-32">
          Content here
        </div>
      </section>
    </main>
    /**
     * Contenido de la página de contacto
     * donde se muestra la información refernete
     * al grupo desarrollador de la aplicación, dirección
     * de correo, teléfono y redes sociales.
     * English:
     * Content of the contact page
     * where the information related to the
     * developer group of the application,
     * email address, phone number and
     * social networks are displayed.
     * Francais:
     * Contenu de la page de contact
     * où il affiche les informations
     * relatives au groupe de développeurs
     * de l'application, l'adresse de
     * courriel, le numéro de téléphone
     * et les réseaux
     * sociaux.
     * Portugues:
     * Conteúdo da página de contato
     * onde ele mostra as informações
     * relacionadas ao grupo de
     * desenvolvedores da aplicação,
     * o endereço de e-mail,
     * o número de telefone e as redes
     * sociais.
     */
  );
}
