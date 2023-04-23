from datetime import date

class MyLibrary:
    def __init__(self):
        self.counter = 0

    def greeting(self, name):
        return f"Hello, {name}!"        
        
    def increment_counter(self):
        self.counter += 1

    def decrement_counter(self):
        self.counter -= 1

    def get_counter(self):
        return self.counter

    def get_current_date(self):
        return date.today()
