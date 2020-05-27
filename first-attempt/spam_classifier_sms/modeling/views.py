from __future__ import unicode_literals
from django.shortcuts import render
import os
import numpy as np
import pandas as pd
from django.http import JsonResponse
from joblib import load,dump
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC




CURRENT_DIR = os.path.dirname(__file__)
model_file = os.path.join(CURRENT_DIR, 'model.file')
model = load(model_file)


data_file = os.path.join(CURRENT_DIR,"spam.csv")
df = pd.read_csv(data_file, encoding='ISO-8859-1')
df = df.drop(["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis=1)
df.columns = ['labels', 'data']

df['b_labels'] = df['labels'].map({'ham': 0, 'spam': 1})
Y = df['b_labels'].values


df_train, df_test, Ytrain, Ytest = train_test_split(df['data'], Y, test_size=0.33)

tfidf = TfidfVectorizer(decode_error='ignore')

Xtrain = tfidf.fit_transform(df_train)
Xtest = tfidf.transform(df_test)

model = MultinomialNB()
model.fit(Xtrain, Ytrain)
print("train score:", model.score(Xtrain, Ytrain))
print("test score:", model.score(Xtest, Ytest))

# dump(model,os.path.join(CURRENT_DIR, 'model.file'))


# Create your views here.
def api_sms_spam_pred(request):
    print("train score:", model.score(Xtrain, Ytrain))
    print("test score:", model.score(Xtest, Ytest))
    text_to_test = request.GET['review']
    print("----------------------------------------------------------------")
    print(text_to_test)
    df_for_test = pd.DataFrame(data={"data":[text_to_test]})
    print("----------------------------------------------------------------")
    print(df_for_test.head())
    print("----------------------------------------------------------------")
    print(df_for_test["data"])
    X_for_test_final = tfidf.transform(df_for_test["data"])
    result_for_test = model.predict(X_for_test_final)
    print("----------------------------------------------------------------")
    print(result_for_test[0])
    result = 'Spam' if result_for_test[0] else 'Not a spam'
    return (JsonResponse(result, safe=False))

