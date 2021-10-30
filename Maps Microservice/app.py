from flask_cors import CORS
from flask import Flask, jsonify

from processdata import processdata

app = Flask(__name)
CORS(app)

# In this case, the URL route is 'displaylocations'.
@app.route('/displaylocation')

def displaylocations():

    # Import data from CSV file
    data = processdata()

    # Forward the data to the source that called this API.
    return jsonify(data)

    if __name__ == '__main__':
        app.run(host = <host_name>, debug = True, port = <port_no>)

    python app.py
    
   
