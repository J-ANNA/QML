#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QtQml>
#include <QDateTime>
#include <QTime>
#include <QDebug>
#include <QColor>

#include "colormaker.h"


//导出一个C++对象为QML的属性
int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);
    QQmlApplicationEngine engine;

//    //注册动作一定放在上下文之前，否则不生效                                      //[1]注释掉
//    qmlRegisterType<ColorMaker>("an.qt.ColorMaker",1,0,"ColorMaker");

    //导出一个C++对象为QML的属性
    //setContextProperty():可以为该上下文设置一个全局可见的属性
    engine.rootContext()->setContextProperty("colorMaker",new ColorMaker);

    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    return app.exec();
}
