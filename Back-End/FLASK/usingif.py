
from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def welcome():
    return "<html> <h1> welcome to my  first page</h1> </html>"






@app.route('/success/<int:score>')
def result(score):

    return render_template('resultif.html',result=score)
    


    

if __name__=='__main__':
    app.run(debug=True)
