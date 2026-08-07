# Mind2Skin Website

Static marketing website for the Mind2Skin mobile app.

## Upload to GitHub

Upload every file and the `assets` folder to the root of `lewiskd26/mind2skin-website`.

## Enable GitHub Pages

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose `main` and `/ (root)`.
4. Save.
5. Set the custom domain to `mind2skin.app`.
6. Enable **Enforce HTTPS** after DNS validates.

## Cloudflare DNS

Keep all existing Cloudflare Email Routing MX and TXT records.

Add the GitHub Pages records:

- `A` `@` → `185.199.108.153`
- `A` `@` → `185.199.109.153`
- `A` `@` → `185.199.110.153`
- `A` `@` → `185.199.111.153`
- `CNAME` `www` → `lewiskd26.github.io`

Use **DNS only** while GitHub verifies the custom domain.


## Beta waitlist form

The homepage includes a beta waitlist form. See `BETA_FORM_SETUP.md` for the one-time form endpoint setup.


## Waitlist confirmation behavior

After a successful beta signup, the form now confirms the submission and tells the user that Mind2Skin will review the request and contact them if a testing spot becomes available for their role and platform.

The Privacy Policy has also been updated to explicitly cover the beta waitlist fields collected and Formspree's role as the submission processor.
