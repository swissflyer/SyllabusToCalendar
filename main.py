from flask import Flask, escape, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return ('Hello Word!')


@app.route('/api/syllabus', methods=['POST'])
def syllabus():
    syllabusInput = request.get_json()

@app.route('/api/calendar', methods=['POST'])
def calender():
    calendInput = request.get_json()

if __name__ == '__main__':
    app.run(debug=True)
