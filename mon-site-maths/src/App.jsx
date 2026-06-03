import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";

function Home() {
  const documents = [
    {
      id: 1,
      type: "EXERCICES CORRIGÉS",
      title: "Exercices Math 151",
      description:
        "Exercices corrigés, applications pratiques et méthodes détaillées pour maîtriser chaque chapitre et réussir vos évaluations.",
      price: "500 FCFA",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200",
    },
    {
      id: 2,
      type: "EXAMENS CORRIGÉS",
      title: "Examens Math 151",
      description:
        "Sujets d'examens corrigés, astuces de résolution et techniques efficaces pour préparer vos contrôles et examens.",
      price: "500 FCFA",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
    },
  ];

  return (
    <div className="container">

      <section className="hero">

        <div className="hero-badge">
          📚 GENIUS Learning Platform
        </div>

        <h1>
          Réussissez vos examens de
          <span className="hero-gradient">
            {" "}Mathématiques
          </span>
        </h1>

        <p>
          Accédez à des ressources académiques de qualité conçues
          pour les étudiants en Agronomie.
          Exercices corrigés, examens corrigés et méthodes efficaces
          pour améliorer vos résultats.
        </p>

      </section>

      <div className="cards">
        {documents.map((doc) => (
          <div key={doc.id} className="card">

            <img src={doc.image} alt={doc.title} />

            <div className="card-content">

              <div className="document-type">
                {doc.type}
              </div>

              <h2>{doc.title}</h2>

              <p>{doc.description}</p>

              <div className="price-badge">
                {doc.price}
              </div>

              <Link to={`/document/${doc.id}`}>
                <button>
                  Acheter maintenant
                </button>
              </Link>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

function DocumentPage() {
  const { id } = useParams();

  const whatsappNumber = "22897032655";

  const documents = [
    {
      id: 1,
      title: "Exercices Math 151",
      description:
        "Exercices corrigés et applications pratiques par chapitres.",
    },
    {
      id: 2,
      title: "Examens Math 151",
      description:
        "Sujets d'examens corrigés et méthodes détaillées.",
    },
  ];

  const document = documents.find(
    (d) => d.id === Number(id)
  );

  if (!document) {
    return (
      <h2 style={{ padding: "20px" }}>
        Document introuvable
      </h2>
    );
  }

  return (
    <div className="payment-page">

      <div className="payment-card">

        <div className="document-type">
          PDF PREMIUM
        </div>

        <h1>{document.title}</h1>

        <p>{document.description}</p>

        <h2>500 FCFA</h2>

        <div className="payment-box">

          <h3>💳 Paiement Mobile Money</h3>

          <p>
            <strong>Mixx by Yas :</strong> 90537817
          </p>

          <p>
            <strong>Nom :</strong> GENIUS
          </p>

          <br />

          <p>
            <strong>Flooz :</strong> 96606377
          </p>

          <p>
            <strong>Nom :</strong> GENIUS
          </p>

        </div>

        <div className="payment-box">

          <h3>
            📋 Comment recevoir votre document ?
          </h3>

          <p>1. Effectuez le paiement.</p>

          <p>2. Faites une capture d'écran.</p>

          <p>3. Cliquez sur le bouton WhatsApp.</p>

          <p>4. Envoyez votre preuve de paiement.</p>

          <p>5. Recevez votre PDF après validation.</p>

        </div>

        <div className="payment-box">

          <h3>✅ Garantie</h3>

          <p>
            Après vérification du paiement,
            votre document sera envoyé rapidement
            sur WhatsApp.
          </p>

        </div>

        <a
          className="whatsapp-button"
          target="_blank"
          rel="noreferrer"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Bonjour GENIUS, je viens d'effectuer le paiement pour "${document.title}". Je vous envoie ma preuve de paiement afin de recevoir mon document PDF.`
          )}`}
        >
          📱 Envoyer ma preuve de paiement
        </a>

        <Link to="/" className="back-link">
          ← Retour à l'accueil
        </Link>

      </div>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/document/:id"
          element={<DocumentPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}