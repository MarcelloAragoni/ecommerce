import "./Categories.scss";
import NavBar from "../../Navbar/Navbar";

export default function Categories() {
  const links = [
    { url: "www.mysite.com/Collections", text: "Collections" },
    { url: "www.mysite.com/Men", text: "Men" },
    { url: "www.mysite.com/Women", text: "Women" },
    { url: "www.mysite.com/About", text: "About" },
    { url: "www.mysite.com/Contact", text: "Contact" },
  ];

  return <NavBar links={links} />;
}
