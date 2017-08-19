import QtQuick 2.4

Item {
    width: 400
    height: 400
    Text {
        x: 60
        y:100
        color: "green"
        font.family: "Helvetica"
        font.pointSize: 24
        text: "hello Qt Quick!"
    }

    Text {
        x: 60
        y: 140
        color: "aqua"
        font.family: "宋体"
        font.pointSize: 14
        text: "<b>Hello</b><i>Qt Quick!</i>"            //<b>:加粗;<i>:倾斜
    }

    Text {
        x: 60
        y: 180
        color: "teal"
        font.family: "Calibri"
        font.pointSize: 30
//        style: Text.Outline;styleColor: "yellow"
//        style: Text.Normal;styleColor: "yellow"
        style: Text.Sunken;styleColor: "red"
        text: "Hello Qt Quick!"
    }

    Text {
        x: 60
        y: 220
        width: 200
        color: "green"
        font.family: "helvetica"
        font.pointSize: 24
        horizontalAlignment: Text.AlignLeft
        verticalAlignment: Text.AlignTop
        elide: Text.ElideMiddle          //需先设置width; Text.ElideLeft：从左边省略;  Text.ElideRight:右边; Text.ElideMiddle 中间
        text: "Hello Qt Quick!"
    }

    Text {
        x: 60
        y: 260
        width: 200
        color: "teal"
        font.family: "helvetica"
        font.pointSize: 24
        horizontalAlignment: Text.AlignLeft
        wrapMode: Text.WordWrap       //设定width后，换行.Text.WordWrap:完整单词后换行;Text.WrapAnywhere:只要达到边界就换行（即使在单词中间）
        text: "hello qt quick!"
    }

}
