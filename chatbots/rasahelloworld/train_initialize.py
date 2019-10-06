from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals
import asyncio
from rasa_core.agent import Agent
from rasa_core.policies.keras_policy import KerasPolicy
from rasa_core.policies.memoization import MemoizationPolicy

if __name__ == '__main__':
    #utils.configure_coloprred_logging(loglevel="DEBUG")

    training_data_file = './data/stories.md'
    model_path = './models/dialogue'

    agent = Agent("horoscope_domain.yml",
                  policies=[MemoizationPolicy(max_history = 2), KerasPolicy(augmentation_factor=50,
            epochs=500,
            batch_size=10,
            validation_split=0.2)])

    loop = asyncio.get_event_loop()
    training_data = loop.run_until_complete(agent.load_data(training_data_file))

    agent.train(training_data)
    agent.persist(model_path)