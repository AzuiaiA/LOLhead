var app = angular.module('zuiai', ['ui.router', 'ngAnimate']);
app.config(function($stateProvider, $urlRouterProvider) {
    //配置路由
    $urlRouterProvider.otherwise('/main/news/newest');
    $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'tpls/main.html',
            controller: 'mainCtrl'
        }).state('main.news', {
            url: '/news',
            templateUrl: 'tpls/news.html',
            controller: 'newsCtrl'
        }).state('main.news.newest',{
            url: '/newest',
            templateUrl: 'tpls/newest.html',
            controller: 'newestCtrl'
        })
});

//控制器
app.controller('mainCtrl', function($scope) {
    $scope.name = 'zuiai_mainCtrl';
});
app.controller('newsCtrl', function($scope) {
    $scope.name = 'zuiai_newsCtrl';
});
app.controller('newestCtrl', function($scope) {
    $scope.allnews = [{
      src:'images/news1.png',
      title:'英雄联盟五周年专题',
      content:'星光闪耀五周年现场！狂欢盛典8月26号开启'
    },{
      src:'images/news2.png',
      title:'每日一笑：五速鞋',
      content:'穿上五速鞋，感受下什么叫风一样的男子'
    },{
      src:'images/news3.png',
      title:'来许愿吧',
      content:'快来许愿吧，说不定下一个就是你'
    },{
      src:'images/news4.png',
      title:'放声五周年',
      content:'大声表达你的态度，赢电玩阿狸皮肤'
    }];
});

//指令
app.directive('everynews',function(){
  return {
    restrict:'ACME',
    //replace:true,
    templateUrl:'tpls/everynews.html'
  }
});
