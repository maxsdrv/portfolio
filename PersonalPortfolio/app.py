from flask import Flask, request, jsonify
import smtplib
from email.message import EmailMessage
import os

app = Flask(__name__, static_url_path='/Public')

@app.route('/index')
def index():
    return app.send_static_file('index.html')