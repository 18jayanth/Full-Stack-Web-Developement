
from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def welcome():
    return "<html> <h1> welcome to my  first page</h1> </html>"






    

@app.route('/for/<int:score>')
def resultres(score):
    
    if score>50:
        res="pass"
    else:
        res="fail"
    exp={"score":score,"res":res}
    return render_template('result1.html',result=exp)
    

if __name__=='__main__':
    app.run(debug=True)
