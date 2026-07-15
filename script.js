const DB = {
  common_cold:{s:["runny nose","sneezing","sore throat","cough","low grade fever","fatigue"],w:{"runny nose":2,"sneezing":2,"sore throat":1.5,"cough":1.5,"low grade fever":1,"fatigue":1},doc:"General Physician",med:[{n:"Paracetamol",d:"Acetaminophen"},{n:"Cetirizine",d:"Cetirizine HCl"}],home:["Drink warm honey-ginger tea","Steam inhalation; rest and hydrate"]},
  influenza:{s:["high fever","body aches","chills","fatigue","headache","cough","sore throat"],w:{"high fever":2.5,"body aches":2,"chills":2,"fatigue":1.5,"headache":1.5,"cough":1.5},doc:"General Physician",med:[{n:"Tamiflu",d:"Oseltamivir"},{n:"Paracetamol",d:"Acetaminophen"}],home:["Rest and sleep","Drink plenty of water and electrolytes"]},
  covid_19:{s:["dry cough","fever","loss of smell","loss of taste","fatigue","shortness of breath","headache","body aches"],w:{"dry cough":2.5,"fever":2,"loss of smell":3,"loss of taste":3,"fatigue":1.5,"shortness of breath":2},doc:"General Physician",med:[{n:"Paracetamol",d:"Acetaminophen"},{n:"Paxlovid",d:"Nirmatrelvir/Ritonavir"}],home:["Isolate and rest","Keep well hydrated; monitor oxygen"]},
  pneumonia:{s:["productive cough","high fever","shortness of breath","chest pain","chills","fatigue","difficulty breathing"],w:{"productive cough":2.5,"high fever":2.5,"shortness of breath":2.5,"chest pain":2,"difficulty breathing":3},doc:"Pulmonologist",med:[{n:"Amoxicillin",d:"Amoxicillin"},{n:"Azithromycin",d:"Azithromycin"}],home:["Seek medical care immediately","Rest and stay warm; keep hydrated"]},
  bronchitis:{s:["productive cough","wheezing","chest tightness","fatigue","low grade fever","shortness of breath"],w:{"productive cough":3,"wheezing":2,"chest tightness":1.5,"shortness of breath":1.5},doc:"Pulmonologist",med:[{n:"Salbutamol Inhaler",d:"Salbutamol"},{n:"Cough Syrup",d:"Dextromethorphan"}],home:["Use a humidifier","Drink warm fluids; avoid smoke"]},
  asthma:{s:["wheezing","shortness of breath","chest tightness","dry cough","difficulty breathing"],w:{"wheezing":3,"shortness of breath":2.5,"chest tightness":2.5,"dry cough":2,"difficulty breathing":2.5},doc:"Pulmonologist",med:[{n:"Ventolin",d:"Salbutamol Inhaler"},{n:"Fluticasone",d:"Fluticasone Propionate"}],home:["Avoid allergens and cold air","Pursed-lip breathing exercises"]},
  tuberculosis:{s:["productive cough","night sweats","weight loss","fatigue","low grade fever","loss of appetite"],w:{"productive cough":2.5,"night sweats":3,"weight loss":2.5,"low grade fever":2},doc:"Pulmonologist",med:[{n:"HRZE Regimen",d:"Isoniazid+Rifampicin+Pyrazinamide+Ethambutol"}],home:["Complete full antibiotic course","Good ventilation; wear mask"]},
  malaria:{s:["high fever","chills","sweating","headache","nausea","vomiting","muscle pain","fatigue"],w:{"high fever":2.5,"chills":2.5,"sweating":2,"headache":1.5,"nausea":1.5,"vomiting":1.5},doc:"General Physician",med:[{n:"Chloroquine",d:"Chloroquine Phosphate"},{n:"Artemether",d:"Artemether/Lumefantrine"}],home:["Stay hydrated and rest","Use mosquito nets; complete medication"]},
  dengue:{s:["high fever","headache","rash","joint pain","muscle pain","eye redness","nausea","vomiting"],w:{"high fever":2.5,"rash":2.5,"joint pain":2.5,"muscle pain":2,"eye redness":1.5},doc:"General Physician",med:[{n:"Paracetamol",d:"Acetaminophen – AVOID aspirin/ibuprofen"},{n:"ORS",d:"Oral Rehydration Salts"}],home:["Papaya leaf juice for platelets","Drink ORS or coconut water"]},
  typhoid:{s:["high fever","abdominal pain","headache","loss of appetite","weakness","diarrhea","rash","constipation"],w:{"high fever":2.5,"abdominal pain":2.5,"loss of appetite":2,"weakness":1.5},doc:"General Physician",med:[{n:"Ciprofloxacin",d:"Ciprofloxacin 500mg"},{n:"Azithromycin",d:"Azithromycin 1g"}],home:["Soft easily digestible food","Boiled water only; complete antibiotics"]},
  cholera:{s:["diarrhea","vomiting","muscle cramps","weakness","nausea","excessive thirst"],w:{"diarrhea":3,"vomiting":2.5,"muscle cramps":2,"excessive thirst":2},doc:"Gastroenterologist",med:[{n:"ORS",d:"Oral Rehydration Salts"},{n:"Doxycycline",d:"Doxycycline"}],home:["Replace fluids urgently with ORS","Seek medical care immediately"]},
  food_poisoning:{s:["nausea","vomiting","diarrhea","abdominal pain","fever","fatigue"],w:{"nausea":2.5,"vomiting":2.5,"diarrhea":2.5,"abdominal pain":2},doc:"General Physician",med:[{n:"ORS",d:"Oral Rehydration Salts"},{n:"Domperidone",d:"Anti-nausea"}],home:["Replace fluids with ORS","BRAT diet – Banana, Rice, Applesauce, Toast"]},
  gastroenteritis:{s:["diarrhea","vomiting","nausea","abdominal pain","fever","fatigue"],w:{"diarrhea":2.5,"vomiting":2.5,"nausea":2,"abdominal pain":2},doc:"Gastroenterologist",med:[{n:"ORS",d:"Oral Rehydration Salts"},{n:"Loperamide",d:"Anti-diarrhoeal"}],home:["Clear fluids only until vomiting stops","Gradually reintroduce bland foods"]},
  appendicitis:{s:["abdominal pain","nausea","vomiting","fever","loss of appetite"],w:{"abdominal pain":3,"nausea":2,"fever":1.5},doc:"Surgeon (Emergency)",med:[{n:"EMERGENCY",d:"Surgery may be required"}],home:["SEEK EMERGENCY CARE IMMEDIATELY","Do not eat or drink while awaiting diagnosis"]},
  peptic_ulcer:{s:["abdominal pain","nausea","blood in stool","vomiting","bloating","loss of appetite"],w:{"abdominal pain":3,"blood in stool":2.5,"bloating":1.5},doc:"Gastroenterologist",med:[{n:"Omeprazole",d:"PPI"},{n:"Antacid",d:"Magnesium Hydroxide"}],home:["Avoid spicy/acidic food","Eat smaller meals more frequently"]},
  gerd:{s:["heartburn","acid reflux","chest pain","difficulty swallowing","nausea","bloating"],w:{"heartburn":3,"acid reflux":3,"chest pain":1.5,"difficulty swallowing":2},doc:"Gastroenterologist",med:[{n:"Omeprazole",d:"Omeprazole 20mg"},{n:"Antacid",d:"Gaviscon / Eno"}],home:["Avoid spicy/oily/acidic foods","Sleep with head elevated"]},
  ibs:{s:["abdominal pain","bloating","diarrhea","constipation","nausea"],w:{"abdominal pain":2.5,"bloating":2.5,"diarrhea":2,"constipation":2},doc:"Gastroenterologist",med:[{n:"Mebeverine",d:"Antispasmodic"},{n:"Psyllium Husk",d:"Ispaghula Husk"}],home:["Food diary to identify triggers","Reduce stress; try yoga"]},
  hepatitis_a:{s:["jaundice","fatigue","nausea","abdominal pain","dark urine","loss of appetite","fever"],w:{"jaundice":3,"dark urine":2.5,"nausea":2,"fatigue":2},doc:"Hepatologist",med:[{n:"Supportive Care",d:"Manage symptoms"}],home:["Rest completely","Avoid alcohol; eat small nutritious meals"]},
  hepatitis_b:{s:["jaundice","fatigue","nausea","abdominal pain","dark urine","joint pain"],w:{"jaundice":3,"dark urine":2.5,"fatigue":2},doc:"Hepatologist",med:[{n:"Tenofovir",d:"Antiviral"},{n:"Entecavir",d:"Antiviral"}],home:["Avoid alcohol completely","Rest and eat nutritious food"]},
  cirrhosis:{s:["jaundice","swelling","fatigue","weight loss","bleeding","confusion"],w:{"jaundice":3,"swelling":2.5,"bleeding":2.5,"confusion":2},doc:"Hepatologist",med:[{n:"Spironolactone",d:"Diuretic"}],home:["Avoid alcohol completely","Reduce salt; seek urgent care"]},
  diabetes_type1:{s:["excessive thirst","excessive hunger","frequent urination","weight loss","fatigue","blurred vision"],w:{"excessive thirst":2.5,"frequent urination":2.5,"weight loss":2},doc:"Endocrinologist",med:[{n:"Insulin",d:"Insulin – prescription only"}],home:["Monitor blood glucose regularly","Carry glucose tablets for hypoglycemia"]},
  diabetes_type2:{s:["excessive thirst","frequent urination","fatigue","blurred vision","weight loss","numbness"],w:{"excessive thirst":2,"frequent urination":2,"fatigue":2,"numbness":1.5},doc:"Endocrinologist",med:[{n:"Metformin",d:"Metformin HCl 500mg"},{n:"Glipizide",d:"Glipizide"}],home:["Low-sugar high-fibre diet","Exercise 30 min daily; monitor sugar"]},
  hypothyroidism:{s:["fatigue","cold hands","cold feet","constipation","depression","hair loss","memory loss","weight gain"],w:{"cold hands":2.5,"cold feet":2.5,"fatigue":2,"hair loss":2,"constipation":2},doc:"Endocrinologist",med:[{n:"Levothyroxine",d:"Levothyroxine Sodium"}],home:["Take medication same time daily","Balanced diet with selenium and iodine"]},
  hyperthyroidism:{s:["palpitations","weight loss","sweating","anxiety","insomnia","excessive hunger"],w:{"palpitations":2.5,"weight loss":2,"sweating":2,"anxiety":2,"insomnia":2},doc:"Endocrinologist",med:[{n:"Carbimazole",d:"Carbimazole"},{n:"Propranolol",d:"Propranolol"}],home:["Avoid caffeine and stimulants","Get adequate rest"]},
  hypertension:{s:["headache","dizziness","chest pain","blurred vision","palpitations","shortness of breath"],w:{"headache":2,"dizziness":2,"chest pain":1.5,"blurred vision":1.5},doc:"Cardiologist",med:[{n:"Amlodipine",d:"Amlodipine 5mg"},{n:"Losartan",d:"Losartan 50mg"}],home:["Reduce salt; avoid processed food","Exercise daily; manage stress"]},
  heart_attack:{s:["chest pain","shortness of breath","sweating","nausea","palpitations","arm pain"],w:{"chest pain":3,"shortness of breath":2.5,"sweating":2},doc:"Cardiologist (EMERGENCY – call 112)",med:[{n:"Aspirin",d:"Aspirin 300mg – chew immediately"}],home:["CALL 112 IMMEDIATELY","Chew aspirin if not allergic; keep calm"]},
  heart_failure:{s:["shortness of breath","swelling","fatigue","chest pain","palpitations"],w:{"shortness of breath":3,"swelling":2.5,"fatigue":2},doc:"Cardiologist",med:[{n:"Furosemide",d:"Loop diuretic"},{n:"ACE Inhibitor",d:"Enalapril / Ramipril"}],home:["Restrict fluid and salt","Weigh daily to monitor fluid retention"]},
  stroke:{s:["numbness","confusion","blurred vision","headache","loss of consciousness","weakness","dizziness"],w:{"numbness":2.5,"confusion":2.5,"blurred vision":2,"headache":2.5,"loss of consciousness":3},doc:"Neurologist (EMERGENCY)",med:[{n:"EMERGENCY",d:"tPA – hospital only"}],home:["CALL 112 – use FAST test (Face Arms Speech Time)","Lay patient on side; do not give food or water"]},
  migraine:{s:["headache","nausea","blurred vision","vomiting","fatigue"],w:{"headache":3,"nausea":2,"blurred vision":2,"vomiting":1.5},doc:"Neurologist",med:[{n:"Sumatriptan",d:"Sumatriptan 50mg"},{n:"Ibuprofen",d:"Ibuprofen 400mg"}],home:["Rest in dark quiet room","Cold or warm compress on forehead"]},
  meningitis:{s:["headache","neck stiffness","high fever","confusion","nausea","vomiting","rash"],w:{"neck stiffness":3,"headache":2.5,"high fever":2.5,"confusion":2,"rash":2},doc:"Neurologist (Emergency)",med:[{n:"Ceftriaxone",d:"IV – hospital only"}],home:["EMERGENCY – seek care immediately","Keep patient calm and still"]},
  epilepsy:{s:["seizures","confusion","loss of consciousness","muscle cramps"],w:{"seizures":3,"loss of consciousness":2.5,"confusion":2},doc:"Neurologist",med:[{n:"Levetiracetam",d:"Keppra"},{n:"Valproate",d:"Sodium Valproate"}],home:["Clear area during seizure; do not restrain","Recovery position after seizure ends"]},
  anemia:{s:["fatigue","weakness","dizziness","shortness of breath","cold hands","headache","pale skin"],w:{"fatigue":2.5,"weakness":2.5,"dizziness":2},doc:"Hematologist",med:[{n:"Ferrous Sulfate",d:"Iron Supplement 200mg"},{n:"Folic Acid",d:"Folic Acid 5mg"}],home:["Eat iron-rich foods: spinach, lentils, meat","Vitamin C alongside iron for absorption"]},
  leukemia:{s:["fatigue","bleeding","bruising","fever","weight loss","swollen lymph nodes","night sweats"],w:{"bleeding":2.5,"bruising":2.5,"swollen lymph nodes":2.5,"night sweats":2},doc:"Oncologist",med:[{n:"Specialist Care",d:"Chemotherapy – hospital only"}],home:["Seek specialist immediately","Avoid infections; eat high-protein food"]},
  uti:{s:["painful urination","frequent urination","urinary urgency","blood in urine","abdominal pain","fever"],w:{"painful urination":3,"frequent urination":2.5,"urinary urgency":2.5,"blood in urine":2},doc:"Urologist",med:[{n:"Nitrofurantoin",d:"Nitrofurantoin 100mg 5 days"},{n:"Trimethoprim",d:"Trimethoprim 200mg"}],home:["Drink 2-3 litres of water daily","Unsweetened cranberry juice"]},
  kidney_stones:{s:["back pain","abdominal pain","blood in urine","painful urination","nausea","vomiting"],w:{"back pain":2.5,"abdominal pain":2.5,"blood in urine":3,"painful urination":2},doc:"Urologist",med:[{n:"Diclofenac",d:"For pain"},{n:"Tamsulosin",d:"Relaxes ureter"}],home:["Drink 3+ litres water daily","Avoid high-oxalate foods (nuts, spinach)"]},
  kidney_failure:{s:["swelling","fatigue","shortness of breath","confusion","nausea","blood in urine"],w:{"swelling":2.5,"fatigue":2,"shortness of breath":2,"blood in urine":2.5},doc:"Nephrologist",med:[{n:"Urgent Care",d:"Dialysis may be required"}],home:["Restrict fluid/salt/protein as advised","Monitor urine output; seek urgent care"]},
  arthritis:{s:["joint pain","stiff joints","swelling","weakness","fatigue"],w:{"joint pain":3,"stiff joints":3,"swelling":2},doc:"Rheumatologist",med:[{n:"Ibuprofen",d:"Ibuprofen 400mg"},{n:"Methotrexate",d:"For RA – prescription"}],home:["Warm compress on stiff joints","Gentle stretching daily"]},
  osteoporosis:{s:["back pain","joint pain","stiff joints","weakness"],w:{"back pain":2.5,"weakness":1.5},doc:"Orthopedist",med:[{n:"Calcium+D3",d:"Calcium 1000mg + Vit D3"},{n:"Alendronate",d:"Bisphosphonate"}],home:["Weight-bearing exercise daily","Increase calcium intake"]},
  chickenpox:{s:["rash","blisters","itching","fever","fatigue","loss of appetite"],w:{"rash":3,"blisters":3,"itching":2.5,"fever":2},doc:"General Physician",med:[{n:"Acyclovir",d:"Antiviral"},{n:"Calamine",d:"Calamine Lotion"}],home:["Trim nails; avoid scratching","Apply calamine lotion for itching"]},
  measles:{s:["rash","high fever","cough","runny nose","eye redness","swollen lymph nodes"],w:{"rash":3,"high fever":2,"eye redness":2},doc:"General Physician",med:[{n:"Paracetamol",d:"For fever"},{n:"Vitamin A",d:"Vitamin A supplement"}],home:["Rest in dim room (eyes sensitive)","Stay hydrated"]},
  mumps:{s:["swelling","swollen lymph nodes","fever","headache","fatigue","muscle pain"],w:{"swelling":3,"swollen lymph nodes":2,"fever":2},doc:"General Physician",med:[{n:"Paracetamol",d:"For fever and pain"}],home:["Warm/cool compress on swollen area","Soft foods; stay hydrated"]},
  allergy:{s:["itching","rash","sneezing","watery eyes","runny nose","swelling"],w:{"itching":3,"rash":2.5,"sneezing":2,"watery eyes":2},doc:"Allergist",med:[{n:"Cetirizine",d:"Cetirizine 10mg"},{n:"Loratadine",d:"Loratadine 10mg"}],home:["Identify and avoid allergens","Calamine lotion for skin reactions"]},
  eczema:{s:["itching","rash","skin peeling","blisters","swelling"],w:{"itching":3,"rash":2.5,"skin peeling":2.5},doc:"Dermatologist",med:[{n:"Hydrocortisone",d:"1% Cream"},{n:"Emollient",d:"Aqueous Cream / E45"}],home:["Moisturise; avoid hot water","Loose cotton clothing"]},
  psoriasis:{s:["skin peeling","rash","itching","joint pain"],w:{"skin peeling":3,"rash":2.5,"itching":2},doc:"Dermatologist",med:[{n:"Betamethasone",d:"Topical steroid cream"},{n:"Coal Tar",d:"Coal Tar Cream"}],home:["Moisturise daily","Manage stress; moderate sun exposure"]},
  acne:{s:["rash","itching","skin peeling"],w:{"rash":2.5,"itching":1},doc:"Dermatologist",med:[{n:"Benzoyl Peroxide",d:"Gel 5%"},{n:"Clindamycin",d:"Topical antibiotic gel"}],home:["Wash face twice daily","Avoid touching face"]},
  ringworm:{s:["itching","rash","skin peeling"],w:{"itching":3,"rash":3,"skin peeling":2},doc:"Dermatologist",med:[{n:"Clotrimazole",d:"Antifungal 1% cream"},{n:"Terbinafine",d:"Terbinafine cream"}],home:["Keep skin clean and dry","Do not share towels or clothing"]},
  depression:{s:["depression","fatigue","insomnia","weight loss","loss of appetite","mood changes","memory loss"],w:{"depression":3,"mood changes":2.5,"fatigue":2,"insomnia":2},doc:"Psychiatrist",med:[{n:"Sertraline",d:"SSRI – prescription only"},{n:"Escitalopram",d:"SSRI – prescription only"}],home:["Maintain daily routine and sleep schedule","Exercise; talk to someone you trust"]},
  anxiety_disorder:{s:["anxiety","palpitations","insomnia","sweating","shortness of breath","dizziness"],w:{"anxiety":3,"palpitations":2,"insomnia":2},doc:"Psychiatrist",med:[{n:"Escitalopram",d:"SSRI – prescription only"},{n:"Buspirone",d:"Anxiolytic – prescription only"}],home:["Deep breathing and mindfulness","Limit caffeine; regular exercise"]},
  conjunctivitis:{s:["eye redness","watery eyes","itching","discharge"],w:{"eye redness":3,"watery eyes":2.5,"discharge":2.5,"itching":2},doc:"Ophthalmologist",med:[{n:"Tobramycin",d:"Eye drops 0.3%"},{n:"Chloramphenicol",d:"Eye drops"}],home:["Do not rub eyes","Clean discharge with damp cloth; wash hands"]},
  sinusitis:{s:["headache","runny nose","sore throat","cough","fatigue","low grade fever","loss of smell"],w:{"headache":2,"runny nose":2,"loss of smell":2,"sore throat":1.5},doc:"ENT Specialist",med:[{n:"Amoxicillin",d:"500mg if bacterial"},{n:"Decongestant",d:"Xylometazoline nasal spray"}],home:["Steam inhalation 2-3x daily","Saline nasal rinse; stay hydrated"]},
  // ── DANGEROUS / CRITICAL ──
  hiv_aids:{s:["weight loss","night sweats","fatigue","swollen lymph nodes","fever","diarrhea","rash","mouth sores"],w:{"weight loss":2.5,"night sweats":2.5,"fatigue":2,"swollen lymph nodes":2.5,"fever":2,"rash":2},doc:"Infectious Disease Specialist",med:[{n:"Antiretroviral Therapy",d:"ART – specialist only"}],home:["Adhere strictly to ART medication","Practice safe sex; regular viral load monitoring"]},
  lung_cancer:{s:["persistent cough","coughing blood","chest pain","weight loss","shortness of breath","hoarseness","bone pain","fatigue"],w:{"persistent cough":3,"coughing blood":3,"chest pain":2,"weight loss":2.5,"shortness of breath":2},doc:"Oncologist / Pulmonologist",med:[{n:"Chemotherapy",d:"Hospital only"},{n:"Immunotherapy",d:"Pembrolizumab – specialist only"}],home:["Quit smoking immediately","Seek specialist urgently; avoid secondhand smoke"]},
  breast_cancer:{s:["breast lump","breast pain","nipple discharge","swelling","skin changes","rash","weight loss"],w:{"breast lump":3,"nipple discharge":2.5,"swelling":2,"skin changes":2},doc:"Oncologist",med:[{n:"Tamoxifen",d:"Hormone therapy – specialist"},{n:"Chemotherapy",d:"Hospital only"}],home:["Monthly self-breast examination","Seek specialist urgently if lump detected"]},
  colon_cancer:{s:["blood in stool","abdominal pain","weight loss","constipation","diarrhea","fatigue","bloating"],w:{"blood in stool":3,"abdominal pain":2,"weight loss":2.5,"constipation":2},doc:"Oncologist / Gastroenterologist",med:[{n:"Chemotherapy",d:"FOLFOX regimen – hospital only"},{n:"Bevacizumab",d:"Targeted therapy – specialist"}],home:["High-fibre diet; avoid red and processed meat","Seek specialist urgently"]},
  cervical_cancer:{s:["abnormal bleeding","pelvic pain","painful intercourse","discharge","back pain","weight loss"],w:{"abnormal bleeding":3,"pelvic pain":2.5,"discharge":2,"back pain":1.5},doc:"Gynecologist / Oncologist",med:[{n:"Chemotherapy",d:"Cisplatin – hospital only"},{n:"HPV Vaccine",d:"Gardasil – prevention"}],home:["Annual Pap smear screening","HPV vaccination; seek specialist if symptoms appear"]},
  brain_tumor:{s:["headache","seizures","vision problems","nausea","vomiting","weakness","confusion","memory loss"],w:{"headache":3,"seizures":2.5,"vision problems":2.5,"confusion":2,"memory loss":2},doc:"Neurologist / Neurosurgeon",med:[{n:"Temozolomide",d:"Chemotherapy – hospital only"},{n:"Dexamethasone",d:"Reduce brain swelling"}],home:["SEEK URGENT SPECIALIST CARE","Rest; avoid activities worsening symptoms"]},
  sepsis:{s:["high fever","chills","confusion","difficulty breathing","weakness","sweating","rapid heartbeat","low blood pressure"],w:{"high fever":2.5,"confusion":2.5,"difficulty breathing":2.5,"rapid heartbeat":2,"low blood pressure":3},doc:"Emergency Medicine (ICU)",med:[{n:"IV Antibiotics",d:"Broad-spectrum – hospital only"},{n:"Vasopressors",d:"ICU – hospital only"}],home:["CALL 112 IMMEDIATELY – life-threatening","Do not delay; this is a medical emergency"]},
  ebola:{s:["high fever","fatigue","muscle pain","headache","vomiting","diarrhea","bleeding","rash"],w:{"high fever":3,"bleeding":3,"muscle pain":2,"vomiting":2.5},doc:"Infectious Disease Specialist (Emergency)",med:[{n:"Atoltivimab",d:"Inmazeb – specialist only"},{n:"Supportive Care",d:"IV fluids – hospital only"}],home:["ISOLATE IMMEDIATELY","Contact health authorities; highly contagious"]},
  rabies:{s:["fever","headache","anxiety","confusion","excessive saliva","difficulty swallowing","seizures","paralysis"],w:{"anxiety":2.5,"confusion":2.5,"excessive saliva":3,"difficulty swallowing":2.5,"seizures":2},doc:"Emergency Medicine",med:[{n:"Post-Exposure Prophylaxis",d:"Rabies vaccine immediately after bite"},{n:"Rabies Immunoglobulin",d:"RIG – emergency only"}],home:["Wash bite wound with soap for 15 minutes","SEEK EMERGENCY CARE – fatal if untreated"]},
  mesothelioma:{s:["chest pain","shortness of breath","cough","weight loss","fatigue","swelling","fever"],w:{"chest pain":3,"shortness of breath":2.5,"cough":2,"weight loss":2.5},doc:"Oncologist / Pulmonologist",med:[{n:"Pemetrexed",d:"Chemotherapy – hospital only"},{n:"Cisplatin",d:"Chemotherapy – hospital only"}],home:["Avoid all asbestos exposure","Seek specialist urgently"]},
  angina:{s:["chest pain","shortness of breath","sweating","nausea","dizziness","palpitations"],w:{"chest pain":3,"shortness of breath":2,"sweating":1.5,"dizziness":1.5},doc:"Cardiologist",med:[{n:"Nitroglycerin",d:"GTN spray under tongue"},{n:"Aspirin",d:"Aspirin 75mg daily"}],home:["Rest immediately when pain occurs","Avoid strenuous activity; quit smoking"]},
  atrial_fibrillation:{s:["palpitations","shortness of breath","fatigue","dizziness","chest pain","anxiety"],w:{"palpitations":3,"shortness of breath":2,"fatigue":2,"dizziness":2},doc:"Cardiologist",med:[{n:"Warfarin",d:"Anticoagulant – prescription"},{n:"Digoxin",d:"Rate control – prescription"}],home:["Monitor pulse daily","Avoid alcohol; maintain healthy weight"]},
  deep_vein_thrombosis:{s:["swelling","leg pain","redness","warmth","skin discoloration"],w:{"swelling":3,"leg pain":2.5,"redness":2,"warmth":2},doc:"Vascular Surgeon",med:[{n:"Heparin",d:"IV anticoagulant – hospital"},{n:"Rivaroxaban",d:"Oral anticoagulant – prescription"}],home:["Elevate affected leg","Seek urgent care – risk of pulmonary embolism"]},
  pulmonary_embolism:{s:["shortness of breath","chest pain","palpitations","coughing blood","dizziness","loss of consciousness","sweating"],w:{"shortness of breath":3,"chest pain":2.5,"coughing blood":3,"palpitations":2},doc:"Emergency Medicine",med:[{n:"Heparin",d:"Anticoagulation – hospital"},{n:"Thrombolytics",d:"Clot-busting – ICU only"}],home:["CALL 112 IMMEDIATELY – life-threatening","Lie still until help arrives"]},
  pericarditis:{s:["chest pain","fever","shortness of breath","palpitations","fatigue","cough"],w:{"chest pain":3,"fever":2,"shortness of breath":2,"palpitations":1.5},doc:"Cardiologist",med:[{n:"Ibuprofen",d:"Anti-inflammatory"},{n:"Colchicine",d:"Colchicine 0.5mg"}],home:["Rest; avoid strenuous activity","Sitting upright may relieve pain"]},
  copd:{s:["shortness of breath","chronic cough","wheezing","chest tightness","excessive mucus","fatigue"],w:{"shortness of breath":3,"chronic cough":2.5,"wheezing":2,"chest tightness":2},doc:"Pulmonologist",med:[{n:"Tiotropium",d:"LAMA inhaler – prescription"},{n:"Salbutamol",d:"Reliever inhaler"}],home:["Quit smoking immediately","Pulmonary rehab; breathing exercises"]},
  pleurisy:{s:["chest pain","shortness of breath","cough","fever","chills"],w:{"chest pain":3,"shortness of breath":2,"cough":1.5},doc:"Pulmonologist",med:[{n:"Ibuprofen",d:"Anti-inflammatory"},{n:"Codeine",d:"Cough suppressant – prescription"}],home:["Rest; lying on affected side reduces pain","Avoid deep breaths if painful"]},
  pulmonary_fibrosis:{s:["shortness of breath","dry cough","fatigue","weight loss","muscle pain","clubbing of fingers"],w:{"shortness of breath":3,"dry cough":2.5,"fatigue":2,"clubbing of fingers":3},doc:"Pulmonologist",med:[{n:"Pirfenidone",d:"Antifibrotic – specialist"},{n:"Nintedanib",d:"Antifibrotic – specialist"}],home:["Pulmonary rehab and oxygen therapy","Avoid smoke; get flu and pneumonia vaccines"]},
  sleep_apnea:{s:["snoring","fatigue","morning headache","difficulty concentrating","insomnia","irritability","dry mouth"],w:{"snoring":3,"fatigue":2,"morning headache":2,"difficulty concentrating":1.5},doc:"Sleep Specialist / ENT",med:[{n:"CPAP Machine",d:"Continuous Positive Airway Pressure"}],home:["Sleep on your side not your back","Lose weight; avoid alcohol before bed"]},
  alzheimers:{s:["memory loss","confusion","disorientation","mood changes","difficulty speaking","personality changes","depression"],w:{"memory loss":3,"confusion":2.5,"disorientation":2.5,"personality changes":2},doc:"Neurologist / Geriatrician",med:[{n:"Donepezil",d:"Cholinesterase inhibitor – prescription"},{n:"Memantine",d:"NMDA antagonist – prescription"}],home:["Structured daily routine","Mental exercises; social engagement; caregiver support"]},
  parkinsons:{s:["tremors","muscle stiffness","slow movement","balance problems","speech changes","fatigue","depression"],w:{"tremors":3,"muscle stiffness":2.5,"slow movement":2.5,"balance problems":2},doc:"Neurologist",med:[{n:"Levodopa",d:"L-DOPA/Carbidopa – prescription"},{n:"Pramipexole",d:"Dopamine agonist – prescription"}],home:["Physical therapy and regular exercise","Fall-proof the home; use assistive devices"]},
  multiple_sclerosis:{s:["numbness","weakness","vision problems","fatigue","balance problems","bladder problems","depression","tremors"],w:{"numbness":2.5,"weakness":2.5,"vision problems":2.5,"fatigue":2,"balance problems":2},doc:"Neurologist",med:[{n:"Interferon Beta",d:"Disease-modifying – specialist"},{n:"Natalizumab",d:"Tysabri – specialist only"}],home:["Stay cool; heat worsens symptoms","Physical therapy; vitamin D supplementation"]},
  guillain_barre:{s:["weakness","numbness","tingling","difficulty walking","difficulty breathing","palpitations"],w:{"weakness":3,"numbness":2.5,"tingling":2,"difficulty walking":2.5,"difficulty breathing":2.5},doc:"Neurologist (Emergency)",med:[{n:"IVIG",d:"Intravenous immunoglobulin – hospital"},{n:"Plasmapheresis",d:"Plasma exchange – hospital"}],home:["SEEK EMERGENCY CARE – can be life-threatening","Physiotherapy during recovery"]},
  bell_palsy:{s:["facial drooping","eye problems","drooling","headache","ear pain","taste changes","watery eyes"],w:{"facial drooping":3,"eye problems":2.5,"drooling":2,"ear pain":2},doc:"Neurologist",med:[{n:"Prednisolone",d:"Corticosteroid – 50mg 10 days"},{n:"Acyclovir",d:"Antiviral – prescription"}],home:["Eye patch to protect cornea","Facial massage and exercises daily"]},
  trigeminal_neuralgia:{s:["facial pain","severe facial pain","headache","sensitivity to touch","eye pain"],w:{"severe facial pain":3,"sensitivity to touch":2.5,"facial pain":3},doc:"Neurologist",med:[{n:"Carbamazepine",d:"Anticonvulsant – first line"},{n:"Gabapentin",d:"Neuropathic pain – prescription"}],home:["Avoid triggers: cold wind, chewing","Soft diet during episodes"]},
  bipolar_disorder:{s:["mood changes","insomnia","excessive energy","depression","irritability","anxiety"],w:{"mood changes":3,"insomnia":2,"excessive energy":2.5,"depression":2.5},doc:"Psychiatrist",med:[{n:"Lithium",d:"Mood stabiliser – specialist"},{n:"Valproate",d:"Anticonvulsant mood stabiliser"}],home:["Consistent sleep schedule","Avoid alcohol and drugs; attend therapy"]},
  schizophrenia:{s:["hallucinations","delusions","confusion","social withdrawal","depression","anxiety","mood changes"],w:{"hallucinations":3,"delusions":3,"confusion":2.5,"social withdrawal":2},doc:"Psychiatrist",med:[{n:"Risperidone",d:"Atypical antipsychotic – specialist"},{n:"Olanzapine",d:"Atypical antipsychotic – specialist"}],home:["Structured daily routine","Family support; avoid stress and substance use"]},
  ptsd:{s:["anxiety","insomnia","depression","mood changes","irritability","nightmares","fatigue","social withdrawal"],w:{"anxiety":2.5,"insomnia":2,"nightmares":3,"depression":2.5},doc:"Psychiatrist / Psychologist",med:[{n:"Sertraline",d:"SSRI – prescription"},{n:"Prazosin",d:"For nightmares – prescription"}],home:["Trauma-focused therapy (CBT/EMDR)","Support groups; mindfulness practice"]},
  ocd:{s:["anxiety","obsessive thoughts","compulsive behaviour","depression","insomnia","irritability"],w:{"obsessive thoughts":3,"compulsive behaviour":3,"anxiety":2.5,"depression":2},doc:"Psychiatrist / Psychologist",med:[{n:"Fluvoxamine",d:"SSRI – prescription"},{n:"Clomipramine",d:"TCA – prescription"}],home:["Cognitive behavioural therapy","Avoid reassurance-seeking; maintain routine"]},
  anorexia:{s:["weight loss","fatigue","dizziness","hair loss","cold hands","constipation","depression","palpitations"],w:{"weight loss":3,"fatigue":2.5,"dizziness":2,"hair loss":2,"palpitations":2.5},doc:"Psychiatrist / Nutritionist",med:[{n:"Olanzapine",d:"For weight gain – specialist"},{n:"Nutritional Support",d:"Supervised refeeding program"}],home:["Seek specialist care immediately","Support groups; family-based therapy"]},
  lupus:{s:["rash","joint pain","fatigue","fever","hair loss","chest pain","sensitivity to light","swelling"],w:{"rash":3,"joint pain":2.5,"fatigue":2.5,"fever":2,"hair loss":2,"sensitivity to light":2.5},doc:"Rheumatologist",med:[{n:"Hydroxychloroquine",d:"Plaquenil – disease modifying"},{n:"Prednisolone",d:"Corticosteroid – prescription"}],home:["Avoid sun; use SPF 50+","Adequate rest; track symptoms and flares"]},
  rheumatoid_arthritis:{s:["joint pain","stiff joints","swelling","fatigue","fever","weight loss","rash"],w:{"joint pain":3,"stiff joints":3,"swelling":2.5,"fatigue":2,"fever":1.5},doc:"Rheumatologist",med:[{n:"Methotrexate",d:"DMARD – prescription"},{n:"Adalimumab",d:"Biologics – specialist"}],home:["Warm compress on stiff joints in morning","Physiotherapy; rest during flares"]},
  crohns_disease:{s:["abdominal pain","diarrhea","weight loss","fatigue","blood in stool","nausea","fever","mouth sores"],w:{"abdominal pain":3,"diarrhea":2.5,"weight loss":2.5,"blood in stool":2.5},doc:"Gastroenterologist",med:[{n:"Mesalazine",d:"Anti-inflammatory – prescription"},{n:"Infliximab",d:"Biologics – specialist"}],home:["Identify and avoid trigger foods","Low-fibre diet during flares; stress management"]},
  ulcerative_colitis:{s:["diarrhea","blood in stool","abdominal pain","fatigue","weight loss","fever","urinary urgency"],w:{"diarrhea":2.5,"blood in stool":3,"abdominal pain":2.5,"fatigue":2},doc:"Gastroenterologist",med:[{n:"Mesalazine",d:"5-ASA – anti-inflammatory"},{n:"Azathioprine",d:"Immunosuppressant – prescription"}],home:["Low-residue diet during flares","Probiotics; track trigger foods"]},
  celiac_disease:{s:["diarrhea","abdominal pain","bloating","weight loss","fatigue","rash","anemia","constipation"],w:{"diarrhea":2.5,"abdominal pain":2,"bloating":2,"weight loss":2,"fatigue":2},doc:"Gastroenterologist",med:[{n:"Strict Gluten-Free Diet",d:"Only treatment available"}],home:["Strictly avoid all gluten (wheat, barley, rye)","Read food labels carefully; use gluten-free products"]},
  fibromyalgia:{s:["widespread pain","fatigue","insomnia","headache","depression","anxiety","memory loss","stiff joints"],w:{"widespread pain":3,"fatigue":2.5,"insomnia":2,"headache":2,"depression":2},doc:"Rheumatologist",med:[{n:"Duloxetine",d:"Cymbalta – prescription"},{n:"Pregabalin",d:"Lyrica – prescription"}],home:["Regular low-impact exercise: swimming, walking","Pacing; cognitive behavioural therapy"]},
  addisons_disease:{s:["fatigue","weight loss","dizziness","darkening skin","nausea","vomiting","abdominal pain","salt craving"],w:{"fatigue":2.5,"weight loss":2,"darkening skin":3,"dizziness":2.5,"salt craving":3},doc:"Endocrinologist",med:[{n:"Hydrocortisone",d:"Steroid replacement – daily"},{n:"Fludrocortisone",d:"Mineralocorticoid – prescription"}],home:["Never miss steroid dose – life-threatening","Carry medical alert ID; double dose when ill"]},
  cushings_syndrome:{s:["weight gain","fatigue","high blood pressure","bruising","stretch marks","depression","muscle weakness","round face"],w:{"round face":3,"weight gain":2.5,"bruising":2.5,"stretch marks":2,"fatigue":2},doc:"Endocrinologist",med:[{n:"Ketoconazole",d:"Reduces cortisol – prescription"},{n:"Metyrapone",d:"Cortisol synthesis inhibitor"}],home:["Avoid unnecessary steroids","Regular monitoring of BP and blood sugar"]},
  polycystic_ovary:{s:["irregular periods","weight gain","acne","hair loss","excessive hair growth","depression","bloating"],w:{"irregular periods":3,"excessive hair growth":2.5,"weight gain":2,"acne":2,"hair loss":2},doc:"Gynecologist / Endocrinologist",med:[{n:"Metformin",d:"Insulin sensitiser"},{n:"Combined OCP",d:"Oral contraceptive pill"}],home:["Regular exercise and weight management","Low glycaemic index diet; avoid refined sugar"]},
  thyroid_cancer:{s:["neck lump","difficulty swallowing","hoarseness","neck pain","swollen lymph nodes","cough"],w:{"neck lump":3,"difficulty swallowing":2.5,"hoarseness":2.5,"neck pain":2},doc:"Endocrinologist / Oncologist",med:[{n:"Levothyroxine",d:"Post-surgery hormone replacement"},{n:"Radioactive Iodine",d:"RAI – specialist"}],home:["Seek specialist urgently","Regular thyroid function tests post-treatment"]},
  leptospirosis:{s:["high fever","headache","muscle pain","eye redness","rash","vomiting","jaundice","chills"],w:{"high fever":2.5,"headache":2,"muscle pain":2.5,"eye redness":2.5,"jaundice":2.5},doc:"Infectious Disease Specialist",med:[{n:"Doxycycline",d:"Doxycycline 100mg BD"},{n:"Penicillin G",d:"IV – hospital"}],home:["Avoid flood water and rat-infested areas","Wear protective boots; wash hands frequently"]},
  chikungunya:{s:["high fever","joint pain","rash","headache","fatigue","muscle pain","swelling"],w:{"high fever":2.5,"joint pain":3,"rash":2.5,"headache":2,"swelling":2.5},doc:"General Physician",med:[{n:"Paracetamol",d:"For fever – AVOID aspirin/ibuprofen"},{n:"ORS",d:"Oral Rehydration Salts"}],home:["Bed rest; stay hydrated","Cold compress on swollen joints"]},
  zika_virus:{s:["fever","rash","joint pain","eye redness","headache","muscle pain","fatigue"],w:{"fever":2,"rash":2.5,"joint pain":2,"eye redness":2.5,"headache":2},doc:"Infectious Disease Specialist",med:[{n:"Paracetamol",d:"For fever and pain"},{n:"ORS",d:"Hydration"}],home:["Prevent mosquito bites; use repellent","Pregnant women: avoid endemic areas – causes microcephaly"]},
  tetanus:{s:["muscle stiffness","jaw stiffness","difficulty swallowing","fever","sweating","seizures","muscle cramps"],w:{"jaw stiffness":3,"muscle stiffness":3,"difficulty swallowing":2.5,"muscle cramps":3},doc:"Emergency Medicine (ICU)",med:[{n:"Tetanus Immunoglobulin",d:"TIG – emergency"},{n:"Metronidazole",d:"IV antibiotic – hospital"}],home:["EMERGENCY – call 112 immediately","Keep wound clean; ensure tetanus vaccination up to date"]},
  prostate_cancer:{s:["frequent urination","difficulty urinating","blood in urine","back pain","pelvic pain","weight loss","bone pain"],w:{"frequent urination":2.5,"difficulty urinating":2.5,"blood in urine":2.5,"bone pain":3},doc:"Urologist / Oncologist",med:[{n:"Enzalutamide",d:"Hormone therapy – specialist"},{n:"Docetaxel",d:"Chemotherapy – hospital"}],home:["Annual PSA screening after age 50","Avoid high-fat diet; maintain healthy weight"]},
  bladder_cancer:{s:["blood in urine","painful urination","frequent urination","back pain","pelvic pain","weight loss"],w:{"blood in urine":3,"painful urination":2.5,"frequent urination":2,"back pain":2},doc:"Urologist / Oncologist",med:[{n:"BCG therapy",d:"Intravesical – hospital"},{n:"Gemcitabine",d:"Chemotherapy – specialist"}],home:["Seek specialist urgently","Stop smoking; drink 2+ litres water daily"]},
  gout:{s:["joint pain","swelling","redness","warmth","stiff joints","fever"],w:{"joint pain":3,"swelling":2.5,"redness":3,"warmth":2.5},doc:"Rheumatologist",med:[{n:"Colchicine",d:"0.5mg during attack"},{n:"Allopurinol",d:"Long-term prevention"}],home:["Avoid red meat, organ meat, shellfish, alcohol","Drink plenty of water; elevate affected joint"]},
  carpal_tunnel:{s:["numbness","tingling","weakness","wrist pain","hand pain","burning sensation"],w:{"numbness":3,"tingling":3,"weakness":2,"wrist pain":2.5},doc:"Neurologist / Orthopedist",med:[{n:"Wrist Splint",d:"Night-time splinting"},{n:"Corticosteroid Injection",d:"For severe cases – specialist"}],home:["Wrist exercises and stretches","Avoid repetitive wrist movements; ergonomic keyboard"]},
  melanoma:{s:["skin changes","mole changes","rash","bleeding","itching","weight loss"],w:{"skin changes":3,"mole changes":3,"bleeding":2.5},doc:"Dermatologist / Oncologist",med:[{n:"Pembrolizumab",d:"Immunotherapy – specialist"},{n:"Vemurafenib",d:"BRAF inhibitor – specialist"}],home:["Use SPF 50+ sunscreen daily","Check skin monthly using ABCDE rule; seek urgent care"]},
  shingles:{s:["rash","blisters","burning sensation","pain","itching","fever","headache","sensitivity to light"],w:{"rash":3,"blisters":3,"burning sensation":3,"pain":2.5},doc:"General Physician / Dermatologist",med:[{n:"Acyclovir",d:"800mg 5x daily for 7 days"},{n:"Gabapentin",d:"For post-herpetic neuralgia"}],home:["Keep rash clean and dry","Avoid contact with pregnant women and immunocompromised"]},
  vitiligo:{s:["skin discoloration","white patches","hair loss","sensitivity to light"],w:{"skin discoloration":3,"white patches":3,"sensitivity to light":2},doc:"Dermatologist",med:[{n:"Topical Corticosteroids",d:"Tacrolimus or Betamethasone"},{n:"Phototherapy",d:"NBUVB – specialist clinic"}],home:["Use SPF 50+ on depigmented areas","Camouflage cosmetics; avoid sunburn"]},
  rosacea:{s:["redness","flushing","rash","eye redness","burning sensation","swelling"],w:{"redness":3,"flushing":3,"rash":2,"burning sensation":2},doc:"Dermatologist",med:[{n:"Metronidazole",d:"Topical gel 0.75%"},{n:"Doxycycline",d:"Low-dose – prescription"}],home:["Avoid triggers: sun, heat, spicy food, alcohol","Gentle fragrance-free skincare; SPF daily"]},
  pancreatitis:{s:["abdominal pain","nausea","vomiting","fever","palpitations","bloating","jaundice","weight loss"],w:{"abdominal pain":3,"nausea":2,"vomiting":2,"fever":2,"jaundice":2.5},doc:"Gastroenterologist",med:[{n:"IV Fluids",d:"Aggressive hydration – hospital"},{n:"Analgesics",d:"Pain relief – hospital"}],home:["SEEK URGENT MEDICAL CARE","Fasting initially; avoid alcohol permanently"]},
  gallstones:{s:["abdominal pain","nausea","vomiting","jaundice","fever","bloating","back pain"],w:{"abdominal pain":3,"nausea":2,"vomiting":2,"jaundice":2.5,"fever":2},doc:"Gastroenterologist / Surgeon",med:[{n:"Ursodeoxycholic Acid",d:"Dissolves stones slowly"},{n:"Surgery",d:"Laparoscopic cholecystectomy"}],home:["Low-fat diet","Avoid skipping meals; maintain healthy weight"]},
  glaucoma:{s:["eye pain","blurred vision","headache","nausea","vision loss","rainbow halos"],w:{"eye pain":3,"vision loss":3,"blurred vision":2.5,"rainbow halos":3},doc:"Ophthalmologist",med:[{n:"Timolol",d:"Beta-blocker eye drops"},{n:"Latanoprost",d:"Prostaglandin eye drops"}],home:["Regular eye pressure checks","Avoid straining; sleep with head elevated"]},
  diabetic_retinopathy:{s:["blurred vision","vision loss","floaters","eye pain","colour blindness"],w:{"blurred vision":3,"vision loss":3,"floaters":2.5,"eye pain":2},doc:"Ophthalmologist",med:[{n:"Anti-VEGF Injections",d:"Ranibizumab – specialist"},{n:"Laser Photocoagulation",d:"Clinic procedure"}],home:["Strict blood sugar and BP control","Annual dilated eye exam if diabetic"]},
  cataracts:{s:["blurred vision","sensitivity to light","vision loss","colour fading","halos","double vision"],w:{"blurred vision":3,"sensitivity to light":2,"vision loss":3,"halos":2.5},doc:"Ophthalmologist",med:[{n:"Cataract Surgery",d:"Phacoemulsification – elective"}],home:["Wear UV-protective sunglasses","Adequate lighting; avoid night driving"]},
  multiple_myeloma:{s:["bone pain","fatigue","weakness","frequent infections","weight loss","numbness","constipation"],w:{"bone pain":3,"fatigue":2.5,"weakness":2.5,"frequent infections":2.5},doc:"Hematologist / Oncologist",med:[{n:"Bortezomib",d:"Velcade – specialist"},{n:"Thalidomide",d:"Immunomodulator – specialist"}],home:["Bone-strengthening exercises as tolerated","Stay hydrated; avoid NSAIDs"]},
  haemophilia:{s:["bleeding","bruising","joint pain","swelling","fatigue","blood in urine"],w:{"bleeding":3,"bruising":3,"joint pain":2.5,"swelling":2},doc:"Hematologist",med:[{n:"Factor VIII Replacement",d:"Clotting factor – hospital"},{n:"Desmopressin",d:"For mild haemophilia A"}],home:["Avoid contact sports","Carry medical alert ID; protect joints from injury"]}
};

