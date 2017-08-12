import QtQuick 2.4
import QtQuick.Window 2.2
import QtQuick.Controls 1.4

Rectangle {               //不能用Window 会出错
    visible: true

    objectName: "rootRect";
    width: 360;
    height: 360;
    Text {
        objectName: "textLabel";
        text: "Hello World";
        anchors.centerIn: parent;
        font.pixelSize: 26;
    }
    Button {
        objectName: "quitButton";
        anchors.right: parent.right;
        anchors.rightMargin: 4;
        anchors.bottom: parent.bottom;
        anchors.bottomMargin: 4;
        text: "quit";
     }


}
