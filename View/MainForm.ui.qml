import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Layouts 1.2

Item {
    width: 780
    height: 320

    property alias tableView: tableView
    property alias tabView: tabView
    property alias scrolimg: scrolimg

    SplitView {
        anchors.fill: parent
        orientation: Qt.Horizontal        //方向
        TableView {
            id: tableView
            width: 300
            TableViewColumn {
                role: "title"
                title: "名称"
                horizontalAlignment: Text.AlignHCenter       //列表项文字居中
                width: 100
            }
            TableViewColumn {
                role: "author"
                title: "作者"
                horizontalAlignment: Text.AlignHCenter
                width: 200
            }
            model: libraryModel         //绑定模型
        }
        TabView {
            id: tabView
            width: 215; height: 300
            Tab {
                title: "down"
                Image {
                    source: "img/picture/down.png"
                }
            }
            Tab {
                title: "up"
                Image {
                    source: "img/picture/up.png"
                }
            }
            Tab {
                title: "down"
                Image {
                    source: "img/picture/down.png"
                }
            }

        }
        ScrollView {
            Image {
                id: scrolimg
                source: "img/picture/down.png"
            }
        }
    }
    ListModel {
        id: libraryModel
        ListElement {                   //定义列表项
            title: "down"
            author: "作者1"
        }
        ListElement {
            title: "up"
            author: "作者2"
        }
        ListElement {
            title: "down"
            author: "作者3"
        }
    }

}














