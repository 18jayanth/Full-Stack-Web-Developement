from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def welcome():
    return "<html> <h1> welcome to my  first page</h1> </html>"


@app.route('/success/<int:marks>')
def success(marks):
    return "the marks is "+str(marks)
@app.route('/result/<int:marks>')
def result(marks):
    if marks>50:
        res="passed"
    else:
        res="failed"
    return render_template('result.html',result=res)
    

if __name__=='__main__':
    app.run(debug=True)
