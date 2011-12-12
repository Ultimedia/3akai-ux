/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
define(["config/config"], function(config) {

    // Custom CSS Files to load in
    // config.skinCSS = ["/dev/skins/default/skin.css"];

    /**
     * Kaltura Settings
     */
    config.kaltura = {
        enabled: false, // Enable/disable Kaltura player
        serverURL:  "http://www.kaltura.com", //INSERT_KALTURA_INSTALLATION_URL_HERE
        partnerId:  100, //INSERT_YOUR_PARTNER_ID_HERE
        playerId: 100 //INSERT_YOUR_PLAYER_ID_HERE
    };

    config.Profile.configuration.defaultConfig = {
        "basic": {
            "label": "Name",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": false,
            "permission": "anonymous",
            "order": 0,
            "elements": {
                "firstName": {
                    "label": "First name",
                    "required": true,
                    "display": true
                },
                "lastName": {
                    "label": "Last name",
                    "required": true,
                    "display": true
                },
                "preferredName": {
                    "label": "Preferred name",
                    "required": false,
                    "display": true
                }
            }
        },
        "aboutme": {
            "label": "About me",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
            "order": 1,
            "elements": {
                "role": {
                    "label": "Main role",
                    "required": false,
                    "display": true,
                    "type": "select",
                    "select_elements": {
                        "undergraduatestudent": "Undergraduate student",
                        "graduatestudent": "Graduate student",
                        "postgraduatestudent": "Postgraduate student",
                        "phdstudent": "PhD student",
                        "researchassistant": "Research assistant",
                        "seniorresearcher": "Senior Researcher",
                        "reader": "Reader",
                        "lecturer": "Lecturer",
                        "seniorlecturer": "Senior lecturer",
                        "professor": "Professor",
                        "supportstaff": "Support staff",
                        "other": "Other"
                    }
                },
                "summary": {
                    "label": "Biography",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                },
                "languages": {
                    "label": "Languages",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                },
                "websites": {
                    "label": "Websites",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                },
                "tags": {
                    "label": "Keywords",
                    "required": false,
                    "display": true,
                    "type": "textarea",
                    "tagField": true
                }
            }
        },
        "contact": {
            "label": "Contact information",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
            "order": 1,
            "elements": {
                "primarycontactaddress": {
                    "label": "Primary address",
                    "required": false,
                    "display": true,
                    "type": "textarea",
                    "example": "Example: Departmental address & room / College address & room / Personal address"
                },
                "primarycontactphone": {
                    "label": "Primary phone",
                    "required": false,
                    "display": true
                },
                "primarycontactfax": {
                    "label": "Primary fax",
                    "required": false,
                    "display": true
                },
                "primarycontactemail": {
                    "label": "Primary email",
                    "required": true,
                    "display": true,
                    "type": "email"
                },
                "secondarycontactaddress": {
                    "label": "Secondary address",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                },
                "secondarycontactphone": {
                    "label": "Secondary phone",
                    "required": false,
                    "display": true
                },
                "secondarycontactfax": {
                    "label": "Secondary fax",
                    "required": false,
                    "display": true
                },
                "secondarycontactemail": {
                    "label": "Secondary email",
                    "required": false,
                    "display": true,
                    "type": "email"
                },
                "tertiarycontactaddress": {
                    "label": "Tertiary address",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                },
                "tertiarycontactphone": {
                    "label": "Tertiary phone",
                    "required": false,
                    "display": true
                },
                "tertiarycontactfax": {
                    "label": "Tertiary fax",
                    "required": false,
                    "display": true
                },
                "tertiarycontactemail": {
                    "label": "Tertiary email",
                    "required": false,
                    "display": true,
                    "type": "email"
                }
            }
        },
        "academicinterests": {
            "label": "Academic interests",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
            "order": 2,
            "elements": {
                "engineeringdisciplines": {
                    "label": "Engineering discipline",
                    "required": false,
                    "display": true,
                    "type": "select",
                    "select_elements": {
                        "turbomachineryenergyfluidmechanics": "Turbomachinery, energy and fluid mechanics",
                        "electricalengineering": "Electrical engineering",
                        "mechanicsmaterialsdesign": "Mechanics, materials and design",
                        "civilstructuralenvironmental": "Civil, structural and environmental engineering",
                        "manufacturingmanagement": "Manufacturing and management",
                        "informationengineering": "Information engineering"
                    }
                },
                "researchgroup": {
                    "label": "Research group",
                    "required": false,
                    "display": true,
                    "type": "select",
                    "select_elements": {
                        "energy": "Energy",
                        "fluidmechanics": "Fluid Mechanics",
                        "turbomachinery": "Turbomachinery",
                        "solidstateelectronics": "Solid State Electronics and Nanoscale Science",
                        "electronicspowerenergyconversion": "Electronics, Power and Energy Conversion",
                        "photonics": "Photonics Research",
                        "appliedmechanics": "Applied Mechanics",
                        "materialsengineering": "Materials Engineering",
                        "engineeringdesign": "Engineering Design",
                        "geotechnicalenvironmental": "Geotechnical and Environmental",
                        "structures": "Structures",
                        "sustainabledevelopment": "Sustainable Development",
                        "distributedinformationandautomation": "Distributed Information and Automation Laboratory",
                        "decisionsupport": "Decision Support",
                        "economicspolicy": "Economics and Policy",
                        "internationalmanufacturing": "International Manufacturing",
                        "productionprocesses": "Production Processes",
                        "strategyperformance": "Strategy and Performance",
                        "technologymanagement": "Technology Management",
                        "businessresearch": "Business Research",
                        "industrialphotonics": "Industrial Photonics",
                        "innovativemanufacturingresearchcentre": "Innovative Manufacturing Research Centre",
                        "controllaboratory": "Control Laboratory",
                        "machineintelligencelaboratory": "Machine Intelligence Laboratory",
                        "signalprocessingcommunications": "Signal Processing and Communications Laboratory",
                        "computationalbiologicallearning": "Computational and Biological Learning"
                    }
                },
                "strategicthemes": {
                    "label": "Strategic themes",
                    "required": false,
                    "display": true,
                    "type": "select",
                    "select_elements": {
                        "energytransporturbaninfrastructure": "Energy, transport and urban infrastructure",
                        "uncertaintyriskresilience": "Uncertainty, risk and resilience",
                        "engineeringforlifescienceshealthcare": "Engineering for life sciences and health care",
                        "inspiringresearchthroughindustrialcollaboration": "Inspiring research through industrial collaboration"
                    }
                },
                "academicinterests": {
                    "label": "Academic interests",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                },
                "aboutmyresearchteachingstudies": {
                    "label": "About my research/ teaching/ studies",
                    "required": false,
                    "display": true,
                    "type": "textarea"
                }
            }
        },
        "degreesandpositions": {
            "label": "Degrees and positions",
            "required": false,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
            "multiple": true,
            "multipleLabel": "degree or position",
            "order": 3,
            "elements": {
                "namestudiesorposition": {
                    "label": "Name of studies OR position/role",
                    "required": true,
                    "display": true,
                    "example": "Example: BSc in Computer Science/ Teaching Assistant/ Professor..."
                },
                "typedegreebusiness": {
                    "label": "Type of degree OR business / department",
                    "required": true,
                    "display": true,
                    "example": "Example: Bachelor/ Master/ PhD/ Microsoft Research Centre"
                },
                "schooluniversityoverarchingorganisation": {
                    "label": "School / University OR overarching organisation ",
                    "required": false,
                    "display": true,
                    "example": "Example: Artevelde University Ghent/ University of Cambridge"
                },
                "country": {
                    "label": "Country",
                    "required": true,
                    "display": true
                },
                "duration": {
                    "label": "Duration",
                    "required": false,
                    "display": true,
                    "example": "Example: 2009-2010"
                }
            }
        },
        "publications": {
            "label": "Publications",
            "required": false,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
            "multiple": true,
            "multipleLabel": "publication",
            "order": 4,
            "elements": {
                "mainauthor": {
                    "label": "Main author",
                    "required": true,
                    "display": true,
                    "example": "SURNAME, first name; Example: Lindberg, M."
                },
                "coauthors": {
                    "label": "Co-authors",
                    "required": false,
                    "display": true,
                    "example": "Example: Martin, J., Sukojev, B."
                },
                "bookpaperarticletitle": {
                    "label": "Title of book, paper or article... ",
                    "required": true,
                    "display": true,
                    "example": "Example: Heart disease and rehabilitation"
                },
                "magazinejournaltitle": {
                    "label": "Title of magazine or journal...",
                    "required": false,
                    "display": true,
                    "example": "Example: Horizon / Scientists Magazine"
                },
                "editionnumber": {
                    "label": "Edition number",
                    "required": false,
                    "display": true,
                    "example": "Example: 3rd (not required if it's the first edition)"
                },
                "cityofpublication": {
                    "label": "City of publication",
                    "required": true,
                    "display": true,
                    "example": "Example: Cambridge"
                },
                "publishername": {
                    "label": "Publisher's name",
                    "required": true,
                    "display": true,
                    "example": "Example: Cambridge University Press"
                },
                "yearofpublication": {
                    "label": "Year of publication",
                    "required": true,
                    "display": true
                },
                "numberofpages": {
                    "label": "Number of pages",
                    "required": true,
                    "display": true,
                    "example": "For books / papers: total number of pages; eg. 84p., For articles: pages of article; eg. pp.4-10 or p.6"
                },
                "volumenumber": {
                    "label": "Volume number",
                    "required": false,
                    "display": true,
                    "example": "Example: 7 (ie. number 7 of that year )"
                },
                "honoursawards": {
                    "label": "Honours &amp; awards",
                    "required": false,
                    "display": true,
                    "example": "Example: If you got nominated for this publication, you could mention it here"
                }
            }
        },
        "locations": {
            "label": "Categories",
            "required": false,
            "display": true,
            "access": "everybody",
            "modifyacl": true,
            "permission": "everyone",
            "multiple": true,
            "directory": true,
            "multipleLabel": "Add/remove categories",
            "order": 5,
            "elements": {
                "locationtitle": {
                    "label": "Category",
                    "required": true,
                    "display": true,
                    "type": "location"
                }
            }
        },
        "collegeandsocieties": {
            "label": "College and societies",
            "required": true,
            "display": true,
            "access": "everybody",
            "modifyacl": false,
            "permission": "everyone",
            "order": 6,
            "elements": {
                "college": {
                    "label": "College",
                    "required": true,
                    "display": true
                },
                "societies": {
                    "label": "Societies and organisations",
                    "required": true,
                    "display": true,
                    "type": "textarea",
                    "example": "Example: Queens' college rowing club, member of the Graduate Union"
                },
                "personalinterestsactiviteshobbies": {
                    "label": "Personal interests, activities and hobbies",
                    "required": false,
                    "display": true,
                    "type": "textarea",
                    "example": "Example: reading, classical music, environment and animals, tennis"
                },
                "whereimfrom": {
                    "label": "Where I'm originally from",
                    "required": true,
                    "display": true
                },
                "freetime": {
                    "label": "When I'm not working for half a day, you can find me here",
                    "required": false,
                    "display": true,
                    "type": "textarea",
                    "example": "Example: Listening to Bach whilst laying in Midsummer Common"
                }
            }
        }
    }
   
	config.Directory = {
        divider1: {
            divider: true,
            title: "Divisions"
        },
        turbomachineryenergyfluidmechanics: {
            title: "Turbomachinery, Energy and Fluid Mechanics",
            children: {
                energy: {
                    title: "Energy"
                },
                fluidmechanics: {
                    title: "Fluid Mechanics"
                },
                turbomachinery: {
                    title: "Turbomachinery"
                }
            }
        },
        electricalengineering: {
            title: "Electrical Engineering",
            children: {
                solidstateelectronicsnanoscalescience: {
                    title: "Solid State Electronics and Nanoscale Science"
                },
                electronicspowerenergyconversion: {
                    title: "Electronics, Power and Energy Conversion"
                },
                photonicsresearch: {
                    title: "Photonics Research"
                },
                centreforadvancedphotonicsandelectronics: {
                    title: "Centre for Advanced Photonics and Electronics"
                },
                cambridgeintegratedknowledgecentre: {
                    title: "Cambridge Integrated Knowledge Centre"
                },
                cambridgenanosciencecentre: {
                    title: "Cambridge Nanoscience Centre"
                },
                doctoraltrainingcentrenanoscience: {
                    title: "Doctoral Training Centre - NanoScience"
                },
                doctoraltrainingcentrephotonicssystemsdevelopment: {
                    title: "Doctoral Training Centre - Photonics Systems Development"
                }
            }
        },
        mechanicsmaterialsdesign: {
            title: "Mechanics, Materials and Design",
            children: {
                appliedmechanics: {
                    title: "Applied Mechanics"
                },
                materialsengineering: {
                    title: "Materials Engineering"
                },
                engineeringdesign: {
                    title: "Engineering Design"
                }
            }
        },
        civilstructuralenvironmentalengineering: {
            title: "Civil, Structural and Environmental Engineering",
            children: {
                geotechnicalenvironmental: {
                    title: "Geotechnical and Environmental"
                },
                structures: {
                    title: "Structures"
                },
                sustainabledevelopment: {
                    title: "Sustainable Development"
                },
                laingorourkecentreforconstructionengineeringandtechnology: {
                    title: "Laing O'Rourke Centre for Construction Engineering and Technology"
                }
            }
        },
        manufacturingmanagement: {
            title: "Manufacturing and Management",
            children: {
                distributedinformationautomationlaboratory: {
                    title: "Distributed Information and Automation Laboratory"
                },
                decisionsupport: {
                    title: "Decision Support"
                },
                economicspolicy: {
                    title: "Economics and Policy"
                },
                internationalmanufacturing: {
                    title: "International Manufacturing"
                },
                productionprocesses: {
                    title: "Production Processes"
                },
                strategyperformance: {
                    title: "Strategy and Performance"
                },
                technologymanagement: {
                    title: "Technology Management"
                },
                businessresearch: {
                    title: "Business Research"
                },
                industrialphotonics: {
                    title: "Industrial Photonics"
                },
                innovativemanufacturingresearchcentre: {
                    title: "Innovative Manufacturing Research Centre"
                }
            }
        },
        informationengineering: {
            title: "Information Engineering",
            children: {
                controllaboratory: {
                    title: "Control Laboratory"
                },
                machineintelligencelaboratory: {
                    title: "Machine Intelligence Laboratory"
                },
                signalprocessingcommunicationslaboratory: {
                    title: "Signal Processing and Communications Laboratory"
                },
                computationalbiologicallearning: {
                    title: "Computational and Biological Learning"
                }
            }
        },
        divider2: {
            divider: true,
            title: "Strategic Themes"
        },
        energytransportandurbaninfrastructure: {
            title: "Energy, transport and urban infrastructure",
            children: {
                energytransportandurbaninfrastructurechild: {
                    title: "Energy, transport and urban infrastructure"
                }
            }
        },
        uncertaintyriskandresilience: {
            title: "Uncertainty, risk and resilience",
            children: {
                uncertaintyriskandresiliencechild: {
                    title: "Uncertainty, risk and resilience"
                }
            }
        },
        engineeringforlifesciencesandhealthcare: {
            title: "Engineering for life sciences and healthcare",
            children: {
                engineeringforlifesciencesandhealthcarechild: {
                    title: "Engineering for life sciences and healthcare"
                }
            }
        },
        inspiringresearchthroughindustrialcollaboration: {
            title: "Inspiring research through industrial collaboration",
              children: {
                inspiringresearchthroughindustrialcollaborationchild: {
                    title: "Inspiring research through industrial collaboration"
                }
            }
        },
        divider3: {
            divider: true,
            title: "CUED Teaching"
        },
        engineeringtripospartia: {
            title: "Engineering Tripos Part IA",
            children: {
                etIa1: {
                    title: "Kinematics and Dynamics in Two Dimensions"
                },
                etIa2: {
                    title: "Mechanical Vibrations"
                },
                etIa3: {
                    title: "Fluid Mechanics"
                },
                etIa4: {
                    title: "Thermodynamics"
                },
                etIa5: {
                    title: "Structural Mechanics"
                },
                etIa6: {
                    title: "Materials"
                },
                etIa7: {
                    title: "Physical Principles of Electronics and Electromagnetics"
                },
                etIa8: {
                    title: "Linear Circuits and Devices"
                },
                etIa9: {
                    title: "Digital Circuits and Information Processing"
                },
                etIa10: {
                    title: "Mathematics Michaelmas (Standard)"
                },
                etIa11: {
                    title: "Mathematics Michaelmas (Fast)"
                },
                etIa12: {
                    title: "Mathematics Lent and Easter"
                },
                etIa13: {
                    title: "Computing"
                },
                etIa14: {
                    title: "1st Year Coursework"
                }
            }
        },
        engineeringtripospartib: {
            title: "Engineering Tripos Part IB",
            children: {
                etIb1: {
                    title: "Mechanics: Dynamics of Rigid Bodies"
                },
                etIb2: {
                    title: "Structures"
                },
                etIb3: {
                    title: "Materials: Microstructure"
                },
                etIb4: {
                    title: "Thermofluid Mechanics"
                },
                etIb5: {
                    title: "Linear Circuits and Devices"
                },
                etIb6: {
                    title: "Electrical Power"
                },
                etIb7: {
                    title: "Electromagnetic Fields and Waves"
                },
                etIb8: {
                    title: "Linear Systems and Control"
                },
                etIb9: {
                    title: "Communications Fourier Transforms & Signal & Data Analysis"
                },
                etIb10: {
                    title: "Vector Calculus"
                },
                etIb11: {
                    title: "Linear Algebra"
                },
                etIb12: {
                    title: "Probability"
                },
                etIb13: {
                    title: "Introductory Business Economics"
                },
                etIb14: {
                    title: "Aerothermal Engineering"
                },
                etIb15: {
                    title: "Mechanical Engineering"
                },
                etIb16: {
                    title: "Civil and Structural Engineering"
                },
                etIb17: {
                    title: "Information Engineering"
                },
                etIb18: {
                    title: "Electrical Engineering"
                },
                etIb19: {
                    title: "Engineering for the Life Sciences"
                },
                etIb20: {
                    title: "Manufacturing & Management"
                },
                etIb21: {
                    title: "2nd Year Coursework"
                }
            }
        },
        engineeringtripospartiia: {
            title: "Engineering Tripos Part IIA",
            children: {
                etIIa1: {
                    title: "Fluid Mechanics I"
                },
                etIIa2: {
                    title: "Fluid Mechanics II"
                },
                etIIa3: {
                    title: "Thermodynamics and Power Generation"
                },
                etIIa4: {
                    title: "Heat And Mass Transfer"
                },
                etIIa5: {
                    title: "Radio Frequency Electronics"
                },
                etIIa6: {
                    title: "Integrated Digital Electronics"
                },
                etIIa7: {
                    title: "Electric Drive Systems"
                },
                etIIa8: {
                    title: "Semiconductor Engineering"
                },
                etIIa9: {
                    title: "Photonic Technology"
                },
                etIIa10: {
                    title: "Present and Future Energy Systems"
                },
                etIIa11: {
                    title: "Materials Processing and Design"
                },
                etIIa12: {
                    title: "Dynamics"
                },
                etIIa13: {
                    title: "Vibration"
                },
                etIIa14: {
                    title: "Mechanics of Solids"
                },
                etIIa15: {
                    title: "Machine Design"
                },
                etIIa16: {
                    title: "Fracture Mechanics of Materials and Structures"
                },
                etIIa17: {
                    title: "Geotechnical Engineering I"
                },
                etIIa18: {
                    title: "Geotechnical Engineering II"
                },
                etIIa19: {
                    title: "Structural Materials and Design"
                },
                etIIa20: {
                    title: "Structural Analysis and Stability"
                },
                etIIa21: {
                    title: "Water Engineering"
                },
                etIIa22: {
                    title: "Finite Element Methods"
                },
                etIIa23: {
                    title: "Building Physics and Environmental Geotechnics"
                },
                etIIa24: {
                    title: "Business Economics"
                },
                etIIa25: {
                    title: "Marketing"
                },
                etIIa26: {
                    title: "Modelling Risk"
                },
                etIIa27: {
                    title: "Human Resource Management"
                },
                etIIa28: {
                    title: "Organisational Behaviour"
                },
                etIIa29: {
                    title: "Operations Management for Engineers"
                },
                etIIa30: {
                    title: "Signals and Systems"
                },
                etIIa31: {
                    title: "Systems and Control"
                },
                etIIa32: {
                    title: "Signal and Pattern Processing"
                },
                etIIa33: {
                    title: "Data Transmission"
                },
                etIIa34: {
                    title: "Computer and Network Systems"
                },
                etIIa35: {
                    title: "Software Engineering and design"
                },
                etIIa36: {
                    title: "Introduction to Molecular Bioengineering"
                },
                etIIa37: {
                    title: "Mathematical Physiology"
                },
                etIIa38: {
                    title: "Introduction to Neuroscience"
                },
                etIIa39: {
                    title: "Medical Imaging and 3D Computer Graphics"
                },
                etIIa40: {
                    title: "Biomaterials"
                },
                etIIa41: {
                    title: "Data Structures and algorithms"
                },
                etIIa42: {
                    title: "Mathematical Methods"
                }
            }
        },
        engineeringtripospartiib: {
            title: "Engineering Tripos Part IIB",
            children: {
                etIIb1: {
                    title: "Computational Fluid Dynamics"
                },
                etIIb2: {
                    title: "Turbomachinery I"
                },
                etIIb3: {
                    title: "Aircraft Stability and Control"
                },
                etIIb4: {
                    title: "Aerodynamics"
                },
                etIIb5: {
                    title: "Environmental Fluid Mechanics"
                },
                etIIb6: {
                    title: "Molecular Thermodynamics"
                },
                etIIb7: {
                    title: "Flow Instability"
                },
                etIIb8: {
                    title: "Turbomachinery II"
                },
                etIIb9: {
                    title: "Turbulence and vortex dynamics"
                },
                etIIb10: {
                    title: "Combustion and IC Engines"
                },
                etIIb11: {
                    title: "Aeroacoustics"
                },
                etIIb12: {
                    title: "Nanotechnology"
                },
                etIIb13: {
                    title: "Solid State Devices and Chemical/Biological Sensors"
                },
                etIIb14: {
                    title: "VLSI Design, Technology and CAD"
                },
                etIIb15: {
                    title: "Photonic Systems"
                },
                etIIb16: {
                    title: "Electronic Sensors & Instrumentation"
                },
                etIIb17: {
                    title: "Solar-electronic power: Generation and Distribution"
                },
                etIIb18: {
                    title: "Advanced Electronic Devices"
                },
                etIIb19: {
                    title: "Renewable Electrical Power"
                },
                etIIb20: {
                    title: "Display Technology"
                },
                etIIb21: {
                    title: "Designing with Composites"
                },
                etIIb22: {
                    title: "Electrical and Nano Materials"
                },
                etIIb23: {
                    title: "Design Methods"
                },
                etIIb24: {
                    title: "Design Case Studies"
                },
                etIIb25: {
                    title: "Advanced Linear Vibration"
                },
                etIIb26: {
                    title: "Random and Non-Linear Vibrations"
                },
                etIIb27: {
                    title: "Applications of Dynamics"
                },
                etIIb28: {
                    title: "Continuum Mechanics"
                },
                etIIb29: {
                    title: "MEMS: Design"
                },
                etIIb30: {
                    title: "Advanced Machine Design"
                },
                etIIb31: {
                    title: "Foundation Engineering"
                },
                etIIb32: {
                    title: "Dynamics in Civil Engineering"
                },
                etIIb33: {
                    title: "Concrete and Masonry Structures"
                },
                etIIb34: {
                    title: "Pre-Stressed Concrete"
                },
                etIIb35: {
                    title: "Structural Steelwork"
                },
                etIIb36: {
                    title: "Building Physics"
                },
                etIIb37: {
                    title: "Architectural Engineering"
                },
                etIIb38: {
                    title: "Contaminated Land and Waste Containment"
                },
                etIIb39: {
                    title: "Sustainable Water Engineering"
                },
                etIIb40: {
                    title: "Plate and Shell Structures"
                },
                etIIb41: {
                    title: "Information Systems"
                },
                etIIb42: {
                    title: "Management of Technology"
                },
                etIIb43: {
                    title: "International Business Economics (MS9)"
                },
                etIIb44: {
                    title: "Accounting and Finance"
                },
                etIIb45: {
                    title: "Strategic Management"
                },
                etIIb46: {
                    title: "Project Management"
                },
                etIIb47: {
                    title: "Control System Design"
                },
                etIIb48: {
                    title: "Robust and Nonlinear Systems and Control"
                },
                etIIb49: {
                    title: "Optimal and predictive control"
                },
                etIIb50: {
                    title: "Advanced Wireless communications"
                },
                etIIb51: {
                    title: "Signal Detection and Estimation"
                },
                etIIb52: {
                    title: "Digital Filters and Spectrum Estimation"
                },
                etIIb53: {
                    title: "Image Processing and Image Coding"
                },
                etIIb54: {
                    title: "Statistical Pattern Processing"
                },
                etIIb55: {
                    title: "Speech and Language Processing"
                },
                etIIb56: {
                    title: "Computer Vision and Robotics"
                },
                etIIb57: {
                    title: "Machine Learning"
                },
                etIIb58: {
                    title: "Systems Biology"
                },
                etIIb59: {
                    title: "Biosensors"
                },
                etIIb60: {
                    title: "Biomimetics"
                },
                etIIb61: {
                    title: "Cellular and molecular biomechanics"
                },
                etIIb62: {
                    title: "Strategic Valuation (TPE6)"
                },
                etIIb63: {
                    title: "Electricity and Environment"
                },
                etIIb64: {
                    title: "Medical Physics"
                },
                etIIb65: {
                    title: "Low Power Embedded Systems Programming"
                },
                etIIb66: {
                    title: "French"
                },
                etIIb67: {
                    title: "German"
                },
                etIIb68: {
                    title: "Spanish"
                },
                etIIb69: {
                    title: "Japanese"
                },
                etIIb70: {
                    title: "Materials and processes for Microsystems (MEMS)"
                },
                etIIb71: {
                    title: "Surveying Field Course"
                },
                etIIb72: {
                    title: "Partial Differential Equations and Variational Methods"
                },
                etIIb73: {
                    title: "Complex Analysis and Optimisation"
                },
                etIIb74: {
                    title: "Sustainable Development"
                },
                etIIb75: {
                    title: "Sustainable Energy"
                },
                etIIb76: {
                    title: "Nuclear Power Engineering"
                },
                etIIb77: {
                    title: "Stochastic Process and Optimisation Methods"
                }
            }
        },     
        manufacturingengineeringtripospartiia: {
            title: "Manufacturing Engineering Tripos Part IIA",
            children: {
                metIIa1: {
                    title: "Materials into Products"
                },
                metIIa2: {
                    title: "Production Machines and Systems"
                },
                metIIa3: {
                    title: "Design"
                },
                metIIa4: {
                    title: "Operations Management"
                },
                metIIa5: {
                    title: "Industrial Engineering"
                },
                metIIa6: {
                    title: "Organisational Behaviour"
                },
                metIIa7: {
                    title: "Managing Business and People"
                },
                metIIa8: {
                    title: "Financial and Management Accounting"
                },
                metIIa9: {
                    title: "Industrial Economics, Strategy and Governance"
                },
                metIIa10: {
                    title: "Contemporary Issues in Manufacturing"
                }
            }
        },
        manufacturingengineeringtripospartiib: {
            title: "Manufacturing Engineering Tripos Part IIB",
            children: {
                metIIb1: {
                    title: "Manufacturing Technology and Materials"
                },
                metIIb2: {
                    title: "Manufacturing Systems Engineering"
                },
                metIIb3: {
                    title: "Asset Management"
                },
                metIIb4: {
                    title: "Managing People"
                },
                metIIb5: {
                    title: "Technology and Innovation"
                },
                metIIb6: {
                    title: "Strategy and Marketing"
                },
                metIIb7: {
                    title: "Enterprise, International and Manufacturing Policy"
                },
                metIIb8: {
                    title: "Sustainable Manufacturing"
                }
            }
        },
        mphilinnuclearenergy: {
            title: "MPhil in Nuclear Energy",
            children: {
                mphilnuclen1: {
                    title: "Reactor Physics"
                },
                mphilnuclen2: {
                    title: "Reactor Engineering & Thermal-hydraulics"
                },
                mphilnuclen3: {
                    title: "Fuel Cycle, Waste & Decommissioning"
                },
                mphilnuclen4: {
                    title: "Materials"
                },
                mphilnuclen5: {
                    title: "System & Safety"
                },
                mphilnuclen6: {
                    title: "Nuclear Technology Policy"
                },
                mphilnuclen7: {
                    title: "Strategic Valuation"
                },
                mphilnuclen8: {
                    title: "Technology Innovation"
                },
                mphilnuclen9: {
                    title: "Enterprise & Development"
                },
                mphilnuclen10: {
                    title: "Project Management"
                },
                mphilnuclen11: {
                    title: "Sustainability and International Environmental Policy"
                },
                mphilnuclen12: {
                    title: "Globalisation and Big Business"
                },
                mphilnuclen13: {
                    title: "System Dynamics"
                },
                mphilnuclen14: {
                    title: "Introduction to Technology Policy"
                },
                mphilnuclen15: {
                    title: "Political Economy of Technology Policy"
                },
                mphilnuclen16: {
                    title: "Management of Technology"
                },
                mphilnuclen17: {
                    title: "Accounting and Finance"
                },
                mphilnuclen18: {
                    title: "Strategic Management"
                },
                mphilnuclen19: {
                    title: "Particle & Nuclear Physics/Comp. Physics"
                },
                mphilnuclen20: {
                    title: "Atomistic Materials Modelling"
                },
                mphilnuclen21: {
                    title: "Environmental Fluid Mechanics"
                },
                mphilnuclen22: {
                    title: "Fluid Mechanics & Environment"
                },
                mphilnuclen23: {
                    title: "Design Methods"
                },
                mphilnuclen24: {
                    title: "Extraction & Re-cycling"
                },
                mphilnuclen25: {
                    title: "Corrosion & Protection"
                },
                mphilnuclen26: {
                    title: "Electrochemical Engineering"
                },
                mphilnuclen27: {
                    title: "Computational Fluid Dynamics"
                },
                mphilnuclen28: {
                    title: "Control Systems Design"
                },
                mphilnuclen29: {
                    title: "Robust & Non-Linear Control"
                },
                mphilnuclen30: {
                    title: "Electronic Sensors & Instrument"
                }
            }
        },

        mphilinindustrialsystemsmanufactureandmanagement: {
            title: "MPhil in Industrial Systems, Manufacture and Management",
            children: {
                mphilismm1: {
                    title: "Manufacturing Systems"
                },
                mphilismm2: {
                    title: "Manufacturing Processes"
                },
                mphilismm3: {
                    title: "Management of People"
                },
                mphilismm4: {
                    title: "Sales and Marketing"
                },
                mphilismm5: {
                    title: "Product Design & New Product Introduction"
                },
                mphilismm6: {
                    title: "Personal Development"
                },
                mphilismm7: {
                    title: "Business Strategy and Finance"
                },
                mphilismm8: {
                    title: "Technology Management & Entrepreneurship"
                },
                mphilismm9: {
                    title: "Management of Change"
                },
                mphilismm10: {
                    title: "Teamworking & Leadership"
                },
                mphilismm11: {
                    title: "Design Management"
                },
                mphilismm12: {
                    title: "Distributed Information and Automation"
                },
                mphilismm13: {
                    title: "Industrial Photonics"
                },
                mphilismm14: {
                    title: "Industry & Government"
                },
                mphilismm15: {
                    title: "International Manufacturing"
                },
                mphilismm16: {
                    title: "Production Processes"
                },
                mphilismm17: {
                    title: "Strategy and Performance"
                },
                mphilismm18: {
                    title: "Technology Management"
                }
            }
        },

        mphilinenergytechnologies: {
            title: "MPhil in Energy Technologies",
            children: {
                mphilentech1: {
                    title: "Communication Skills"
                },
                mphilentech2: {
                    title: "Review of Fundamentals"
                },
                mphilentech3: {
                    title: "Computational Fluid Dynamics"
                },
                mphilentech4: {
                    title: "Turbomachinery"
                },
                mphilentech5: {
                    title: "Aerodynamics"
                },
                mphilentech6: {
                    title: "Environmental Fluid Mechanics and Air Pollution"
                },
                mphilentech7: {
                    title: "Molecular Thermodynamics"
                },
                mphilentech8: {
                    title: "Combustion and Internal Combustion Engines"
                },
                mphilentech9: {
                    title: "Solar-electronic Power: Generation and Distribution"
                },
                mphilentech10: {
                    title: "Renewable Electrical Power"
                },
                mphilentech11: {
                    title: "Architectural Engineering"
                },
                mphilentech12: {
                    title: "Technological Innovation"
                },
                mphilentech13: {
                    title: "Management of Technology"
                },
                mphilentech14: {
                    title: "Enterprise and Business Development"
                },
                mphilentech15: {
                    title: "Project Management"
                },
                mphilentech16: {
                    title: "Sustainable Development"
                },
                mphilentech17: {
                    title: "Sustainable Energy"
                },
                mphilentech18: {
                    title: "Nuclear Power Engineering"
                },
                mphilentech19: {
                    title: "Stochastic Optimisation Methods"
                },
                mphilentech20: {
                    title: "Experimental Methods in Fluids"
                },
                mphilentech21: {
                    title: "Turbulent Reacting Flows"
                },
                mphilentech22: {
                    title: "Clean Coal Technologies"
                },
                mphilentech23: {
                    title: "Renewable Energy: Wind, Tide and Hydro"
                },
                mphilentech24: {
                    title: "Renewable Energy: Solar and Biomass"
                },
                mphilentech25: {
                    title: "Particle Technology"
                },
                mphilentech26: {
                    title: "Catalysis"
                },
                mphilentech27: {
                    title: "Electrochemical Engineering"
                },
                mphilentech28: {
                    title: "Micro and Nano-electrochemistry"
                },
                mphilentech29: {
                    title: "Fluids and Natural Resources"
                },
                mphilentech30: {
                    title: "Long Thesis"
                },
                mphilentech31: {
                    title: "Short Thesis"
                }
            }
        },

        mphilininterdisciplinarydesignforthebuiltenvironment: {
            title: "MPhil in Interdisciplinary Design for the Built Environment",
            children: {
                mphilidbe1: {
                    title: "Interdisciplinary Understanding"
                },
                mphilidbe2: {
                    title: "Client, User and Design Team"
                },
                mphilidbe3: {
                    title: "Teamwork, Leadership and Collaboration"
                },
                mphilidbe4: {
                    title: "Sustainable Construction"
                },
                mphilidbe5: {
                    title: "Infrastructure and Landscape"
                },
                mphilidbe6: {
                    title: "Structure of the Industry"
                },
                mphilidbe7: {
                    title: "Urban Design and Sustainable Communities"
                }
            }
        },

        mphilinengineeringforsustainabledevelopment: {
            title: "MPhil in Engineering for Sustainable Development",
            children: {
                mphilendsusdeve1: {
                    title: "Management of Technology and Innovation"
                },
                mphilendsusdeve2: {
                    title: "Concepts, Vales and Change Processes"
                },
                mphilendsusdeve3: {
                    title: "Sustainability Methods and Metrics"
                },
                mphilendsusdeve4: {
                    title: "Sustainability Assessments of Large Infrastructure Projects"
                },
                mphilendsusdeve5: {
                    title: "Economic Legal and Regulation Issues"
                },
                mphilendsusdeve6: {
                    title: "Sustainable Design and Implementation"
                },
                mphilendsusdeve7: {
                    title: "Development Engineering"
                },
                mphilendsusdeve8: {
                    title: "Environmental Engineering"
                },
                mphilendsusdeve9: {
                    title: "Sustainable Water Engineering"
                },
                mphilendsusdeve10: {
                    title: "Solar-Electronic Power: Generation and Distribution"
                },
                mphilendsusdeve11: {
                    title: "Renewable Electrical Power"
                },
                mphilendsusdeve12: {
                    title: "Building Physics"
                },
                mphilendsusdeve13: {
                    title: "Architectural Engineering"
                },
                mphilendsusdeve14: {
                    title: "Contaminated Land and Waste Containment"
                },
                mphilendsusdeve15: {
                    title: "Technological Innovation: Research and Practice"
                },
                mphilendsusdeve16: {
                    title: "Management of Technology"
                },
                mphilendsusdeve17: {
                    title: "Accounting and Finance"
                },
                mphilendsusdeve18: {
                    title: "Biomimetics"
                },
                mphilendsusdeve19: {
                    title: "Electricity and the Environment"
                },
                mphilendsusdeve20: {
                    title: "Environmental Fluid Mechanics"
                },
                mphilendsusdeve21: {
                    title: "Sustainable Energy"
                },
                mphilendsusdeve22: {
                    title: "International Business Economics"
                },
                mphilendsusdeve23: {
                    title: "Strategic Management"
                },
                mphilendsusdeve24: {
                    title: "Project Management"
                },
                mphilendsusdeve25: {
                    title: "Systems Biology"
                },
                mphilendsusdeve26: {
                    title: "Introduction to Technology Policy"
                },
                mphilendsusdeve27: {
                    title: "Political Economy of Technology Policy"
                },
                mphilendsusdeve28: {
                    title: "Globalisation and Big Business"
                },
                mphilendsusdeve29: {
                    title: "Complexity and Negotiations"
                },
                mphilendsusdeve30: {
                    title: "Uncertainty and Real Options in System Design"
                },
                mphilendsusdeve31: {
                    title: "Systems Dynamics"
                },
                mphilendsusdeve32: {
                    title: "Globalisation (Part 2)"
                },
                mphilendsusdeve33: {
                    title: "Environmental Design in Architecture 1"
                },
                mphilendsusdeve34: {
                    title: "Sustainability and Chemical Engineering"
                },
                mphilendsusdeve35: {
                    title: "Environmental Design in Architecture 2"
                }
            }
        },

        mphilinconstructionengineering: {
            title: "MPhil in Construction Engineering",
            children: {
                mphilceng1: {
                    title: "Finance, Planning and Procurement"
                },
                mphilceng2: {
                    title: "Design for Construction"
                },
                mphilceng3: {
                    title: "Advanced Construction Management and Methods"
                },
                mphilceng4: {
                    title: "Advanced Construction Technology"
                },
                mphilceng5: {
                    title: "Functionality, Operation and Performance"
                },
                mphilceng6: {
                    title: "Sector Specialisation"
                },
                mphilceng7: {
                    title: "Innovation, Research and the Future of Construction"
                }
            }
        },

        mresinphotonicssystemsdevelopment: {
            title: "MRes in Photonic Systems Development",
            children: {
                mresphotsysdev1: {
                    title: "Nanotechnology"
                },
                mresphotsysdev2: {
                    title: "Systems Biology"
                },
                mresphotsysdev3: {
                    title: "Advanced Photonic Devices"
                },
                mresphotsysdev4: {
                    title: "Advanced Electronic Devices"
                },
                mresphotsysdev5: {
                    title: "Photonic Sub-Systems"
                },
                mresphotsysdev6: {
                    title: "Broadband Technologies and Components"
                },
                mresphotsysdev7: {
                    title: "Solar Electronic Power: Generation and Distribution"
                },
                mresphotsysdev8: {
                    title: "Photonic Systems"
                },
                mresphotsysdev9: {
                    title: "Solid State Devices and Chemical/Biological Sensors"
                },
                mresphotsysdev10: {
                    title: "Biosensors"
                },
                mresphotsysdev11: {
                    title: "Display Technology"
                },
                mresphotsysdev12: {
                    title: "Computer Vision and Robotics"
                },
                mresphotsysdev13: {
                    title: "Robust and Nonlinear Systems and Control"
                },
                mresphotsysdev14: {
                    title: "Signal Detection and Estimation"
                },
                mresphotsysdev15: {
                    title: "Digital Filters and Spectrum Estimation"
                },
                mresphotsysdev16: {
                    title: "Image Processing and Image Coding"
                },
                mresphotsysdev17: {
                    title: "Optical Transmission Network"
                },
                mresphotsysdev18: {
                    title: "Nanotechnology and Healthcare"
                },
                mresphotsysdev19: {
                    title: "RF Circuits Sub-Systems & Devices"
                },
                mresphotsysdev20: {
                    title: "Software for Network Services and Design"
                },
                mresphotsysdev21: {
                    title: "Physics and Optics of Nanostructures"
                },
                mresphotsysdev22: {
                    title: "Management of Technology"
                },
                mresphotsysdev23: {
                    title: "Technological Innovation"
                },
                mresphotsysdev24: {
                    title: "Telecommunications Business Environment"
                }
            }
        }
    };
    
    // Kaltura config
    if ( window.location.hostname.indexOf("prelude", 0) > -1 ) {
        config.kaltura = {
            enabled: true,
            serverURL:  "https://kaltura.ucamoae.caret.cam.ac.uk", // Kaltura Server URL
                partnerId: 102, // INSERT YOUR PARTNER ID HERE
                playerId:  4421540 // INSERT YOUR PLAYER ID (UICONF_ID - from Kaltura Studio tab)
        };
    }
    else {
        config.kaltura = {
            enabled: true,
            serverURL:  "https://kaltura.ucamoae.caret.cam.ac.uk", // Kaltura Server URL
                partnerId: 102, // INSERT YOUR PARTNER ID HERE
                playerId:  4421540 // INSERT YOUR PLAYER ID (UICONF_ID - from Kaltura Studio tab)
         };
    }

    // Add Kaltura mime-type
    config.MimeTypes["kaltura/video"] = {
        cssClass: "icon-video-sprite",
        URL: "/dev/images/mimetypes/video.png",
        description: "KALTURA_VIDEO_FILE"
    };
    
	  // Fastfeedback widget config, specify the target user
	  config.fastfeedbackwidget = {
      	fastfeedbackUser: "fastfeedback"
	  };
	
	  // Fastfeedback widget config, specify the target user
    config.templategeneratorwidget = {
        exportUser: "exporttemplate"
    };

    // Remove the Sign Up link:
    config.Navigation.splice(4,1);

    // Prevent users changing their internal passwords through the UI:
    config.allowPasswordChange = false;

    // Set up Raven / Friends links:
    config.Authentication.allowInternalAccountCreation = false;
    if ( window.location.hostname.indexOf("admin", 0) > -1 ) {
        config.Authentication.internal = true;
    }
    else {
        config.Authentication.internal = false;
    }
    config.Authentication.external = [{
        label: "Raven",
        url: "/system/ucam/auth/raven"
    }, {
        label: "Friends",
        url: "/system/ucam/auth/friends"
    }];

    // Make all content (uploaded to or created in Sakai OAE) visible to
    // logged in users only by default.
    config.Permissions.Content.defaultaccess = "everyone";
    config.Permissions.Documents.defaultaccess = "everyone";
    config.Permissions.Groups.defaultaccess = "logged-in-only";
    // Make memberships visible to logged in users only by default and
    // allow users to edit that settting:
    config.defaultpubstructure.structure0.memberships._reorderOnly = false;
    config.defaultpubstructure.structure0.memberships._view = "everyone";
    // Make contacts visible to logged in users only by default and
    // allow users to edit that settting:
    config.defaultpubstructure.structure0.contacts._reorderOnly = false;
    config.defaultpubstructure.structure0.contacts._view = "everyone";

    // Set UK style dates:
    config.defaultLanguage = "en_GB";

    return config;
});
