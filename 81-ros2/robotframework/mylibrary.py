class MyLibrary:
    def __init__(self):
        self.counter = 0

    def increment_counter(self):
        self.counter += 1

    def decrement_counter(self):
        self.counter -= 1

    def get_counter(self):
        return self.counter