let myapp=angular.module("news",[])
  

myapp.controller("snehil",function($scope,$http){
    $scope.arrays=["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world"]
    $scope.getvalue = function(val){
        $http({
            method:'GET',
            url:'https://api.nytimes.com/svc/topstories/v2/'+val+'.json?api-key=uejiI2tBCnA111fl02xVsQXN8AmQtFW5'
        }).then(function successdata(response){
            console.log(response.data.results)
            $scope.value= response.data.results  
        })
    }
    $scope.readmore=function(){

    }
      
    $scope.get = function(indexs){
     $scope.number=($scope.arrays.indexOf(indexs))
        $scope.getvalue($scope.arrays[$scope.number])
        
        //document.querySelector("#$scope.arrays[$scope.number]").setAttribute('style', "background:grey");
        $scope.list()
    }
    $scope.list=function(){
       let y= document.querySelector("#first")
        y.style.display="none"
       document.querySelector("#close").style.display="none"
       document.querySelector("#button").style.display="block"
       
    }
     $scope.list1=function(){
        console.log("snehil")
        document.querySelector("#first").setAttribute('style', "display:block");
        document.querySelector("#close").style.display="block"
        document.querySelector("#button").style.display="none"
    }
    $scope.list()
    $scope.get("arts")
    })
    document.querySelector("#arts").setAttribute('style', "background:blue");



