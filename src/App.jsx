import { useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import SupportDeveloper from "./components/SupportDeveloper";
import "./App.css";

export default function App() {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="app">
      <Header />
      <Timeline onSupportClick={() => setShowSupport(true)} />
      {showSupport && (
        <SupportDeveloper onClose={() => setShowSupport(false)} />
      )}
    </div>
  );
}
