from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def welcome():
    return "<html> <h1> welcome to my  first page</h1> </html>"

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')
@app.route('/form',methods=['POST','GET'])
def form():
    if request.method=='POST':
        name=request.form['name']
        return f"hello {name}"
    return render_template('form.html')
@app.route('/submit',methods=['POST','GET'])
def submit():
    if request.method=='POST':
        name=request.form['name']
        return f"hello {name}"
    return render_template('form.html')

if __name__=='__main__':
    app.run(debug=True)
