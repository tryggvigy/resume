'use strict';

function knowledgeFactory() {

  ///////// PRIVATE ///////////
  var _wordCloudWords = [{
    text: 'TDD',
    impact: '2rem',
    color: '#468847',
    info: 'http://en.wikipedia.org/wiki/Test-driven_development'
  }, {
    text: 'Javascript',
    impact: '5rem',
    color: '#c09853',
    info: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript'
  }, {
    text: 'CSS3',
    impact: '3.5rem',
    color: '#3a87ad',
    info: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
  }, {
    text: 'Agile',
    impact: '3.5rem',
    color: '#b94a48',
    info: 'http://en.wikipedia.org/wiki/Agile_software_development'
  }, {
    text: 'Python',
    impact: '5rem',
    color: 'black',
    info: 'https://www.python.org/'
  }, {
    text: 'Sass',
    impact: '3.5rem',
    color: 'purple',
    info: 'http://sass-lang.com/'
  }, {
    text: 'HTML5',
    impact: '3.5rem',
    color: '#3a87ad',
    info: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  }, {
    text: 'Lua',
    impact: '2rem',
    color: '#468847',
    info: 'http://www.lua.org/'
  }, {
    text: 'jQuery',
    impact: '4rem',
    color: '#c09853',
    info: 'http://jquery.com/'
  }, {
    text: 'Shell',
    impact: '2rem',
    color: 'purple',
    info: 'http://en.wikipedia.org/wiki/Bash_(Unix_shell)'
  }, {
    text: 'AngularJS',
    impact: '5rem',
    color: '#b94a48',
    info: 'https://angularjs.org/'
  }, {
    text: 'PHP',
    impact: '2rem',
    color: 'gray',
    info: 'http://php.net/'
  }, {
    text: 'Java',
    impact: '3rem',
    color: 'black',
    info: 'http://www.oracle.com/technetwork/java/javase/overview/index.html'
  }, {
    text: 'Scrum',
    impact: '3.5rem',
    color: '#468847',
    info: 'https://www.scrumalliance.org/'
  }];

  var _webSkills = [
    {text: 'HTML5'},
    {text: 'CSS3'},
    {text: 'Sass'},
    {text: 'Less'},
    {text: 'jQuery'},
    {text: 'AngularJS'},
    {text: 'PHP'},
    {text: 'Lua'},
    {text: 'D3'}
  ];

  var _langSkills = [
    {text: 'Java'},
    {text: 'Python'},
    {text: 'Javascript'},
    {text: 'C/C++'},
    {text: 'C#'},
    {text: 'PHP'},
    {text: 'Lua'},
    {text: 'Haskell'}
  ];

  var _toolSkills = [
    {text: 'Grunt'},
    {text: 'Gulp'},
    {text: 'Visual Studios'},
    {text: 'Eclipse'},
    {text: 'Jenkins'},
    {text: 'Jekyll'},
    {text: 'Jira'},
    {text: 'Git'},
    {text: 'Selenium'},
    {text: 'Protractor'},
    {text: 'Jasmine'},
    {text: 'Unix shell'},
    {text: 'Compass'}
  ];

  var _methodSkills = [
    {text: 'Agile'},
    {text: 'Scrum'},
    {text: 'TDD'}
  ];

  var _systemSkills = [
    {text: 'Windows'},
    {text: 'Debian Linux'},
    {text: 'Android'}
  ];

  var _backendSkills = [
    {text: 'MySql'},
    {text: 'Sqlite'},
    {text: 'SQL'},
    {text: 'Apache'},
    {text: 'NodeJS'}
  ];

  /////////// PUBLIC //////////////
  function getWordCloudWords() {
    return _wordCloudWords;
  }
  function getLangSkills() {
    return _langSkills;
  }
  function getWebSkills() {
    return _webSkills;
  }
  function getToolSkills() {
    return _toolSkills;
  }
  function getMethodSkills() {
    return _methodSkills;
  }
  function getSystemSkills() {
    return _systemSkills;
  }
  function getBackendSkills() {
    return _backendSkills;
  }


  var factory = {
    getWordCloudWords: getWordCloudWords,
    getWebSkills: getWebSkills,
    getLangSkills: getLangSkills,
    getToolSkills: getToolSkills,
    getMethodSkills: getMethodSkills,
    getSystemSkills: getSystemSkills,
    getBackendSkills: getBackendSkills
  };
  return factory;
}
