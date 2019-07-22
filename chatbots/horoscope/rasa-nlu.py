from rasa_nlu.training_data import load_data
from rasa_nlu.model import Trainer
from rasa_nlu import config
from rasa_nlu.model import Interpreter
def train_horoscopebot(data_json, config_file, model_dir):
    training_data = load_data(data_json)
    trainer = Trainer(config.load(config_file))
    trainer.train(training_data)
    model_directory = trainer.persist(model_dir, fixed_model_name = 'horoscopebot')
def predict_intent(text):
    interpreter = Interpreter.load('./models/nlu/default/horoscopebot')
    print(interpreter.parse(text))

predict_intent("I am looking for my horoscope for today. I am wondering if you can tell me that.")
