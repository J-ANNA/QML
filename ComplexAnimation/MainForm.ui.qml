import QtQuick 2.5

Rectangle {
    property alias mouseArea: mouseArea

    width: 640
    height: 480

    MouseArea {
        id: mouseArea
        anchors.fill: parent
    }

   CAnimateObj{

   }
}
