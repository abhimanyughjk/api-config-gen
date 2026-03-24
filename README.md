# api-config-gen

> Generate production-ready API configuration files & connection boilerplate for any service — instantly, in the browser.

**Live:** [abhimanyughjk.github.io/api-config-gen](https://abhimanyughjk.github.io/api-config-gen)

---

## What is it?

**api-config-gen** is a zero-dependency, client-side tool that generates:

- **Configuration files** — `.env`, `config.json`, `config.yaml`, `config.toml`, JS module, Python dict, Go struct
- **Connection boilerplate** — ready-to-use HTTP client code in JS (Fetch), Node.js (Axios), Python (requests), Go (net/http), PHP (cURL), Ruby (Net::HTTP)

Fill out the form, pick a format, hit Generate — copy or download your config. Everything runs in your browser. No data is sent anywhere.

---

## Features

| Feature | Details |
|---|---|
| **18+ API Presets** | OpenAI, Anthropic, GitHub, Stripe, Twilio, Firebase, Supabase, MongoDB, AWS, GCP, Azure, SendGrid, Slack, Discord, Twitter/X, Spotify, Razorpay, Mailchimp |
| **7 Output Formats** | `.env`, JSON, YAML, TOML, JavaScript, Python, Go |
| **6 Language Snippets** | JS Fetch, Node Axios, Python requests, Go net/http, PHP cURL, Ruby Net::HTTP |
| **Auth Types** | Bearer Token, API Key (Header), API Key (Query), Basic Auth, OAuth2, JWT |
| **Retry & Timeout** | Configurable timeout and retry logic baked into all snippets |
| **One-click Export** | Copy to clipboard or download the generated file |
| **Privacy First** | 100% client-side — your keys never leave the browser |
| **Zero Dependencies** | Pure HTML + CSS + JS, no npm, no build step |

---

## Quick Start

### Option 1 — Use the hosted version

Just open [abhimanyughjk.github.io/api-config-gen](https://abhimanyughjk.github.io/api-config-gen) — no install needed.

### Option 2 — Run locally

```bash
git clone https://github.com/abhimanyughjk/api-config-gen.git
cd api-config-gen
open index.html
```

With VS Code? Install the **Live Server** extension, right-click `index.html` then Open with Live Server.

---

## Usage

1. **Select a provider** from the preset dropdown (or choose Custom / Manual)
2. **Fill in your details** — base URL, auth type, API key, timeout, retry count, rate limit
3. **Choose output format** — `.env`, JSON, YAML, TOML, JS, Python, or Go
4. **Pick a language** for the connection snippet
5. **Click Generate** — copy to clipboard or download the file

---

## File Structure

```
api-config-gen/
├── index.html              # Main page (GitHub Pages entry point)
├── assets/
│   ├── css/
│   │   └── style.css       # All styles — dark monochrome theme
│   ├── js/
│   │   ├── app.js          # UI logic, event handlers, clipboard/download
│   │   ├── presets.js      # API provider presets (base URLs, auth types, extras)
│   │   └── generators.js   # Config & snippet generators for all formats
│   └── icons/
│       └── favicon.svg     # SVG favicon
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Actions — auto-deploy to Pages on push
├── README.md
└── LICENSE                 # MIT
```

---

## Adding a New Preset

Edit `assets/js/presets.js` and add an entry to `API_PRESETS`:

```js
myservice: {
  name: 'My Service',
  baseUrl: 'https://api.myservice.com/v2',
  authType: 'bearer',
  keyName: 'MYSERVICE_API_KEY',
  rateLimit: 100,
  extra: {
    MYSERVICE_REGION: 'us-east-1',
  }
}
```

Then add the option to `#providerSelect` in `index.html`.

---

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/add-preset-xyz`
3. Make your changes
4. Open a pull request

**Ideas:** New API presets, additional output formats (Kotlin, Rust, C#), import from existing `.env` files, key format validation.

---

## Deploying Your Own Fork

1. Fork this repo
2. Go to **Settings > Pages**
3. Set Source to **GitHub Actions**
4. Push to `main` — the `pages.yml` workflow auto-deploys

---

## License

[MIT](LICENSE) (c) Abhimanyu Bishnoi — [abhimanyughjk.github.io](https://abhimanyughjk.github.io)
