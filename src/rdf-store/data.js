const DATA = `
@prefix : <http://ak5u16.github.io/BICS/data/> .
@prefix dbo: <http://dbpedia.org/ontology/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix qb: <http://purl.org/linked-data/cube#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix survey: <http://ak5u16.github.io/BICS/schema/survey/> .

:Lt250 rdf:type survey:WorkforceSize ; 
 	 dc:title "Workforce Size < 250" . 

:Mt250 rdf:type survey:WorkforceSize ; 
 	 dc:title "Workforce Size 250+" . 

:AllSizes rdf:type survey:WorkforceSize ;
	 dc:title "All Size Bands" .

:Total rdf:type survey:WorkforceSize ; 
 	 dc:title "Total" . 

:MiningQuarrying rdf:type survey:Industry ;
 	 dc:title "Mining And Quarrying" .
 
:Manufacturing rdf:type survey:Industry ;
 	 dc:title "Manufacturing" .
 
:WaterSupplySewerageWasteManagementRemediationActivities rdf:type survey:Industry ;
 	 dc:title "Water Supply, Sewerage, Waste Management And Remediation Activities" .
 
:Construction rdf:type survey:Industry ;
 	 dc:title "Construction" .
 
:WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles rdf:type survey:Industry ;
 	 dc:title "Wholesale And Retail Trade; Repair Of Motor Vehicles And Motorcycles" .
 
:AccommodationFoodServiceActivities rdf:type survey:Industry ;
 	 dc:title "Accommodation And Food Service Activities" .
 
:TransportationStorage rdf:type survey:Industry ;
 	 dc:title "Transportation And Storage" .
 
:InformationCommunication rdf:type survey:Industry ;
 	 dc:title "Information And Communication" .
 
:RealEstateActivities rdf:type survey:Industry ;
 	 dc:title "Real Estate Activities" .
 
:ProfessionalScientificTechnicalActivities rdf:type survey:Industry ;
 	 dc:title "Professional, Scientific And Technical Activities" .
 
:AdministrativeSupportServiceActivities rdf:type survey:Industry ;
 	 dc:title "Administrative And Support Service Activities" .
 
:Education rdf:type survey:Industry ;
 	 dc:title "Education" .
 
:HumanHealthSocialWorkActivities rdf:type survey:Industry ;
 	 dc:title "Human Health And Social Work Activities" .
 
:ArtsEntertainmentRecreation rdf:type survey:Industry ;
 	 dc:title "Arts, Entertainment And Recreation" .
 
:OtherServiceActivities rdf:type survey:Industry ;
 	 dc:title "Other Service Activities" .
 
:AllIndustries rdf:type survey:Industry ;
 	 dc:title "All Industries" .
	 
:sampleSize1 rdf:type qb:DataSet ;
 	dc:title "Sample for the BICS survey broken down by industry" ;
	rdf:label "Total Number of Surveys Sent Out" . 
 
:sampleSize1_1_1 rdf:type qb:Observation ; 
 	rdf:value 15.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :MiningQuarrying; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_1_2 rdf:type qb:Observation ; 
 	rdf:value 13.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :MiningQuarrying; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_1_3 rdf:type qb:Observation ; 
 	rdf:value 28.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :MiningQuarrying; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_2_1 rdf:type qb:Observation ; 
 	rdf:value 1785.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_2_2 rdf:type qb:Observation ; 
 	rdf:value 1370.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_2_3 rdf:type qb:Observation ; 
 	rdf:value 3155.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_3_1 rdf:type qb:Observation ; 
 	rdf:value 130.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_3_2 rdf:type qb:Observation ; 
 	rdf:value 71.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_3_3 rdf:type qb:Observation ; 
 	rdf:value 201.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_4_1 rdf:type qb:Observation ; 
 	rdf:value 722.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_4_2 rdf:type qb:Observation ; 
 	rdf:value 312.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_4_3 rdf:type qb:Observation ; 
 	rdf:value 1034.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_5_1 rdf:type qb:Observation ; 
 	rdf:value 1819.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_5_2 rdf:type qb:Observation ; 
 	rdf:value 1180.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_5_3 rdf:type qb:Observation ; 
 	rdf:value 2999.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_6_1 rdf:type qb:Observation ; 
 	rdf:value 975.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_6_2 rdf:type qb:Observation ; 
 	rdf:value 659.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_6_3 rdf:type qb:Observation ; 
 	rdf:value 1634.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_7_1 rdf:type qb:Observation ; 
 	rdf:value 528.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_7_2 rdf:type qb:Observation ; 
 	rdf:value 335.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_7_3 rdf:type qb:Observation ; 
 	rdf:value 863.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_8_1 rdf:type qb:Observation ; 
 	rdf:value 794.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_8_2 rdf:type qb:Observation ; 
 	rdf:value 422.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_8_3 rdf:type qb:Observation ; 
 	rdf:value 1216.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_9_1 rdf:type qb:Observation ; 
 	rdf:value 112.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :RealEstateActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_9_2 rdf:type qb:Observation ; 
 	rdf:value 88.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :RealEstateActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_9_3 rdf:type qb:Observation ; 
 	rdf:value 200.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :RealEstateActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_10_1 rdf:type qb:Observation ; 
 	rdf:value 1303.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_10_2 rdf:type qb:Observation ; 
 	rdf:value 720.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_10_3 rdf:type qb:Observation ; 
 	rdf:value 2023.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_11_1 rdf:type qb:Observation ; 
 	rdf:value 1287.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_11_2 rdf:type qb:Observation ; 
 	rdf:value 1072.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_11_3 rdf:type qb:Observation ; 
 	rdf:value 2359.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_12_1 rdf:type qb:Observation ; 
 	rdf:value 303.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_12_2 rdf:type qb:Observation ; 
 	rdf:value 457.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_12_3 rdf:type qb:Observation ; 
 	rdf:value 760.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_13_1 rdf:type qb:Observation ; 
 	rdf:value 145.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_13_2 rdf:type qb:Observation ; 
 	rdf:value 149.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_13_3 rdf:type qb:Observation ; 
 	rdf:value 294.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_14_1 rdf:type qb:Observation ; 
 	rdf:value 415.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_14_2 rdf:type qb:Observation ; 
 	rdf:value 303.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_14_3 rdf:type qb:Observation ; 
 	rdf:value 718.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_15_1 rdf:type qb:Observation ; 
 	rdf:value 108.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :OtherServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_15_2 rdf:type qb:Observation ; 
 	rdf:value 29.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :OtherServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_15_3 rdf:type qb:Observation ; 
 	rdf:value 137.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :OtherServiceActivities; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_16_1 rdf:type qb:Observation ; 
 	rdf:value 10442.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Lt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_16_2 rdf:type qb:Observation ; 
 	rdf:value 7181.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Mt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:sampleSize1_16_3 rdf:type qb:Observation ; 
 	rdf:value 17623.0; 
 	qb:dataSet :sampleSize1; 
 	qb:dimension :Total; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:sampleSize2 rdf:type qb:DataSet ;
 	dc:title "Sample for the BICS survey broken down by workforce size" . 
 
:sampleSize2_1_1 rdf:type qb:Observation ; 
 	rdf:value 1326.0; 
 	qb:dataSet :sampleSize2; 
 	qb:dimension :Lt100; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:sampleSize2_1_2 rdf:type qb:Observation ; 
 	rdf:value 9116.0; 
 	qb:dataSet :sampleSize2; 
 	qb:dimension :Lt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:sampleSize2_1_3 rdf:type qb:Observation ; 
 	rdf:value 7181.0; 
 	qb:dataSet :sampleSize2; 
 	qb:dimension :Mt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:sampleSize2_1_4 rdf:type qb:Observation ; 
 	rdf:value 17623.0; 
 	qb:dataSet :sampleSize2; 
 	qb:dimension :Total; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate1 rdf:type qb:DataSet ;
 	dc:title "Responses to the BICS survey broken down by industry" ;
	rdf:label "Number of Responses" .
 	 
:responseRate1_1_1 rdf:type qb:Observation ; 
 	rdf:value 648.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:responseRate1_1_2 rdf:type qb:Observation ; 
 	rdf:value 449.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:responseRate1_1_3 rdf:type qb:Observation ; 
 	rdf:value 1097.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:responseRate1_2_1 rdf:type qb:Observation ; 
 	rdf:value 50.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_2_2 rdf:type qb:Observation ; 
 	rdf:value 20.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_2_3 rdf:type qb:Observation ; 
 	rdf:value 70.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_3_1 rdf:type qb:Observation ; 
 	rdf:value 208.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:responseRate1_3_2 rdf:type qb:Observation ; 
 	rdf:value 76.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:responseRate1_3_3 rdf:type qb:Observation ; 
 	rdf:value 284.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:responseRate1_4_1 rdf:type qb:Observation ; 
 	rdf:value 686.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:responseRate1_4_2 rdf:type qb:Observation ; 
 	rdf:value 344.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:responseRate1_4_3 rdf:type qb:Observation ; 
 	rdf:value 1030.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:responseRate1_5_1 rdf:type qb:Observation ; 
 	rdf:value 321.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_5_2 rdf:type qb:Observation ; 
 	rdf:value 195.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_5_3 rdf:type qb:Observation ; 
 	rdf:value 516.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_6_1 rdf:type qb:Observation ; 
 	rdf:value 193.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:responseRate1_6_2 rdf:type qb:Observation ; 
 	rdf:value 89.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:responseRate1_6_3 rdf:type qb:Observation ; 
 	rdf:value 282.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:responseRate1_7_1 rdf:type qb:Observation ; 
 	rdf:value 297.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:responseRate1_7_2 rdf:type qb:Observation ; 
 	rdf:value 121.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:responseRate1_7_3 rdf:type qb:Observation ; 
 	rdf:value 418.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:responseRate1_8_1 rdf:type qb:Observation ; 
 	rdf:value 468.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_8_2 rdf:type qb:Observation ; 
 	rdf:value 265.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_8_3 rdf:type qb:Observation ; 
 	rdf:value 733.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_9_1 rdf:type qb:Observation ; 
 	rdf:value 453.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_9_2 rdf:type qb:Observation ; 
 	rdf:value 361.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_9_3 rdf:type qb:Observation ; 
 	rdf:value 814.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_10_1 rdf:type qb:Observation ; 
 	rdf:value 127.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:responseRate1_10_2 rdf:type qb:Observation ; 
 	rdf:value 191.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:responseRate1_10_3 rdf:type qb:Observation ; 
 	rdf:value 318.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:responseRate1_11_1 rdf:type qb:Observation ; 
 	rdf:value 85.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_11_2 rdf:type qb:Observation ; 
 	rdf:value 59.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_11_3 rdf:type qb:Observation ; 
 	rdf:value 144.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate1_12_1 rdf:type qb:Observation ; 
 	rdf:value 180.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:responseRate1_12_2 rdf:type qb:Observation ; 
 	rdf:value 98.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:responseRate1_12_3 rdf:type qb:Observation ; 
 	rdf:value 278.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:responseRate1_13_1 rdf:type qb:Observation ; 
 	rdf:value 3809.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Lt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate1_13_2 rdf:type qb:Observation ; 
 	rdf:value 2305.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Mt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate1_13_3 rdf:type qb:Observation ; 
 	rdf:value 6114.0; 
 	qb:dataSet :responseRate1; 
 	qb:dimension :Total; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate2 rdf:type qb:DataSet ;
 	dc:title "Proportion of responses to the BICS survey broken down by industry" ;
	rdf:label "Proportion of Responses" . 
 
:responseRate2_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.363; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:responseRate2_1_8 rdf:type qb:Observation ; 
 	rdf:value 0.328; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:responseRate2_1_9 rdf:type qb:Observation ; 
 	rdf:value 0.348; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:responseRate2_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.385; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_2_8 rdf:type qb:Observation ; 
 	rdf:value 0.282; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_2_9 rdf:type qb:Observation ; 
 	rdf:value 0.348; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.288; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:responseRate2_3_8 rdf:type qb:Observation ; 
 	rdf:value 0.244; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:responseRate2_3_9 rdf:type qb:Observation ; 
 	rdf:value 0.996; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:responseRate2_4_7 rdf:type qb:Observation ; 
 	rdf:value 0.377; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:responseRate2_4_8 rdf:type qb:Observation ; 
 	rdf:value 0.292; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:responseRate2_4_9 rdf:type qb:Observation ; 
 	rdf:value 0.343; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:responseRate2_5_7 rdf:type qb:Observation ; 
 	rdf:value 0.329; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_5_8 rdf:type qb:Observation ; 
 	rdf:value 0.296; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_5_9 rdf:type qb:Observation ; 
 	rdf:value 0.316; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_6_7 rdf:type qb:Observation ; 
 	rdf:value 0.366; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:responseRate2_6_8 rdf:type qb:Observation ; 
 	rdf:value 0.266; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:responseRate2_6_9 rdf:type qb:Observation ; 
 	rdf:value 0.327; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:responseRate2_7_7 rdf:type qb:Observation ; 
 	rdf:value 0.374; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:responseRate2_7_8 rdf:type qb:Observation ; 
 	rdf:value 0.287; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:responseRate2_7_9 rdf:type qb:Observation ; 
 	rdf:value 0.344; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:responseRate2_8_7 rdf:type qb:Observation ; 
 	rdf:value 0.359; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_8_8 rdf:type qb:Observation ; 
 	rdf:value 0.368; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_8_9 rdf:type qb:Observation ; 
 	rdf:value 0.362; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_9_7 rdf:type qb:Observation ; 
 	rdf:value 0.352; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_9_8 rdf:type qb:Observation ; 
 	rdf:value 0.337; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_9_9 rdf:type qb:Observation ; 
 	rdf:value 0.345; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_10_7 rdf:type qb:Observation ; 
 	rdf:value 0.419; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:responseRate2_10_8 rdf:type qb:Observation ; 
 	rdf:value 0.418; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:responseRate2_10_9 rdf:type qb:Observation ; 
 	rdf:value 0.418; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:responseRate2_11_7 rdf:type qb:Observation ; 
 	rdf:value 0.586; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_11_8 rdf:type qb:Observation ; 
 	rdf:value 0.396; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_11_9 rdf:type qb:Observation ; 
 	rdf:value 0.49; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:responseRate2_12_7 rdf:type qb:Observation ; 
 	rdf:value 0.434; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:responseRate2_12_8 rdf:type qb:Observation ; 
 	rdf:value 0.323; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:responseRate2_12_9 rdf:type qb:Observation ; 
 	rdf:value 0.387; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:responseRate2_13_7 rdf:type qb:Observation ; 
 	rdf:value 0.365; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Lt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate2_13_8 rdf:type qb:Observation ; 
 	rdf:value 0.321; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Mt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate2_13_9 rdf:type qb:Observation ; 
 	rdf:value 0.347; 
 	qb:dataSet :responseRate2; 
 	qb:dimension :Total; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate3 rdf:type qb:DataSet ;
 	dc:title "Responses to the BICS survey broken down by workforce size" ;
	rdf:label "Number of Responses" .  

:responseRate3_1_1 rdf:type qb:Observation ; 
 	rdf:value 357.0; 
 	qb:dataSet :responseRate3; 
 	qb:dimension :Lt100; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate3_1_2 rdf:type qb:Observation ; 
 	rdf:value 3452.0; 
 	qb:dataSet :responseRate3; 
 	qb:dimension :Lt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate3_1_3 rdf:type qb:Observation ; 
 	rdf:value 2305.0; 
 	qb:dataSet :responseRate3; 
 	qb:dimension :Mt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate3_1_4 rdf:type qb:Observation ; 
 	rdf:value 6114.0; 
 	qb:dataSet :responseRate3; 
 	qb:dimension :Total; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate4 rdf:type qb:DataSet ;
 	dc:title "Proportion of responses to the BICS survey broken down by workforce size" ;
	rdf:label "Proportion of Responses" . 
 
:responseRate4_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.269; 
 	qb:dataSet :responseRate4; 
 	qb:dimension :Lt100; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate4_1_8 rdf:type qb:Observation ; 
 	rdf:value 0.379; 
 	qb:dataSet :responseRate4; 
 	qb:dimension :Lt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate4_1_9 rdf:type qb:Observation ; 
 	rdf:value 0.321; 
 	qb:dataSet :responseRate4; 
 	qb:dimension :Mt250; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:responseRate4_1_10 rdf:type qb:Observation ; 
 	rdf:value 0.347; 
 	qb:dataSet :responseRate4; 
 	qb:dimension :Total; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:WorkforceSize rdf:type survey:WorkforceSize ; 
 	dc:title "Workforce Size" . 
 
:ContinuingToTrade rdf:type survey:TradingStatus; 
 	dc:title "ContinuingToTrade" .
 
:PermanentlyStopped rdf:type survey:TradingStatus; 
 	dc:title "PermanentlyStopped" .
 
:TemporarilyStopped rdf:type survey:TradingStatus; 
 	dc:title "TemporarilyStopped" .
 
:tradingStatus1 rdf:type qb:DataSet ;
 	dc:title "Percentage of all responding businesses, broken down by industry, UK, 6 April to 19 April 2020" .

:tradingStatus1_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.79; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.206; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.9; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.1; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.732; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.261; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_4_1 rdf:type qb:Observation ; 
 	rdf:value 0.752; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_4_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_4_3 rdf:type qb:Observation ; 
 	rdf:value 0.243; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_5_1 rdf:type qb:Observation ; 
 	rdf:value 0.182; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_5_2 rdf:type qb:Observation ; 
 	rdf:value 0.012; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_5_3 rdf:type qb:Observation ; 
 	rdf:value 0.806; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_6_1 rdf:type qb:Observation ; 
 	rdf:value 0.915; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_6_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_6_3 rdf:type qb:Observation ; 
 	rdf:value 0.085; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_7_1 rdf:type qb:Observation ; 
 	rdf:value 0.95; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_7_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_7_3 rdf:type qb:Observation ; 
 	rdf:value 0.0451232; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_8_1 rdf:type qb:Observation ; 
 	rdf:value 0.967; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_8_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_8_3 rdf:type qb:Observation ; 
 	rdf:value 0.03; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_9_1 rdf:type qb:Observation ; 
 	rdf:value 0.915; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_9_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_9_3 rdf:type qb:Observation ; 
 	rdf:value 0.081; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_10_1 rdf:type qb:Observation ; 
 	rdf:value 0.868; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_10_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_10_3 rdf:type qb:Observation ; 
 	rdf:value 0.126; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_11_1 rdf:type qb:Observation ; 
 	rdf:value 0.938; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_11_2 rdf:type qb:Observation ; 
 	rdf:value 0.014; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_11_3 rdf:type qb:Observation ; 
 	rdf:value 0.049; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_12_1 rdf:type qb:Observation ; 
 	rdf:value 0.205; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_12_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_12_3 rdf:type qb:Observation ; 
 	rdf:value 0.795; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_13_1 rdf:type qb:Observation ; 
 	rdf:value 0.767; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_13_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:tradingStatus1_13_3 rdf:type qb:Observation ; 
 	rdf:value 0.228; 
 	qb:dataSet :tradingStatus1; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2 rdf:type qb:DataSet ;
 	dc:title "Percentage of all responding businesses, broken down by size band, UK, 6 April to 19 April 2020" . 
 
:tradingStatus2_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.748; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.247; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.798; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.197; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.767; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:tradingStatus2_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.228; 
 	qb:dataSet :tradingStatus2; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:Country rdf:type survey:Country ;
 	dc:title "Country" .
 
:England rdf:type survey:Country ;
 	 dc:title "England" .
 
:Wales rdf:type survey:Country ;
 	 dc:title "Wales" .
 
:Scotland rdf:type survey:Country ;
 	 dc:title "Scotland" .
 
:NorthernIreland rdf:type survey:Country ;
 	 dc:title "Northern Ireland" .
 
:UK rdf:type survey:Country ;
 	 dc:title "UK" .
 
:tradingStatus3 rdf:type qb:DataSet ;
 	dc:title "Percentage of all responding businesses, broken down by country, UK, 6 April to 19 April 2020" . 
 
:tradingStatus3_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.778; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.218; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.762; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.011; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.227; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.776; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.217; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_4_1 rdf:type qb:Observation ; 
 	rdf:value 0.728; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_4_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_4_3 rdf:type qb:Observation ; 
 	rdf:value 0.272; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_5_1 rdf:type qb:Observation ; 
 	rdf:value 0.767; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :ContinuingToTrade; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_5_2 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :PermanentlyStopped; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:tradingStatus3_5_3 rdf:type qb:Observation ; 
 	rdf:value 0.228; 
 	qb:dataSet :tradingStatus3; 
 	qb:dimension :TemporarilyStopped; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
  
:CoronavirusJobRetentionScheme rdf:type survey:Initiative; 
 	dc:title "CoronavirusJobRetentionScheme" .
 
:Businessratesholiday rdf:type survey:Initiative; 
 	dc:title "Businessratesholiday" .
 
:DeferringVATpayments rdf:type survey:Initiative; 
 	dc:title "DeferringVATpayments" .
 
:HMRCTimeToPayscheme rdf:type survey:Initiative; 
 	dc:title "HMRCTimeToPayscheme" .
 
:GovernmentFundedSmallBusinessGrantorLoanSchemes rdf:type survey:Initiative; 
 	dc:title "GovernmentFundedSmallBusinessGrantorLoanSchemes" .
 
:AccreditedFinanceAgreements rdf:type survey:Initiative; 
 	dc:title "AccreditedFinanceAgreements" .
 
:NotApplied rdf:type survey:Initiative; 
 	dc:title "NotApplied" .
 
:appliedInitiatives1 rdf:type qb:DataSet ;
 	dc:title "Percentage of businesses either continuing to trade or who have temporarily paused or ceased trading, broken down by industry, UK, 6 April to 19 April 2020" . 
 
:appliedInitiatives1_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.635; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.14; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.443; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_1_4 rdf:type qb:Observation ; 
 	rdf:value 0.193; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_1_5 rdf:type qb:Observation ; 
 	rdf:value 0.048; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_1_6 rdf:type qb:Observation ; 
 	rdf:value 0.086; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.26; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.686; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.157; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.571; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_2_4 rdf:type qb:Observation ; 
 	rdf:value 0.214; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_2_5 rdf:type qb:Observation ; 
 	rdf:value 0.057; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_2_6 rdf:type qb:Observation ; 
 	rdf:value 0.1; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.214; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.809; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.135; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.599; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_3_4 rdf:type qb:Observation ; 
 	rdf:value 0.287; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_3_5 rdf:type qb:Observation ; 
 	rdf:value 0.06; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_3_6 rdf:type qb:Observation ; 
 	rdf:value 0.096; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.117; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_4_1 rdf:type qb:Observation ; 
 	rdf:value 0.726; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_4_2 rdf:type qb:Observation ; 
 	rdf:value 0.446; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_4_3 rdf:type qb:Observation ; 
 	rdf:value 0.601; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_4_4 rdf:type qb:Observation ; 
 	rdf:value 0.25; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_4_5 rdf:type qb:Observation ; 
 	rdf:value 0.133; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_4_6 rdf:type qb:Observation ; 
 	rdf:value 0.09; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_4_7 rdf:type qb:Observation ; 
 	rdf:value 0.155; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_5_1 rdf:type qb:Observation ; 
 	rdf:value 0.871; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_5_2 rdf:type qb:Observation ; 
 	rdf:value 0.782; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_5_3 rdf:type qb:Observation ; 
 	rdf:value 0.806; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_5_4 rdf:type qb:Observation ; 
 	rdf:value 0.422; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_5_5 rdf:type qb:Observation ; 
 	rdf:value 0.249; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_5_6 rdf:type qb:Observation ; 
 	rdf:value 0.206; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_5_7 rdf:type qb:Observation ; 
 	rdf:value 0.027; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_6_1 rdf:type qb:Observation ; 
 	rdf:value 0.766; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_6_2 rdf:type qb:Observation ; 
 	rdf:value 0.241; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_6_3 rdf:type qb:Observation ; 
 	rdf:value 0.553; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_6_4 rdf:type qb:Observation ; 
 	rdf:value 0.248; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_6_5 rdf:type qb:Observation ; 
 	rdf:value 0.064; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_6_6 rdf:type qb:Observation ; 
 	rdf:value 0.092; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_6_7 rdf:type qb:Observation ; 
 	rdf:value 0.167; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_7_1 rdf:type qb:Observation ; 
 	rdf:value 0.401; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_7_2 rdf:type qb:Observation ; 
 	rdf:value 0.082; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_7_3 rdf:type qb:Observation ; 
 	rdf:value 0.474; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_7_4 rdf:type qb:Observation ; 
 	rdf:value 0.137; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_7_5 rdf:type qb:Observation ; 
 	rdf:value 0.036; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_7_6 rdf:type qb:Observation ; 
 	rdf:value 0.038; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_7_7 rdf:type qb:Observation ; 
 	rdf:value 0.373; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_8_1 rdf:type qb:Observation ; 
 	rdf:value 0.622; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_8_2 rdf:type qb:Observation ; 
 	rdf:value 0.126; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_8_3 rdf:type qb:Observation ; 
 	rdf:value 0.662; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_8_4 rdf:type qb:Observation ; 
 	rdf:value 0.186; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_8_5 rdf:type qb:Observation ; 
 	rdf:value 0.049; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_8_6 rdf:type qb:Observation ; 
 	rdf:value 0.081; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_8_7 rdf:type qb:Observation ; 
 	rdf:value 0.207; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_9_1 rdf:type qb:Observation ; 
 	rdf:value 0.757; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_9_2 rdf:type qb:Observation ; 
 	rdf:value 0.201; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_9_3 rdf:type qb:Observation ; 
 	rdf:value 0.637; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_9_4 rdf:type qb:Observation ; 
 	rdf:value 0.205; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_9_5 rdf:type qb:Observation ; 
 	rdf:value 0.218; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_9_6 rdf:type qb:Observation ; 
 	rdf:value 0.123; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_9_7 rdf:type qb:Observation ; 
 	rdf:value 0.139; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_10_1 rdf:type qb:Observation ; 
 	rdf:value 0.405; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_10_2 rdf:type qb:Observation ; 
 	rdf:value 0.085; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_10_3 rdf:type qb:Observation ; 
 	rdf:value 0.263; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_10_4 rdf:type qb:Observation ; 
 	rdf:value 0.07; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_10_5 rdf:type qb:Observation ; 
 	rdf:value 0.022; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_10_6 rdf:type qb:Observation ; 
 	rdf:value 0.028; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_10_7 rdf:type qb:Observation ; 
 	rdf:value 0.484; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_11_1 rdf:type qb:Observation ; 
 	rdf:value 0.345; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_11_2 rdf:type qb:Observation ; 
 	rdf:value 0.134; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_11_3 rdf:type qb:Observation ; 
 	rdf:value 0.162; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_11_4 rdf:type qb:Observation ; 
 	rdf:value 0.063; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_11_5 rdf:type qb:Observation ; 
 	rdf:value 0.106; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_11_6 rdf:type qb:Observation ; 
 	rdf:value 0.028; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_11_7 rdf:type qb:Observation ; 
 	rdf:value 0.556; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_12_1 rdf:type qb:Observation ; 
 	rdf:value 0.763; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_12_2 rdf:type qb:Observation ; 
 	rdf:value 0.572; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_12_3 rdf:type qb:Observation ; 
 	rdf:value 0.612; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_12_4 rdf:type qb:Observation ; 
 	rdf:value 0.331; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_12_5 rdf:type qb:Observation ; 
 	rdf:value 0.18; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_12_6 rdf:type qb:Observation ; 
 	rdf:value 0.183; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_12_7 rdf:type qb:Observation ; 
 	rdf:value 0.126; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_13_1 rdf:type qb:Observation ; 
 	rdf:value 0.672; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_13_2 rdf:type qb:Observation ; 
 	rdf:value 0.274; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_13_3 rdf:type qb:Observation ; 
 	rdf:value 0.564; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_13_4 rdf:type qb:Observation ; 
 	rdf:value 0.223; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_13_5 rdf:type qb:Observation ; 
 	rdf:value 0.112; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_13_6 rdf:type qb:Observation ; 
 	rdf:value 0.099; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives1_13_7 rdf:type qb:Observation ; 
 	rdf:value 0.207; 
 	qb:dataSet :appliedInitiatives1; 
 	qb:dimension :NotApplied; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2 rdf:type qb:DataSet ;
 	dc:title "Percentage of businesses either continuing to trade or who have temporarily paused or ceased trading, broken down by size band, UK, 6 April to 19 April 2020" . 
 	
:appliedInitiatives2_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.687; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.272; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.56; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_1_4 rdf:type qb:Observation ; 
 	rdf:value 0.224; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_1_5 rdf:type qb:Observation ; 
 	rdf:value 0.135; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_1_6 rdf:type qb:Observation ; 
 	rdf:value 0.112; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.198; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :NotApplied; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.647; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.279; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.571; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_2_4 rdf:type qb:Observation ; 
 	rdf:value 0.222; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_2_5 rdf:type qb:Observation ; 
 	rdf:value 0.073123; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_2_6 rdf:type qb:Observation ; 
 	rdf:value 0.079; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.223; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :NotApplied; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.672; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.274; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.564; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_3_4 rdf:type qb:Observation ; 
 	rdf:value 0.223; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_3_5 rdf:type qb:Observation ; 
 	rdf:value 0.112; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_3_6 rdf:type qb:Observation ; 
 	rdf:value 0.099; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives2_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.207; 
 	qb:dataSet :appliedInitiatives2; 
 	qb:dimension :NotApplied; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3 rdf:type qb:DataSet ;
 	dc:title "Percentage of businesses either continuing to trade or who have temporarily paused or ceased trading, broken down by country, UK, 6 April to 19 April 2020" . 
 	 
:appliedInitiatives3_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.673; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.274; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.573; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_1_4 rdf:type qb:Observation ; 
 	rdf:value 0.224; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_1_5 rdf:type qb:Observation ; 
 	rdf:value 0.109; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_1_6 rdf:type qb:Observation ; 
 	rdf:value 0.097; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.205; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :NotApplied; 
 	qb:dimension :England; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.738; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.387; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.651; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_2_4 rdf:type qb:Observation ; 
 	rdf:value 0.255; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_2_5 rdf:type qb:Observation ; 
 	rdf:value 0.137; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_2_6 rdf:type qb:Observation ; 
 	rdf:value 0.127; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.134; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :NotApplied; 
 	qb:dimension :Wales; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.717; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.29; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.63; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_3_4 rdf:type qb:Observation ; 
 	rdf:value 0.235; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_3_5 rdf:type qb:Observation ; 
 	rdf:value 0.075; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_3_6 rdf:type qb:Observation ; 
 	rdf:value 0.098; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.165; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :NotApplied; 
 	qb:dimension :Scotland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_4_1 rdf:type qb:Observation ; 
 	rdf:value 0.652; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_4_2 rdf:type qb:Observation ; 
 	rdf:value 0.304; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_4_3 rdf:type qb:Observation ; 
 	rdf:value 0.402; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_4_4 rdf:type qb:Observation ; 
 	rdf:value 0.13; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_4_5 rdf:type qb:Observation ; 
 	rdf:value 0.109; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_4_6 rdf:type qb:Observation ; 
 	rdf:value 0.065; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_4_7 rdf:type qb:Observation ; 
 	rdf:value 0.239; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :NotApplied; 
 	qb:dimension :NorthernIreland; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_5_1 rdf:type qb:Observation ; 
 	rdf:value 0.672; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_5_2 rdf:type qb:Observation ; 
 	rdf:value 0.274; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_5_3 rdf:type qb:Observation ; 
 	rdf:value 0.564; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_5_4 rdf:type qb:Observation ; 
 	rdf:value 0.223; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_5_5 rdf:type qb:Observation ; 
 	rdf:value 0.112; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_5_6 rdf:type qb:Observation ; 
 	rdf:value 0.099; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 
:appliedInitiatives3_5_7 rdf:type qb:Observation ; 
 	rdf:value 0.207; 
 	qb:dataSet :appliedInitiatives3; 
 	qb:dimension :NotApplied; 
 	qb:dimension :UK; 
 	qb:dimension :TP2019 . 
 

:CoronavirusJobRetentionScheme rdf:type survey:Initiative; 
 	dc:title "CoronavirusJobRetentionScheme" .
 
:Businessratesholiday rdf:type survey:Initiative; 
 	dc:title "Businessratesholiday" .
 
:DeferringVATpayments rdf:type survey:Initiative; 
 	dc:title "DeferringVATpayments" .
 
:HMRCTimeToPayscheme rdf:type survey:Initiative; 
 	dc:title "HMRCTimeToPayscheme" .
 
:GovernmentFundedSmallBusinessGrantorLoanSchemes rdf:type survey:Initiative; 
 	dc:title "GovernmentFundedSmallBusinessGrantorLoanSchemes" .
 
:AccreditedFinanceAgreements rdf:type survey:Initiative; 
 	dc:title "AccreditedFinanceAgreements" .
 
:NotReceived rdf:type survey:Initiative ; 
 	dc:title "We haven't received any that we applied for" .
 
:receivedInitiatives1 rdf:type qb:DataSet ;
 	dc:title "Percentage of businesses either continuing to trade or who have temporarily paused or ceased trading, broken down by industry, UK, 6 April to 19 April 2020" . 
 	 
:receivedInitiatives1_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.199; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.079; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.33; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_1_4 rdf:type qb:Observation ; 
 	rdf:value 0.147; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_1_5 rdf:type qb:Observation ; 
 	rdf:value 0.026; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_1_6 rdf:type qb:Observation ; 
 	rdf:value 0.013; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.237; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.286; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.043; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.371; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_2_4 rdf:type qb:Observation ; 
 	rdf:value 0.157; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_2_5 rdf:type qb:Observation ; 
 	rdf:value 0.014; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_2_6 rdf:type qb:Observation ; 
 	rdf:value 0.043; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.243; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.291; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.057; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.443; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_3_4 rdf:type qb:Observation ; 
 	rdf:value 0.234; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_3_5 rdf:type qb:Observation ; 
 	rdf:value 0.021; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_3_6 rdf:type qb:Observation ; 
 	rdf:value 0.018; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.27; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_4_1 rdf:type qb:Observation ; 
 	rdf:value 0.239; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_4_2 rdf:type qb:Observation ; 
 	rdf:value 0.334; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_4_3 rdf:type qb:Observation ; 
 	rdf:value 0.469; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_4_4 rdf:type qb:Observation ; 
 	rdf:value 0.183; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_4_5 rdf:type qb:Observation ; 
 	rdf:value 0.091; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_4_6 rdf:type qb:Observation ; 
 	rdf:value 0.015; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_4_7 rdf:type qb:Observation ; 
 	rdf:value 0.16; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_5_1 rdf:type qb:Observation ; 
 	rdf:value 0.251; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_5_2 rdf:type qb:Observation ; 
 	rdf:value 0.633; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_5_3 rdf:type qb:Observation ; 
 	rdf:value 0.596; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_5_4 rdf:type qb:Observation ; 
 	rdf:value 0.306; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_5_5 rdf:type qb:Observation ; 
 	rdf:value 0.178; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_5_6 rdf:type qb:Observation ; 
 	rdf:value 0.035; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_5_7 rdf:type qb:Observation ; 
 	rdf:value 0.129; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_6_1 rdf:type qb:Observation ; 
 	rdf:value 0.287; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_6_2 rdf:type qb:Observation ; 
 	rdf:value 0.145; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_6_3 rdf:type qb:Observation ; 
 	rdf:value 0.44; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_6_4 rdf:type qb:Observation ; 
 	rdf:value 0.188; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_6_5 rdf:type qb:Observation ; 
 	rdf:value 0.025; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_6_6 rdf:type qb:Observation ; 
 	rdf:value 0.025; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_6_7 rdf:type qb:Observation ; 
 	rdf:value 0.184; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_7_1 rdf:type qb:Observation ; 
 	rdf:value 0.154; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_7_2 rdf:type qb:Observation ; 
 	rdf:value 0.031; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_7_3 rdf:type qb:Observation ; 
 	rdf:value 0.397; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_7_4 rdf:type qb:Observation ; 
 	rdf:value 0.106; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_7_5 rdf:type qb:Observation ; 
 	rdf:value 0.017; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_7_6 rdf:type qb:Observation ; 
 	rdf:value 0.01; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_7_7 rdf:type qb:Observation ; 
 	rdf:value 0.127; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_8_1 rdf:type qb:Observation ; 
 	rdf:value 0.216; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_8_2 rdf:type qb:Observation ; 
 	rdf:value 0.078; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_8_3 rdf:type qb:Observation ; 
 	rdf:value 0.518; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_8_4 rdf:type qb:Observation ; 
 	rdf:value 0.146; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_8_5 rdf:type qb:Observation ; 
 	rdf:value 0.022; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_8_6 rdf:type qb:Observation ; 
 	rdf:value 0.023; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_8_7 rdf:type qb:Observation ; 
 	rdf:value 0.176; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_9_1 rdf:type qb:Observation ; 
 	rdf:value 0.28; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_9_2 rdf:type qb:Observation ; 
 	rdf:value 0.12; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_9_3 rdf:type qb:Observation ; 
 	rdf:value 0.469; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_9_4 rdf:type qb:Observation ; 
 	rdf:value 0.147; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_9_5 rdf:type qb:Observation ; 
 	rdf:value 0.144; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_9_6 rdf:type qb:Observation ; 
 	rdf:value 0.017; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_9_7 rdf:type qb:Observation ; 
 	rdf:value 0.206; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_10_1 rdf:type qb:Observation ; 
 	rdf:value 0.098; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_10_2 rdf:type qb:Observation ; 
 	rdf:value 0.038; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_10_3 rdf:type qb:Observation ; 
 	rdf:value 0.184; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_10_4 rdf:type qb:Observation ; 
 	rdf:value 0.057; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_10_5 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_10_6 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_10_7 rdf:type qb:Observation ; 
 	rdf:value 0.228; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_11_1 rdf:type qb:Observation ; 
 	rdf:value 0.085; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_11_2 rdf:type qb:Observation ; 
 	rdf:value 0.092; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_11_3 rdf:type qb:Observation ; 
 	rdf:value 0.155; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_11_4 rdf:type qb:Observation ; 
 	rdf:value 0.042; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_11_5 rdf:type qb:Observation ; 
 	rdf:value 0.07; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_11_6 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_11_7 rdf:type qb:Observation ; 
 	rdf:value 0.141; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_12_1 rdf:type qb:Observation ; 
 	rdf:value 0.219; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_12_2 rdf:type qb:Observation ; 
 	rdf:value 0.45; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_12_3 rdf:type qb:Observation ; 
 	rdf:value 0.435; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_12_4 rdf:type qb:Observation ; 
 	rdf:value 0.255; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_12_5 rdf:type qb:Observation ; 
 	rdf:value 0.108; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_12_6 rdf:type qb:Observation ; 
 	rdf:value 0.043; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_12_7 rdf:type qb:Observation ; 
 	rdf:value 0.176; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_13_1 rdf:type qb:Observation ; 
 	rdf:value 0.222; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_13_2 rdf:type qb:Observation ; 
 	rdf:value 0.191; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_13_3 rdf:type qb:Observation ; 
 	rdf:value 0.427; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_13_4 rdf:type qb:Observation ; 
 	rdf:value 0.168; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_13_5 rdf:type qb:Observation ; 
 	rdf:value 0.07; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_13_6 rdf:type qb:Observation ; 
 	rdf:value 0.018; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives1_13_7 rdf:type qb:Observation ; 
 	rdf:value 0.189; 
 	qb:dataSet :receivedInitiatives1; 
 	qb:dimension :NotReceived; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2 rdf:type qb:DataSet ;
 	dc:title "Percentage of businesses either continuing to trade or who have temporarily paused or ceased trading, broken down by size band, UK, 6 April to 19 April 2020" . 
 	
:receivedInitiatives2_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.221; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.186; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.407; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_1_4 rdf:type qb:Observation ; 
 	rdf:value 0.168; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_1_5 rdf:type qb:Observation ; 
 	rdf:value 0.085; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_1_6 rdf:type qb:Observation ; 
 	rdf:value 0.023; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.205; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :NotReceived; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.224; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.2; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.461; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_2_4 rdf:type qb:Observation ; 
 	rdf:value 0.168; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_2_5 rdf:type qb:Observation ; 
 	rdf:value 0.046; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_2_6 rdf:type qb:Observation ; 
 	rdf:value 0.011; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.163; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :NotReceived; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.222; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.191; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.427; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_3_4 rdf:type qb:Observation ; 
 	rdf:value 0.168; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_3_5 rdf:type qb:Observation ; 
 	rdf:value 0.07; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_3_6 rdf:type qb:Observation ; 
 	rdf:value 0.018; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:receivedInitiatives2_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.189; 
 	qb:dataSet :receivedInitiatives2; 
 	qb:dimension :NotReceived; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:CoronavirusJobRetentionScheme rdf:type survey:Initiative; 
 	dc:title "CoronavirusJobRetentionScheme" .
 
:Businessratesholiday rdf:type survey:Initiative; 
 	dc:title "Businessratesholiday" .
 
:DeferringVATpayments rdf:type survey:Initiative; 
 	dc:title "DeferringVATpayments" .
 
:HMRCTimeToPayscheme rdf:type survey:Initiative; 
 	dc:title "HMRCTimeToPayscheme" .
 
:GovernmentFundedSmallBusinessGrantorLoanSchemes rdf:type survey:Initiative; 
 	dc:title "GovernmentFundedSmallBusinessGrantorLoanSchemes" .
 
:AccreditedFinanceAgreements rdf:type survey:Initiative; 
 	dc:title "AccreditedFinanceAgreements" .
 
:NoneOfTheAbove rdf:type survey:Initiative; 
 	dc:title "NoneOfTheAbove" .
 
:intendingToApply1 rdf:type qb:DataSet ;
 	dc:title "Percentage of businesses either continuing to trade or who have temporarily paused or ceased trading, broken down by industry, UK, 6 April to 19 April 2020" . 
 	 
:intendingToApply1_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.383; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.081; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.167; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_1_4 rdf:type qb:Observation ; 
 	rdf:value 0.092; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_1_5 rdf:type qb:Observation ; 
 	rdf:value 0.028; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_1_6 rdf:type qb:Observation ; 
 	rdf:value 0.066; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.481; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :Manufacturing; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.386; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.071; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.229; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_2_4 rdf:type qb:Observation ; 
 	rdf:value 0.143; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_2_5 rdf:type qb:Observation ; 
 	rdf:value 0.029; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_2_6 rdf:type qb:Observation ; 
 	rdf:value 0.071; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.457; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :WaterSupplySewerageWasteManagementRemediationActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.429; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.032; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.174; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_3_4 rdf:type qb:Observation ; 
 	rdf:value 0.096; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_3_5 rdf:type qb:Observation ; 
 	rdf:value 0.05; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_3_6 rdf:type qb:Observation ; 
 	rdf:value 0.11; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.422; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :Construction; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_4_1 rdf:type qb:Observation ; 
 	rdf:value 0.321; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_4_2 rdf:type qb:Observation ; 
 	rdf:value 0.093; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_4_3 rdf:type qb:Observation ; 
 	rdf:value 0.158; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_4_4 rdf:type qb:Observation ; 
 	rdf:value 0.076; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_4_5 rdf:type qb:Observation ; 
 	rdf:value 0.042; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_4_6 rdf:type qb:Observation ; 
 	rdf:value 0.083; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_4_7 rdf:type qb:Observation ; 
 	rdf:value 0.538; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :WholesaleRetailTradeRepairOfMotorVehiclesMotorcycles; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_5_1 rdf:type qb:Observation ; 
 	rdf:value 0.404; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_5_2 rdf:type qb:Observation ; 
 	rdf:value 0.18; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_5_3 rdf:type qb:Observation ; 
 	rdf:value 0.235; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_5_4 rdf:type qb:Observation ; 
 	rdf:value 0.137; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_5_5 rdf:type qb:Observation ; 
 	rdf:value 0.061; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_5_6 rdf:type qb:Observation ; 
 	rdf:value 0.122; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_5_7 rdf:type qb:Observation ; 
 	rdf:value 0.398; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :AccommodationFoodServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_6_1 rdf:type qb:Observation ; 
 	rdf:value 0.355; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_6_2 rdf:type qb:Observation ; 
 	rdf:value 0.096; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_6_3 rdf:type qb:Observation ; 
 	rdf:value 0.199; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_6_4 rdf:type qb:Observation ; 
 	rdf:value 0.078; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_6_5 rdf:type qb:Observation ; 
 	rdf:value 0.021; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_6_6 rdf:type qb:Observation ; 
 	rdf:value 0.074; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_6_7 rdf:type qb:Observation ; 
 	rdf:value 0.489; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :TransportationStorage; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_7_1 rdf:type qb:Observation ; 
 	rdf:value 0.26; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_7_2 rdf:type qb:Observation ; 
 	rdf:value 0.07; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_7_3 rdf:type qb:Observation ; 
 	rdf:value 0.163; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_7_4 rdf:type qb:Observation ; 
 	rdf:value 0.067; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_7_5 rdf:type qb:Observation ; 
 	rdf:value 0.029; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_7_6 rdf:type qb:Observation ; 
 	rdf:value 0.05; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_7_7 rdf:type qb:Observation ; 
 	rdf:value 0.587; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :InformationCommunication; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_8_1 rdf:type qb:Observation ; 
 	rdf:value 0.35; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_8_2 rdf:type qb:Observation ; 
 	rdf:value 0.073; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_8_3 rdf:type qb:Observation ; 
 	rdf:value 0.228; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_8_4 rdf:type qb:Observation ; 
 	rdf:value 0.083; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_8_5 rdf:type qb:Observation ; 
 	rdf:value 0.023; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_8_6 rdf:type qb:Observation ; 
 	rdf:value 0.074; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_8_7 rdf:type qb:Observation ; 
 	rdf:value 0.503; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :ProfessionalScientificTechnicalActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_9_1 rdf:type qb:Observation ; 
 	rdf:value 0.401; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_9_2 rdf:type qb:Observation ; 
 	rdf:value 0.089; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_9_3 rdf:type qb:Observation ; 
 	rdf:value 0.227; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_9_4 rdf:type qb:Observation ; 
 	rdf:value 0.102; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_9_5 rdf:type qb:Observation ; 
 	rdf:value 0.063; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_9_6 rdf:type qb:Observation ; 
 	rdf:value 0.09; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_9_7 rdf:type qb:Observation ; 
 	rdf:value 0.45; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :AdministrativeSupportServiceActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_10_1 rdf:type qb:Observation ; 
 	rdf:value 0.459; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_10_2 rdf:type qb:Observation ; 
 	rdf:value 0.098; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_10_3 rdf:type qb:Observation ; 
 	rdf:value 0.174; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_10_4 rdf:type qb:Observation ; 
 	rdf:value 0.022; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_10_5 rdf:type qb:Observation ; 
 	rdf:value 0.0; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_10_6 rdf:type qb:Observation ; 
 	rdf:value 0.066; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_10_7 rdf:type qb:Observation ; 
 	rdf:value 0.421; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :Education; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_11_1 rdf:type qb:Observation ; 
 	rdf:value 0.31; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_11_2 rdf:type qb:Observation ; 
 	rdf:value 0.042; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_11_3 rdf:type qb:Observation ; 
 	rdf:value 0.099; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_11_4 rdf:type qb:Observation ; 
 	rdf:value 0.056; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_11_5 rdf:type qb:Observation ; 
 	rdf:value 0.035; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_11_6 rdf:type qb:Observation ; 
 	rdf:value 0.014; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_11_7 rdf:type qb:Observation ; 
 	rdf:value 0.585; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :HumanHealthSocialWorkActivities; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_12_1 rdf:type qb:Observation ; 
 	rdf:value 0.41; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_12_2 rdf:type qb:Observation ; 
 	rdf:value 0.122; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_12_3 rdf:type qb:Observation ; 
 	rdf:value 0.212; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_12_4 rdf:type qb:Observation ; 
 	rdf:value 0.104; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_12_5 rdf:type qb:Observation ; 
 	rdf:value 0.058; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_12_6 rdf:type qb:Observation ; 
 	rdf:value 0.108; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_12_7 rdf:type qb:Observation ; 
 	rdf:value 0.392; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :ArtsEntertainmentRecreation; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_13_1 rdf:type qb:Observation ; 
 	rdf:value 0.368; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_13_2 rdf:type qb:Observation ; 
 	rdf:value 0.091; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_13_3 rdf:type qb:Observation ; 
 	rdf:value 0.19; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_13_4 rdf:type qb:Observation ; 
 	rdf:value 0.088; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_13_5 rdf:type qb:Observation ; 
 	rdf:value 0.039; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_13_6 rdf:type qb:Observation ; 
 	rdf:value 0.08; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:intendingToApply1_13_7 rdf:type qb:Observation ; 
 	rdf:value 0.482; 
 	qb:dataSet :intendingToApply1; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :AllIndustries; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2 rdf:type qb:dataSet ;
 	dc:title "Percentage of businesses either continuing to trade or who have temporarily paused or ceased trading, broken down by size band, UK, 6 April to 19 April 2020" . 
 	 
:intendingToApply2_1_1 rdf:type qb:Observation ; 
 	rdf:value 0.367; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_1_2 rdf:type qb:Observation ; 
 	rdf:value 0.089; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_1_3 rdf:type qb:Observation ; 
 	rdf:value 0.202; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_1_4 rdf:type qb:Observation ; 
 	rdf:value 0.094; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_1_5 rdf:type qb:Observation ; 
 	rdf:value 0.046; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_1_6 rdf:type qb:Observation ; 
 	rdf:value 0.085; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_1_7 rdf:type qb:Observation ; 
 	rdf:value 0.48; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :Lt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_2_1 rdf:type qb:Observation ; 
 	rdf:value 0.37; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_2_2 rdf:type qb:Observation ; 
 	rdf:value 0.094; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_2_3 rdf:type qb:Observation ; 
 	rdf:value 0.169; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_2_4 rdf:type qb:Observation ; 
 	rdf:value 0.078; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_2_5 rdf:type qb:Observation ; 
 	rdf:value 0.027; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_2_6 rdf:type qb:Observation ; 
 	rdf:value 0.072; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_2_7 rdf:type qb:Observation ; 
 	rdf:value 0.486; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :Mt250; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_3_1 rdf:type qb:Observation ; 
 	rdf:value 0.368; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :CoronavirusJobRetentionScheme; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_3_2 rdf:type qb:Observation ; 
 	rdf:value 0.091; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :Businessratesholiday; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_3_3 rdf:type qb:Observation ; 
 	rdf:value 0.19; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :DeferringVATpayments; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_3_4 rdf:type qb:Observation ; 
 	rdf:value 0.088; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :HMRCTimeToPayscheme; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_3_5 rdf:type qb:Observation ; 
 	rdf:value 0.039; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :GovernmentFundedSmallBusinessGrantorLoanSchemes; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_3_6 rdf:type qb:Observation ; 
 	rdf:value 0.08; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :AccreditedFinanceAgreements; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 
 
:intendingToApply2_3_7 rdf:type qb:Observation ; 
 	rdf:value 0.482; 
 	qb:dataSet :intendingToApply2; 
 	qb:dimension :NoneOfTheAbove; 
 	qb:dimension :AllSizes; 
 	qb:dimension :TP2019 . 

`;

module.exports = { DATA };
