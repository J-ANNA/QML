import QtQuick 2.0
import QtGraphicalEffects 1.0         //图形特效处理库

Rectangle {
    width: animg.width
    height: animg.height
    AnimatedImage {
        id: animg
        source: "anim.gif"
    }
    BrightnessContrast {
        id: bright
        anchors.fill: animg
        source: animg                //源元素
    }
    SequentialAnimation {
        id: imgAnim
        NumberAnimation {
            target: bright
            property: "brightness"
//            from: 1
            to: 0.5
            duration: 3000
        }

        NumberAnimation {
            target: bright
            property: "contrast"
//            from: 1
            to: 0.25
            duration: 2000
        }
    }
    MouseArea {
        anchors.fill: parent
        onClicked:
            imgAnim.running = true
    }
}
