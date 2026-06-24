"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("ログインしました");
      window.location.href = "/board";
    } catch (error) {
      console.error(error);
      alert("ログインに失敗しました");
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#D9E8D7", color: "#1F2937" }}>
      <div style={headerStyle}>サイト名</div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}>
        <div style={{ width: "320px" }}>
          <h1 style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px" }}>
            ログイン
          </h1>

          <label>メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handleLogin} style={buttonStyle}>
            ログインする
          </button>

          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <p>パスワードをお忘れですか？</p>
            <p>
              <a href="/signup" style={{ color: "#2563EB" }}>
                アカウント作成はこちら
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const headerStyle = {
  height: "100px",
  backgroundColor: "#1F9A4A",
  display: "flex",
  alignItems: "center",
  paddingLeft: "50px",
  color: "white",
  fontSize: "40px",
};

const inputStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#F5F5F5",
  border: "2px solid #374151",
  marginTop: "10px",
  marginBottom: "30px",
  padding: "0 10px",
  fontSize: "16px",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#1F9A4A",
  color: "white",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};