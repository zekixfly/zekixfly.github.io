var app = angular.module('railwaytime', []);

app.controller('todoCtrl', function($scope, $http, $interval) {



  function getNowTime() {
    var nowDate = new Date(),
        nowTime = new Date(),
        temp1 = "",
        temp2 = "";
    temp1 += nowDate.getFullYear()+"-";
    temp1 += addZero((nowDate.getMonth()+1))+"-";
    temp1 += addZero(nowDate.getDate());  
    $scope.nowDate = temp1;
    temp2 += addZero(nowTime.getHours())+":";
    temp2 += addZero(nowTime.getMinutes());
    $scope.nowTime = temp2;
    return temp1;
  };
  getNowTime();
  function addZero(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  };
  

  
  $scope.rntradata = "";
  $scope.rstradata = "";
  $scope.rthsrdata = "";
  $scope.antradata = "";
  $scope.astradata = "";
  $scope.athsrdata = "";
  $scope.status = "";

  var trafficApi = [
    {url: "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/2203/to/2214/"},
    {url: "https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/1030/to/1070/"},
    {url: "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/1242/to/1410/"},

    {url: "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/1410/to/1242/"},
    {url: "https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/1070/to/1030/"},    
    {url: "https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/OD/2214/to/2203/"}
  ];

  $scope.ajax = function() {
    var nowDate = getNowTime();

    for(var key in trafficApi ) {

      $http({
        method: "GET",
        url: trafficApi[key].url+nowDate+"?%24format=JSON",
      }).then(
        function sucess(response) {

          // $scope.status += response.data[0].OriginStopTime.StationID;
          if(response.data[0].OriginStopTime.StationID=="2203") {
            $scope.rntradata = response;
          }
          else if(response.data[0].OriginStopTime.StationID=="1030") {
            $scope.rthsrdata = response;  
          }
          else if(response.data[0].OriginStopTime.StationID=="1242") {
            $scope.rstradata = response;
          }
          else if(response.data[0].OriginStopTime.StationID=="1410") {
            $scope.astradata = response;
          }
          else if(response.data[0].OriginStopTime.StationID=="1070") {
            $scope.athsrdata = response;  
          }
          else if(response.data[0].OriginStopTime.StationID=="2214") {
            $scope.antradata = response;
          }
        },
        function error(response) {
          if(response.status==-1) {
            $scope.status = "api網址錯誤: "+response;  
          }
          else{
            $scope.status = response.status;
          }
        });
    }; 
  };  
  $scope.ajax();
  $interval(getNowTime, 1000); //Five Minutes to call

});