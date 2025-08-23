// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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

    // Map subjects
    const assuntoTexto: Record<string, string> = {
      fofoca: "🔥 Tenho uma fofoca!",
      sugestao: "💡 Sugestão de pauta",
      elogio: "❤️ Elogio",
      critica: "💭 Crítica construtiva",
      parcerias: "🤝 Parcerias",
      outros: "📝 Outros assuntos",
    };

    // Prepare email content
    const emailSubject = `📩 Nova mensagem do site - ${
      assuntoTexto[assunto] || assunto
    }`;

    const emailBody = `
Nova mensagem do site Tim Tim Costa Verde!

👤 Nome: ${nome}
📧 E-mail: ${email}
📋 Assunto: ${assuntoTexto[assunto] || assunto}

💬 Mensagem:
${mensagem}

---
📅 Enviado em: ${new Date().toLocaleString("pt-BR")}
🌐 Site: Tim Tim Costa Verde
    `.trim();

    // Aqui você deve integrar com um serviço real de email, ex: Resend
    console.log("Email to send:", {
      to: "tiadanoticia@gmail.com",
      subject: emailSubject,
      body: emailBody,
    });

    // Save backup to DB
    const { error: dbError } = await supabase.from("contact_messages").insert({
      nome,
      email,
      assunto,
      mensagem,
      enviado_email: true,
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada! A Tia vai responder logo!",
      },
      { headers: corsHeaders, status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Still try to save backup in DB
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { nome, email, assunto, mensagem } = await req.json();

      await supabase.from("contact_messages").insert({
        nome,
        email,
        assunto,
        mensagem,
        enviado_email: false,
        created_at: new Date().toISOString(),
      });
    } catch (dbError) {
      console.error("Database backup error:", dbError);
    }

    return NextResponse.json(
      {
        error:
          "Mensagem salva, mas houve problema no envio do e-mail. A Tia vai ver assim que possível!",
      },
      { headers: corsHeaders, status: 500 }
    );
  }
}
