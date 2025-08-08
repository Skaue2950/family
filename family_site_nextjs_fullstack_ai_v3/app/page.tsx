
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });
    alert("Tak! Du er på listen.");
    setEmail("");
  }

  return (
    <main>
      {/* Hero */}
      <section className="section">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="badge">AI-drevet</span>
            <h1 className="h1">Din AI‑baserede familieassistent</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              AI der planlægger måltider, styrer kalendere, husker fødselsdage og automatiserer hverdagens pligter — samlet ét sted.
            </p>
            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Skriv din e-mail"
                className="w-full rounded-md border border-gray-300 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2 outline-none"
              />
              <button className="btn btn-primary" type="submit">Få tidlig adgang</button>
            </form>
            <div className="text-sm text-gray-500">Ingen spam. Afmeld når som helst.</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/5 flex items-center justify-center text-gray-500">
              Produktforhåndsvisning
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="h2 text-center mb-12">Hvad du kan automatisere</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Smartere kalendere", "Synkronisér skole, sport, ferier og påmindelser på tværs af hele familien."],
              ["Madplaner på autopilot", "Få ugentlige menuer og indkøbslister baseret på jeres præferencer."],
              ["Fødselsdage & gaver", "Glem aldrig en mærkedag igen — med forslag og påmindelser."],
              ["Huslige automations", "Genbestil forbrugsgoder, roter opgaver og hold styr på gentagne to-dos."]
            ].map(([t, d]) => (
              <div className="card" key={t as string}>
                <div className="font-semibold">{t}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* How it works (AI) */}
<section id="how" className="section">
  <div className="container mx-auto px-4">
    <h2 className="h2 text-center mb-12">Sådan virker AI'en</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        ["Personlige rutiner", "AI lærer jeres mønstre og foreslår rutiner (fx "fodbold tirsdag", "svømning lørdag") og lægger det direkte i kalenderen."],
        ["Smart planlægning", "Foreslår ugentlige madplaner baseret på præferencer, allergener og kalenderen – og genererer automatisk indkøbsliste."],
        ["Proaktiv assistent", "Registrerer deadlines, fødselsdage og udløb af forbrugsgoder – og foreslår næste bedste handling, før du når at tænke på det."]
      ].map(([t, d]) => (
        <div className="card" key={t as string}>
          <div className="font-semibold">{t}</div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{d}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Integrations */}
<section id="integrations" className="section bg-gray-50 dark:bg-white/5">
  <div className="container mx-auto px-4">
    <h2 className="h2 text-center mb-12">Integrerer med</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {["Google Calendar","Apple Calendar","Outlook","iCloud","Coop/Mad.coop","Nemlig","Todoist","Slack/Teams"].map((name) => (
        <div key={name} className="card">{name}</div>
      ))}
    </div>
    <p className="text-center text-sm text-gray-500 mt-4">* Eksempler på planlagte integrationer.</p>
  </div>
</section>

{/* Privacy & Security */}
<section id="privacy" className="section">
  <div className="container mx-auto px-4">
    <div className="card">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="h2">Sikkerhed & privatliv først</div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Dine data er dine. Kryptering i transit og i hvile, role-based access og mulighed for at slette alt med ét klik.
          </p>
        </div>
        <a href="/privacy" className="btn btn-secondary">Læs privatlivspolitik</a>
      </div>
    </div>
  </div>
</section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container mx-auto px-4">
          <h2 className="h2 text-center mb-12">Enkel prissætning</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Gratis", "0", ["2 familiemedlemmer", "Basale kalendere", "E-mail påmindelser"]],
              ["Pro", "49", ["Op til 6 medlemmer", "Madplaner + indkøbslister", "Delte rutiner"]],
              ["Family+", "99", ["Ubegrænset medlemmer", "Avancerede automationer", "Prioriteret support"]]
            ].map(([name, price, features]) => (
              <div key={name as string} className="card flex flex-col">
                <div className="text-xl font-semibold">{name}</div>
                <div className="mt-4 text-4xl font-bold">{price} <span className="text-base font-medium text-gray-500">kr/md</span></div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {(features as string[]).map((f) => <li key={f}>• {f}</li>)}
                </ul>
                <button className="btn btn-primary mt-6">Vælg {name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="h2 text-center mb-12">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Er der en gratis plan?", "Ja, start gratis og opgrader når du har brug for mere."],
              ["Kan jeg opsige når som helst?", "Ja. Dine data forbliver dine."],
              ["Hvad med privatliv?", "Vi følger best practice og sælger aldrig dine data."],
              ["Kommer der mobilapps?", "Ja, de er på roadmap. Tilmeld dig for at blive opdateret."]
            ].map(([q, a]) => (
              <div className="card" key={q as string}>
                <div className="font-semibold">{q}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h2">Klar til at skabe ro i hverdagen?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Tilmeld ventelisten og vær den første til at prøve FAMILY.</p>
          <a href="#" className="btn btn-primary mt-6">Få tidlig adgang</a>
        </div>
      </section>
    </main>
  );
}
