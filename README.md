# Geometra — geodezinių ir topografinių darbų svetainė

Statinė vienos puslapio svetainė lietuvių kalba geodezijos/topografijos paslaugas teikiančiai įmonei. Grynas HTML/CSS/JS — jokių build įrankių ar priklausomybių, todėl ją galima talpinti bet kur (GitHub Pages, Netlify, Vercel, bet kuris hostingas).

## Struktūra

```
index.html      – visas turinys (pagrindinis, vienas puslapis su inkarų navigacija)
css/style.css   – stiliai (CSS kintamieji viršuje failo lengvam spalvų/šriftų keitimui)
js/main.js      – meniu, slinkties animacijos, D.U.K. akordeonas, formos validacija
img/favicon.svg – svetainės ženkliukas
```

## Ką reikia pakeisti prieš publikavimą

1. **Įmonės pavadinimas ir prekės ženklas** — šiuo metu naudojamas vietos rezervavimo pavadinimas „Geometra“. Pakeiskite `index.html` antraštėje ir poraštėje bei `<title>`/meta aprašyme.
2. **Kontaktiniai duomenys** — telefonas (`+370 600 00000`), adresas („Geodezininkų g. 12, Vilnius“) ir įmonės kodai poraštėje yra pavyzdiniai. El. paštas šiuo metu nurodytas `jonas.kublickas727@gmail.com` — pakeiskite, jei reikia kito adreso.
3. **Žemėlapis** — kontaktų sekcijoje įterptas OpenStreetMap su Vilniaus centro žymekliu. Pakeiskite `bbox` ir `marker` parametrus tikru adresu (`src="https://www.openstreetmap.org/export/embed.html?..."`).
4. **Atsiliepimai** — trys pavyzdiniai klientų atsiliepimai `#atsiliepimai` sekcijoje pažymėti kaip pavyzdiniai; pakeiskite tikrais klientų komentarais, kai jų turėsite.
5. **Užklausos forma** — forma šiuo metu tik rodo sėkmės pranešimą naršyklėje (front-end demo), realiai laiškų nesiunčia. Kad gautumėte užklausas į savo el. paštą, prijunkite formą prie:
   - [Formspree](https://formspree.io) — pridėkite `action="https://formspree.io/f/JŪSŲ_ID"` prie `<form id="quoteForm">`, arba
   - [EmailJS](https://www.emailjs.com), arba
   - savo backend/serverless funkcijos.
6. **Socialiniai tinklai** — poraštėje esančios Facebook/LinkedIn/Instagram nuorodos (`href="#"`) turi būti pakeistos tikrais profilių adresais.

## Paleidimas lokaliai

Tiesiog atidarykite `index.html` naršyklėje, arba paleiskite paprastą serverį:

```bash
python3 -m http.server 8000
```

ir apsilankykite `http://localhost:8000`.

## Talpinimas (deploy)

Kadangi tai statinė svetainė, ją galima tiesiogiai įkelti į:
- **GitHub Pages** (Settings → Pages → šaka su `index.html`)
- **Netlify / Vercel** — tiesiog nutempus katalogą arba sujungus su Git repozitorija
- bet kurį standartinį web hostingą (įkelti failus per FTP)
