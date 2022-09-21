git clone https://github.com/Badsnus/YANDEX_INTENSIV.git

cd YANDEX_INTENSIV

python -m venv venv


Windows: venv\Scripts\activate.bat 

Linux и MacOS: source venv/bin/activate

pip install -r requirements.txt

.env_example -> .env

python manage.py runserver
