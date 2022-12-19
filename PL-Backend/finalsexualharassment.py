## https://tanmoyblogs.medium.com/more-complicated-model-means-better-accuracy-not-really-7038d4653c1f

import warnings
warnings.filterwarnings("ignore")
import pandas as pd
import re
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from skmultilearn.problem_transform import BinaryRelevance
from sklearn.metrics import f1_score
from sklearn.metrics import hamming_loss
import joblib

################################UTILITY FUNCTIONS##############################################################

##PREPROCESS THE DATA
def preprocess(data):
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
    ps = PorterStemmer()
    stemmed_data = []
    for sentence in data_corpus:
        stemmed_data.append(" ".join([ps.stem(i) for i in sentence.split()]))
    return stemmed_data


def predict(X):
    """ function 1 is a prediction function

        It takes 1 argument
        X : A list of raw data or a raw string

        returns the prediction in binary format like [1,0,0] and also prints the inference of the predicction"""

    if type(X) == str:
        X = [X]
    # preprocessing all data
    input_query = []
    for i in X:
        input_query.append(preprocess(i))

    input_query = stem(input_query)

    # Vectorising the data unigram , bigram , trigram , maximum occurance 5 times

    vector = vectoriser.transform(input_query)

    # predicting using pretrained model

    pred = model.predict(vector)

    #     printing outputs
    for i in pred:
        result = []
        if i[0] == 1:
            result.append("Commenting ")
        if i[1] == 1:
            result.append("Staring ")
        if i[2] == 1:
            result.append("Groping ")
        if len(result) == 0:
            result.append('Cannot be Classified')
        print(' , '.join(result))

    return pred

#########################################FUNCTION ENDING##############################################

## LOADING DATA FROM CSV FILE
train = pd.read_csv(r"train.csv")
test = pd.read_csv(r"test.csv")

## TRAINING DATA
xtrain = train['Description'].values
ytrain = train[['Commenting' , 'Ogling/Facial Expressions/Staring' ,'Touching /Groping']].values

## TESTING DATA
xtest = test['Description'].values
ytest = test[['Commenting' , 'Ogling/Facial Expressions/Staring' ,'Touching /Groping']].values

train = []
test = []

for desc in xtrain:
    train.append(preprocess(desc))

for desc in xtest:
    test.append(preprocess(desc))

stem_train = stem(train)
stem_test = stem(test)

vectoriser = TfidfVectorizer(stop_words='english', ngram_range=(1, 3), min_df=5)

train_bigram_trigrams = vectoriser.fit_transform(stem_train)
val_bigram_trigrams = vectoriser.transform(stem_test)

xtrain = train_bigram_trigrams
xtest = val_bigram_trigrams

##USING RANDOM FOREST CLASSIFIER
clf = RandomForestClassifier(n_estimators=100, n_jobs=-1)
clf.fit(xtrain, ytrain)

pred = clf.predict(xtest)

print('F1 score of the model is {}'.format(f1_score(ytest, pred, average='micro')))
print('=' * 50)
print('Hamming loss of the model is {}'.format(hamming_loss(ytest, pred)))

## DUMP MODEL INTO PICKLE FILE
joblib.dump(vectoriser, 'vectoriser1.pkl')
joblib.dump(clf, 'model1.pkl')

##LOAD PICKLE FILE FOR PREDICTIONS
model = joblib.load(r"model1.pkl")
vectoriser = joblib.load(r"vectoriser1.pkl")


predict("hello")

predict("he is staring at me")

predict("he said bad words to me")