import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

//Header 
function Header() {
    return <h2>NATASHA'S Pizza House</h2>
}

function Order() {
    return <button>Start Ordering</button>
}

//Conditional Rendering for Shop Status (Requirement 3)
function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour <= 22;
    return (
        <footer className="footer">
            {isOpen ? (
                <>
                <Order />
                <p>"We're currently Open"</p>
                </>
            ): "Sorry we're closed"}
        </footer>
    )
};

//Rendering Pizza Data in Array using map function
//map takes in function
function Menu() {
    return (
        <div className = "menu">
            <h2 class="textline">Our Menu</h2>
            {pizzaData.map(
                pizza => (
                    <Pizza key={pizza.name} {...pizza} />
                ))}
        </div>
    )
};

//Making Pizza Component with props (Requirement 1)
function Pizza({ name, ingredients, price, photoName }) {
    return (
        <div>
            <img class="image" src={photoName} alt={name}></img>
            <p>{name}</p>
            <em>{ingredients}</em>
            <p>${price}</p>
        </div>
    )
};

function App() {
    return (
        <div className="container"> 
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

//external CSS

// const obj = {color: "blue", fontSize: "24px"}; //defining object

// function App() {
//     return <h1 style={obj}>Hello</h1>
// }; //place the defined object into the App function

// function Menu() {
//     return (
//         <div className = "menu">
//             <h2>Our Menu</h2>
//             <Pizza />
//             <Pizza />
//         </div>
//     )
// };


// function Header() {
//     // return <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>NATASHA's Pizza Co.</h1>
//     //Inline styles
//     return <h1>NATASHA's Pizza Co.</h1>
// };

// function Pizza() {
//     return (
//         <div>
//             <img src="/pizzas/spinaci.jpg" alt="Spinach Pizza"></img>
//             <h2>Spinach Pizza</h2>
//             <h4>Tomato, mozarella, spinach, and ricotta cheese</h4>
//             <h4>$10</h4>
//         </div>
//     );
// };

//Conditional Rendering for Shop Status (Requirement 3)
// function Footer() {
//     const currentHour = new Date().getHours();
//     const isOpen = currentHour >= 11 && currentHour <= 22;
//     return (
//         <footer className="footer">
//             {isOpen ? "We're currently Open" : "Sorry we're closed"}
//         </footer>
//     )
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//Mapping through the pizzaData array

