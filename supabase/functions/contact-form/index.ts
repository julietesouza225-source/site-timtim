// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const { nome, email, assunto, mensagem } = await req.json();

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save message to database
    const { error } = await supabase.from("contact_messages").insert({
      nome,
      email,
      assunto,
      mensagem,
      created_at: new Date().toISOString(),
    });

    if (error) {
      throw new Error("Error saving message: " + error.message);
    }

    // Call the email function
    await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ nome, email, assunto, mensagem }),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada com sucesso! A Tia vai responder em breve!",
      },
      { headers: corsHeaders, status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { headers: corsHeaders, status: 500 }
    );
  }
}
