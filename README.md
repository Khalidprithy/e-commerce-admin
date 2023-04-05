## Getting Started

First, run the development server:

```bash
npm run dev
```

# node version

.nvmrc

```
lts/fermium
```

.npmrc

```
engine-strict=true
```

## Engine Config

```
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=8.19.3",
    "yarn": "Please use npm"
  },
```

## EsLint config

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

```
{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly"
  },
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
