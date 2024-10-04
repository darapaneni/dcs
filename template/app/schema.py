from app import *
from marshmallow import Schema, fields

class lessor_list(Schema):
   lessorname=fields.Str(default='')
   lessorfname=fields.Str(default='')
   lessoraddressline1=fields.Str(default='')
   lessoraddressline2=fields.Str(default='')
   lessorcitystatepincode=fields.Str(default='')

class leasee_list(Schema):
   lesseename=fields.Str(default='')
   lesseefname=fields.Str(default='')
   lesseeaddressline1=fields.Str(default='')
   lesseeaddressline2=fields.Str(default='')
   lesseecitystatepincode=fields.Str(default='')

class HRDRequest(Schema):
   lname= fields.Str(default="NY")
   tname=fields.Str(default="plate_type")
   address=fields.Str(dafault="10, ABC , Street-1 DEF-110003")
   leaseperiod=fields.Str(default="1 year")
   fromDt=fields.Str(default="1-09-2024")
   to=fields.Str(default="1-09-2024")
   monthlyrent=fields.Str(default="30000")
   deposit=fields.Str(default="100000") 
   #Below Schema is related to renting a mall drafting starting from City to witness2address
   city=fields.Str(default="city")
   day_montha=fields.Str(default="day_montha")
   year=fields.Str(default="year")
   lessor_list=fields.List(fields.Nested(lessor_list),required=True)
   leasee_list=fields.List(fields.Nested(leasee_list),required=True)
   address1=fields.Str(default="address1")
   address2=fields.Str(default="address2")
   leasepropertyaddress=fields.Str(default="leasepropertyaddress")
   leasepropertyarea=fields.Str(default="leasepropertyarea")
   leaseterm=fields.Str(default="leaseterm")
   leasedeedstartdate=fields.Str(default="leasedeedstartdate")
   leasedeedsigndate=fields.Str(default="leasedeedsigndate")
   leaseamount=fields.Str(default="leaseamount")
   monthlypaymentdate=fields.Str(default="monthlypaymentdate")
   twomonths=fields.Str(default="twomonths")
   onemonth=fields.Str(default="onemonth")


   witness1name=fields.Str(default="witness1name")
   witness2name=fields.Str(default="witness2name")
   witness1address=fields.Str(default="witness1address")
   witness2address=fields.Str(default="witness2address")


class Seller(Schema):
   seller_name=fields.Str(default='')
   seller_fathhus=fields.Str(default='')
   seller_age=fields.Str(default='')
   seller_pan=fields.Str(default='')
   seller_caste=fields.Str(default='')
   seller_address=fields.Str(default='')

class Purchaser(Schema):
   purchaser_name=fields.Str(default='')
   purchaser_father=fields.Str(default='')
   purchaser_age=fields.Str(default='')
   purchaser_caste=fields.Str(default='')
   purchaser_pan=fields.Str(default='')
   purchaser_address=fields.Str(default='')
   
class SDDRequest(Schema):
   username=fields.Str(default='')
   password=fields.Str(default='')
   day=fields.Str(default='')
   month=fields.Str(default='')
   year=fields.Str(default='')
   sellers=fields.List(fields.Nested(Seller),required=True)
   purchasers=fields.List(fields.Nested(Purchaser),required=True)
   type_of_property=fields.Str(default='')
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
   seller_type=fields.Str(default='')
   purchaser_type=fields.Str(default='')
   seller_builder_name=fields.Str(default='')
   seller_builder_reg_num=fields.Str(default='')
   seller_builder_fulladdress=fields.Str(default='')
   purchaser_builder_name=fields.Str(default='')
   purchaser_builder_reg_num=fields.Str(default='')
   purchaser_builder_fulladdress=fields.Str(default='')



