import json
 
f=open("file.json")

data=f.read()
dict_obj = json.loads(data)
print(type(dict_obj))
person_data={
  "name": "Ken",
  "age": 45,
  "married": True,
  "children": ("Alice","Bob"),
  "pets": ['Dog'],
  "cars": [
    {"model": "Audi A1", "mpg": 15.1},
    {"model": "Zeep Compass", "mpg": 18.1}
  ]
}
with open('json_file.json', "r") as file_write:
    # write json data into file
    print(file_write.read())