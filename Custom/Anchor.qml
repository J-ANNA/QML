import QtQuick 2.0

Item {
    Rectangle {
        width: 100
        height: 100
        MouseArea {
            id: mouseArea
            anchors.fill: parent
        }

        Rectangle {
            width: 100
            height: 100
            color: "red"
        }
    }

}
