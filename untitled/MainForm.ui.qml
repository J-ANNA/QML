import QtQuick 2.5

Rectangle {
    property alias mouseArea: mouseArea
    property alias image: image

    width: 360
    height: 360

    MouseArea {
        id: mouseArea
        anchors.fill: parent
    }

    Image {
        id: image
        x: 100
        y: 100
        width: 80
        height: 80
        source: "down.png"
        fillMode: Image.PreserveAspectCrop
        clip: true                   //避免所要渲染的图片超出元素范围
        /*fillMode: 设置图片填充模式
          Image.Stretch   拉伸
          Image.PreserveAspectFit  等比缩放
          Image.PreserveAspectCrop  等比缩放  最大化填充 必要时裁剪
          Image.Till   平铺
          Image.TileVertically 垂直平铺
          Image.TileHorizontally 水平平铺
          Image.Pad 保持图片原样不变化*/
    }

}
