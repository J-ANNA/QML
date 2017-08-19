import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Dialogs 1.2
import QtQuick.Window 2.0
import QtQuick.Controls.Styles 1.4
import QtQuick.Layouts 1.1


ApplicationWindow {
    visible: true
    width: 640
    height: 480
    title: qsTr("多功能查看器")
    minimumWidth: 400
    minimumHeight: 300
    property color textBackgroundColor: "black"
    property color textColor: "white"

    Action {                 //剪切
        id: cutAction

    }
    Action {                //复制
        id: copyAction

    }
    Action {               //粘贴
        id: pasteAction

    }
    Action {                //打开网页
        id: htmlOpenAction

    }
    Action {                //打开文本
        id: txtOpenAction

    }
    Action {                //打开图片
        id : imgOpenAction

    }
    Action {                 //放大图片
        id: imgZoominAction

    }
    Action {                  //缩小图片
        id: imgZoomoutAction

    }
    Action {                  //向左旋转
        id: imgRotaleftAction

    }
    Action {                 //向右旋转
        id: imgRotarightAction

    }

    menuBar: MenuBar {
        Menu {
            title: "文档"
            MenuItem {                 //子菜单项
                text: "文本..."
                action: txtOpenAction
            }
            MenuItem {
                text: "网页..."
                action: htmlOpenAction
            }
            MenuItem {
                text: "图片..."
                action: imgOpenAction
            }
            MenuSeparator {}
            MenuItem {
                text: "退出"
                onTriggered: Qt.quit();
            }
        }
        Menu {
            title: "编辑"
            MenuItem {
                text: "复制"
                action: copyAction
            }
            MenuItem {
                text: "剪切"
                action: cutAction
            }
            MenuItem {
                text: "粘贴"
                action: pasteAction
            }
        }
        Menu {
            title: "图像"
            MenuItem {
                text: "放大"
                action: imgZoominAction
            }
            MenuItem {
                text: "缩小"
                action: imgZoomoutAction
            }
            MenuSeparator {}        //菜单项分隔条
            MenuItem {
                text: "向左旋转"
                action: imgRotaleftAction
            }
            MenuItem {
                text: "向右旋转"
                action: imgRotarightAction
            }
        }
        Menu {
            title: "帮助"
            MenuItem {
                text: "关于"
                onTriggered: aboutBox.open()
            }
        }
    }

    toolBar: ToolBar {
        id: mainToolBar
        width: parent.width
        RowLayout {
            anchors.fill: parent
            spacing: 0
            ToolButton { action:htmlOpenAction }
            ToolSeparator {}
            ToolButton {action: txtOpenAction}
            ToolButton {action: copyAction}
            ToolButton {action: cutAction}
            ToolButton {action: pasteAction}
            ToolSeparator {}
            ToolButton {action: imgOpenAction}
            ToolButton {action: imgZoominAction}
            ToolButton {action: imgZoomoutAction}
            ToolButton {action: imgRotaleftAction}
            ToolButton {action: imgRotarightAction}
            Item {Layout.fillWidth: true}         //Item元素填满剩余宽度
        }
    }

    Item {              //主显示区
        id: centralArea
        anchors.fill: parent
        visible: true
        property var current: htmlArea              //当前显示的区域元素
        BusyIndicator {
            id: busy
            anchors.centerIn: parent
            running: false
            z: 3
        }
        TextArea {
            id:htmlArea

        }
        TextArea {
            id: textArea

        }
        Image {
            id: imageArea

        }
    }

    statusBar: Rectangle {
        id: mainStatusBar
        color: "lightgray"
        implicitHeight: 30  //默认高度
        width: parent.width
        property alias text: status.text;
        Text {
            id: status
            anchors.fill: parent
            anchors.margins: 4
            font.pointSize: 12
        }
    }

    FileDialog {
        id: htmlDlg

    }
    FileDialog {
        id: txtDlg

    }
    FileDialog {
        id: imgDlg

    }
    MessageDialog {
        id: aboutBox
        title: "关于"
        text: "MultiDocViewer 1.0 \n这是一个多功能文档查看器"
        icon: StandardIcon.information

    }
    htmlHandler {
        id: htmldoc       //处理器标识
        Component.onCompleted: htmldoc.fileUrl = "qrc:/htm/001.html"
    }
    TextHandler {
        id: textdoc

    }
    function processFile(fileUrl,name)       //根据路径和文件名处理并显示图片
    {

    }
}


















