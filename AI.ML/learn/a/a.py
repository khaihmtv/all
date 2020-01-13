import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

data=pd.read_csv('data.csv',header=None)
#print(data.values)
true_x=[]
true_y=[]
false_x=[]
false_y=[]

for i in data.values:
    if i[2]==1.0:
        true_x.append(i[0])
        true_y.append(i[1])
    else:
        false_x.append(i[0])
        false_y.append(i[1])

plt.scatter(true_x,true_y,marker='o', c='b')
plt.scatter(false_x,false_y,marker='s', c='r')
#plt.show()
print(true_x+false_x)
def sigmoid(z):
    return 1.0/(1+np.exp(-z))
def phan_chia(p):
    if p>=0.5:
        return 1
    else:
        return 0
def predict(feature,weight):
    z=np.dot(feature,weight)
    return sigmoid(z)
def cos_function(feature,label,weight):
    n=len(label)
    predictions=predict(feature,weight)
    cost1=-label*np.log(predictions)
    cost2=-(1-label)*np.log(1-predictions)
    cost=cost1+cost2
    return cost.sum()/n
def update_weight(feature,label,weight,learning_rate):
    n=len(label)
    predictions=predict(feature,weight)
    gd=np.dot(feature.T,(predictions-label))
    gd=gd/n
    gd=gd*learning_rate
    weight=weight-gd
    return weight
def train(feature,label,weight,lerning_rate,iter):
    cost_his=[]
    for i in range(iter):
        weight=update_weight(feature,label,weight,learning_rate)
        cost=cos_function(feature,label,weight)
        cost_his.append(cost)
    return weight,cost_his
