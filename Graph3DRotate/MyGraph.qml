import QtQuick 2.0

Rectangle {
    width: animg.width
    height:animg.height
    transform: Rotation {
        origin.x: animg.width/2                    //旋转点
        origin.y: animg.height/2
        axis {
            x: 0
            y: 1   //绕y轴转动
            z: 1
        }
        NumberAnimation on angle {              //定义角度angle上的动画
            from: 0
            to: 360
            duration: 10000
            loops: Animation.Infinite
        }
    }
    AnimatedImage {
        id:animg
        source: "anim.gif"
    }
}
