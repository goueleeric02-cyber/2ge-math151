import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

/* ================= HOME ================= */

function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const joinVip = () => {
    if (!name || !phone) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const user = {
      id: Date.now(),
      name,
      phone,
      status: "pending",
      date: new Date().toLocaleDateString()
    };

    localStorage.setItem("current_user", JSON.stringify(user));

    navigate("/pending");
  };

  return (
    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-badge">
          🔥 Places limitées
        </div>

        <h1>
          Réussis <span>Math 151</span>
          <br />
          sans stress
        </h1>

        <p>
          Rejoins le Groupe VIP Math 151 et accède à des
          exercices corrigés, examens corrigés,
          résolutions détaillées et un accompagnement
          jusqu'à l'examen.
        </p>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">
          <div className="icon">📚</div>
          <h3>Exercices corrigés</h3>
          <p>
            Travaux dirigés détaillés avec méthodes
            expliquées étape par étape.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">📝</div>
          <h3>Examens corrigés</h3>
          <p>
            Anciens sujets et corrections complètes
            pour maximiser tes chances.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🎯</div>
          <h3>Accompagnement</h3>
          <p>
            Assistance WhatsApp et réponses à tes
            difficultés jusqu'à l'examen.
          </p>
        </div>

      </section>

      {/* BENEFITS */}

      <section className="benefits">

        <h2>Ce que tu reçois</h2>

        <div className="benefits-list">

          <div>✅ Exercices corrigés</div>
          <div>✅ Examens corrigés</div>
          <div>✅ Méthodes de résolution</div>
          <div>✅ Documents PDF</div>
          <div>✅ Accompagnement WhatsApp</div>
          <div>✅ Groupe VIP privé</div>

        </div>

      </section>

      {/* OFFER */}

      <section className="offer">

        <div className="offer-card">

          <h2>Accès Groupe VIP Math 151</h2>

          <div className="offer-price">
            1000 FCFA
          </div>

          <p>
            Paiement unique. Accès immédiat après validation.
          </p>

          <input
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Numéro WhatsApp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            className="join-btn"
            onClick={joinVip}
          >
            Rejoindre le Groupe VIP
          </button>

        </div>

      </section>

    </div>
  );
}

/* ================= PENDING ================= */

function Pending() {
  const user = JSON.parse(
    localStorage.getItem("current_user")
  );

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Numéro copié");
  };

  return (
    <div className="pending-page">

      <div className="payment-card">

        <div className="status-badge">
          ⏳ EN ATTENTE DE VALIDATION
        </div>

        <h1>Finalise ton inscription</h1>

        <p>
          Bonjour <strong>{user?.name}</strong>,
          effectue le paiement puis envoie la preuve.
        </p>

        <div className="price">
          1000 FCFA
        </div>

        {/* MIXX */}

        <div className="payment-box">

          <h3>📱 MIXX BY YAS</h3>

          <div className="number">
            90537817
          </div>

          <p>Nom : GENIUS</p>

          <button
            onClick={() => copyText("90537817")}
          >
            Copier le numéro
          </button>

        </div>

        {/* FLOOZ */}

        <div className="payment-box">

          <h3>📱 FLOOZ</h3>

          <div className="number">
            96 60 63 77
          </div>

          <p>Nom : GENIUS</p>

          <button
            onClick={() => copyText("96606377")}
          >
            Copier le numéro
          </button>

        </div>

        <a
          className="whatsapp-btn"
          href={`https://wa.me/22897032655?text=${encodeURIComponent(
            `Bonjour GENIUS, j'ai effectué le paiement de 1000 FCFA pour intégrer le Groupe VIP Math 151. Voici ma preuve de paiement.`
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          📲 Envoyer ma preuve sur WhatsApp
        </a>

      </div>

    </div>
  );
}

/* ================= ADMIN ================= */

function Admin() {
  return (
    <div className="admin-page">

      <h1>Dashboard Admin</h1>

      <p>
        Cette partie pourra être améliorée plus tard
        avec Firebase ou Supabase.
      </p>

    </div>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/pending"
          element={<Pending />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </BrowserRouter>
  );
}