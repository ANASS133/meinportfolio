import './App.css';
import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';

export default function Bot() {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#37b182',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#37b182',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Willkommen auf meiner Website! Wie heißt du?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hallo {previousValue}, schön dich hier zu sehen!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'Ich werde gerne über mich erzählen. Möchtest du mehr wissen?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Erzähl mir mehr über dich.', trigger: '6' },
              { value: 2, label: 'Was ist dein Ehrgeiz?', trigger: '7' },
            ],
          },
          {
            id: '6',
            message:
              'Ich heiße Anass Sibbi. Ich bin ein Web Full Stack Entwickler aus Settat, Marokko. Ich liebe Technologie und digitale Projekte. Zurzeit studiere ich Digitalrecht und Sicherheit und möchte eine Ausbildung im Bereich Anwendungsentwicklung beginnen!',
            trigger: '8',
          },
          {
            id: '7',
            message:
              'Mein Ehrgeiz ist es, meine Fähigkeiten als Full Stack Developer weiter auszubauen und innovative digitale Lösungen zu schaffen. Ich möchte in der digitalen Welt einen positiven Einfluss ausüben und meine Karriere im Bereich Anwendungsentwicklung vorantreiben.',
            trigger: '8',
          },
          {
            id: '8',
            options: [
              { value: 1, label: 'Welche Sprachen sprichst du?', trigger: '9' },
              { value: 2, label: 'Erzähl mir mehr über dich.', trigger: '6' },
            ],
          },
          {
            id: '9',
            message:
              'Ich spreche fließend Arabisch, Französisch und Englisch. Zusätzlich zu meinem Studium habe ich Deutsch gelernt. Im Jahr 2023 habe ich das Goethe-Zertifikat B1 erhalten und kürzlich die telc B2-Prüfung mit guten Noten bestanden, um meine beruflichen Möglichkeiten zu erweitern.',
            trigger: '10',
          },
          {
            id: '10',
            options: [
              { value: 1, label: 'Welche Programmiersprachen beherrschst du?', trigger: '11' },
              { value: 2, label: 'Welche Zertifikate hast du?', trigger: '12' },
            ],
          },
          {
            id: '11',
            message: 'Ich beherrsche HTML, CSS, JavaScript und mehr.',
            trigger: '10',
          },
          {
            id: '12',
            message: 'Ich habe ein Python-Zertifikat von CISCO sowie HTML- und PHP-Zertifikate von SoloLearn.',
            trigger: '10',
          },
        ]}
        floating={true}
      />
    </ThemeProvider>
  );
}
