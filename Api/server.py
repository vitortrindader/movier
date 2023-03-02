from flask import Flask, jsonify, request
from  movieCalc import find_similar_movies
import pandas as pd

app = Flask(__name__)



@app.route('/pesquisar/<string:nome>',methods=['GET'])
def recomendaFilme(nome):
    df = find_similar_movies(nome)
    json_data = df.values.tolist()

    response = jsonify(json_data)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return (response)
       

app.run(port=5000,host='localhost',debug=True)

