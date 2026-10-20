# Preferiresti

Un semplice editor di storie con gradienti, testo centrato e opzioni precedute da `-`.

La versione ospitata è su <https://preferiresti.baggiponte.com>.

Apri `index.html` con doppio clic: funziona offline, senza installazioni o server.

- Sei gradienti predefiniti e colori personalizzabili in alto e in basso.
- Due opzioni iniziali; **Aggiungi opzione** permette di aggiungerne altre e rimuoverle.
- Dimensione del testo con adattamento automatico per i testi lunghi.
- Selettore sole / luna / sistema: ricorda la scelta e segue automaticamente i cambiamenti del sistema quando selezionato.
- Esportazione PNG da **1080 × 1920** pixel, senza watermark.
- Bozza salvata nel browser quando il salvataggio locale è disponibile.

L'anteprima è lo stesso canvas esportato. Il tema dell'editor non modifica i colori della storia. Tutti i dati restano nel browser.

Il font libero **Barlow Condensed Regular** è incorporato nell'HTML; licenza in `FONT-LICENSE.txt`. Puoi caricare un tuo font (.otf, .ttf, .woff, .woff2) dal pannello **Font originale**. Rimane in memoria e va ricaricato alla riapertura.

## Sviluppo e deploy

Il Worker è configurato in `cloudflare.config.ts` (runtime) e
`wrangler.config.ts` (l'adapter di build di `cf`); `scripts/build.mjs` prepara
`index.html` e `FONT-LICENSE.txt` in `dist/` come asset pubblicati.

Prerequisiti:

- **Node >= 22.18** e **pnpm**.
- Dopo `pnpm install`, autenticazione a Cloudflare una sola volta con
  `pnpm exec cf auth login`. I comandi successivi riusano la sessione salvata
  localmente. È l'accesso amministrativo per il deploy: il sito è pubblico e
  non richiede login o codici email.

Comandi:

```sh
pnpm install   # installa gli strumenti di sviluppo fissati (cf, wrangler)
pnpm build     # prepara dist/ ed esegue cf build
pnpm check     # prepara dist/ ed esegue cf deploy --dry-run (nessun upload)
pnpm deploy    # prepara dist/ e pubblica su preferiresti.baggiponte.com
pnpm dev       # prepara dist/ e avvia il server di sviluppo locale
```

Solo `index.html` e `FONT-LICENSE.txt` vengono copiati in `dist/`, quindi
nient'altro nel progetto viene pubblicato (la licenza del font incorporato deve
viaggiare insieme all'asset).

## Sito precedente e bozze

La versione precedente resta invariata come fallback su
<https://baggiponte.github.io/preferiresti/>. Non viene installato alcun
redirect: entrambi gli indirizzi continuano a funzionare indipendentemente.

Le bozze salvate nel browser sono legate all'origine che le ha scritte
(`localStorage` è per-origine), quindi le bozze salvate su
`baggiponte.github.io` **non** vengono migrate a `preferiresti.baggiponte.com`
(né viceversa). Copia ciò che vuoi conservare prima di cambiare indirizzo.
