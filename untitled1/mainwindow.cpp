#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QtMath>
#include <QDebug>
//#include "avr/dtostrf.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    int b = 0;
   float a;
   a = (float)b;
   if(a == 0.00)
       qDebug()<<"YES";


}

MainWindow::~MainWindow()
{
    delete ui;
}
