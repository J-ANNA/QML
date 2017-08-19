import QtQuick 2.5
import QtQuick.Window 2.2

Window {
    property alias mouseArea: mouseArea
    property alias text: text
    visible: true                            //属性：可见
    width: 640
    height: 480
    title: qsTr("Hello World")

    MouseArea {                               //子对象1：MouseArea  响应鼠标事件的区域
        id: mouseArea                        //对象标识符
        anchors.fill: parent                 //anchors.fill:布局作用，充满整个父窗口，即整个父窗口都是鼠标响应区
        onClicked: {
            Qt.quit();
        }
    }

    Text {                                  //子对象2：Text
        id: text
        text: qsTr("Hello World")
        anchors.centerIn: parent            //布局：中心位置
    }
//    mouseArea.onClicked: {
//        Qt.quit();
//    }
}
