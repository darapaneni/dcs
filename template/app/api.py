from app import *
from flask_restful import Resource
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with,doc,use_kwargs



class GenerateSDD(MethodResource,Resource):
    @doc(description="Sale Deed Drafting",tags=['Sale Deed Drafting API'])
    @use_kwargs(schema.SDDRequest,location=('json'))
    @marshal_with(schema.APIResponse)
    def post(self ,**kwargs):
         try:
            print("generateSDD")
            parameters=kwargs  
            db_conn=utility.getDbConnection("sellorpurchaser.json","sellers","purchasers",parameters['sellers'],parameters['purchasers'])
            del parameters['sellers']
            del parameters['purchasers']
            utility.generateReport("Sale_Deed_Drafting.jrxml","Sale_Deed_Drafting",parameters,db_conn) 
            return schema.APIResponse().dump(dict(message="Report generated successfully")), 200
         except Exception as e:
            print(str(e))
            return schema.APIResponse().dump(dict(message="not generated")), 404
        
api.add_resource(GenerateSDD,'/generateSDD')        
docs.register(GenerateSDD)





            