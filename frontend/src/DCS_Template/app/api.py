
from app import application
from flask import jsonify,Response, session,request
from app import *
from marshmallow import Schema, fields
from flask_restful import Resource, Api
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with,doc,use_kwargs

import json
import os
from pyreportjasper import PyReportJasper

RESOURCES_DIR = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'resources')
REPORTS_DIR = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'reports')


class HRDRequest(Schema):
   lname= fields.Str(default="NY")
   tname=fields.Str(default="plate_type")
   address=fields.Str(dafault="10, ABC , Street-1 DEF-110003")
   leaseperiod=fields.Str(default="1 year")
   fromDt=fields.Str(default="1-09-2024")
   to=fields.Str(default="1-09-2024")
   monthlyrent=fields.Str(default="30000")
   deposit=fields.Str(default="100000") 
 
class SDDRequest(Schema):
   day=fields.Str(default='')
   month=fields.Str(default='')
   year=fields.Str(default='')
   seller_name=fields.Str(default='')
   seller_fathhus=fields.Str(default='')
   seller_age=fields.Str(default='')
   seller_pan=fields.Str(default='')
   seller_caste=fields.Str(default='')
   seller_address=fields.Str(default='')
   purchaser_name=fields.Str(default='')
   purchaser_father=fields.Str(default='')
   purchaser_age=fields.Str(default='')
   purchaser_caste=fields.Str(default='')
   purchaser_pan=fields.Str(default='')
   purchaser_address=fields.Str(default='')
   land=fields.Str(default='')
   land_size=fields.Str(default='')
   rs_plotnum=fields.Str(default='')
   lr_plotnum=fields.Str(default='')
   rs_khaitnanum=fields.Str(default='')
   lr_khaitannum=fields.Str(default='')
   moza=fields.Str(default='')
   jlnum=fields.Str(default='')
   touzinum=fields.Str(default='')
   policastation=fields.Str(default='')
   subdistrict=fields.Str(default='')
   district=fields.Str(default='')
   flatnumber=fields.Str(default='')
   floorno=fields.Str(default='')
   society=fields.Str(default='')
   division=fields.Str(default='')
   corporation=fields.Str(default='')
   road=fields.Str(default='')
   location=fields.Str(default='')
   supersqfeet=fields.Str(default='')
   landsqfeet=fields.Str(default='')
   percentage=fields.Str(default='')
   previous_owner=fields.Str(default='')
   father_previous_owner=fields.Str(default='')
   father_previous_owner_det=fields.Str(default='')
   previous_sale_deed=fields.Str(default='')
   reg_office=fields.Str(default='')
   volume=fields.Str(default='')
   frompage=fields.Str(default='')
   topage=fields.Str(default='')
   beingno=fields.Str(default='')
   year_prev_saledeed=fields.Str(default='')
   inestate=fields.Str(default='')
   seller_father_deathdate=fields.Str(default='')
   amount=fields.Str(default='')
   amount_in_words=fields.Str(default='')
   agreement_date=fields.Str(default='')
   recieved_money=fields.Str(default='')
   property_handover_date=fields.Str(default='')
   onNorth=fields.Str(default='')
   onSouth=fields.Str(default='')
   onEast=fields.Str(default='')
   onWest=fields.Str(default='')
   witness1=fields.Str(default='')
   witness2=fields.Str(default='')

 

class APIResponse(Schema):
   message=fields.String(default="")

