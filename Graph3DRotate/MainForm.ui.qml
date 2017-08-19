import QtQuick 2.5

Rectangle {
    property alias mouseArea: mouseArea

    width: myGraph.width
    height: myGraph.height

    MouseArea {
        id: mouseArea
        anchors.fill: parent
    }

    MyGraph {id:myGraph}

}
