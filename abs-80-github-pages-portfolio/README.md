# Adrian Chapman — Independent Software Developer

Static portfolio prepared for the GitHub account **Abs-80**. Uses your Tide Link symbol as a personal signature, not as a studio name. Built with plain HTML/CSS/JS, no external build tools.

## Intended GitHub Pages address

- GitHub repository name: **`abs-80.github.io`** (all lowercase)
- Public website address: **https://abs-80.github.io/**
- Account: https://github.com/Abs-80

The website is not live until uploaded to GitHub and GitHub Pages is enabled.

## Publish manually

1. Sign in to GitHub and create a new **public** repository called `abs-80.github.io` under your account.
2. Upload **the contents of this folder**, not the folder itself. `index.html` must be in the repository root.
3. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, source branch `main`, folder `/ (root)`; save.
4. After deployment finishes, visit https://abs-80.github.io/.

If you connect the GitHub app to ChatGPT, this setup may be performed directly after permissions are granted.

## Before sharing with prospective clients

- In `config.js`, set `contactEmail` to an email you want to publish. Until then, the page links to your GitHub profile instead.
- Replace the **clearly labeled illustrative mockups** with real application screenshots and game captures. None are represented as actual screenshots.
- Verify case-study descriptions and development statuses are accurate.
- Consider adding a custom domain only after the portfolio has been tested.
- Do not upload private app code, API keys, internal files, or documents belonging to clients.

## Local preview

From this directory:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Files

- `index.html` — sections and case studies
- `styles.css` — desktop and responsive layouts
- `config.js` — display name, GitHub and optional contact email
- `script.js` — navigation and contact details
- `assets/tide-link.svg` — personal logo
- `.nojekyll` — instructs GitHub Pages to serve static files without Jekyll processing
