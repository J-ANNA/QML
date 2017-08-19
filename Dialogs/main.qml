import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Dialogs 1.2
import QtQuick.Window 2.0

ApplicationWindow {
    visible: true
    width: 640
    height: 480
    title: qsTr("对话框示例")

    MainForm {
        id: main
        anchors.fill: parent
        btnSelect.onClicked: dateDialog.open()
        btnOpen.onClicked: fileDialog.open()
        btnFont.onClicked: fontDialog.open()
        btnColor.onClicked: colorDialog.open()

    }
    Dialog {
        id: dateDialog
        title: "选择日期"
        width: 275
        height: 300
        standardButtons: StandardButton.Cancel | StandardButton.Save


        onAccepted: main.date.text = calendar.selectedDate.toLocaleDateString()
        Calendar {                          //日历控件
            id: calendar
            //双击日历就等同于单击“Save”按钮
            onDoubleClicked: dateDialog.click(StandardButton.Save)
        }
    }
    FileDialog {
        id: fileDialog
        title: "打开"
        nameFilters: ["Text files(*.txt)","Image files(*.jpg *.png)","All files(*)"]   //文件名过滤器
        onAccepted: main.file.text = fileDialog.fileUrl

    }
    FontDialog {
        id:fontDialog
        title: "字体"
        font: Qt.font({family:"宋体",pointSize:12,weight:Font.Normal})  //初始默认选中的字体
        modality: Qt.WindowModal     //模式对话框
        onAccepted: main.content.font = fontDialog.font

    }
    ColorDialog {
        id: colorDialog
        title: "颜色"
        modality: Qt.WindowModal
        onAccepted: main.content.textColor = colorDialog.color
    }

}



















