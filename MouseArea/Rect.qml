import QtQuick 2.0

Item {
//    width: 20                        //无作用
//    height: 20
    property alias moveRect: moveRect
    Rectangle {
        x: 100
        y: 100
        width: 50
        height: 50
        color: "yellow"
    }
    Rectangle {                   //后添加在上图层
        id: moveRect
        width: 50
        height: 50
//        x: 50
//        y: 50
        color: "teal"
        MouseArea {
            anchors.fill: parent
            //拖拽属性设置
            drag.target: parent               //对象
            drag.axis: Drag.XandYAxis             //轴 （X轴）
            drag.minimumX: 0
            drag.maximumX: 360 - parent.width
            drag.minimumY: 0
            drag.maximumY: 360 - parent.height
            acceptedButtons:  Qt.LeftButton | Qt.RightButton

            //处理鼠标事件
            onClicked: {
               if(mouse.button == Qt.RightButton)
               {
                    /*设置矩形为蓝色并缩小尺寸*/
                    parent.color = "blue"
                    parent.width -= 10
                   parent.height -= 10
               }
               else if((mouse.button == Qt.LeftButton) && (mouse.modifiers & Qt.ShiftModifier))
               {
                   /*把矩形重新设为蓝绿色并恢复原来的大小*/
                   parent.color = "teal"
                   parent.width = 50
                   parent.height = 50
               }
               else
               {
                   parent.color = "green"
                   parent.width += 5
                   parent.height += 5
               }

            }
        }
    }


}
