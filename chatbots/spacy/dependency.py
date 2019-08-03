import spacy
from spacy import displacy


nlp = spacy.load('en_core_web_sm')
doc = nlp(u'Book me a flight from Bangalore to Goa')
blr, goa = doc[5], doc[7]
print(list(blr.ancestors))
doc = nlp(u'Book a table at the restaurant and the taxi to the hotel')
tasks = doc[2], doc[8]  # (table, taxi)
tasks_target = doc[5], doc[11]  # (restaurant, hotel)
for task in tasks_target:
    for tok in task.ancestors:
        if tok in tasks:
            print("Booking of {} belongs to {}".format(tok, task))
            break
# displacy.serve(doc, style="dep")
doc = nlp(u"What are some places to visit in Berlin and stay in Lubeck")
places = [doc[7], doc[11]] #[Berlin, Lubeck]
actions = [doc[5], doc[9]] #[visit, stay]

for place in places:
    for tok in place.ancestors:
        if tok in actions:
            print("User is referring {} to {}".format(place, tok))
            break
