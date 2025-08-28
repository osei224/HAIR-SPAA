# HAIR & SPA Lumière - LINE予約システム

美容サロン「HAIR & SPA Lumière」のLINE予約からGoogleカレンダー自動入力システムです。

## 機能概要

### 🔄 予約フロー
1. **LINE公式アカウント** - お客様がLINEで予約開始
2. **プラン選択** - ライト/スタンダード/プレミアムから選択
3. **日時選択** - LINEの日時ピッカーで希望日時を選択
4. **予約確定** - 自動でGoogleカレンダーにイベント作成
5. **確認通知** - LINEで予約確定メッセージを送信

### 📱 LINE Bot機能
- カルーセルテンプレートでプラン表示
- 日時ピッカーで直感的な日時選択
- 予約確定時の自動返信
- Webhook対応でリアルタイム処理

### 📅 Googleカレンダー連携
- 予約確定時に自動でイベント作成
- お客様情報を含む詳細な予約内容
- タイムゾーン対応（Asia/Tokyo）
- 参加者として顧客メール追加

### 🛠️ 管理機能
- 予約一覧の表示・管理
- ステータス変更（保留中/確定/完了/キャンセル）
- API設定の管理画面
- リアルタイム予約状況確認

## 技術構成

### フロントエンド
- **React + TypeScript** - メインアプリケーション
- **Tailwind CSS** - スタイリング
- **Vite** - ビルドツール

### バックエンド
- **Supabase Edge Functions** - サーバーレス関数
- **PostgreSQL** - 予約データ管理
- **Row Level Security** - データセキュリティ

### 外部API
- **LINE Messaging API** - チャットボット機能
- **Google Calendar API** - カレンダー連携
- **Google OAuth 2.0** - 認証

## セットアップ手順

### 1. LINE Bot設定

1. [LINE Developers Console](https://developers.line.biz/)でチャンネル作成
2. 以下の情報を取得:
   - Channel Access Token
   - Channel Secret
3. Webhook URLを設定: `https://your-project.supabase.co/functions/v1/line-webhook`

### 2. Google Calendar API設定

1. [Google Cloud Console](https://console.cloud.google.com/)でプロジェクト作成
2. Calendar APIを有効化
3. OAuth 2.0認証情報を作成
4. アクセストークンを取得

### 3. 環境変数設定

Supabase Edge Functionsの環境変数に以下を設定:

```bash
LINE_CHANNEL_ACCESS_TOKEN=your_line_access_token
LINE_CHANNEL_SECRET=your_line_channel_secret
GOOGLE_ACCESS_TOKEN=your_google_access_token
GOOGLE_CALENDAR_ID=your_calendar_id_or_primary
```

### 4. データベース設定

```sql
-- 予約テーブル作成
CREATE TABLE reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  line_user_id text NOT NULL,
  customer_name text,
  customer_email text,
  customer_phone text,
  plan_type text NOT NULL,
  reservation_date timestamptz NOT NULL,
  duration_minutes integer NOT NULL DEFAULT 90,
  price integer NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  google_calendar_event_id text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## 使用方法

### お客様側
1. LINE公式アカウントを友だち追加
2. 「予約」とメッセージ送信
3. 表示されるプランから選択
4. 希望日時を選択
5. 予約確定

### サロン側
1. 管理パネルで予約一覧を確認
2. 必要に応じてステータス変更
3. Googleカレンダーで予約スケジュール管理

## API仕様

### LINE Webhook
- **エンドポイント**: `/functions/v1/line-webhook`
- **メソッド**: POST
- **認証**: LINE署名検証

### 予約管理API
- **GET** `/api/reservations` - 予約一覧取得
- **PATCH** `/api/reservations/:id` - 予約ステータス更新

## セキュリティ

- Row Level Security (RLS) によるデータ保護
- LINE Webhook署名検証
- OAuth 2.0による安全な認証
- 環境変数による機密情報管理

## 今後の拡張予定

- [ ] SMS通知機能
- [ ] 予約リマインダー
- [ ] 顧客管理機能
- [ ] 売上分析ダッシュボード
- [ ] 複数スタッフ対応
- [ ] 予約キャンセル機能

## サポート

技術的な質問やバグ報告は、GitHubのIssuesまでお願いします。
