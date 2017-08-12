#ifndef CHANGECOLOR_H
#define CHANGECOLOR_H

#include <QObject>
#include <QTimer>

class ChangeColor : public QObject
{
    Q_OBJECT
public:
    ChangeColor(QObject *target, QObject *parent = 0);
    ~ChangeColor();
signals:

public slots:

protected slots:
    void onTimeout();

private:
    QTimer m_timer;
    QObject *m_target;
};

#endif // CHANGECOLOR_H
