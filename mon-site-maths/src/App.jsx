import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

/* ================= HOME ================= */
function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const join = () => {
    if (!name || !phone) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const newUser = {
      id: Date.now(),
      name,
      phone,
      status: "pending",
      date: new Date().toLocaleDateString()
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("current_user", JSON.stringify(newUser));

    navigate("/pending");
  };

  return (
    <div className="page center">

      <div className="card">

        <div className="badge">GENIUS VIP</div>

        <h1 className="title">
          GROUPE VIP<br />
          <span>MATH 151</span>
        </h1>

        <p className="subtitle">
          Accès aux cours, exercices corrigés et accompagnement jusqu’à l’examen.
        </p>

        <input placeholder="Nom complet" onChange={(e) => setName(e.target.value)} />
        <input placeholder="WhatsApp" onChange={(e) => setPhone(e.target.value)} />

        <button onClick={join}>Rejoindre VIP - 1000 FCFA</button>

      </div>

    </div>
  );
}

/* ================= PENDING ================= */
function Pending() {
  const user = JSON.parse(localStorage.getItem("current_user"));

  return (
    <div className="page center">

      <div className="card highlight">

        <h2 className="status-title">
          ⏳ EN ATTENTE DE VALIDATION
        </h2>

        <div className="info">
          <p><b>Nom :</b> {user?.name}</p>
          <p><b>WhatsApp :</b> {user?.phone}</p>
        </div>

        <div className="box">
          Paiement requis : <b>1000 FCFA</b>
        </div>

        <a
          className="wa"
          href="https://wa.me/22897032655"
          target="_blank"
        >
          Envoyer preuve WhatsApp
        </a>

      </div>

    </div>
  );
}

/* ================= ADMIN ================= */
function Admin() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const validate = (id) => {
    const updated = users.map(u =>
      u.id === id ? { ...u, status: "approved" } : u
    );

    localStorage.setItem("users", JSON.stringify(updated));
    window.location.reload();
  };

  if (!auth) {
    return (
      <div className="page center">
        <div className="card">

          <h2>Admin Panel</h2>

          <input placeholder="Mot de passe" onChange={(e) => setPass(e.target.value)} />

          <button onClick={() => setAuth(pass === "1234")}>
            Connexion
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="admin">

      <h2 className="admin-title">Dashboard VIP</h2>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>WhatsApp</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.phone}</td>

              <td className={u.status}>
                {u.status}
              </td>

              <td>{u.date}</td>

              <td>
                {u.status === "pending" ? (
                  <button onClick={() => validate(u.id)}>Valider</button>
                ) : (
                  "OK"
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}