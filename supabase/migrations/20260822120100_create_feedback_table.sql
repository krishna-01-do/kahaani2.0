/*
# Create feedback table (single-tenant, no auth)

1. New Tables
- `feedback`
  - `id` (uuid, primary key)
  - `name` (text, optional — user can choose to leave their name)
  - `message` (text, required — the feedback content)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `feedback`.
- Allow anon + authenticated to INSERT only (public can submit feedback, nobody can read/update/delete via the API).
- SELECT, UPDATE, DELETE are denied for anon and authenticated — feedback is only readable via the Supabase dashboard.

3. Notes
- This is a no-auth app, so the anon-key client needs INSERT permission.
- No SELECT policy is added intentionally — feedback entries are private to the site owner (read via dashboard/service role only).
*/

CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_feedback" ON feedback;
CREATE POLICY "anon_insert_feedback" ON feedback FOR INSERT
TO anon, authenticated WITH CHECK (true);
