from flask import Flask,jsonify,request
from apispec import APISpec
from flask_restful import Resource, Api
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_cors import CORS

application= Flask(__name__)
application.secret_key='dcs-1234' 

CORS(application)
api=Api(application)

application.config.update({
    'APISPEC_SPEC': APISpec(
        title='DCS Generate Doc',
        version='v1',
        plugins=[MarshmallowPlugin()],
        openapi_version='2.0.0'),
        'APISPEC_SWAGGER_URL':'/swagger/',
        'APISPEC_SWAGGER_UI_URL':'/swagger-ui/'
})
docs=FlaskApiSpec(application)

@application.route("/")
def generate_documenr():
    return "Welcome to DCS Swagger-ui to get help with Document Generation"


# allow both GET and POST requests
@application.route('/form-example', methods=['GET', 'POST'])
def form_example():
    # handle the POST request
    if request.method == 'POST':
        lname = request.form.get('lname')
        tname = request.form.get('tname')
        return '''
                  <h1>The lname value is: {}</h1>
                  <h1>The tname value is: {}</h1>'''.format(lname, tname)

    # otherwise handle the GET request
    return '''
           <form method="POST">
               <div><label>Landlord name: <input type="text" name="lname"></label></div>
               <div><label>Tenant Name: <input type="text" name="tname"></label></div>
               <input type="submit" value="Submit">
           </form>'''


