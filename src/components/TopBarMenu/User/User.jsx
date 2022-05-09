import "./User.scss";

export default function User({ userSource }) {
  const IMAGE_PATH = "/images/";

  return <img className="user-icon" src={IMAGE_PATH + userSource} alt="" />;
}
