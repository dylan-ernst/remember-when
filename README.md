# Remember When Photo Booth

Marketing site for Remember When Photo Booth (Orange County).

## Run it

```bash
nvm use            # Node 22
npm install
npm run dev        # http://127.0.0.1:5173
```

```bash
npm run build      # type check + production build into dist/
npm run preview    # serve the production build
```

```bash
cd studio          # Sanity Studio, in a second terminal
npm install
npm run dev        # http://localhost:3333
npm run seed       # load the starting content (only fills in what is missing)
npm run deploy     # publish Studio to the hosted URL
```

## Links

- Live: https://dylan-ernst.github.io/remember-when/
- Studio (edit the site's text and photos): https://remember-when.sanity.studio
- Sanity project: https://www.sanity.io/manage/project/zmnh8ng0
- Design source: https://claude.ai/design/p/74efa65a-7e5e-48ff-ab63-4a7cdfa34e7f
- Instagram: https://www.instagram.com/rememberwhen.pb

Contact-form inquiries post to the `receive-inquiry` webhook set in
`src/lib/inquiry.ts`; `VITE_INQUIRY_WEBHOOK` overrides it per build.