#Parking Space Rental Deed
class PSRRequest(Schema):
   agreement_date=fields.Str(default='')
   parking_amount=fields.Str(default='')
   effective_date=fields.Str(default='')
   seller_name=fields.Str(default='')
   lessor=fields.Str(default='')
   lessee=fields.Str(default='')
   parking_adress=fields.Str(default='')
   payment_method=fields.Str(default='')
   payment_day=fields.Str(default='')
   notice_period=fields.Str(default='')

class OSADRequest(Schema):
   day=fields.Str(default='')
   year=fields.Str(default='')
   Place_A=fields.Str(default='')
   place_B=fields.Str(default='')
   bearing_no=fields.Str(default='')
   situate_at=fields.Str(default='')
   period_of_month=fields.Str(default='')
   comming_from=fields.Str(default='')
   ending_on=fields.Str(default='')
   rupess=fields.Str(default='')
   rupess_in_words=fields.Str(default='')
   week_day=fields.Str(default='')
   date_of_day=fields.Str(default='')
   per_day=fields.Str(default='')
   per_anum=fields.Str(default='')
   deposite_rs=fields.Str(default='')
   deposite_rs_words=fields.Str(default='')
   signature_of_licensee=fields.Str(default='')
   abc_signature=fields.Str(default='')
   date_of_signature=fields.Str(default='')
   receipt_rs=fields.Str(default='')
   receipt_rs_in_words=fields.Str(default='')
   cheque_no=fields.Str(default='')
   cheque_dated=fields.Str(default='')
   cheque_branch=fields.Str(default='')
   witness1=fields.Str(default='')
   witness2=fields.Str(default='')


#One And The Same Person Affidavit
class SPARequest(Schema):
   name_real=fields.Str(default='')
   verification_state=fields.Str(default='')
   guardian_name=fields.Str(default='')
   verification_day=fields.Str(default='')
   name_2=fields.Str(default='')
   adress=fields.Str(default='')
   name_1=fields.Str(default='')
   relation=fields.Str(default='')

# Address Proof Affidavit
class APARequest(Schema):
   notary_public=fields.Str(default='')
   notary_country=fields.Str(default='')
   notary_state=fields.Str(default='')
   witness_2=fields.Str(default='')
   witness_1=fields.Str(default='')
   name=fields.Str(default='')
   state=fields.Str(default='')
   residency_start_date=fields.Str(default='')
   document_2=fields.Str(default='')
   document_1=fields.Str(default='')
   zip_code=fields.Str(default='')
   affidavit_date=fields.Str(default='')
   adress_line1=fields.Str(default='')
   city=fields.Str(default='')

# Affidavit For Change Of Name Of Minor Drafting
class CNMARequest(Schema):
   notary_public=fields.Str(default='')
   notary_country=fields.Str(default='')
   notary_state=fields.Str(default='')
   minor_newname=fields.Str(default='')
   minor_oldname=fields.Str(default='')
   guardian_name=fields.Str(default='')
   guardian_age=fields.Str(default='')
   state=fields.Str(default='')
   minor_dob=fields.Str(default='')
   reason=fields.Str(default='')
   minor_pob=fields.Str(default='')
   zip_code=fields.Str(default='')
   affidavit_date=fields.Str(default='')
   adress_line1=fields.Str(default='')
   city=fields.Str(default='')

#Proof Of Date Of Birth Affidavit Drafting
class DOBARequest(Schema):
   tob=fields.Str(default='')
   name_real=fields.Str(default='')
   document_2=fields.Str(default='')
   document_1=fields.Str(default='')
   hospital=fields.Str(default='')
   dob=fields.Str(default='')
   father_name=fields.Str(default='')
   mother_name=fields.Str(default='')
   adress=fields.Str(default='')
   verification_day=fields.Str(default='')
   relation=fields.Str(default='')
   verification_city=fields.Str(default='')

class licensor(Schema):
   licensor=fields.Str(default='')
   licensor_address=fields.Str(default='')