// =====================================================================
// SYNONYM & DISEASE NAME MAPS
// =====================================================================
const SYNS = {
  "fever":["high fever","low grade fever","fever"],
  "high fever":["high fever"],"low fever":["low grade fever"],
  "high temperature":["high fever"],"temperature":["high fever","low grade fever"],
  "cold":["runny nose","sneezing","sore throat","cough"],
  "cough cold":["runny nose","sneezing","sore throat","cough","low grade fever"],
  "flu":["high fever","body aches","chills","fatigue","headache","cough"],
  "tired":["fatigue"],"tiredness":["fatigue"],"exhausted":["fatigue"],
  "weakness":["weakness"],"weak":["weakness"],
  "headache":["headache"],"head pain":["headache"],"head ache":["headache"],
  "migraine":["headache","nausea","blurred vision"],
  "stomach pain":["abdominal pain"],"stomach ache":["abdominal pain"],
  "tummy pain":["abdominal pain"],"belly pain":["abdominal pain"],
  "stomach upset":["nausea","abdominal pain"],"stomach problem":["nausea","abdominal pain"],
  "chest pain":["chest pain"],"chest ache":["chest pain"],
  "throat pain":["sore throat"],"throat":["sore throat"],
  "throat infection":["sore throat","fever"],
  "runny":["runny nose"],"blocked nose":["runny nose"],
  "vomit":["vomiting"],"throwing up":["vomiting"],"puke":["vomiting"],
  "loose motion":["diarrhea"],"loose motions":["diarrhea"],
  "loose stool":["diarrhea"],"loose stools":["diarrhea"],
  "motion":["diarrhea"],"watery stool":["diarrhea"],
  "shivering":["chills"],"shiver":["chills"],"trembling":["chills"],
  "body pain":["body aches","muscle pain"],"body ache":["body aches"],
  "bodyache":["body aches"],"bady ache":["body aches"],
  "muscle ache":["muscle pain"],"muscle pain":["muscle pain"],
  "joint ache":["joint pain"],"joint pain":["joint pain"],
  "swollen":["swelling"],"swollen joints":["swelling","joint pain"],
  "breathless":["shortness of breath","difficulty breathing"],
  "breathing problem":["shortness of breath","difficulty breathing"],
  "cant breathe":["shortness of breath","difficulty breathing"],
  "can't breathe":["shortness of breath","difficulty breathing"],
  "no smell":["loss of smell"],"can't smell":["loss of smell"],"smell loss":["loss of smell"],
  "no taste":["loss of taste"],"can't taste":["loss of taste"],"taste loss":["loss of taste"],
  "no appetite":["loss of appetite"],"not eating":["loss of appetite"],
  "skin rash":["rash"],"skin problem":["rash","itching"],
  "itchy":["itching"],"itchy skin":["itching","rash"],
  "yellow skin":["jaundice"],"yellow eyes":["jaundice"],"yellowish":["jaundice"],
  "urine color":["dark urine"],"yellow urine":["dark urine"],
  "frequent pee":["frequent urination"],"frequent peeing":["frequent urination"],
  "burning pee":["painful urination"],"burning urination":["painful urination"],
  "back pain":["back pain"],"lower back pain":["back pain"],
  "neck pain":["neck stiffness"],"stiff neck":["neck stiffness"],
  "forgetful":["memory loss"],"memory problem":["memory loss"],
  "palpitation":["palpitations"],"heart racing":["palpitations"],"heart fluttering":["palpitations"],
  "weight gain":["weight gain"],"gaining weight":["weight gain"],
  "losing weight":["weight loss"],"weight loss":["weight loss"],
  "eye red":["eye redness"],"red eye":["eye redness"],"pink eye":["eye redness","discharge"],
  "stress":["anxiety"],"panic":["anxiety","palpitations"],
  "sad":["depression"],"depressed":["depression"],"sadness":["depression"],
  "sleep problem":["insomnia"],"cant sleep":["insomnia"],"can't sleep":["insomnia"],
  "not sleeping":["insomnia"],"sleeplessness":["insomnia"],
  "seizure":["seizures"],"fits":["seizures"],"fit":["seizures"],
  "unconscious":["loss of consciousness"],"fainted":["loss of consciousness"],
  "fainting":["loss of consciousness","dizziness"],
  "dizzy":["dizziness"],"dizziness":["dizziness"],"giddiness":["dizziness"],
  "blurry vision":["blurred vision"],"blur vision":["blurred vision"],"vision problem":["blurred vision"],
  "numb":["numbness"],"numbness":["numbness"],
  "pins and needles":["numbness"],
  "sweating":["sweating"],"excessive sweat":["sweating"],
  "night sweat":["night sweats"],"night sweating":["night sweats"],
  "very thirsty":["excessive thirst"],"excessive thirst":["excessive thirst"],
  "always hungry":["excessive hunger"],"excessive hunger":["excessive hunger"],
  "whistling breath":["wheezing"],"noisy breathing":["wheezing"],
  "tight chest":["chest tightness"],"chest tightness":["chest tightness"],
  "heartburn":["heartburn","acid reflux"],"acidity":["heartburn","acid reflux","bloating"],
  "indigestion":["heartburn","acid reflux","bloating","nausea"],
  "gas":["bloating"],"gastric":["bloating","abdominal pain"],
  "constipation":["constipation"],"no motion":["constipation"],
  "bleeding":["bleeding"],"bruise":["bruising"],"bruising":["bruising"],
  "hair fall":["hair loss"],"hair falling":["hair loss"],"hairfall":["hair loss"],
  "cold hands":["cold hands","cold feet"],"cold feet":["cold feet"],
  "swollen lymph":["swollen lymph nodes"],"lymph nodes":["swollen lymph nodes"],"glands":["swollen lymph nodes"],
  "ear pain":["headache"],"earache":["headache"],
  "trouble swallowing":["difficulty swallowing"],"throat block":["difficulty swallowing","sore throat"],
  "discharge":["discharge"],"pus":["discharge"],
  "skin peeling":["skin peeling"],"peeling skin":["skin peeling"],
  "blisters":["blisters"],"blister":["blisters"],
  "muscle cramp":["muscle cramps"],"cramps":["muscle cramps"],
  "stiff joints":["stiff joints"],"joint stiffness":["stiff joints"],
  "coughing blood":["blood in stool"],"blood in cough":["productive cough"],
  "chest tightness":["chest tightness"],
  "dry cough":["dry cough"],"dry throat":["sore throat","dry cough"],
  "productive cough":["productive cough"],"phlegm":["productive cough"],
  "persistent cough":["persistent cough","productive cough"],
  "coughing blood":["coughing blood","blood in stool"],
  "breast lump":["breast lump"],"lump in breast":["breast lump"],
  "nipple discharge":["nipple discharge"],
  "skin changes":["skin changes"],"mole changes":["mole changes"],
  "white patches":["white patches"],"skin discoloration":["skin discoloration"],
  "burning sensation":["burning sensation"],"flushing":["flushing"],
  "rainbow halos":["rainbow halos"],"halos":["rainbow halos","halos"],
  "colour fading":["colour fading"],"double vision":["double vision"],
  "floaters":["floaters"],"vision problems":["vision problems","blurred vision"],
  "balance problems":["balance problems"],"bladder problems":["bladder problems"],
  "facial drooping":["facial drooping"],"drooling":["drooling"],
  "excessive saliva":["excessive saliva"],"paralysis":["paralysis","weakness"],
  "obsessive thoughts":["obsessive thoughts"],"compulsive behaviour":["compulsive behaviour"],
  "nightmares":["nightmares"],"flashbacks":["nightmares"],
  "hallucinations":["hallucinations"],"delusions":["delusions"],
  "grandiosity":["excessive energy"],"excessive energy":["excessive energy"],
  "social withdrawal":["social withdrawal"],
  "darkening skin":["darkening skin"],"dark skin":["darkening skin"],
  "salt craving":["salt craving"],"craving salt":["salt craving"],
  "moon face":["round face"],"round face":["round face"],
  "stretch marks":["stretch marks"],"striae":["stretch marks"],
  "irregular periods":["irregular periods"],"missed period":["irregular periods"],
  "excessive hair growth":["excessive hair growth"],"unwanted hair":["excessive hair growth"],
  "neck lump":["neck lump"],"lump in neck":["neck lump"],
  "hoarseness":["hoarseness"],"hoarse voice":["hoarseness"],
  "bone pain":["bone pain"],"deep bone pain":["bone pain"],
  "jaw stiffness":["jaw stiffness"],"lockjaw":["jaw stiffness","muscle stiffness"],
  "difficulty walking":["difficulty walking"],"cannot walk":["difficulty walking"],
  "slow movement":["slow movement"],"slowness":["slow movement"],
  "muscle stiffness":["muscle stiffness"],"rigid muscles":["muscle stiffness"],
  "tremors":["tremors"],"shaking hands":["tremors"],"hand tremors":["tremors"],
  "leg pain":["leg pain"],"calf pain":["leg pain"],
  "warmth":["warmth"],"warm to touch":["warmth"],
  "widespread pain":["widespread pain"],"pain all over":["widespread pain"],
  "morning headache":["morning headache","headache"],
  "snoring":["snoring"],"sleep snoring":["snoring"],
  "low blood pressure":["dizziness","weakness"],"bp low":["dizziness","weakness"],
  "rapid heartbeat":["palpitations"],"fast heartbeat":["palpitations"],
  "colour blindness":["colour blindness"],"cant see colours":["colour blindness"],
  "frequent infections":["frequent infections"],"always sick":["frequent infections"],
  "wrist pain":["wrist pain"],"hand pain":["hand pain"],
  "facial pain":["facial pain","headache"],"face pain":["facial pain"],
  "sensitivity to touch":["sensitivity to touch"],"touch hurts":["sensitivity to touch"],
  "sensitivity to light":["sensitivity to light"],"light hurts eyes":["sensitivity to light"],
  "painful intercourse":["pelvic pain"],"pain during sex":["pelvic pain"],
  "abnormal bleeding":["abnormal bleeding","bleeding"],"vaginal bleeding":["abnormal bleeding"],
  "pelvic pain":["pelvic pain"],"lower abdominal pain":["pelvic pain","abdominal pain"],
  "clubbing of fingers":["clubbing of fingers"],"finger clubbing":["clubbing of fingers"],
  "excessive mucus":["productive cough","excessive mucus"],"phlegm":["productive cough"],
  "chronic cough":["chronic cough","cough"],"long term cough":["chronic cough"],
  "hoarseness":["hoarseness"],"voice changes":["hoarseness","speech changes"],

};

