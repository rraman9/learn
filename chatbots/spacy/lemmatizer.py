import spacy
from spacy.lemmatizer import Lemmatizer
from spacy.lang.en import LEMMA_INDEX, LEMMA_EXC, LEMMA_RULES
lemmatizer = Lemmatizer(LEMMA_INDEX, LEMMA_EXC, LEMMA_RULES)
print(lemmatizer('chuckles', 'NOUN')) # 2nd param is token's part-of-speech tag
print(lemmatizer('blazing', 'NOUN')) # 2nd param is token's part-of-speech tag
print(lemmatizer('responsibilities', 'NOUN')) # 2nd param is token's part-of-speech tag
print(lemmatizer('fastest', 'ADJ'))
