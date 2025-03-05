import React, { useEffect, useState } from "react";
import {
  Radar,
  Scatter,
  Bubble,
} from "react-chartjs-2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import {
  Bar,
  Pie,
  Line,
  Doughnut,
  PolarArea,
} from "react-chartjs-2";
import "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

// Footer Component
const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-auto">
    &copy; 2025 Data Visualization Dashboard. All rights reserved.
    <div>
      <a href="/privacy" className="text-white mx-2">Privacy Policy</a>
      <a href="/terms" className="text-white mx-2">Terms of Service</a>
      <a href="/contact" className="text-white mx-2">Contact Us</a>
    </div>
  </footer>
);

// Generate Random String for Autofill
const generateRandomString = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length },
    () => chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

// Login Page
const LoginPage = () => {
  const [username, setUsername] = useState(generateRandomString(8));
  const [password, setPassword] = useState(generateRandomString(12));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter valid credentials.");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <h4>Login</h4>
      <input
        type="text"
        value={username}
        readOnly
        className="form-control mb-3"
      />
      <input
        type="password"
        value={password}
        readOnly
        className="form-control mb-3"
      />
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

// Persistent Layout Component
const PersistentLayout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Navbar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Data Visualization Dashboard</span>
          <form className="d-flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control me-2"
            />
            <button className="btn btn-outline-success" type="button">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="d-flex flex-grow-1">
        <div className="bg-light p-3" style={{ width: "200px" }}>
          <h5>Dashboard Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/charts" className="nav-link">
                Charts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/email" className="nav-link">
                Email
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chat" className="nav-link">
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/account" className="nav-link">
                Account
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-grow-1 p-4">{children}</div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

// Dashboard Page
const Dashboard = () => {
  return (
    <PersistentLayout>
      <h5>Dashboard</h5>
      <div className="row">
        <div className="col-md-6">
          <h6>Trend Analysis (Line Chart)</h6>
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar"],
              datasets: [
                {
                  label: "Trend",
                  data: [10, 20, 15],
                  borderColor: "#3498db",
                  fill: true,
                },
              ],
            }}
          />
        </div>
        <div className="col-md-6">
          <h6>Category Analysis (Bar Chart)</h6>
          <Bar
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Categories",
                  data: [30, 40, 30],
                  backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
                },
              ],
            }}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h6>Polar Area Chart</h6>
          <PolarArea
            data={{
              labels: ["X", "Y", "Z"],
              datasets: [
                {
                  data: [12, 19, 10],
                  backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
                },
              ],
            }}
          />
        </div>
        <div className="col-md-6">
          <h6>Radar Chart</h6>
          <Radar
            data={{
              labels: ["Speed", "Strength", "Agility", "Endurance"],
              datasets: [
                {
                  label: "Performance",
                  data: [80, 90, 70, 85],
                  borderColor: "#36a2eb",
                  backgroundColor: "rgba(54,162,235,0.2)",
                },
              ],
            }}
          />
        </div>
      </div>
    </PersistentLayout>
  );
};

// Charts Page
const ChartsPage = () => (
  <PersistentLayout>
    <h5>Charts</h5>
    <div className="row">
      <div className="col-md-6">
        <h6>Pie Chart</h6>
        <Pie
          data={{
            labels: ["X", "Y", "Z"],
            datasets: [
              {
                data: [10, 20, 30],
                backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
              },
            ],
          }}
        />
      </div>
      <div className="col-md-6">
        <h6>Doughnut Chart</h6>
        <Doughnut
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                data: [10, 20, 30],
                backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
              },
            ],
          }}
        />
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <h6>Scatter Plot</h6>
        <Scatter
          data={{
            datasets: [
              {
                label: "Data Points",
                data: [
                  { x: 5, y: 10 },
                  { x: 10, y: 15 },
                  { x: 15, y: 20 },
                ],
                backgroundColor: "#e74c3c",
              },
            ],
          }}
        />
      </div>
      <div className="col-md-6">
        <h6>Bubble Chart</h6>
        <Bubble
          data={{
            datasets: [
              {
                label: "Bubble Data",
                data: [
                  { x: 5, y: 10, r: 5 },
                  { x: 10, y: 15, r: 10 },
                  { x: 15, y: 20, r: 15 },
                ],
                backgroundColor: "#2ecc71",
              },
            ],
          }}
        />
      </div>
    </div>
  </PersistentLayout>
);

// Email Page
const EmailPage = () => (
  <PersistentLayout>
    <h5>Email Inbox</h5>
    <p>Always Welcome</p>
    <p>Available at anytime</p>
    <p>From: sender@example.com</p>
  </PersistentLayout>
);

// Support Page
const SupportPage = () => (
  <PersistentLayout>
    <h5>Support</h5>
    <p>Email: support@example.com </p>
      <p>Phone: +1 234 567 890</p>
      <p>24/7 free customer care</p>
      <p>please free to contact me</p>
  </PersistentLayout>
);

// Account Page
const AccountPage = () => (
  <PersistentLayout>
    <h5>User Account</h5>
    <img
      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      alt="Profile"
      style={{ width: "100px", borderRadius: "50%" }}
    />
    <p>Username: JohnDoe </p>
     <p> Email: johndoe@example.com</p>
    <button
      onClick={() => (window.location.href = "/login")}
      className="btn btn-danger"
    >
      Logout
    </button>
  </PersistentLayout>
);

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Enhanced Bot Response Logic
  const getBotResponse = (msg) => {
    const lowerMsg = msg.trim().toLowerCase(); // Trim and convert to lowercase

    // Debugging: Log the processed input
    console.log("Processed Input:", lowerMsg);

    // Greetings
    if (/^(hi|hello|hey)$/i.test(lowerMsg)) {
      return "Hello! How can I assist you?";
    }

    // Help Requests
    if (/(help|assistance|support)/i.test(lowerMsg)) {
      return "Sure! You can ask about 'data', 'region', or 'sector'.";
    }

    // Data Queries
    if (/(data|information|stats)/i.test(lowerMsg)) {
      return "Our data includes regions, sectors, and topics. You can visualize it using the charts.";
    }

    // Region Queries
    if (/(region|area|location)/i.test(lowerMsg)) {
      return "We analyze data across various regions such as Northern America, Central America, and more.";
    }

    // Sector Queries
    if (/(sector|industry|field)/i.test(lowerMsg)) {
      return "The sectors in our data include Energy, Industries, Agriculture, and more.";
    }

    // Default Response
    return "I'm sorry, I didn't understand that. Try asking about 'data', 'region', or 'sector'.";
  };

  // Handle Sending Messages
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message and bot response to the chat
    setMessages([
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: getBotResponse(input) },
    ]);

    // Clear the input field
    setInput("");
  };

  return (
    <PersistentLayout>
      <h5>Chat</h5>
      <div
        className="chat-box border p-3 mb-3"
        style={{ height: "200px", overflowY: "auto" }}
      >
        {messages.map((msg, i) => (
          <p key={i}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} // Allow sending with Enter key
        className="form-control"
        placeholder="Type your message here..."
      />
      <button onClick={handleSendMessage} className="btn btn-primary mt-2">
        Send
      </button>
    </PersistentLayout>
  );
};
// Main App
const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/charts" element={<ChartsPage />} />
      <Route path="/email" element={<EmailPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  </Router>
);

export default App;