import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { User } from "./Context/UserContext";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  // Get token from local storage
  const context = useContext(User);
  const token = context.auth.token;
  console.log(context, token);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/product/show", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);

  //
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  return (
    <div>
      <Header />
      <div className="home">
        <div className="features">
          <h1
            className="title center"
            style={{ fontSize: "35px", color: "white", borderBottom: "2px solid white" }}
          >
            Online Store
          </h1>
          <div className="boxs">
            <div className="box">
              <i className="fas fa-car"></i>
              <h2>Free Shopping</h2>
              <p>Free on order over $300</p>
            </div>
            <div className="box">
              <i className="fas fa-shield-alt"></i>
              <h2>Security Payment</h2>
              <p>100% security payment</p>
            </div>
            <div className="box">
              <i className="fas fa-exchange-alt"></i>
              <h2>Easy Exchange</h2>
              <p>7 days easy exchange</p>
            </div>
            <div className="box">
              <i className="fas fa-phone-alt"></i>
              <h2>24/7 Online Support</h2>
              <p>Support 24 hours a day</p>
            </div>
          </div>
        </div>

        <h2 className="title center">
          Our <span style={{ color: "#0075ff" }}>Products</span>
        </h2>

        <div className="products">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <div
                style={{
                  backgroundImage: `url(${product.image})`,
                  width: "100%",
                  height: "200px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="body">
                <div className="content">
                  <h3 className="title">{product.title}</h3>
                  <p className="description">{product.description}</p>
                </div>
                <div className="info">
                  <p>Product No. {index + 1}</p>
                  <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <h2>TOL-Store</h2>
          <div className="social">
            <a href="https://www.facebook.com/taha.khaled.315213" target="self">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/taha-khaled-81a81a26a/" target="self">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/TahaKhaledSaad" target="self">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCJYFIK_u12QVPaTp9P36vXw" target="self">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p>
            &copy; {currentYear} <span>Taha Khaled</span> All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
