"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const withTimeout = <T,>(promise: Promise<T>, message: string): Promise<T> => {
    return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(message)), 10000)
      ),
    ]);
  };

  const handleSignup = async () => {
    console.log("登録ボタンが押されました");
    setIsLoading(true);

    try {
      console.log("Firebase Auth 登録開始");

      const userCredential = await withTimeout(
        createUserWithEmailAndPassword(auth, email, password),
        "Firebase Authentication の登録で時間がかかりすぎています"
      );

      console.log("Firebase Auth 登録成功");

      const user = userCredential.user;

      console.log("Firestore 保存開始");

      await withTimeout(
        setDoc(doc(db, "users", user.uid), {
          name,
          department,
          grade,
          email,
          createdAt: new Date(),
        }),
        "Firestore の保存で時間がかかりすぎています"
      );

      console.log("Firestore 保存成功");

      setPopupMessage("アカウントを作成しました");
      setIsSuccess(true);
      setShowPopup(true);
    } catch (error: any) {
      console.error("登録エラー:", error);

      setIsSuccess(false);

      if (error.code === "auth/email-already-in-use") {
        setPopupMessage(
          "このメールアドレスはすでに登録されています。ログインしてください。"
        );
      } else if (error.code === "auth/weak-password") {
        setPopupMessage("パスワードは6文字以上にしてください。");
      } else if (error.code === "auth/invalid-email") {
        setPopupMessage("メールアドレスの形式が正しくありません。");
      } else {
        setPopupMessage(error.message || "登録に失敗しました。");
      }

      setShowPopup(true);
    } finally {
      console.log("登録処理終了");
      setIsLoading(false);
    }
  };

  const closePopup = async () => {
    setShowPopup(false);

    if (isSuccess) {
      await signOut(auth);
      window.location.replace("/");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#D9E8D7",
        color: "#1F2937",
      }}
    >
      <div style={headerStyle}>Cyber-X</div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div style={{ width: "400px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginBottom: "30px",
            }}
          >
            アカウント作成
          </h1>

          <label>名前</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <label>学科</label>
          <input
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            style={inputStyle}
          />

          <label>学年</label>
          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            style={inputStyle}
          />

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

          <button
            type="button"
            onClick={handleSignup}
            style={{
              ...buttonStyle,
              opacity: isLoading ? 0.7 : 1,
            }}
            disabled={isLoading}
          >
            {isLoading ? "登録中..." : "登録する"}
          </button>

          <p style={{ textAlign: "center", marginTop: "25px" }}>
            <a href="/" style={{ color: "#2563EB" }}>
              ログイン画面へ戻る
            </a>
          </p>
        </div>
      </div>

      {showPopup && (
        <div style={popupOverlay}>
          <div style={popupBox}>
            <p style={popupText}>{popupMessage}</p>

            <button type="button" onClick={closePopup} style={popupButton}>
              OK
            </button>
          </div>
        </div>
      )}
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
  height: "48px",
  backgroundColor: "#F5F5F5",
  border: "2px solid #374151",
  marginTop: "8px",
  marginBottom: "20px",
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
  marginTop: "10px",
};

const popupOverlay = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const popupBox = {
  width: "360px",
  backgroundColor: "white",
  padding: "30px",
  textAlign: "center" as const,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
};

const popupText = {
  fontSize: "20px",
  marginBottom: "25px",
};

const popupButton = {
  width: "120px",
  height: "42px",
  backgroundColor: "#1F9A4A",
  color: "white",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
};