const DNAMES = {
  "malaria":["high fever","chills","sweating","headache","nausea","vomiting","muscle pain","fatigue"],
  "dengue":["high fever","rash","joint pain","muscle pain","eye redness","nausea","vomiting"],
  "typhoid":["high fever","abdominal pain","headache","loss of appetite","weakness","diarrhea"],
  "cholera":["diarrhea","vomiting","muscle cramps","excessive thirst","weakness"],
  "tb":["productive cough","night sweats","weight loss","low grade fever","fatigue"],
  "tuberculosis":["productive cough","night sweats","weight loss","low grade fever","fatigue"],
  "pneumonia":["productive cough","high fever","shortness of breath","chest pain"],
  "asthma":["wheezing","shortness of breath","chest tightness","dry cough"],
  "diabetes":["excessive thirst","frequent urination","fatigue","blurred vision","weight loss"],
  "bp":["headache","dizziness","chest pain"],"high bp":["headache","dizziness","chest pain"],
  "hypertension":["headache","dizziness","chest pain","blurred vision","palpitations"],
  "migraine":["headache","nausea","blurred vision","vomiting"],
  "jaundice":["jaundice","fatigue","nausea","dark urine","loss of appetite"],
  "hepatitis":["jaundice","fatigue","nausea","dark urine","abdominal pain"],
  "appendicitis":["abdominal pain","nausea","vomiting","fever"],
  "arthritis":["joint pain","stiff joints","swelling","weakness"],
  "anemia":["fatigue","weakness","dizziness","pale skin","headache"],
  "uti":["painful urination","frequent urination","urinary urgency","fever"],
  "sinusitis":["headache","runny nose","loss of smell","sore throat"],
  "chickenpox":["rash","blisters","itching","fever"],
  "conjunctivitis":["eye redness","watery eyes","discharge","itching"],
  "pink eye":["eye redness","watery eyes","discharge","itching"],
  "heart attack":["chest pain","shortness of breath","sweating","nausea","arm pain"],
  "heart failure":["shortness of breath","swelling","fatigue","chest pain"],
  "stroke":["numbness","confusion","blurred vision","loss of consciousness","weakness"],
  "meningitis":["headache","neck stiffness","high fever","confusion","rash"],
  "epilepsy":["seizures","confusion","loss of consciousness"],
  "depression":["depression","fatigue","insomnia","mood changes","loss of appetite"],
  "anxiety":["anxiety","palpitations","insomnia","sweating","dizziness"],
  "gerd":["heartburn","acid reflux","chest pain","bloating"],
  "acid reflux":["heartburn","acid reflux","chest pain"],
  "ibs":["abdominal pain","bloating","diarrhea","constipation"],
  "eczema":["itching","rash","skin peeling"],"psoriasis":["skin peeling","rash","itching"],
  "ringworm":["itching","rash","skin peeling"],
  "hypothyroidism":["fatigue","cold hands","cold feet","hair loss","constipation","weight gain"],
  "hyperthyroidism":["palpitations","weight loss","sweating","anxiety","insomnia"],
  "covid":["dry cough","fever","loss of smell","loss of taste","fatigue"],
  "covid 19":["dry cough","fever","loss of smell","loss of taste","fatigue"],
  "coronavirus":["dry cough","fever","loss of smell","loss of taste","fatigue"],
  "corona":["dry cough","fever","loss of smell","loss of taste"],
  "flu":["high fever","body aches","chills","fatigue","headache","cough"],
  "influenza":["high fever","body aches","chills","fatigue","headache","cough"],
  "common cold":["runny nose","sneezing","sore throat","cough","low grade fever"],
  "cold":["runny nose","sneezing","sore throat","cough"],
  "food poisoning":["nausea","vomiting","diarrhea","abdominal pain","fever"],
  "food poison":["nausea","vomiting","diarrhea","abdominal pain"],
  "gastro":["diarrhea","vomiting","nausea","abdominal pain"],
  "kidney stone":["back pain","abdominal pain","blood in urine","painful urination"],
  "kidney stones":["back pain","abdominal pain","blood in urine","painful urination"],
  "leukemia":["fatigue","bleeding","bruising","swollen lymph nodes","night sweats"],
  "cancer":["fatigue","weight loss","night sweats","bleeding"],
  "osteoporosis":["back pain","joint pain","stiff joints","weakness"],
  "cirrhosis":["jaundice","swelling","bleeding","confusion","fatigue"],

  "aids":["weight loss","night sweats","fatigue","swollen lymph nodes","fever"],
  "hiv":["weight loss","night sweats","fatigue","swollen lymph nodes","fever","rash"],
  "lung cancer":["persistent cough","coughing blood","chest pain","weight loss","shortness of breath"],
  "breast cancer":["breast lump","breast pain","nipple discharge","swelling"],
  "colon cancer":["blood in stool","abdominal pain","weight loss","constipation"],
  "bowel cancer":["blood in stool","abdominal pain","weight loss","constipation"],
  "cervical cancer":["abnormal bleeding","pelvic pain","discharge","back pain"],
  "brain tumor":["headache","seizures","vision problems","confusion","nausea"],
  "brain tumour":["headache","seizures","vision problems","confusion","nausea"],
  "sepsis":["high fever","confusion","difficulty breathing","rapid heartbeat","low blood pressure"],
  "blood poisoning":["high fever","confusion","difficulty breathing","rapid heartbeat"],
  "ebola":["high fever","bleeding","muscle pain","vomiting","rash"],
  "rabies":["anxiety","confusion","excessive saliva","difficulty swallowing","seizures"],
  "angina":["chest pain","shortness of breath","sweating","nausea","dizziness"],
  "afib":["palpitations","shortness of breath","fatigue","dizziness"],
  "dvt":["swelling","leg pain","redness","warmth"],
  "blood clot":["swelling","leg pain","redness","warmth"],
  "pe":["shortness of breath","chest pain","coughing blood","dizziness"],
  "copd":["shortness of breath","chronic cough","wheezing","chest tightness"],
  "sleep apnea":["snoring","fatigue","morning headache","insomnia"],
  "alzheimer":["memory loss","confusion","disorientation","mood changes"],
  "dementia":["memory loss","confusion","disorientation","personality changes"],
  "parkinson":["tremors","muscle stiffness","slow movement","balance problems"],
  "ms":["numbness","weakness","vision problems","fatigue","balance problems"],
  "bell palsy":["facial drooping","eye problems","drooling","ear pain"],
  "bipolar":["mood changes","insomnia","excessive energy","depression"],
  "ptsd":["anxiety","insomnia","nightmares","depression"],
  "ocd":["obsessive thoughts","compulsive behaviour","anxiety"],
  "anorexia":["weight loss","fatigue","dizziness","hair loss"],
  "bulimia":["weight loss","fatigue","tooth decay","swelling"],
  "lupus":["rash","joint pain","fatigue","fever","hair loss","sensitivity to light"],
  "rheumatoid":["joint pain","stiff joints","swelling","fatigue"],
  "ra":["joint pain","stiff joints","swelling","fatigue"],
  "crohns":["abdominal pain","diarrhea","weight loss","blood in stool"],
  "colitis":["diarrhea","blood in stool","abdominal pain","fatigue"],
  "celiac":["diarrhea","abdominal pain","bloating","weight loss"],
  "gluten intolerance":["diarrhea","abdominal pain","bloating","fatigue"],
  "fibromyalgia":["widespread pain","fatigue","insomnia","headache"],
  "addisons":["fatigue","weight loss","darkening skin","dizziness","salt craving"],
  "cushings":["weight gain","round face","bruising","stretch marks"],
  "pcos":["irregular periods","weight gain","acne","hair loss","excessive hair growth"],
  "thyroid cancer":["neck lump","difficulty swallowing","hoarseness","neck pain"],
  "leptospirosis":["high fever","headache","muscle pain","eye redness","jaundice"],
  "chikungunya":["high fever","joint pain","rash","headache"],
  "zika":["fever","rash","joint pain","eye redness","headache"],
  "tetanus":["jaw stiffness","muscle stiffness","difficulty swallowing","seizures"],
  "lockjaw":["jaw stiffness","muscle stiffness","difficulty swallowing"],
  "prostate cancer":["frequent urination","difficulty urinating","blood in urine","bone pain"],
  "bladder cancer":["blood in urine","painful urination","frequent urination"],
  "gout":["joint pain","swelling","redness","warmth"],
  "carpal tunnel":["numbness","tingling","weakness","wrist pain"],
  "melanoma":["skin changes","mole changes","bleeding","itching"],
  "skin cancer":["skin changes","mole changes","bleeding","itching"],
  "shingles":["rash","blisters","burning sensation","pain","itching"],
  "herpes zoster":["rash","blisters","burning sensation","pain"],
  "vitiligo":["skin discoloration","white patches","hair loss"],
  "rosacea":["redness","flushing","rash","burning sensation"],
  "pancreatitis":["abdominal pain","nausea","vomiting","fever","jaundice"],
  "gallstones":["abdominal pain","nausea","vomiting","jaundice"],
  "gallbladder":["abdominal pain","nausea","vomiting","jaundice"],
  "glaucoma":["eye pain","blurred vision","vision loss","rainbow halos"],
  "cataract":["blurred vision","sensitivity to light","vision loss"],
  "cataracts":["blurred vision","sensitivity to light","vision loss"],
  "myeloma":["bone pain","fatigue","weakness","frequent infections"],
  "haemophilia":["bleeding","bruising","joint pain","swelling"],
  "hemophilia":["bleeding","bruising","joint pain","swelling"],
};

