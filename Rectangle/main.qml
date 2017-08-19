import QtQuick 2.5
import QtQuick.Window 2.2

Window {
    visible: true
    width: 360
    height: 360
    title: qsTr("Hello World")

    MainForm {
        anchors.fill: parent
        mouseArea.onClicked: {
//            Qt.quit();
            topRect.visible = !topRect.visible
            bigRect.rotation += 10

        }
    }
}
