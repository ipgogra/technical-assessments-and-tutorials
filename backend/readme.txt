about:
The goal of this practice assessment is to write a simple JSON API

used the following json file data.json as data source:

data.json (can be found in app folder)

{
  "recipes": [
    {
      "name": "scrambledEggs",
      "ingredients": [
        "1 tsp oil",
        "2 eggs",
        "salt"
      ],
      "instructions": [
        "Beat eggs with salt",
        "Heat oil in pan",
        "Add eggs to pan when hot",
        "Gather eggs into curds, remove when cooked",
        "Salt to taste and enjoy"
      ]
    },
    {
      "name": "garlicPasta",
      "ingredients": [
        "500mL water",
        "100g spaghetti",
        "25mL olive oil",
        "4 cloves garlic",
        "Salt"
      ],
      "instructions": [
        "Heat garlic in olive oil",
        "Boil water in pot",
        "Add pasta to boiling water",
        "Remove pasta from water and mix with garlic olive oil",
        "Salt to taste and enjoy"
      ]
    },
    {
      "name": "chai",
      "ingredients": [
        "400mL water",
        "100mL milk",
        "5g chai masala",
        "2 tea bags or 20 g loose tea leaves"
      ],
      "instructions": [
        "Heat water until 80 C",
        "Add milk, heat until 80 C",
        "Add tea leaves/tea bags, chai masala; mix and steep for 3-4 minutes",
        "Remove mixture from heat; strain and enjoy"
      ]
    }
  ]
}

requirements:
appdirs==1.4.4
black==21.7b0
click==8.0.1
Flask==2.0.1
itsdangerous==2.0.1
Jinja2==3.0.1
MarkupSafe==2.0.1
mypy-extensions==0.4.3
pathspec==0.9.0
regex==2021.8.3
tomli==1.2.1
Werkzeug==2.0.1