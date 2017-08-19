import QtQuick 2.0

Text {                     //这是一个具有状态改变能力的Text元素
    id: stext
    color: "gray"
    font.family: "Helvetica"
    font.pointSize: 20
    font.bold: true
    font.italic: true
    MouseArea {
        id: mArea
        anchors.fill: parent
    }
    states: [                                      //包含了该元素的所有状态的列表
        State {
            name: "highlight"
            when: mArea.pressed
            PropertyChanges {
                target: stext
                color: "red"
                font.pointSize: 40
                style:Text.Raised
                styleColor: "red"
            }
        }
    ]

    transitions: [                             //元素状态切换
        Transition {
            PropertyAnimation {
                duration: 1000
            }
        }
    ]
}
