import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://ixtninhgpcfqjvtkenjw.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dG5pbmhncGNmcWp2dGtlbmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY0NzMsImV4cCI6MjA1NzQzMjQ3M30.jU-ctajiyxn91dzvA4aMMtc9smb-44ujPDCx5vs8lUc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;