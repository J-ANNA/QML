import QtQuick 2.5

Rectangle {
    id: rect
    width: 240
    height: 300
    color: "grey"
    SequentialAnimation on x {
        id: rectAnim
        running: false
        loops: Animation.Infinite
        NumberAnimation {
            from: 0; to: 640-rect.width; duration: 8000; easing.type: Easing.InOutQuad
        }
        NumberAnimation {
            from: 640-rect.width; to: 0; duration: 8000; easing.type: Easing.InOutQuad
        }
        PauseAnimation {                 //停顿
            duration: 2000
        }
    }
    Image {
        id: img
        source: "picture/down.png"
        scale: 0.01
        opacity: 0.0
        rotation: 45
        x: 0
        y: 0

    }
    SequentialAnimation {
        id: imgAnim
        loops: Animation.Infinite
        ParallelAnimation {
            ScaleAnimator { target: img; to: 0.3; duration: 8000 }
            OpacityAnimator { target: img; to: 1; duration: 8000 }
            RotationAnimation { target: img; to: 360; duration: 8000 }
            NumberAnimation {
                target: img
                property: "y"
                to: rect.height - img.height
                easing.type: Easing.OutBounce
                duration: 8000
            }
        }
        ParallelAnimation {
            ScaleAnimator { target: img; from: 0.3;  to: 0.01; duration: 8000 }
            OpacityAnimator { target: img; from: 1; to: 0; duration: 8000 }
            RotationAnimation { target: img; from:360; to: 45; duration: 8000 }
            NumberAnimation {
                target: img
                property: "y"
                from: rect.height - img.height
                to: 0
                easing.type: Easing.OutBounce
                duration: 8000
            }
        }
        PauseAnimation {duration: 2000}
    }

    MouseArea {
        anchors.fill: parent
        onClicked: {
            rectAnim.running = true
            imgAnim.running = true
        }
    }
}











