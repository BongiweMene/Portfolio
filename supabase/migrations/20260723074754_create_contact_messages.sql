/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `subject` (text, not null) — message subject
  - `message` (text, not null) — message body
  - `is_read` (boolean, default false) — tracking read status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT so visitors can submit the contact form without signing in.
- Allow anon + authenticated SELECT so the portfolio owner can view messages (single-tenant, intentionally shared).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contact_messages" ON contact_messages;
CREATE POLICY "anon_select_contact_messages" ON contact_messages FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contact_messages" ON contact_messages;
CREATE POLICY "anon_update_contact_messages" ON contact_messages FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_messages" ON contact_messages;
CREATE POLICY "anon_delete_contact_messages" ON contact_messages FOR DELETE
TO anon, authenticated USING (true);
