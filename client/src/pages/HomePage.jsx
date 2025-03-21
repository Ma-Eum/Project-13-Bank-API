import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div>
        <h1>🏦 Bienvenue sur Argent Bank</h1>
        <Link to="/login">Se connecter</Link>
        <br />
        <Link to="/profile">Voir le profil</Link>
    </div>
);

export default HomePage;
