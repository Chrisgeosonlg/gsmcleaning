# GSM Cleaning Services — Website

A modern, responsive, multi-page marketing website for **GSM Cleaning Services**
(GSM Enterprises Limited, Dar es Salaam), built with plain HTML, CSS and
JavaScript — no build tools required. Just open and edit.

---

## 📂 Folder structure

```
gsm-cleaning-website/
├── index.html        ← Home page
├── about.html        ← About, vision/mission/motto, benefits, certifications
├── services.html     ← All services + safety policy + corporate clients
├── contact.html      ← Contact details, map & enquiry form
├── css/
│   └── styles.css    ← All styling (brand colours live at the top)
├── js/
│   └── main.js       ← Menu, scroll animations, counters, form handler
├── images/           ← Put your own photos here (see below)
└── assets/           ← Spare folder for logos, favicons, docs, etc.
```

---

## 🚀 Open it in Visual Studio Code

1. Open **VS Code** → `File` → `Open Folder…` → choose `gsm-cleaning-website`.
2. (Recommended) Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` → **Open with Live Server**.
   The site opens in your browser and auto-refreshes as you edit.

No frameworks, no `npm install`, no compiling — it runs straight from the files.

---

## 🎨 Re-branding / colours

All brand colours and fonts are defined as variables at the very top of
`css/styles.css` under `:root`. Change them once and the whole site updates:

```css
--navy:   #0E2A47;   /* deep navy */
--green:  #7CB518;   /* lime green */
--mist:   #F4F8F0;   /* fresh off-white background */
```

Fonts are **Sora** (headings) and **Plus Jakarta Sans** (body), loaded from
Google Fonts in each page's `<head>`.

---

## 🖼️ Adding your real photos

The site currently uses tasteful placeholders so it looks complete out of the
box. To use real images, drop them in the `images/` folder and swap the
placeholder block for an `<img>` tag. Each spot is marked with an HTML comment.

Suggested files (any size, landscape works best):

| File                  | Used on            |
|-----------------------|--------------------|
| `images/hero.jpg`     | Home hero          |
| `images/team.jpg`     | About → Our people |
| `images/office.jpg`   | Services → Office  |
| `images/domestic.jpg` | Services → Domestic|
| `images/hygiene.jpg`  | Services → Hygiene |
| `images/fumigation.jpg`| Services → Fumigation |
| `images/gardening.jpg`| Services → Gardening |
| `images/products.jpg` | Services → Products|

**Example** — replace this:
```html
<div class="placeholder">…</div>
```
with this:
```html
<img src="images/hero.jpg" alt="GSM cleaning team at work">
```

---

## 📩 Making the contact form work

The form in `contact.html` is wired to a front-end demo handler in
`js/main.js` (it just shows a success message). To receive real emails, use one
of these — no server needed:

- **Formspree** (formspree.io): set `action="https://formspree.io/f/yourID"`
  and `method="POST"` on the `<form>` tag, then remove the JS `preventDefault`.
- **EmailJS** (emailjs.com): follow their JS snippet inside the submit handler.

Look for the `// TODO: send data to your email service here.` comment in
`js/main.js`.

---

## 📞 Pre-filled company details

Pulled from the corporate profile and used across the footer/contact:

- **Company:** GSM Enterprises Limited
- **Address:** Josam House, Plot 10A, 2nd Floor, Coca Cola Road,
  Mikocheni Light Industrial Area, Dar es Salaam · P.O. Box 5489
- **Phone:** +255 736 777 762
- **Cell:** +255 754 710 298 / +255 712 710 298
- **Email:** mkyejo@gsmcleaning.co.tz
- **Web:** www.gsmcleaning.co.tz

Update the WhatsApp number in the floating button (`href="https://wa.me/255754710298"`)
on each page if you'd like a different line.

---

## ✅ What's included

- Sticky header with mobile hamburger menu
- Animated hero, scroll-reveal sections and counting stats
- Service cards + detailed service pages
- Vision / Mission / Motto / Philosophy
- Benefits of cleanliness
- Certifications & corporate-client showcase
- Contact form + embedded Google map + floating WhatsApp button
- Fully responsive (desktop → mobile), keyboard-focusable, reduced-motion friendly

---

*Built for GSM Cleaning Services. Edit freely.*
