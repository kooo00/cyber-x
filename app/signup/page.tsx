export default function SignupPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#D9E8D7",
        color: "#1F2937",
      }}
    >
      {/* ヘッダー */}
      <div
        style={{
          height: "100px",
          backgroundColor: "#1F9A4A",
          display: "flex",
          alignItems: "center",
          paddingLeft: "50px",
          color: "white",
          fontSize: "40px",
        }}
      >
        サイト名
      </div>

      {/* 登録フォーム */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div style={{ width: "400px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginBottom: "40px",
            }}
          >
            アカウント作成
          </h1>

          <label>名前</label>
          <input
            type="text"
            style={inputStyle}
          />

          <label>メールアドレス</label>
          <input
            type="email"
            style={inputStyle}
          />

          <label>パスワード</label>
          <input
            type="password"
            style={inputStyle}
          />

          <label>パスワード（確認）</label>
          <input
            type="password"
            style={inputStyle}
          />

          <button
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#1F9A4A",
              color: "white",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            登録する
          </button>

          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <a href="/" style={{ color: "#2563EB" }}>
              ログイン画面へ戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  height: "50px",
  backgroundColor: "#F5F5F5",
  border: "2px solid #374151",
  marginTop: "8px",
  marginBottom: "24px",
  padding: "0 10px",
  fontSize: "16px",
  boxSizing: "border-box" as const,
};