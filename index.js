const data = [
  {
    id: 1,
    title: 'Drum Kit',
    demo: 'https://iusamahub.github.io/JavaScript30/01-JavaScript-Drum-Kit/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/01-JavaScript-Drum-Kit',
  },
  {
    id: 2,
    title: 'Clock',
    demo: 'https://iusamahub.github.io/JavaScript30/02-JS-and-CSS-Clock/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/02-JS-and-CSS-Clock',
  },
  {
    id: 3,
    title: 'CSS Variables',
    demo: 'https://iusamahub.github.io/JavaScript30/03-CSS-Variables/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/03-CSS-Variables',
  },
  {
    id: 4,
    title: 'Array Cardio 1',
    demo: 'https://iusamahub.github.io/JavaScript30/04-Array-Cardio-Day-1/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/04-Array-Cardio-Day-1',
  },
  {
    id: 5,
    title: 'Flex Panel Gallery',
    demo: 'https://iusamahub.github.io/JavaScript30/05-Flex-Panel-Gallery/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/05-Flex-Panel-Gallery',
  },
  {
    id: 6,
    title: 'Type Ahead',
    demo: 'https://iusamahub.github.io/JavaScript30/06-Type-Ahead/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/06-Type-Ahead',
  },
  {
    id: 7,
    title: 'Array Cardio 2',
    demo: 'https://iusamahub.github.io/JavaScript30/07-Array-Cardio-Day-2/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/07-Array-Cardio-Day-2',
  },
  {
    id: 8,
    title: 'Fun with HTML',
    demo: 'https://iusamahub.github.io/JavaScript30/08-Fun-with-HTML5-Canvas/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/08-Fun-with-HTML5-Canvas',
  },
  {
    id: 9,
    title: 'Dev Tools Exercise',
    demo: 'https://iusamahub.github.io/JavaScript30/09-Dev-Tools-Domination/index.html',
    repo: 'https://github.com/iusamahub/JavaScript30/tree/main/09-Dev-Tools-Domination',
  },
];

const DataList = document.getElementById('data');

// function to generate data
function generateData() {
  // DataList.innerHTML = '';
  data.forEach((d) => {
    DataList.innerHTML += `<div id="title">${d.id}</div>
    <div id="title">${d.title}</div>
    <div id="links">
    <a href="${d.demo}">Demo</a>
    <a href="${d.repo}">Repo</a>
    </div>
    `;
  });
}

generateData();
