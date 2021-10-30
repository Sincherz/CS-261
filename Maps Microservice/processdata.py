# Importing the pandas package.
import pandas as pd

def processdata():    # Loading and reading the CSV file.
    data = pd.read_csv('bar_list.csv', delimiter = ',')    
    
    # Converting the CSV data to a list.
    data = data.to_dict(orient = 'records')   
    
    return data