export default function House (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path d="M12 5.5l6 4.5v9H6v-9l6-4.5M12 3L4 9v12h16V9l-8-6zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path>
    </svg>
  );
}