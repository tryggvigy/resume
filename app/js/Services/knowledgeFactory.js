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
    {text: 'D3'}
  ];

  var _langSkills = [
    {text: 'Java'},
    {text: 'Python'},
    {text: 'Javascript'},
    {text: 'C/C++'},
    {text: 'C#'},
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
    {text: 'Compass'},
    {text: 'Metasploit'}
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
    {text: 'PHP'},
    {text: 'NodeJS'}
  ];

  var _securitySkills = [
    {text: 'XSS'},
    {text: 'SQL Injection'},
    {text: 'CSRF'},
    {text: 'Directory Traversal'},
    {text: 'Session Hijacking'}
  ];

  var _engineeringSkills = [
    {text: 'Risk Assessment', translation:"ENGINEERING_RA"},
    {text: 'Engineering Economics', translation:"ENGINEERING_EE"},
    {text: 'Operation Management', translation:"ENGINEERING_OM"},
    {text: 'Project Management', translation:"ENGINEERING_PM"},
    {text: 'Probability and Statistics', translation:"ENGINEERING_PS"}
  ];

  var _scienceSkills = [
    {text: 'Complex Analysis', translation:"SCIENCE_CA"},
    {text: 'Classical Mechanics', translation:"SCIENCE_CM"},
    {text: 'Linear Algebra', translation:"SCIENCE_LA"},
    {text: 'Discrete Mathmatics', translation:"SCIENCE_DM"},
    {text: 'Mathmatical Structures for Computer Science', translation:"SCIENCE_MS"},
    {text: 'Differential Analysis', translation:"SCIENCE_DA"}
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
  function getSecuritySkills() {
    return _securitySkills;
  }
  function getEngineeringSkills() {
    return _engineeringSkills;
  }
  function getScienceSkills() {
    return _scienceSkills;
  }

  var factory = {
    getWordCloudWords: getWordCloudWords,
    getWebSkills: getWebSkills,
    getLangSkills: getLangSkills,
    getToolSkills: getToolSkills,
    getMethodSkills: getMethodSkills,
    getSystemSkills: getSystemSkills,
    getBackendSkills: getBackendSkills,
    getSecuritySkills: getSecuritySkills,
    getEngineeringSkills: getEngineeringSkills,
    getScienceSkills: getScienceSkills
  };
  return factory;
}
