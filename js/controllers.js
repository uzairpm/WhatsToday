var gg={};
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('QuoteController', function($scope, Quotes){
    
    $scope.loadQuote = function() {
        $scope.quote = "Please wait...";
        //promise handling
        Quotes.getQuote().then(function(quote) {
            $scope.quote = quote.value.joke;
        });
    };
    $scope.loadQuote();
})

.controller('NewsController', function($scope, News){
    
    //$scope.searchTerm = "flipkart";
    
    $scope.getNews = function() {
        //console.log($scope.searchTerm);
        var key = $scope.searchTerm;
        if(key == "")
            return;
        
        News.getNews().then(function(obj) {
            //console.log(obj.query.results);
            $scope.news = obj.query.results.results;
            
        });
    };
    $scope.getNews();
})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})*/

.controller('AccountCtrl', function($scope, $rootScope) {
  $scope.settings = {
    enableFriends: false
  };
  $rootScope.fName = $scope.fName;
  $rootScope.lName = $scope.lName;
    
});
