// =====================================================
// BLUE TIDE CAD
// EMD DATABASE
// =====================================================

const emdDatabase = {

   "Abdominal Pain": [
    "1-D-1   Not alert",
    "1-C-1   Suspected aortic aneurysm (tearing/ripping pain) ≥50",
    "1-C-2   Known aortic aneurysm",
    "1-C-3   Fainting or near fainting ≥50",
    "1-C-4   Females with fainting or near fainting 12-50",
    "1-C-5   Males with pain above navel ≥35",
    "1-C-6   Females with pain above navel ≥45",
    "1-A-1   Abdominal pain"
],

"Allergic Reaction": [
    "2-E-1   Ineffective breathing",
    "2-D-1   Not alert",
    "2-D-2   Difficulty speaking between breaths",
    "2-D-3   Swarming attack (bee, wasp, hornet)",
    "2-D-4   Snakebite",
    "2-C-1   Difficulty breathing or swallowing",
    "2-C-2   History of severe allergic reaction",
    "2-B-1   Unknown status / Other codes not applicable",
    "2-A-1   No difficulty breathing or swallowing",
    "2-A-2   Spider bite"
],

"Animal Bites / Attacks": [
    "3-D-1   Unconscious or cardiac arrest",
    "3-D-2   Not alert",
    "3-D-3   Chest or neck injury with difficulty breathing",
    "3-D-4   Dangerous body area",
    "3-D-5   Large animal",
    "3-D-6   Exotic animal",
    "3-D-7   Attack or multiple animals",
    "3-B-1   Possibly dangerous body area",
    "3-B-2   Serious hemorrhage",
    "3-B-3   Unknown status / Other codes not applicable",
    "3-A-1   Not dangerous body area",
    "3-A-2   Non-recent (≥6 hours) injuries without priority symptoms",
    "3-A-3   Superficial bites"
],

"Assault / Sexual Assault": [
    "4-D-1   Unconscious or cardiac arrest",
    "4-D-2   Not alert",
    "4-D-3   Chest or neck injury with difficulty breathing",
    "4-D-4   Multiple victims",
    "4-B-1   Possibly dangerous body area",
    "4-B-2   Serious hemorrhage",
    "4-B-3   Unknown status / Other codes not applicable",
    "4-A-1   Not dangerous body area",
    "4-A-2   Non-recent (≥6 hours) injuries without priority symptoms"
],

"Back Pain": [
    "5-D-1   Not alert",
    "5-C-1   Suspected aortic aneurysm (tearing/ripping pain) ≥50",
    "5-C-2   Known aortic aneurysm",
    "5-C-3   Fainting or near fainting ≥50",
    "5-A-1   Non-traumatic back pain",
    "5-A-2   Non-recent (≥6 hours) injuries without priority symptoms"
],

"Breathing Problems": [
    "6-E-1   Ineffective breathing",
    "6-D-1   Not alert",
    "6-D-2   Difficulty speaking between breaths",
    "6-D-3   Changing color",
    "6-D-4   Clammy",
    "6-C-1   Abnormal breathing"
],

"Burns / Explosion": [
    "7-D-1   Multiple victims",
    "7-D-2   Unconscious or cardiac arrest",
    "7-D-3   Not alert",
    "7-D-4   Difficulty speaking between breaths",
    "7-C-1   Building fire with persons reported inside",
    "7-C-2   Difficulty breathing",
    "7-C-3   Burns ≥18% body surface area",
    "7-C-4   Significant facial burns",
    "7-B-1   Blast injuries without priority symptoms",
    "7-B-2   Unknown status / Other codes not applicable",
    "7-A-1   Burns ≤18% body surface area",
    "7-A-2   Fire alarm (unknown situation)",
    "7-A-3   Sunburn or minor burns (≤ hand size)"
],

"Carbon Monoxide / Inhalation / HazMat / CBRN": [
    "8-D-1   Unconscious or cardiac arrest",
    "8-D-2   Not alert",
    "8-D-3   Difficulty speaking between breaths",
    "8-D-4   Multiple victims",
    "8-D-5   Unknown status / Other codes not applicable",
    "8-C-1   Alert with difficulty breathing",
    "8-B-1   Alert without difficulty breathing",
    "8-O-1   Carbon monoxide detector alarm (without priority symptoms)"
],

"Cardiac or Respiratory Arrest / Death": [
    "9-E-1   Not breathing at all",
    "9-E-2   Breathing uncertain (agonal)",
    "9-E-3   Hanging",
    "9-E-4   Strangulation",
    "9-E-5   Suffocation",
    "9-E-6   Underwater",
    "9-D-1   Ineffective breathing (discovered during questioning)",
    "9-D-2   Obvious or expected death questionable",
    "9-B-1   Obvious death (unquestionable)",
    "9-O-1   Expected death (unquestionable)"
],
"Chest Pain": [
    "10-D-1   Not alert",
    "10-D-2   Difficulty speaking between breaths",
    "10-D-3   Changing color",
    "10-D-4   Clammy",
    "10-C-1   Abnormal breathing",
    "10-C-2   Heart attack or angina history",
    "10-C-3   Cocaine use",
    "10-C-4   Breathing normally ≥35",
    "10-A-1   Breathing normally ≤35"
],

"Choking": [
    "11-E-1   Complete obstruction / Ineffective breathing",
    "11-D-1   Abnormal breathing (partial obstruction)",
    "11-D-2   Not alert",
    "11-A-1   Not choking now (can talk or cry, alert and breathing normally)"
],

"Convulsions / Seizures": [
    "12-D-1   Not breathing (after Key Questioning)",
    "12-D-2   Continuous or multiple seizures",
    "12-D-3   Agonal / Ineffective breathing",
    "12-D-4   Effective breathing not verified ≥35",
    "12-C-1   Focal seizure (not alert)",
    "12-C-2   Pregnancy",
    "12-C-3   Diabetic",
    "12-B-1   Effective breathing not verified ≤35",
    "12-A-1   Not seizing now and breathing effectively (verified)",
    "12-A-2   Focal seizure (alert)",
    "12-A-3   Impending seizure (aura)"
],

"Diabetic Problems": [
    "13-D-1   Unconscious",
    "13-C-1   Not alert",
    "13-C-2   Abnormal behavior",
    "13-C-3   Abnormal breathing",
    "13-A-1   Alert and behaving normally"
],

"Drowning / Diving / SCUBA Accident": [
    "14-D-1   Unconscious or cardiac arrest",
    "14-D-2   Not alert",
    "14-D-3   Diving or suspected neck injury",
    "14-D-4   SCUBA accident",
    "14-C-1   Alert with abnormal breathing",
    "14-B-1   Alert and breathing normally (injuries or in water)",
    "14-B-2   Unknown status / Other codes not applicable",
    "14-A-1   Alert and breathing normally (no injuries and out of water)"
],

"Electrocution / Lightning": [
    "15-E-1   Not breathing / Ineffective breathing",
    "15-D-1   Unconscious",
    "15-D-2   Not disconnected from power",
    "15-D-3   Power not off or hazard present",
    "15-D-4   Extreme fall (≥30 ft / 10 m)",
    "15-D-5   Long fall",
    "15-D-6   Not alert",
    "15-D-7   Abnormal breathing",
    "15-D-8   Unknown status / Other codes not applicable",
    "15-C-1   Alert and breathing normally"
],

"Eye Problems / Injuries": [
    "16-D-1   Not alert",
    "16-B-1   Severe eye injuries",
    "16-A-1   Moderate eye injuries",
    "16-A-2   Minor eye injuries",
    "16-A-3   Medical eye problems"
],

"Falls": [
    "17-D-1   Extreme fall (≥30 ft / 10 m)",
    "17-D-2   Unconscious or cardiac arrest",
    "17-D-3   Not alert",
    "17-D-4   Chest or neck injury with difficulty breathing",
    "17-D-5   Long fall",
    "17-B-1   Possibly dangerous body area",
    "17-B-2   Serious hemorrhage",
    "17-B-3   Unknown status / Other codes not applicable",
    "17-A-1   Not dangerous body area",
    "17-A-2   Non-recent (≥6 hours) injuries without priority symptoms",
    "17-A-3   Public assist (no injuries and no priority symptoms)"
],

"Headache": [
    "18-C-1   Not alert",
    "18-C-2   Abnormal breathing",
    "18-C-3   Speech problems",
    "18-C-4   Sudden onset of severe pain",
    "18-C-5   Numbness",
    "18-C-6   Paralysis",
    "18-C-7   Change in behavior (≤3 hours)",
    "18-B-1   Unknown status / Other codes not applicable",
    "18-A-1   Breathing normally"
],
"Heart Problems / A.I.C.D.": [
    "19-D-1   Not alert",
    "19-D-2   Difficulty speaking between breaths",
    "19-D-3   Changing color",
    "19-D-4   Clammy",
    "19-D-5   Just resuscitated and/or externally defibrillated",
    "19-C-1   Firing of A.I.C.D.",
    "19-C-2   Abnormal breathing",
    "19-C-3   Chest pain ≥35",
    "19-C-4   Cardiac history",
    "19-C-5   Cocaine use",
    "19-C-6   Heart rate ≤50 bpm or ≥130 bpm (without priority symptoms)",
    "19-C-7   Unknown status / Other codes not applicable",
    "19-A-1   Heart rate 50-130 bpm (without priority symptoms)",
    "19-A-2   Chest pain ≤35 (without priority symptoms)"
],

"Heat / Cold Exposure": [
    "20-D-1   Not alert",
    "20-D-2   Multiple victims (with priority symptoms)",
    "20-C-1   Heart attack or angina history",
    "20-B-1   Change in skin color",
    "20-B-2   Unknown status / Other codes not applicable",
    "20-A-1   Alert"
],

"Hemorrhage / Lacerations": [
    "21-D-1   Unconscious or cardiac arrest",
    "21-D-2   Not alert",
    "21-D-3   Dangerous hemorrhage",
    "21-D-4   Abnormal breathing",
    "21-C-1   Hemorrhage through tubes",
    "21-C-2   Hemorrhage of dialysis fistula",
    "21-B-1   Possibly dangerous hemorrhage",
    "21-B-2   Serious hemorrhage",
    "21-B-3   Bleeding disorder",
    "21-B-4   Blood thinners",
    "21-A-1   Not dangerous hemorrhage",
    "21-A-2   Minor hemorrhage"
],

"Inaccessible Incident / Other Entrapments": [
    "22-D-1   Mechanical / Machinery entrapment",
    "22-D-2   Trench collapse",
    "22-D-3   Structure collapse",
    "22-D-4   Confined space entrapment",
    "22-D-5   Inaccessible terrain situation",
    "22-D-6   Mudslide / Avalanche",
    "22-B-1   No longer trapped (unknown injuries)",
    "22-B-2   Peripheral entrapment only",
    "22-B-3   Unknown status / Investigation / Other codes not applicable",
    "22-A-1   No longer trapped (no injuries)"
],

"Overdose / Poisoning": [
    "23-D-1   Unconscious",
    "23-D-2   Changing color",
    "23-C-1   Not alert",
    "23-C-2   Abnormal breathing",
    "23-C-3   Tricyclic antidepressants",
    "23-C-4   Cocaine, methamphetamine, or derivatives",
    "23-C-5   Narcotics (heroin)",
    "23-C-6   Acid or alkali (lye)",
    "23-C-7   Unknown status / Other codes not applicable",
    "23-C-8   Poison Control requested response",
    "23-B-1   Overdose (without priority symptoms)",
    "23-O-1   Poisoning (without priority symptoms)"
],

"Pregnancy / Childbirth / Miscarriage": [
    "24-D-1   Breech or cord",
    "24-D-2   Head visible / Head out",
    "24-D-3   Imminent delivery (≥20 weeks / ≥5 months)",
    "24-D-4   Third trimester hemorrhage",
    "24-D-5   High-risk complications",
    "24-D-6   Baby born (complications with baby)",
    "24-D-7   Baby born (complications with mother)",
    "24-C-1   Second trimester hemorrhage or miscarriage",
    "24-C-2   First trimester serious hemorrhage",
    "24-C-3   Baby born (no complications)",
    "24-B-1   Labor (delivery not imminent, ≥20 weeks / ≥5 months)",
    "24-B-2   Unknown status / Other codes not applicable",
    "24-A-1   First trimester hemorrhage or miscarriage",
    "24-O-1   Waters broken (no contractions or presenting parts)"
],

"Psychiatric / Abnormal Behavior / Suicide Attempt": [
    "25-D-1   Not alert",
    "25-D-2   Dangerous hemorrhage",
    "25-B-1   Serious hemorrhage",
    "25-B-2   Non-serious or minor hemorrhage",
    "25-B-3   Threatening suicide",
    "25-B-4   Threatening jumper",
    "25-B-5   Near hanging, strangulation, or suffocation (alert)",
    "25-B-6   Unknown status / Other codes not applicable",
    "25-A-1   Non-suicidal and alert",
    "25-A-2   Suicidal (not threatening) and alert"
],

"Sick Person": [
    "26-D-1   Not alert",
    "26-C-1   Altered level of consciousness",
    "26-C-2   Abnormal breathing",
    "26-C-3   Sickle cell crisis / Thalassemia",
    "26-B-1   Unknown status / Other codes not applicable",
    "26-A-1   No priority symptoms (complaint conditions 2-11 not identified)",
    "26-A-2   Non-priority complaints"
],

"Stab / Gunshot / Penetrating Trauma": [
    "27-D-1   Unconscious or cardiac arrest",
    "27-D-2   Not alert",
    "27-D-3   Central wounds",
    "27-D-4   Multiple wounds",
    "27-D-5   Multiple victims",
    "27-B-1   Non-recent (≥6 hours) single central wound",
    "27-B-2   Known single peripheral wound",
    "27-B-3   Serious hemorrhage",
    "27-B-4   Unknown status / Other codes not applicable",
    "27-B-5   Obvious death (explosive gunshot wound to head)",
    "27-A-1   Non-recent (≥6 hours) peripheral wounds (without priority symptoms)"
],
"Stroke (CVA)": [
    "28-C-1   Not alert",
    "28-C-2   Abnormal breathing",
    "28-C-3   Speech problems",
    "28-C-4   Numbness, paralysis, or movement problems",
    "28-C-5   Vision problems",
    "28-C-6   Sudden onset of severe headache",
    "28-C-7   Stroke history",
    "28-C-8   Breathing normally ≥35",
    "28-B-1   Unknown status / Other codes not applicable",
    "28-A-1   Breathing normally ≤35"
],

"Traffic / Transportation Incidents": [
    "29-D-1   Major incident",
    "29-D-2   High mechanism",
    "29-D-3   Hazardous materials",
    "29-D-4   Pinned (trapped) victim",
    "29-D-5   Not alert",
    "29-B-1   Injuries",
    "29-B-2   Serious hemorrhage",
    "29-B-3   Other hazards",
    "29-B-4   Unknown status / Other codes not applicable",
    "29-A-1   First-party caller with injury to non-dangerous body area",
    "29-O-1   No injuries (confirmed)"
],

"Traumatic Injuries (Specific)": [
    "30-D-1   Unconscious or cardiac arrest",
    "30-D-2   Not alert",
    "30-D-3   Chest or neck injury with difficulty breathing",
    "30-B-1   Possibly dangerous body area",
    "30-B-2   Serious hemorrhage",
    "30-A-1   Not dangerous body area",
    "30-A-2   Non-recent (≥6 hours) injuries without priority symptoms",
    "30-O-1   No injuries (confirmed)"
],

"Unconscious / Fainting (Near)": [
    "31-E-1   Ineffective breathing",
    "31-D-1   Unconscious - Agonal / Ineffective breathing",
    "31-D-2   Unconscious - Effective breathing",
    "31-D-3   Not alert",
    "31-D-4   Changing color",
    "31-C-1   Alert with abnormal breathing",
    "31-C-2   Fainting episode(s), alert ≥35 (with cardiac history)",
    "31-C-3   Female 12-50 with abdominal pain",
    "31-A-1   Fainting episode(s), alert ≥35 (without cardiac history)",
    "31-A-2   Fainting episode(s), alert ≤35 (with cardiac history)",
    "31-A-3   Fainting episode(s), alert ≤35 (without cardiac history)"
],

"Unknown Problem (Man Down)": [
    "32-D-1   Life status questionable",
    "32-B-1   Standing, sitting, moving, or talking",
    "32-B-2   Medical alarm notification (no patient information)",
    "32-B-3   Unknown status / Other codes not applicable",
    "32-B-4   Caller's language not understood (no interpreter available)"
],

"Transfer / Interfacility / Palliative Care": [
    "33-D-1   Suspected cardiac or respiratory arrest",
    "33-D-2   Just resuscitated and/or externally defibrillated",
    "33-C-1   Not alert (acute change)",
    "33-C-2   Abnormal breathing (acute onset)",
    "33-C-3   Significant hemorrhage or shock",
    "33-C-4   Possible acute heart problems or myocardial infarction",
    "33-C-5   Acute severe pain",
    "33-C-6   Emergency response requested",
    "33-A-1   Acuity I (no priority symptoms)",
    "33-A-2   Acuity II (no priority symptoms)",
    "33-A-3   Acuity III (no priority symptoms)"
],

"Automatic Crash Notification": [
    "34-D-1   High mechanism",
    "34-D-2   Unconscious",
    "34-D-3   Not breathing / Ineffective breathing",
    "34-D-4   Life status questionable",
    "34-B-1   Injuries involved",
    "34-B-2   Multiple victims (one unit)",
    "34-B-3   Multiple victims (additional units)",
    "34-B-4   Airbag / Other automatic sensor activation",
    "34-A-1   Non-dangerous injuries (first-party caller, single occupant)",
    "34-O-1   No injuries (refer to law enforcement)"
],

"Health Care Professional Admission": [
    "35-D-1   HCP not on scene (immediate life threat)",
    "35-D-2   HCP on scene without AED (immediate life threat)",
    "35-D-3   HCP on scene with AED (immediate life threat)",
    "35-C-1   HCP not on scene (emergency response)",
    "35-C-2   HCP on scene without AED (emergency response)",
    "35-C-3   HCP on scene with AED (emergency response)",
    "35-A-1   At patient within 1 hour",
    "35-A-2   At patient within 2 hours",
    "35-A-3   At patient within 3 hours",
    "35-A-4   At patient within 4 hours"
],

"Pandemic Flu": [
    "36-D-1   Ineffective breathing with flu symptoms",
    "36-D-2   Not alert with flu symptoms",
    "36-D-3   Difficulty speaking between breaths with flu symptoms",
    "36-D-4   Changing color with flu symptoms",
    "36-C-1   Chest pain ≥35 with single flu symptom",
    "36-C-2   Abnormal breathing with single flu symptom",
    "36-A-1   Chest pain ≥35 with multiple flu symptoms",
    "36-A-2   Chest pain <35 with single flu symptom",
    "36-A-3   Abnormal breathing with multiple flu symptoms",
    "36-O-1   Flu symptoms only (cough, fever, chills, sweats, sore throat, diarrhea, body aches, headache, etc.)",
    "36-O-2   Chest pain <35 with multiple flu symptoms"
],

"Special Assignments / EMS Standbys": [

    "90-A-1 Public Event EMS Standby",
    "90-A-2 Sporting Event EMS Standby",
    "90-A-3 Concert / Festival EMS Standby",
    "90-A-4 Parade EMS Standby",
    "90-A-5 Fair / Carnival EMS Standby",
    "90-A-6 School Event EMS Standby",
    "90-A-7 Community Event EMS Standby",
    "90-A-8 Standby - Fireworks Display",
    "90-A-9 Film / TV Production Standby",

    "90-B-1 Law Enforcement Standby",
    "90-B-2 Fire Department Standby",
    "90-B-3 Rescue Team Standby",
    "90-B-4 HazMat Standby",
    "90-B-5 Technical Rescue Standby",
    "90-B-6 Dive Team Standby",
    "90-B-7 SWAT / Tactical EMS",
    "90-B-8 K-9 Deployment Standby",

    "90-C-1 Aircraft Standby",
    "90-C-2 Helicopter Landing Zone Standby",
    "90-C-3 VIP Protection Detail",
    "90-C-4 Dignitary Escort",
    "90-C-5 High-Risk Public Event",
    "90-C-6 Planned Mass Gathering",

    "90-D-1 Disaster Standby",
    "90-D-2 Severe Weather Standby",
    "90-D-3 Hurricane Response Staging",
    "90-D-4 Wildland Fire Standby",
    "90-D-5 Mass Casualty Staging",
    "90-D-6 Incident Rehabilitation Assignment"

]
    
};