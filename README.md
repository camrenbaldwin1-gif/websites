# Apex Auto Detailing

A polished, self-contained static demonstration website for a fictional automotive detailing business in Wilmington, Delaware. HTML, CSS and vanilla JavaScript. No dependencies, build step, backend, database, API keys, web fonts or third-party requests.

## Download from GitHub

Open https://github.com/camrenbaldwin1-gif/websites and choose **Code → Download ZIP**, then extract it. You can upload the extracted `websites-main` folder directly to Netlify Drop: `index.html` is at its root.

Alternatively, download the included `apex-auto-detailing-netlify.zip` file from GitHub and follow the deployment steps below. That smaller package includes only the website and its instructions.

## Deploy with Netlify Drop

1. Download `apex-auto-detailing-netlify.zip` and extract it.
2. Open the extracted `apex-auto-detailing` folder. You should see `index.html`, `styles.css`, `script.js`, `_headers`, `404.html` and `assets` directly inside it.
3. Sign in to Netlify and open https://app.netlify.com/drop (or choose to add a project by deploying manually).
4. Drag the **apex-auto-detailing folder** into the upload area. Upload the extracted folder, not the ZIP, its parent folder or the source repository's `.git` directory.
5. Netlify will provide an HTTPS `netlify.app` address. No custom domain or build command is required. Free usage is subject to Netlify's current plan limits and terms; review these before publishing.
6. Visit the generated address and check the menu, service links, imagery and demo confirmation on a phone and desktop. Local tests do not establish that a Netlify deployment succeeded.

To update, edit the static files and upload the complete folder again through the existing project's manual deployment interface.

## Local development

From `/workspace/websites` run:

    python3 -m http.server 4173 --bind 127.0.0.1

Use the existing isolated checkout. No worktree is needed. Stop with Ctrl+C. You can also open `index.html` directly for a quick preview; the local server better represents hosting. Node is not required.

## Safe demonstration form

The form intentionally **does not use Netlify Forms**. The user's test constraint prohibits collecting or transmitting real customer information. Sample inputs are prefilled; all validation and confirmation happen locally. The form has no named submission controls, no remote action, no fetch, no analytics, and no browser storage. Submission is disabled until the JavaScript handler is installed. Content Security Policy also blocks form navigation and outbound connections. The confirmation says explicitly that no request or booking was sent. Do not enter actual personal information.

Activating a real inquiry form would be a separate production task: obtain business approval, add appropriate privacy information, configure and verify form delivery and spam protection, and deliberately revise the form behavior and restrictive CSP. Do not turn on form detection for this test site.

## Assets and implementation

- `assets/hero.webp`: AI-created automotive studio demonstration image.
- `assets/details.webp`: AI-created three-panel demonstration image, presented through CSS as three gallery panels.
- All images are local, optimized WebP files. These are fictional visual examples, not customer work or evidence of detailing results. They should not be presented as real portfolio work.
- System fonts keep the site fast and independent of remote services.
- Semantic headings, skip link, keyboard focus states, accessible menu controls, labeled form fields, live confirmation and reduced-motion support are included.
- `_headers` supplies security headers on Netlify; the HTML also has a restrictive CSP. There are no cookies or third-party embeds.
- `404.html` is the static Netlify error page.

The website is a deployment-ready **test project**, not an operating business. It contains no working business email, phone, address or booking service. No deployment has been performed automatically.
