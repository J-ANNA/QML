import QtQuick 2.5
import QtQuick.Window 2.2

Window {
    visible: true
    width: 640
    height: 480
    title: qsTr("KeyBoard")

    MouseArea {
        anchors.fill: parent
        onClicked: {

        }
    }

    Keyboard {
        x: 100
        y: 100
    }

}
