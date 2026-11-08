# Preferiresti

Preferiresti si è spostato su <https://tools.baggiponte.com/preferiresti/>, con lo stile del blog, e il codice ora vive
in [baggiponte/blog](https://github.com/baggiponte/blog) sotto `tools/site/preferiresti/` (font e licenza inclusi).
Questo repository può essere archiviato.

Qui resta solo il Worker `preferiresti` su `preferiresti.baggiponte.com`: `src/index.ts` risponde a ogni richiesta
con un 301 allo stesso percorso e alla stessa query sotto `https://tools.baggiponte.com/preferiresti`, così i vecchi
link continuano a funzionare. Per pubblicarlo: `pnpm install --frozen-lockfile` e `pnpm deploy`; `pnpm test`
controlla il redirect.
