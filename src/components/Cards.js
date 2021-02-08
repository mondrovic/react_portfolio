import React from "react";
import "./css/Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Some of my work!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img-brewhound.jpg"
              text="A full MERN stack application that allows you to search for craft breweries in your area. Brewhound leverages YelpQL, a public GraphQL endpoint, to query data as well as a backend GraphQL server. This application allows you to create and account to save favorite breweries for future use."
              label="Full Stack"
              gh="https://github.com/MBrassey/brewhound-2"
              path="https://brewhound-2.herokuapp.com/"
            />
            <CardItem
              src="images/img-thought.jpg"
              text="A backend application using a RESTful MVC architecture that performs basic social media functions such as user management, adding friends, and creating/editing posts. "
              label="Backend"
              gh="https://github.com/mondrovic/thought-bubbles"
              path="https://github.com/mondrovic/thought-bubbles"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img-bookfinder.jpg"
              text="A full stack MERN application that uses Google's book API to search for books. Once books are found, a user can save them for future use if they create an account."
              label="Full Stack"
              gh="https://github.com/mondrovic/book-finder"
              path="https://blooming-lake-50196.herokuapp.com/"
            />
            <CardItem
              src="images/img-retail.jpg"
              text="A RESTful backend for an e-commerce website that utilizes Sequelize to interact with a MySQL database. The API can be used to fetch categories, products, and tags."
              label="Backend"
              gh="https://github.com/mondrovic/retail-backend"
              path="https://github.com/mondrovic/retail-backend"
            />
            <CardItem
              src="images/img-shop.jpg"
              text="A full MERN stack shopping website with Redux used for a global cart management and Stripe payment processing. On top of having user and cart management, the application is a PWA and allows a user to avoid interruptions when offline."
              label="Full Stack"
              gh="https://github.com/mondrovic/shop-shop-redux"
              path="https://warm-inlet-69729.herokuapp.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
