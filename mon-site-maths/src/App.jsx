import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Home() {
  const documents = [
    {
      id: 1,
      title: "MATH 151",
      description: "Exercices + Corrigés par chapitres pour une meilleure compréhension progressive.",
      price: "500 FCFA",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200",
      pdf: "/pdfs/math-exercices.pdf",
    },
    {
      id: 2,
      title: "MATH 151",
      description: "Sujets d’examens corrigés pour s’entraîner efficacement avant les évaluations.",
      price: "500 FCFA",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200",
      pdf: "/pdfs/math-examens.pdf",
    },
  ];

  return (
    <div className="container">

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">📚 2GE Learning Platform</div>

        <h1>
          <span className="hero-gradient">Mathématiques</span><br />
          pour Agronomie
        </h1>

        <p>
          Accès simple et rapide à des documents PDF de qualité :
          cours, exercices et examens corrigés pour progresser efficacement.
        </p>
      </div>

      {/* CARDS */}
      <div className="cards">
        {documents.map((doc) => (
          <div key={doc.id} className="card">

            <img src={doc.image} alt={doc.title} />

            <div className="card-content">
              <h2>{doc.title}</h2>

              <p>{doc.description}</p>

              <div className="price-badge">
                {doc.price}
              </div>

              <Link to={`/document/${doc.id}`}>
                <button>Acheter maintenant</button>
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
  const [paid, setPaid] = useState(false);

  const whatsappNumber = "22890537817";

  const documents = [
    {
      id: 1,
      title: "MATH 151",
      description: "Exercices + Corrigés par chapitres",
      pdf: "/pdfs/math-exercices.pdf",
    },
    {
      id: 2,
      title: "MATH 151",
      description: "Sujets d’examens corrigés",
      pdf: "/pdfs/math-examens.pdf",
    },
  ];

  const document = documents.find((d) => d.id === Number(id));

  if (!document) {
    return <h2 style={{ padding: "20px" }}>Document introuvable</h2>;
  }

  return (
    <div className="payment-page">

      <div className="payment-card">

        <h1>{document.title}</h1>

        <p>{document.description}</p>

        <h2>500 FCFA</h2>

        <div className="payment-box">
          <h3>💳 Paiement Mobile Money</h3>

          <p><strong>Mixx by Yas :</strong> 90537817</p>
          <p><strong>Nom :</strong> 2GE</p>

          <br />

          <p><strong>Flooz :</strong> 96606377</p>
          <p><strong>Nom :</strong> 2GE</p>
        </div>

        {!paid ? (
          <button className="pay-button" onClick={() => setPaid(true)}>
            J’ai payé
          </button>
        ) : (
          <>
            <a
              className="whatsapp-button"
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Bonjour 2GE, j’ai payé ${document.title} (${document.description})`
              )}`}
            >
              Contacter 2GE sur WhatsApp
            </a>

            <a className="download-button" href={document.pdf} download>
              Télécharger le document
            </a>
          </>
        )}

        <br />
        <Link to="/">← Retour</Link>

      </div>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document/:id" element={<DocumentPage />} />
      </Routes>
    </BrowserRouter>
  );
}