'use strict';

/* App Module */

angular
  .module('ResumeApp', ['ngRoute', 'ngAnimate', 'pascalprecht.translate'])
  .controller('MainCtrl', MainCtrl)
  .controller('ProfileCtrl', ProfileCtrl)
  .controller('SkillsCtrl', SkillsCtrl)
  .controller('ExperienceCtrl', ExperienceCtrl)
  .controller('HobbiesCtrl', HobbiesCtrl)

  .factory('knowledgeFactory', knowledgeFactory)
  .factory('languageFactory', languageFactory)

  .directive('animateOnHover', animateOnHover)
  .directive('timeSince', timeSince)

  .config(['$translateProvider',
  function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
    prefix: 'languages/lang-',
    suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
  }])

  .config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../dist/partials/templates/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      }).
      when('/Profile', {
        templateUrl: '../dist/partials/templates/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      }).
      when('/Skills', {
        templateUrl: '../dist/partials/templates/skills.html',
        controller: 'SkillsCtrl',
        controllerAs: 'skillsCtrl'
      }).
      when('/Experience', {
        templateUrl: '../dist/partials/templates/experience.html',
        controller: 'ExperienceCtrl',
        controllerAs: 'expCtrl'
      }).
      when('/Hobbies', {
        templateUrl: '../dist/partials/templates/hobbies.html',
        controller: 'HobbiesCtrl',
        controllerAs: 'hobbiesCtrl'
      }).
      otherwise({
        templateUrl: '../dist/partials/templates/404.html'
      });
  }]);
