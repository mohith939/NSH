# NSH Scientific Suppliers & Co.

The public website foundation for NSH Scientific Suppliers & Co. It uses the supplied logo, an editorial image-led design, and the business information in the supplied brief while avoiding invented product models and specifications.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Current routes

- `/` — homepage and business introduction
- `/catalogue` — verified research categories and catalogue status
- `/services` — equipment supply, sourcing, procurement, and documentation enquiries
- `/brands` — associated brand information, without unsupported authorization claims
- `/about` — business overview
- `/resources` — FAQs and current documentation status
- `/contact` — direct contact details and enquiry channels

## Pending source assets and system configuration

- The supplied original NSH logo is used from `public/logo.jpeg`; the primary navy token is sampled from the artwork.
- Two licensed editorial laboratory photographs are locally stored in `public/images/` and used only as illustrative context—not as NSH inventory or verified product imagery.
- The supplied brief contains website requirements, but no verified product catalogue, product images, model numbers, or technical data. The public catalogue intentionally avoids fabricated product records.
- Contact details and mail/telephone/WhatsApp links are present, but there is no enquiry form or submission endpoint yet.
- Database, secure admin, enquiry persistence, uploads, and Google Apps Script email integration are not implemented in this milestone.

The homepage presents NSH as a quote-led way to source scientific equipment: customers can browse categories and contact NSH to discuss a quotation. Product carts, automated quote submission, online checkout, and payment are not implemented. Configure the real catalogue and enquiry services before claiming those workflows are available.

### Image licensing

- `public/images/research-lab-wide.jpg` — Unsplash image `photo-1579154204601-01588f351e67`, [image source](https://images.unsplash.com/photo-1579154204601-01588f351e67) and [Unsplash License](https://unsplash.com/license).
- `public/images/laboratory-glassware.jpg` — Unsplash image `photo-1532094349884-543bc11b234d`, [image source](https://images.unsplash.com/photo-1532094349884-543bc11b234d) and [Unsplash License](https://unsplash.com/license).

These stock images depict research environments and must not be presented as specific NSH products, customers, or facilities.
