import logo from "~/images/xseeds-roots-logo.png";
import bookClub from "~/images/xseeds-roots-boekenclub.jpg";
import group from "~/images/xseeds-roots-groep.jpg";
import venueTables from "~/images/xseeds-roots-kroast-tafels.jpg";
import venueBar from "~/images/xseeds-roots-kroast-bar.jpg";
import polaroids from "~/images/xseeds-roots-kroast.jpg";
import flyer from "~/images/xseeds-roots-flyer.jpg";
import amigos from "~/images/xseeds-roots-amigos.jpg";
import whatsapp from "~/images/xseeds-roots-whatsapp.jpg";

export default function XseedsRootsProject() {
  return (
    <section className="mb-12 grid scroll-mt-24 gap-8 rounded-[28px] border border-[#cec3b5] bg-[#faf5ed] p-6 md:mb-[70px] md:grid-cols-[1fr_.85fr] md:gap-12 md:p-12" id="xseeds-roots" aria-labelledby="xseeds-title">
          <div className="col-span-full flex flex-wrap items-center gap-4 [&_h2]:font-[Georgia,serif] [&_h2]:text-[clamp(2.3rem,4vw,4rem)] [&_h2]:leading-none [&_h2]:tracking-[-.055em] [&_h2]:text-[#283e34] [&_img]:h-[72px] [&_img]:w-[72px] [&_img]:rounded-xl">
            <img src={logo} alt="" width="1667" height="1667" loading="lazy" />
            <div><h2 id="xseeds-title">Xseeds-roots</h2><p className="mt-2 text-sm text-[#50665a]">Medeoprichter · Amersfoort</p></div>
          </div>
        <div className="col-span-full grid items-start gap-8 border-b border-[#cec3b5] pb-10 md:grid-cols-[1fr_.85fr] md:gap-12 [&_h3]:font-[Georgia,serif] [&_h3]:text-[clamp(1.6rem,3vw,2.5rem)] [&_h3]:leading-tight [&_h3]:text-[#283e34] [&_p]:mt-4 [&_p]:max-w-prose [&_figure]:max-w-[290px]">
          <div>
            <h3>Het kantoortje naast station Amersfoort</h3>
            <p>Toen ik Drew leerde kennen, liep zijn eerdere ondernemersplan anders dan verwacht. Hij vroeg me of we samen het kantoortje naast station Amersfoort konden huren. Dat hebben we gedaan.</p>
            <p>Ik weet nog dat ik hem vroeg: ‘Waar word jij ’s ochtends wakker voor?’ Hij zei: ‘Dat weet ik niet.’ Ik zei: ‘Misschien moet je daar eerst achter komen.’</p>
            <p>Voor mij had het kantoortje ook een persoonlijke betekenis. Na het overlijden van mijn moeder wilde ik een plek waar ik met vrienden kon samenkomen. Naast het station zaten we centraal en kon iedereen er makkelijk komen.</p>
            <p>Om de twee weken organiseerde ik er een boekenclub. Iedereen koos een eigen boek, bijvoorbeeld over communicatie, geschiedenis of persoonlijke ontwikkeling. Om de beurt presenteerden we wat ons was bijgebleven en wat we ervan vonden. Zo leerden we van elkaars boeken én van hoe ieder ernaar keek.</p>
            <p>Pas later kreeg Xseeds-roots daar vorm. In datzelfde kantoortje stelden Drew en ik onze missie, visie en doelstellingen op en werkten we het concept uit.</p>
          </div>
          <figure>
            <img className="h-auto w-full rounded-xl" src={bookClub} alt="Vrienden bespreken een boek tijdens de boekenclub in het kantoortje" width="1200" height="1600" loading="lazy" />
            <figcaption className="mt-2 text-sm text-[#50665a]">Een avond van onze boekenclub in het kantoortje.</figcaption>
          </figure>
        </div>
        <div>
          <p className="max-w-prose text-lg leading-relaxed">Hoe maak je het makkelijker om iemand aan te spreken die je nog nooit hebt ontmoet? Samen met Drew richtte ik Xseeds-roots op voor mensen die net in Amersfoort waren komen wonen, graag nieuwe mensen wilden ontmoeten of zichzelf sociaal wilden uitdagen.</p>
          <div className="[&_h3]:mt-6 [&_h3]:font-[Georgia,serif] [&_h3]:text-2xl [&_h3]:leading-tight [&_h3]:text-[#283e34] [&_p]:mt-2 [&_p]:max-w-prose [&_p]:leading-relaxed">
            <h3>Eerst de community opbouwen</h3>
            <p>We begonnen met een vragenlijst over wat mensen misten aan sociale evenementen in Amersfoort. Via Amigos nodigden we mensen uit voor <em>Into the Roots</em>, onze bijeenkomsten bij Kroast. Met een drankje en kaartspellen aan tafel praatten we verder over wat de stad nodig had om mensen dichter bij elkaar te brengen.</p>
            <p>Via een QR-code konden bezoekers aansluiten bij onze WhatsApp-groep <em>Xseeds-Roots united</em>. In die groep deelden we de flyer voor Into the Roots op 13 maart en konden we na een avond contact houden. We wilden eerst een groep leren kennen en ontdekken wat mensen aansprak. Dat gaf ons als ondernemers een basis om verder te groeien.</p>
            <h3>Een compliment aan iemand die je net kent</h3>
            <p>Bij Kroast begeleidde ik een spel met Scrum-pokerkaartjes. Deelnemers keken naar hun kaartje en bedachten aan welke medespeler het hen deed denken. Ze spraken die persoon aan en gaven een compliment dat zowel bij het kaartje als bij hun eerste positieve indruk van die persoon paste. Zo gaf het kaartje ze een concrete aanleiding om iemand aan te spreken die ze nog niet kenden.</p>
          </div>
          <p className="mt-6 font-[Georgia,serif] text-xl italic text-[#713f49]" lang="en">Every connection tells a story.</p>
        </div>
        <div className="grid min-w-0 content-start gap-6">
          <figure>
            <img className="h-auto w-full rounded-xl" src={group} alt="Deelnemers rond een tafel met kaartspellen bij Kroast" width="1600" height="1200" loading="lazy" />
            <figcaption className="mt-2 text-sm text-[#50665a]">Samen aan tafel bij Into the Roots.</figcaption>
          </figure>
          <figure>
            <div className="grid grid-cols-2 gap-3 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
              <img src={venueTables} alt="Tafels en planten in restaurant Kroast" width="2048" height="2048" loading="lazy" />
              <img src={venueBar} alt="De bar en zitplaatsen bij Kroast" width="2048" height="2048" loading="lazy" />
            </div>
            <figcaption className="mt-2 text-sm text-[#50665a]">Kroast, de plek waar we samenkwamen.</figcaption>
          </figure>
          <details className="border-t border-[#cec3b5] pt-3 open:[&_summary]:mb-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-[#283e34]">
            <summary>Bekijk de polaroids</summary>
            <img className="h-auto w-full rounded-xl" src={polaroids} alt="Polaroids van bezoekers tijdens een Xseeds-roots-avond bij Kroast" width="1439" height="2048" loading="lazy" />
          </details>
        </div>
        <details className="col-span-full border-t border-[#cec3b5] pt-3 open:[&_summary]:mb-4 [&_summary]:cursor-pointer [&_summary]:font-semibold [&_summary]:text-[#283e34]">
          <summary>Bekijk de flyer, Amigos-uitnodiging en WhatsApp-QR-code</summary>
          <div className="grid max-w-[840px] gap-5 sm:grid-cols-3 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
            <figure>
              <img src={flyer} alt="Into the Roots-flyer voor donderdag 13 maart, 20.00–22.00 uur bij Kroast in Amersfoort" width="1080" height="1350" loading="lazy" />
              <figcaption className="mt-2 text-sm text-[#50665a]">De flyer die we in onze WhatsApp-groep deelden voor Into the Roots op 13 maart.</figcaption>
            </figure>
            <figure>
              <img src={amigos} alt="De uitnodiging voor Into the Roots op Amigos" width="945" height="2048" loading="lazy" />
              <figcaption className="mt-2 text-sm text-[#50665a]">Onze oorspronkelijke uitnodiging op Amigos.</figcaption>
            </figure>
            <figure>
              <img src={whatsapp} alt="Uitnodiging met QR-code voor de WhatsApp-groep Xseeds-Roots united" width="899" height="1599" loading="lazy" />
              <figcaption className="mt-2 text-sm text-[#50665a]">De QR-code die we deelden met bezoekers.</figcaption>
            </figure>
          </div>
        </details>
      </section>
  );
}
