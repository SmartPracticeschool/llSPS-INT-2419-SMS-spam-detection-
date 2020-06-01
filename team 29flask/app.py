# -*- coding: utf-8 -*-
"""
Created on Sat May 30 09:17:52 2020

@author: sai seravan
"""

from flask import Flask, render_template, request 
import pickle
from keras.models import load_model
import tensorflow as tf

app = Flask(__name__)

#pickle.dump(mr,open('/Users/tariqahmed/SMS Spam Detection/Flask/smsmodel.h5','wb'))
#model = pickle.load(open('/Users/tariqahmed/SMS Spam Detection/Flask/sms-model.h5','rb'))

cv = pickle.load(open('count_vec.pkl','rb'))
model = load_model('smsmodel.h5')
graph = tf.get_default_graph()

@app.route('/')
def main():
    return render_template('home.html')

@app.route('/login', methods = ['POST'])
def login():
    msg = request.form['message']
    c = cv.transform([msg]).toarray()
    with graph.as_default():
        p = model.predict_classes(c)
    if p[0][0] == 0:
        output = "NOT SPAM"
    elif p[0][0] == 1:
        output = "SPAM"
    return render_template('home.html', Out = output )

    
if __name__ == '__main__':
    app.run(debug = False)
    

