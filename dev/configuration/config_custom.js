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
    config.skinCSS = ["/dev/skins/default/skin.css"];

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
    
    config.worldTemplates = [
		{
            id: "courses",
            title : "COURSES",
            titleSing: "COURSE",
            templates: [
                {
                    "id": "working-course-template",
                    "title": "Teaching course",
                    "img": "/dev/images/worldtemplates/teachingcourse.png",
                    "fullImg": "/dev/images/worldtemplates/teachingcourse-full.png",
                    "perfectFor": "General course organisation, showing course topics and their syllabi, Timetables, Examples Papers, Coursework and Exam Papers.",
                    "roles": [
                        {
                            "id": "ts",
                            "roleTitle": "Teaching staff",
                            "title": "Teaching staff",
                            "allowManage": true
                        },
                        {
                            "id": "observer",
                            "roleTitle": "Observers",
                            "title": "Observer",
                            "allowManage": false
                        },
                        {
                            "id": "student",
                            "roleTitle": "Students",
                            "title": "Student",
                            "allowManage": false
                        }
                    ],
                    "docs": {
                        "${pid}0": {
                            "structure0": {
                                "about": {
                                    "_ref": "${refid}0",
                                    "_order": 0,
                                    "_nonEditable": false,
                                    "_title": "About",
                                    "main": {
                                        "_ref": "${refid}0",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "About"
                                    }
                                }
                            },
                            "${refid}0": {
                                "page": "<div id='header' style=''> <h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>About &lt;name of the topic&gt;</h1> <hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;'> </div><p> <br></p> <p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'> &lt;Add a description of the topic and any topic overview here&gt; </p>"
                            }
                        },
                        "${pid}1": {
                            "structure0": {
                                "fast-feedback": {
                                    "_ref": "${refid}1",
                                    "_order": 4,
                                    "_nonEditable": true,
                                    "_title": "Fast Feedback",
                                    "main": {
                                        "_ref": "${refid}1",
                                        "_order": 0,
                                        "_nonEditable": true,
                                        "_title": "Fast Feedback"
                                    }
                                }
                            },
                            "${refid}1": {
                                "page": "<img id='widget_fastfeedback_${refid}2' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/fastfeedback/images/icon.png' data-mce-src='/devwidgets/fastfeedback/images/icon.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><p></p>"
                            },
                            "${refid}2": {
                                "fastfeedback": {}
                            }
                        },
                        "${pid}2": {
                            "structure0": {
                                "id1375560": {
                                    "_title": "Michaelmas timetable",
                                    "_order": 0,
                                    "_ref": "${refid}3",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 1",
                                        "_order": 0,
                                        "_ref": "${refid}3",
                                        "_nonEditable": false,
                                    }
                                },
                                "id2281431": {
                                    "_title": "Lent timetable",
                                    "_order": 1,
                                    "_ref": "${refid}5",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 2",
                                        "_order": 0,
                                        "_ref": "${refid}5",
                                        "_nonEditable": false,
                                    }
                                },
                                "id2180014": {
                                    "_title": "Easter timetable",
                                    "_order": 2,
                                    "_ref": "${refid}6",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 3",
                                        "_order": 0,
                                        "_ref": "${refid}6",
                                        "_nonEditable": false,
                                    }
                                }
                            },
                            "${refid}3": {
                                "page": "<p>"
                            },
                            "${refid}5": {
                                "page": "<div id='header' style=''> <h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Timetable for Lent Term<br></h1> <hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;'> </div><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'> &lt;When timetable is available, Create content and add Timetable as Files and Documents, use settings, display settings to add download link&gt; </p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'><br></p>"
                            },
                            "${refid}6": {
                                "page": "<div id='header' style=''> <h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Timetable for Easter Term<br></h1></div><div id='header' style=''><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;'> </div><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'>  </p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'> &lt;When timetable is available, Create content and add Timetable as Files and Documents, use settings, display settings to add download link&gt; </p>"
                            }
                        },
                        "${pid}3": {
                            "structure0": {
                                "Examples-Papers": {
                                    "_title": "Examples Papers",
                                    "_order": 0,
                                    "_ref": "${refid}7",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Examples Papers",
                                        "_order": 0,
                                        "_ref": "${refid}7",
                                        "_nonEditable": false
                                    }
                                }
                            },
                            "${refid}7": {
                                "page": "<div id='header' style=''> <h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Part 1A Examples Papers<br></h1> <hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;'> </div><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'> &lt;Add link to Teaching Office Examples Table http://www.eng.cam.ac.uk/teaching/past_papers/examples_student/examples_IA/index.html&gt; </p>"
                            }
                        },
                        "${pid}4": {
                            "structure0": {
                                "Lab-Coursework": {
                                    "_title": "Lab/Coursework",
                                    "_order": 0,
                                    "_ref": "${refid}8",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Lab/Coursework",
                                        "_order": 0,
                                        "_ref": "${refid}8",
                                        "_nonEditable": false
                                    }
                                }
                            },
                            "${refid}8": {
                                "page": "<div id='jbmDzM5aa-id8711855'><div id='header' style=''> <h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lab/Coursework<br></h1> <hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;'> </div><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'> &lt;Add lab and/or coursework materials here&gt; </p></div>"
                            }
                        },
                        "${pid}5": {
                            "structure0": {
                                "Exam-Papers": {
                                    "_title": "Exam Papers",
                                    "_order": 0,
                                    "_ref": "${refid}9",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Exam Papers",
                                        "_order": 0,
                                        "_ref": "${refid}9",
                                        "_nonEditable": false
                                    }
                                }
                            },
                            "${refid}9": {
                                "page": "<div id='jbKD3wA9aa-id5399887'><div id='header' style=''> <h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Part 1A Exam Papers<br></h1> <hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;'> </div><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'> &lt;Add link to Teaching Office Exams Table http://www.eng.cam.ac.uk/teaching/past_papers/index.html&gt; </p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'><br></p></div>"
                            }
                        },
                        "${pid}6": {
                            "structure0": {
                                "id4585562": {
                                    "_title": "Syllabus",
                                    "_order": 0,
                                    "_ref": "${refid}10",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 1",
                                        "_order": 0,
                                        "_ref": "${refid}10",
                                        "_nonEditable": false
                                    }
                                },
                                "id4853412": {
                                    "_title": "Section1",
                                    "_order": 1,
                                    "_ref": "${refid}11",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 2",
                                        "_order": 0,
                                        "_ref": "${refid}11",
                                        "_nonEditable": false
                                    }
                                },
                                "id9689347": {
                                    "_title": "Section2",
                                    "_order": 2,
                                    "_ref": "${refid}13",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 3",
                                        "_order": 0,
                                        "_ref": "${refid}13",
                                        "_nonEditable": false
                                    }
                                }
                            },
                            "${refid}10": {
                                "page": "<p><br></p>"
                            },
                            "${refid}11": {
                                "page": "<h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Handouts and Slides for &lt;name of course/module&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>These are all the Lecture Notes for &lt;name of the course/module&gt;.</span> <br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Videos<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>These are all the Lecture Videos for &lt;name of the course/module&gt;.</span> <br></p><p style='padding-left: 30px;'><br></p><p><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Web Resources<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>These are the web based resources (Files/Matlab/Academic Papers etc for &lt;name of the course/module&gt;. <br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span></p><p style=''><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'><span style='color: rgb(54, 109, 160);'><strong><span data-mce-style='font-size: medium;' style='font-size: medium;'>Comments and questions</span></strong></span><br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><span style='font-size: small;'>If you have any comments or questions about the Lecture Materials, you can ask them below:<br><br></span></span><img id='widget_comments_${refid}12' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='http://localhost:8080/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'></p>"
                            },
                            "${refid}12": {
                                comments: {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5
                                }
                            },
                            "${refid}13": {
                                "page": "<h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Handouts and Slides for &lt;name of course/module&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Videos<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='padding-left: 30px;'><br></p><p><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Web Resources<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>&lt;Files/Matlab/Academic Papers etc.&gt; <br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span></p><p style=''><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'><span style='color: rgb(54, 109, 160);'><strong><span data-mce-style='font-size: medium;' style='font-size: medium;'>Comments and questions</span></strong></span><br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><span style='font-size: small;'>If you have any comments or questions about the Lecture Materials, you can ask them below:<br><br></span></span><img id='widget_comments_${refid}14' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='https://v34.ucamoae.caret.cam.ac.uk/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'></p>"
                            },
                            "${refid}14": {
                                comments: {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5
                                }
                            }
                        },
                        "${pid}7": {
                            "structure0": {
                                "id6269478": {
                                    "_title": "Syllabus",
                                    "_order": 0,
                                    "_ref": "${refid}15",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 1",
                                        "_order": 0,
                                        "_ref": "${refid}15",
                                        "_nonEditable": false,
                                        "_id": "main"
                                    }
                                },
                                "id6627736": {
                                    "_title": "Section 1",
                                    "_order": 1,
                                    "_ref": "${refid}16",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 2",
                                        "_order": 0,
                                        "_ref": "${refid}16",
                                        "_nonEditable": false
                                    }
                                },
                                "id773531": {
                                    "_title": "Section 2",
                                    "_order": 2,
                                    "_ref": "${refid}18",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 3",
                                        "_order": 0,
                                        "_ref": "${refid}18",
                                        "_nonEditable": false
                                    }
                                }
                            },
                            "${refid}15": {
                                "page": ""
                            },
                            "${refid}16": {
                                "page": "<h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Handouts and Slides for &lt;name of course/module&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Videos<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='padding-left: 30px;'><br></p><p><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Web Resources<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>&lt;Files/Matlab/Academic Papers etc.&gt; <br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span></p><p style=''><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'><span style='color: rgb(54, 109, 160);'><strong><span data-mce-style='font-size: medium;' style='font-size: medium;'>Comments and questions</span></strong></span><br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><span style='font-size: small;' data-mce-style='font-size: small;'>If you have any comments or questions about the Lecture Materials, you can ask them below:<br><br></span></span><img id='widget_comments_${refid}17' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}17": {
                                comments: {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5
                                }
                            },
                            "${refid}18": {
                                "page": "<h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Handouts and Slides for &lt;name of course/module&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Videos<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='padding-left: 30px;'><br></p><p><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Web Resources<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>&lt;Files/Matlab/Academic Papers etc.&gt; <br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span></p><p style=''><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'><span style='color: rgb(54, 109, 160);'><strong><span data-mce-style='font-size: medium;' style='font-size: medium;'>Comments and questions</span></strong></span><br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><span style='font-size: small;' data-mce-style='font-size: small;'>If you have any comments or questions about the Lecture Materials, you can ask them below:<br><br></span></span><img id='widget_comments_${refid}19' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}19": {
                                comments: {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5
                                }
                            }
                        },
                        "${pid}8": {
                            "structure0": {
                                "id3967295": {
                                    "_title": "Syllabus",
                                    "_order": 0,
                                    "_ref": "${refid}20",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 1",
                                        "_order": 0,
                                        "_ref": "${refid}20",
                                        "_nonEditable": false,
                                    }
                                },
                                "id568167": {
                                    "_title": "Section 1",
                                    "_order": 1,
                                    "_ref": "${refid}21",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 2",
                                        "_order": 0,
                                        "_ref": "${refid}21",
                                        "_nonEditable": false
                                    }
                                },
                                "id5823633": {
                                    "_title": "Section 2",
                                    "_order": 2,
                                    "_ref": "${refid}23",
                                    "_nonEditable": false,
                                    "main": {
                                        "_title": "Page 3",
                                        "_order": 0,
                                        "_ref": "${refid}23",
                                        "_nonEditable": false
                                    }
                                }
                            },
                            "${refid}20": {
                                "page": ""
                            },
                            "${refid}21": {
                                "page": "<h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Handouts and Slides for &lt;name of course/module&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Videos<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='padding-left: 30px;'><br></p><p><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Web Resources<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>&lt;Files/Matlab/Academic Papers etc.&gt; <br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span></p><p style=''><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'><span style='color: rgb(54, 109, 160);'><strong><span data-mce-style='font-size: medium;' style='font-size: medium;'>Comments and questions</span></strong></span><br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><span style='font-size: small;' data-mce-style='font-size: small;'>If you have any comments or questions about the Lecture Materials, you can ask them below:<br><br></span></span><img id='widget_comments_${refid}22' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}22": {
                                comments: {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5
                                }
                            },
                            "${refid}23": {
                                "page": "<h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Handouts and Slides for &lt;name of course/module&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Videos<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span><br style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></p><p style='padding-left: 30px;'><br></p><p><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Web Resources<br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>&lt;Files/Matlab/Academic Papers etc.&gt; <br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></span></p><p style=''><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'><span style='color: rgb(54, 109, 160);'><strong><span data-mce-style='font-size: medium;' style='font-size: medium;'>Comments and questions</span></strong></span><br></h1><hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><span style='font-size: small;' data-mce-style='font-size: small;'>If you have any comments or questions about the Lecture Materials, you can ask them below:<br><br></span></span><img id='widget_comments_${refid}24' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}24": {
                                comments: {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5
                                }
                            }
                        }
                    },
                    "structure": {
                        "about": {
                            "_title": "About",
                            "_order": 0,
                            "_nonEditable": false,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}0"
                        },
                        "fast-feedback": {
                            "_title": "Fast Feedback",
                            "_order": 8,
                            "_nonEditable": true,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}1"
                        },
                        "Timetables": {
                            "_title": "Timetables",
                            "_order": 1,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_nonEditable": false,
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}2"
                        },
                        "Examples-Papers": {
                            "_title": "Examples Papers",
                            "_order": 2,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_nonEditable": false,
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}3"
                        },
                        "Lab-Coursework": {
                            "_title": "Lab/Coursework",
                            "_order": 3,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_nonEditable": false,
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}4"
                        },
                        "Exam-Papers": {
                            "_title": "Exam Papers",
                            "_order": 4,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_nonEditable": false,
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}5"
                        },
                        "Topic": {
                            "_title": "Topic",
                            "_order": 5,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_nonEditable": false,
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}6"
                        },
                        "Topic-2": {
                            "_title": "Topic 2",
                            "_order": 6,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_nonEditable": false,
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}7"
                        },
                        "Topic-3": {
                            "_title": "Topic 3",
                            "_order": 7,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-ts"
                            ],
                            "_edit": [
                                "-ts"
                            ],
                            "_nonEditable": false,
                            "_canView": true,
                            "_canSubedit": true,
                            "_canEdit": true,
                            "_docref": "${pid}8"
                        }
                    },
                    "joinRole": "observer",
                    "creatorRole": "ts"
                },
                {
                    "id": "supervision-outline",
                    "title": "Supervision outline",
                    "img": "/dev/images/worldtemplates/supervision-full.png",
                    "fullImg": "/dev/images/worldtemplates/supervision.png",
                    "perfectFor": "Organising supervisions, using an About section, a Schedule page, an overview of the supervision sessions and Participants. ",
                    "roles": [
                        {
                            "id": "student",
                            "roleTitle": "Students",
                            "title": "Student",
                            "allowManage": false
                        },
                        {
                            "id": "observer",
                            "roleTitle": "Observers",
                            "title": "Observer",
                            "allowManage": false
                        },
                        {
                            "id": "supervisor",
                            "roleTitle": "Supervisors",
                            "title": "Supervisor",
                            "allowManage": true
                        }
                    ],
                    "docs": {
                        "${pid}0": {
                            "structure0": {
                                "participants": {
                                    "_ref": "${refid}0",
                                    "_order": 0,
                                    "_nonEditable": true,
                                    "_title": "Participants",
                                    "main": {
                                        "_ref": "${refid}0",
                                        "_order": 0,
                                        "_nonEditable": true,
                                        "_title": "Participants"
                                    }
                                }
                            },
                            "${refid}0": {
                                "page": "<img id='widget_participants_${refid}1' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/participants/images/participants.png' data-mce-src='/devwidgets/participants/images/participants.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><p></p>"
                            },
                            "${refid}1": {
                                "participants": {
                                    "groupid": "${groupid}"
                                }
                            }
                        },
                        "${pid}1": {
                            "structure0": {
                                "about": {
                                    "_ref": "${refid}2",
                                    "_order": 0,
                                    "_title": "About",
                                    "main": {
                                        "_ref": "${refid}2",
                                        "_order": 0,
                                        "_title": "About"
                                    }
                                }
                            },
                            "${refid}2": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>About</span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'><img src='http://www.eng.cam.ac.uk/admissions/images/yr2a.jpg' alt='2nd year lab' class='pic_right block_image_right' style='border: 1px solid rgb(204, 102, 51); margin: 0px 0px 5px 8px; float: right;' align='right' height='119' width='183'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: small; color: #000000;'><br><meta charset='utf-8'><span class='Apple-style-span' style='line-height: normal; font-size: medium;'></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>When</span><br></h1><p>E.g. Every Tuesday and Thursday from 1.30 pm until 5.30 pm,<br>or Group 1, 2 and 3 on Tuesdays, Group 4 and 5 on Thursdays.<br>To determine your timeslot, please have a look at 'Schedule'.<br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Where</span><br></h1><p style=''>E.g. Austin Building, Room 1 <br>XXX College<br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}3' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Contact</span><br></h1><p style=''>Supervisors' First and Last Name<br>E.g. Austin Building, Room 1 <br>XXX College<br><span style='color: rgb(128, 128, 128);'><em>(to deliver your homework or to ask urgent questions)</em></span><br></p><p style=''>Mobile: 0123 456 789<br><span style='color: rgb(128, 128, 128);'><em>(if you ever need me in a hurry)</em></span><br><br><br></p><p><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'>&nbsp;<br><br></p>"
                            },
                            "${refid}3": {
                                "embedcontent": {
                                    "embedmethod": "original",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": false,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319194856146,
                                        "_id": "82fEEPvTEeCQ2wzTfwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319194856146,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ifcXiOOo9E",
                                        "_path": "ioIcyhk1A/id4316837/embedcontent/items"
                                    }
                                }
                            }
                        },
                        "${pid}2": {
                            "structure0": {
                                "guidelines-for-supervisors": {
                                    "_ref": "${refid}4",
                                    "_order": 1,
                                    "_title": "Guidelines-for-supervisors",
                                    "main": {
                                        "_ref": "${refid}4",
                                        "_order": 1,
                                        "_title": "Guidelines-for-supervisors"
                                    }
                                }
                            },
                            "${refid}4": {
                                "page": "<p><img src='/devwidgets/remotecontent/images/remotecontent.png' id='widget_remotecontent_${refid}5' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' border='1'></p><p></p><p></p><p></p>"
                            },
                            "${refid}5": {
                                "remotecontent": {
                                    "width_unit": "%",
                                    "height": "650",
                                    "width": "100",
                                    "border_color": "cccccc",
                                    "url": "http://www.eng.cam.ac.uk/teaching/teachoff/NewSupsGuide.html",
                                    "border_size": 0
                                }
                            }
                        },
                        "${pid}3": {
                            "structure0": {
                                "schedule": {
                                    "_ref": "${refid}6",
                                    "_order": 2,
                                    "_title": "Schedule",
                                    "main": {
                                        "_ref": "${refid}6",
                                        "_order": 2,
                                        "_title": "Schedule"
                                    }
                                }
                            },
                            "${refid}6": {
                                "page": "<p>Please sign up for supervisions below by choosing 'Edit page', then replacing '&lt;names&gt;' with your name(s), then choosing 'Save'.<br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Title Session 1 </span><br></h1><p><strong><br>When:</strong> Tuesday X Month, 20XX<br><strong>Where:</strong> at Austin Building, Room 1, XXX College</p><table style='width: 706px; height: 101px; border: 1px solid rgb(141, 144, 141);' frame='border' rules='all' border='1'><tbody><tr><td><strong>Timeslot</strong><br data-mce-bogus='1'></td><td><strong>Your names</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br data-mce-bogus='1'></td></tr><tr><td>1:30 pm<br data-mce-bogus='1'></td><td>&lt;names&gt;<br data-mce-bogus='1'></td></tr><tr><td>2:30 pm</td><td>&lt;names&gt;</td></tr><tr><td>3:30 pm</td><td>&lt;names&gt;</td></tr><tr><td>4:30 pm</td><td>&lt;names&gt;</td></tr></tbody></table><p><br><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Title Session 2</span><br></h1><p><strong><br>When:</strong> Tuesday X Month, 20XX<br><strong>Where:</strong> at Austin Building, Room 1, XXX College<br></p><table style='width: 706px; height: 101px; border: 1px solid rgb(141, 144, 141);' frame='border' rules='all' border='1'><tbody><tr><td><strong>Timeslot</strong><br data-mce-bogus='1'></td><td><strong>Your names</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br data-mce-bogus='1'></td></tr><tr><td>1:30 pm<br data-mce-bogus='1'></td><td>&lt;names&gt;<br data-mce-bogus='1'></td></tr><tr><td>2:30 pm</td><td>&lt;names&gt;</td></tr><tr><td>3:30 pm</td><td>&lt;names&gt;</td></tr><tr><td>4:30 pm</td><td>&lt;names&gt;</td></tr></tbody></table><p><br></p><p><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Comments &amp; Questions</span><br></h1><p>If you have any comments or questions about arranging the time slots, you can ask them here.<br><br><img id='widget_comments_${refid}7' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p><br><br></p>"
                            },
                            "${refid}7": {
                                "comments": {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5,
                                    "message": {
                                        "sling:resourceType": "sakai/messagestore",
                                        "_created": 1319195243501,
                                        "_id": "2kmZ0PvUEeCQ2wzTfwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319195243501,
                                        "_createdBy": "exporttemplate",
                                        "_path": "ioIcqViQaa/id57517877/comments/message"
                                    }
                                }
                            }
                        },
                        "${pid}4": {
                            "structure0": {
                                "session1": {
                                    "_ref": "${refid}8",
                                    "_order": 3,
                                    "_title": "Title Session 1",
                                    "main": {
                                        "_ref": "${refid}8",
                                        "_order": 0,
                                        "_title": "Title Session 1"
                                    }
                                },
                                "session2": {
                                    "_ref": "${refid}14",
                                    "_order": 3,
                                    "_title": "Title Session 2",
                                    "main": {
                                        "_ref": "${refid}14",
                                        "_order": 0,
                                        "_title": "Title Session 2"
                                    }
                                },
                                "session3": {
                                    "_ref": "${refid}20",
                                    "_order": 3,
                                    "_title": "Title Session 3",
                                    "main": {
                                        "_ref": "${refid}20",
                                        "_order": 0,
                                        "_title": "Title Session 3"
                                    }
                                }
                            },
                            "${refid}8": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>&lt;Title Session 1&gt; (e.g. Paper/Set of questions of that paper etc) </span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br><br></p><table class='mceItemTable' style='background-color: rgb(232, 241, 248); width: 699px; height: 138px;' border='0'><tbody><tr><td style='padding-left: 30px;'><strong>When:</strong> Tuesday X Month, 20XX<br><br><strong>Where:</strong> at Austin Building, Room 1, XXX College<br><br><strong>Times:</strong> cf. 'Schedule'<br><br><strong>Prerequisites:</strong> Bring Handbook XXX, Make sure you've read 1.1 (p5-15)</td></tr></tbody></table><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><img id='widget_embedcontent_${refid}9' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Homework for &lt;Title session 1&gt;</span><br></h1><p><br><br>Answer questions 7 and 8 from the past papers, and complete the C section of the practical exam. <br>Please hand in work by Xday, 10 pm at my college (don't forget to mention my name to the porter), or email it to me by that same time.<br><br> <br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Related Materials</span><br></h1><p style=''><br><br><span style='color: rgb(128, 128, 128); font-size: large;'>Related Lecture Notes</span><br><br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}10' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style=''><span style='color: rgb(32, 89, 141);'></span><span style='color: rgb(128, 128, 128); font-size: large;'>Past exam papers</span><span style='color: rgb(32, 89, 141);'><br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}11' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style=''><span style='color: rgb(32, 89, 141);'></span><span style='color: rgb(128, 128, 128); font-size: large;'>Other Useful Information<br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}12' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><span style='color: rgb(128, 128, 128); font-size: large;' data-mce-style='color: #808080; font-size: large;'><br></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Comments &amp; Questions</span><br></h1><p>If you have any comments or questions about the exam papers or homework, you can mention them here.<br><br></p><p style='' data-mce-style=''><img id='widget_comments_${refid}13' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p><br></p>"
                            },
                            "${refid}9": {
                                "embedcontent": {
                                    "embedmethod": "original",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": false,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319211428841,
                                        "_id": "iYB9kPv6EeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319211428841,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/iomSvowpaa",
                                        "_path": "ioIcm12iaa/id2582837/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}10": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319198495291,
                                        "_id": "bIFgsPvcEeCQ2wzTfwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319198495291,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/if3tdfegJ",
                                        "_path": "ioIcm12iaa/id1166976/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}11": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319198538731,
                                        "_id": "hmXLsPvcEeCQ2wzTfwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319198538731,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/if3M8Dc70",
                                        "_path": "ioIcm12iaa/id1158040/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}12": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319198588073,
                                        "_id": "o87JkPvcEeCQ2wzTfwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319198588073,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilWoDpYQ2",
                                        "_path": "ioIcm12iaa/id5856020/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}13": {
                                "comments": {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5,
                                    "message": {
                                    }
                                }
                            },
                            "${refid}14": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>&lt;Title Session 2&gt; (e.g. Paper/Set of questions of that paper etc) </span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br><br></p><table class='mceItemTable' style='background-color: rgb(232, 241, 248); width: 699px; height: 138px;' border='0'><tbody><tr><td style='padding-left: 30px;'><strong>When:</strong> Thursday X Month, 20XX<br><br><strong>Where:</strong> at Austin Building, Room 1, XXX College<br><br><strong>Times:</strong> cf. 'Schedule'<br><br><strong>Prerequisites:</strong> Bring Handbook XXX, Make sure you've read 1.2 (p15-25)</td></tr></tbody></table><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.</p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><img id='widget_embedcontent_${refid}15' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Homework for &lt;Title session 2&gt;</span><br></h1><p><br><br>Answer questions 9 and 10 from the past papers, and complete the D section of the practical exam. <br>Please hand in work by Xday, 10 pm at my college (don't forget to mention my name to the porter), or email it to me by that same time.<br><br><strong>Extra question to discuss with your group members:</strong><br><br>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie? <br><br> <br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Related Materials</span><br></h1><p style=''><br><br><span style='color: rgb(128, 128, 128); font-size: large;'>Related Lecture Notes</span><br><br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}16' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><span style='color: rgb(32, 89, 141);' data-mce-style='color: #20598d;'></span></p><p style=''><span style='color: rgb(32, 89, 141);'></span><span style='color: rgb(128, 128, 128); font-size: large;'>Past exam papers</span><br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}17' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><span style='color: rgb(32, 89, 141);' data-mce-style='color: #20598d;'><br></span></p><p style=''><span style='color: rgb(32, 89, 141);'></span><span style='color: rgb(128, 128, 128); font-size: large;'>Other Useful Information<br><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='color: rgb(128, 128, 128); font-size: large;' data-mce-style='color: #808080; font-size: large;'><img id='widget_embedcontent_${refid}18' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Comments &amp; Questions</span><br></h1><p>If you have any comments or questions about the exam papers or homework, you can mention them here.<br><br></p><p style=''><img id='widget_comments_${refid}19' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><br></p><p><br></p>"
                            },
                            "${refid}15": {
                                "embedcontent": {
                                    "embedmethod": "original",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": false,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201439389,
                                        "_id": "R1MU0PvjEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201439389,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/il95OV9cH",
                                        "_path": "ioIcm12iaa/id2885827/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}16": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201473322,
                                        "_id": "W4zYoPvjEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201473322,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ile50swEV",
                                        "_path": "ioIcm12iaa/id2505989/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}17": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201535951,
                                        "_id": "gOFF8PvjEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201535951,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/if3M8Dc70",
                                        "_path": "ioIcm12iaa/id8004247/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}18": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201588163,
                                        "_id": "oAAxMPvjEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201588163,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilWoDpYQ2",
                                        "_path": "ioIcm12iaa/id7101562/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}19": {
                                "comments": {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5,
                                    "message": {
                                    }
                                }
                            },
                            "${refid}20": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>&lt;Title Session 3&gt; (e.g. Paper/Set of questions of that paper etc) </span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br><br></p><table class='mceItemTable' style='background-color: rgb(232, 241, 248); width: 699px; height: 138px;' border='0'><tbody><tr><td style='padding-left: 30px;'><strong>When:</strong> Tuesday X Month, 20XX<br><br><strong>Where:</strong> at Austin Building, Room 1, XXX College<br><br><strong>Times:</strong> cf. 'Schedule'<br><br><strong>Prerequisites:</strong> Bring Handbook XXX, Make sure you've read 1.3 (p25-36)</td></tr></tbody></table><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><img id='widget_embedcontent_${refid}21' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><br><span class='Apple-style-span' style='line-height: normal; font-size: medium;' data-mce-style='line-height: normal; font-size: medium;'></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Homework for &lt;Title session 3&gt;</span><br></h1><p><br><br>Answer questions 3 and 4 from the past papers, and complete the A section of the practical exam. <br>Please hand in work by Xday, 10 pm at my college (don't forget to mention my name to the porter), or email it to me by that same time.<br><br> <br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Related Materials</span><br></h1><p style=''><br><br><span style='color: rgb(128, 128, 128); font-size: large;'>Related Lecture Notes</span><br><br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}22' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style=''><span style='color: rgb(32, 89, 141);'></span><span style='color: rgb(128, 128, 128); font-size: large;'>Past exam papers</span><span style='color: rgb(32, 89, 141);'><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}23' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style=''><span style='color: rgb(32, 89, 141);'></span><span style='color: rgb(128, 128, 128); font-size: large;'>Other Useful Information<br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}24' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><span style='color: rgb(128, 128, 128); font-size: large;' data-mce-style='color: #808080; font-size: large;'><br></span></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><span style='color: rgb(32, 89, 141);' data-mce-style='color: #20598d;'></span><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Comments &amp; Questions</span><br></h1><p>If you have any comments or questions about the exam papers or homework, you can mention them here.<br><br></p><p style='' data-mce-style=''><img id='widget_comments_${refid}25' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p><br></p>"
                            },
                            "${refid}21": {
                                "embedcontent": {
                                    "embedmethod": "original",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": false,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201737787,
                                        "_id": "-S8AsPvjEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201737787,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilecQq6aa",
                                        "_path": "ioIcm12iaa/id8214394/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}22": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201774602,
                                        "_id": "DyCGoPvkEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201774602,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilecyUEaa",
                                        "_path": "ioIcm12iaa/id9189170/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}23": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201802878,
                                        "_id": "H_sZ4PvkEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201802878,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/if3M8Dc70",
                                        "_path": "ioIcm12iaa/id4396756/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}24": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319201835542,
                                        "_id": "M3M7YPvkEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319201835542,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilWoDpYQ2",
                                        "_path": "ioIcm12iaa/id9650702/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}25": {
                                "comments": {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5,
                                    "message": {
                                    }
                                }
                            }
                        }
                    },
                    "structure": {
                        "participants": {
                            "_title": "Participants",
                            "_order": 4,
                            "_nonEditable": true,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-supervisor"
                            ],
                            "_edit": [
                                "-supervisor"
                            ],
                            "_docref": "${pid}0"
                        },
                        "about": {
                            "_title": "About",
                            "_order": 0,
                            "_nonEditable": false,
                            "_view": [
                                "anonymous",
                                "everyone",
                                "-student",
                                "-observer",
                                "-supervisor"
                            ],
                            "_edit": [
                                "-supervisor"
                            ],
                            "_docref": "${pid}1"
                        },
                        "guidelines-for-supervisors": {
                            "_title": "Guidelines-for-supervisors",
                            "_order": 1,
                            "_nonEditable": false,
                            "_view": [
                                "-supervisor"
                            ],
                            "_edit": [
                                "-supervisor"
                            ],
                            "_docref": "${pid}2"
                        },
                        "schedule": {
                            "_title": "Schedule",
                            "_order": 2,
                            "_nonEditable": false,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-supervisor"
                            ],
                            "_edit": [
                                "-student",
                                "-supervisor"
                            ],
                            "_docref": "${pid}3"
                        },
                        "supervision-sessions": {
                            "_title": "Supervision-Sessions",
                            "_order": 3,
                            "_nonEditable": false,
                            "_view": [
                                "everyone",
                                "-student",
                                "-observer",
                                "-supervisor"
                            ],
                            "_edit": [
                                "-supervisor"
                            ],
                            "_docref": "${pid}4"
                        }
                    },
                    "joinRole": "student",
                    "creatorRole": "supervisor"
                }
            ]
    },
		{
            id: "research-collaborations",
            title: "RESEARCH_COLLABORATIONS",
            titleSing: "RESEARCH_COLLABORATION",
            templates: [
                {
                    "id": "research-group",
                    "title": "Research group",
                    "img": "/dev/images/worldtemplates/researchgrouptemplate1.png",
                    "fullImg": "/dev/images/worldtemplates/researchgrouptemplate1-full.png",
                    "perfectFor": "Group collaborations and sharing, using sections to describe your research on it internally, to list Events and Meetings and collaborate on Funding.",
                    "roles": [
                        {
                            "id": "lead",
                            "roleTitle": "Lead",
                            "title": "Lead",
                            "allowManage": true
                        },
                        {
                            "id": "researcher",
                            "roleTitle": "Researchers",
                            "title": "Researcher",
                            "allowManage": false
                        },
                        {
                            "id": "mentor",
                            "roleTitle": "Mentors",
                            "title": "Mentor",
                            "allowManage": false
                        },
                        {
                            "id": "observer",
                            "roleTitle": "Observers",
                            "title": "Observer",
                            "allowManage": false
                        }
                    ],
                    "docs": {
                        "${pid}0": {
                            "structure0": {
                                "library": {
                                    "_ref": "${refid}0",
                                    "_order": 7,
                                    "_nonEditable": true,
                                    "_title": "Library",
                                    "main": {
                                        "_ref": "${refid}0",
                                        "_order": 0,
                                        "_nonEditable": true,
                                        "_title": "Library"
                                    }
                                }
                            },
                            "${refid}0": {
                                "page": "<img id='widget_mylibrary_${refid}1' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/mylibrary/images/mylibrary.png' data-mce-src='/devwidgets/mylibrary/images/mylibrary.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><p></p>"
                            },
                            "${refid}1": {
                                "mylibrary": {
                                    "groupid": "${groupid}"
                                }
                            }
                        },
                        "${pid}1": {
                            "structure0": {
                                "participants": {
                                    "_ref": "${refid}2",
                                    "_order": 8,
                                    "_title": "Participants",
                                    "_nonEditable": true,
                                    "main": {
                                        "_ref": "${refid}2",
                                        "_order": 0,
                                        "_nonEditable": true,
                                        "_title": "Participants"
                                    }
                                }
                            },
                            "${refid}2": {
                                "page": "<img id='widget_participants_${refid}3' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/participants/images/participants.png' data-mce-src='/devwidgets/participants/images/participants.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><p></p>"
                            },
                            "${refid}3": {
                                "participants": {
                                    "groupid": "${groupid}"
                                }
                            }
                        },
                        "${pid}2": {
                            "structure0": {
                                "about": {
                                    "_ref": "${refid}4",
                                    "_order": 0,
                                    "_title": "About",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}4",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "About"
                                    }
                                }
                            },
                            "${refid}4": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>About the project</span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'><img src='http://www.eng.cam.ac.uk/admissions/images/yr2a.jpg' alt='2nd year lab' class='pic_right block_image_right' style='border: 1px solid rgb(204, 102, 51); margin: 0px 0px 5px 8px; float: right;' align='right' height='119' width='183'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: small; color: #000000;'><br><meta charset='utf-8'><span class='Apple-style-span' style='line-height: normal; font-size: medium;'></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>The team</span><br></h1><p>We're very happy to help you answer questions about our project. <br><br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}5' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Contact us</span><br></h1><p style=''>Project Name<br>Address<span style='color: rgb(128, 128, 128);'><em></em></span><br></p><p style=''></p><p style=''>Mobile: 0123 456 789<br><span style='color: rgb(128, 128, 128);'><em></em></span>Fax: 0123 456 789<br>Email: projectsname @ mail.com<br><span style='color: rgb(128, 128, 128);'><em></em></span><br><span style='color: rgb(128, 128, 128);'><em></em></span>Or follow us on Twitter: Name project<br><br></p><p><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);'><br></p>"
                            },
                            "${refid}5": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319202469531,
                                        "_id": "rVZGsPvlEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319202469531,
                                        "__array__2__": "/p/ilq1puepec",
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilq1R7oxmg",
                                        "_path": "iooY6a1Qie/id932268/embedcontent/items",
                                        "__array__1__": "/p/ilq1vMpCo"
                                    }
                                }
                            }
                        },
                        "${pid}3": {
                            "structure0": {
                                "schedule-announcements": {
                                    "_ref": "${refid}6",
                                    "_order": 1,
                                    "_title": "Schedule & Announcements",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}6",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Schedule & Announcements"
                                    }
                                }
                            },
                            "${refid}6": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Schedule</span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><span style='color: rgb(136, 136, 136);'>&lt;Google Calendar / Calendar to be added&gt;</span><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana, Arial, Helvetica, sans-serif; font-size: small; color: #000000;'><br><meta charset='utf-8'><span class='Apple-style-span' style='line-height: normal; font-size: medium;'></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Announcements </span></h1><p><br></p><p style=''><strong>2. We've now arranged another meeting on &lt;date&gt;!</strong><br></p><p style=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.<br><strong><br><br>1. Welcome to the &lt;Project's name&gt; site!</strong><br></p><p style=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. </p>"
                            }
                        },
                        "${pid}4": {
                            "structure0": {
                                "phase1": {
                                    "_ref": "${refid}7",
                                    "_order": 0,
                                    "_title": "Phase 1",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}7",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Phase 1"
                                    }
                                },
                                "phase2": {
                                    "_ref": "${refid}10",
                                    "_order": 1,
                                    "_title": "Phase 2",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}10",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Phase 2"
                                    }
                                },
                                "papers": {
                                    "_ref": "${refid}12",
                                    "_order": 2,
                                    "_title": "Papers",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}12",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Papers"
                                    }
                                }
                            },
                            "${refid}7": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Phase 1: &lt;name phase 1&gt;</span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br></p><table class='mceItemTable' style='background-color: rgb(232, 241, 248);' border='0' height='189' width='699'><tbody><tr><td style='padding-left: 30px;'><strong><br>When:</strong> running from xx until xx<br><br><strong>Members working on it:</strong> Donatello Romeo, Laura Boyd<br><br><strong>Plans:</strong> 1. Discuss Project plan 2. Interviews 3. intermediate analysis ...<br><br><strong>Materials:</strong> Will need xxx and xxx<br><br><strong>Collaborations:</strong> Contact &lt;Name person from other project&gt;<br><br></td></tr></tbody></table><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br><br><span class='Apple-style-span' style='line-height: normal; font-size: medium;' data-mce-style='line-height: normal; font-size: medium;'></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>1. &lt;Plans topic 1&gt;</span><br></h1><p>Raw data, raw data, raw data, raw data, raw data etc.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum. <br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;' data-mce-style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: #cc6633; border-bottom: thin dotted #cccccc; padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144); font-size: small;' data-mce-style='color: #1d5f90; font-size: small;'>Raw data:<br><br><img id='widget_embedcontent_${refid}8' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'></span><span style='color: rgb(29, 95, 144);' data-mce-style='color: #1d5f90;'><br>2. &lt;Plans topic 2&gt;</span><br></h1><p>Raw data, raw data, raw data, raw data, raw data etc.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;' data-mce-style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: #cc6633; border-bottom: thin dotted #cccccc; padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144); font-size: small;' data-mce-style='color: #1d5f90; font-size: small;'>Raw data:<br><br></span><span style='color: rgb(29, 95, 144);' data-mce-style='color: #1d5f90;'><img id='widget_embedcontent_${refid}9' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><br>3. &lt;Plans topic 3&gt;</span><br></h1><p>Raw data, raw data, raw data, raw data, raw data etc.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Conclusions &lt;Phase 1&gt;</span><br></h1><p><strong>Summary of outputs:</strong><br><br>1. E.g. For the research, the participants showed us the results that .... <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.<br><br>2. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Reflection on &lt;Phase 1&gt;</span><br></h1><p><strong>Things we could improve for future phases:</strong><br>1. e.g. we shouln't contact our partners by email but by phone, we should plan xxx better by doing xxx instead of xxx<br><br><br><strong>Things we have to continue doing for future phases:</strong><br>1. E.g. Our project meetings ran very smoothly because xxx, so we definitly need to repeat xxx in the future.</p><p><br></p><p><br><br> <br></p>"
                            },
                            "${refid}8": {
                                "embedcontent": {
                                    "embedmethod": "original",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": false,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319202573752,
                                        "_id": "63UjgPvlEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319202573752,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilqmKEHGCo",
                                        "_path": "iooY29aaa/id9466691/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}9": {
                                "embedcontent": {
                                    "embedmethod": "original",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": false,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319202595635,
                                        "_id": "-IA4MPvlEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319202595635,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilqmKEHGCo",
                                        "_path": "iooY29aaa/id4469433/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}10": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Phase 2: &lt;name phase 2&gt;</span><br></h1><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br></p><table class='mceItemTable' style='background-color: rgb(232, 241, 248);' border='0' height='189' width='699'><tbody><tr><td style='padding-left: 30px;'><strong><br>When:</strong> running from xx until xx<br><br><strong>Members working on it:</strong> Laura Boyd, Peter Boss<br><br><strong>Plans:</strong> 1. Review outputs and start further plan 2. Workshop 3. intermediate analysis ...<br><br><strong>Materials:</strong> Will need xxx and xxx<br><br><strong>Collaborations:</strong> Contact &lt;Name person from other project&gt;<br><br></td></tr></tbody></table><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'><br></p><p style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);' data-mce-style='font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br><br><span class='Apple-style-span' style='line-height: normal; font-size: medium;' data-mce-style='line-height: normal; font-size: medium;'></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>1. &lt;Plans topic 1&gt;</span><br></h1><p>Raw data, raw data, raw data, raw data, raw data etc<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum. <br><br></p><p><img id='widget_embedcontent_${refid}11' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>2. &lt;Plans topic 2&gt;</span><br></h1><p>Raw data, raw data, raw data, raw data, raw data etc<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>3. &lt;Plans topic 3&gt;</span><br></h1><p>Raw data, raw data, raw data, raw data, raw data etc<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Conclusions &lt;Phase 2&gt;</span><br></h1><p><strong>Summary of outputs:</strong><br><br>1. E.g. For the research, the participants showed us the results that .... <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.<br><br>2. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Reflection on &lt;Phase 2&gt;</span><br></h1><p><strong>Things we could improve for future phases:</strong><br>1. e.g. we shouln't contact our partners by email but by phone, we should plan xxx better by doing xxx instead of xxx<br><br><br><strong>Things we have to continue doing for future phases:</strong><br>1. E.g. Our project meetings ran very smoothly because xxx, so we definitly need to repeat xxx in the future.</p><p><br></p><p><br><br></p>"
                            },
                            "${refid}11": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319202765487,
                                        "_id": "Xb2T8PvmEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319202765487,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilqmKEHGCo",
                                        "_path": "iooY29aaa/id6545353/embedcontent/items",
                                        "__array__1__": "/p/ilWoDpYQ2"
                                    }
                                }
                            },
                            "${refid}12": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Drafts</span><br></h1><p>Drafts of final paper etc.<br>orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br></p><p><img id='widget_embedcontent_${refid}13' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Final paper</span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum. <br><br></p><p><img id='widget_embedcontent_${refid}14' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Comments</span><br></h1><p>Any comments on the paper can be inserted here:<br><br><img id='widget_comments_${refid}15' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}13": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319202870055,
                                        "_id": "nBFjcPvmEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319202870055,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwsgF7d1A",
                                        "_path": "iooY29aaa/id9989156/embedcontent/items",
                                        "__array__1__": "/p/ilwsKPo9Sw"
                                    }
                                }
                            },
                            "${refid}14": {
                                "embedcontent": {
                                    "embedmethod": "original",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": false,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319202890797,
                                        "_id": "qG5d0PvmEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319202890797,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwscm4aa",
                                        "_path": "iooY29aaa/id6932929/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}15": {
                                "comments": {
                                    "sakai:allowanonymous": false,
                                    "sakai:type": "comment",
                                    "direction": "comments_FirstUp",
                                    "perPage": 5,
                                    "message": {}
                                }
                            }
                        },
                        "${pid}5": {
                            "structure0": {
                                "collaberations": {
                                    "_ref": "${refid}16",
                                    "_order": 0,
                                    "_title": "Collaborations",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}16",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Collaborations"
                                    }
                                },
                                "contact-list": {
                                    "_ref": "${refid}20",
                                    "_order": 1,
                                    "_title": "Contact list",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}20",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Contact list"
                                    }
                                },
                                "summer-students-visitors": {
                                    "_ref": "${refid}21",
                                    "_order": 2,
                                    "_title": "Summer students & visitors",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}21",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Summer students & visitors"
                                    }
                                },
                                "literature": {
                                    "_ref": "${refid}27",
                                    "_order": 3,
                                    "_title": "Literature",
                                    "_nonEditable": false,
                                    "main": {
                                        "_ref": "${refid}27",
                                        "_order": 0,
                                        "_nonEditable": false,
                                        "_title": "Literature"
                                    }
                                }
                            },
                            "${refid}16": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>&lt;Name Project 1&gt;</span><br></h1><p style=''>&lt;Name Project 1&gt; is about Lorem ipsum dolor sit amet...and has learned us that Lorem ipsum dolor sit amet. <br>Below you can find their papers and other documents that can be of interest to us. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.</p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}17' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>&lt;Name Project 2&gt;</span></h1><p>&lt;Name Project 2&gt; is about Lorem ipsum dolor sit amet...and has learned us that Lorem ipsum dolor sit amet. <br> Below you can find their papers and other documents that can be of interest to us. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}18' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>&lt;Name Project 3&gt;</span></h1><p>&lt;Name Project 3&gt; is about Lorem ipsum dolor sit amet...and has learned us that Lorem ipsum dolor sit amet. <br> Below you can find their papers and other documents that can be of interest to us. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.</p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}19' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}17": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319207393505,
                                        "_id": "JEEVEPvxEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319207393505,
                                        "__array__2__": "/p/ilwQCoIqi",
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwIYgaaa",
                                        "_path": "iooY4meaa/id7005696/embedcontent/items",
                                        "__array__1__": "/p/ilwQoabqi"
                                    }
                                }
                            },
                            "${refid}18": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319207418908,
                                        "_id": "M2VFwPvxEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319207418908,
                                        "__array__2__": "/p/ilwQoabqi",
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwIYgaaa",
                                        "_path": "iooY4meaa/id5345299/embedcontent/items",
                                        "__array__1__": "/p/ilwQCoIqi"
                                    }
                                }
                            },
                            "${refid}19": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319207450032,
                                        "_id": "RfJrAPvxEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319207450032,
                                        "__array__2__": "/p/ilwQoabqi",
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwIYgaaa",
                                        "_path": "iooY4meaa/id6754043/embedcontent/items",
                                        "__array__1__": "/p/ilwQCoIqi"
                                    }
                                }
                            },
                            "${refid}20": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Contact List</span><br></h1><p>Below is a list of all the Contacts outside our project that could be beneficial to us to collaborate with from time to time (e.g. because they're working in the same area, when met at a conference etc).<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br></p><p><br></p><table style='border: 1px solid rgb(190, 187, 190); width: 708px; height: 351px;' frame='border' rules='all' border='1'><tbody><tr><td><span style='color: rgb(92, 92, 92);'><strong>Company</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Contact</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Email</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Phone</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Mobile</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Position</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Address</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>City &amp; Postcode</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Country</strong></span><br data-mce-bogus='1'></td><td><span style='color: rgb(92, 92, 92);'><strong>Notes</strong></span><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr><tr><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td><td><br data-mce-bogus='1'></td></tr></tbody></table><p><br></p><p><br></p>"
                            },
                            "${refid}21": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Summer Students</span><br></h1><p><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br></span><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></p><p><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'></span></p><p><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'></span></p><p><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'></span></p><p style='' data-mce-style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'>&lt;Name Student 1&gt;</span></strong></span><span style='color: rgb(0, 0, 0);'><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.</span></p><p style='padding-left: 30px;'><img id='widget_embedcontent_${refid}22' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style=''><span style='color: rgb(0, 0, 0);'><strong><span data-mce-style='font-size: small;' style='font-size: small;'></span></strong></span></p><p style='' data-mce-style=''><strong><span data-mce-style='color: #000000;' style='color: rgb(0, 0, 0);'><span data-mce-style='font-size: small;' style='font-size: small;'>&lt;Name Student 2&gt;</span></span></strong><br><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.</span></p><p style='padding-left: 30px;'><img id='widget_embedcontent_${refid}23' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style=''><strong><span data-mce-style='font-size: small;' style='font-size: small;'>&lt;Name Student 3&gt;</span></strong><br><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.</span></p><p style='padding-left: 30px;'><img id='widget_embedcontent_${refid}24' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p style=''><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'><br></span></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Visitors</span></h1><p><span style='color: rgb(0, 0, 0);'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br></span><span style='font-size: small;'><strong>&lt;Name Visitor&gt;</strong></span><br><span style='color: rgb(0, 0, 0);'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.</span><span style='font-size: small;'><strong></strong></span></p><p style='padding-left: 30px;'><img id='widget_embedcontent_${refid}25' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p><p><span style='font-size: small;'><strong>&lt;Name Visitor&gt;</strong></span><br><span style='color: rgb(0, 0, 0);'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris.</span></p><p style='padding-left: 30px;'><img id='widget_embedcontent_${refid}26' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><span style='color: rgb(0, 0, 0);' data-mce-style='color: #000000;'><br></span></p><p><br></p>"
                            },
                            "${refid}22": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319205742378,
                                        "_id": "TBsYoPvtEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319205742378,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwIYgaaa",
                                        "_path": "iooY4meaa/id4263790/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}23": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319205759880,
                                        "_id": "VomwgPvtEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319205759880,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwIYgaaa",
                                        "_path": "iooY4meaa/id3706345/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}24": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319205779433,
                                        "_id": "YjE9kPvtEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319205779433,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwIYgaaa",
                                        "_path": "iooY4meaa/id717642/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}25": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319205816370,
                                        "_id": "eDVhIPvtEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319205816370,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilqmKEHGCo",
                                        "_path": "iooY4meaa/id8335257/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}26": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "single",
                                    "items": {
                                        "_created": 1319205833760,
                                        "_id": "gpLiAPvtEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319205833760,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwIYgaaa",
                                        "_path": "iooY4meaa/id7307519/embedcontent/items"
                                    }
                                }
                            },
                            "${refid}27": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Literature</span><br></h1><p>Here you can add more interesting literature: e.g. a very interesting book, reference, video, link etc you found somewhere.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum. <br></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><br><img id='widget_embedcontent_${refid}28' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}28": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319205933142,
                                        "_id": "vc9fYPvtEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319205933142,
                                        "__array__2__": "/p/ilqmKEHGCo",
                                        "__array__3__": "/p/ilwQCoIqi",
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilwQoabqi",
                                        "_path": "iooY4meaa/id6672085/embedcontent/items",
                                        "__array__1__": "/p/ilwIYgaaa"
                                    }
                                }
                            }
                        },
                        "${pid}6": {
                            structure0: {
                                "talks":{
                                    "_ref":"${refid}28",
                                    "_order":0,
                                    "_title":"Talks",
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}28",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Talks"
                                    }
                                },
                                "conferences":{
                                    "_ref":"${refid}29",
                                    "_order":0,
                                    "_title":"Conferences",
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}29",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Conferences"
                                    }
                                },
                                "workshops":{
                                    "_ref":"${refid}30",
                                    "_order":0,
                                    "_title":"Workshops",
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}30",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Workshops"
                                    }
                                },
                                "other-presentations":{
                                    "_ref":"${refid}31",
                                    "_order":0,
                                    "_title":"Other Presentations",
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}31",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Other Presentations"
                                    }
                                }
                            },
                            "${refid}28": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
                                "t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
                                "; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Name Talk"+ 
                                " 1&gt;</span><br></h1><p>Here you can add all the documents produced for a speci"+ 
                                "fic talk.<br>Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Aenean c"+ 
                                "ommodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. "+ 
                                "\nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNulla v"+ 
                                "ehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauctor sem. <br"+ 
                                "><br></p><p style=\'padding-left: 30px;\'><img id=\'widget_embedcontent_${refid}32"+ 
                                "\' class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\'"+ 
                                " src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/"+ 
                                "embedcontent/images/content.png\' data-mce-style=\'display: block; padding: 10px"+ 
                                "; margin: 4px;\' border=\'1\'><br></p><h1 style=\'font-family: Arial,Helvetica,s"+ 
                                "ans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-"+ 
                                "bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'co"+ 
                                "lor: rgb(29, 95, 144);\'>&lt;Name Talk 2&gt;</span><br></h1><p>Here you can add "+ 
                                "all the documents produced for a specific talk.<br>Lorem\n ipsum dolor sit amet,"+ 
                                " consectetur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Quis"+ 
                                "que aliquam tristique mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar "+ 
                                "sapien lorem, eu auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id "+ 
                                "diam arcu, tristique \nauctor sem.</p><h1 style=\'f"+ 
                                "ont-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; colo"+ 
                                "r: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0p"+ 
                                "x 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Name Talk 3&gt;</span>"+ 
                                "<br></h1><p>Here you can add all the documents produced for a specific talk.<br>"+ 
                                "Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo \ndign"+ 
                                "issim quam ac fermentum. Quisque aliquam tristique mi at molestie. \nMauris vita"+ 
                                "e sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNulla vehicula sodal"+ 
                                "es sollicitudin. Praesent id diam arcu, tristique \nauctor sem. </p><p><br></p><"+ 
                                "p><br></p><p><br></p>"
                            },
                            "${refid}32": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319209315934,
                                        "_id": "nhx34Pv1EeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319209315934,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilCsUXOaa",
                                        "_path": "ioY3APwCAT/id2097612/embedcontent/items",
                                        "__array__1__": "/p/ilCsu3Eaa"
                                    }
                                }
                            },
                            "${refid}29": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
                                "t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
                                "; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Conferenc"+ 
                                "e Presentation 1&gt;</span><br></h1><p>Here you can add all the documents produc"+ 
                                "ed for a specific conference (presentation).<br>Lorem\n ipsum dolor sit amet, co"+ 
                                "nsectetur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque"+ 
                                " aliquam tristique mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sap"+ 
                                "ien lorem, eu auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id dia"+ 
                                "m arcu, tristique \nauctor sem.</p><p><img id=\'widget_embedcontent_${refid}34\' "+ 
                                "class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' sr"+ 
                                "c=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embe"+ 
                                "dcontent/images/content.png\' data-mce-style=\'display: block; padding: 10px; ma"+ 
                                "rgin: 4px;\' border=\'1\'><br></p><h1 style=\'font-family: Arial,Helvetica,sans-"+ 
                                "serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bott"+ 
                                "om: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color:"+ 
                                " rgb(29, 95, 144);\'>&lt;Conference Presentation 2&gt;</span><br></h1>\n<p>Here "+ 
                                "you can add all the documents produced for a specific conference (presentation)."+ 
                                "<br>\nLorem\n ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo "+ 
                                "\ndignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. \nMauri"+ 
                                "s vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNulla vehicula"+ 
                                " sodales sollicitudin. Praesent id diam arcu, tristique \nauctor sem.</p>"
                            },
                            "${refid}34": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                     "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319209841669,
                                        "_id": "13lDUPv2EeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319209841669,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilCAsGWaa",
                                        "_path": "ioY3APwCAT/id5074023/embedcontent/items",
                                        "__array__1__": "/p/ilCASwF30b"
                                    }
                                }
                            },
                            "${refid}30": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
                                "t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
                                "; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Workshop "+ 
                                "1&gt;</span><br></h1><p>Here you can add all the documents produced for a specif"+ 
                                "ic workshop.<br>Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Aenea"+ 
                                "n commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molesti"+ 
                                "e. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNull"+ 
                                "a vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauctor sem.<"+ 
                                "/p><p><img id=\'widget_embedcontent_${refid}36\' class=\'widget_inline\' style=\'"+ 
                                "display: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/ima"+ 
                                "ges/content.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' da"+ 
                                "ta-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br></"+ 
                                "p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-wei"+ 
                                "ght: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 20"+ 
                                "4); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Worksho"+ 
                                "p 2&gt;</span><br></h1>\n<p>Here you can add all the documents produced for a sp"+ 
                                "ecific workshop.<br>\nLorem\n ipsum dolor sit amet, consectetur adipiscing elit."+ 
                                " Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at m"+ 
                                "olestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. "+ 
                                "\nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauctor"+ 
                                " sem. </p>"
                            },
                            "${refid}36": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319209841669,
                                        "_id": "13lDUPv2EeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319209841669,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilCAsGWaa",
                                        "_path": "ioY3APwCAT/id5074023/embedcontent/items",
                                        "__array__1__": "/p/ilCASwF30b"
                                    }
                                }
                            },
                            "${refid}31": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
                                "t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
                                "; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Presentat"+ 
                                "ion 1&gt;</span><br></h1><p>Here you can add all the documents produced for a sp"+ 
                                "ecific presentation.<br>Lorem\n ipsum dolor sit amet, consectetur adipiscing eli"+ 
                                "t. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at"+ 
                                " molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem"+ 
                                ". \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauct"+ 
                                "or sem.</p><p><img id=\'widget_embedcontent_${refid}37\' class=\'widget_inline\' "+ 
                                "style=\'display: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcon"+ 
                                "tent/images/content.png\' data-mce-src=\'devwidgets/embedcontent/images/content."+ 
                                "png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'"+ 
                                "><br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; "+ 
                                "font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204,"+ 
                                " 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt"+ 
                                ";Presentation 2&gt;</span><br></h1>\n<p>Here you can add all the documents produ"+ 
                                "ced for a specific presentation.<br>\nLorem\n ipsum dolor sit amet, consectetur "+ 
                                "adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam t"+ 
                                "ristique mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem,"+ 
                                " eu auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tr"+ 
                                "istique \nauctor sem. </p>"
                            },
                            "${refid}37": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319210088270,
                                        "_id": "anWW4Pv3EeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319210088270,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilIiazOaaa",
                                        "_path": "ioY3APwCAT/id9572096/embedcontent/items",
                                        "__array__1__": "/p/ilIiNLGEaa"
                                    }
                                }
                            }
                        },
                        "${pid}7": {
                            structure0: {
                                "project-meetings":{
                                    "_ref":"${refid}38",
                                    "_order":5,
                                    "_title":"Project-Meetings",
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}38",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Project-Meetings"
                                    }
                                }
                            },
                            "${refid}38": {
                                page: "<p></p><h1 style=\"font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\"><span style=\"color: rgb(29, 95, 144);\">Management Meetings</span><br></h1><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><br></span><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong>Meeting 1: 'Date'</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit<strong>.<br></strong></span></p><p style=\"padding-left: 30px;\"><img id=\"widget_embedcontent_${refid}39\" class=\"widget_inline\" style=\"display: block; padding: 10px; margin: 4px;\" src=\"/devwidgets/embedcontent/images/content.png\" data-mce-src=\"devwidgets/embedcontent/images/content.png\" data-mce-style=\"display: block; padding: 10px; margin: 4px;\" border=\"1\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><br></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong></strong></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong>Meeting 2: 'Date'</strong><br></span><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><br><br></span></p><h1 style=\"font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\"><span style=\"color: rgb(29, 95, 144);\">Steering Committee Meetings</span><br></h1>\n<p><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br></span><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong>Meeting 1: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p><p style=\"padding-left: 30px;\"><img id=\"widget_embedcontent_${refid}40\" class=\"widget_inline\" style=\"display: block; padding: 10px; margin: 4px;\" src=\"/devwidgets/embedcontent/images/content.png\" data-mce-src=\"devwidgets/embedcontent/images/content.png\" data-mce-style=\"display: block; padding: 10px; margin: 4px;\" border=\"1\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"></span></p><p style=\"padding-left: 30px;\" data-mce-style=\"padding-left: 30px;\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><br></span><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"></span></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong>Meeting 2: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><br><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><br><br></span></p><h1 style=\"font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\"><span style=\"color: rgb(29, 95, 144);\">Progress Meetings</span><br></h1>\n<p><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br></span><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong>Meeting 1: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p><p style=\"padding-left: 30px;\"><img id=\"widget_embedcontent_${refid}41\" class=\"widget_inline\" style=\"display: block; padding: 10px; margin: 4px;\" src=\"/devwidgets/embedcontent/images/content.png\" data-mce-src=\"devwidgets/embedcontent/images/content.png\" data-mce-style=\"display: block; padding: 10px; margin: 4px;\" border=\"1\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"></span></p><p><br></p><p style=\"\"><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"><strong>Meeting 2: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></p><p style=\"\" data-mce-style=\"\"><br><span style=\"color: rgb(0, 0, 0);\" data-mce-style=\"color: #000000;\"></span></p><p><br></p>"
                            },
                            "${refid}39": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items":{
                                        "_created": 1319207049137,
                                        "_id": "Vv6yEPvwEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319207049137,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilQqOZmuk",
                                        "_path": "iooYRKeqi/id2525733/embedcontent/items",
                                        "__array__1__": "/p/ilQqc7cwaa"
                                    }
                                }
                            },
                            "${refid}40": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items":{
                                        "_created": 1319207103323,
                                        "_id": "d0rSsPvwEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319207103323,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilQq33numg",
                                        "_path": "iooYRKeqi/id7325092/embedcontent/items",
                                        "__array__1__": "/p/ilQqSCDqaa"
                                    }
                                }
                            },
                             "${refid}41": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items":{
                                        "_created": 1319207162992,
                                        "_id": "mtuXAPvwEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319207162992,
                                        "__array__2__": "/p/ilQqAQwcym",
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilQqoe5aa",
                                        "_path": "iooYRKeqi/id867445/embedcontent/items",
                                        "__array__1__": "/p/ilQqWE07qi"
                                    }
                                }
                            }
                        },
                        "${pid}8": {
                            structure0: {
                                "funding":{
                                    "_ref":"${refid}43",
                                    "_order":5,
                                    "_title":"Funding",
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}43",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Funding"
                                    }
                                }
                            },
                            "${refid}43": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
                                "t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
                                "; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Funding Propo"+ 
                                "sals</span><br></h1>\n<p><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'c"+ 
                                "olor: #000000;\'>Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Aene"+ 
                                "an commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molest"+ 
                                "ie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nLor"+ 
                                "em ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo \ndignissim"+ 
                                " quam ac fermentum. Quisque aliquam tristique mi at molestie. \nMauris vitae sap"+ 
                                "ien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br></span></p><p><span styl"+ 
                                "e=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'><img id=\'widget_e"+ 
                                "mbedcontent_${refid}44\' class=\'widget_inline\' style=\'display: block; padding:"+ 
                                " 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-m"+ 
                                "ce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'display: "+ 
                                "block; padding: 10px; margin: 4px;\' border=\'1\'><br></span></p><h1 style=\'fon"+ 
                                "t-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color:"+ 
                                " rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px "+ 
                                "0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Useful Links</span><br></h1>"+ 
                                "\n<p><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'>Lor"+ 
                                "em\n ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo \ndigniss"+ 
                                "im quam ac fermentum. Quisque aliquam tristique mi at molestie. \nMauris vitae s"+ 
                                "apien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nLorem ipsum dolor sit a"+ 
                                "met, consectetur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. "+ 
                                "Quisque aliquam tristique mi at molestie. \nMauris vitae sapien mauris. Ut pulvi"+ 
                                "nar sapien lorem, eu auctor sem.<br></span></p><p><img id=\'widget_embedcontent_"+ 
                                "${refid}45\' class=\'widget_inline\' style=\'display: block; padding: 10px; margi"+ 
                                "n: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'dev"+ 
                                "widgets/embedcontent/images/content.png\' data-mce-style=\'display: block; paddi"+ 
                                "ng: 10px; margin: 4px;\' border=\'1\'><span style=\'color: rgb(0, 0, 0);\' data-"+ 
                                "mce-style=\'color: #000000;\'><br><br><br></span></p><p><br></p>"
                            },
                            "${refid}44": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items":{
                                        "_created": 1319212049090,
                                        "_id": "-zL6IPv7EeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319212049090,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/io3W3pMaa",
                                        "_path": "iooY4KOcH/id5146344/embedcontent/items",
                                        "__array__1__": "/p/ilWgaxqEXb"
                                    }
                                }
                            },
                            "${refid}45": {
                                embedcontent:{
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items":{
                                        "_created": 1319207594111,
                                        "_id": "m9Mg8PvxEeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319207594111,
                                        "_createdBy": "exporttemplate",
                                        "__array__0__": "/p/ilWgKGJaa",
                                        "_path": "iooY4KOcH/id227542/embedcontent/items"
                                    }
                                }
                            }
                        }
                    },
                    "structure": {
                        "library": {
                            "_title": "Library",
                            "_order": 8,
                            "_nonEditable": true,
                            "_view": [
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead",
                                "-researcher"
                            ],
                            "_docref": "${pid}0"
                        },
                        "participants": {
                            "_title": "Participants",
                            "_order": 9,
                            "_nonEditable": true,
                            "_view": [
                                "everyone",
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}1"
                        },
                        "about": {
                            "_title": "About",
                            "_order": 0,
                            "_nonEditable": false,
                            "_view": [
                                "anonymous",
                                "everyone",
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}2"
                        },
                        "schedule-announcements": {
                            "_title": "Schedule & Announcements",
                            "_order": 1,
                            "_nonEditable": false,
                            "_view": [
                                "everyone",
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}3"
                        },
                        "our-my-research": {
                            "_title": "Our/My Research",
                            "_order": 2,
                            "_nonEditable": false,
                            "_view": [
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead",
                                "-researcher"
                            ],
                            "_docref": "${pid}4"
                        },
                        "literature-collaborations-input": {
                            "_title": "Literature & Collaborations input",
                            "_order": 3,
                            "_nonEditable": false,
                            "_view": [
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead",
                                "-researcher"
                            ],
                            "_docref": "${pid}5"
                        },
                        "project-meetings": {
                            "_title": "Project-Meetings",
                            "_order": 5,
                            "_docref": "${pid}7",
                            "_nonEditable": false,
                             "_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead", "-researcher"]
                        },
                        "funding": {
                            "_title": "Funding",
                            "_order": 6,
                            "_docref": "${pid}8",
                            "_nonEditable": false,
                            "_view": ["-lead", "-researcher", "-mentor"],
                            "_edit": ["-lead"]
                        },
                        "Events": {
                            "_title": "Events",
                            "_order": 5,
                            "_view": [
                                "everyone",
                                "anonymous",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_nonEditable": false,
                            "_docref": "${pid}6"
                        }
                    },
                    "joinRole": "observer",
                    "creatorRole": "lead"
                },
                {
                    "id": "research-project",
                    "title": "Research project",
                    "img": "/dev/images/worldtemplates/researchproject.png",
                    "fullImg": "/dev/images/worldtemplates/researchproject-full.png",
                    "perfectFor": "Smaller group collaborations or as a basic template to support PhD or Master Research projects.",
                    "roles": [
                        {
                            "id": "lead",
                            "roleTitle": "Lead",
                            "title": "Lead",
                            "allowManage": true
                        },
                        {
                            "id": "researcher",
                            "roleTitle": "Researchers",
                            "title": "Researcher",
                            "allowManage": false
                        },
                        {
                            "id": "mentor",
                            "roleTitle": "Mentors",
                            "title": "Mentor",
                            "allowManage": false
                        },
                        {
                            "id": "observer",
                            "roleTitle": "Observer",
                            "title": "Observer",
                            "allowManage": false
                        }
                    ],
                    "docs": {
                        "${pid}0": {
                            "structure0": {
                                "participants": {
                                    "_ref": "${refid}0",
                                    "_order": 0,
                                    "_nonEditable": true,
                                    "_title": "Participants",
                                    "main": {
                                        "_ref": "${refid}0",
                                        "_order": 0,
                                        "_nonEditable": true,
                                        "_title": "Participants"
                                    }
                                }
                            },
                            "${refid}0": {
                                "page": "<img id='widget_participants_${refid}1' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/participants/images/participants.png' data-mce-src='/devwidgets/participants/images/participants.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><p></p>"
                            },
                            "${refid}1": {
                                "participants": {
                                    "groupid": "${groupid}"
                                }
                            }
                        },
                        "${pid}1": {
                            "structure0": {
                                "about": {
                                    "_ref": "${refid}2",
                                    "_order": 0,
                                    "_title": "About",
                                    "main": {
                                        "_ref": "${refid}2",
                                        "_order": 0,
                                        "_title": "About"
                                    }
                                }
                            },
                            "${refid}2": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>About the project</span><br></h1><p><img src='http://www.eng.cam.ac.uk/admissions/images/yr2a.jpg' alt='2nd year lab' class='pic_right block_image_right' style='border: 1px solid rgb(204, 102, 51); margin: 0px 0px 5px 8px; float: right;' align='right' height='119' width='183'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br><br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Contact</span><br></h1><p style=''>Project Name<br>Address<span style='color: rgb(128, 128, 128);'><em></em></span><br></p><p>Mobile: 0123 456 789<br><span style='color: rgb(128, 128, 128);'><em></em></span>Fax: 0123 456 789<br>Email: projectsname @ mail.com<br><span style='color: rgb(128, 128, 128);'><em></em></span><br><span style='color: rgb(128, 128, 128);'><em></em></span>Or follow me on Twitter: Name project<br></p><p><br><br></p><p><br></p><p><br></p>"
                            }
                        },
                        "${pid}2": {
                            "structure0": {
                                "library": {
                                    "_ref": "${refid}3",
                                    "_order": 0,
                                    "_title": "Library",
                                    "main": {
                                        "_ref": "${refid}3",
                                        "_order": 0,
                                        "_title": "Library"
                                    }
                                }
                            },
                            "${refid}3": {
                                "page": "<img id='widget_mylibrary_${refid}4' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/mylibrary/images/mylibrary.png' data-mce-src='/devwidgets/mylibrary/images/mylibrary.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><p></p>"
                            },
                            "${refid}4": {
                                "mylibrary": {
                                    "groupid": "${groupid}"
                                }
                            }
                        },
                        "${pid}3": {
                            "structure0": {
                                "content": {
                                    "_ref": "${refid}5",
                                    "_order": 2,
                                    "_title": "Content",
                                    "main": {
                                        "_ref": "${refid}5",
                                        "_order": 2,
                                        "_title": "Content"
                                    }
                                }
                            },
                            "${refid}5": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Content</span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum. <br><br><img id='widget_embedcontent_${refid}6' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><br></p>"
                            },
                            "${refid}6": {
                                "embedcontent": {
                                    "embedmethod": "thumbnail",
                                    "sakai:indexed-fields": "title,description",
                                    "download": false,
                                    "sling:resourceType": "sakai/widget-data",
                                    "title": "",
                                    "details": false,
                                    "description": "",
                                    "name": true,
                                    "layout": "horizontal",
                                    "items": {
                                        "_created": 1319209018683,
                                        "_id": "7O-QsPv0EeCV4eV1fwABAQ+",
                                        "_lastModifiedBy": "exporttemplate",
                                        "_lastModified": 1319209018683,
                                        "__array__2__": "/p/ilwQoabqi",
                                        "__array__3__": "/p/ilCsUXOaa",
                                        "_createdBy": "exporttemplate",
                                        "__array__4__": "/p/ilwscm4aa",
                                        "__array__0__": "/p/ilwQCoIqi",
                                        "_path": "ioq5YmDaa/id3019022/embedcontent/items",
                                        "__array__1__": "/p/ilWoDpYQ2"
                                    }
                                }
                            }
                        },
                        "${pid}4": {
                            "structure0": {
                                "planning": {
                                    "_ref": "${refid}7",
                                    "_order": 1,
                                    "_title": "Planning",
                                    "main": {
                                        "_ref": "${refid}7",
                                        "_order": 1,
                                        "_title": "Planning"
                                    }
                                }
                            },
                            "${refid}7": {
                                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>1. Planning</span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br></p><ol><li>Planning</li><li>Topic 1</li><li>Topic 2<br>...<br></li><li>Conclusions</li><li>Reflection</li></ol><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>2. Topic 1</span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br><br></p><h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>3. Topic 2</span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.</p>"
                            }
                        }
                    },
                    "structure": {
                        "participants": {
                            "_title": "Participants",
                            "_order": 4,
                            "_nonEditable": true,
                            "_view": [
                                "everyone",
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}0"
                        },
                        "about": {
                            "_title": "About",
                            "_order": 0,
                            "_nonEditable": false,
                            "_view": [
                                "everyone",
                                "anonymous",
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}1"
                        },
                        "library": {
                            "_title": "Library",
                            "_order": 3,
                            "_nonEditable": false,
                            "_view": [
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}2"
                        },
                        "content": {
                            "_title": "Content",
                            "_order": 2,
                            "_nonEditable": false,
                            "_view": [
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}3"
                        },
                        "planning": {
                            "_title": "Planning",
                            "_order": 1,
                            "_nonEditable": true,
                            "_view": [
                                "-lead",
                                "-researcher",
                                "-mentor",
                                "-observer"
                            ],
                            "_edit": [
                                "-lead"
                            ],
                            "_docref": "${pid}4"
                        }
                    },
                    "joinRole": "observer",
                    "creatorRole": "lead"
                }
            ]
		},
		{
            id: "personal-collaborations",
            title: "PERSONAL_COLLABORATIONS",
            titleSing: "PERSONAL_COLLABORATION",
            templates: [
                {
	                "id": "personal-website",
	                "title": "Personal website",
                  "img": "/dev/images/worldtemplates/personalwebsite-full.png",
                  "fullImg": "/dev/images/worldtemplates/personalwebsite.png",
	                "perfectFor": "setting up your own personal website. For example: to showcase your research.",
	                "roles": [
		                {
			                "id": "websitemaint",
			                "roleTitle": "Website maintainers",
			                "title": "Website maintainer",
			                "allowManage": true
		                },
		                {
			                "id": "partner",
			                "roleTitle": "Partners",
			                "title": "Partner",
			                "allowManage": false
		                },
		                {
			                "id": "visitor",
			                "roleTitle": "Visitors",
			                "title": "Visitor",
			                "allowManage": false
		                }
	                ],
	                "docs": {
		                "${pid}0": {
			                "structure0": {
				                "my-personal-website": {
					                "_ref": "${refid}0",
					                "_order": 0,
					                "_nonEditable": true,
					                "_title": "My personal website",
					                "main": {
						                "_ref": "${refid}0",
						                "_order": 0,
						                "_nonEditable": true,
						                "_title": "My personal website"
					                }
				                }
			                },
			                "${refid}0": {
				                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>My Personal website </span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.</p>"
			                }
		                }
	                },
	                "structure": {
		                "my-personal-website": {
			                "_title": "My personal website",
			                "_order": 4,
			                "_nonEditable": false,
			                "_view": [
				                "everyone",
				                "anonymous",
				                "-visitor",
				                "-partner",
				                "-websitemaint"
			                ],
			                "_edit": [
				                "-websitemaint"
			                ],
			                "_docref": "${pid}0"
		                }
	                },
	                "joinRole": "visitor",
	                "creatorRole": "websitemaint"
                },
                {
	                "id": "student-project",
	                "title": "Student project",
	                "img": "/dev/images/worldtemplates/studentproject.png",
	                "fullImg": "/dev/images/worldtemplates/studentproject-full.png",
	                "perfectFor": "setting up and organising student projects, using an About section, a Planning section and an Interesting materials section.",
	                "roles": [
		                {
			                "id": "ts",
			                "roleTitle": "Teaching staff",
			                "title": "Teaching staff",
			                "allowManage": true
		                },
		                {
			                "id": "observer",
			                "roleTitle": "Observers",
			                "title": "Observer",
			                "allowManage": false
		                },
		                {
			                "id": "student",
			                "roleTitle": "Students",
			                "title": "Student",
			                "allowManage": false
		                }
	                ],
	                "docs": {
		                "${pid}0": {
			                "structure0": {
				                "my-personal-website": {
					                "_ref": "${refid}0",
					                "_order": 0,
					                "_nonEditable": true,
					                "_title": "My personal website",
					                "main": {
						                "_ref": "${refid}0",
						                "_order": 0,
						                "_nonEditable": true,
						                "_title": "My personal website"
					                }
				                }
			                },
			                "${refid}0": {
				                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>About</span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum.<br></p>"
			                }
		                },
		                "${pid}1": {
			                "structure0": {
				                "Planning": {
					                "_title": "Planning",
					                "_order": 0,
					                "_ref": "${refid}1",
					                "_nonEditable": false,
					                "main": {
						                "_title": "Planning",
						                "_order": 0,
						                "_ref": "${refid}1",
						                "_nonEditable": false
					                }
				                }
			                },
			                "${refid}1": {
				                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Planning</span><br></h1><p><br><strong>1. Title 1:</strong> <br>When: Tuesday X Month, 20XX<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><strong>2. Title 2:</strong> <br>When: Wednesday X Month, 20XX<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><br><img id='widget_comments_${refid}2' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
			                },
			                "${refid}2": {
				                "comments": {
					                "sakai:notificationaddress": "asd38",
					                "sakai:marker": "id4268848",
					                "sakai:allowanonymous": false,
					                "sakai:type": "comment",
					                "direction": "comments_FirstUp",
					                "perPage": 5,
					                "sling:resourceType": "sakai/settings",
					                "comments": [],
					                "message": {
						                "sling:resourceType": "sakai/messagestore",
						                "_created": 1322679809821,
						                "_id": "_aoc0BuFEeG6DXPUfwABAQ+",
						                "_lastModifiedBy": "asd38",
						                "_lastModified": 1322679809821,
						                "_createdBy": "asd38",
						                "_path": "jlAAGQWoaa/id4268848/comments/message"
					                }
				                }
			                }
		                },
		                "${pid}2": {
			                "structure0": {
				                "Materials": {
					                "_title": "Materials",
					                "_order": 0,
					                "_ref": "${refid}3",
					                "_nonEditable": false,
					                "main": {
						                "_title": "Materials",
						                "_order": 0,
						                "_ref": "${refid}3",
						                "_nonEditable": false
					                }
				                }
			                },
			                "${refid}3": {
				                "page": "<h1 style='font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;'><span style='color: rgb(29, 95, 144);'>Materials</span><br></h1><p><br><strong>1. Books:</strong> <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><strong>2. Papers</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><strong>3. Handouts</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><strong>4. Project report</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><br><img id='widget_comments_${refid}4' class='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='devwidgets/comments/images/comments.png' data-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br><br></p>"
			                },
			                "${refid}4": {
				                "comments": {
					                "sakai:notificationaddress": "asd38",
					                "sakai:marker": "id1866614",
					                "sakai:allowanonymous": false,
					                "sakai:type": "comment",
					                "direction": "comments_FirstUp",
					                "perPage": 5,
					                "sling:resourceType": "sakai/settings",
					                "comments": [],
					                "message": {
						                "sling:resourceType": "sakai/messagestore",
						                "_created": 1322679786599,
						                "_id": "79K3cBuFEeG6DXPUfwABAQ+",
						                "_lastModifiedBy": "asd38",
						                "_lastModified": 1322679786599,
						                "_createdBy": "asd38",
						                "_path": "jlMAjMqkym/id1866614/comments/message"
					                }
				                }
			                }
		                }
	                },
	                "structure": {
		                "my-personal-website": {
			                "_title": "About",
			                "_order": 0,
			                "_nonEditable": false,
			                "_view": [
				                "everyone",
				                "anonymous",
				                "-student",
				                "-observer",
				                "-ts"
			                ],
			                "_edit": [
				                "-ts",
				                "-oberserver",
				                "-student"
			                ],
			                "_canView": true,
			                "_canSubedit": true,
			                "_canEdit": true,
			                "_docref": "${pid}0"
		                },
		                "Planning": {
			                "_title": "Planning",
			                "_order": 1,
			                "_view": [
				                "everyone",
				                "-observer",
				                "-student"
			                ],
			                "_edit": [
				                "-ts"
			                ],
			                "_nonEditable": false,
			                "_canView": true,
			                "_canSubedit": true,
			                "_canEdit": true,
			                "_docref": "${pid}1"
		                },
		                "Materials": {
			                "_title": "Interesting materials",
			                "_order": 2,
			                "_view": [
				                "everyone",
				                "-observer",
				                "-student"
			                ],
			                "_edit": [
				                "-ts"
			                ],
			                "_nonEditable": false,
			                "_canView": true,
			                "_canSubedit": true,
			                "_canEdit": true,
			                "_docref": "${pid}2"
		                }
	                },
	                "joinRole": "observer",
	                "creatorRole": "ts"
                }
            ]
		},
    {
            id: "people-lists",
            title: "PEOPLE_LISTS",
            titleSing: "PEOPLE_LIST",
            templates: [
                    {
                        id: "peopleList",
                        title: "People list",
                        img: "",
                        fullImg: "",
                        perfectFor: "",
                        roles: [
                            {
                                id: "member",
                                roleTitle: "member",
                                title: "member",
                                allowManage: false
                            },
                            {
                                id: "manager",
                                roleTitle: "manager",
                                title: "manager",
                                allowManage: true
                            }
                        ],
                        docs: {
                            "${pid}0": {
                                structure0: {
                                    "participants":{
                                        "_ref":"${refid}0",
                                        "_order":0,
                                        "_title":"Participants",
                                        "_nonEditable": true,
                                        "main":{
                                            "_ref":"${refid}0",
                                            "_order":0,
                                            "_nonEditable": true,
                                            "_title":"Participants"
                                        }
                                    }
                                },
                                "${refid}0": {
                                    page: "<img id='widget_participants_${refid}1' class='widget_inline' style='display: "+
                                    "block; padding: 10px; margin: 4px;' src='/devwidgets/participants/images/partic"+
                                    "ipants.png' data-mce-src='/devwidgets/participants/images/participants.png' dat"+
                                    "a-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                                },
                                "${refid}1": {
                                    participants: {
                                        "groupid": "${groupid}"
                                    }
                                }
                            }
                        },
                        structure: {
                            "participants": {
                                "_title": "Participants",
                                "_order": 0,
                                "_docref": "${pid}0",
                                "_nonEditable": true,
                                "_view": ["everyone", "anonymous", "-member"],
                                "_edit": ["-manager"]
                            }
                        },
                        joinRole: "member",
                        creatorRole: "manager"
                    }
            ]
		}
    ]

    // Kaltura config
    config.kaltura = {
        serverURL:  "https://kaltura.ucamoae.caret.cam.ac.uk", // Kaltura Server URL
        partnerId: 1188888811, // INSERT YOUR PARTNER ID HERE
        playerId: 1199999911 // INSERT YOUR PLAYER ID (UICONF_ID - from Kaltura Studio tab)
    };

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
    config.Authentication.internal = false;
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
