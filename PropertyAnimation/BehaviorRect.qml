import QtQuick 2.0

Rectangle {
//    id: behaviorRect
    property alias text: text
    width: 80
    height: 80
    color: "lightblue"
    radius: 10
    Text {
        id: text
        anchors.centerIn: parent
        font.pointSize: 12
        text: "改变行为"
    }
    Behavior on x {
        PropertyAnimation {
            duration: 1000
            easing.type: Easing.InQuart    //加速运动
        }
    }
    Behavior on y {
        PropertyAnimation {
            duration: 1000
            easing.type: Easing.InQuart   //加速运动
        }
    }
}
