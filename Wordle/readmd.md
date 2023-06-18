# Get Wordle Working
So as you may remember from Open dev Week 3, we tried to create a wordle-like MVP app, however we were running into some issues with CORS, to fix this, I've also included a simple python flask server which takes in API requests from the React front end, and then queries the wordle api.

To run the python server you just need to run:

`python3 main.py`

And that will boot up the server. You may need to install flask and requests which can be done like so:

`pip3 install flask`

`pip3 install requests`