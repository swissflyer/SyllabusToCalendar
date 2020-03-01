from flask import Flask, escape, request, render_template

from google.cloud import vision
import io

from __future__ import print_function
import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request



app = Flask(__name__, static_folder="templates/static", template_folder="templates")


@app.route('/')
def index():
    return (render_template('index.html'))


@app.route('/api/syllabus', methods=['POST', 'GET'])
def syllabus():
    picture = request.body
    detect_text(picture)

def detect_text(path):
    """Detects text in the file."""

    client = vision.ImageAnnotatorClient()

   # with io.open(path, 'rb') as image_file:
   #     content = image_file.read() #content equals new parameter

    content = path

    image = vision.types.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations
    print('Texts:')

    for text in texts:
        print('\n"{}"'.format(text.description))



    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))

    return "Worked"






@app.route('/api/calendar', methods=['POST'])
def calender():
    calenderInput = request.get_json()



def addEvent():
    creds =


if __name__ == '__main__':
    app.run(debug=True)
