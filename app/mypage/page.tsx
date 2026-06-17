export default function MyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#D9E8D7",
        color: "#1F2937",
      }}
    >
      {/* ヘッダー */}
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>サイト名</h1>

        <input
          type="text"
          placeholder="検索"
          style={searchStyle}
        />
      </header>

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 100px)",
        }}
      >
        {/* 左メニュー */}
        <aside style={leftStyle}>
          <a href="/board" style={menuButton}>掲示板</a>
          <a href="/events" style={menuButton}>イベント</a>
          <a href="/mypage" style={menuButton}>マイページ</a>
          <a href="/settings" style={menuButton}>設定</a>
        </aside>

        {/* メイン */}
        <main
          style={{
            flex: 1,
            padding: "40px",
            overflowY: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "30px",
            }}
          >
            マイページ
          </h2>

          {/* プロフィール */}
          <div style={profileCard}>
            <div style={icon}></div>

            <div>
              <h3>山田 太郎</h3>
              <p>sample@example.com</p>
              <p>１年</p>
            </div>

            <a href="/mypage/edit" style={editButton}>
              編集
            </a>
          </div>

          {/* 自己紹介 */}
          <div style={card}>
            <h3>自己紹介</h3>
            <p>
              イベント運営やゲームが好きです。
              学校内で気軽に交流できる場を作りたいと思っています。
            </p>
          </div>

          {/* 自分の投稿 */}
          <div style={card}>
            <h3>自分の投稿</h3>

            <div style={post}>
              オープンキャンパスのボランティア募集中です！
            </div>

            <div style={post}>
              eスポーツ大会の参加者を募集しています！
            </div>

            <div style={post}>
              文化祭の企画案を募集中です！
            </div>
          </div>
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

const profileCard = {
  backgroundColor: "white",
  padding: "30px",
  display: "flex",
  alignItems: "center",
  gap: "30px",
  marginBottom: "20px",
};

const icon = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "#C8D8C7",
};

const editButton = {
  marginLeft: "auto",
  backgroundColor: "#1F9A4A",
  color: "white",
  padding: "12px 24px",
  textDecoration: "none",
};

const card = {
  backgroundColor: "white",
  padding: "25px",
  marginBottom: "20px",
};

const post = {
  padding: "15px",
  backgroundColor: "#F5F5F5",
  marginBottom: "10px",
};

const messageBox = {
  backgroundColor: "white",
  height: "80px",
  marginBottom: "12px",
};