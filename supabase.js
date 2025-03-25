import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oxkmrajgirwxgrougrgu.supabase.co';  // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94a21yYWpnaXJ3eGdyb3Vncmd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODI3OTEsImV4cCI6MjA1ODQ1ODc5MX0.gdkFZuQUhjC6syfLrZepkQATeRvE0KkqO6Nhke_lYsU';  // Replace with your Anon Key

export const supabase = createClient(supabaseUrl, supabaseKey);
