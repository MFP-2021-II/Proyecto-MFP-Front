/**
 * Icono de filtrar, este sirve para
 * indicar al usuario que existe una
 * opción para filtrar los anuncios
 * del tablero.
 * English:
 * Filter icon, this is used to indicate
 * to the user that there is an option
 * to filter the ads of the board.
 *
 * props son las propiedades del icono
 * English:
 * props are the properties of the icon
 * @param {props} props - Props recibidos por el componente
 * @returns {JSX} Filter
 */
export default function Filter(props) {
  return (
    /**
     * Icono de filtrar, silueta de embudo,
     * donde se le pasa los props para poder
     * modificarlo por className desde
     * el componente donde se utiliza.
     * (SVG convertido JSX)
     * English:
     * Filter icon, silhouette of a pipe,
     * where you pass the props to be able
     * to modify it by className from
     * the component where it is used.
     * (SVG converted to JSX)
     */
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0h24m0 24H0"></path>
      <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0018.95 4H5.04c-.83 0-1.3.95-.79 1.61z"></path>
      <path fill="none" d="M0 0h24v24H0V0z"></path>
    </svg>
  );
}
