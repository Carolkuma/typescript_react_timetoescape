import React from "react";
import { ArticleHeadline } from "../components/layout/ArticleHeadline";
import Layout from "../components/layout/Layout";

const GAME_RULES = {
  title: `Pravidlá escape room`,
  rules: [
    "Našu Escape room môže absolvovať 2 až 4 hráčov.",
    "Časový limit na splnenie úlohy je 70 minút. Odporúčame Vám prísť 10 až 15 minút pred začatím Vašej hry. V prípade meškania si personál vyhradzuje právo skrátiť hru o dĺžku meškania, aby nasledujúce skupiny neboli poškodené.",
    "​Priestory nie sú vhodné pre vozičkárov a ZŤP. Izby nie sú sprístupnené osobám na vozíku, barlách a podobne. Prosíme, myslite na to pred kúpou vstupeniek.",
    "Vstup osobám mladším 12 rokov je možný len v sprievode dospelej osoby, ktorá preberá za takúto neplnoletú osobu plnú zodpovednosť.",
    "Deti do 6 rokov (vrátane) majú hru zdarma.",
    "V našich priestoroch treba dbať na bezpečnosť seba a svojho tímu. V prípade, že sa nás chystáte navštíviť s deťmi, ste za nich zodpovední.",
    "Escape room vyžaduje logické myslenie a tímovú spoluprácu. Vy a Váš tím ste sa ocitli v hre, ktorá sa odohráva v realite, pričom hlavnými hrdinami tejto hry ste práve vy. Cieľom hry nie je len úspešne vyriešiť všetky úlohy, ale zažiť skutočné dobrodružstvo, zabaviť sa a odniesť si neopakovateľný zážitok.",
    "Celú miestnosť je potrebné dôkladne prehľadať a odhaliť tajné skrýše.",
    "V našich hrách je prísne zakázané používať telefóny, tablety a iné technické zariadenia. Rovnako je zakázané fotografovať, natáčať video a robiť si audio záznamy počas hry. Ich použite znamená ukončenie prebiehajúcej hry obsluhujúcim personálom.",
    "Počas hry je zakázané používať hrubú fyzickú silu, ktorá by mohla poškodiť majetok a technické zariadenia a v takom prípade sú hráči povinní škodu uhradiť.",
    "Hry sa nemôžete zúčastniť pod vplyvom alkoholu.",
    "Vo všetkých miestnostiach je prísny zákaz fajčiť a používať otvorený oheň.",
    "Únikové hry nie sú vhodné pre osoby trpiace klaustrofóbiou.",
    "Naše priestory sú vybavené bezpečnostným kamerovým systémom. Počas celej hry ste monitorovaní.",
    "Na komunikáciou s personálom počas hry slúži monitor, na ktorom sa objaví nápoveda v prípade potreby. Kamery disponujú mikrofónom.",
    "Vybavenie je majetkom TIME TO ESCAPE. V prípade odcudzenia bude podané trestné oznámenie a kamerový záznam odovzdaný orgánom činným v trestnom konaní na území SR.",
    "V prípade porušenia pravidiel hry a nevhodného správania si prevádzkovateľ vyhradzuje právo hru predčasne ukončiť bez nároku na vrátenie vstupného.",
  ],
};


const getItemClass = (index: number, length: number) =>
  `${"ml-8 pl-2"}  ${index !== length - 1 ? "mb-2" : ""}`;

export default () => (
  <Layout changeBgOpacity={true}>
    <section>
      <article>
        <ArticleHeadline>
          <h1 className="mb-10 text-4xl alt-font">{GAME_RULES.title}</h1>
        </ArticleHeadline>
        <div className="container px-3 mx-auto md:text-lg py-10">
          <ol type="1" className="ol-rules mb-10">
            {GAME_RULES.rules.map((v, i, a) => (
              <li className={getItemClass(i, a.length)} key={i}>
                {v}
              </li>
            ))}
          </ol>
          <p>Ak máte akékoľvek ďalšie otázky, neváhajte nás kontaktovať.</p>
        </div>
      </article>
    </section>
  </Layout>
);