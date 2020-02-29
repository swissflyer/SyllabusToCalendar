from flask import Flask, escape, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

'''
@app.route('/api/syllabus')
def calender():
    return ('syllabus')

@app.route('/api/calendar')
def calender():
    return ('calendar')
'''
if __name__ == '__main__':
    app.run(debug=True)
