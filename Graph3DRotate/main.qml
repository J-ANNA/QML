import QtQuick 2.5
import QtQuick.Window 2.2

Window {
    visible: true
    width: 480
    height: 400
    title: qsTr("Hello World")

    MainForm {
        id: mainForm
        anchors.fill: parent
        mouseArea.onClicked: {
//            Qt.quit();
        }
    }
}
