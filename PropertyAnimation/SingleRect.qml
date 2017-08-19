import QtQuick 2.0

Rectangle {
    id: singleRect
    width: 80
    height: 80
    color: "aqua"
    radius: 10
    Text {
        anchors.centerIn: parent
        font.pointSize: 12
        text: "独立元素"
    }
    PropertyAnimation {
        id: animation
        target: singleRect
        properties: "x,y"
        duration: 1000
        easing.type: Easing.InOutBack   //运动到半程增加过冲，然后减少

    }
    MouseArea {
        anchors.fill: parent
        onClicked: {
            animation.from = 20
            animation.to = 200
            animation.running = true          //开启动画
        }
    }
}
