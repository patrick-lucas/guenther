import { useState } from "react";

type Props = {
  onBack: () => void;
};

export default function Trading({ onBack }: Props) {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages((prev) => [...prev, message]);
    setMessage("");
  };

  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <button
        onClick={onBack}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        ← Dashboard
      </button>

      <h1>📈 Trading</h1>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "20px",
          minHeight: "600px",
          background: "#181818",
          marginTop: "20px",
          overflowY: "auto",
        }}
      >
        {messages.length === 0 ? (
          <p style={{ color: "#888" }}>
            Hier erscheint später der komplette Verlauf zwischen dir und dem
            Günther-Motor.
          </p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  background: "#2d7ff9",
                  color: "white",
                  padding: "12px 16px",
                  borderRadius: "16px",
                  maxWidth: "80%",
                  wordBreak: "break-word",
                }}
              >
                {msg}
              </div>
            </div>
          ))
        )}
      </div>

      <div
        style={{
          position: "sticky",
          bottom: "20px",
          marginTop: "20px",
          background: "#181818",
          border: "1px solid #333",
          borderRadius: "14px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "none",
            background: "#2d2d2d",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          +
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Datum oder Nachricht eingeben..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#2d2d2d",
            color: "white",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "none",
            background: "#2d7ff9",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ↑
        </button>
      </div>
    </main>
  );
}