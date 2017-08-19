import QtQuick 2.0

Rectangle {
    id: propertyRect
    width: 80
    height: 80
    color: "orange"
    radius: 10
    Text {
        anchors.centerIn: parent
        font.pointSize: 12
        text: "属性值源"
    }
    PropertyAnimation on x {
        from: 50                 //起点
        to: 500                  //终点
        duration: 30000           //30000ms 即 30s
        loops: Animation.Infinite  //无限循环
        easing.type: Easing.OutBounce  //缓和曲线类型：到达目的地后反弹
    }
}
