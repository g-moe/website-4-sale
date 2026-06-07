import "./styles.css";
import { getEnv } from "./env";

const env = getEnv();

document.title = `${env.DOMAIN} is for sale`;

const app = document.querySelector<HTMLElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = `
  <section class="min-h-dvh bg-zinc-950 px-6 py-8 text-zinc-100">
    <div class="mx-auto max-w-3xl">
      <div class="pb-16 pt-16 sm:pt-24">
        <p class="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
          Domain for sale
        </p>
        <h1 class="text-5xl font-semibold leading-tight text-white sm:text-7xl">
          ${env.DOMAIN}
        </h1>
        <p class="mt-6 max-w-2xl text-xl leading-8 text-zinc-300">
          ${env.TAGLINE}
        </p>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            class="inline-flex items-center justify-center bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
            href="mailto:${env.CONTACT_EMAIL}?subject=Offer for ${env.DOMAIN}"
          >
            Contact seller
          </a>
          <div class="inline-flex items-center justify-center border border-zinc-700 px-5 py-3 text-sm text-zinc-300">
            ${env.ASKING_PRICE}
          </div>
        </div>
      </div>
    </div>
  </section>
`;
