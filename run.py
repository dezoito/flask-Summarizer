#!/usr/bin/env python3
from app import app
# app.run(debug=True)
app.run(host='0.0.0.0', debug=True) #accept requests from host machine
