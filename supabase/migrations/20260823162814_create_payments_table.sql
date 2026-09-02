/*
# Create payments table for PayU scenario access (single-tenant, no auth)

1. New Tables
- `payments`
  - `id` (uuid, primary key)
  - `txnid` (text, unique — PayU transaction id)
  - `amount` (numeric, the amount paid)
  - `status` (text — 'initiated', 'success', 'failed')
  - `access_key` (uuid — random key stored in localStorage after successful payment, grants scenario access)
  - `productinfo` (text — description of what was purchased)
  - `firstname` (text — optional, from PayU form)
  - `email` (text — optional, from PayU form)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

2. Security
- Enable RLS on `payments`.
- INSERT allowed for anon (to create a new payment initiation).
- SELECT denied for anon/authenticated — payment records are only readable via the service role (dashboard).
- UPDATE denied for anon/authenticated — status updates happen only via the callback edge function using the service role key.
- DELETE denied for anon/authenticated.

3. Notes
- This is a no-auth app. The anon-key client creates the initial payment row.
- The edge functions (payu-initiate, payu-callback, payu-verify) use the service role key to read/update rows, bypassing RLS.
- The `access_key` is a random UUID generated server-side on successful payment and returned to the user via redirect URL; the frontend stores it in localStorage and sends it to the verify endpoint to check validity.
*/

CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  txnid text UNIQUE NOT NULL,
  amount numeric(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'initiated',
  access_key uuid,
  productinfo text,
  firstname text,
  email text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_payment" ON payments;
CREATE POLICY "anon_insert_payment" ON payments FOR INSERT
TO anon, authenticated WITH CHECK (true);