class GenerateSDD(MethodResource,Resource):
    @doc(description="Sale Deed Drafting",tags=['Sale Deed Drafting API'])
    @use_kwargs(SDDRequest,location=('json'))
    @marshal_with(APIResponse)
    def post(self ,**kwargs):
         try:
            day=kwargs['day']
            month=kwargs['month']
            year=kwargs['year']
            seller_name=kwargs['seller_name']
            seller_fathhus=kwargs['seller_fathhus']
            seller_age=kwargs['seller_age']
            seller_pan=kwargs['seller_pan']
            seller_caste=kwargs['seller_caste']
            seller_address=kwargs['seller_address']
            purchaser_name=kwargs['purchaser_name']
            purchaser_father=kwargs['purchaser_father']
            purchaser_age=kwargs['purchaser_age']
            purchaser_caste=kwargs['purchaser_caste']
            purchaser_pan=kwargs['purchaser_pan']
            purchaser_address=kwargs['purchaser_address']
            land=kwargs['land']
            land_size=kwargs['land_size']
            rs_plotnum=kwargs['rs_plotnum']
            lr_plotnum=kwargs['lr_plotnum']
            rs_khaitnanum=kwargs['rs_khaitnanum']
            lr_khaitannum=kwargs['lr_khaitannum']
            moza=kwargs['moza']
            jlnum=kwargs['jlnum']
            touzinum=kwargs['touzinum']
            policastation=kwargs['policastation']
            subdistrict=kwargs['subdistrict']
            district=kwargs['district']
            flatnumber=kwargs['flatnumber']
            floorno=kwargs['floorno']
            society=kwargs['society']
            division=kwargs['division']
            corporation=kwargs['corporation']
            road=kwargs['road']
            location=kwargs['location']
            supersqfeet=kwargs['supersqfeet']
            landsqfeet=kwargs['landsqfeet']
            percentage=kwargs['percentage']
            previous_owner=kwargs['previous_owner']
            father_previous_owner=kwargs['father_previous_owner']
            father_previous_owner_det=kwargs['father_previous_owner_det']
            previous_sale_deed=kwargs['previous_sale_deed']
            reg_office=kwargs['reg_office']
            volume=kwargs['volume']
            frompage=kwargs['frompage']
            topage=kwargs['topage']
            beingno=kwargs['beingno']
            year_prev_saledeed=kwargs['year_prev_saledeed']
            inestate=kwargs['inestate']
            seller_father_deathdate=kwargs['seller_father_deathdate']
            amount=kwargs['amount']
            amount_in_words=kwargs['amount_in_words']
            agreement_date=kwargs['agreement_date']
            recieved_money=kwargs['recieved_money']
            property_handover_date=kwargs['property_handover_date']
            onNorth=kwargs['onNorth']
            onSouth=kwargs['onSouth']
            onEast=kwargs['onEast']
            onWest=kwargs['onWest']
            witness1=kwargs['witness1']
            witness2=kwargs['witness2']


            input_file = os.path.join(REPORTS_DIR, 'Sale_Deed_Drafting.jrxml')
            output_file = os.path.join(REPORTS_DIR, 'Sale_Deed_Drafting')
            pyreportjasper = PyReportJasper()
            pyreportjasper.config(
            input_file,
            output_file,
            output_formats=["pdf"],
            parameters={
            'day':day,
            'month':month,  
            'year':year,
            'seller_name':seller_name,
            'seller_fathhus':seller_fathhus,
            'seller_age':seller_age,
            'seller_pan':seller_pan,
            'seller_caste':seller_caste,
            'seller_address':seller_address,
            'purchaser_name':purchaser_name,
            'purchaser_father':purchaser_father,
            'purchaser_age':purchaser_age,
            'purchaser_caste':purchaser_caste,
            'purchaser_pan':purchaser_pan,
            'purchaser_address':purchaser_address,
            'land':land,
            'land_size':land_size,
            'rs_plotnum':rs_plotnum,
            'lr_plotnum':lr_plotnum,
            'rs_khaitnanum':rs_khaitnanum,
            'lr_khaitannum':lr_khaitannum,
            'moza':moza,
            'jlnum':jlnum,
            'touzinum':touzinum,
            'policastation':policastation,
            'subdistrict':subdistrict,
            'district':district,
            'flatnumber':flatnumber,
            'floorno':floorno,
            'society':society,
            'division':division,
            'corporation':corporation,
            'road':road,
            'location':location,
            'supersqfeet':supersqfeet,
            'landsqfeet':landsqfeet,
            'percentage':percentage,
            'previous_owner':previous_owner,
            'father_previous_owner':father_previous_owner,
            'father_previous_owner_det':father_previous_owner_det,
            'previous_sale_deed':previous_sale_deed,
            'reg_office':reg_office,
            'volume':volume,
            'frompage':frompage,
            'topage':topage,
            'beingno':beingno,
            'year_prev_saledeed':year_prev_saledeed,
            'inestate':inestate,
            'seller_father_deathdate':seller_father_deathdate,
            'amount':amount,
            'amount_in_words':amount_in_words,
            'agreement_date':agreement_date,
            'recieved_money':recieved_money,
            'property_handover_date':property_handover_date,
            'onNorth':onNorth,
            'onSouth':onSouth,
            'onEast':onEast,
            'onWest':onWest,
            'witness1':witness1,
            'witness2':witness2

            }
       
            )
            pyreportjasper.process_report()
            output_file = output_file + '.html'
            if os.path.isfile(output_file):
               print('Report generated successfully!')
          
            return APIResponse().dump(dict(message="Report generated successfully")), 200
         except Exception as e:
            print(str(e))
            return APIResponse().dump(dict(message="not generated")), 404
        
api.add_resource(GenerateSDD,'/generateSDD')        
docs.register(GenerateSDD)

class GenerateHRD(MethodResource,Resource):
    @doc(description="House Rent Agreement Drafting",tags=['House Rental Drafting API'])
    @use_kwargs(HRDRequest,location=('json'))
    @marshal_with(APIResponse)
    def post(self ,**kwargs):
         try:
            lname=kwargs['lname']
            tname=kwargs['tname']
            address=kwargs['address']
            leaseperiod=kwargs['leaseperiod']
            fromDt=kwargs['fromDt']
            to=kwargs['to']
            monthlyrent=kwargs['monthlyrent']
            deposit=kwargs['deposit'] 

            input_file = os.path.join(REPORTS_DIR, 'House_Rental_Drafting.jrxml')
            output_file = os.path.join(REPORTS_DIR, 'House_Rental_Drafting')
            pyreportjasper = PyReportJasper()
            pyreportjasper.config(
            input_file,
            output_file,
            output_formats=["pdf"],
            parameters={
               "leaseperiod":leaseperiod,
               "address":address,
               "tname":tname,
               "lname":lname,
               "fromDt":fromDt,
               "to":to,
               "monthlyrent":monthlyrent,
               "deposit":deposit 
               },
            
            )
            pyreportjasper.process_report()
            output_file = output_file + '.pdf'
            if os.path.isfile(output_file):
               print('Report generated successfully!')
          
            return APIResponse().dump(dict(message="Report generated successfully")), 200
         except Exception as e:
            print(str(e))
            return APIResponse().dump(dict(message="not generated")), 404
        
api.add_resource(GenerateHRD,'/generateHRD')        
docs.register(GenerateHRD)



            