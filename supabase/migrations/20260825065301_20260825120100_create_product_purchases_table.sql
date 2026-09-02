/*
# Create product_purchases table for digital product sales (single-tenant, no auth)

1. New Tables
- `product_purchases`
  - `id` (uuid, primary key)
  - `txnid` (text, unique — PayU transaction id)
  - `product_id` (text — slug identifying which product was bought)
  - `amount` (numeric — price paid)
  - `status` (text — 'initiated', 'success', 'failed')
  - `access_key` (uuid — random key generated on success)
  - `email` (text — buyer's email, where the PDF is sent)
  - `firstname` (text — optional buyer name)
  - `email_sent` (boolean — whether the delivery email was sent)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

2. Security
- Enable RLS on `product_purchases`.
- INSERT allowed for anon (to create a new purchase initiation).
- SELECT/UPDATE/DELETE denied for anon/authenticated — only via service role.

3. Notes
- No-auth app. The anon-key client creates the initial purchase row via the initiate edge function.
- The callback edge function verifies the PayU response and, on success, generates an access_key.
- A delivery edge function sends the PDF to the buyer's email using the access_key.
*/

CREATE TABLE IF NOT EXISTS product_purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  txnid text UNIQUE NOT NULL,
  product_id text NOT NULL,
  amount numeric(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'initiated',
  access_key uuid,
  email text,
  firstname text,
  email_sent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE product_purchases ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_product_purchase" ON product_purchases;
CREATE POLICY "anon_insert_product_purchase" ON product_purchases FOR INSERT
TO anon, authenticated WITH CHECK (true);