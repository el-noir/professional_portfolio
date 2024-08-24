import express, { static as expressStatic } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';


dotenv.config({
  path: './env'
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Serve static files from the /assets directory
app.use('/assets', expressStatic(join(__dirname, 'assets')));

// Import route modules
import homeRoute from './routes/home.js';
import aboutRoute from './routes/about.js';
import projectsRoute from './routes/projects.js';
import servicesRoute from './routes/services.js';
import teamRoute from './routes/team.js';
import contactRoute from './routes/contact.js';  // <-- Add this line

// Use routes
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);
app.use('/services', servicesRoute);
app.use('/team', teamRoute);
app.use('/contact', contactRoute);  // <-- This is where the error was

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
