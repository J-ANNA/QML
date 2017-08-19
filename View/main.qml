import QtQuick 2.5
import QtQuick.Controls 1.4
import QtQuick.Dialogs 1.2

ApplicationWindow {
    visible: true
    width: 780
    height: 320
    title: qsTr("导航视图")

    MainForm {
        anchors.fill: parent
        tableView.onClicked: {
            tabView.currentIndex = tableView.currentRow;
            scorlimg.source = "img/picture/" + tabView.getTab(tabView.currentIndex).title + ".png";
         }
        tabView.onCurrentIndexChanged: {
            tableView.selection.clear();                        //取消选择所有行
            tableView.selection.select(tabView.currentIndex);   //重新选择行
            scrolimg.source = "img/picture/" + tabView.getTab(tabView.currentIndex).title + ".png";
        }
    }

}
