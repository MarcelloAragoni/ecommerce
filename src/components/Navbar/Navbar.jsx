export default function NavBar({ links }) {
  return (
    <ul className="categories-bar">
      {links.map((link) => (
        <li className="categories-bar__item">
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}
