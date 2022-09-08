# Superstruct

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Description

Superstruct is a painter app that allows the user and client build a proposal and work order to be given to painting contractors.

This app is best viewed on a mobile device.

## Screen Cap

{images here}
{images here}
{images here}

## Built With

- React.js
- Redux
- Redx-Saga
- React-Router
- Node.js
- Express.js
- PostgreSQL
- Cloudinary

## Prerequisites

Before you get started, make sure you have the following software installed on you computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation

1. Install dependencies by running:
   ```sh
   npm install
   ```
2. Run the app with the commands:
   ```sh
   npm run server
   npm run client
   ```

## Create database and tables

Create a new database called `paint_project` and create tables in the database.sql file. Required INSERT statements are labeled along with optional sample data.

If you would like to name your database something else, you will need to change `paint_project` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste the following lines into the file:

```
- SERVER_SESSION_SECRET= 'yourKey'
- CLOUDINARY_NAME = 'ENTER YOUR CLOUD_NAME HERE'
- CLOUDINARY_API_KEY = 'ENTER YOUR API_KEY HERE'
- CLOUDINARY_API_SECRET = 'ENTER YOUR API_SECRET HERE'
```

- Start postgres if not running already
- Run `npm run server`
- Run `npm run client`
- If using nodeman, app will open in new browser tab after running `npm run client`. If not, navigate to `localhost:3000`

## Directory Structure

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App
