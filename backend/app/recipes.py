import json

class Recipes:
    JSON_FILE = "data.json"

    @classmethod
    def load(cls):
        with open(cls.JSON_FILE, "r") as recipesFile:
            return json.load(recipesFile).get("recipes", [])

    @classmethod
    def write(cls, recipes: list):
        with open(cls.JSON_FILE, "w") as recipesFile:
            json.dump({"recipes": recipes}, recipesFile, indent=2)

    @classmethod
    def get_by_name(cls, recipes: list, name: str):
        return next(filter(lambda rec: rec.get("name") == name, recipes), None)

    @classmethod
    def update_recipe(cls, recipe: dict, new_data: dict):
        for key, val in new_data.items():
            recipe[key] = val