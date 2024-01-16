FROM python:3.8-slim

ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Install libpq-dev and build dependencies for psycopg2
# Then clean up the cache to keep the image size down
RUN apt-get update && \
    apt-get install -y libpq-dev gcc && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD python manage.py makemigrations djangoApp && \
    python manage.py migrate && \
    python manage.py runserver 0.0.0.0:8000
