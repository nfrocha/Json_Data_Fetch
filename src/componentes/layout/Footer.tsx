import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="SocialList" style={{ display: "none" }}>
        <li>
          <a href="">facebook</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Linkedin</a>
        </li>
      </ul>
      <p>
        <span className="CopyRight">Nelson Rocha &copy; 2023</span>
      </p>
    </div>
  );
};

export default Footer;
