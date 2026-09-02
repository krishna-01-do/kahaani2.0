-- Storage policies for product-files bucket
-- Allow authenticated users (dashboard admin) to upload and manage files
CREATE POLICY "product_files_upload"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'product-files');

CREATE POLICY "product_files_read"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'product-files');

CREATE POLICY "product_files_update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'product-files')
  WITH CHECK (bucket_id = 'product-files');

CREATE POLICY "product_files_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'product-files');

-- Also allow service role to read (edge function uses service role key which bypasses RLS,
-- but adding explicit policy for clarity)
CREATE POLICY "product_files_service_read"
  ON storage.objects FOR SELECT
  TO service_role
  USING (bucket_id = 'product-files');