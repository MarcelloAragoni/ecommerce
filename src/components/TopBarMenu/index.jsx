import Logo from "./Logo/Logo";
import Categories from "./Categories/Categories";
import Cart from "./Cart/Cart";
import User from "./User/User";

import "./index.scss";

export default function NavBar() {
  return (
    <div className="pagenavbar">
      <Logo />
      <Categories />
      <Cart />
      <User />
    </div>
  );
}
