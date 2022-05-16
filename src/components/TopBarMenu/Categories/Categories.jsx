import "./Categories.scss";
import NavBar from "../../Navbar/Navbar";

export default function Categories() {
  const links = [
    { url: "www.mysite.com/men", text: "Collections" },
    { url: "www.mysite.com/women", text: "Men" },
    { url: "www.mysite.com/men", text: "Women" },
    { url: "www.mysite.com/women", text: "About" },
    { url: "www.mysite.com/women", text: "Contact" },
  ];

  return <NavBar links={links} />;
}
