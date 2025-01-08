from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def welcome():
    return "<html> <h1> welcome to my  first page</h1> </html>"






@app.route('/success/<int:score>')
def result(score):
    if score>50:
        res="pass"
    else:
        res="fail"
    exp={"Score":score,"result":res}
    return render_template('resultfor.html',result=exp)
    


    

if __name__=='__main__':
    app.run(debug=True)
