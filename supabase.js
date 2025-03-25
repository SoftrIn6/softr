import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oxkmrajgirwxgrougrgu.supabase.co";  // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94a21yYWpnaXJ3eGdyb3Vncmd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODI3OTEsImV4cCI6MjA1ODQ1ODc5MX0.gdkFZuQUhjC6syfLrZepkQATeRvE0KkqO6Nhke_lYsU";          // Replace with your actual anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
