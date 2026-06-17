export default function EditMyPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#D9E8D7", color: "#1F2937" }}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>サイト名</h1>
        <input type="text" placeholder="検索" style={searchStyle} />
      </header>

      <div style={{ display: "flex", height: "calc(100vh - 100px)" }}>
        <aside style={leftStyle}>
          <a href="/board" style={menuButton}>掲示板</a>
          <a href="/events" style={menuButton}>イベント</a>
          <a href="/mypage" style={menuButton}>マイページ</a>
          <a href="/settings" style={menuButton}>設定</a>
        </aside>

        <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
            プロフィール編集
          </h2>

          <div style={formBox}>
            <label style={labelStyle}>名前</label>
            <input type="text" defaultValue="山田 太郎" style={inputStyle} />

            <label style={labelStyle}>メールアドレス</label>
            <input type="email" defaultValue="sample@example.com" style={inputStyle} />

            <label style={labelStyle}>学年</label>
            <input type="text" defaultValue="1年" style={inputStyle}
/>
            <label style={labelStyle}>自己紹介</label>
            <textarea
              defaultValue="イベント運営やゲームが好きです。学校内で気軽に交流できる場を作りたいと思っています。"
              style={textareaStyle}
            />

            <div style={{ display: "flex", gap: "16px", marginTop: "30px" }}>
              <button style={saveButton}>保存する</button>
              <a href="/mypage" style={cancelButton}>戻る</a>
            </div>
          </div>
        </main>

        <aside style={rightStyle}>
          <h2>メッセージ</h2>
          <div style={messageBox}></div>
          <div style={messageBox}></div>
          <div style={messageBox}></div>
        </aside>
      </div>
    </div>
  );
}

const headerStyle = {
  height: "100px",
  backgroundColor: "#1F9A4A",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
};

const searchStyle = {
  width: "300px",
  height: "40px",
  border: "none",
  padding: "0 12px",
};

const leftStyle = {
  width: "220px",
  backgroundColor: "#C8D8C7",
  padding: "20px",
  boxSizing: "border-box" as const,
};

const rightStyle = {
  width: "250px",
  backgroundColor: "#C8D8C7",
  padding: "20px",
  boxSizing: "border-box" as const,
};

const menuButton = {
  display: "block",
  width: "100%",
  height: "50px",
  lineHeight: "50px",
  textAlign: "center" as const,
  marginBottom: "10px",
  backgroundColor: "#FFFFFF",
  color: "#1F2937",
  textDecoration: "none",
};

const formBox = {
  backgroundColor: "white",
  maxWidth: "700px",
  padding: "30px",
};

const labelStyle = {
  display: "block",
  fontWeight: "bold",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  height: "45px",
  marginBottom: "22px",
  padding: "0 10px",
  border: "2px solid #374151",
  boxSizing: "border-box" as const,
};

const textareaStyle = {
  width: "100%",
  height: "140px",
  padding: "10px",
  border: "2px solid #374151",
  boxSizing: "border-box" as const,
};

const saveButton = {
  width: "160px",
  height: "45px",
  backgroundColor: "#1F9A4A",
  color: "white",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
};

const cancelButton = {
  width: "120px",
  height: "45px",
  lineHeight: "45px",
  textAlign: "center" as const,
  backgroundColor: "#C8D8C7",
  color: "#1F2937",
  textDecoration: "none",
};

const messageBox = {
  backgroundColor: "white",
  height: "80px",
  marginBottom: "12px",
};