# AIレベルチェッカー

12問の選択式テストでAIリテラシー・活用レベルを数値と講評で診断するWebサービス。

## 技術スタック

| 層 | 技術 |
|---|---|
| フレームワーク | Next.js 15 (App Router) |
| スタイリング | Tailwind CSS |
| チャート | Recharts |
| AI問題生成 | Anthropic Claude API (`claude-sonnet-4-6`) |
| データベース | Supabase (PostgreSQL) |
| OGP画像 | @vercel/og (Edge Runtime) |
| デプロイ | Vercel |

## セットアップ

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local.example` を `.env.local` にコピーして値を設定する。

```bash
cp .env.local.example .env.local
```

| 変数 | 説明 |
|---|---|
| `ANTHROPIC_API_KEY` | Anthropic Console から取得 |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase プロジェクト URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key（サーバーサイド専用） |
| `NEXT_PUBLIC_APP_URL` | 本番URL（OGP画像生成に使用） |

### 3. Supabase のセットアップ

Supabase ダッシュボードの SQL Editor で以下を実行：

```bash
cat supabase/schema.sql
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 にアクセス。

## ディレクトリ構成

```
ai-level-checker/
├── app/
│   ├── page.tsx                  # トップページ
│   ├── quiz/page.tsx             # 診断UI（一問一答）
│   ├── result/[resultId]/
│   │   └── page.tsx              # 結果・講評画面
│   └── api/
│       ├── generate/route.ts     # 問題生成API
│       ├── score/route.ts        # スコア計算・保存API
│       └── og/route.tsx          # OGP動的画像生成
│
├── components/
│   ├── QuizCard.tsx              # 設問カード
│   ├── ProgressBar.tsx           # 進捗バー
│   ├── ResultRadar.tsx           # レーダーチャート
│   └── ShareButtons.tsx          # SNSシェアボタン群
│
├── lib/
│   ├── claude.ts                 # AI問題生成ロジック
│   ├── scoring.ts                # スコア計算
│   ├── templates.ts              # 問題テンプレートバンク（32問）
│   ├── commentary.ts             # 講評文生成
│   ├── supabase.ts               # DB操作
│   └── utils.ts                  # cn() ユーティリティ
│
├── types/index.ts                # 全型定義
└── supabase/schema.sql           # DBスキーマ
```

## 主要設計ポイント

### 問題生成（繰り返し受験対応）

- **テンプレート駆動型AI生成**：32問のテンプレートから毎回ランダムに選択し、業種・職種・タスクをAIが差し替えることで事実上無限のバリエーションを生成。
- **選択肢シャッフル**：毎回A〜Dの順番をランダム化し、答えの暗記を無効化。
- **グループ機能**：`groupId` を指定すると同一グループ内で使用済み業種を除外し、同時受験でも問題が被らない。
- **フォールバック**：AI生成失敗時は静的な予備問題24問から自動補完。

### スコアリング

```
総合スコア = 知識×0.25 + 実践×0.30 + 倫理×0.25 + 将来×0.20
```

### 不正防止

- `correctIndex` はクライアントに返さない（API レスポンスから除外）
- スコア計算はサーバーサイドのみで実施
- セッションは60分で失効

## Vercel へのデプロイ

```bash
vercel deploy
```

環境変数は Vercel ダッシュボードで設定する。

## 今後の拡張（Phase 2/3）

- [ ] CTT分析（Cronbach's α）による問題精錬
- [ ] ユーザーデータに基づくカットオフスコア調整
- [ ] LLMによる動的講評生成
- [ ] 時系列スコア推移トラッキング
- [ ] IRT/CAT（適応型テスト）導入
