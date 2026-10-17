# 🚀 TECHIN JavaScript modulis

Repo talpinamos visos **JavaScript, HTML ir CSS** užduotys, atliktos [TECHIN](https://www.techin.lt/) kurse. Visas kelias nuo `console.log("Hello World")` iki realaus kodo.

> Fork'ink laisvai, pasidaryk savo variantą, pasiūlyk PR — visada galima patobulinti!

---

## 📂 Turinys

<!-- AUTO-TABLE:START -->
| #   | Aplankas                                               | Tema                              | Užduočių kiekis |
| --- | ------------------------------------------------------ | --------------------------------- | --------------- |
| 01  | [`assignment01_variables`](./assignment01_variables) | Kintamieji (variables) | 10 |
| 02  | [`assignment02_math`](./assignment02_math) | Matematiniai veiksmai (Math) | 7 |
| 03  | [`assignment03_ternary`](./assignment03_ternary) | Ternary operatorius | 10 |
| 04  | [`assignment04_if`](./assignment04_if) | `if / else` sąlygos | 17 |
| 05  | [`assignment05_switch`](./assignment05_switch) | `switch` konstrukcija | 10 |
| 06  | [`assignment06_functions`](./assignment06_functions) | Funkcijos (pagrindai) | 5 |
| 07  | [`assignment07_functions2`](./assignment07_functions2) | Funkcijos (pratęsimas) | 20 |
| 08  | [`assignment08_loops1`](./assignment08_loops1) | Ciklai `for` / `while` | 10 |
| 09  | [`assignment09_loops2`](./assignment09_loops2) | Ciklai (pratęsimas, `do...while`) | 17 |
| 10  | [`assignment10_arrays`](./assignment10_arrays) | Masyvai (arrays) | 19 |
| 11  | [`assignment11_repetition`](./assignment11_repetition) | Kartojimo užduotys | 19 |
| 12  | [`assignment12_dates`](./assignment12_dates) | Datos ir laikas | 33 |
| 13  | [`assignment13_strings`](./assignment13_strings) | String užduotys | 21 |
| 14  | [`assignment14_strings2`](./assignment14_strings2) | String užduotys (pratęsimas, `sort`, `map`) | 21 |
| 15  | [`assignment15_objects`](./assignment15_objects) | Objektai (objects) | 5 |
| 16  | [`assignment16_objects2`](./assignment16_objects2) | Objektai (pratęsimas) | 4 |
| 17  | [`assignment17_DOM1`](./assignment17_DOM1) | DOM: spalvų pasirinkimas | mini projektas |
| 18  | [`assignment18_DOM2`](./assignment18_DOM2) | DOM: tekstas, sąrašai, klasės, paveikslėliai | mini projektas |
| 19  | [`assignment19_DOM3`](./assignment19_DOM3) | DOM: stiliai ir atributai | mini projektas |
| 20  | [`assignment20_events`](./assignment20_events) | DOM įvykiai (events) | mini projektas |
| 21  | [`assignment21_tips`](./assignment21_tips) | Arbatpinigių skaičiuoklė (DOM) | mini projektas |
| 22  | [`assignment22_pasiruosimas`](./assignment22_pasiruosimas) | Pasiruošimas (`map`, `filter`, `sort`) | 11 |
| 23  | [`assignment23_tips`](./assignment23_tips) | Arbatpinigių skaičiuoklė (vieno failo versija) | mini projektas |
| 24  | [`assignment24_reduce`](./assignment24_reduce) | Masyvai: `.reduce()` | 6 |
| 25  | [`assignment25_html01`](./assignment25_html01) | HTML pagrindai: tekstas, formatavimas, nuorodos | 1 |
| 26  | [`assignment26_html02`](./assignment26_html02) | HTML: sąrašai, paveikslėliai, antraštės | 1 |
| 27  | [`assignment27_html03`](./assignment27_html03) | HTML: filmai, daugiapuslapė svetainė, lentelės | 3 |
| 28  | [`assignment28_html04`](./assignment28_html04) | HTML: formos | 2 |
| 29  | [`assignment29_html05`](./assignment29_html05) | CSS: selektoriai | 1 |
| 30  | [`assignment30_html06`](./assignment30_html06) | HTML + CSS: receptų puslapis | 1 |
| 31  | [`assignment31_css1`](./assignment31_css1) | CSS selektorių žaidimas (CSS Diner) | išorinė užduotis |
| 32  | [`assignment32_html7`](./assignment32_html7) | CSS: To Do List | 1 |
| 33  | [`assignment33_html8`](./assignment33_html8) | CSS: `nth-child` ir `:hover` selektoriai | 1 |
| 34  | [`assignment34_html9`](./assignment34_html9) | CSS: nuorodų stilizavimas | 1 |
| 35  | [`assignment35_html10`](./assignment35_html10) | CSS: formos elementų stilizavimas | 1 |
| —   | [`additional_tasks_html01`](./additional_tasks_html01) | Papildomos HTML / CSS užduotys (pseudo elementai, lentelės, formos) | 4 |
<!-- AUTO-TABLE:END -->

<!-- AUTO-TOTAL:START -->
**Iš viso:** 36 temos, 262 užduotys (245 JavaScript, 17 HTML / CSS).
<!-- AUTO-TOTAL:END -->

> Lentelė ir suma aukščiau generuojama automatiškai — žr. [Auto turinio atnaujinimas](#-auto-turinio-atnaujinimas).

---

## 🛠️ Kaip paleisti

Aplankuose su `index.html` (pvz. `assignment01`–`assignment07`, `assignment09`) jis susieja `task*.js` failus. Tiesiog atsidaryk failą naršyklėje ir žiūrėk rezultatus per **Developer Console** (`F12` → `Console`). DOM aplankai (`assignment17`–`assignment21`, `assignment23`) yra mini projektai, o HTML / CSS aplankai (`assignment25`–`assignment35`, `additional_tasks_html01`) — statiniai puslapiai; juos taip pat atidaryk per `index.html` (arba Live Server):

```bash
git clone https://github.com/termjs/Techin.git
cd Techin/assignment01_variables
# atidaryk index.html naršyklėje arba paleisk su Live Server
```

Likę aplankai (`assignment08_loops1`, `assignment10_arrays`–`assignment16_objects2`, `assignment22_pasiruosimas`, `assignment24_reduce`) neturi `index.html` — juos patogiausia paleisti per Node.js:

```bash
node task1.js
```

---

## 🔄 Auto turinio atnaujinimas

Lentelė ir bendra suma skyriuje "📂 Turinys" generuojama automatiškai iš realaus repo turinio (`scripts/update-readme.js` JavaScript temose skaičiuoja `task*.js` failus, o HTML / CSS temose — `task*/` aplankus su `index.html` (arba vieną `index.html`, jei aplanke tik viena užduotis)). Naujus aplankus (`assignmentXX_*` arba `pasikartojimasXX`) skriptas aptinka pats ir įrašo į `scripts/topics.json` (tik pavadinimą reikia įrašyti ranka).

Paleisti ranka:

```bash
node scripts/update-readme.js
```

Kad tai vyktų automatiškai prieš kiekvieną `git commit`, vieną kartą įjunk repo hooks:

```bash
git config core.hooksPath githooks
```

---

## 🤝 Contributing

Geek'ų dienoraštis, bet jei matai ką patobulinti (švaresnį kodą, geresnį sprendimą, naujų edge case'ų) — **fork'ink, taisyk, siųsk PR**. Visada įdomu pamatyti kreivarankių sprendimo variantus tai pačiai užduočiai.

---

![hackerman](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnF6aTVoMmNuc3R5b3M5a3V6NDc2bnc5NTIxdHl2MWdjZ3BodGxiOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpYQJwcWAlLulEHEcy/giphy.gif)

---

<sub>Nupirkti kavos ar alaus, ačiū. ☕</sub>
