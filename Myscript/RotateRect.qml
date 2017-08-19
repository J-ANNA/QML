import QtQuick 2.0
import "jsscript.js" as Logic

Rectangle {
    id: rect
    width: 60
    height: 60
    gradient: Gradient {
        GradientStop {position: 0.0; color: "yellow"}
        GradientStop {position: 0.33; color: "blue" }
        GradientStop {position: 1.0;
                        color: "aqua" }
    }
    function getRandomNumber() {
        return Math.random()*360;
    }
    Behavior on rotation {
        RotationAnimation {
            direction: RotationAnimation.Clockwise  //顺时针; 逆时针:RotationAnimation.Counterclockwise
        }
    }
    MouseArea {
        anchors.fill: parent
        onClicked: rect.rotation = Logic.getRandomNumber();
    }
}
