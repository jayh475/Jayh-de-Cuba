# Jayh-de-Cuba

Portfolio-project met React, TypeScript en Vite. De pagina’s en componenten van de Xseeds-roots-poc zitten in `src/`.

## Lokaal starten

Open de map met `package.json` en voer uit:

```sh
npm ci
npm run dev
```

Open de URL uit je terminal. Met `npm run build` maak je de productiebuild in `dist/`.

## Pagina's en URL's

`src/main.tsx` start React. `src/App.tsx` koppelt de pagina’s in `src/routes/` aan hun URL via React Router en Vite.

| Bestand | URL |
| --- | --- |
| `src/routes/_index.tsx` | `/` |
| `src/routes/hire.tsx` | `/hire` |
| `src/routes/my-profile.tsx` | `/my-profile` |
| `src/routes/dashboard-page.tsx` | `/dashboard-page` |

Voor een nieuwe pagina op `/contact` maak je `src/routes/contact.tsx` met een standaardexport. Voor een menulink gebruik je `<Link to="/contact">Contact</Link>`. Stel bij publicatie je host zo in dat die voor pagina-URL's `index.html` serveert.

De app gebruikt de bestaande Firebase-webconfiguratie uit de POC. Die staat in `src/firebaseConfig.ts`. De oude serverbestanden voor sessies en accountverwijdering waren in de POC niet als endpoints geregistreerd en zitten buiten deze browserapp.
