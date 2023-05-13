FROM python:3.9

WORKDIR /app
COPY requirements.txt ./
COPY webdemo ./
RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "server.py" ]