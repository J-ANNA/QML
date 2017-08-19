import QtQuick 2.0

FocusScope {                 //为了能有效的控制焦点
    property alias label: label.text         //外部调用"label"对应"label.text"
    property alias text: input.text
    Row {
        spacing: 5
        Text {
            id: label
            text: "标签"
        }
        Rectangle {
            width: 100
            height: 20
            color: "white"
            border.color: "gray"
            TextInput {
                id: input
                anchors.fill: parent
                anchors.margins: 4
                focus: true
                text: "请输入内容"
            }
        }
    }
}
