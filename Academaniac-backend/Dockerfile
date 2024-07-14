FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt /app

#RUN apt-get update && \
#    apt-get install -y --no-install-recommends \
#    build-essential \
#    gcc \
#    && rm -rf /var/lib/apt/lists/*

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_APP=app.py

CMD ["flask", "run", "--host=0.0.0.0"]
