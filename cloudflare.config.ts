import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "3dd4d1b3677089482ceefbf6c3c06e1f",
  worker: {
    name: "preferiresti",
    compatibilityDate: "2026-10-20",
    // Sito statico pubblico: l'hostname raw workers.dev e gli URL di anteprima
    // non vengono usati, quindi restano entrambi disattivati. L'unico indirizzo
    // pubblicato è il dominio personalizzato.
    workersDev: false,
    previewUrls: false,
    domains: ["preferiresti.baggiponte.com"],
    // Log e trace per il Worker distribuito. Le trace campionano solo l'1% delle
    // richieste, più che sufficiente per una pagina statica a basso traffico.
    observability: {
      enabled: true,
      logs: {
        enabled: true,
      },
      traces: {
        enabled: true,
        headSamplingRate: 0.01,
      },
    },
  },
});
