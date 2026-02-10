// Supabase Configuration
const SUPABASE_URL = 'https://cxlhljcwezaztvedqbda.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4bGhsamN3ZXphenR2ZWRxYmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTI1MjEsImV4cCI6MjA4NjEyODUyMX0.uAUYag0GfwquEfzW0HyLahsajqr7aC4zfwg3Sx7TeAg';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);