# 🏫 Digital Shala – GitHub Pages + GAS API

મૂળ Multi-HTML UI + Google Sheets API

## સ્ટ્રક્ચર

```
DigitalShala_GitHub_GAS/
├── index.html          ← લોગિન
├── register.html       ← રજિસ્ટર
├── Dashboard.html
├── Classes.html, Students.html, ...
├── js/config.js        ← ★ GAS URL
├── js/api.js
├── gas/Code.gs         ← Apps Script API
└── README.md
```

## સેટઅપ

### 1) GAS API
1. script.google.com → New project
2. `gas/Code.gs` પેસ્ટ → Save
3. Deploy → Web app → Me → **Anyone** → Deploy
4. `/exec` URL કોપી

### 2) GitHub Pages
1. New public repo
2. આ ફોલ્ડરની ફાઇલો અપલોડ (`gas/` વૈકલ્પિક)
3. `js/config.js` માં URL:
```js
var GAS_API_URL = 'https://script.google.com/macros/s/XXXX/exec';
```
4. Settings → Pages → main → Save
5. `https://USER.github.io/REPO/`

## લિંક્સ

| પેજ | ફાઇલ |
|-----|------|
| લોગિન | index.html |
| રજિસ્ટર | register.html |
| ડેશબોર્ડ | Dashboard.html |
| વર્ગ | Classes.html |
| વિદ્યાર્થી | Students.html |

Demo: `admin` / `digitalshala`

## નોંધ
- `google.script.run` ને `js/api.js` bridge GAS API પર મોકલે છે
- `?page=` લિંક્સ `.html` ફાઇલમાં કન્વર્ટ થયેલી છે