(function(){

// ── Build symptom list from DB ──
const ALL_SYMS = [...new Set(Object.values(DB).flatMap(d => d.s))];

// ── Levenshtein distance ──
function lev(a, b) {
  const m = a.length, n = b.length;
  const dp = [];
  for (let i = 0; i <= m; i++) { dp[i] = []; for (let j = 0; j <= n; j++) dp[i][j] = i === 0 ? j : j === 0 ? i : 0; }
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

// ── Resolve a single token → array of matched symptoms ──
function resolve(raw) {
  const t = raw.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '');
  if (!t || t.length < 2) return [];

  const out = new Set();

  // Layer 0: disease name
  if (DNAMES[t]) { DNAMES[t].forEach(s => out.add(s)); return [...out]; }
  for (const [k, v] of Object.entries(DNAMES)) {
    if (k.length > 3 && (t === k || t.includes(k) || k.includes(t))) { v.forEach(s => out.add(s)); return [...out]; }
  }

  // Layer 1: synonym exact
  if (SYNS[t]) { SYNS[t].forEach(s => out.add(s)); return [...out]; }
  // synonym partial
  for (const [k, v] of Object.entries(SYNS)) {
    if (k.length > 3 && (t === k || t.includes(k) || k.includes(t))) { v.forEach(s => out.add(s)); return [...out]; }
  }

  // Layer 2: direct exact on real symptom
  if (ALL_SYMS.includes(t)) { out.add(t); return [...out]; }

  // Layer 3: real symptom is substring of input (e.g. "severe headache" → "headache")
  for (const s of ALL_SYMS) { if (t.includes(s) && s.length >= 4) out.add(s); }
  if (out.size) return [...out];

  // Layer 4: input is substring of real symptom (e.g. "fever" → "high fever")
  for (const s of ALL_SYMS) { if (s.includes(t) && t.length >= 4) out.add(s); }
  if (out.size) return [...out];

  // Layer 5: levenshtein fuzzy
  let best = null, dist = Infinity;
  for (const s of ALL_SYMS) { const d = lev(t, s); if (d < dist) { dist = d; best = s; } }
  const threshold = t.length > 8 ? 3 : t.length > 5 ? 2 : 1;
  if (best && dist <= threshold) { out.add(best); return [...out]; }

  return [];
}

// ── Score diseases ──
function analyse(syms) {
  const norm = syms.map(s => s.toLowerCase());
  const results = [];
  for (const [key, d] of Object.entries(DB)) {
    let score = 0, matched = 0;
    for (const sy of d.s) {
      if (norm.includes(sy.toLowerCase())) { matched++; score += (d.w && d.w[sy]) || 1; }
    }
    if (matched > 0) results.push({ key, score: (score / Math.max(1, d.s.length)) * 100, matched });
  }
  return results.sort((a, b) => b.score - a.score);
}

// ── Emergency check ──
const EMERG_SYMS = ["chest pain","shortness of breath","loss of consciousness","seizures","difficulty breathing","arm pain","confusion","stroke","heart attack"];
function isEmerg(syms) { return syms.some(s => EMERG_SYMS.includes(s) || s.includes('severe')); }

// ── DOM refs ──
const chat     = document.getElementById('chat');
const inp      = document.getElementById('inp');
const typing   = document.getElementById('typing');
const emergBar = document.getElementById('emergBar');
const barsEl   = document.getElementById('bars');
const statChk  = document.getElementById('statChecks');
const statDis  = document.getElementById('statDisease');
const riskTag  = document.getElementById('riskTag');
const profChip = document.getElementById('profileChip');
const avatarEl = document.getElementById('avatarEl');
const profileModal = document.getElementById('profileModal');

// ── State ──
let profile = {};
let checks  = 0;
let lastDx  = null;

try { profile = JSON.parse(localStorage.getItem('hca_prof') || '{}'); } catch {}

// ── Chat ──
function addMsg(text, who, warn) {
  const b = document.createElement('div');
  b.className = 'bubble ' + who + (warn ? ' warn' : '');
  b.textContent = text;
  chat.appendChild(b);
  chat.scrollTop = chat.scrollHeight;
  if (who === 'bot') tts(text.slice(0, 250));
}

function showTyping(v) { typing.classList.toggle('show', v); }

function tts(t) {
  if (!window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(t);
  u.lang = document.getElementById('langSel').value || 'en-IN';
  speechSynthesis.speak(u);
}

// ── Bars ──
function renderBars(res) {
  barsEl.innerHTML = '';
  if (!res || !res.length) { barsEl.innerHTML = '<div class="no-data">No analysis yet</div>'; return; }
  const max = res[0].score || 1;
  res.forEach(r => {
    const pct = Math.max(5, (r.score / max) * 100);
    const label = r.key.replace(/_/g, ' ');
    barsEl.innerHTML += `<div class="bar-row"><div class="bar-label" title="${label}">${label}</div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><div class="bar-val">${r.score.toFixed(0)}</div></div>`;
  });
}

// ── MAIN HANDLER ──
function handleInput() {
  const raw = inp.value.trim();
  if (!raw) return;
  addMsg(raw, 'user');
  inp.value = '';

  // Split on common delimiters
  const tokens = raw.split(/[,;\/\n]|\band\b|\bor\b/gi).map(t => t.trim()).filter(t => t.length > 1);

  // Resolve all tokens to symptoms
  const syms = [];
  tokens.forEach(t => {
    const r = resolve(t);
    r.forEach(s => { if (!syms.includes(s)) syms.push(s); });
  });

  if (!syms.length) {
    addMsg(
      "I couldn't recognise those symptoms.\n\n" +
      "Try typing clearly, for example:\n" +
      "  • fever, cough, sore throat\n" +
      "  • headache, nausea, vomiting\n" +
      "  • loose motion, stomach pain\n" +
      "  • joint pain, swelling, fatigue\n\n" +
      "You can also type disease names:\n" +
      "  malaria, dengue, typhoid, covid, flu,\n" +
      "  arthritis, diabetes, migraine, uti...\n\n" +
      "Indian terms also work:\n" +
      "  bodyache, loose motion, fits, acidity,\n" +
      "  giddiness, hairfall, motions, phlegm",
      'bot'
    );
    return;
  }

  showTyping(true);
  setTimeout(() => doAnalysis(syms), 400);
}

function doAnalysis(syms) {
  const results = analyse(syms);
  showTyping(false);

  if (!results.length) {
    renderBars([]);
    addMsg("Your symptoms don't clearly match any condition in my database. Please consult a real doctor.", 'bot');
    return;
  }

  checks++;
  statChk.textContent = checks;

  const top3 = results.slice(0, 3);
  renderBars(top3);

  const top = top3[0];
  lastDx = top;
  const d = DB[top.key];
  const emerg = isEmerg(syms);
  const fname = top.key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  statDis.textContent = fname;
  riskTag.textContent  = emerg ? '⚠️ High risk' : '✅ Low risk';
  riskTag.style.background = emerg ? 'rgba(239,68,68,.1)' : 'rgba(16,185,129,.1)';
  riskTag.style.color = emerg ? '#fca5a5' : 'var(--accent)';
  riskTag.style.borderColor = emerg ? 'rgba(239,68,68,.3)' : 'rgba(16,185,129,.2)';

  emergBar.style.display = emerg ? 'block' : 'none';

  // Vitals
  const temp = document.getElementById('vTemp').value;
  const hr   = document.getElementById('vHR').value;
  const sys  = document.getElementById('vSys').value;
  const dia  = document.getElementById('vDia').value;

  let msg = '✅ Symptoms matched:\n' + syms.map(s => '  • ' + s).join('\n');

  if (temp || hr || (sys && dia)) {
    msg += '\n\n📊 Vitals:';
    if (temp) msg += `\n  • Temp: ${temp} °C`;
    if (hr)   msg += `\n  • HR: ${hr} bpm`;
    if (sys && dia) msg += `\n  • BP: ${sys}/${dia} mmHg`;
  }

  msg += `\n\n🩺 Most likely condition:\n  ${fname}`;
  msg += `\n  Match score: ${top.score.toFixed(1)}`;
  if (d.doc) msg += `\n  Doctor: ${d.doc}`;

  if (top3.length > 1) {
    msg += `\n\n📊 Other possibilities:\n`;
    top3.slice(1).forEach(r => { msg += `  • ${r.key.replace(/_/g,' ')} (${r.score.toFixed(0)})\n`; });
  }

  if (d.med && d.med.length) {
    msg += `\n💊 Example medicines (educational only):\n`;
    d.med.slice(0, 2).forEach(m => { msg += `  • ${m.n} (${m.d})\n`; });
  }

  if (d.home && d.home.length) {
    msg += `\n🏠 Home care:\n`;
    d.home.slice(0, 2).forEach(h => { msg += `  • ${h}\n`; });
  }

  if (emerg) msg += '\n\n🚨 WARNING: These symptoms may be a medical emergency. Call 112 / 108 now!';

  msg += '\n\n⚠️ Educational use only. Not a replacement for a real doctor.';

  addMsg(msg, 'bot', emerg);

  // Save history
  try {
    const h = JSON.parse(localStorage.getItem('hca_hist') || '[]');
    h.push({ syms, top: top.key, score: top.score, ts: Date.now() });
    localStorage.setItem('hca_hist', JSON.stringify(h.slice(-100)));
  } catch {}
}

// ── Profile ──
function updateChip() {
  const n = profile.name || 'Guest';
  profChip.textContent = n + (profile.age ? ' · ' + profile.age : '');
  avatarEl.textContent = n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'AI';
}

function calcBMI() {
  const h = parseFloat(document.getElementById('pfH').value || 0);
  const w = parseFloat(document.getElementById('pfW').value || 0);
  if (h && w) document.getElementById('pfBMI').value = (w / ((h / 100) ** 2)).toFixed(1);
}

function openProfile() {
  document.getElementById('pfName').value    = profile.name    || '';
  document.getElementById('pfAge').value     = profile.age     || '';
  document.getElementById('pfGender').value  = profile.gender  || '';
  document.getElementById('pfBlood').value   = profile.blood   || '';
  document.getElementById('pfH').value       = profile.height  || '';
  document.getElementById('pfW').value       = profile.weight  || '';
  document.getElementById('pfBMI').value     = profile.bmi     || '';
  document.getElementById('pfEmerg').value   = profile.emergency || '';
  document.getElementById('pfAllergy').value = profile.allergies || '';
  document.getElementById('pfChronic').value = profile.chronic  || '';
  profileModal.classList.add('open');
}

function saveProfile() {
  calcBMI();
  profile = {
    name: document.getElementById('pfName').value.trim(),
    age: document.getElementById('pfAge').value.trim(),
    gender: document.getElementById('pfGender').value.trim(),
    blood: document.getElementById('pfBlood').value.trim(),
    height: document.getElementById('pfH').value.trim(),
    weight: document.getElementById('pfW').value.trim(),
    bmi: document.getElementById('pfBMI').value,
    emergency: document.getElementById('pfEmerg').value.trim(),
    allergies: document.getElementById('pfAllergy').value.trim(),
    chronic: document.getElementById('pfChronic').value.trim(),
  };
  localStorage.setItem('hca_prof', JSON.stringify(profile));
  updateChip();
  profileModal.classList.remove('open');
  addMsg('Profile saved! Hello ' + (profile.name || 'there') + ' 👋', 'bot');
}

// ── History ──
function showHistory() {
  let h = [];
  try { h = JSON.parse(localStorage.getItem('hca_hist') || '[]'); } catch {}
  if (!h.length) { addMsg('No previous consultations found.', 'bot'); return; }
  let msg = '📜 Recent consultations:\n';
  h.slice(-7).reverse().forEach((item, i) => {
    msg += `\n${i + 1}. ${new Date(item.ts).toLocaleString()}\n   Symptoms: ${(item.syms || []).join(', ')}\n   Suggested: ${item.top} (${(item.score || 0).toFixed(1)})\n`;
  });
  addMsg(msg, 'bot');
}

// ── New chat ──
function newChat() {
  chat.innerHTML = '';
  renderBars([]);
  emergBar.style.display = 'none';
  let msg = 'Hi! I\'m your AI Health Assistant 🤖🩺\n\n';
  if (profile.name) msg += 'Welcome back, ' + profile.name + '!\n\n';
  msg += 'Describe your symptoms separated by commas.\n\nExamples:\n  • fever, cough, sore throat\n  • headache, nausea, vomiting\n  • loose motion, stomach pain\n  • chest pain, shortness of breath\n\nYou can also type disease names like:\n  malaria, dengue, covid, flu, arthritis, uti...\n\n⚠️ For educational purposes only — always consult a real doctor.';
  addMsg(msg, 'bot');
}

// ── Voice ──
function startVoice() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { alert('Voice not supported in this browser.'); return; }
  const r = new SR();
  r.lang = document.getElementById('langSel').value || 'en-IN';
  r.start();
  document.getElementById('btnMic').textContent = '🔴';
  r.onresult = e => { inp.value = e.results[0][0].transcript; document.getElementById('btnMic').textContent = '🎤'; };
  r.onerror = () => { document.getElementById('btnMic').textContent = '🎤'; };
}

// ── Theme ──
document.getElementById('btnTheme').addEventListener('click', () => {
  const t = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', t);
  localStorage.setItem('hca_theme', t);
});
const savedTheme = localStorage.getItem('hca_theme');
if (savedTheme) document.body.setAttribute('data-theme', savedTheme);

// ── Wiring ──
document.getElementById('btnSend').addEventListener('click', handleInput);
inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); handleInput(); } });
document.getElementById('btnMic').addEventListener('click', startVoice);
document.getElementById('btnImg').addEventListener('click', () => document.getElementById('fileIn').click());
document.getElementById('fileIn').addEventListener('change', () => {
  const f = document.getElementById('fileIn').files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = e => {
    const b = document.createElement('div'); b.className = 'bubble bot';
    b.innerHTML = '<b>📷 Image attached</b><br><img src="' + e.target.result + '" style="max-width:220px;margin-top:6px;border-radius:8px;display:block">';
    chat.appendChild(b); chat.scrollTop = chat.scrollHeight;
    addMsg('Image noted. I cannot analyse images visually in this version.', 'bot');
  };
  r.readAsDataURL(f);
});
document.getElementById('btnNewChat').addEventListener('click', newChat);
document.getElementById('btnHistory').addEventListener('click', showHistory);
document.getElementById('btnDoctor').addEventListener('click', () => {
  const spec = (lastDx && DB[lastDx.key] && DB[lastDx.key].doc) || 'Doctor';
  window.open('https://www.google.com/maps/search/' + encodeURIComponent(spec + ' near me'), '_blank');
});
document.getElementById('btnEmerg').addEventListener('click', () => {
  emergBar.style.display = emergBar.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('btnProfile').addEventListener('click', openProfile);
document.getElementById('btnSavePf').addEventListener('click', saveProfile);
document.getElementById('btnClearPf').addEventListener('click', () => {
  profile = {}; localStorage.removeItem('hca_prof'); updateChip();
  ['pfName','pfAge','pfGender','pfBlood','pfH','pfW','pfBMI','pfEmerg','pfAllergy','pfChronic'].forEach(id => document.getElementById(id).value = '');
});
document.getElementById('modalClose').addEventListener('click', () => profileModal.classList.remove('open'));
profileModal.addEventListener('click', e => { if (e.target === profileModal) profileModal.classList.remove('open'); });
document.getElementById('pfH').addEventListener('input', calcBMI);
document.getElementById('pfW').addEventListener('input', calcBMI);
document.getElementById('fab').addEventListener('click', () => { emergBar.style.display = emergBar.style.display === 'none' ? 'block' : 'none'; });
document.addEventListener('keydown', e => { if (e.ctrlKey && e.key.toLowerCase() === 'n') { e.preventDefault(); newChat(); } });

// ── Init ──
updateChip();
newChat();

})();
