import QtQuick 2.0

Rectangle {
    MouseArea {
        id: mouseArea
        anchors.fill: parent
    }
    Row {
        x: 50
        y: 50
        spacing: 30
        Rectangle {
            id:music
            width: 100
            height: 100
            radius: 6
            color: focus ? "red" : "lightgray"
            scale: focus ? 1.0 : 0.8
            focus: true
            /*Tab键切换到“游戏”*/
            KeyNavigation.tab: play
            /*移动图标位置*/
            Keys.onUpPressed: music.y -= 10
            Keys.onDownPressed: music.y += 10
            Keys.onLeftPressed: music.x -= 10
            Keys.onRightPressed: music.x += 10

            Text {
                anchors.centerIn: parent
                color: parent.focus ? "black" : "gray"
                font.pointSize: 20
                text: "音乐"
            }
        }
        Rectangle {
            id:play
            width: 100
            height: 100
            radius: 6
            color: focus ? "red" : "lightgray"
            scale: focus ? 1.0 : 0.8
            focus: false
            /*Tab键切换到“游戏”*/
            KeyNavigation.tab: movie
            /*移动图标位置*/
            Keys.onUpPressed: play.y -= 10
            Keys.onDownPressed: play.y += 10
            Keys.onLeftPressed: play.x -= 10
            Keys.onRightPressed: play.x += 10

            Text {
                anchors.centerIn: parent
                color: parent.focus ? "black" : "gray"
                font.pointSize: 20
                text: "游戏"
            }
        }
        Rectangle {
            id:movie
            width: 100
            height: 100
            radius: 6
            color: focus ? "red" : "lightgray"
            scale: focus ? 1.0 : 0.8
            focus: false
            /*Tab键切换到“游戏”*/
            KeyNavigation.tab: music
            KeyNavigation.left: play
            /*移动图标位置*/
            Keys.onUpPressed: movie.y -= 10
            Keys.onDownPressed: movie.y += 10
//            Keys.onLeftPressed: movie.x -= 10
            Keys.onRightPressed: movie.x += 10

            Text {
                anchors.centerIn: parent
                color: parent.focus ? "black" : "gray"
                font.pointSize: 20
                text: "影视"
            }
        }
    }



}
