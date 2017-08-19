import QtQuick 2.5

Rectangle {
    property alias mouseArea: mouseArea
    property alias behaviorRect: behaviorRect
    width: 360
    height: 360

    MouseArea {
        id: mouseArea
        anchors.fill: parent
    }

    Column {
        x: 50
        y: 50
        spacing: 10
        PropertyRect {}
        SignalRect {}
        SingleRect {}
        BehaviorRect {
         id: behaviorRect
         text.text: "行为"
        }
    }
}
