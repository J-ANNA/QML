import QtQuick 2.5
import QtQuick.Window 2.2

Window {
    visible: true
    width: 360
    height: 360
    title: qsTr("Hello World")

    MouseArea {
        anchors.fill: parent
        onClicked: {

        }
    }

    Rect {
        x: 0
        y: 0
        moveRect.opacity:(360.0 - moveRect.x) / 360
    }
}
