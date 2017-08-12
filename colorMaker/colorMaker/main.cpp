#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QtQml>
#include <QDateTime>
#include <QTime>
#include <QDebug>
#include <QColor>

#include "colormaker.h"

//在QML中使用C++类和对象
//注册为QML类型

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

    //注册动作一定放在上下文之前，否则不生效
    qmlRegisterType<ColorMaker>("an.qt.ColorMaker",1,0,"ColorMaker");
    QQmlApplicationEngine engine;
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));


    return app.exec();
}
