/*
# Create product_purchases table for digital product sales (single-tenant, no auth)

1. New Tables
- `product_purchases`
  - `id` (uuid, primary key)
  - `txnid` (text, unique — PayU transaction id)
  - `product_id` (text — slug identifying which product was bought, e.g. 'how-to-make-fall-7-days')
  - `amount` (numeric — price paid)
  - `status` (text — 'initiated', 'success', 'failed')
  - `access_key` (uuid — random key generated on success, used to verify and trigger email delivery)
  - `email` (text — buyer's email, where the PDF is sent)
  - `firstname` (text — optional buyer name)
  - `email_sent` (boolean — whether the delivery email was sent)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

2. Security
- Enable RLS on `product_purchases`.
- INSERT allowed for anon (to create a new payment initiation).
- SELECT denied for anon/authenticated — records only readable via service role.
- UPDATE denied for anon/authenticated — status updates happen only via edge functions using service role key.
- DELETE denied for anon/authenticated.

3. Notes
- This is a no-auth app. The anon-key client creates the initial purchase row via the initiate edge function.
- The callback edge function verifies the PayU response and, on success, generates an access_key, marks email_sent=false.
- A separate delivery edge function is called by the frontend after redirect to trigger email sending (the frontend passes the access_key).
- The PDF is stored in a Supabase Storage private bucket and attached to the email.
*/
