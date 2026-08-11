# GT Darbai — geodezinių ir topografinių darbų svetainė

Statinė vienos puslapio svetainė lietuvių kalba įmonei „Geodeziniai ir topografiniai darbai“ (veikia nuo 2006 m.). Grynas HTML/CSS/JS — jokių build įrankių ar priklausomybių, todėl ją galima talpinti bet kur (GitHub Pages, Netlify, Vercel, bet kuris hostingas).

## Struktūra

```
index.html      – visas turinys (pagrindinis, vienas puslapis su inkarų navigacija)
css/style.css   – stiliai (CSS kintamieji viršuje failo lengvam spalvų/šriftų keitimui)
js/main.js      – meniu, slinkties animacijos, D.U.K. akordeonas, formos validacija
img/favicon.svg – svetainės ženkliukas
```

## Įmonės duomenys, jau įtraukti į svetainę

- **Pavadinimas:** Geodeziniai ir topografiniai darbai (logotipe rodomas trumpinys „GT Darbai“)
- **Veikla nuo:** 2006 m.
- **Adresas:** Žalgirio g. 88-507, Vilnius, Lietuva
- **Tel./faksas:** +370 5 272 8058
- **El. paštas:** gtdarbai@gtdarbai.lt, gtdarbai@gmail.com

Jei kuris nors duomuo pasikeis, ieškokite jo `index.html` faile (naudokite paiešką pagal telefono numerį, el. paštą ar adresą — jie kartojasi antraštėje, „Apie mus“, „Kontaktai“ ir poraštės sekcijose).

## Ką dar reikia pridėti prieš publikavimą

1. **Žemėlapis** — kontaktų sekcijoje įterptas OpenStreetMap žymeklis apytiksliai Žalgirio g. 88 vietoje (Šnipiškės, Vilnius). Patikrinkite ir, jei reikia, pakoreguokite tikslesnes `bbox`/`marker` koordinates (`src="https://www.openstreetmap.org/export/embed.html?..."`).
2. **Atsiliepimai** — trys pavyzdiniai klientų atsiliepimai `#atsiliepimai` sekcijoje pažymėti kaip pavyzdiniai; pakeiskite tikrais klientų komentarais, kai jų turėsite.
3. **Užklausos forma** — forma šiuo metu tik rodo sėkmės pranešimą naršyklėje (front-end demo), realiai laiškų nesiunčia. Kad gautumėte užklausas į savo el. paštą, prijunkite formą prie:
   - [Formspree](https://formspree.io) — pridėkite `action="https://formspree.io/f/JŪSŲ_ID"` prie `<form id="quoteForm">`, arba
   - [EmailJS](https://www.emailjs.com), arba
   - savo backend/serverless funkcijos.
4. **Įmonės kodas / PVM mokėtojo kodas** — poraštėje šiuo metu nėra registracijos kodų (nebuvo pateikti). Įrašykite juos į `.footer-bottom` bloką, jei norite juos rodyti.
5. **Socialiniai tinklai** — poraštėje esančios Facebook/LinkedIn/Instagram nuorodos (`href="#"`) turi būti pakeistos tikrais profilių adresais.

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