class licensee(Schema):
   licensee=fields.Str(default='')
   licensee_address=fields.Str(default='')
   
class LLARequest(Schema):
    location = fields.Str(default="")
    day = fields.Str(default="")
    month = fields.Str(dafault="")
    licensors = fields.List(fields.Nested(licensor),required=True)
    licensees = fields.List(fields.Nested(licensee),required=True)
    licensed_premise = fields.Str(default="")
    period = fields.Str(default="")
    deposit_amount = fields.Str(default="")
    license_fee = fields.Str(default="")
    purpose = fields.Str(default="")
    licensor_address = fields.Str(default="")
    licensee_address = fields.Str(default="")
    license_fee_in_words = fields.Str(default="")
    witness1 = fields.Str(default="")
    witness2 = fields.Str(default="")

class ICARequest(Schema):
    student_name = fields.Str(default="")
    father_or_husband_name = fields.Str(default="")
    age = fields.Str(dafault="")
    occupation = fields.Str(dafault="")
    address = fields.Str(dafault="")
    income = fields.Str(default="")
    income_in_words = fields.Str(default="")
    caste = fields.Str(default="")
    purpose = fields.Str(default="")
    studying = fields.Str(default="")
    study_place = fields.Str(default="")
    date = fields.Str(default="")
    place = fields.Str(default="")
    notary_name = fields.Str(default="")
    student_dob = fields.Str(default="")
    employed_or_not = fields.Str(default="")
    mother_name = fields.Str(default="")
    mother_employed = fields.Str(default="")
    mother_ccupation = fields.Str(default="")
    mother_income = fields.Str(default="")
    land_on_father = fields.Str(default="")
    land_on_mother = fields.Str(default="")
    crops_in_land = fields.Str(default="")
    nature_of_land = fields.Str(default="")
    agri_income_yearly = fields.Str(default="")
    business_income = fields.Str(default="")
    no_of_family_vehicles = fields.Str(default="")
    personal_use_only = fields.Str(default="")
    type_of_vehicle = fields.Str(default="")
    vehicle_registered_on = fields.Str(default="")
    type_of_house = fields.Str(default="")
    is_govt_home = fields.Str(default="")
    house_cost = fields.Str(default="")
    homeloan_amount_branch = fields.Str(default="")
    other_house = fields.Str(default="")
    own_rent_house = fields.Str(default="")
    house_rent = fields.Str(default="")
    mobile_no = fields.Str(default="")
    total_family_income = fields.Str(default="")
    ration_card_no = fields.Str(default="")
    aadhar_no = fields.Str(default="")
    email = fields.Str(default="")


class MCARequest(Schema):
    bridegroom_name = fields.Str(default="")
    bride_name = fields.Str(default="")
    bridegroom_age = fields.Str(dafault="")
    bride_age = fields.Str(dafault="")
    bridegroom_address = fields.Str(dafault="")
    bride_address = fields.Str(default="")
    bridegroom_occupation = fields.Str(default="")
    bride_occupation = fields.Str(default="")
    marriage_date = fields.Str(default="")
    marriage_place = fields.Str(default="")
    affirmation_place = fields.Str(default="")
    affirmation_date = fields.Str(default="")
    date_of_the_month = fields.Str(default="")
    affirmation_month = fields.Str(default="")
    affirmation_year = fields.Str(default="")
    
class claimants(Schema):
   claimant_name=fields.Str(default='')
   age=fields.Str(default='')
   sof_wof_dof=fields.Str(default='')
   address=fields.Str(default='')

class receiving_claimants(Schema):
   claimant_name=fields.Str(default='')
   
