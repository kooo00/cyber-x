export default function EventsPage() {
  const events = [
    { title: "オープンキャンパス", date: "2026/07/20", location: "本館3階", description: "学校説明会を開催します。" },
    { title: "文化祭", date: "2026/09/10", location: "体育館", description: "学生による展示や出店があります。" },
    { title: "eスポーツ大会", date: "2026/10/15", location: "PC実習室", description: "VALORANT大会を開催します。" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#D9E8D7", color: "#1F2937" }}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>サイト名</h1>
        <input type="text" placeholder="検索" style={searchStyle} />
      </header>

      <div style={{ display: "flex", height: "calc(100vh - 100px)" }}>
        {/* 左メニュー */}
        <aside style={leftStyle}>
          <a href="/board" style={menuButton}>掲示板</a>
          <a href="/events" style={menuButton}>イベント</a>
          <a href="/mypage" style={menuButton}>マイページ</a>
          <a href="/settings" style={menuButton}>設定</a>
        </aside>

        {/* 中央 */}
        <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
            <h2 style={{ fontSize: "32px", margin: 0 }}>イベント一覧</h2>

            <a href="/events/create" style={createButton}>
              イベント作成
            </a>
          </div>

          {events.map((event, index) => (
            <div key={index} style={eventCard}>
              <h3 style={{ fontSize: "24px" }}>{event.title}</h3>
              <p><strong>日時：</strong>{event.date}</p>
              <p><strong>場所：</strong>{event.location}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </main>

        {/* 右メッセージ */}
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
  padding: "0 12px",
  border: "none",
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

const createButton = {
  width: "180px",
  height: "45px",
  lineHeight: "45px",
  textAlign: "center" as const,
  backgroundColor: "#1F9A4A",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const eventCard = {
  backgroundColor: "white",
  padding: "24px",
  marginBottom: "20px",
  borderLeft: "8px solid #1F9A4A",
};

const messageBox = {
  backgroundColor: "white",
  height: "80px",
  marginBottom: "12px",
};