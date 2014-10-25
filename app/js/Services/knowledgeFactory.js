'use strict';

knowledgeFactory.inject = ['$http'];

function knowledgeFactory($http) {

  ///////// PRIVATE ///////////
  var _wordCloudWords = $http.get('../dist/json/data/wordcloud.json', { cache: true});
  var _skills = $http.get('../dist/json/data/skills.json', { cache: true});


  /////////// PUBLIC //////////////
  function getWordCloudWords() {
    return _wordCloudWords;
  }

  function getSkills() {
    return _skills;
  }

  var factory = {
    getWordCloudWords: getWordCloudWords,
    getSkills: getSkills
  };
  return factory;
}