class CSARequest(Schema):
    claimants = fields.List(fields.Nested(claimants),required=True)
    receiving_claimants = fields.List(fields.Nested(receiving_claimants),required=True)
    deceased_cust_name = fields.Str(dafault="")
    balance_amount = fields.Str(dafault="")
    receiving_claimant = fields.Str(default="")
    account_number = fields.Str(default="")
    account_branch = fields.Str(default="")
    bank_name = fields.Str(default="")
    payment_date = fields.Str(default="")
    date_of_month = fields.Str(default="")
    month = fields.Str(default="")
    year = fields.Str(default="")
    witness1 = fields.Str(default="")
    witness1_address = fields.Str(default="")
    witness2 = fields.Str(default="")
    witness2_address = fields.Str(default="")

class NADRequest(Schema):
    ad_title = fields.Str(default="")
    page_header = fields.Str(default="")
    ad_content = fields.Str(dafault="")
    page_footer = fields.Str(dafault="")
class Complainant(Schema):   
    name= fields.Str(default="")
    address= fields.Str(default="")
    mobile= fields.Str(default="")
    email = fields.Str(default="")

class Opponent(Schema):   
    name= fields.Str(default="")
    address= fields.Str(default="")
    mobile= fields.Str(default="")
    email = fields.Str(default="")


class CCDRequest(Schema):
   court =fields.Str(default="")
   delay = fields.Str(default="")    
   claimamount = fields.Str(default="")
   fee = fields.Str(default="")
   ddno = fields.Str(default="")
   date = fields.Str(default="") 
   rtgs_neft= fields.Str(default="")
   AdvocateName= fields.Str(default="")
   advocatefulladdress= fields.Str(default="")
   advocatemobilenumber= fields.Str(default="") 
   advocateemail = fields.Str(default="")
   place = fields.Str(default="")
   complainants =fields.List(fields.Nested(Complainant),required=True)
   opponents=fields.List(fields.Nested(Opponent),required=True)

class GDDRequest(Schema):
   day =fields.Str(default="")
   month =fields.Str(default="")
   year =fields.Str(default="")
   location =fields.Str(default="")
   donorname =fields.Str(default="")
   donorfathersname =fields.Str(default="")
   donorsage =fields.Str(default="")
   donormaritalstatus =fields.Str(default="")
   donorprofession =fields.Str(default="")
   donoraadhar =fields.Str(default="")
   doneename =fields.Str(default="")
   donnefathname =fields.Str(default="")
   doneeage =fields.Str(default="")
   doneeMaritalstatus =fields.Str(default="")
   doneeprofession =fields.Str(default="")
   doneeAadhar =fields.Str(default="")
   registrationnum =fields.Str(default="")
   volume =fields.Str(default="")
   topage =fields.Str(default="")
   frompage =fields.Str(default="")
   date =fields.Str(default="")
   sr =fields.Str(default="")
   relation =fields.Str(default="")
   amount =fields.Str(default="")
   series =fields.Str(default="")
   gazatteno =fields.Str(default="")
   dated =fields.Str(default="")
   east =fields.Str(default="")
   west =fields.Str(default="")
   north =fields.Str(default="")
   south =fields.Str(default="")
   witness1 =fields.Str(default="")
   witness2 =fields.Str(default="")

class NDARequest(Schema):
   effectivedate=fields.Str(default="")
   party1=fields.Str(default="")
   party2=fields.Str(default="")
   party1engages=fields.Str(default="")
   party2engages=fields.Str(default="")
   purpose=fields.Str(default="")
   period=fields.Str(default="")
   court=fields.Str(default="")
   witnessdetail=fields.Str(default="")   

class JobOfferRequest(Schema):
   companyname=fields.Str(default="")
   date=fields.Str(default="")
   startdate=fields.Str(default="")
   deadlinedate=fields.Str(default="")
   typeofemployement=fields.Str(default="")
   position=fields.Str(default="")
   employeename=fields.Str(default="")
   fromname=fields.Str(default="")
   titlefrom=fields.Str(default="")
   employeeaddress=fields.Str(default="")
   signdate=fields.Str(default="")
   witness=fields.Str(default="")   
    
class APIResponse(Schema):
   message=fields.String(default="")

