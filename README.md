nlw-SpaceTime --> 

Aula 1 
Application Back-end (Server)

Install Typescript:
npm init -y
npm i typescript -D
npm i @types/node -D
npx tsc --init
npm i tsx -D

To run server: 
"dev": "tsx watch src/server.ts"

In terminal:
npm run dev

Install Fastify:
npm i fastify

Install Eslist:
npm install eslint -D
npx eslint --init

Install Prisma + SQLite:
npm i prisma -D
npx prisma -h (help)
npx prisma init --datasource-provider SQLite
npx prisma migrate dev
npm i @prisma/client

Application Web

npx create-next-app@latest "name of folder" --use-npm
npm i prettier-plugin-tailwindcss -D

Application Mobile (Expo Dev)
npx create-expo-app my-app
npm run start

For install Tailwind in ReactNative (NativeWind):
Section -> Expo
npm i nativewind
npm i tailwindcss -D
npx tailwindcss init
