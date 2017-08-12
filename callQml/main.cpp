#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQuickItem>
#include <QMetaObject>
#include <QDebug>
#include <QColor>
#include <QVariant>
#include <QQuickView>
#include <QQuickWindow>

#include "changecolor.h"

//在C++中使用QML对象

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

//    QQmlApplicationEngine engine;
//    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

//    QQuickItem *rootItem = engine.rootObjects();  //获取作为根元素的Window(Rectangle),然后把它交给ChangeQmlColor对象，该对象会内部通过一个

    QQuickView view;
//    QQuickWindow view;
    view.setSource(QUrl(QStringLiteral("qrc:/main.qml")));
    view.show();
    QQuickItem *rootItem = view.rootObject();

    new ChangeColor(rootItem);                //定时器，一秒改变一次传入对象的颜色

    QObject *quitButton = rootItem->findChild<QObject*>("quitButton");   //查找子对象
    if(quitButton)
    {
        QObject::connect(quitButton,SIGNAL(clicked()),&app,SLOT(quit()));   //连接信号与槽
    }

    QObject *textLabel = rootItem->findChild<QObject*>("textLabel");
    if(textLabel)
    {
        //1.failed call 没有名为setText的槽或者可调用的方法
//        bool bRet = QMetaObject::invokeMethod(textLabel,"setText",Q_ARG(QString,"world hello"));
//        qDebug()<<"call setText return - "<<bRet;
        textLabel->setProperty("color",QColor::fromRgb(255,0,0));
        bool bRet = QMetaObject::invokeMethod(textLabel,"doLayout");
        qDebug()<<"call doLayout return -"<<bRet;
    }

    return app.exec();
}
