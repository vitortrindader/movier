import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import re

movies = pd.read_csv("movies.csv") # Tabela de filmes já limpa
vectorizer = TfidfVectorizer(ngram_range=(1,2))
tfidf = vectorizer.fit_transform(movies["clean_title"].values.astype('U')) 

# Basicamente iremos ver o título  e remover qualquer caracter que não seja um digito, uma letra ou um espaço.
def clean_title(title):
    return re.sub("[^a-zA-Z0-9 ]","",title)

def search(title):
    title = clean_title(title) # Limpa o titulo
    query_vec = vectorizer.transform([title]) # transforma o titulo em vetor
    similarity = cosine_similarity(query_vec, tfidf).flatten() # Encontra a similariedade com cada titulo
    indices = np.argpartition(similarity, -5)[-5:] # Encontra os indices dos 5 títulos mais semelhantes
    results = movies.iloc[indices].iloc[::-1] # Encontra os titulos desses indices
    
    return (results)

def find_similar_movies(title):
    results = search(title)
    # Encontrando usuário que gostam do mesmo filme
    ratings = pd.read_csv("ratings.csv")

    movie_id = results.iloc[0]["movieId"]
    movie = movies[movies["movieId"] == movie_id]
    similar_users = ratings[(ratings["movieId"] == movie_id) & (ratings["rating"] > 4)]["userId"].unique() # Aqui encontraremos na tabela de ratings, usuarrios que deram notas para um determinado filme
                                                                                                        # com um Movie ID que queremos e que ele deu uma nota de 5 estrelas.


    #Criando uma Função de Recomendação

    similar_users = ratings[(ratings["movieId"] == movie_id) & (ratings["rating"] > 4)]["userId"].unique()
    similar_user_recs = ratings[(ratings["userId"].isin(similar_users)) & (ratings["rating"] > 4)]["movieId"]
    similar_user_recs = similar_user_recs.value_counts() / len(similar_users)

    similar_user_recs = similar_user_recs[similar_user_recs > .10]
    all_users = ratings[(ratings["movieId"].isin(similar_user_recs.index)) & (ratings["rating"] > 4)]
    all_user_recs = all_users["movieId"].value_counts() / len(all_users["userId"].unique())
    rec_percentages = pd.concat([similar_user_recs, all_user_recs], axis=1)
    rec_percentages.columns = ["similar", "all"]
    
    rec_percentages["score"] = rec_percentages["similar"] / rec_percentages["all"]
    rec_percentages = rec_percentages.sort_values("score", ascending=False)
    return rec_percentages.head(10).merge(movies, left_index=True, right_on="movieId")[["score", "title", "genres"]]



