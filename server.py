from flask import Flask, jsonify, request
from  movieCalc import find_similar_movies
import pandas as pd

app = Flask(__name__)



@app.route('/pesquisar/<string:nome>',methods=['GET'])
def recomendaFilme(nome):
    df = find_similar_movies(nome)
    json_data = df.to_json()
    return (json_data)
       

app.run(port=5000,host='localhost',debug=True)