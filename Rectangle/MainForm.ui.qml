import QtQuick 2.5

Rectangle {
    property alias mouseArea: mouseArea         //别名  用于外部qml访问
    property alias topRect: topRect
    property alias bigRect: bigRect

    width: 360
    height: 360

    MouseArea {
        id: mouseArea
        anchors.fill: parent
    }

    /*添加定义两个Rectangle对象*/
    Rectangle {
        id: bigRect           //标识符
        rotation: 45          //旋转
        x: 40                 //X 方向的坐标
        y: 60                 //Y 方向的坐标
        width: 100            //宽度
        height: 100           //高度
        color: "red"          //颜色
        anchors.centerIn: parent   //位置
    }
    Rectangle {
        id: topRect
        opacity: 0.6                  //透明度
        scale: 0.6
        x: 135
        y: 60
        width: 100
        height: 100
        radius: 8
        gradient: Gradient{
            GradientStop{ position: 0.0; color: "#ffffff" }
            GradientStop{ position: 1.0; color: "teal" }
        }
        border {width: 3;color: "blue" }
        anchors.centerIn: parent
    }
}
