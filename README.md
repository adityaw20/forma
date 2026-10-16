# Forma Studio — Netlify client enquiry website

A responsive React + Vite portfolio and client enquiry site. The project form is wired to Netlify Forms; it is not a demo-only form.

## Included
- Responsive portfolio, services, studio and enquiry sections
- Required-field/browser validation plus project-detail minimum length
- Submission loading, success and error states
- Netlify Forms submission integration
- Honeypot spam trap
- Netlify SPA fallback and basic security headers

## Before launch
1. Search the project for `Forma`, `hello@example.com`, and the sample project names. Replace them with your real studio name, email, portfolio and social links.
2. The portfolio visuals and project titles are illustrative concept studies. Replace them with real work or label them clearly.
3. Install Node.js 20+ and run `npm install`, then `npm run dev` to preview locally.
4. Run `npm run build` to verify the production build.

## Deploy to Netlify
1. Create a GitHub repository and push this project to it, or use Netlify's manual deploy flow after running `npm run build` (upload the generated `dist` folder).
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Build command: `npm run build`. Publish directory: `dist`. `netlify.toml` also sets these values.
4. Deploy. The static form declaration in `index.html` allows Netlify to detect the `client-enquiry` form. If form detection was enabled after the first deploy, enable it in **Site configuration → Forms** (dashboard wording may vary) and trigger a fresh deploy.
5. Open **Forms** in your Netlify site dashboard and confirm that `client-enquiry` is listed.
6. Submit a real test enquiry from the deployed URL, then check **Forms → Submissions**.
7. To receive email alerts: in the site's form notifications/settings, add an email notification for the `client-enquiry` form and enter the inbox you want to receive enquiries at. Confirm any verification email if Netlify asks.

## Important notes
- Local `npm run dev` does not save submissions to Netlify. Test after deployment to Netlify.
- The website itself cannot choose your notification inbox; configure it in the Netlify dashboard.
- Netlify Forms availability, usage quotas, notification features and limits depend on your Netlify account/plan and may change.
- The honeypot reduces basic bot submissions but is not a complete anti-abuse system. If spam becomes a problem, add a CAPTCHA supported by your chosen form service.
- This form does not upload attachments. Add a trusted file-upload service if clients need to send files.
- Do not put API keys or secrets in frontend code.
- Update the privacy copy and provide a privacy policy appropriate for your business and jurisdiction.
