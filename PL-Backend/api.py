from flask import Flask, request, session,jsonify
from flask_cors import CORS, cross_origin
import joblib
import re
from nltk.stem import PorterStemmer

#initialize Flask App
app=Flask(__name__)
cors = CORS(app)
app.secret_key = "super secret key"

#Intial Route
@app.route("/")
def index():
    return "<h1><center>Welcome to REST API<center/></h1>"
def preprocess(data):
    """This function takes a string as an input and cleans the text

       Does the following:

       1. Making all the data to lowercase
       2. Decontractions - you've -> you have
       3. Removing words that is of length 2 or less
       4. Removes all the non alphabets i.e. comma , . - _ numbers
       5. Removing all extra spaces
       6. Removing all stopwords
       7. Removing all words whose length < 3 and > 15.

       """

    stopwords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", \
                 "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', \
                 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', \
                 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', \
                 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', \
                 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', \
                 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before',
                 'after', \
                 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
                 'further', \
                 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
                 'more', \
                 'most', 'other', 'some', 'such', 'only', 'own', 'same', 'so', 'than', 'too', 'very', \
                 's', 't', 'can', 'will', 'just', 'don', "don't"]

    data = data.lower()  # Making all the data to lowercase

    data = re.sub(r"n\'t", " not", data)  # decontraction
    data = re.sub(r"\'re", " are", data)  # decontraction
    data = re.sub(r"\'s", " is", data)  # decontraction
    data = re.sub(r"\'d", " would", data)  # decontraction
    data = re.sub(r"\'ll", " will", data)  # decontraction
    data = re.sub(r"\'t", " not", data)  # decontraction
    data = re.sub(r"\'ve", " have", data)  # decontraction
    data = re.sub(r"\'m", " am", data)  # decontraction

    d = data.split()
    d.append('0')
    for index, i in enumerate(d):
        if len(i) <= 2:  # removing words that is of length 2 or less
            d[index] = '0'
    data = ' '.join(d)

    data = re.sub('[^a-z ]', ' ', data)  # removing all the non alphabets i.e. comma , . - _ numbers
    data = re.sub("\s+", ' ', data)  # removing all extra spaces
    data = data.strip()  # removing spaces at the end

    data = ' '.join([i for i in data.split() if i not in stopwords])  # removing all stopwords
    data = ' '.join(
        [w for w in data.split() if len(w) > 3 and len(w) < 15])  # removing all words whose length < 3 and > 15.

    return data


def stem(data_corpus):
    """ Takes a list of sentences as input

        Uses Porter Stemmer to stem the stentences

        Ex: looking look looked -> look look look

    """
    ps = PorterStemmer()
    stemmed_data = []
    for sentence in data_corpus:
        stemmed_data.append(" ".join([ps.stem(i) for i in sentence.split()]))
    return stemmed_data


@app.route('/text-prediction',methods=['POST'])
def text_prediction():
    if request.method == 'POST':

        data = request.json['story']
        print(data)

        model = joblib.load('model1.pkl')
        vectoriser = joblib.load('vectoriser1.pkl')
        preprocessed_text = preprocess(data)


        # stemming the preprocessed text
        stemmed_text = stem([preprocessed_text])

        # Vectorising the data
        vector = vectoriser.transform(stemmed_text)

        # predicting the output of the text in the form [0,0,1]
        pred = model.predict(vector)

        for i in pred:
            result = []
            if i[0] == 1:
                result.append("Commenting ")
            if i[1] == 1:
                result.append("Staring ")
            if i[2] == 1:
                result.append("Groping ")
            if len(result) == 0:
                result.append("Unable to classify")

        print(result[0])
        result1 = {
                        "error": "",
                        "all_ok": True,
                        "status": 200,
                        "data":result[0]
                    }

        return jsonify(result1)

if __name__=='__main__':
    app.debug=True
    app.run()
