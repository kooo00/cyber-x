"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        department,
        grade,
        email,
        createdAt: new Date(),
      });

      alert("アカウントを作成しました");

      await signOut(auth);

      router.replace("/");
    } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      alert("このメールアドレスはすでに登録されています。ログインしてください。");
    } else if (error.code === "auth/weak-password") {
      alert("パスワードは6文字以上にしてください。");
    } else if (error.code === "auth/invalid-email") {
      alert("メールアドレスの形式が正しくありません。");
    } else {
      alert("登録に失敗しました。");
    }
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#D9E8D7", color: "#1F2937" }}>
      <div style={headerStyle}>サイト名</div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <div style={{ width: "400px" }}>
          <h1 style={{ textAlign: "center", fontSize: "36px", marginBottom: "30px" }}>
            アカウント作成
          </h1>

          <label>名前</label>
          <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />

          <label>学科</label>
          <input value={department} onChange={(e) => setDepartment(e.target.value)} style={inputStyle} />

          <label>学年</label>
          <input value={grade} onChange={(e) => setGrade(e.target.value)} style={inputStyle} />

          <label>メールアドレス</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />

          <label>パスワード</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

          <button onClick={handleSignup} style={buttonStyle}>
            登録する
          </button>

          <p style={{ textAlign: "center", marginTop: "25px" }}>
            <a href="/" style={{ color: "#2563EB" }}>ログイン画面へ戻る</a>
          </p>
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