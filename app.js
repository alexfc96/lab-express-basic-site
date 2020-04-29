const express = require('express');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'hbs');

const developer = 'Alex Fernández Cánovas';
const myPortfolio = 'My portfolio';

app.get('/', (req, res) => {
  const data = {
    name: 'Alex Fernández Cánovas',
    github: 'https://github.com/alexfc96',
    instagram: 'https://www.instagram.com/alexfc96/',
    linkedin: 'https://www.linkedin.com/in/alex-fernandez-canovas/',
    myPhoto: 'images/perfil.png',
    bootcamp: 'Desarrollo Web Full Stack',
    school: 'IronHack',
    city: 'Barcelona',
    age: 23,
    languages: ['Castellano', 'Catalán', 'Inglés'],
    aptitudes: ['Colaborativo', 'Proactivo', 'Autodidacta'],
    codeLanguages: ['JavaScript', 'HTML/CSS', 'Python'],
    projects: {
      project1Name: 'Hacktivities CAMBIAR LA IMAGEN',
      project1Url: 'https://github.com/alexfc96/hacktivities',
      project1Image: 'images/roadrunner.png',
      project2Name: 'RoadRunner',
      project2Url: 'https://alexfc96.github.io/roadrunner/',
      project2Image: 'images/roadrunner.png',
      project3Name: 'Cloning Revera',
      project3Url: 'https://github.com/alexfc96/lab-bootstrap-cloning-revera',
      project3Image: 'images/revera.png',
      project4Name: 'Cloning Slack',
      project4Url: 'https://github.com/alexfc96/lab-css-flexbox-slack',
      project4Image: 'images/slack_project.png',
    },
    cv: 'documents/Alex Fernandez Canovas CV.pdf',

  };

  res.render(`${__dirname}/views/index`, { data, developer, myPortfolio });
});

app.get('/contact', (req, res) => {
  const contactData = {
    email: 'alex.fernandez.canovas@gmail.com',
    telephoneNumber: 628753463,
  };

  res.render(`${__dirname}/views/contact`, { contactData, developer, myPortfolio });
});

app.listen(3000);
