import {createClient} from '@supabase/supabase-js'

export const supabase = createClient(
    "https://cttzypucrabygasrdwlo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dHp5cHVjcmFieWdhc3Jkd2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU2MTc3ODEsImV4cCI6MTk5MTE5Mzc4MX0.jR62CNaGtr4uDzBLLgvnAKkedVBy_Jd2P_Xwr0o0WZA"
)