import QtQuick 2.0

Rectangle {
    id: signalRect
    width: 80
    height: 80
    color: "lightgreen"
    radius: 10
    Text {
        anchors.centerIn: parent
        font.pointSize: 12
        text: "信号处理"
    }
    MouseArea {
        anchors.fill: parent
        onClicked: PropertyAnimation {
            target: signalRect
            property: "y"        //y轴方向的动画
            from: 30
            to: 300
            duration: 3000
            loops: 3
            easing.type: Easing.Linear         //匀速线性运动
        }
    }
}
