import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jvmxmeeoczghkdshjhig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bXhtZWVvY3pnaGtkc2hqaGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2MjI1NDMsImV4cCI6MjAzNzE5ODU0M30.GTGQmoiZBVNIFS9bUffOWrn21PwGFLmpUNLPVsUheDM";
  
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
