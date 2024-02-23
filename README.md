## Server Actions
Next.js Server Actions are a feature introduced in Next.js 12. They allow you to define custom server-side actions that can be invoked directly from your client-side code. These server actions help solve the problem of needing to perform server-side logic or access external APIs in response to client-side events without having to create additional API routes.

### Problem They Solve
Traditionally, when you need to perform server-side logic in response to client-side events, you would need to create an API route in Next.js, send an HTTP request to that route from the client-side code, handle the request in the API route, and then send back a response. This approach adds complexity and requires additional setup.

Next.js Server Actions simplify this process by allowing you to define server-side logic directly within your Next.js application, which can be invoked from the client-side code without the need for additional API routes.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).