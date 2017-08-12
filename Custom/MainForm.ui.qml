import QtQuick 2.5

Rectangle {
    property alias mouseArea: mouseArea
    property alias btn: btn
    property alias anchor: anchor
    property alias mainForm: mainForm
    id: mainForm
    width: 360
    height: 360

    MouseArea {
        id: mouseArea
        anchors.fill: parent
    }

    Button {
        id: btn
        anchors.left: parent.left
        anchors.top:  parent.top
        anchors.leftMargin: 150
        anchors.topMargin: 50
    }

    Anchor {
        id: anchor
        anchors.left: btn.right
        anchors.top: btn.top
        anchors.leftMargin: 40
    }


}
