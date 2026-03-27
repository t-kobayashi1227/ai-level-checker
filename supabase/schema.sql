-- ================================================================
-- AIレベルチェッカー Supabase スキーマ
-- ================================================================

-- 拡張機能
create extension if not exists "uuid-ossp";

-- ────────────────────────────────────────────────────────────────
-- sessions テーブル
-- ────────────────────────────────────────────────────────────────
create table if not exists sessions (
  id              uuid primary key default uuid_generate_v4(),
  question_set    jsonb        not null,   -- 12問（correctIndex含む、DB保管用）
  industries_used text[]       not null default '{}',
  group_id        text,                    -- 同時受験グループID（任意）
  created_at      timestamptz  not null default now(),
  expires_at      timestamptz  not null
);

-- 有効期限切れセッションのインデックス
create index if not exists sessions_expires_at_idx on sessions (expires_at);
create index if not exists sessions_group_id_idx   on sessions (group_id) where group_id is not null;

-- RLS（Row Level Security）
alter table sessions enable row level security;

-- サービスロールキーのみ読み書き可能（フロントから直接アクセス不可）
create policy "service_role_only" on sessions
  using (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────────
-- results テーブル
-- ────────────────────────────────────────────────────────────────
create table if not exists results (
  id          uuid primary key default uuid_generate_v4(),
  session_id  uuid         references sessions(id) on delete cascade,
  answers     jsonb        not null,   -- number[] 長さ12
  scores      jsonb        not null,   -- ScoreResult型
  level       text         not null,   -- Level型文字列
  commentary  text         not null,
  created_at  timestamptz  not null default now()
);

create index if not exists results_session_id_idx on results (session_id);
create index if not exists results_created_at_idx on results (created_at desc);

alter table results enable row level security;

create policy "service_role_only" on results
  using (auth.role() = 'service_role');

-- ────────────────────────────────────────────────────────────────
-- 期限切れセッション自動削除（pg_cron 利用可能な場合）
-- ────────────────────────────────────────────────────────────────
-- select cron.schedule(
--   'cleanup-expired-sessions',
--   '0 3 * * *',  -- 毎日午前3時
--   $$delete from sessions where expires_at < now()$$
-- );
