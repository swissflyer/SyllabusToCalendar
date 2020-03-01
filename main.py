from flask import Flask, escape, request, render_template

app = Flask(__name__, static_folder="templates/static", template_folder="templates")

@app.route('/')
def index():
    return (render_template('index.html'))


@app.route('/api/syllabus', methods=['POST', 'GET'])
def syllabus():
    syllabusInput = request.get_json()

@app.route('/api/calendar', methods=['POST'])
def calender():
    calendInput = request.get_json()

if __name__ == '__main__':
    app.run(debug=True)
