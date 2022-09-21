Творческое задание Яндекс Интенсив
---
---

### Инструкция по установке

**Должен быть установлен python**

*для linux вместо python -> python3.X, где 3.X - версия python*

#### 1)Клонируем репозиторий

    git clone https://github.com/Badsnus/YANDEX_INTENSIV.git

#### 2)Создаем виртуальное окружение и активируем его

    python -m venv venv

    Windows: venv\Scripts\activate.bat
    Linux и MacOS: source venv/bin/activate

#### 3) Устанавливаем зависимости

    pip install -r requirements.txt

#### 4)Заходим в директорию проекта

    cd YANDEX_INTENSIV

#### 5) .env_example -> .env

    В YANDEX_INTENSIV есть файл .env_example его нужно переименовать в .env 

#### 6) Запускам проект

    python manage.py runserver

