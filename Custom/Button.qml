import QtQuick 2.0

Item {
    width: 300
    height: 300
    property alias btn: btn

    Grid {
        x: 80
        y: 80
        columns: 2
        spacing: 5


        Rectangle {
            id: btn
            width: 100
            height: 62
            color: "teal"
            border.color: "aqua"
            border.width: 3

            Text {
                id:label
                anchors.centerIn: parent
                font.pointSize: 16
                text: "开始"
            }

            MouseArea {
                anchors.fill: parent
                onClicked: {
                    label.text = "按钮已按下"
                    label.font.pointSize = 11
                    btn.color = "aqua"
                    btn.border.color = "teal"
                }
            }
        }

        Rectangle {
            id: redRectangle
            width: 20
            height: 20
            color: "red"
            border.color: Qt.lighter(color)        //边框色比填充颜色浅

        }

        Rectangle {
            id: blueRectangle
            width: 20
            height: 20
            color: "blue"
            border.color: Qt.lighter(color)
        }

        Rectangle {
            id: greenRectangle
            width: 20
            height: 20
            color: "green"
            border.color: Qt.lighter(color)
        }
    }

    Row {
        x: 10
        y: 150
        spacing: 10
        layoutDirection: Qt.RightToLeft
        Rectangle {
            width: 20
            height: 20
            color: "green"
            border.color: Qt.lighter(color)
        }
        Rectangle {
            width: 20
            height: 20
            color: "yellow"
            border.color: Qt.lighter(color)
        }

    }

    Column {
        id: column
        x: 10
        y: 200
        spacing: 5
        Rectangle {
            width: 20
            height: 20
            color: "green"
            border.color: Qt.lighter(color)
        }

        Rectangle {
            width: 20
            height: 20
            color: "yellow"
            border.color: Qt.lighter(color)
        }
    }

    Flow {
        width: 20
        height: 20
//        anchors.right: column
        spacing:  5
        Rectangle {
            width: 20
            height: 20
            color: "yellow"
            border.color: Qt.lighter(color)
        }
        Rectangle {
            width: 20
            height: 20
            color: "yellow"
            border.color: Qt.lighter(color)
        }

    }
}






















