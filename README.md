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

## Links

- Live: https://dylan-ernst.github.io/remember-when/
- Design source: https://claude.ai/design/p/74efa65a-7e5e-48ff-ab63-4a7cdfa34e7f
- Instagram: https://www.instagram.com/rememberwhen.pb

Contact-form inquiries post to the `receive-inquiry` webhook set in
`src/lib/inquiry.ts`; `VITE_INQUIRY_WEBHOOK` overrides it per build.
