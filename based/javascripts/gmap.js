        function initMap() {
            var center = new TMap.LatLng(22.878172,113.836235);//设置中心点坐标
            //初始化地图
            var map = new TMap.Map("gmap", {
                zoom: 11,//设置地图缩放级别
                center: center
            });

            //设置infoWindow
            var infoWindow = new TMap.InfoWindow({
                map: map,
                position: center,
                content: "<div><img src='http://govae.com/based/images/right.png'><p>Powered by GOVAE</p></div>"
            });

        }