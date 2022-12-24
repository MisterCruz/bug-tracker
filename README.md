## Bug Tracker - A Product Management Tool 🐞

## Architecture

Front End:
- Next.js
- React.js
- Tailwind CSS

Backend: 
- Node.js
- Express.js
- MongoDB

The overall architecture is a front end written in React, connected to a Node.js backend with a MongoDB database.

Why React?

I chose React to seperate the app into different components and to reuse code easily.

Why Next.js? 

Next.js allows for image optimization, server side rendering, and a better way to handle routing with Next Links.

The MongoDB schema takes care of the projects and the tickets within each project.

## Maintainability

Every component is responsible for it's own function.

The application is organized into reusable components avoid code duplication. This helps with performance as state changes for said component only re-render - instead of the whole virtual DOM.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
