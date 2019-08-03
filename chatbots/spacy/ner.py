import spacy
nlp = spacy.load('en_core_web_sm')
my_string = u"Google has its headquarters in Mountain View, California having revenue amounted to 109.65 billion US dollars"
doc = nlp(my_string)
for ent in doc.ents:
    print(ent.text, ent.label_)
my_string = u"Mark Zuckerberg born May 14, 1984 in New York is an American technology entrepreneur and philanthropist best known for co-founding and leading Facebook as its chairman and CEO."
doc = nlp(my_string)
for ent in doc.ents:
    print(ent.text, ent.label_)
my_string = u"I usually wake up at 9:00 AM. 90% of my daytime goes in learning new things."
doc = nlp(my_string)
for ent in doc.ents:
    print(ent.text, ent.label_)
