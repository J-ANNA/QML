import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.2

Item {
    width: 640
    height: 480

    property alias name: name
    property alias age: age
    property alias sex: sexGroup
    property alias spec: speCBox
    property alias hobby: hobbyGrid
    property alias submit: submitBtn
    property alias details: stuInfoText

    RowLayout {
        x: 50
        y: 35
        spacing: 10
        ColumnLayout {
            spacing: 8
            RowLayout {
                spacing: 0
                Label {
                    text: "姓名"
                }
                TextField {
                    id: name
                    placeholderText: qsTr("请输入...")   //引导语：文本内容为空时显示
                    focus: true
                }
            }
            RowLayout {
                spacing: 0
                Label {
                    text: "年龄"
                }
                TextField {
                    id: age
                    validator: IntValidator {bottom: 16; top: 26;}  //验证器：IntValidator; DoubleValidator;RegExpValidator
                }
            }
            GroupBox {
                id: sexBox
                title: qsTr("性别")
                Layout.fillWidth: true       //组合框在允许的约束范围尽可能宽
                RowLayout {
                    ExclusiveGroup { id: sexGroup }
                    RadioButton {
                        text: qsTr("男")
                        checked: true
                        /*指定单选按钮所属的ExclusiveGroup;ExclusiveGroup仅支持Action作为其子元素;
                          所以其他类型对象需要特别指派exclusiveGroup属性*/
                        exclusiveGroup: sexGroup
                        Layout.minimumWidth: 65
                    }
                    RadioButton {
                        text: qsTr("女")
                        exclusiveGroup: sexGroup
                        Layout.minimumWidth: 65
                    }
                }
            }
            RowLayout {
                spacing: 0
                Label {
                    text: "专业"
                }
                ComboBox {
                    id: speCBox
                    width:200
                    Layout.fillWidth: true
                    currentIndex: 0
                    model: ListModel {
                        ListElement { text: "计算机" }
                        ListElement { text: "通信工程" }
                        ListElement { text: "信息网络" }
                    }
                    /*model: ["计算机","通信工程","信息网络"]*/
                }
            }
            GroupBox {
                id: hobbyBox
                title: qsTr("爱好")
                Layout.fillWidth: true
                GridLayout {
                    id: hobbyGrid
                    columns: 3
                    CheckBox {
                        text: qsTr("旅游")
                        checked: true
                    }
                    CheckBox {
                        text: qsTr("游泳")
                        checked: true
                    }
                    CheckBox {
                        text: qsTr("篮球")
                    }
                    CheckBox {
                        text: qsTr("唱歌")
                    }
                    CheckBox {
                        text: qsTr("舞蹈")
                    }
                    CheckBox {
                        text: qsTr("网购")
                    }
                    CheckBox {
                        text: qsTr("看电视")
                        checked: true
                    }
                    CheckBox {
                        text: qsTr("其他")
                        checked: true
                    }
                }
            }
            Button {
                id: submitBtn
                anchors.right: hobbyBox.right
                text: "提交"
            }
        }

        ColumnLayout {
            Layout.alignment: Qt.AlignTop   //使"基本信息"文本区与表单的顶端对齐
            Label {
                text: "基本信息"
                font.pointSize: 15
                font.bold: true
            }
            TextArea {
                id: stuInfoText
                Layout.fillHeight: true
                width: 240
                font.pointSize: 14
                text: "学生个人资料..."
            }
        }
    }
}
