  // 百度地图API功能
  var map = new BMap.Map("gmap");    // 创建Map实例
  map.centerAndZoom(new BMap.Point(113.844318,22.88408), 13);  // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
  map.addControl(scaleCtrl);
  var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
  map.addControl(zoomCtrl);