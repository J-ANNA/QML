import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.2

Item {
    width: 640
    height: 480

    property alias date: date
    property alias btnSelect: btnSelect
    property alias file: file
    property alias btnOpen: btnOpen
    property alias content: content
    property alias btnFont: btnFont
    property alias btnColor: btnColor

   ColumnLayout {
       anchors.centerIn: parent
       RowLayout {
           Label {
               text: "日期"
           }
           TextField {
               id: date
           }
           Button {
               id: btnSelect
               text: "选择..."
           }
       }
       RowLayout {
           Label {
               text: "文件"
            }
           TextField {
               id: file
           }
           Button {
               id:btnOpen
               text: "打开..."
           }
       }
       TextArea {
           id: content
           Layout.fillWidth: true
           text: "Hell Qt Quick"
           font.pixelSize: 14
       }
       RowLayout {
           Layout.alignment: Qt.AlignRight
           Button {
               id: btnFont
               text: qsTr("字体...")
           }
           Button {
               id: btnColor
               text: qsTr("颜色...")
           }
       }
   }
}






















