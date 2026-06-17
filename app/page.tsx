export default function Home() {
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

      {/* ログインフォーム */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
        }}
      >
        <div style={{ width: "320px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginBottom: "40px",
            }}
          >
            ログイン
          </h1>

          <label>メールアドレス</label>
          <input
            type="email"
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#F5F5F5",
              border: "2px solid #374151",
              marginTop: "10px",
              marginBottom: "30px",
              padding: "0 10px",
            }}
          />

          <label>パスワード</label>
          <input
            type="password"
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#F5F5F5",
              border: "2px solid #374151",
              marginTop: "10px",
              marginBottom: "30px",
              padding: "0 10px",
            }}
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
            }}
          >
            ログインする
          </button>

          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <p>パスワードをお忘れですか？</p>

            <p
              style={{
                color: "#2563EB",
                cursor: "pointer",
              }}
            >
              アカウント作成はこちら
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}