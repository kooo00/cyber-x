"use client";

export default function BoardPage() {
  const posts = [
    {
      user: "山田太郎",
      content: "オープンキャンパスのボランティア募集しています！",
      time: "10分前",
    },
    {
      user: "佐藤花子",
      content: "来週のイベント参加者募集中です！",
      time: "30分前",
    },
    {
      user: "鈴木一郎",
      content: "文化祭実行委員の打ち合わせがあります。",
      time: "1時間前",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#D9E8D7",
        color: "#1F2937",
      }}
    >
      {/* ヘッダー */}
      <header
        style={{
          height: "100px",
          backgroundColor: "#1F9A4A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          color: "white",
        }}
      >
        <h1>サイト名</h1>

        <input
          type="text"
          placeholder="検索"
          style={{
            width: "300px",
            height: "40px",
            padding: "0 10px",
            border: "none",
          }}
        />
      </header>

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 100px)",
        }}
      >
        {/* 左メニュー */}
        <aside
          style={{
            width: "220px",
            backgroundColor: "#C8D8C7",
            padding: "20px",
          }}
        >
          <button style={menuButton}>掲示板</button>
          <button style={menuButton}>イベント</button>
          <button style={menuButton}>マイページ</button>
          <button style={menuButton}>設定</button>
        </aside>

        {/* 投稿一覧 */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          {/* 投稿作成 */}
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="今なにしてる？"
              style={{
                width: "100%",
                height: "50px",
                padding: "10px",
              }}
            />
          </div>

          {/* 投稿一覧 */}
          {posts.map((post, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "20px",
                marginBottom: "15px",
              }}
            >
              <h3>{post.user}</h3>
              <p>{post.content}</p>
              <small>{post.time}</small>
            </div>
          ))}
        </main>

        {/* 右サイド */}
        <aside
          style={{
            width: "250px",
            backgroundColor: "#C8D8C7",
            padding: "20px",
          }}
        >
          <h2>メッセージ</h2>

          <div
            style={{
              backgroundColor: "white",
              height: "80px",
              marginBottom: "10px",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "white",
              height: "80px",
              marginBottom: "10px",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "white",
              height: "80px",
            }}
          ></div>
        </aside>
      </div>
    </div>
  );
}

const menuButton = {
  width: "100%",
  height: "50px",
  marginBottom: "10px",
  border: "none",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  fontSize: "16px",
};