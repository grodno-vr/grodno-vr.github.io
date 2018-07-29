# [GrodnoVR Demo](https://grodno-vr.github.io)
> :church: Старые фотографии города Гродно в  режиме виртуальной реальности, демо с открытым исходным кодом на основе [ReactVR](https://facebook.github.io/react-vr) библиотеки.

>> Проект находится в разработке, по мере свободного времени мы вносим какие-то изменения и что-то исправляем, многое может не работать на демо.

![Screen 1](./media/screen1.png)
![Screen 2](./media/screen3.png)
![Screen 3](./media/screen2.png)

### Старт проекта

Клонируйте репозиторий и установите все необходимые зависимости (для установки зависимостей вам понадобится [node.js](https://nodejs.org) и [npm](https://www.npmjs.com/)):
```
git clone https://github.com/grodno-vr/grodno-vr.github.io
cd grodno-vr.github.io
npm i
```

После установки выполните команду запуска:
```
npm run start
```

Откройте демо-проект в браузере по следующему адресу:
```
http://localhost:8081/vr
```

![Mobile 1](./media/mobile1.jpg)
![Mobile 2](./media/mobile2.jpg)

Если браузер на вашей платформе поддерживает [WebVR](https://webvr.info), то вы можете перейти в режим стереоизображения посредством нажатия на кнопку "View in VR":

![VR 1](./media/mobile3.jpg)

### Поддержка платформ
Работоспособность сайта проверялась на следующих платформах:
+ Google Cardboard + Samsung Galaxy S7 (Chrome)
+ GearVR + Samsung Galaxy S7 (Oculus App)

Есть проблемы на следующих платформах:
+ Ubuntu 16 + Firefox 60 (64 bit)
+ Смартфоны Huawei (на нескольких моделях в разных браузерах)

### Сборка проекта

```
npm run bundle
```

### ?