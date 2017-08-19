import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.2
import QtGraphicalEffects 1.0

Item {
    width: 770
    height: 340

    AnimatedImage {
        id: img
        x: 10
        y: 10
        width: 500
        height: 281
        source: "anim.gif"
        fillMode: Image.Stretch         //必须设为"拉伸"模式才能调整尺寸
        clip: true                      //剪辑
    }
    BusyIndicator {
        x: 250; y: 140
        running: img.width < 500 * 0.4
    }

    Desaturate {                   //"饱和度"
        id: desat
        anchors.fill: img
        source: img
    }
    RowLayout {
        anchors.left: img.left
        y: 300
        spacing: 5
        Label {
            text: "尺寸"
        }
        Slider {
            id: sizeSlider
            maximumValue: 1.0
            minimumValue: 0.1
            stepSize: 0.1               //步进值
            value:1.0                   //初始值
        }
        Label {
            text: "彩色"
        }
        Switch {
            id: colorfulSwitch
            checked: true
        }
        Button {
            id: grayValueBtn
            text: "灰度值>>"
        }
        ProgressBar {
            id: progressBar
        }
    }
    ColumnLayout {
        anchors.top: img.top
        x: 510
        spacing: 10
        RowLayout {
            spacing: 5
            Label {
                text: "樱花"
                font.pointSize: 14
                font.bold: true
            }
            SpinBox {
                id: ageSpinBox
                decimals: 0           //精度（小数位）
                value: 16
                minimumValue: 4
                maximumValue: 24
                suffix: "岁"           //单位
                font.pointSize: 14
            }
        }
        Label {
            anchors.horizontalCenter: birthdayCalendar.horizontalCenter
            text: "生日"
            font.pointSize: 14
            font.bold: true
            color: "magenta"         //品红色
        }
        Calendar {
            id: birthdayCalendar
            minimumDate: "1991-09-01"
            visibleYear: 2017 - ageSpinBox.value
            visibleMonth: 8                      //9月
        }
    }
}














