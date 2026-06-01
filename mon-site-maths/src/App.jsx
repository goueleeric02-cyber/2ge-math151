import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function Home() {
  const documents = [
    {
      id: 1,
      title: "MATH 151",
      description: "Exercices + Corrigés par chapitres",
      price: "500 FCFA",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200",
    },

    {
      id: 2,
      title: "MATH 151",
      description: "Sujets d’Examens + Corrigés",
      price: "500 FCFA",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #eef4ff, #f8fafc)",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0f172a",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          📘 Boutique de Documents PDF
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "18px",
            marginBottom: "50px",
          }}
        >
          Documents MATH 151 – Exercices, corrigés et examens
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
          }}
        >
          {documents.map((doc) => (
            <div
              key={doc.id}
              style={{
                background: "white",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={doc.image}
                alt={doc.title}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <div
                  style={{
                    background: "#dbeafe",
                    color: "#1d4ed8",
                    display: "inline-block",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    marginBottom: "15px",
                  }}
                >
                  PDF Premium
                </div>

                <h2>{doc.title}</h2>

                <p style={{ color: "#64748b" }}>
                  {doc.description}
                </p>

                <h2 style={{ color: "#2563eb" }}>
                  {doc.price}
                </h2>

                <Link to={`/document/${doc.id}`}>
                  <button
                    style={{
                      width: "100%",
                      padding: "16px",
                      marginTop: "20px",
                      background: "#2563eb",
                      border: "none",
                      color: "white",
                      borderRadius: "16px",
                      fontSize: "17px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Acheter maintenant
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentPage() {
  const { id } = useParams();

  const [paid, setPaid] = useState(false);
  const [paymentMethod, setPaymentMethod] =
    useState(null);

  const documents = [
    {
      id: 1,
      title: "MATH 151",
      description: "Exercices + Corrigés par chapitres",
      price: "500 FCFA",
      pdf: "/pdfs/math-exercices.pdf",
    },

    {
      id: 2,
      title: "MATH 151",
      description: "Sujets d’Examens + Corrigés",
      price: "500 FCFA",
      pdf: "/pdfs/math-examens.pdf",
    },
  ];

  const document = documents.find(
    (doc) => doc.id === Number(id)
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #eef4ff, #f8fafc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "500px",
          padding: "40px",
          borderRadius: "30px",
          boxShadow:
            "0 12px 35px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1>{document.title}</h1>

        <p style={{ color: "#64748b" }}>
          {document.description}
        </p>

        <h2
          style={{
            color: "#2563eb",
            fontSize: "34px",
          }}
        >
          {document.price}
        </h2>

        {!paymentMethod && !paid && (
          <>
            <p style={{ color: "#64748b" }}>
              Choisissez un moyen de paiement
            </p>

            <button
              onClick={() =>
                setPaymentMethod("flooz")
              }
              style={{
                width: "100%",
                padding: "16px",
                marginTop: "15px",
                background: "#00a651",
                border: "none",
                color: "white",
                borderRadius: "16px",
                fontSize: "17px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Payer avec Flooz
            </button>

            <button
              onClick={() =>
                setPaymentMethod("mixx")
              }
              style={{
                width: "100%",
                padding: "16px",
                marginTop: "12px",
                background: "#2563eb",
                border: "none",
                color: "white",
                borderRadius: "16px",
                fontSize: "17px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Payer avec Mixx by Yas
            </button>
          </>
        )}

        {paymentMethod === "flooz" && !paid && (
          <div style={{ marginTop: "20px" }}>
            <h3>💰 Paiement Flooz</h3>

            <p>
              <strong>Numéro :</strong> 96606377
            </p>

            <p>
              <strong>Nom :</strong> 2GE
            </p>

            <p>
              <strong>Montant :</strong> 500 FCFA
            </p>

            <button
              onClick={() => setPaid(true)}
              style={{
                width: "100%",
                padding: "16px",
                background: "#00a651",
                border: "none",
                color: "white",
                borderRadius: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              J’ai payé
            </button>
          </div>
        )}

        {paymentMethod === "mixx" && !paid && (
          <div style={{ marginTop: "20px" }}>
            <h3>📲 Paiement Mixx by Yas</h3>

            <p>
              <strong>Numéro :</strong> 90537817
            </p>

            <p>
              <strong>Nom :</strong> 2GE
            </p>

            <p>
              <strong>Montant :</strong> 500 FCFA
            </p>

            <button
              onClick={() => setPaid(true)}
              style={{
                width: "100%",
                padding: "16px",
                background: "#2563eb",
                border: "none",
                color: "white",
                borderRadius: "16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              J’ai payé
            </button>
          </div>
        )}

        {paid && (
          <>
            <div
              style={{
                background: "#dcfce7",
                color: "#166534",
                padding: "18px",
                borderRadius: "16px",
                marginTop: "25px",
                fontWeight: "bold",
              }}
            >
              ✅ Paiement confirmé
            </div>

            <a
              href={document.pdf}
              download
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "16px",
                  marginTop: "20px",
                  background: "#111827",
                  border: "none",
                  color: "white",
                  borderRadius: "16px",
                  fontSize: "17px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Télécharger le document
              </button>
            </a>
          </>
        )}

        <Link to="/">
          <button
            style={{
              width: "100%",
              padding: "16px",
              marginTop: "20px",
              background: "#e2e8f0",
              border: "none",
              borderRadius: "16px",
              cursor: "pointer",
            }}
          >
            Retour à la boutique
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/document/:id"
          element={<DocumentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;