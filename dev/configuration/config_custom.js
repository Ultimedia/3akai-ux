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
            title: "Energy, transport and urban infrastructure"
        },
        uncertaintyriskandresilience: {
            title: "Uncertainty, risk and resilience"
        },
        engineeringforlifesciencesandhealthcare: {
            title: "Engineering for life sciences and healthcare"
        },
        inspiringresearchthroughindustrialcollaboration: {
            title: "Inspiring research through industrial collaboration"
        },
        divider3: {
            divider: true,
            title: "CUED Teaching"
        },
        engineeringtripospartia: {
            title: "Engineering Tripos Part IA"
        },
        engineeringtripospartib: {
            title: "Engineering Tripos Part IB"
        },
        engineeringtripospartiia: {
            title: "Engineering Tripos Part IIA"
        },
        engineeringtripospartiib: {
            title: "Engineering Tripos Part IIB"
        },
        manufacturingengineeringtripospartiia: {
            title: "Manufacturing Engineering Tripos Part IIA"
        },
        manufacturingengineeringtripospartiib: {
            title: "Manufacturing Engineering Tripos Part IIB"
        },
        mphilinnuclearenergy: {
            title: "MPhil in Nuclear Energy"
        },
        mphilinindustrialsystemsmanufactureandmanagement: {
            title: "MPhil in Industrial Systems, Manufacture and Management"
        },
        mphilinenergytechnologies: {
            title: "MPhil in Energy Technologies"
        },
        mphilininterdisciplinarydesignforthebuiltenvironment: {
            title: "MPhil in Interdisciplinary Design for the Built Environment"
        },
        mphilinengineeringforsustainabledevelopment: {
            title: "MPhil in Engineering for Sustainable Development"
        },
        mphilinconstructionengineering: {
            title: "MPhil in Construction Engineering"
        },
        mresinphotonicssystemsdevelopment: {
            title: "MRes in Photonics Systems Development"
        }
    };
    
    config.worldTemplates = [
		{
            id: "courses",
            title : "COURSES",
            titleSing: "COURSE",
            templates: [
				{
                    id: "general-course",
                    title: "General Course",
                    img: "/dev/images/worldtemplates/coursetemplate2.png",
                    fullImg: "/dev/images/worldtemplates/coursetemplate2-full.png",
                    perfectFor: "basic course organisation, using a Syllabus, listing Lecture"+
                    " Materials, Timetables and Participants. Also includes 'Comment' boxes.",
                   	roles: [
                        {
                            id: "ts",
                            roleTitle: "Teaching staff",
                            title: "Teaching staff",
                            allowManage: true
                        },
                        {
                            id: "observer",
                            roleTitle: "Observers",
                            title: "Observer",
                            allowManage: false
                        },
                        {
                            id: "student",
                            roleTitle: "Students",
                            title: "Student",
                            allowManage: false
                        }
                    ],
                    docs: {
                        "${pid}0": {
                            structure0: {
                                "participants":{
                                    "_ref":"${refid}0",
                                    "_order":0,
                                    "_nonEditable": true,
                                    "_title": "Participants",
                                    "main":{
                                        "_ref":"${refid}0",
                                        "_order":0,
                                        "_nonEditable": true,
                                        "_title":"Participants"
                                    }
                                }
                            },
                            "${refid}0": {
                                page: "<img id='widget_participants_${refid}1' class='widget_inline' style='display: bl"+ 
								"ock; padding: 10px; margin: 4px;' src='/devwidgets/participants/images/participa"+ 
								"nts.png' data-mce-src='/devwidgets/participants/images/participants.png' data-mc"+ 
								"e-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}1": {
                                participants: {
                                    "groupid": "${groupid}"
                                }
                            }
                        },
                        "${pid}1": {
                            structure0: {
                                "syllabus":{
                                    "_ref":"${refid}2",
                                    "_order":1,
                                    "_nonEditable": false,
                                    "_title":"Syllabus",
                                    "main":{
                                        "_ref":"${refid}2",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Syllabus"
                                    }
                                }
                            },
                            "${refid}2": {
                                page: "<img id='widget_inlinecontent_${refid}3' class='widget_inline' style='display: b"+ 
								"lock; padding: 10px; margin: 4px;' src='/devwidgets/inlinecontent/images/inlinec"+ 
								"ontent.png' data-mce-src='/devwidgets/inlinecontent/images/inlinecontent.png' da"+ 
								"ta-mce-style='display: block; padding: 10px; margin: 4px;' border='1'></p>"
                            },
                            "${refid}3": {
								inlinecontent: {
									"option1": "y1",
									"option2": "/var/proxy/ucam/eng_teaching?y=y1&c=P1-MV",
									"saneurl": "/var/proxy/ucam/eng_teaching?y=y1&c=P1-MV",
									"defined": "false"
								}
							}
                        },
                        "${pid}2": {
                            structure0: {
                                "content":{
                                    "_ref":"${refid}3",
                                    "_order":2,
                                    "_nonEditable": false,
                                    "_title":"Lecture Materials",
                                    "main":{
                                        "_ref":"${refid}3",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Lecture Materials"
                                    }
                                }
                            },
                            "${refid}3": {
                                page: "<h1 style=\'color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; f"+ 
								"ont-weight: normal;\' data-mce-style=\'color: #666666; font-size: 22px; margin: "+ 
								"20px 0pt 15px; font-weight: normal;\'>Lecture Notes<br></h1><hr style=\'color: r"+ 
								"gb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt no"+ 
								"ne;\' data-mce-style=\'color: #ff0000; background-color: #e8e8e8; height: 5px; b"+ 
								"order: 0pt none;\'><p><br></p><p style=\'color: rgb(99, 99, 99); font-size: 16px"+ 
								"; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px;"+ 
								" margin: 0pt;\'><span style=\'font-family: arial,helvetica,sans-serif; font-size"+ 
								": medium; color: rgb(128, 128, 128);\' data-mce-style=\'font-family: arial,helve"+ 
								"tica,sans-serif; font-size: medium; color: #808080;\'>These are all the Lecture "+ 
								"Notes for &lt;name of the course/module&gt;.</span> </p><p style=\'color: rgb(99"+ 
								", 99, 99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margi"+ 
								"n: 0pt;\'><br><img id=\'widget_embedcontent_${refid}5\' class=\'widget_inline\' "+ 
								"style=\'display: block; padding: 10px; margin: 4px;\' src=\'devwidgets/embedcont"+ 
								"ent/images/content.png\' data-mce-src=\'devwidgets/embedcontent/images/content.p"+ 
								"ng\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'"+ 
								"><br><br></p><h1 style=\'color: rgb(102, 102, 102); font-size: 22px; margin: 20p"+ 
								"x 0pt 15px; font-weight: normal;\' data-mce-style=\'color: #666666; font-size: 2"+ 
								"2px; margin: 20px 0pt 15px; font-weight: normal;\'>Lecture Videos<br></h1><hr st"+ 
								"yle=\'color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; "+ 
								"border: 0pt none;\' data-mce-style=\'color: #ff0000; background-color: #e8e8e8; "+ 
								"height: 5px; border: 0pt none;\'><p><br><span style=\'font-family: arial,helveti"+ 
								"ca,sans-serif; font-size: medium; color: rgb(128, 128, 128);\' data-mce-style=\'"+ 
								"font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;\'>Th"+ 
								"ese are all the Lecture Videos for &lt;name of the course/module&gt;.</span> <br"+ 
								"></p><p style=\'padding-left: 30px;\'><br><img id=\'widget_embedcontent_${refid}6'"+ 
								" class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\'"+ 
								"' src=\'devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/e"+ 
								"mbedcontent/images/content.png\' data-mce-style=\'display: block; padding: 10px;"+ 
								" margin: 4px;\' border=\'1\'><br><br></p><h1 style=\'color: rgb(102, 102, 102); "+ 
								"font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;\' data-mce-style=\'"+ 
								"color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;\'>L"+ 
								"ecture Handouts<br></h1><hr style=\'color: rgb(255, 0, 0); background-color: rgb"+ 
								"(232, 232, 232); height: 5px; border: 0pt none;\' data-mce-style=\'color: #ff000"+ 
								"0; background-color: #e8e8e8; height: 5px; border: 0pt none;\'><p><br><span styl"+ 
								"e=\'font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, "+ 
								"128, 128);\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size"+ 
								": medium; color: #808080;\'>These are all the Lecture Handouts for &lt;name of t"+ 
								"he course/module&gt;.<br><br></span></p><p style=\'padding-left: 30px;\'><img id"+ 
								"=\'widget_embedcontent_${refid}7\' class=\'widget_inline\' style=\'display: bloc"+ 
								"k; padding: 10px; margin: 4px;\' src=\'devwidgets/embedcontent/images/content.pn"+ 
								"g\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'"+ 
								"display: block; padding: 10px; margin: 4px;\' border=\'1\'><span style=\'font-f"+ 
								"amily: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);"+ 
								"\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: medium; "+ 
								"color: #808080;\'><br></span><br></p><h1 style=\'color: rgb(102, 102, 102); font"+ 
								"-size: 22px; margin: 20px 0pt 15px; font-weight: normal;\' data-mce-style=\'colo"+ 
								"r: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;\'>Examp"+ 
								"les Papers<br></h1><hr style=\'color: rgb(255, 0, 0); background-color: rgb(232,"+ 
								" 232, 232); height: 5px; border: 0pt none;\' data-mce-style=\'color: #ff0000; ba"+ 
								"ckground-color: #e8e8e8; height: 5px; border: 0pt none;\'><p><br><span style=\'f"+ 
								"ont-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, "+ 
								"128);\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: med"+ 
								"ium; color: #808080;\'>These are all the Examples Papers for &lt;name of the cou"+ 
								"rse/module&gt;.<br><br></span> </p><p style=\'padding-left: 30px;\'><img id=\'wi"+ 
								"dget_embedcontent_${refid}8\' class=\'widget_inline\' style=\'display: block; pa"+ 
								"dding: 10px; margin: 4px;\' src=\'https://ucamoae.caret.cam.ac.uk/devwidgets/emb"+ 
								"edcontent/images/content.png\' data-mce-src=\'devwidgets/embedcontent/images/con"+ 
								"tent.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' border"+ 
								"=\'1\'><br><br><br><br><br><br></p><h1 style=\'color: rgb(102, 102, 102); font-s"+ 
								"ize: 22px; margin: 20px 0pt 15px; font-weight: normal;\' data-mce-style=\'color:"+ 
								" #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;\'><span s"+ 
								"tyle=\'color: rgb(54, 109, 160);\'><strong><span data-mce-style=\'font-size: med"+ 
								"ium;\' style=\'font-size: medium;\'>Comments and questions</span></strong></span"+ 
								"><br></h1><hr style=\'color: rgb(255, 0, 0); background-color: rgb(232, 232, 232"+ 
								"); height: 5px; border: 0pt none;\' data-mce-style=\'color: #ff0000; background-"+ 
								"color: #e8e8e8; height: 5px; border: 0pt none;\'><p style=\'\'><span style=\'fon"+ 
								"t-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 12"+ 
								"8);\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: mediu"+ 
								"m; color: #808080;\'><span style=\'font-size: small;\'>If you have any comments "+ 
								"or questions about the Lecture Materials, you can ask them below:<br><br></span>"+ 
								"</span><img id=\'widget_comments_${refid}13\' class=\'widget_inline\' style=\'disp"+ 
								"lay: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/comments/images/comm"+ 
								"ents.png\' data-mce-src=\'devwidgets/comments/images/comments.png\' data-mce-sty"+ 
								"le=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p>"
							},
							"${refid}5": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}6": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}7": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}8": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}13": {
								comments: {
								   "sakai:allowanonymous": false,
								   "sakai:type": "comment",
								   "direction": "comments_FirstUp",
								   "perPage": 5
								}
							}
                        },
                         "${pid}3": {
                            structure0: {
                                "timetables":{
                                    "_ref":"${refid}4",
                                    "_order":3,
                                    "_nonEditable": false,
                                    "_title":"Timetables",
                                    "main":{
                                        "_ref":"${refid}4",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Timetables"
                                    }
                                }
                            },
                            "${refid}4": {
                                page: "<p></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 1"+ 
								"5px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; marg"+ 
								"in: 20px 0pt 15px; font-weight: normal;'>Key Dates for &lt;Part X&gt;<br></h1><h"+ 
								"r style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5p"+ 
								"x; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8;"+ 
								" height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); fo"+ 
								"nt-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-"+ 
								"bottom: 10px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; lin"+ 
								"e-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; marg"+ 
								"in: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: mediu"+ 
								"m; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans"+ 
								"-serif; font-size: medium; color: #808080;'>Below are the Key Dates for the &lt;"+ 
								"Name of Course/Module&gt; listed<br><br></span></p><p style='color: rgb(99, 99, "+ 
								"99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt"+ 
								";' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: "+ 
								"0pt 0pt 10px 30px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-"+ 
								"serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-famil"+ 
								"y: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><img id='widg"+ 
								"et_embedcontent_${refid}9' class='widget_inline' style='display: block; padding:"+ 
								" 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-"+ 
								"src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block;"+ 
								" padding: 10px; margin: 4px;' border='1'><br></span></p><h1 style='color: rgb(10"+ 
								"2, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data"+ 
								"-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight:"+ 
								" normal;'>Lecture Timetables for &lt;Part X&gt;<br></h1><hr style='color: rgb(25"+ 
								"5, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' "+ 
								"data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: "+ 
								"0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-siz"+ 
								"e: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvet"+ 
								"ica,sans-serif; font-size: medium; color: #808080;'>Below you will find the lect"+ 
								"ure timetables for the 3 terms.</span><br><br></p><p style='padding-left: 30px;'"+ 
								" data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}10' cl"+ 
								"ass='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/de"+ 
								"vwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/"+ 
								"images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;'"+ 
								" border='1'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; m"+ 
								"argin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font"+ 
								"-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Example Papers Timetab"+ 
								"les for &lt;Part X&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-colo"+ 
								"r: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #f"+ 
								"f0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span s"+ 
								"tyle='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128"+ 
								", 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size"+ 
								": medium; color: #808080;'>Below you will find the timetables where the past Exa"+ 
								"mples Papers will be targeted.<br><br></span></p><p style='padding-left: 30px;' "+ 
								"data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,s"+ 
								"ans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-f"+ 
								"amily: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><img id='"+ 
								"widget_embedcontent_${refid}11' class='widget_inline' style='display: block; padd"+ 
								"ing: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-"+ 
								"mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: bl"+ 
								"ock; padding: 10px; margin: 4px;' border='1'><br></span><br></p><h1 style='color"+ 
								": rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: norma"+ 
								"l;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font"+ 
								"-weight: normal;'>Lab/Coursework Timetables for &lt;Part X&gt;<br></h1><hr style"+ 
								"='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; bord"+ 
								"er: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height"+ 
								": 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-"+ 
								"serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-famil"+ 
								"y: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>Below you wil"+ 
								"l find the timetables for the Lab sessions.<br><br></span></p><p style='padding-"+ 
								"left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: aria"+ 
								"l,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-"+ 
								"style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #80808"+ 
								"0;'><img id='widget_embedcontent_${refid}12' class='widget_inline' style='display"+ 
								": block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/conte"+ 
								"nt.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style"+ 
								"='display: block; padding: 10px; margin: 4px;' border='1'><br></span></p>"
							},
							"${refid}9": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}10": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}11": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}12": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							}
                        },
                        "${pid}4": {
                            structure0: {
                                "fast-feedback":{
                                    "_ref":"${refid}14",
                                    "_order":4,
                                    "_nonEditable": true,
                                    "_title":"Fast Feedback",
                                    "main":{
                                        "_ref":"${refid}14",
                                        "_order":0,
                                        "_nonEditable": true,
                                        "_title":"Fast Feedback"
                                    }
                                }
                            },
                            "${refid}14": {
                                page: "<img id='widget_fastfeedback_${refid}14' class='widget_inline' style='display: blo"+ 
								"ck; padding: 10px; margin: 4px;' src='/devwidgets/fastfeedback/images/icon.png' "+ 
								"data-mce-src='/devwidgets/fastfeedback/images/icon.png' data-mce-style='display:"+ 
								" block; padding: 10px; margin: 4px;' border='1'></p>"
                            },
							"${refid}15": {
                             	fastfeedback:{
                             		
                             	}
							}
                        }
                    },
                    structure: {
                        "participants": {
                            "_title": "Participants",
                            "_order": 3,
                            "_docref": "${pid}0",
                            "_nonEditable": true,
                            "_view": ["everyone", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "syllabus": {
                            "_title": "Syllabus",
                            "_order": 0,
                            "_docref": "${pid}1",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "content": {
                            "_title": "Lecture Materials",
                            "_order": 1,
                            "_docref": "${pid}2",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "timetables": {
                            "_title": "Timetables",
                            "_order": 2,
                            "_docref": "${pid}3",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-student", "-ta"],
                            "_edit": ["-ts"]
                        },
                         "fast-feedback": {
                            "_title": "Fast Feedback",
                            "_order": 4,
                            "_docref": "${pid}4",
                            "_nonEditable": true,
                            "_view": ["everyone", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        }
                    },
                    joinRole: "observer",
                    creatorRole: "ts"
                },
           		{
                    id: "more-detailed-course",
                    title: "More Detailed Course",
                    img: "/dev/images/worldtemplates/coursetemplate3.png",
                    fullImg: "/dev/images/worldtemplates/coursetemplate3-full.png",
                    perfectFor: "Advanced course organisation, using a Syllabus, listing Lecture "+
                    "Materials, Timetables and Participants. Also includes 'Comment' boxes and a "+
                    "Lecture Description.",
					roles: [
                        {
                            id: "ts",
                            roleTitle: "Teaching staff",
                            title: "Teaching staff",
                            allowManage: true
                        },
                        {
                            id: "observer",
                            roleTitle: "Observers",
                            title: "Observer",
                            allowManage: false
                        },
                        {
                            id: "student",
                            roleTitle: "Students",
                            title: "Student",
                            allowManage: false
                        }
                    ],
                    docs: {
                        "${pid}0": {
                            structure0: {
                                "participants":{
                                    "_ref":"${refid}0",
                                    "_order":0,
                                    "_nonEditable": true,
                                    "_title": "Participants",
                                    "main":{
                                        "_ref":"${refid}0",
                                        "_order":0,
                                        "_nonEditable": true,
                                        "_title":"Participants"
                                    }
                                }
                            },
                            "${refid}0": {
                                page: "<img id='widget_participants_${refid}1' class='widget_inline' style='display: bl"+ 
								"ock; padding: 10px; margin: 4px;' src='/devwidgets/participants/images/participa"+ 
								"nts.png' data-mce-src='/devwidgets/participants/images/participants.png' data-mc"+ 
								"e-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}1": {
                                participants: {
                                    "groupid": "${groupid}"
                                }
                            }
                        },
                        "${pid}1": {
                            structure0: {
                                "syllabus":{
                                    "_ref":"${refid}2",
                                    "_order":1,
                                    "_nonEditable": false,
                                    "_title":"Syllabus",
                                    "main":{
                                        "_ref":"${refid}2",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Syllabus"
                                    }
                                }
                            },
                            "${refid}2": {
                                page: "<img id='widget_inlinecontent_${refid}3' class='widget_inline' style='display: b"+ 
								"lock; padding: 10px; margin: 4px;' src='/devwidgets/inlinecontent/images/inlinec"+ 
								"ontent.png' data-mce-src='/devwidgets/inlinecontent/images/inlinecontent.png' da"+ 
								"ta-mce-style='display: block; padding: 10px; margin: 4px;' border='1'></p>"
                            },
                            "${refid}3": {
								inlinecontent: {
									"option1": "y1",
									"option2": "/var/proxy/ucam/eng_teaching?y=y1&c=P1-MV",
									"saneurl": "/var/proxy/ucam/eng_teaching?y=y1&c=P1-MV",
									"defined": "false"
								}
							}
                        },
                        "${pid}2": {
                            structure0: {
                                "content":{
                                    "_ref":"${refid}3",
                                    "_order":2,
                                    "_nonEditable": false,
                                    "_title":"Lecture Materials",
                                    "main":{
                                        "_ref":"${refid}3",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Lecture Materials"
                                    }
                                }
                            },
                            "${refid}3": {
                                page: "<h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; fo"+ 
								"nt-weight: normal;' data-mce-style='color: #666666; font-size: 22px; margin: 20p"+ 
								"x 0pt 15px; font-weight: normal;'>Lecture Notes<br></h1><hr style='color: rgb(25"+ 
								"5, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' "+ 
								"data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: "+ 
								"0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); font-size: 16px; line-he"+ 
								"ight: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; margin: "+ 
								"0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: medium; c"+ 
								"olor: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-ser"+ 
								"if; font-size: medium; color: #808080;'>These are all the Lecture Notes for &lt;"+ 
								"name of the course/module&gt;.<br><br></span> </p><p style='color: rgb(99, 99, 9"+ 
								"9); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt;"+ 
								"' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: 0"+ 
								"pt 0pt 10px 30px; margin: 0pt;'><img id='widget_embedcontent_${refid}9' class='w"+ 
								"idget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwidge"+ 
								"ts/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/images"+ 
								"/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' borde"+ 
								"r='1'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin:"+ 
								" 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font-size:"+ 
								" 22px; margin: 20px 0pt 15px; font-weight: normal;'>Lecture Videos<br></h1><hr s"+ 
								"tyle='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; "+ 
								"border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; he"+ 
								"ight: 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,s"+ 
								"ans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-f"+ 
								"amily: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>These are"+ 
								" all the Lecture Videos for &lt;name of the course/module&gt;.</span> <br><br></"+ 
								"p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'><img id='w"+ 
								"idget_embedcontent_${refid}10' class='widget_inline' style='display: block; paddi"+ 
								"ng: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-m"+ 
								"ce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: blo"+ 
								"ck; padding: 10px; margin: 4px;' border='1'><br><br><br></p><h1 style='color: rg"+ 
								"b(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' "+ 
								"data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-wei"+ 
								"ght: normal;'>Lecture Handouts<br></h1><hr style='color: rgb(255, 0, 0); backgro"+ 
								"und-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='c"+ 
								"olor: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br"+ 
								"><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color:"+ 
								" rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; f"+ 
								"ont-size: medium; color: #808080;'>These are all the Lecture Handouts for &lt;na"+ 
								"me of the course/module&gt;.<br><br></span></p><p style='padding-left: 30px;' da"+ 
								"ta-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,san"+ 
								"s-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-fam"+ 
								"ily: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><img id='wi"+ 
								"dget_embedcontent_${refid}11' class='widget_inline' style='display: block; paddin"+ 
								"g: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mc"+ 
								"e-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: bloc"+ 
								"k; padding: 10px; margin: 4px;' border='1'><br></span><br></p><h1 style='color: "+ 
								"rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;"+ 
								"' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-w"+ 
								"eight: normal;'>Examples Papers<br></h1><hr style='color: rgb(255, 0, 0); backgr"+ 
								"ound-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='"+ 
								"color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><b"+ 
								"r><span style='font-family: arial,helvetica,sans-serif; font-size: medium; color"+ 
								": rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; "+ 
								"font-size: medium; color: #808080;'>These are all the Examples Papers for &lt;na"+ 
								"me of the course/module&gt;.<br><br></span></p><p style='padding-left: 30px;' da"+ 
								"ta-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}12' class"+ 
								"='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/devwi"+ 
								"dgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/ima"+ 
								"ges/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;' bo"+ 
								"rder='1'><br><br></p><p style='padding-left: 30px;' data-mce-style='padding-left"+ 
								": 30px;'><br><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; "+ 
								"margin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; fon"+ 
								"t-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'><span style='color: r"+ 
								"gb(54, 109, 160);'><strong><span data-mce-style='font-size: medium;' style='font"+ 
								"-size: medium;'>Comments and questions</span></strong></span><br></h1><hr style="+ 
								"'color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; borde"+ 
								"r: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height:"+ 
								" 5px; border: 0pt none;'><p><span style='font-family: arial,helvetica,sans-serif"+ 
								"; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: ar"+ 
								"ial,helvetica,sans-serif; font-size: medium; color: #808080;'><span style='font-"+ 
								"size: small;' data-mce-style='font-size: small;'>If you have any comments or que"+ 
								"stions about the Lecture Materials, you can ask them below:<br><br><img id='widg"+ 
								"et_comments_${refid}13' class='widget_inline' style='display: block; padding: 10p"+ 
								"x; margin: 4px;' src='/devwidgets/comments/images/comments.png' data-mce-src='de"+ 
								"vwidgets/comments/images/comments.png' data-mce-style='display: block; padding: "+ 
								"10px; margin: 4px;' border='1'><br></span></span></p><p style='padding-left: 30p"+ 
								"x;' data-mce-style='padding-left: 30px;'><span style='font-family: arial,helveti"+ 
								"ca,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='fo"+ 
								"nt-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;'></spa"+ 
								"n></p><p style='padding-left: 30px;' data-mce-style='padding-left: 30px;'></p>"
							},
							"${refid}9": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}10": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}11": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}12": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}13": {
								comments: {
									"sakai:allowanonymous": false,
								   	"sakai:type": "comment",
								   	"direction": "comments_FirstUp",
								   	"perPage": 5
								}
							}
                        },
                        "${pid}3": {
                            structure0: {
                                "lecture1":{
                                    "_ref":"${refid}4",
                                    "_order":0,
                                    "_nonEditable": false,
                                    "_title":"Lecture 1",
                                    "main":{
                                        "_ref":"${refid}4",
                                        "_order":0,
                                        "_nonEditable": false,
                                   	 	"_title":"Lecture 1"
                                    }
                                },
                                 "lecture2":{
                                    "_ref":"${refid}5",
                                    "_title":"lecture 2",
                                    "_order":1,
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}5",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"lecture 2"
                                    }
                                },
                                 "lecture3":{
                                    "_ref":"${refid}6",
                                    "_title":"lecture 3",
                                    "_order":2,
                                    "_nonEditable": false,
                                    "main":{
                                        "_ref":"${refid}6",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"lecture 3"
                                    }
                                }
                            },
                            "${refid}4": {
								 page: "<p style=\'margin: 20px 0pt; font-size: 1.75em; color: rgb(51, 51, 51); line-hei"+ 
								"ght: 1.25em;\' data-mce-style=\'margin: 20px 0pt; font-size: 1.75em; color: #333"+ 
								"333; line-height: 1.25em;\'><span style=\'font-family: arial,helvetica,sans-seri"+ 
								"f;\'>Heading 1 &lt;Name module/course/subtopic in course or module&gt;<br></span"+ 
								"></p><p style=\'margin: 0pt; font-size: 1.45em; line-height: 1.25em; color: rgb("+ 
								"102, 102, 102);\' data-mce-style=\'margin: 0pt; font-size: 1.45em; line-height: "+ 
								"1.25em; color: #666666;\'><span style=\'font-family: arial,helvetica,sans-serif;"+ 
								"\'>Lecture 1: Title lecture 1</span></p><p style=\'margin: 5px 0pt 20px; color: "+ 
								"rgb(102, 102, 102);\'><span style=\'font-family: arial,helvetica,sans-serif;\' d"+ 
								"ata-mce-style=\'font-family: arial,helvetica,sans-serif;\'>Date: Xday xth Month<"+ 
								"/span><br><span style=\'font-family: arial,helvetica,sans-serif;\' data-mce-styl"+ 
								"e=\'font-family: arial,helvetica,sans-serif;\'>Location: <a style=\'color: rgb(3"+ 
								"8, 131, 188); text-decoration: none;\' data-mce-style=\'color: #2683bc; text-dec"+ 
								"oration: none;\'>Building x, Lecture hall x<br><br></a></span></p><p style=\'mar"+ 
								"gin: 5px 0pt 20px; color: rgb(102, 102, 102); padding-left: 30px;\' data-mce-sty"+ 
								"le=\'margin: 5px 0pt 20px; color: #666666; padding-left: 30px;\'><img id=\'widge"+ 
								"t_embedcontent_${refid}14\' class=\'widget_inline\' style=\'display: block; paddi"+ 
								"ng: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' dat"+ 
								"a-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'displa"+ 
								"y: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p><p style=\'color: r"+ 
								"gb(102, 102, 102); font-size: 1em;\' data-mce-style=\'color: #666666; font-size:"+ 
								" 1em;\'><br><span style=\'font-family: arial,helvetica,sans-serif; font-size: me"+ 
								"dium;\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: med"+ 
								"ium;\'>The Lecture matter </span><br></p><hr style=\'color: rgb(255, 0, 0); back"+ 
								"ground-color: rgb(232, 232, 232); height: 5px; border: 0pt none;\' data-mce-styl"+ 
								"e=\'color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt none;\'>"+ 
								"<p><br></p><p><span style=\'color: rgb(51, 51, 51); font-size: small;\'><strong>"+ 
								"<span data-mce-style=\'font-family: arial,helvetica,sans-serif;\' style=\'font-f"+ 
								"amily: arial,helvetica,sans-serif;\'>1. Heading 1<br></span></strong></span></p>"+ 
								"<p style=\'padding-left: 30px;\'><span style=\'font-family: arial,helvetica,sans"+ 
								"-serif; font-size: x-small;\'>Lorem ipsum dolor sit amet, consectetur adipiscing"+ 
								" elit. Nulla et odio aliquet ipsum molestie sodales. Aliquam vitae tincidunt orc"+ 
								"i. Vestibulum in odio nec metus lobortis cursus. Proin venenatis congue viverra."+ 
								" Cras sit amet tellus purus. Morbi eu commodo justo. Phasellus mollis tristique "+ 
								"leo in venenatis. Suspendisse potenti. Phasellus luctus mauris nec enim blandit "+ 
								"ut semper erat luctus. Mauris massa libero, volutpat ac vestibulum eu, molestie "+ 
								"non erat. Nullam diam enim, venenatis ac tincidunt et, fermentum nec velit.<br><"+ 
								"br></span></p><p><span style=\'color: rgb(51, 51, 51); font-size: small;\'><stro"+ 
								"ng><span data-mce-style=\'font-family: arial,helvetica,sans-serif;\' style=\'fon"+ 
								"t-family: arial,helvetica,sans-serif;\'>2. Heading 2</span></strong></span><span"+ 
								" style=\'font-family: arial,helvetica,sans-serif; font-size: x-small;\'></span><"+ 
								"/p><p style=\'padding-left: 30px;\'><span style=\'font-family: arial,helvetica,s"+ 
								"ans-serif; font-size: x-small;\'><br>Suspendisse auctor, orci vitae lobortis pha"+ 
								"retra, turpis tellus faucibus velit, quis placerat enim quam dapibus nisl. Praes"+ 
								"ent fermentum elit a risus porta bibendum. Nullam vitae nisl id eros eleifend pu"+ 
								"lvinar id et leo. Ut congue, ante vel fringilla dignissim, velit magna sollicitu"+ 
								"din odio, ac convallis magna diam ac nulla. Aenean sit amet leo turpis. Pellente"+ 
								"sque laoreet diam tincidunt dui volutpat condimentum. Donec nec porttitor elit. "+ 
								"Etiam sed erat augue. In hac habitasse platea dictumst.<br><br></span></p><p><sp"+ 
								"an style=\'color: rgb(51, 51, 51); font-size: small;\'><strong><span data-mce-st"+ 
								"yle=\'font-family: arial,helvetica,sans-serif;\' style=\'font-family: arial,helv"+ 
								"etica,sans-serif;\'>3. Heading 3</span></strong></span><span style=\'font-family"+ 
								": arial,helvetica,sans-serif; font-size: x-small;\'></span></p><p style=\'paddin"+ 
								"g-left: 30px;\'><span style=\'font-family: arial,helvetica,sans-serif; font-size"+ 
								": x-small;\'>Mauris porttitor, sapien in mattis porta, diam enim dapibus lectus,"+ 
								" sit amet semper felis libero porta lorem. Nam massa sem, posuere et rutrum sed,"+ 
								" sodales vel odio. Proin cursus luctus odio ut tincidunt. Cras quis lectus vel n"+ 
								"eque scelerisque consectetur. Duis at odio est, quis tristique orci. Cras condim"+ 
								"entum pulvinar tincidunt. Nulla dignissim ipsum ut ipsum scelerisque sed laoreet"+ 
								" massa sollicitudin. Aliquam pulvinar dapibus auctor. Etiam egestas commodo leo "+ 
								"id volutpat. Phasellus at imperdiet enim. Vestibulum ut tortor nunc, in pulvinar"+ 
								" tortor. Vestibulum placerat rhoncus erat, et tristique lacus hendrerit vel. Nam"+ 
								" interdum velit quis metus lobortis auctor. Cras turpis est, ornare quis eleifen"+ 
								"d sit amet, pellentesque adipiscing lectus.<br><br></span></p><p><span style=\'f"+ 
								"ont-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, "+ 
								"128);\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: med"+ 
								"ium; color: #808080;\'></span></p><p style=\'padding-left: 30px;\'><span style=\'"+ 
								"font-family: arial,helvetica,sans-serif; font-size: x-small;\'></span></p>\n\n\ "+ 
								"n<p style=\'padding-left: 30px;\'><span style=\'font-family: arial,helvetica,san"+ 
								"s-serif; font-size: x-small;\'></span></p>\n<p style=\'padding-left: 30px;\'><sp"+ 
								"an style=\'font-family: arial,helvetica,sans-serif; font-size: x-small;\'></span"+ 
								"></p><p style=\'padding-left: 30px;\'><span style=\'font-family: arial,helvetica"+ 
								",sans-serif; font-size: x-small;\'></span></p><p style=\'padding-left: 30px;\'><"+ 
								"span style=\'font-family: arial,helvetica,sans-serif; font-size: x-small;\'></sp"+ 
								"an></p><p style=\'color: rgb(51, 51, 51); font-size: 0.85em;\' data-mce-style=\'"+ 
								"color: #333333; font-size: 0.85em;\'><span style=\'font-family: arial,helvetica,"+ 
								"sans-serif; font-size: x-small;\'><span data-mce-style=\'padding-left: 30px;\' s"+ 
								"tyle=\'padding-left: 30px;\'></span></span><span data-mce-style=\'font-family: a"+ 
								"rial,helvetica,sans-serif; font-size: x-small;\' style=\'font-family: arial,helv"+ 
								"etica,sans-serif; font-size: x-small;\'><span data-mce-style=\'padding-left: 30p"+ 
								"x;\' style=\'padding-left: 30px;\'></span><br></span><span data-mce-style=\'font"+ 
								"-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;\' style="+ 
								"\'font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 12"+ 
								"8, 128);\'>Preparation and prerequisites</span><br></p><hr style=\'color: rgb(25"+ 
								"5, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;\'"+ 
								" data-mce-style=\'color: #ff0000; background-color: #e8e8e8; height: 5px; border"+ 
								": 0pt none;\'><p style=\'color: rgb(51, 51, 51); font-size: 0.85em;\' data-mce-s"+ 
								"tyle=\'color: #333333; font-size: 0.85em;\'><span style=\'font-family: arial,hel"+ 
								"vetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);\' data-mce-styl"+ 
								"e=\'font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;\'"+ 
								"></span><span style=\'font-family: arial,helvetica,sans-serif; font-size: x-sma"+ 
								"ll;\'>Please\n read and complete the following before the lecture, bring text bo"+ 
								"oks, \nalong with, your workings with you and printouts of the lecture slides.<b"+ 
								"r><br></span></p><hr style=\'visibility: hidden; clear: both;\' data-mce-style=\'"+ 
								"visibility: hidden; clear: both;\'><p style=\'color: rgb(102, 102, 102); font-s"+ 
								"ize: 1em;\' data-mce-style=\'color: #666666; font-size: 1em;\'><span style=\'col"+ 
								"or: rgb(51, 51, 51); font-size: small;\'><strong><span data-mce-style=\'font-fam"+ 
								"ily: arial,helvetica,sans-serif;\' style=\'font-family: arial,helvetica,sans-ser"+ 
								"if;\'>1. Reading material before class<br></span></strong></span></p><p style=\'"+ 
								"margin: 0pt; color: rgb(38, 131, 188); text-decoration: none; padding-left: 30px"+ 
								";\'><span style=\'font-family: arial,helvetica,sans-serif;\'><a style=\'color: r"+ 
								"gb(38, 131, 188); text-decoration: none;\' href=\'http://www.math.wisc.edu/%7Eke"+ 
								"isler/calc.html\' target=\'_blank\' data-mce-href=\'http://www.math.wisc.edu/%7E"+ 
								"keisler/calc.html\' data-mce-style=\'color: #2683bc; text-decoration: none;\'>Na"+ 
								"me book</a> <a href=\'dev/images/worldtemplates/math/book.png\' target=\'_blank\'"+ 
								" data-mce-href=\'/dev/images/worldtemplates/math/book.png\'><img style=\'float:"+ 
								" left; padding: 0pt 10px 5px 0pt; margin: 0pt; width: 5%;\' alt=\'Elementary Cal"+ 
								"culus: An Infinitesimal Approach\' src=\'dev/images/worldtemplates/math/book.png"+ 
								"\' data-mce-src=\'/dev/images/worldtemplates/math/book.png\' data-mce-style=\'fl"+ 
								"oat: left; padding: 0pt 10px 5px 0pt; margin: 0pt; width: 5%;\' border=\'0 0\'><"+ 
								"/a></span><br data-mce-bogus=\'1\'></p><p style=\'margin: 2px 0pt 0pt 5px; paddi"+ 
								"ng: 0pt 0pt 0pt 30px; color: rgb(51, 51, 51);\'><span style=\'font-family: arial"+ 
								",helvetica,sans-serif;\'>Name author<br></span></p><hr style=\'visibility: hidde"+ 
								"n; clear: both; padding-left: 30px;\'><p style=\'margin: 2px 0pt 0pt 5px; paddin"+ 
								"g: 0pt 0pt 0pt 30px; color: rgb(51, 51, 51);\'><span style=\'font-family: arial,"+ 
								"helvetica,sans-serif;\'><br>Chapters: xx-xx</span></p><p style=\'padding-left: 3"+ 
								"0px;\'><span style=\'font-family: arial,helvetica,sans-serif;\' data-mce-style=\'"+ 
								"font-family: arial,helvetica,sans-serif;\'><a style=\'color: rgb(38, 131, 188);"+ 
								" text-decoration: none; font-weight: bold;\' data-mce-style=\'color: #2683bc; te"+ 
								"xt-decoration: none; font-weight: bold;\'>1.1 - title book </a></span><span styl"+ 
								"e=\'font-family: arial,helvetica,sans-serif;\' data-mce-style=\'font-family: ari"+ 
								"al,helvetica,sans-serif;\'><a style=\'color: rgb(38, 131, 188); text-decoration:"+ 
								" none; font-weight: bold;\' data-mce-style=\'color: #2683bc; text-decoration: no"+ 
								"ne; font-weight: bold;\'><br>1.2 - title book</a></span><span style=\'font-famil"+ 
								"y: arial,helvetica,sans-serif;\' data-mce-style=\'font-family: arial,helvetica,s"+ 
								"ans-serif;\'><a style=\'color: rgb(38, 131, 188); text-decoration: none; font-we"+ 
								"ight: bold;\' data-mce-style=\'color: #2683bc; text-decoration: none; font-weigh"+ 
								"t: bold;\'><br>1.3 - title book</a></span><br><br><img id=\'widget_embedcontent_"+ 
								"${refid}15\' class=\'widget_inline\' style=\'display: block; padding: 10px; margi"+ 
								"n: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'dev"+ 
								"widgets/embedcontent/images/content.png\' data-mce-style=\'display: block; paddi"+ 
								"ng: 10px; margin: 4px;\' border=\'1\'><br></p><p style=\'margin: 10px 0pt 0pt 5p"+ 
								"x; padding: 0pt; color: rgb(102, 102, 102); font-weight: bold;\' data-mce-style="+ 
								"\'margin: 10px 0pt 0pt 5px; padding: 0pt; color: #666666; font-weight: bold;\'><"+ 
								"span style=\'color: rgb(51, 51, 51); font-size: small;\'><strong><span data-mce-"+ 
								"style=\'font-family: arial,helvetica,sans-serif;\' style=\'font-family: arial,he"+ 
								"lvetica,sans-serif;\'>2. Complete the following exercises before class<br></span"+ 
								"></strong></span></p><p style=\'margin: 2px 0pt 0pt 5px; padding: 0pt 0pt 0pt 30"+ 
								"px; color: rgb(51, 51, 51);\'><span style=\'font-family: arial,helvetica,sans-se"+ 
								"rif;\'>1.1: 1, 5, 7 </span><br><span style=\'font-family: arial,helvetica,sans-s"+ 
								"erif;\'>1.2: 3, 7, 9 </span><br><span style=\'font-family: arial,helvetica,sans-"+ 
								"serif;\'>1.3: 3, 5, 10<br><br><br></span></p><h1 style=\'color: rgb(102, 102, 10"+ 
								"2); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;\' data-mce-styl"+ 
								"e=\'color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;"+ 
								"\'><span style=\'color: rgb(54, 109, 160);\'><strong><span data-mce-style=\'font"+ 
								"-size: medium;\' style=\'font-size: medium;\'>Comments and questions</span></str"+ 
								"ong></span><br></h1><hr style=\'color: rgb(255, 0, 0); background-color: rgb(232"+ 
								", 232, 232); height: 5px; border: 0pt none;\' data-mce-style=\'color: #ff0000; b"+ 
								"ackground-color: #e8e8e8; height: 5px; border: 0pt none;\'><p><span style=\'font"+ 
								"-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128"+ 
								");\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: medium"+ 
								"; color: #808080;\'><span style=\'font-size: small;\' data-mce-style=\'font-size"+ 
								": small;\'>Give your comments and questions about this lecture below:</span></sp"+ 
								"an><br><span style=\'font-family: arial,helvetica,sans-serif; font-size: medium;"+ 
								" color: rgb(128, 128, 128);\' data-mce-style=\'font-family: arial,helvetica,sans"+ 
								"-serif; font-size: medium; color: #808080;\'><span style=\'font-size: small;\' d"+ 
								"ata-mce-style=\'font-size: small;\'><br></span></span></p><p style=\'margin: 2px"+ 
								" 0pt 0pt 5px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 0pt; color: "+ 
								"rgb(51, 51, 51);\' data-mce-style=\'margin: 2px 0pt 0pt 5px; padding-top: 0pt; p"+ 
								"adding-right: 0pt; padding-bottom: 0pt; color: #333333;\'><img id=\'widget_comme"+ 
								"nts_${refid}16\' class=\'widget_inline\' style=\'display: block; padding: 10px; ma"+ 
								"rgin: 4px;\' src=\'devwidgets/comments/images/comments.png\' data-mce-src=\'devw"+ 
								"idgets/comments/images/comments.png\' data-mce-style=\'display: block; padding: "+ 
								"10px; margin: 4px;\' border=\'1\'><span style=\'font-family: arial,helvetica,san"+ 
								"s-serif;\' data-mce-style=\'font-family: arial,helvetica,sans-serif;\'><br></spa"+ 
								"n></p><hr style=\'visibility: hidden; clear: both;\' data-mce-style=\'visibility"+ 
								": hidden; clear: both;\'>",
                            },
                            "${refid}14": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}15": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}16": {
								comments: {
									"sakai:allowanonymous": false,
								   	"sakai:type": "comment",
								   	"direction": "comments_FirstUp",
								   	"perPage": 5
								}
							},
                            "${refid}5": {
                                page: "<p style=\'margin: 20px 0pt; font-size: 1.75em; color: rgb(51, 51, 51); line-hei"+ 
								"ght: 1.25em;\' data-mce-style=\'margin: 20px 0pt; font-size: 1.75em; color: #333"+ 
								"333; line-height: 1.25em;\'><span style=\'font-family: arial,helvetica,sans-seri"+ 
								"f;\'>Heading 1 &lt;Name module/course/subtopic in course or module&gt;<br></span"+ 
								"></p><p style=\'margin: 0pt; font-size: 1.45em; line-height: 1.25em; color: rgb("+ 
								"102, 102, 102);\' data-mce-style=\'margin: 0pt; font-size: 1.45em; line-height: "+ 
								"1.25em; color: #666666;\'><span style=\'font-family: arial,helvetica,sans-serif;"+ 
								"\'>Lecture 2: Title lecture 2<br></span></p><p style=\'margin: 5px 0pt 20px; col"+ 
								"or: rgb(102, 102, 102);\'><span style=\'font-family: arial,helvetica,sans-serif;"+ 
								"\' data-mce-style=\'font-family: arial,helvetica,sans-serif;\'>Date: Xday xth Mo"+ 
								"nth</span><br><span style=\'font-family: arial,helvetica,sans-serif;\' data-mce-"+ 
								"style=\'font-family: arial,helvetica,sans-serif;\'>Location: <a style=\'color: r"+ 
								"gb(38, 131, 188); text-decoration: none;\' data-mce-style=\'color: #2683bc; text"+ 
								"-decoration:none;\'>Building x, Lecture hall x<br><br></a></span></p><p style=\'"+ 
								"margin: 5px 0pt 20px;  color: rgb(102, 102, 102); padding-left: 30px;\' data-mce"+ 
								"-style=\'margin: 5px 0pt 20px; color: #666666; padding-left: 30px;\'><img id=\'w"+ 
								"idget_embedcontent_${refid}17\' class=\'widget_inline\' style=\'display: block; p"+ 
								"adding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\'"+ 
								" data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'di"+ 
								"splay: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p><p style=\'colo"+ 
								"r: rgb(102, 102, 102); font-size: 1em;\' data-mce-style=\'color: #666666; font-s"+ 
								"ize: 1em;\'><span style=\'font-family: arial,helvetica,sans-serif; font-size: me"+ 
								"dium;\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: med"+ 
								"ium;\'></span><br><span style=\'font-family: arial,helvetica,sans-serif; font-si"+ 
								"ze: medium;\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-siz"+ 
								"e: medium;\'>The Lecture matter </span><br></p><hr style=\'color: rgb(255, 0, 0)"+ 
								"; background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;\' data-mc"+ 
								"e-style=\'color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt no"+ 
								"ne;\'><p><br></p><p><span style=\'color: rgb(51, 51, 51); font-size: small;\'><s"+ 
								"trong><span data-mce-style=\'font-family: arial,helvetica,sans-serif;\' style=\'"+ 
								"font-family: arial,helvetica,sans-serif;\'>1. Heading 1<br></span></strong></spa"+ 
								"n></p><p style=\'padding-left: 30px;\'><span style=\'font-family: arial,helvetic"+ 
								"a,sans-serif; font-size: x-small;\'>Lorem\n ipsum dolor sit amet, consectetur ad"+ 
								"ipiscing elit. Nulla et odio \naliquet ipsum molestie sodales. Aliquam vitae tin"+ 
								"cidunt orci. Vestibulum\n in odio nec metus lobortis cursus. Proin venenatis con"+ 
								"gue viverra. Cras\n sit amet tellus purus. Morbi eu commodo justo. Phasellus mol"+ 
								"lis \ntristique leo in venenatis. Suspendisse potenti. Phasellus luctus mauris\n"+ 
								" nec enim blandit ut semper erat luctus. Mauris massa libero, volutpat \nac vest"+ 
								"ibulum eu, molestie non erat. Nullam diam enim, venenatis ac \ntincidunt et, fer"+ 
								"mentum nec velit.<br><br></span></p><p><span style=\'color: rgb(51, 51, 51); fon"+ 
								"t-size: small;\'><strong><span data-mce-style=\'font-family: arial,helvetica,san"+ 
								"s-serif;\' style=\'font-family: arial,helvetica,sans-serif;\'>2. Heading 2</span"+ 
								"></strong></span><span style=\'font-family: arial,helvetica,sans-serif; font-siz"+ 
								"e: x-small;\'></span></p><p style=\'padding-left: 30px;\'><span style=\'font-fam"+ 
								"ily: arial,helvetica,sans-serif; font-size: x-small;\'><br>Suspendisse\n auctor,"+ 
								" orci vitae lobortis pharetra, turpis tellus faucibus velit, \nquis placerat eni"+ 
								"m quam dapibus nisl. Praesent fermentum elit a risus \nporta bibendum. Nullam vi"+ 
								"tae nisl id eros eleifend pulvinar id et leo. \nUt congue, ante vel fringilla di"+ 
								"gnissim, velit magna sollicitudin odio, \nac convallis magna diam ac nulla. Aene"+ 
								"an sit amet leo turpis. \nPellentesque laoreet diam tincidunt dui volutpat condi"+ 
								"mentum. Donec nec \nporttitor elit. Etiam sed erat augue. In hac habitasse plate"+ 
								"a dictumst.<br><br></span></p><p><span style=\'color: rgb(51, 51, 51); font-size"+ 
								": small;\'><strong><span data-mce-style=\'font-family: arial,helvetica,sans-seri"+ 
								"f;\' style=\'font-family: arial,helvetica,sans-serif;\'>3. Heading 3</span></str"+ 
								"ong></span><span style=\'font-family: arial,helvetica,sans-serif; font-size: x-s"+ 
								"mall;\'></span></p><p style=\'padding-left: 30px;\'><span style=\'font-family: a"+ 
								"rial,helvetica,sans-serif; font-size: x-small;\'>Mauris\n porttitor, sapien in m"+ 
								"attis porta, diam enim dapibus lectus, sit amet \nsemper felis libero porta lore"+ 
								"m. Nam massa sem, posuere et rutrum sed, \nsodales vel odio. Proin cursus luctus"+ 
								" odio ut tincidunt. Cras quis \nlectus vel neque scelerisque consectetur. Duis a"+ 
								"t odio est, quis \ntristique orci. Cras condimentum pulvinar tincidunt. Nulla di"+ 
								"gnissim \nipsum ut ipsum scelerisque sed laoreet massa sollicitudin. Aliquam \np"+ 
								"ulvinar dapibus auctor. Etiam egestas commodo leo id volutpat. \nPhasellus at im"+ 
								"perdiet enim. Vestibulum ut tortor nunc, in pulvinar \ntortor. Vestibulum placer"+ 
								"at rhoncus erat, et tristique lacus hendrerit \nvel. Nam interdum velit quis met"+ 
								"us lobortis auctor. Cras turpis est, \nornare quis eleifend sit amet, pellentesq"+ 
								"ue adipiscing lectus.<br><br></span></p><p style=\'color: rgb(102, 102, 102); fo"+ 
								"nt-size: 1em;\' data-mce-style=\'color: #666666; font-size: 1em;\'><br><span dat"+ 
								"a-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: medium; color:"+ 
								" #808080;\' style=\'font-family: arial,helvetica,sans-serif; font-size: medium; "+ 
								"color: rgb(128, 128, 128);\'>Preparation and prerequisites</span><br></p><hr sty"+ 
								"le=\'color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; b"+ 
								"order: 0pt none;\' data-mce-style=\'color: #ff0000; background-color: #e8e8e8; h"+ 
								"eight: 5px; border: 0pt none;\'>\n\n\n\n<p style=\'color: rgb(51, 51, 51); font-"+ 
								"size: 0.85em;\' data-mce-style=\'color: #333333; font-size: 0.85em;\'><span styl"+ 
								"e=\'font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, "+ 
								"128, 128);\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size"+ 
								": medium; color: #808080;\'></span><span style=\'font-family: arial,helvetica,sa"+ 
								"ns-serif; font-size: x-small;\'>Please\n read and complete the following before "+ 
								"the lecture, bring text books, \nalong with, your workings with you and printout"+ 
								"s of the lecture slides.</span><br><span style=\'font-family: arial,helvetica,sa"+ 
								"ns-serif; font-size: x-small;\'><br></span></p><hr style=\'visibility: hidden; c"+ 
								"lear: both;\' data-mce-style=\'visibility: hidden; clear: both;\'><p style=\'col"+ 
								"or: rgb(102, 102, 102); font-size: 1em;\' data-mce-style=\'color: #666666; font-"+ 
								"size: 1em;\'><span style=\'color: rgb(51, 51, 51); font-size: small;\'><strong><"+ 
								"span data-mce-style=\'font-family: arial,helvetica,sans-serif;\' style=\'font-fa"+ 
								"mily: arial,helvetica,sans-serif;\'>1. Reading material before class<br></span><"+ 
								"/strong></span></p><p style=\'margin: 0pt; color: rgb(38, 131, 188); text-decora"+ 
								"tion: none; padding-left: 30px;\'><span style=\'font-family: arial,helvetica,san"+ 
								"s-serif;\'><a style=\'color: rgb(38, 131, 188); text-decoration: none;\' href=\'"+ 
								"http://www.math.wisc.edu/%7Ekeisler/calc.html\' target=\'_blank\' data-mce-href="+ 
								"\'http://www.math.wisc.edu/%7Ekeisler/calc.html\' data-mce-style=\'color: #2683b"+ 
								"c; text-decoration: none;\'>Name book</a> <a href=\'dev/images/worldtemplates/ma"+ 
								"th/book.png\' target=\'_blank\' data-mce-href=\'/dev/images/worldtemplates/math/"+ 
								"book.png\'><img style=\'float: left; padding: 0pt 10px 5px 0pt; margin: 0pt; wid"+ 
								"th: 5%;\' alt=\'Elementary Calculus: An Infinitesimal Approach\' src=\'dev/image"+ 
								"s/worldtemplates/math/book.png\' data-mce-src=\'/dev/images/worldtemplates/math/"+ 
								"book.png\' data-mce-style=\'float: left; padding: 0pt 10px 5px 0pt; margin: 0pt;"+ 
								" width: 5%;\' border=\'0 0\'></a></span><br data-mce-bogus=\'1\'></p><p style=\'"+ 
								"margin: 2px 0pt 0pt 5px; padding: 0pt 0pt 0pt 30px; color: rgb(51, 51, 51);\'><s"+ 
								"pan style=\'font-family: arial,helvetica,sans-serif;\'>Name author<br></span></p"+ 
								"><hr style=\'visibility: hidden; clear: both; padding-left: 30px;\'><p style=\'m"+ 
								"argin: 2px 0pt 0pt 5px; padding: 0pt 0pt 0pt 30px; color: rgb(51, 51, 51);\'><sp"+ 
								"an style=\'font-family: arial,helvetica,sans-serif;\'><br>Chapters: xx-xx</span>"+ 
								"</p><p style=\'padding-left: 60px;\'><span style=\'font-family: arial,helvetica,"+ 
								"sans-serif;\'><a style=\'color: rgb(38, 131, 188); text-decoration: none; font-w"+ 
								"eight: bold;\' data-mce-style=\'color: #2683bc; text-decoration: none; font-weig"+ 
								"ht: bold;\'>1.4 - title book </a></span><br data-mce-bogus=\'1\'><span style=\'f"+ 
								"ont-family: arial,helvetica,sans-serif;\'><a style=\'color: rgb(38, 131, 188); t"+ 
								"ext-decoration: none; font-weight: bold;\' data-mce-style=\'color: #2683bc; text"+ 
								"-decoration: none; font-weight: bold;\'>1.5 - title book</a></span><br data-mce-"+ 
								"bogus=\'1\'><span style=\'font-family: arial,helvetica,sans-serif;\'><a style=\'"+ 
								"color: rgb(38, 131, 188); text-decoration: none; font-weight: bold;\' data-mce-s"+ 
								"tyle=\'color: #2683bc; text-decoration: none; font-weight: bold;\'>1.6 - title b"+ 
								"ook</a></span><br></p><p style=\'padding-left: 30px;\'><img id=\'widget_embedcon"+ 
								"tent_${refid}18\' class=\'widget_inline\' style=\'display: block; padding: 10px; "+ 
								"margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src="+ 
								"\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'display: block; "+ 
								"padding: 10px; margin: 4px;\' border=\'1\'><br></p><p style=\'margin: 10px 0pt 0"+ 
								"pt 5px; padding: 0pt; color: rgb(102, 102, 102); font-weight: bold;\' data-mce-s"+ 
								"tyle=\'margin: 10px 0pt 0pt 5px; padding: 0pt; color: #666666; font-weight: bold"+ 
								";\'><span style=\'color: rgb(51, 51, 51); font-size: small;\'><strong><span data"+ 
								"-mce-style=\'font-family: arial,helvetica,sans-serif;\' style=\'font-family: ari"+ 
								"al,helvetica,sans-serif;\'>2. Complete the following exercises before class<br><"+ 
								"/span></strong></span></p><p style=\'margin: 2px 0pt 0pt 5px; padding: 0pt 0pt 0"+ 
								"pt 30px; color: rgb(51, 51, 51);\'><span style=\'font-family: arial,helvetica,sa"+ 
								"ns-serif;\'>2.1: 1, 5, 7 </span><br><span style=\'font-family: arial,helvetica,s"+ 
								"ans-serif;\'>2.2: 3, 7, 9 </span><br><span style=\'font-family: arial,helvetica,"+ 
								"sans-serif;\'>2.3: 3, 5, 10<br><br></span></p><p><span style=\'color: rgb(54, 10"+ 
								"9, 160);\'><strong><span data-mce-style=\'font-size: medium;\' style=\'font-size"+ 
								": medium;\'><br><br><br>Comments and questions</span></strong></span><br></p><hr"+ 
								" style=\'color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5p"+ 
								"x; border: 0pt none;\' data-mce-style=\'color: #ff0000; background-color: #e8e8e"+ 
								"8; height: 5px; border: 0pt none;\'><p style=\'margin: 2px 0pt 0pt 5px; padding-"+ 
								"top: 0pt; padding-right: 0pt; padding-bottom: 0pt; color: rgb(51, 51, 51);\'><sp"+ 
								"an style=\'font-family: arial,helvetica,sans-serif; font-size: medium; color: rg"+ 
								"b(128, 128, 128);\' data-mce-style=\'font-family: arial,helvetica,sans-serif; fo"+ 
								"nt-size: medium; color: #808080;\'><span style=\'font-size: small;\' data-mce-st"+ 
								"yle=\'font-size: small;\'></span></span><span style=\'font-family: arial,helveti"+ 
								"ca,sans-serif; font-size: medium; color: rgb(128, 128, 128);\' data-mce-style=\'"+ 
								"font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;\'><s"+ 
								"pan style=\'font-size: small;\' data-mce-style=\'font-size: small;\'>Give your c"+ 
								"omments and questions about this lecture below:<br></span></span><span style=\'f"+ 
								"ont-family: arial,helvetica,sans-serif; font-size: x-small;\'></span><br><br></p"+ 
								"><p><img src=\'/devwidgets/comments/images/comments.png\' id=\'widget_comments_"+ 
								"${refid}19\' class=\'widget_inline\' style=\'display: block; padding: 10px; margin"+ 
								": 4px;\' border=\'1\'></p><p></p>"
                            },
                            "${refid}17": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}18": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}19": {
								comments: {
									"sakai:allowanonymous": false,
								   	"sakai:type": "comment",
								   	"direction": "comments_FirstUp",
								   	"perPage": 5
								}
							},
                            "${refid}6": {
                                page: "<p style=\'margin: 20px 0pt; font-size: 1.75em; color: rgb(51, 51, 51); line-hei"+ 
								"ght: 1.25em;\' data-mce-style=\'margin: 20px 0pt; font-size: 1.75em; color: #333"+ 
								"333; line-height: 1.25em;\'><span style=\'font-family: arial,helvetica,sans-seri"+ 
								"f;\'>Heading 1 &lt;Name module/course/subtopic in course or module&gt;<br></span"+ 
								"></p><p style=\'margin: 0pt; font-size: 1.45em; line-height: 1.25em; color: rgb("+ 
								"102, 102, 102);\' data-mce-style=\'margin: 0pt; font-size: 1.45em; line-height: "+ 
								"1.25em; color: #666666;\'><span style=\'font-family: arial,helvetica,sans-serif;"+ 
								"\'>Lecture 3: Title lecture 3<br></span></p><p style=\'margin: 5px 0pt 20px; col"+ 
								"or: rgb(102, 102, 102);\'><span style=\'font-family: arial,helvetica,sans-serif;"+ 
								"\' data-mce-style=\'font-family: arial,helvetica,sans-serif;\'>Date: Xday xth Mo"+ 
								"nth</span><br><span style=\'font-family: arial,helvetica,sans-serif;\' data-mce-"+ 
								"style=\'font-family: arial,helvetica,sans-serif;\'>Location: <a style=\'color: r"+ 
								"gb(38, 131, 188); text-decoration: none;\' data-mce-style=\'color: #2683bc; text"+ 
								"-decoration: none;\'>Building x, Lecture hall x<br><br></a></span></p><p style=\'"+ 
								"margin: 5px 0pt 20px; color: rgb(102, 102, 102); padding-left: 30px;\' data-mce"+ 
								"-style=\'margin: 5px 0pt 20px; color: #666666; padding-left: 30px;\'><img id=\'w"+ 
								"idget_embedcontent_${refid}20\' class=\'widget_inline\' style=\'display: block; p"+ 
								"adding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\'"+ 
								" data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'di"+ 
								"splay: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p><p style=\'colo"+ 
								"r: rgb(102, 102, 102); font-size: 1em;\' data-mce-style=\'color: #666666; font-s"+ 
								"ize: 1em;\'><br><span style=\'font-family: arial,helvetica,sans-serif; font-size"+ 
								": medium;\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size:"+ 
								" medium;\'></span><span style=\'font-family: arial,helvetica,sans-serif; font-si"+ 
								"ze: medium;\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-siz"+ 
								"e: medium;\'>The Lecture matter </span><br></p><hr style=\'color: rgb(255, 0, 0)"+ 
								"; background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;\' data-mc"+ 
								"e-style=\'color: #ff0000; background-color: #e8e8e8; height: 5px; border: 0pt no"+ 
								"ne;\'><p><br></p><p><span style=\'color: rgb(51, 51, 51); font-size: small;\'><s"+ 
								"trong><span data-mce-style=\'font-family: arial,helvetica,sans-serif;\' style=\'"+ 
								"font-family: arial,helvetica,sans-serif;\'>1. Heading 1<br></span></strong></spa"+ 
								"n></p><p style=\'padding-left: 30px;\'><span style=\'font-family: arial,helvetic"+ 
								"a,sans-serif; font-size: x-small;\'>Lorem\n ipsum dolor sit amet, consectetur ad"+ 
								"ipiscing elit. Nulla et odio \naliquet ipsum molestie sodales. Aliquam vitae tin"+ 
								"cidunt orci. Vestibulum\n in odio nec metus lobortis cursus. Proin venenatis con"+ 
								"gue viverra. Cras\n sit amet tellus purus. Morbi eu commodo justo. Phasellus mol"+ 
								"lis \ntristique leo in venenatis. Suspendisse potenti. Phasellus luctus mauris\n"+ 
								" nec enim blandit ut semper erat luctus. Mauris massa libero, volutpat \nac vest"+ 
								"ibulum eu, molestie non erat. Nullam diam enim, venenatis ac \ntincidunt et, fer"+ 
								"mentum nec velit.<br><br></span></p><p><span style=\'color: rgb(51, 51, 51); fon"+ 
								"t-size: small;\'><strong><span data-mce-style=\'font-family: arial,helvetica,san"+ 
								"s-serif;\' style=\'font-family: arial,helvetica,sans-serif;\'>2. Heading 2</span"+ 
								"></strong></span><span style=\'font-family: arial,helvetica,sans-serif; font-siz"+ 
								"e: x-small;\'></span></p><p style=\'padding-left: 30px;\'><span style=\'font-fam"+ 
								"ily: arial,helvetica,sans-serif; font-size: x-small;\'><br>Suspendisse\n auctor,"+ 
								" orci vitae lobortis pharetra, turpis tellus faucibus velit, \nquis placerat eni"+ 
								"m quam dapibus nisl. Praesent fermentum elit a risus \nporta bibendum. Nullam vi"+ 
								"tae nisl id eros eleifend pulvinar id et leo. \nUt congue, ante vel fringilla di"+ 
								"gnissim, velit magna sollicitudin odio, \nac convallis magna diam ac nulla. Aene"+ 
								"an sit amet leo turpis. \nPellentesque laoreet diam tincidunt dui volutpat condi"+ 
								"mentum. Donec nec \nporttitor elit. Etiam sed erat augue. In hac habitasse plate"+ 
								"a dictumst.<br><br></span></p><p><span style=\'color: rgb(51, 51, 51); font-size"+ 
								": small;\'><strong><span data-mce-style=\'font-family: arial,helvetica,sans-seri"+ 
								"f;\' style=\'font-family: arial,helvetica,sans-serif;\'>3. Heading 3</span></str"+ 
								"ong></span><span style=\'font-family: arial,helvetica,sans-serif; font-size: x-s"+ 
								"mall;\'></span></p><p style=\'padding-left: 30px;\'><span style=\'font-family: a"+ 
								"rial,helvetica,sans-serif; font-size: x-small;\'>Mauris\n porttitor, sapien in m"+ 
								"attis porta, diam enim dapibus lectus, sit amet \nsemper felis libero porta lore"+ 
								"m. Nam massa sem, posuere et rutrum sed, \nsodales vel odio. Proin cursus luctus"+ 
								" odio ut tincidunt. Cras quis \nlectus vel neque scelerisque consectetur. Duis a"+ 
								"t odio est, quis \ntristique orci. Cras condimentum pulvinar tincidunt. Nulla di"+ 
								"gnissim \nipsum ut ipsum scelerisque sed laoreet massa sollicitudin. Aliquam \np"+ 
								"ulvinar dapibus auctor. Etiam egestas commodo leo id volutpat. \nPhasellus at im"+ 
								"perdiet enim. Vestibulum ut tortor nunc, in pulvinar \ntortor. Vestibulum placer"+ 
								"at rhoncus erat, et tristique lacus hendrerit \nvel. Nam interdum velit quis met"+ 
								"us lobortis auctor. Cras turpis est, \nornare quis eleifend sit amet, pellentesq"+ 
								"ue adipiscing lectus.<br><br><br></span></p><p><span style=\'font-family: arial,"+ 
								"helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);\' data-mce-s"+ 
								"tyle=\'font-family: arial,helvetica,sans-serif; font-size: medium; color: #80808"+ 
								"0;\'></span></p><p style=\'padding-left: 30px;\'><span style=\'font-family: aria"+ 
								"l,helvetica,sans-serif; font-size: x-small;\'></span></p>\n\n\n<p style=\'paddin"+ 
								"g-left: 30px;\'><span style=\'font-family: arial,helvetica,sans-serif; font-size"+ 
								": x-small;\'></span></p>\n<p style=\'padding-left: 30px;\'><span style=\'font-fa"+ 
								"mily: arial,helvetica,sans-serif; font-size: x-small;\'></span></p><p style=\'pa"+ 
								"dding-left: 30px;\'><span style=\'font-family: arial,helvetica,sans-serif; font-"+ 
								"size: x-small;\'></span></p><p style=\'color: rgb(51, 51, 51); font-size: 0.85em"+ 
								";\' data-mce-style=\'color: #333333; font-size: 0.85em;\'><span data-mce-style=\'"+ 
								"font-family: arial,helvetica,sans-serif; font-size: medium; color: #808080;\' s"+ 
								"tyle=\'font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(12"+ 
								"8, 128, 128);\'></span><span data-mce-style=\'font-family: arial,helvetica,sans-"+ 
								"serif; font-size: medium; color: #808080;\' style=\'font-family: arial,helvetica"+ 
								",sans-serif; font-size: medium; color: rgb(128, 128, 128);\'>Preparation and pre"+ 
								"requisites</span><br></p><hr style=\'color: rgb(255, 0, 0); background-color: rg"+ 
								"b(232, 232, 232); height: 5px; border: 0pt none;\' data-mce-style=\'color: #ff00"+ 
								"00; background-color: #e8e8e8; height: 5px; border: 0pt none;\'><p style=\'color"+ 
								": rgb(51, 51, 51); font-size: 0.85em;\' data-mce-style=\'color: #333333; font-si"+ 
								"ze: 0.85em;\'><span style=\'font-family: arial,helvetica,sans-serif; font-size: "+ 
								"medium; color: rgb(128, 128, 128);\' data-mce-style=\'font-family: arial,helveti"+ 
								"ca,sans-serif; font-size: medium; color: #808080;\'></span><span style=\'font-fa"+ 
								"mily: arial,helvetica,sans-serif; font-size: x-small;\'><br>Please\n read and co"+ 
								"mplete the following before the lecture, bring text books, \nalong with, your wo"+ 
								"rkings with you and printouts of the lecture slides.<br><br></span></p><hr style"+ 
								"=\'visibility: hidden; clear: both;\' data-mce-style=\'visibility: hidden; clear"+ 
								": both;\'><p style=\'color: rgb(102, 102, 102); font-size: 1em;\' data-mce-style"+ 
								"=\'color: #666666; font-size: 1em;\'><span style=\'color: rgb(51, 51, 51); font-"+ 
								"size: small;\'><strong><span data-mce-style=\'font-family: arial,helvetica,sans-"+ 
								"serif;\' style=\'font-family: arial,helvetica,sans-serif;\'>1. Reading material "+ 
								"before class<br></span></strong></span></p><p style=\'margin: 0pt; color: rgb(38"+ 
								", 131, 188); text-decoration: none; padding-left: 30px;\'><span style=\'font-fam"+ 
								"ily: arial,helvetica,sans-serif;\'><a style=\'color: rgb(38, 131, 188); text-dec"+ 
								"oration: none;\' href=\'http://www.math.wisc.edu/%7Ekeisler/calc.html\' target=\'"+ 
								"_blank\' data-mce-href=\'http://www.math.wisc.edu/%7Ekeisler/calc.html\' data-m"+ 
								"ce-style=\'color: #2683bc; text-decoration: none;\'>Name book</a> <a href=\'dev/"+ 
								"images/worldtemplates/math/book.png\' target=\'_blank\' data-mce-href=\'/dev/ima"+ 
								"ges/worldtemplates/math/book.png\'><img style=\'float: left; padding: 0pt 10px 5"+ 
								"px 0pt; margin: 0pt; width: 5%;\' alt=\'Elementary Calculus: An Infinitesimal Ap"+ 
								"proach\' src=\'dev/images/worldtemplates/math/book.png\' data-mce-src=\'/dev/ima"+ 
								"ges/worldtemplates/math/book.png\' data-mce-style=\'float: left; padding: 0pt 10"+ 
								"px 5px 0pt; margin: 0pt; width: 5%;\' border=\'0 0\'></a></span><br data-mce-bog"+ 
								"us=\'1\'></p><p style=\'margin: 2px 0pt 0pt 5px; padding: 0pt 0pt 0pt 30px; colo"+ 
								"r: rgb(51, 51, 51);\'><span style=\'font-family: arial,helvetica,sans-serif;\'>N"+ 
								"ame author<br></span></p><hr style=\'visibility: hidden; clear: both; padding-le"+ 
								"ft: 30px;\'><p style=\'margin: 2px 0pt 0pt 5px; padding: 0pt 0pt 0pt 30px; color"+ 
								": rgb(51, 51, 51);\'><span style=\'font-family: arial,helvetica,sans-serif;\'><b"+ 
								"r>Chapters: xx-xx</span></p><p style=\'padding-left: 60px;\'><span style=\'font-"+ 
								"family: arial,helvetica,sans-serif;\'><a style=\'color: rgb(38, 131, 188); text-"+ 
								"decoration: none; font-weight: bold;\' data-mce-style=\'color: #2683bc; text-dec"+ 
								"oration: none; font-weight: bold;\'>1.1 - title book </a></span><br data-mce-bog"+ 
								"us=\'1\'><span style=\'font-family: arial,helvetica,sans-serif;\'><a style=\'col"+ 
								"or: rgb(38, 131, 188); text-decoration: none; font-weight: bold;\' data-mce-styl"+ 
								"e=\'color: #2683bc; text-decoration: none; font-weight: bold;\'>1.2 - title book"+ 
								"</a></span><br data-mce-bogus=\'1\'><span style=\'font-family: arial,helvetica,s"+ 
								"ans-serif;\'><a style=\'color: rgb(38, 131, 188); text-decoration: none; font-we"+ 
								"ight: bold;\' data-mce-style=\'color: #2683bc; text-decoration: none; font-weigh"+ 
								"t: bold;\'>1.3 - title book</a></span><br></p><p style=\'padding-left: 30px;\'><"+ 
								"img id=\'widget_embedcontent_${refid}21\' class=\'widget_inline\' style=\'display"+ 
								": block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/con"+ 
								"tent.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-"+ 
								"style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p><p st"+ 
								"yle=\'margin: 10px 0pt 0pt 5px; padding: 0pt; color: rgb(102, 102, 102); font-we"+ 
								"ight: bold;\' data-mce-style=\'margin: 10px 0pt 0pt 5px; padding: 0pt; color: #6"+ 
								"66666; font-weight: bold;\'><span style=\'color: rgb(51, 51, 51); font-size: sma"+ 
								"ll;\'><strong><span data-mce-style=\'font-family: arial,helvetica,sans-serif;\' "+ 
								"style=\'font-family: arial,helvetica,sans-serif;\'>2. Complete the following exe"+ 
								"rcises before class<br></span></strong></span></p><p style=\'margin: 2px 0pt 0pt"+ 
								" 5px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 0pt; color: rgb(51, "+ 
								"51, 51);\'><span style=\'font-family: arial,helvetica,sans-serif;\'>1.1: 1, 5, 7"+ 
								" </span><br><span style=\'font-family: arial,helvetica,sans-serif;\'>1.2: 3, 7, "+ 
								"9 </span><br><span style=\'font-family: arial,helvetica,sans-serif; font-size: x"+ 
								"-small;\'>1.3: 3, 5, 10<br><br><br></span></p><h1 style=\'color: rgb(102, 102, 1"+ 
								"02); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;\' data-mce-sty"+ 
								"le=\'color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight: normal"+ 
								";\'><span style=\'color: rgb(54, 109, 160);\'><strong><span data-mce-style=\'fon"+ 
								"t-size: medium;\' style=\'font-size: medium;\'>Comments and questions</span></st"+ 
								"rong></span><br></h1><hr style=\'color: rgb(255, 0, 0); background-color: rgb(23"+ 
								"2, 232, 232); height: 5px; border: 0pt none;\' data-mce-style=\'color: #ff0000; "+ 
								"background-color: #e8e8e8; height: 5px; border: 0pt none;\'><p><span style=\'fon"+ 
								"t-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 12"+ 
								"8);\' data-mce-style=\'font-family: arial,helvetica,sans-serif; font-size: mediu"+ 
								"m; color: #808080;\'><span style=\'font-size: small;\' data-mce-style=\'font-siz"+ 
								"e: small;\'>Give your comments and questions about this lecture below:</span></s"+ 
								"pan><br><span style=\'font-family: arial,helvetica,sans-serif; font-size: medium"+ 
								"; color: rgb(128, 128, 128);\' data-mce-style=\'font-family: arial,helvetica,san"+ 
								"s-serif; font-size: medium; color: #808080;\'><span style=\'font-size: small;\' "+ 
								"data-mce-style=\'font-size: small;\'><br></span></span></p><p><img src=\'/devwid"+ 
								"gets/comments/images/comments.png\' id=\'widget_comments_${refid}22\' class=\'wid"+ 
								"get_inline\' style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'>"+ 
								"</p><p></p>"
							},
							"${refid}20": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}21": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}22": {
								comments: {
									"sakai:allowanonymous": false,
								   	"sakai:type": "comment",
								   	"direction": "comments_FirstUp",
								   	"perPage": 5
								}
							},
                        },
                         "${pid}4": {
                            structure0: {
                                "about":{
                                    "_ref":"${refid}7",
                                    "_order":0,
                                    "_nonEditable": false,
                                    "_title":"About",
                                    "main":{
                                        "_ref":"${refid}7",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"About"
                                    }
                                }
                            },
                            "${refid}7": {
                                page: "<div id='header' style=''> <h1 style='color: rgb(102, 102, 102); font-size: 22px"+ 
								"; margin: 20px 0pt 15px; font-weight: normal;'>About &lt;name of the course&gt;<"+ 
								"/h1> <hr style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); hei"+ 
								"ght: 5px; border: 0pt none;'> </div><p> <br></p> <p style='color: rgb(99, 99, 99"+ 
								"); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px; margin: 0pt;'> &l"+ 
								"t;give a description about this course here&gt; </p>"
                            }
                        },
                         "${pid}5": {
                            structure0: {
                                "timetables":{
                                    "_ref":"${refid}8",
                                    "_order":3,
                                    "_nonEditable": false,
                                    "_title":"Timetables",
                                    "main":{
                                        "_ref":"${refid}8",
                                        "_order":0,
                                        "_nonEditable": false,
                                        "_title":"Timetables"
                                    }
                                }
                            },
                            "${refid}8": {
                                page: "<p></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 1"+ 
									"5px; font-weight: normal;' data-mce-style='color: #666666; font-size: 22px; marg"+ 
									"in: 20px 0pt 15px; font-weight: normal;'>Key Dates for &lt;Part X&gt;<br></h1><h"+ 
									"r style='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5p"+ 
									"x; border: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8;"+ 
									" height: 5px; border: 0pt none;'><p><br></p><p style='color: rgb(99, 99, 99); fo"+ 
									"nt-size: 16px; line-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-"+ 
									"bottom: 10px; margin: 0pt;' data-mce-style='color: #636363; font-size: 16px; lin"+ 
									"e-height: 18px; padding-top: 0pt; padding-right: 0pt; padding-bottom: 10px; marg"+ 
									"in: 0pt;'><span style='font-family: arial,helvetica,sans-serif; font-size: mediu"+ 
									"m; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvetica,sans"+ 
									"-serif; font-size: medium; color: #808080;'>Below are the Key Dates for the &lt;"+ 
									"Name of Course/Module&gt; listed<br><br></span></p><p style='color: rgb(99, 99, "+ 
									"99); font-size: 16px; line-height: 18px; padding: 0pt 0pt 10px 30px; margin: 0pt"+ 
									";' data-mce-style='color: #636363; font-size: 16px; line-height: 18px; padding: "+ 
									"0pt 0pt 10px 30px; margin: 0pt;'><span style='font-family: arial,helvetica,sans-"+ 
									"serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-famil"+ 
									"y: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><img id='widg"+ 
									"et_embedcontent_${refid}23' class='widget_inline' style='display: block; padding:"+ 
									" 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-mce-"+ 
									"src='devwidgets/embedcontent/images/content.png' data-mce-style='display: block;"+ 
									" padding: 10px; margin: 4px;' border='1'><br></span></p><h1 style='color: rgb(10"+ 
									"2, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: normal;' data"+ 
									"-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font-weight:"+ 
									" normal;'>Lecture Timetables for &lt;Part X&gt;<br></h1><hr style='color: rgb(25"+ 
									"5, 0, 0); background-color: rgb(232, 232, 232); height: 5px; border: 0pt none;' "+ 
									"data-mce-style='color: #ff0000; background-color: #e8e8e8; height: 5px; border: "+ 
									"0pt none;'><p><br><span style='font-family: arial,helvetica,sans-serif; font-siz"+ 
									"e: medium; color: rgb(128, 128, 128);' data-mce-style='font-family: arial,helvet"+ 
									"ica,sans-serif; font-size: medium; color: #808080;'>Below you will find the lect"+ 
									"ure timetables for the 3 terms.</span><br><br></p><p style='padding-left: 30px;'"+ 
									" data-mce-style='padding-left: 30px;'><img id='widget_embedcontent_${refid}24' cl"+ 
									"ass='widget_inline' style='display: block; padding: 10px; margin: 4px;' src='/de"+ 
									"vwidgets/embedcontent/images/content.png' data-mce-src='devwidgets/embedcontent/"+ 
									"images/content.png' data-mce-style='display: block; padding: 10px; margin: 4px;'"+ 
									" border='1'><br><br></p><h1 style='color: rgb(102, 102, 102); font-size: 22px; m"+ 
									"argin: 20px 0pt 15px; font-weight: normal;' data-mce-style='color: #666666; font"+ 
									"-size: 22px; margin: 20px 0pt 15px; font-weight: normal;'>Example Papers Timetab"+ 
									"les for &lt;Part X&gt;<br></h1><hr style='color: rgb(255, 0, 0); background-colo"+ 
									"r: rgb(232, 232, 232); height: 5px; border: 0pt none;' data-mce-style='color: #f"+ 
									"f0000; background-color: #e8e8e8; height: 5px; border: 0pt none;'><p><br><span s"+ 
									"tyle='font-family: arial,helvetica,sans-serif; font-size: medium; color: rgb(128"+ 
									", 128, 128);' data-mce-style='font-family: arial,helvetica,sans-serif; font-size"+ 
									": medium; color: #808080;'>Below you will find the timetables where the past Exa"+ 
									"mples Papers will be targeted.<br><br></span></p><p style='padding-left: 30px;' "+ 
									"data-mce-style='padding-left: 30px;'><span style='font-family: arial,helvetica,s"+ 
									"ans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-f"+ 
									"amily: arial,helvetica,sans-serif; font-size: medium; color: #808080;'><img id='"+ 
									"widget_embedcontent_${refid}25' class='widget_inline' style='display: block; padd"+ 
									"ing: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/content.png' data-"+ 
									"mce-src='devwidgets/embedcontent/images/content.png' data-mce-style='display: bl"+ 
									"ock; padding: 10px; margin: 4px;' border='1'><br></span><br></p><h1 style='color"+ 
									": rgb(102, 102, 102); font-size: 22px; margin: 20px 0pt 15px; font-weight: norma"+ 
									"l;' data-mce-style='color: #666666; font-size: 22px; margin: 20px 0pt 15px; font"+ 
									"-weight: normal;'>Lab/Coursework Timetables for &lt;Part X&gt;<br></h1><hr style"+ 
									"='color: rgb(255, 0, 0); background-color: rgb(232, 232, 232); height: 5px; bord"+ 
									"er: 0pt none;' data-mce-style='color: #ff0000; background-color: #e8e8e8; height"+ 
									": 5px; border: 0pt none;'><p><br><span style='font-family: arial,helvetica,sans-"+ 
									"serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-style='font-famil"+ 
									"y: arial,helvetica,sans-serif; font-size: medium; color: #808080;'>Below you wil"+ 
									"l find the timetables for the Lab sessions.<br><br></span></p><p style='padding-"+ 
									"left: 30px;' data-mce-style='padding-left: 30px;'><span style='font-family: aria"+ 
									"l,helvetica,sans-serif; font-size: medium; color: rgb(128, 128, 128);' data-mce-"+ 
									"style='font-family: arial,helvetica,sans-serif; font-size: medium; color: #80808"+ 
									"0;'><img id='widget_embedcontent_${refid}26' class='widget_inline' style='display"+ 
									": block; padding: 10px; margin: 4px;' src='/devwidgets/embedcontent/images/conte"+ 
									"nt.png' data-mce-src='devwidgets/embedcontent/images/content.png' data-mce-style"+ 
									"='display: block; padding: 10px; margin: 4px;' border='1'><br></span></p>" 
							},
							"${refid}23": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}24": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}25": {
								embedcontent: {
								    "embedmethod": "thumbnail",
								    "sakai:indexed-fields": "title,description",
								    "download": false,
								    "sling:resourceType": "sakai/widget-data",
								    "title": "",
								    "details": false,
								    "description": "",
								    "layout": "horizontal",
								    "name": true
								}
							},
							"${refid}26": {
								comments: {
									"sakai:allowanonymous": false,
								   	"sakai:type": "comment",
								   	"direction": "comments_FirstUp",
								   	"perPage": 5
								}
							},
                        },
                        "${pid}6": {
                            structure0: {
                                "fast-feedback":{
                                    "_ref":"${refid}27",
                                    "_order":4,
                                    "_nonEditable": true,
                                    "_title":"Fast Feedback",
                                    "main":{
                                        "_ref":"${refid}27",
                                        "_order":0,
                                        "_nonEditable": true,
                                        "_title":"Fast Feedback"
                                    }
                                }
                            },
                            "${refid}27": {
                                page: "<img id='widget_fastfeedback_${refid}27' class='widget_inline' style='display: blo"+ 
								"ck; padding: 10px; margin: 4px;' src='/devwidgets/fastfeedback/images/icon.png' "+ 
								"data-mce-src='/devwidgets/fastfeedback/images/icon.png' data-mce-style='display:"+ 
								" block; padding: 10px; margin: 4px;' border='1'></p>"
                            },
							"${refid}28": {
                             	fastfeedback:{
                             		
                             	}
							}
                        }
                    },
                    structure: {
                        "participants": {
                            "_title": "Participants",
                            "_order": 5,
                            "_docref": "${pid}0",
                            "_nonEditable": true,
                            "_view": ["everyone", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "syllabus": {
                            "_title": "Syllabus",
                            "_order": 1,
                            "_docref": "${pid}1",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "content": {
                            "_title": "Lecture Materials",
                            "_order": 2,
                            "_docref": "${pid}2",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "lectures": {
                            "_title": "Lectures",
                            "_order": 4,
                            "_docref": "${pid}3",
                            "_nonEditable": true,
                            "_view": ["everyone", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "about": {
                            "_title": "About",
                            "_order": 0,
                            "_docref": "${pid}4",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "timetables": {
                            "_title": "Timetables",
                            "_order": 3,
                            "_docref": "${pid}5",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        },
                        "fast-feedback": {
                            "_title": "Fast Feedback",
                            "_order": 6,
                            "_docref": "${pid}6",
                            "_nonEditable": true,
                            "_view": ["everyone", "-student", "-observer", "-ts"],
                            "_edit": ["-ts"]
                        }
                    },
                    joinRole: "observer",
                    creatorRole: "ts"
               }
            ]
        },
        {
            id: "collaborations",
            title: "COLLABORATIONS",
            titleSing: "COLLABORATIONS",
            templates: [
            	{
                    id: "supervision",
                    title: "Supervision",
                    img: "/dev/images/worldtemplates/supervision-full.png",
                    fullImg: "/dev/images/worldtemplates/supervision.png",
                    perfectFor: "organising supervisions, using an About section, a Schedule page, an overview"+
                    " of the supervision sessions and Participants.",
				   	roles: [
				        {
				            id: "student",
				            roleTitle: "Students",
				            title: "Student",
				            allowManage: false
				        },
				        {
				            id: "observer",
				            roleTitle: "Observers",
				            title: "Observer",
				            allowManage: false
				        },
				       	{
				            id: "supervisor",
				            roleTitle: "Supervisors",
				            title: "Supervisor",
				            allowManage: true
				        }
				    ],
                    docs: {
                        "${pid}0": {
                            structure0: {
                                "participants":{
                                    "_ref":"${refid}0",
                                    "_order":0,
                                    "_nonEditable": true,
                                    "_title":"Participants",
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
                        },
                        "${pid}1": {
                             structure0: {
                                "about": {
                                    "_ref":"${refid}3",
                                    "_order":0,
                                    "_title":"About",
                                    "main": {
                                        "_ref":"${refid}3",
                                        "_order":0,
                                        "_title":"About"
                                    }
                                }
                            },
                            "${refid}3": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>About</span><"+ 
								"br></h1><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: s"+ 
								"mall; color: rgb(0, 0, 0);\'><img src=\'http://www.eng.cam.ac.uk/admissions/imag"+ 
								"es/yr2a.jpg\' alt=\'2nd year lab\' class=\'pic_right block_image_right\' style=\'"+ 
								"border: 1px solid rgb(204, 102, 51); margin: 0px 0px 5px 8px; float: right;\' a"+ 
								"lign=\'right\' height=\'119\' width=\'183\'>Lorem ipsum dolor sit amet, consecte"+ 
								"tur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliqu"+ 
								"am tristique mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lo"+ 
								"rem, eu auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu"+ 
								", tristique \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris se"+ 
								"d \njusto vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n n"+ 
								"isl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra"+ 
								" dapibus felis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br><"+ 
								"/p><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small;"+ 
								" color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana, Arial, Helvetica,"+ 
								" sans-serif; font-size: small; color: #000000;\'><br><meta charset=\'utf-8\'><sp"+ 
								"an class=\'Apple-style-span\' style=\'line-height: normal; font-size: medium;\'>"+ 
								"</span></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px;"+ 
								" font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204"+ 
								", 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Wh"+ 
								"en</span><br></h1><p>E.g. Every Tuesday and Thursday from 1.30 pm until 5.30 pm,"+ 
								"<br>or Group 1, 2 and 3 on Tuesdays, Group 4 and 5 on Thursdays.<br>To determine"+ 
								" your timeslot, please have a look at 'Schedule'.<br></p><p style=\'font-family:"+ 
								" Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);\'><b"+ 
								"r></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font"+ 
								"-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204"+ 
								", 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Where</"+ 
								"span><br></h1>\n<p style=\'\'>E.g. Austin Building, Room 1 <br>XXX College</p><p"+ 
								" style=\'padding-left: 30px;\'><br><img id=\'widget_embedcontent_${refid}4\' cla"+ 
								"ss=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'"+ 
								"/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedco"+ 
								"ntent/images/content.png\' data-mce-style=\'display: block; padding: 10px; margi"+ 
								"n: 4px;\' border=\'1\'><br><br></p><h1 style=\'font-family: Arial,Helvetica,sans"+ 
								"-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bot"+ 
								"tom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color"+ 
								": rgb(29, 95, 144);\'>Contact</span><br></h1>\n<p style=\'\'>Supervisors' First "+ 
								"and Last Name<br>E.g. Austin Building, Room 1 <br>XXX College<br><span style=\'c"+ 
								"olor: rgb(128, 128, 128);\'><em>(to deliver your homework or to ask urgent quest"+ 
								"ions)</em></span><br></p><p style=\'\'>Mobile: 0123 456 789<br><span style=\'col"+ 
								"or: rgb(128, 128, 128);\'><em>(if you ever need me in a hurry)</em></span><br><b"+ 
								"r><br></p><p><br></p><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif;"+ 
								" font-size: small; color: rgb(0, 0, 0);\'><br></p><p style=\'font-family: Verdan"+ 
								"a,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0);\'>&nbsp;<br"+ 
								"><br></p>"
                            },
                            "${refid}4": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
                            }
                        },
						"${pid}3": {
                             structure0: {
                                "guidelines-for-supervisors": {
                                    "_ref":"${refid}4",
                                    "_order":1,
                                    "_title":"Guidelines-for-supervisors",
                                    "main": {
                                        "_ref":"${refid}4",
                                        "_order":1,
                                        "_title":"Guidelines-for-supervisors"
                                    }
                                }
                            },
                           "${refid}4": {
                                page: "<p><img src=\'/devwidgets/remotecontent/images/remotecontent.png\' id=\'widget_r"+ 
								"emotecontent_${refid}5\' class=\'widget_inline\' style=\'display: block; padding:"+ 
								" 10px; margin: 4px;\' border=\'1\'></p><p></p><p></p>"
                           },
                           "${refid}5": {
                           		remotecontent:{
                           			"width_unit": "%",
                           			"height": "800",
                           			"width": "100",
                           			"border_color": "cccccc",
                           			"url": "http://www.eng.cam.ac.uk/teaching/teachoff/NewSupsGuide.html",
                           			"border_size": 0
                           		}
                           }
                       },
                       "${pid}4": {
                             structure0: {
                                "schedule": {
                                    "_ref":"${refid}6",
                                    "_order":2,
                                    "_title":"Schedule",
                                    "main": {
                                        "_ref":"${refid}6",
                                        "_order":2,
                                        "_title":"Schedule"
                                    }
                                }
                            },
                           "${refid}6": {
                                page: "<p>Please sign up for supervisions below by choosing 'Edit page', then replacing"+ 
								" '&lt;names&gt;' with your name(s), then choosing 'Save'.<br><br></p><h1 style=\'"+ 
								"font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; co"+ 
								"lor: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: "+ 
								"0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Title Session 1 </span><"+ 
								"br></h1><p><strong><br>When:</strong> Tuesday X Month, 20XX<br><strong>Where:</s"+ 
								"trong> at Austin Building, Room 1, XXX College</p><table style=\'width: 706px; h"+ 
								"eight: 101px; border: 1px solid rgb(141, 144, 141);\' border=\'1\' frame=\'borde"+ 
								"r\' rules=\'all\'><tbody><tr><td><strong>Timeslot</strong><br data-mce-bogus=\'1"+ 
								"\'></td><td><strong>Your names</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbs"+ 
								"p;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br data-mce-bogus=\'1\'></td></tr><tr><td>1:30"+ 
								" pm<br data-mce-bogus=\'1\'></td><td>&lt;names&gt;<br data-mce-bogus=\'1\'></td>"+ 
								"</tr><tr><td>2:30 pm</td><td>&lt;names&gt;</td></tr><tr><td>3:30 pm</td><td>&lt;"+ 
								"names&gt;</td></tr><tr><td>4:30 pm</td><td>&lt;names&gt;</td></tr></tbody></tabl"+ 
								"e><p><br><br><br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-s"+ 
								"ize: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dott"+ 
								"ed rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, "+ 
								"144);\'>Title Session 2</span><br></h1><p><strong><br>\nWhen:</strong> Tuesday X"+ 
								" Month, 20XX<br><strong>Where:</strong> at Austin Building, Room 1, XXX College<"+ 
								"br></p><table style=\'width: 706px; height: 101px; border: 1px solid rgb(141, 14"+ 
								"4, 141);\' border=\'1\' frame=\'border\' rules=\'all\'><tbody><tr><td><strong>Ti"+ 
								"meslot</strong><br data-mce-bogus=\'1\'></td><td><strong>Your names</strong> &nb"+ 
								"sp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br data-m"+ 
								"ce-bogus=\'1\'></td></tr><tr><td>1:30 pm<br data-mce-bogus=\'1\'></td><td>&lt;na"+ 
								"mes&gt;<br data-mce-bogus=\'1\'></td></tr><tr><td>2:30 pm</td><td>&lt;names&gt;<"+ 
								"/td></tr><tr><td>3:30 pm</td><td>&lt;names&gt;</td></tr><tr><td>4:30 pm</td><td>"+ 
								"&lt;names&gt;</td></tr></tbody></table><p><br></p><p><br><br></p><h1 style=\'fon"+ 
								"t-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color:"+ 
								" rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px "+ 
								"0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Comments &amp; Questions</sp"+ 
								"an><br></h1><p>If you have any comments or questions about arranging the time sl"+ 
								"ots, you can ask them here.<br><br><img id=\'widget_comments_${refid}7\' class=\'w"+ 
								"idget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'/devw"+ 
								"idgets/comments/images/comments.png\' data-mce-src=\'devwidgets/comments/images/"+ 
								"comments.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' bo"+ 
								"rder=\'1\'><br></p><p><br><br></p>"
                           },
							"${refid}7": {
                           		comments: {
								   "sakai:allowanonymous": false,
								   "sakai:type": "comment",
								   "direction": "comments_FirstUp",
								   "perPage": 5
								}
							}
						},
						"${pid}5": {
                             structure0: {
                                "session1": {
                                    "_ref":"${refid}16",
                                    "_order":3,
                                    "_title":"Title Session 1",
                                    "main": {
                                        "_ref":"${refid}16",
                                        "_order":0,
                                        "_title":"Title Session 1"
                                    }
                                },
                                "session2": {
                                    "_ref":"${refid}8",
                                    "_order":3,
                                    "_title":"Title Session 2",
                                    "main": {
                                        "_ref":"${refid}8",
                                        "_order":0,
                                        "_title":"Title Session 2"
                                    }
                                },
                                "session3": {
                                    "_ref":"${refid}22",
                                    "_order":3,
                                    "_title":"Title Session 3",
                                    "main": {
                                        "_ref":"${refid}22",
                                        "_order":0,
                                        "_title":"Title Session 3"
                                    }
                                }
                            },
                           "${refid}8": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Title Ses"+ 
								"sion 2&gt; (e.g. Paper/Set of questions of that paper etc) </span><br></h1><p st"+ 
								"yle=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: "+ 
								"rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif"+ 
								"; font-size: small; color: #000000;\'><br><br></p><table class=\'mceItemTable\' "+ 
								"style=\'background-color: rgb(232, 241, 248); width: 699px; height: 138px;\' bor"+ 
								"der=\'0\'><tbody><tr><td style=\'padding-left: 30px;\'><strong>When:</strong> Th"+ 
								"ursday X Month, 20XX<br><br><strong>Where:</strong> at Austin Building, Room 1, "+ 
								"XXX College<br><br><strong>Times:</strong> cf. 'Schedule'<br><br><strong>Prerequ"+ 
								"isites:</strong> Bring Handbook XXX, Make sure you've read 1.2 (p15-25)</td></tr"+ 
								"></tbody></table><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; fon"+ 
								"t-size: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Aria"+ 
								"l,Helvetica,sans-serif; font-size: small; color: #000000;\'><br><br></p><p style"+ 
								"=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb"+ 
								"(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif; f"+ 
								"ont-size: small; color: #000000;\'>Lorem ipsum dolor sit amet, consectetur adipi"+ 
								"scing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristi"+ 
								"que mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu a"+ 
								"uctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristiq"+ 
								"ue \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed \njusto"+ 
								" vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id au"+ 
								"ctor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapibus "+ 
								"felis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br></p><p sty"+ 
								"le=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: r"+ 
								"gb(0, 0, 0);\'><img id=\'widget_embedcontent_${refid}11\' class=\'widget_inline\'"+ 
								" style=\'display: block; padding: 10px; margin: 4px;\' src=\'https://ucamoae.car"+ 
								"et.cam.ac.uk/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidg"+ 
								"ets/embedcontent/images/content.png\' data-mce-style=\'display: block; padding: "+ 
								"10px; margin: 4px;\' border=\'1\'><br><br><br><span class=\'Apple-style-span\' s"+ 
								"tyle=\'line-height: normal; font-size: medium;\' data-mce-style=\'line-height: n"+ 
								"ormal; font-size: medium;\'></span></p><h1 style=\'font-family: Arial,Helvetica,"+ 
								"sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border"+ 
								"-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'c"+ 
								"olor: rgb(29, 95, 144);\'>Homework for &lt;Title session 2&gt;</span><br></h1><p"+ 
								"><br><br>Answer questions 9 and 10 from the past papers, and complete the D sect"+ 
								"ion of the practical exam. <br>Please\n hand in work by Xday, 10 pm at my colleg"+ 
								"e (don't forget to mention my \nname to the porter), or email it to me by that s"+ 
								"ame time.<br><br><strong>Extra question to discuss with your group members:</str"+ 
								"ong><br><br>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean c"+ 
								"ommodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molestie? "+ 
								"<br><br> <br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size:"+ 
								" 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted r"+ 
								"gb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144)"+ 
								";\'>Related Materials</span><br></h1>\n<p style=\'\'><br><br><span style=\'color"+ 
								": rgb(128, 128, 128); font-size: large;\'>Related Lecture Notes</span><br><br></"+ 
								"p><p style=\'padding-left: 30px;\' data-mce-style=\'padding-left: 30px;\'><img i"+ 
								"d=\'widget_embedcontent_${refid}12\' class=\'widget_inline\' style=\'display: blo"+ 
								"ck; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content."+ 
								"png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style"+ 
								"=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br><br><span styl"+ 
								"e=\'color: rgb(32, 89, 141);\' data-mce-style=\'color: #20598d;\'></span></p><p "+ 
								"style=\'\'><span style=\'color: rgb(32, 89, 141);\'></span><span style=\'color: "+ 
								"rgb(128, 128, 128); font-size: large;\'>Past exam papers</span><br><span style=\'"+ 
								"color: rgb(32, 89, 141);\'><br></span></p><p style=\'padding-left: 30px;\' data"+ 
								"-mce-style=\'padding-left: 30px;\'><img id=\'widget_embedcontent_${refid}13\' cla"+ 
								"ss=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'"+ 
								"/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedco"+ 
								"ntent/images/content.png\' data-mce-style=\'display: block; padding: 10px; margi"+ 
								"n: 4px;\' border=\'1\'><br><br><span style=\'color: rgb(32, 89, 141);\' data-mce"+ 
								"-style=\'color: #20598d;\'></span></p><p style=\'\'><span style=\'color: rgb(32,"+ 
								" 89, 141);\'></span><span style=\'color: rgb(128, 128, 128); font-size: large;\'"+ 
								">Other Useful Information<br></span></p><p style=\'padding-left: 30px;\' data-mc"+ 
								"e-style=\'padding-left: 30px;\'><span style=\'color: rgb(32, 89, 141);\' data-mc"+ 
								"e-style=\'color: #20598d;\'><br><img id=\'widget_embedcontent_${refid}14\' class="+ 
								"\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'/d"+ 
								"evwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedconte"+ 
								"nt/images/content.png\' data-mce-style=\'display: block; padding: 10px; margin: "+ 
								"4px;\' border=\'1\'><br></span></p><p style=\'padding-left: 30px;\' data-mce-sty"+ 
								"le=\'padding-left: 30px;\'><br><br></p><h1 style=\'font-family: Arial,Helvetica,"+ 
								"sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border"+ 
								"-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'c"+ 
								"olor: rgb(29, 95, 144);\'>Comments &amp; Questions</span><br></h1><p>If you have"+ 
								" any comments or questions about the exam papers or homework, you can mention th"+ 
								"em here.<br><br></p><p style=\'\'><img id=\'widget_comments_${refid}15\' class=\'"+ 
								"widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'/dev"+ 
								"widgets/comments/images/comments.png\' data-mce-src=\'devwidgets/comments/images"+ 
								"/comments.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' b"+ 
								"order=\'1\'><br><br></p><p><br></p>"
							},
							"${refid}11": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}12": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}13": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}14": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}15": {
								comments: {
								   "sakai:allowanonymous": false,
								   "sakai:type": "comment",
								   "direction": "comments_FirstUp",
								   "perPage": 5
								}
							},
							"${refid}16": {
								page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Title Ses"+ 
								"sion 1&gt; (e.g. Paper/Set of questions of that paper etc) </span><br></h1><p st"+ 
								"yle=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: "+ 
								"rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif"+ 
								"; font-size: small; color: #000000;\'><br><br></p><table class=\'mceItemTable\' "+ 
								"style=\'background-color: rgb(232, 241, 248); width: 699px; height: 138px;\' bor"+ 
								"der=\'0\'><tbody><tr><td style=\'padding-left: 30px;\'><strong>When:</strong> Tu"+ 
								"esday X Month, 20XX<br><br><strong>Where:</strong> at Austin Building, Room 1, X"+ 
								"XX College<br><br><strong>Times:</strong> cf. 'Schedule'<br><br><strong>Prerequi"+ 
								"sites:</strong> Bring Handbook XXX, Make sure you've read 1.1 (p5-15)</td></tr><"+ 
								"/tbody></table><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-"+ 
								"size: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,"+ 
								"Helvetica,sans-serif; font-size: small; color: #000000;\'><br><br></p><p style=\'"+ 
								"font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0"+ 
								", 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif; fon"+ 
								"t-size: small; color: #000000;\'>Lorem ipsum dolor sit amet, consectetur adipisc"+ 
								"ing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristiqu"+ 
								"e mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auc"+ 
								"tor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique"+ 
								" \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed \njusto v"+ 
								"ehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id auct"+ 
								"or. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapibus fe"+ 
								"lis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br><br></p><p s"+ 
								"tyle=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color:"+ 
								" rgb(0, 0, 0);\'><img id=\'widget_embedcontent_${refid}17\' class=\'widget_inline"+ 
								"\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embed"+ 
								"content/images/content.png\' data-mce-src=\'devwidgets/embedcontent/images/conte"+ 
								"nt.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'"+ 
								"1\'><br><br><span class=\'Apple-style-span\' style=\'line-height: normal; font-"+ 
								"size: medium;\' data-mce-style=\'line-height: normal; font-size: medium;\'></spa"+ 
								"n></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font"+ 
								"-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204"+ 
								", 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Homewor"+ 
								"k for &lt;Title session 1&gt;</span><br></h1><p><br><br>Answer questions 7 and 8"+ 
								" from the past papers, and complete the C section of the practical exam. <br>Ple"+ 
								"ase hand in work by Xday, 10 pm at my college (don't forget to mention my name t"+ 
								"o the porter), or email it to me by that same time.<br><br> <br></p><h1 style=\'"+ 
								"font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; col"+ 
								"or: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0"+ 
								"px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Related Materials</span><"+ 
								"br></h1>\n<p style=\'\'><br><br><span style=\'color: rgb(128, 128, 128); font-si"+ 
								"ze: large;\'>Related Lecture Notes</span><br><br></p><p style=\'padding-left: 30"+ 
								"px;\' data-mce-style=\'padding-left: 30px;\'><img id=\'widget_embedcontent_${refid}18"+ 
								"\' class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4p"+ 
								"x;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidge"+ 
								"ts/embedcontent/images/content.png\' data-mce-style=\'display: block; padding: 1"+ 
								"0px; margin: 4px;\' border=\'1\'><br><span style=\'color: rgb(32, 89, 141);\' da"+ 
								"ta-mce-style=\'color: #20598d;\'></span></p><p style=\'\'><span style=\'color: r"+ 
								"gb(32, 89, 141);\'></span><span style=\'color: rgb(128, 128, 128); font-size: la"+ 
								"rge;\'>Past exam papers</span><br><span style=\'color: rgb(32, 89, 141);\'><br><"+ 
								"/span></p><p style=\'padding-left: 30px;\' data-mce-style=\'padding-left: 30px;\'"+ 
								"><img id=\'widget_embedcontent_${refid}19\' class=\'widget_inline\' style=\'disp"+ 
								"lay: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/"+ 
								"content.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-m"+ 
								"ce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br><br><s"+ 
								"pan style=\'color: rgb(32, 89, 141);\' data-mce-style=\'color: #20598d;\'></span"+ 
								"></p><p style=\'\'><span style=\'color: rgb(32, 89, 141);\'></span><span style=\'"+ 
								"color: rgb(128, 128, 128); font-size: large;\'>Other Useful Information<br></sp"+ 
								"an></p><p style=\'padding-left: 30px;\' data-mce-style=\'padding-left: 30px;\'><"+ 
								"span style=\'color: rgb(32, 89, 141);\' data-mce-style=\'color: #20598d;\'><img "+ 
								"id=\'widget_embedcontent_${refid}20\' class=\'widget_inline\' style=\'display: blo"+ 
								"ck; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content."+ 
								"png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style"+ 
								"=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br></span></p><p "+ 
								"style=\'padding-left: 30px;\' data-mce-style=\'padding-left: 30px;\'><br><br></p"+ 
								"><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weig"+ 
								"ht: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204"+ 
								"); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Comments &am"+ 
								"p; Questions</span><br></h1><p>If you have any comments or questions about the e"+ 
								"xam papers or homework, you can mention them here.<br><br></p><p style=\'\' data"+ 
								"-mce-style=\'\'><img id=\'widget_comments_${refid}21\' class=\'widget_inline\' st"+ 
								"yle=\'display: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/comments/i"+ 
								"mages/comments.png\' data-mce-src=\'devwidgets/comments/images/comments.png\' da"+ 
								"ta-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p"+ 
								"><p><br></p>"
							},
							"${refid}17": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}18": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}19": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}20": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}21": {
								comments: {
								   "sakai:allowanonymous": false,
								   "sakai:type": "comment",
								   "direction": "comments_FirstUp",
								   "perPage": 5
								}
							},
							"${refid}22": {
								page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Title Ses"+ 
								"sion 3&gt; (e.g. Paper/Set of questions of that paper etc) </span><br></h1><p st"+ 
								"yle=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: "+ 
								"rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif"+ 
								"; font-size: small; color: #000000;\'><br><br></p><table class=\'mceItemTable\' "+ 
								"style=\'background-color: rgb(232, 241, 248); width: 699px; height: 138px;\' bor"+ 
								"der=\'0\'><tbody><tr><td style=\'padding-left: 30px;\'><strong>When:</strong> Tu"+ 
								"esday X Month, 20XX<br><br><strong>Where:</strong> at Austin Building, Room 1, X"+ 
								"XX College<br><br><strong>Times:</strong> cf. 'Schedule'<br><br><strong>Prerequi"+ 
								"sites:</strong> Bring Handbook XXX, Make sure you've read 1.3 (p25-36)</td></tr>"+ 
								"</tbody></table><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font"+ 
								"-size: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial"+ 
								",Helvetica,sans-serif; font-size: small; color: #000000;\'><br><br></p><p style="+ 
								"\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb("+ 
								"0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif; fo"+ 
								"nt-size: small; color: #000000;\'>Lorem ipsum dolor sit amet, consectetur adipis"+ 
								"cing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristiq"+ 
								"ue mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu au"+ 
								"ctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristiqu"+ 
								"e \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed \njusto "+ 
								"vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id auc"+ 
								"tor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapibus f"+ 
								"elis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br><br></p><p "+ 
								"style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color"+ 
								": rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-ser"+ 
								"if; font-size: small; color: #000000;\'><img id=\'widget_embedcontent_${refid}23\'"+ 
								" class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' "+ 
								"src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/em"+ 
								"bedcontent/images/content.png\' data-mce-style=\'display: block; padding: 10px; "+ 
								"margin: 4px;\' border=\'1\'><br><br><br><span class=\'Apple-style-span\' style=\'"+ 
								"line-height: normal; font-size: medium;\' data-mce-style=\'line-height: normal;"+ 
								" font-size: medium;\'></span></p><h1 style=\'font-family: Arial,Helvetica,sans-s"+ 
								"erif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-botto"+ 
								"m: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: "+ 
								"rgb(29, 95, 144);\'>Homework for &lt;Title session 3&gt;</span><br></h1><p><br><"+ 
								"br>Answer questions 3 and 4 from the past papers, and complete the A section of "+ 
								"the practical exam. <br>Please\n hand in work by Xday, 10 pm at my college (don'"+ 
								"t forget to mention my \nname to the porter), or email it to me by that same tim"+ 
								"e.<br><br> <br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-siz"+ 
								"e: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted"+ 
								" rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 14"+ 
								"4);\'>Related Materials</span><br></h1>\n<p style=\'\'><br><br><span style=\'col"+ 
								"or: rgb(128, 128, 128); font-size: large;\'>Related Lecture Notes</span><br><br>"+ 
								"</p><p style=\'padding-left: 30px;\' data-mce-style=\'padding-left: 30px;\'><img"+ 
								" id=\'widget_embedcontent_${refid}24 \' class=\'widget_inline\' style=\'display: b"+ 
								"lock; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/conten"+ 
								"t.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-sty"+ 
								"le=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br><span style="+ 
								"\'color: rgb(32, 89, 141);\' data-mce-style=\'color: #20598d;\'></span></p><p st"+ 
								"yle=\'\'><span style=\'color: rgb(32, 89, 141);\'></span><span style=\'color: rg"+ 
								"b(128, 128, 128); font-size: large;\'>Past exam papers</span><br><span style=\'c"+ 
								"olor: rgb(32, 89, 141);\'><br></span></p><p style=\'padding-left: 30px;\' data-m"+ 
								"ce-style=\'padding-left: 30px;\'><img id=\'widget_embedcontent_${refid}25 \' class"+ 
								"=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'/"+ 
								"devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedcont"+ 
								"ent/images/content.png\' data-mce-style=\'display: block; padding: 10px; margin:"+ 
								" 4px;\' border=\'1\'><br><br><span style=\'color: rgb(32, 89, 141);\' data-mce-s"+ 
								"tyle=\'color: #20598d;\'></span></p><p style=\'\'><span style=\'color: rgb(32, 8"+ 
								"9, 141);\'></span><span style=\'color: rgb(128, 128, 128); font-size: large;\'>O"+ 
								"ther Useful Information<br></span></p><p style=\'padding-left: 30px;\' data-mce-"+ 
								"style=\'padding-left: 30px;\'><span style=\'color: rgb(32, 89, 141);\' data-mce-"+ 
								"style=\'color: #20598d;\'><img id=\'widget_embedcontent_${refid}26 \' class=\'widg"+ 
								"et_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'/devwidg"+ 
								"ets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedcontent/ima"+ 
								"ges/content.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\'"+ 
								" border=\'1\'><br></span></p><p style=\'padding-left: 30px;\' data-mce-style=\'p"+ 
								"adding-left: 30px;\'><br><br></p><h1 style=\'font-family: Arial,Helvetica,sans-s"+ 
								"erif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-botto"+ 
								"m: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: "+ 
								"rgb(29, 95, 144);\'>Comments &amp; Questions</span><br></h1><p>If you have any c"+ 
								"omments or questions about the exam papers or homework, you can mention them her"+ 
								"e.<br><br></p><p style=\'\' data-mce-style=\'\'><img id=\'widget_comments_${refid}27"+ 
								"\' class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px"+ 
								";\' src=\'/devwidgets/comments/images/comments.png\' data-mce-src=\'devwidgets/c"+ 
								"omments/images/comments.png\' data-mce-style=\'display: block; padding: 10px; ma"+ 
								"rgin: 4px;\' border=\'1\'><br></p><p><br></p>"
							},								
							"${refid}23": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}24": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}25": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}26": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}27": {
								comments: {
								   "sakai:allowanonymous": false,
								   "sakai:type": "comment",
								   "direction": "comments_FirstUp",
								   "perPage": 5
								}
							}
						}
                    },
                    structure: {
                        "participants": {
                            "_title": "Participants",
                            "_order": 4,
                            "_docref": "${pid}0",
                            "_nonEditable": true,
                            "_view": ["everyone", "-student", "-observer", "-supervisor"],
                            "_edit": ["-supervisor"]
                        },
                        "about": {
                            "_title": "About",
                            "_order": 0,
                            "_docref": "${pid}1",
                            "_nonEditable": false,
                            "_view": ["anonymous", "everyone", "-student", "-observer", "-supervisor"],
                            "_edit": ["-supervisor"]
                        },
                        "guidelines-for-supervisors": {
                            "_title": "Guidelines-for-supervisors",
                            "_order": 1,
                            "_docref": "${pid}3",
                            "_nonEditable": false,
                            "_view": ["-supervisor"],
                            "_edit": ["-supervisor"]
                        },
                        "schedule": {
                            "_title": "Schedule",
                            "_order": 2,
                            "_docref": "${pid}4",
                            "_nonEditable": false,
                            "_view": ["everyone","-student", "-observer", "-supervisor"],
                            "_edit": ["-student", "-supervisor"]
                        },
                        "supervision-sessions": {
                            "_title": "Supervision-Sessions",
                            "_order": 3,
                            "_docref": "${pid}5",
                            "_nonEditable": false,
                            "_view": ["everyone", "-student", "-observer", "-supervisor"],
                            "_edit": ["-supervisor"]
                        }
                    },
                    joinRole: "student",
                    creatorRole: "supervisor"
				},
				{
				    id: "researchgroup",
				    title: "Research group",
				    img: "/dev/images/worldtemplates/researchgrouptemplate1.png",
				    fullImg: "/dev/images/worldtemplates/researchgrouptemplate1-full.png",
				    perfectFor: "Group collaborations and sharing, using sections to describe your research and collaborate "+
					"on it internally, to list Events and Meetings and collaborate on Funding.",
				    roles: [
				        {
                            id: "lead",
                            roleTitle: "Lead",
                            title: "Lead",
                            allowManage: true
                       	},
                       	{
                            id: "researcher",
                            roleTitle: "Researchers",
                            title: "Researcher",
                            allowManage: false
                       	},
                       	{
                            id: "mentor",
                            roleTitle: "Mentors",
                            title: "Mentor",
                            allowManage: false
                       	},
				        {
				            id: "observer",
				            roleTitle: "Observers",
				            title: "Observer",
				            allowManage: false
				        }
				    ],
				    docs: {
				        "${pid}0": {
				            structure0: {
				                "library":{
				                    "_ref":"${refid}0",
				                    "_order":7,
				                    "_nonEditable": true,
				                    "_title": "Library",
				                    "main":{
				                        "_ref":"${refid}0",
				                        "_order":0,
				                        "_nonEditable": true,
				                        "_title":"Library"
				                    }
				                }
				            },
				            "${refid}0": {
				                page: "<img id='widget_mylibrary_${refid}1' class='widget_inline' style='display: blo"+
				                "ck; padding: 10px; margin: 4px;' src='/devwidgets/mylibrary/images/mylibrary.pn"+
				                "g' data-mce-src='/devwidgets/mylibrary/images/mylibrary.png' data-mce-style='di"+
				                "splay: block; padding: 10px; margin: 4px;' border='1'><br></p>"
				            },
				            "${refid}1": {
				                mylibrary: {
				                    "groupid": "${groupid}"
				                }
				            }
				        },
				        "${pid}1": {
				            structure0: {
				                "participants":{
				                    "_ref":"${refid}2",
				                    "_order":8,
				                    "_title":"Participants",
				                    "_nonEditable": true,
				                    "main":{
				                        "_ref":"${refid}2",
				                        "_order":0,
				                        "_nonEditable": true,
				                        "_title":"Participants"
				                    }
				                }
				            },
				            "${refid}2": {
				                page: "<img id='widget_participants_${refid}3' class='widget_inline' style='display: "+
				                "block; padding: 10px; margin: 4px;' src='/devwidgets/participants/images/partic"+
				                "ipants.png' data-mce-src='/devwidgets/participants/images/participants.png' dat"+
				                "a-mce-style='display: block; padding: 10px; margin: 4px;' border='1'><br></p>"
				            },
				            "${refid}3": {
				                participants: {
				                    "groupid": "${groupid}"
				                }
				            }
				        },
				        "${pid}2": {
				            structure0: {
				                "about":{
				                    "_ref":"${refid}4",
				                    "_order":0,
				                    "_title":"About",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}4",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"About"
				                    }
				                }
				            },
				            "${refid}4": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>About the pro"+ 
								"ject</span><br></h1><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; "+ 
								"font-size: small; color: rgb(0, 0, 0);\'><img src=\'http://www.eng.cam.ac.uk/adm"+ 
								"issions/images/yr2a.jpg\' alt=\'2nd year lab\' class=\'pic_right block_image_rig"+ 
								"ht\' style=\'border: 1px solid rgb(204, 102, 51); margin: 0px 0px 5px 8px; float"+ 
								": right;\' align=\'right\' height=\'119\' width=\'183\'>Lorem ipsum dolor sit am"+ 
								"et, consectetur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Q"+ 
								"uisque aliquam tristique mi at molestie. \nMauris vitae sapien mauris. Ut pulvin"+ 
								"ar sapien lorem, eu auctor sem. \nNulla vehicula sodales sollicitudin. Praesent "+ 
								"id diam arcu, tristique \nauctor sem. Pellentesque non porta lacus. Morbi molest"+ 
								"ie mauris sed \njusto vehicula vulputate. Aliquam erat volutpat. Integer placera"+ 
								"t tempor\n nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aene"+ 
								"an\n viverra dapibus felis eget cursus. Maecenas suscipit tincidunt \nvestibulum"+ 
								".\n<br><br></p><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-"+ 
								"size: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana, Arial"+ 
								", Helvetica, sans-serif; font-size: small; color: #000000;\'><br><meta charset=\'"+ 
								"utf-8\'><span class=\'Apple-style-span\' style=\'line-height: normal; font-size"+ 
								": medium;\'></span></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font"+ 
								"-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin do"+ 
								"tted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95"+ 
								", 144);\'>The team</span><br></h1><p>We're very happy to help you answer questio"+ 
								"ns about our project. <br><br><br><img id=\'widget_embedcontent_${refid}5\' clas"+ 
								"s=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'"+ 
								"/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedcon"+ 
								"tent/images/content.png\' data-mce-style=\'display: block; padding: 10px; margin"+ 
								": 4px;\' border=\'1\'><br></p><h1 style=\'font-family: Arial,Helvetica,sans-seri"+ 
								"f; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: "+ 
								"thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb"+ 
								"(29, 95, 144);\'>Contact us</span><br></h1>\n<p style=\'\'>Project Name<br>Addre"+ 
								"ss<span style=\'color: rgb(128, 128, 128);\'><em></em></span><br></p>\n<p style="+ 
								"\'\'></p><p style=\'\'>Mobile: 0123 456 789<br><span style=\'color: rgb(128, 128"+ 
								", 128);\'><em></em></span>Fax: 0123 456 789<br>Email: projectsname @ mail.com<br"+ 
								"><span style=\'color: rgb(128, 128, 128);\'><em></em></span><br><span style=\'co"+ 
								"lor: rgb(128, 128, 128);\'><em></em></span>Or follow us on Twitter: Name project"+ 
								"<br><br></p><p><br></p><p style=\'font-family: Verdana,Arial,Helvetica,sans-seri"+ 
								"f; font-size: small; color: rgb(0, 0, 0);\'><br></p>"
				            },
							"${refid}5": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							}
				       	},
				       	"${pid}3": {
				            structure0: {
				                "schedule-announcements":{
				                    "_ref":"${refid}6",
				                    "_order":1,
				                    "_title":"Schedule & Announcements",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}6",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Schedule & Announcements"
				                    }
				                }
				            },
				            "${refid}6": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Schedule</spa"+ 
								"n><br></h1><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size"+ 
								": small; color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helv"+ 
								"etica,sans-serif; font-size: small; color: #000000;\'><span style=\'color: rgb(1"+ 
								"36, 136, 136);\'>&lt;Google Calendar / Calendar to be added&gt;</span><br></p><p"+ 
								" style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; colo"+ 
								"r: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana, Arial, Helvetica, sans"+ 
								"-serif; font-size: small; color: #000000;\'><br><meta charset=\'utf-8\'><span cl"+ 
								"ass=\'Apple-style-span\' style=\'line-height: normal; font-size: medium;\'></spa"+ 
								"n></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font"+ 
								"-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204"+ 
								", 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Announc"+ 
								"ements </span></h1><p><br></p><p style=\'\'><strong>2. We've now arranged anothe"+ 
								"r meeting on &lt;date&gt;!</strong><br></p><p style=\'\'>Lorem ipsum dolor sit a"+ 
								"met, consectetur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. "+ 
								"Quisque aliquam tristique mi at molestie. \nMauris vitae sapien mauris.<br><stro"+ 
								"ng><br><br>1. Welcome to the &lt;Project's name&gt; site!</strong><br></p><p sty"+ 
								"le=\'\'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo "+ 
								"\ndignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. \nMauri"+ 
								"s vitae sapien mauris. </p>"
				            }
						},
						"${pid}4": {
				            structure0: {
				                "phase1":{
				                    "_ref":"${refid}7",
				                    "_order":0,
				                    "_title":"Phase 1",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}7",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Phase 1"
				                   	}
								},
								"phase2":{
				                    "_ref":"${refid}8",
				                    "_order":1,
				                    "_title":"Phase 2",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}8",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Phase 2"
				                    }  
				               },
				               "papers":{
				                    "_ref":"${refid}9",
				                    "_order":2,
				                    "_title":"Papers",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}9",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Papers"
				                    }  
				               }
				            },
				            "${refid}7": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Phase 1: &lt;"+ 
								"name phase 1&gt;</span><br></h1><p style=\'font-family: Verdana,Arial,Helvetica,"+ 
								"sans-serif; font-size: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-famil"+ 
								"y: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;\'><br><"+ 
								"/p><table class=\'mceItemTable\' style=\'background-color: rgb(232, 241, 248);\'"+ 
								" border=\'0\' height=\'189\' width=\'699\'><tbody><tr><td style=\'padding-left: "+ 
								"30px;\'><strong><br>When:</strong> running from xx until xx<br><br><strong>Membe"+ 
								"rs working on it:</strong> Donatello Romeo, Laura Boyd<br><br><strong>Plans:</st"+ 
								"rong> 1. Discuss Project plan 2. Interviews 3. intermediate analysis ...<br><br>"+ 
								"<strong>Materials:</strong> Will need xxx and xxx<br><br><strong>Collaborations:"+ 
								"</strong> Contact &lt;Name person from other project&gt;<br>\n<br></td></tr></tb"+ 
								"ody></table><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-siz"+ 
								"e: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Hel"+ 
								"vetica,sans-serif; font-size: small; color: #000000;\'><br></p><p style=\'font-f"+ 
								"amily: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rgb(0, 0, 0)"+ 
								";\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size:"+ 
								" small; color: #000000;\'>Lorem ipsum dolor sit amet, consectetur adipiscing eli"+ 
								"t. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at"+ 
								" molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem"+ 
								". \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauct"+ 
								"or sem. Pellentesque non porta lacus. Morbi molestie mauris sed \njusto vehicula"+ 
								" vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id auctor. Ves"+ 
								"tibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapibus felis ege"+ 
								"t cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br><br><br><span class"+ 
								"=\'Apple-style-span\' style=\'line-height: normal; font-size: medium;\' data-mce"+ 
								"-style=\'line-height: normal; font-size: medium;\'></span></p><h1 style=\'font-f"+ 
								"amily: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rg"+ 
								"b(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px"+ 
								" 3px;\'><span style=\'color: rgb(29, 95, 144);\'>1. &lt;Plans topic 1&gt;</span>"+ 
								"<br></h1><p>Raw data, raw data, raw data, raw data, raw data etc.<br>Lorem ipsum"+ 
								" dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac f"+ 
								"ermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. "+ 
								"Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Pr"+ 
								"aesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi m"+ 
								"olestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer plac"+ 
								"erat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aen"+ 
								"ean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum. <"+ 
								"br><br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px;"+ 
								" font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204"+ 
								", 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144); font"+ 
								"-size: small;\'>Raw data:</span><img id=\'widget_embedcontent_${refid}10\' class=\'"+ 
								"widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'htt"+ 
								"ps://ucamoae.caret.cam.ac.uk/devwidgets/embedcontent/images/content.png\' data-m"+ 
								"ce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'display: "+ 
								"block; padding: 10px; margin: 4px;\' border=\'1\'><span style=\'color: rgb(29, 9"+ 
								"5, 144);\'><br>2. &lt;Plans topic 2&gt;</span><br></h1><p>Raw data, raw data, ra"+ 
								"w data, raw data, raw data etc.<br>Lorem ipsum dolor sit amet, consectetur adipi"+ 
								"scing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristi"+ 
								"que mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu a"+ 
								"uctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristiq"+ 
								"ue \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed \njusto"+ 
								" vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id au"+ 
								"ctor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapibus "+ 
								"felis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br></p><h1 st"+ 
								"yle=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bol"+ 
								"d; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padd"+ 
								"ing: 0px 0px 3px;\' data-mce-style=\'font-family: Arial,Helvetica,sans-serif; fo"+ 
								"nt-size: 21px; font-weight: bold; color: #cc6633; border-bottom: thin dotted #cc"+ 
								"cccc; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144); font-size: "+ 
								"small;\' data-mce-style=\'color: #1d5f90; font-size: small;\'>Raw data:<br></spa"+ 
								"n><span style=\'color: rgb(29, 95, 144);\' data-mce-style=\'color: #1d5f90;\'><i"+ 
								"mg id=\'widget_embedcontent_${refid}11\' class=\'widget_inline\' style=\'display:"+ 
								" block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/cont"+ 
								"ent.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-s"+ 
								"tyle=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br><br>3. &lt"+ 
								";Plans topic 3&gt;</span><br></h1>\n<p>Raw data, raw data, raw data, raw data, r"+ 
								"aw data etc.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean "+ 
								"commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molestie."+ 
								" \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNulla "+ 
								"vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauctor sem. Pe"+ 
								"llentesque non porta lacus. Morbi molestie mauris sed \njusto vehicula vulputate"+ 
								". Aliquam erat volutpat. Integer placerat tempor\n nisl id auctor. Vestibulum ac"+ 
								" velit in dolor pharetra elementum. Aenean\n viverra dapibus felis eget cursus. "+ 
								"Maecenas suscipit tincidunt \nvestibulum.\n<br><br><br></p><h1 style=\'font-fami"+ 
								"ly: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(2"+ 
								"04, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3p"+ 
								"x;\'><span style=\'color: rgb(29, 95, 144);\'>Conclusions &lt;Phase 1&gt;</span>"+ 
								"<br></h1>\n\n<p><strong>Summary of outputs:</strong><br><br>1. E.g. For the rese"+ 
								"arch, the participants showed us the results that .... <br>Lorem ipsum dolor sit"+ 
								" amet, consectetur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum"+ 
								". Quisque aliquam tristique mi at molestie. \nMauris vitae sapien mauris.<br><br"+ 
								">2. Ut pulvinar sapien lorem, eu auctor sem. \nNulla vehicula sodales sollicitud"+ 
								"in. Praesent id diam arcu, tristique \nauctor sem. Pellentesque non porta lacus."+ 
								" Morbi molestie mauris sed \njusto vehicula vulputate. Aliquam erat volutpat. In"+ 
								"teger placerat tempor\n nisl id auctor. Vestibulum ac velit in dolor pharetra el"+ 
								"ementum. Aenean\n viverra dapibus felis eget cursus. Maecenas suscipit tincidunt"+ 
								" \nvestibulum.\n<br><br><br></p><h1 style=\'font-family: Arial,Helvetica,sans-se"+ 
								"rif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom"+ 
								": thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: r"+ 
								"gb(29, 95, 144);\'>Reflection on &lt;Phase 1&gt;</span><br></h1>\n\n\n<p><strong"+ 
								">Things we could improve for future phases:</strong><br>1. e.g. we shouln't cont"+ 
								"act our partners by email but by phone, we should plan xxx better by doing xxx i"+ 
								"nstead of xxx<br><br><br><strong>Things we have to continue doing for future pha"+ 
								"ses:</strong><br>1. E.g. Our project meetings ran very smoothly because xxx, so "+ 
								"we definitly need to repeat xxx in the future.</p>\n\n<p><br></p><p><br><br> <br"+ 
								"></p>"
				            },
							"${refid}10": {
				            	embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
				         	},
				         	"${refid}11": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
				            "${refid}8": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Phase 2: &lt;"+ 
								"name phase 2&gt;</span><br></h1><p style=\'font-family: Verdana,Arial,Helvetica,"+ 
								"sans-serif; font-size: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-famil"+ 
								"y: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: #000000;\'><br><"+ 
								"/p><table class=\'mceItemTable\' style=\'background-color: rgb(232, 241, 248);\'"+ 
								" border=\'0\' height=\'189\' width=\'699\'><tbody><tr><td style=\'padding-left: "+ 
								"30px;\'><strong><br>When:</strong> running from xx until xx<br><br><strong>Membe"+ 
								"rs working on it:</strong> Laura Boyd, Peter Boss<br><br><strong>Plans:</strong>"+ 
								" 1. Review outputs and start further plan 2. Workshop 3. intermediate analysis ."+ 
								"..<br><br><strong>Materials:</strong> Will need xxx and xxx<br><br><strong>Colla"+ 
								"borations:</strong> Contact &lt;Name person from other project&gt;<br>\n<br></td"+ 
								"></tr></tbody></table><p style=\'font-family: Verdana,Arial,Helvetica,sans-serif"+ 
								"; font-size: small; color: rgb(0, 0, 0);\' data-mce-style=\'font-family: Verdana"+ 
								",Arial,Helvetica,sans-serif; font-size: small; color: #000000;\'><br></p><p styl"+ 
								"e=\'font-family: Verdana,Arial,Helvetica,sans-serif; font-size: small; color: rg"+ 
								"b(0, 0, 0);\' data-mce-style=\'font-family: Verdana,Arial,Helvetica,sans-serif; "+ 
								"font-size: small; color: #000000;\'>Lorem ipsum dolor sit amet, consectetur adip"+ 
								"iscing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam trist"+ 
								"ique mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu "+ 
								"auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristi"+ 
								"que \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed \njust"+ 
								"o vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id a"+ 
								"uctor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapibus"+ 
								" felis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br><br><br><"+ 
								"span class=\'Apple-style-span\' style=\'line-height: normal; font-size: medium;\'"+ 
								" data-mce-style=\'line-height: normal; font-size: medium;\'></span></p><h1 styl"+ 
								"e=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold;"+ 
								" color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); paddin"+ 
								"g: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>1. &lt;Plans topic 1&"+ 
								"gt;</span><br></h1><p>Raw data, raw data, raw data, raw data, raw data etc<br>Lo"+ 
								"rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim "+ 
								"quam ac fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien"+ 
								" mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollici"+ 
								"tudin. Praesent id diam arcu, tristique auctor sem. Pellentesque non porta lacus"+ 
								". Morbi molestie mauris sed justo vehicula vulputate. Aliquam erat volutpat. Int"+ 
								"eger placerat tempor nisl id auctor. Vestibulum ac velit in dolor pharetra eleme"+ 
								"ntum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit tincidunt vest"+ 
								"ibulum. <br><br><br><img id=\'widget_embedcontent_${refid}12\' class=\'widget_inl"+ 
								"ine\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/em"+ 
								"bedcontent/images/content.png\' data-mce-src=\'devwidgets/embedcontent/images/co"+ 
								"ntent.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' borde"+ 
								"r=\'1\'><br><br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-si"+ 
								"ze: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotte"+ 
								"d rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 1"+ 
								"44);\'>2. &lt;Plans topic 2&gt;</span><br></h1><p>Raw data, raw data, raw data, "+ 
								"raw data, raw data etc<br>Lorem ipsum dolor sit amet, consectetur adipiscing eli"+ 
								"t. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at"+ 
								" molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem"+ 
								". \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauct"+ 
								"or sem. Pellentesque non porta lacus. Morbi molestie mauris sed \njusto vehicula"+ 
								" vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id auctor. Ves"+ 
								"tibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapibus felis ege"+ 
								"t cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br><br></p><h1 style=\'"+ 
								"font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; co"+ 
								"lor: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: "+ 
								"0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>3. &lt;Plans topic 3&gt;"+ 
								"</span><br></h1>\n<p>Raw data, raw data, raw data, raw data, raw data etc<br>Lor"+ 
								"em ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo \ndignissim"+ 
								" quam ac fermentum. Quisque aliquam tristique mi at molestie. \nMauris vitae sap"+ 
								"ien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNulla vehicula sodales so"+ 
								"llicitudin. Praesent id diam arcu, tristique \nauctor sem. Pellentesque non port"+ 
								"a lacus. Morbi molestie mauris sed \njusto vehicula vulputate. Aliquam erat volu"+ 
								"tpat. Integer placerat tempor\n nisl id auctor. Vestibulum ac velit in dolor pha"+ 
								"retra elementum. Aenean\n viverra dapibus felis eget cursus. Maecenas suscipit t"+ 
								"incidunt \nvestibulum.\n<br><br><br></p><h1 style=\'font-family: Arial,Helvetica"+ 
								",sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); borde"+ 
								"r-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'"+ 
								"color: rgb(29, 95, 144);\'>Conclusions &lt;Phase 2&gt;</span><br></h1>\n\n<p><st"+ 
								"rong>Summary of outputs:</strong><br><br>1. E.g. For the research, the participa"+ 
								"nts showed us the results that .... <br>Lorem ipsum dolor sit amet, consectetur "+ 
								"adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam t"+ 
								"ristique mi at molestie. \nMauris vitae sapien mauris.<br><br>2. Ut pulvinar sap"+ 
								"ien lorem, eu auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id dia"+ 
								"m arcu, tristique \nauctor sem. Pellentesque non porta lacus. Morbi molestie mau"+ 
								"ris sed \njusto vehicula vulputate. Aliquam erat volutpat. Integer placerat temp"+ 
								"or\n nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n v"+ 
								"iverra dapibus felis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br"+ 
								"><br><br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21p"+ 
								"x; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(2"+ 
								"04, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>"+ 
								"Reflection on &lt;Phase 2&gt;</span><br></h1>\n\n\n<p><strong>Things we could im"+ 
								"prove for future phases:</strong><br>1. e.g. we shouln't contact our partners by"+ 
								" email but by phone, we should plan xxx better by doing xxx instead of xxx<br><b"+ 
								"r><br><strong>Things we have to continue doing for future phases:</strong><br>1."+ 
								" E.g. Our project meetings ran very smoothly because xxx, so we definitly need t"+ 
								"o repeat xxx in the future.</p>\n\n<p><br></p><p><br><br></p>"
				            },
				            "${refid}12": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
				            "${refid}9": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Drafts</span>"+ 
								"<br></h1><p>Drafts of final paper etc.<br>orem\n ipsum dolor sit amet, consectet"+ 
								"ur adipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliqua"+ 
								"m tristique mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lor"+ 
								"em, eu auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu,"+ 
								" tristique \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed"+ 
								" \njusto vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n ni"+ 
								"sl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra "+ 
								"dapibus felis eget cursus. Maecenas suscipit tincidunt \nvestibulum.</p><p><img "+ 
								"id=\'widget_embedcontent_${refid}13\' class=\'widget_inline\' style=\'display: bl"+ 
								"ock; padding: 10px; margin: 4px;\' src=\'https://ucamoae.caret.cam.ac.uk/devwidg"+ 
								"ets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedcontent/ima"+ 
								"ges/content.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\'"+ 
								" border=\'1\'><br><br></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; f"+ 
								"ont-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin"+ 
								" dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29,"+ 
								" 95, 144);\'>Final paper</span><br></h1><p>Lorem ipsum dolor sit amet, consectet"+ 
								"ur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam "+ 
								"tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, "+ 
								"eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent id diam arcu, trist"+ 
								"ique auctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed justo v"+ 
								"ehicula vulputate. Aliquam erat volutpat. Integer placerat tempor nisl id auctor"+ 
								". Vestibulum ac velit in dolor pharetra elementum. Aenean viverra dapibus felis "+ 
								"eget cursus. Maecenas suscipit tincidunt vestibulum. <br><br><br><img id=\'widge"+ 
								"t_embedcontent_${refid}14\' class=\'widget_inline\' style=\'display: block; paddi"+ 
								"ng: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' dat"+ 
								"a-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'displa"+ 
								"y: block; padding: 10px; margin: 4px;\' border=\'1\'><br><br></p><h1 style=\'fon"+ 
								"t-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color:"+ 
								" rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px "+ 
								"0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Comments</span><br></h1><p>A"+ 
								"ny comments on the paper can be inserted here:<br><br><img id=\'widget_comments_"+ 
								"${refid}15\' class=\'widget_inline\' style=\'display: block; padding: 10px; margi"+ 
								"n: 4px;\' src=\'/devwidgets/comments/images/comments.png\' data-mce-src=\'devwid"+ 
								"gets/comments/images/comments.png\' data-mce-style=\'display: block; padding: 10"+ 
								"px; margin: 4px;\' border=\'1\'><br></p>"
				            },
							"${refid}13": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}14": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}15": {
								comments: {
								   "sakai:allowanonymous": false,
								   "sakai:type": "comment",
								   "direction": "comments_FirstUp",
								   "perPage": 5
								}
							}
						},
						"${pid}5": {
				            structure0: {
				                "collaberations":{
				                    "_ref":"${refid}16",
				                    "_order":0,
				                    "_title":"Collaborations",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}16",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Collaborations"
				                    }
				                },
				                "contact-list":{
				                    "_ref":"${refid}17",
				                    "_order":1,
				                    "_title":"Contact list",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}17",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Contact list"
				                    }
				                },
				                "summer-students-visitors":{
				                    "_ref":"${refid}18",
				                    "_order":2,
				                    "_title":"Summer students & visitors",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}18",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Summer students & visitors"
				                    }
				                },
				                "literature":{
				                    "_ref":"${refid}19",
				                    "_order":3,
				                    "_title":"Literature",
				                    "_nonEditable": false,
				                    "main":{
				                        "_ref":"${refid}19",
				                        "_order":0,
				                        "_nonEditable": false,
				                        "_title":"Literature"
				                    }
				                }
				            },
				            "${refid}16": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Name Proj"+ 
								"ect 1&gt;</span><br></h1><p>&lt;Name Project 1&gt; is about Lorem ipsum dolor si"+ 
								"t amet...and has learned us that Lorem ipsum dolor sit amet. <br>Below you can f"+ 
								"ind their papers and other documents that can be of interest to us. <br>Lorem ip"+ 
								"sum dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam a"+ 
								"c fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauri"+ 
								"s. Ut pulvinar sapien lorem, eu auctor sem.</p><p style=\'\'><br><img id=\'widge"+ 
								"t_embedcontent_${refid}20\' class=\'widget_inline\' style=\'display: block; padding"+ 
								": 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-"+ 
								"mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'display:"+ 
								" block; padding: 10px; margin: 4px;\' border=\'1\'><br></p><h1 style=\'font-fami"+ 
								"ly: Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(2"+ 
								"04, 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3p"+ 
								"x;\'><span style=\'color: rgb(29, 95, 144);\'>&lt;Name Project 2&gt;</span></h1>"+ 
								"\n<p>&lt;Name Project 2&gt; is about Lorem ipsum dolor sit amet...and has learne"+ 
								"d us that Lorem ipsum dolor sit amet. <br> Below you can find their papers and o"+ 
								"ther documents that can be of interest to us. <br> Lorem ipsum dolor sit amet, c"+ 
								"onsectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque "+ 
								"aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien"+ 
								" lorem, eu auctor sem.<br><br><br><img id=\'widget_embedcontent_${refid}21\' clas"+ 
								"s=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'"+ 
								"/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedcon"+ 
								"tent/images/content.png\' data-mce-style=\'display: block; padding: 10px; margin"+ 
								": 4px;\' border=\'1\'><br></p><h1 style=\'font-family: Arial,Helvetica,sans-seri"+ 
								"f; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: "+ 
								"thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb"+ 
								"(29, 95, 144);\'>&lt;Name Project 3&gt;</span></h1>\n\n<p>&lt;Name Project 3&gt;"+ 
								" is about Lorem ipsum dolor sit amet...and has learned us that Lorem ipsum dolor"+ 
								" sit amet. <br> Below you can find their papers and other documents that can be "+ 
								"of interest to us. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit."+ 
								" Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at mol"+ 
								"estie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><"+ 
								"br><br><img id=\'widget_embedcontent_${refid}22\' class=\'widget_inline\' style=\'"+ 
								"display: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/im"+ 
								"ages/content.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' d"+ 
								"ata-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br><"+ 
								"/p><p><br></p>"
				            },
				            "${refid}20": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}21": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}22": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
				            "${refid}17": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Contact List<"+ 
								"/span><br></h1><p>Below is a list of all the Contacts outside our project that c"+ 
								"ould be beneficial to us to collaborate with from time to time (e.g. because the"+ 
								"y're working in the same area, when met at a conference etc).<br><br>Lorem ipsum"+ 
								" dolor sit amet, consectetur adipiscing elit. Aenean commodo \ndignissim quam ac"+ 
								" fermentum. Quisque aliquam tristique mi at molestie. \nMauris vitae sapien maur"+ 
								"is. Ut pulvinar sapien lorem, eu auctor sem. \nNulla vehicula sodales sollicitud"+ 
								"in. Praesent id diam arcu, tristique \nauctor sem. Pellentesque non porta lacus."+ 
								" Morbi molestie mauris sed \njusto vehicula vulputate. Aliquam erat volutpat. In"+ 
								"teger placerat tempor\n nisl id auctor. Vestibulum ac velit in dolor pharetra el"+ 
								"ementum. Aenean\n viverra dapibus felis eget cursus. Maecenas suscipit tincidunt"+ 
								" \nvestibulum.\n<br></p><p><br></p><table style=\'border: 1px solid rgb(190, 187"+ 
								", 190); width: 708px; height: 351px;\' border=\'1\' frame=\'border\' rules=\'all"+ 
								"\'><tbody><tr><td><span style=\'color: rgb(92, 92, 92);\'><strong>Company</stron"+ 
								"g></span><br data-mce-bogus=\'1\'></td><td><span style=\'color: rgb(92, 92, 92);"+ 
								"\'><strong>Contact</strong></span><br data-mce-bogus=\'1\'></td><td><span style="+ 
								"\'color: rgb(92, 92, 92);\'><strong>Email</strong></span><br data-mce-bogus=\'1\'"+ 
								"></td><td><span style=\'color: rgb(92, 92, 92);\'><strong>Phone</strong></span>"+ 
								"<br data-mce-bogus=\'1\'></td><td><span style=\'color: rgb(92, 92, 92);\'><stron"+ 
								"g>Mobile</strong></span><br data-mce-bogus=\'1\'></td><td><span style=\'color: r"+ 
								"gb(92, 92, 92);\'><strong>Position</strong></span><br data-mce-bogus=\'1\'></td>"+ 
								"<td><span style=\'color: rgb(92, 92, 92);\'><strong>Address</strong></span><br d"+ 
								"ata-mce-bogus=\'1\'></td><td><span style=\'color: rgb(92, 92, 92);\'><strong>Cit"+ 
								"y &amp; Postcode</strong></span><br data-mce-bogus=\'1\'></td><td><span style=\'"+ 
								"color: rgb(92, 92, 92);\'><strong>Country</strong></span><br data-mce-bogus=\'1\'"+ 
								"></td><td><span style=\'color: rgb(92, 92, 92);\'><strong>Notes</strong></span>"+ 
								"<br data-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td><td><br"+ 
								" data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bo"+ 
								"gus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></"+ 
								"td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br d"+ 
								"ata-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><br data"+ 
								"-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'"+ 
								"1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><t"+ 
								"d><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-m"+ 
								"ce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1"+ 
								"\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'>"+ 
								"</td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br"+ 
								" data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bo"+ 
								"gus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></"+ 
								"td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td>"+ 
								"<td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data"+ 
								"-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'"+ 
								"1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><t"+ 
								"d><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><"+ 
								"br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-"+ 
								"bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'>"+ 
								"</td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br"+ 
								" data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bo"+ 
								"gus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus"+ 
								"=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td>"+ 
								"<td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data"+ 
								"-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'"+ 
								"1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'"+ 
								"></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><"+ 
								"br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-"+ 
								"bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'>"+ 
								"</td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td></tr><t"+ 
								"r><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br da"+ 
								"ta-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus"+ 
								"=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td>"+ 
								"<td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data"+ 
								"-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td><td><br data-mc"+ 
								"e-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'"+ 
								"></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><"+ 
								"br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-"+ 
								"bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bog"+ 
								"us=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></t"+ 
								"d><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br da"+ 
								"ta-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus"+ 
								"=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td>"+ 
								"</tr><tr><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td"+ 
								"><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mc"+ 
								"e-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'"+ 
								"></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><"+ 
								"br data-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td><td><br "+ 
								"data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bog"+ 
								"us=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></t"+ 
								"d><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br da"+ 
								"ta-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><br data-"+ 
								"mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'"+ 
								"1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td"+ 
								"><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mc"+ 
								"e-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'"+ 
								"></td></tr><tr><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'><"+ 
								"/td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br "+ 
								"data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bog"+ 
								"us=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></t"+ 
								"d><td><br data-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td><"+ 
								"td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-"+ 
								"mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'"+ 
								"1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td"+ 
								"><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><b"+ 
								"r data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-b"+ 
								"ogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'><"+ 
								"/td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br "+ 
								"data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bog"+ 
								"us=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus="+ 
								"\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><"+ 
								"td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-"+ 
								"mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'"+ 
								"1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr><td><br data-mce-bogus=\'1\'"+ 
								"></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><b"+ 
								"r data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-b"+ 
								"ogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'><"+ 
								"/td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td></tr><tr"+ 
								"><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br dat"+ 
								"a-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus="+ 
								"\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><"+ 
								"td><br data-mce-bogus=\'1\'></td><td><br data-mce-bogus=\'1\'></td><td><br data-"+ 
								"mce-bogus=\'1\'></td></tr></tbody></table><p><br></p><p><br></p>"
				            },
				            "${refid}18": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Summer Studen"+ 
								"ts</span><br></h1><p><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color"+ 
								": #000000;\'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean com"+ 
								"modo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Maur"+ 
								"is vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Lorem ipsum dol"+ 
								"or sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac ferme"+ 
								"ntum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut p"+ 
								"ulvinar sapien lorem, eu auctor sem.<br><br></span><strong><span data-mce-style="+ 
								"\'font-size: small;\' style=\'font-size: small;\'></span></strong></p><p><strong"+ 
								"><span data-mce-style=\'font-size: small;\' style=\'font-size: small;\'></span><"+ 
								"/strong><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'>"+ 
								"</span></p><p><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #0000"+ 
								"00;\'></span></p><p><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color:"+ 
								" #000000;\'></span></p><p style=\'\'><span style=\'color: rgb(0, 0, 0);\'><stron"+ 
								"g><span data-mce-style=\'font-size: small;\' style=\'font-size: small;\'>&lt;Nam"+ 
								"e Student 1&gt;</span></strong></span><span style=\'color: rgb(0, 0, 0);\' data-"+ 
								"mce-style=\'color: #000000;\'><br>Lorem ipsum dolor sit amet, consectetur adipis"+ 
								"cing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliquam tristique"+ 
								" mi at molestie. Mauris vitae sapien mauris.</span><br><br><img id=\'widget_embe"+ 
								"dcontent_${refid}23\' class=\'widget_inline\' style=\'display: block; padding: 10p"+ 
								"x; margin: 4px;\' src=\'https://ucamoae.caret.cam.ac.uk/devwidgets/embedcontent/"+ 
								"images/content.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\'"+ 
								" data-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><sp"+ 
								"an style=\'color: rgb(0, 0, 0);\'><strong><span data-mce-style=\'font-size: smal"+ 
								"l;\' style=\'font-size: small;\'></span></strong></span></p><p style=\'\'><span "+ 
								"style=\'color: rgb(0, 0, 0);\'><strong><span data-mce-style=\'font-size: small;\'"+ 
								" style=\'font-size: small;\'>&lt;Name Student 2&gt;</span></strong></span><br><"+ 
								"span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'>Lorem ips"+ 
								"um dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac"+ 
								" fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris"+ 
								".</span><br><br><img id=\'widget_embedcontent_${refid}24\' class=\'widget_inline\'"+ 
								" style=\'display: block; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedc"+ 
								"ontent/images/content.png\' data-mce-src=\'devwidgets/embedcontent/images/conten"+ 
								"t.png\' data-mce-style=\'display: block; padding: 10px; margin: 4px;\' border=\'"+ 
								"1\'><strong><span data-mce-style=\'font-size: small;\' style=\'font-size: small;"+ 
								"\'></span></strong></p><p style=\'\'><strong><span data-mce-style=\'font-size: s"+ 
								"mall;\' style=\'font-size: small;\'>&lt;Name Student 3&gt;</span></strong><br><s"+ 
								"pan style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'>Lorem ipsu"+ 
								"m dolor sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac "+ 
								"fermentum. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris."+ 
								"<br><br></span></p><p style=\'\'><span style=\'color: rgb(0, 0, 0);\' data-mce-s"+ 
								"tyle=\'color: #000000;\'></span></p><p style=\'\'><img id=\'widget_embedcontent_"+ 
								"${refid}25\' class=\'widget_inline\' style=\'display: block; padding: 10px; margi"+ 
								"n: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'dev"+ 
								"widgets/embedcontent/images/content.png\' data-mce-style=\'display: block; paddi"+ 
								"ng: 10px; margin: 4px;\' border=\'1\'><br></p><h1 style=\'font-family: Arial,Hel"+ 
								"vetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51);"+ 
								" border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span st"+ 
								"yle=\'color: rgb(29, 95, 144);\'>Visitors</span></h1><p><span style=\'color: rgb"+ 
								"(0, 0, 0);\'>Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Aenean c"+ 
								"ommodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. "+ 
								"\nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.Lorem\n ip"+ 
								"sum dolor sit amet, consectetur adipiscing elit. Aenean commodo \ndignissim quam"+ 
								" ac fermentum. Quisque aliquam tristique mi at molestie. \nMauris vitae sapien m"+ 
								"auris. Ut pulvinar sapien lorem, eu auctor sem.\n<br><br></span><span style=\'fo"+ 
								"nt-size: small;\'><strong>&lt;Name Visitor&gt;</strong></span><br><span style=\'"+ 
								"color: rgb(0, 0, 0);\'>Lorem\n ipsum dolor sit amet, consectetur adipiscing elit"+ 
								". Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at "+ 
								"molestie. \nMauris vitae sapien mauris.</span><br></p><p><br><img id=\'widget_em"+ 
								"bedcontent_${refid}26\' class=\'widget_inline\' style=\'display: block; padding: "+ 
								"10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mc"+ 
								"e-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'display: b"+ 
								"lock; padding: 10px; margin: 4px;\' border=\'1\'><br><span style=\'font-size: sm"+ 
								"all;\' data-mce-style=\'font-size: small;\'></span></p><p><span style=\'font-siz"+ 
								"e: small;\'><strong>&lt;Name Visitor&gt;</strong></span><br><span style=\'color:"+ 
								" rgb(0, 0, 0);\'>Lorem\n ipsum dolor sit amet, consectetur adipiscing elit. Aene"+ 
								"an commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molest"+ 
								"ie. \nMauris vitae sapien mauris.</span></p><p><img id=\'widget_embedcontent_${refid}47"+ 
								"\' class=\'widget_inline\' style=\'display: block; padding: 10px; margin: "+ 
								"4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwid"+ 
								"gets/embedcontent/images/content.png\' data-mce-style=\'display: block; padding:"+ 
								" 10px; margin: 4px;\' border=\'1\'><br></p>"
				            },
				            "${refid}23": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}24": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}25": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}26": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
							"${refid}47": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
				            "${refid}19": {
				                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Literature</s"+ 
								"pan><br></h1><p>Here you can add more interesting literature: e.g. a very intere"+ 
								"sting book, reference, video, link etc you found somewhere.<br>Lorem ipsum dolor"+ 
								" sit amet, consectetur adipiscing elit. Aenean commodo dignissim quam ac ferment"+ 
								"um. Quisque aliquam tristique mi at molestie. Mauris vitae sapien mauris. Ut pul"+ 
								"vinar sapien lorem, eu auctor sem. Nulla vehicula sodales sollicitudin. Praesent"+ 
								" id diam arcu, tristique auctor sem. Pellentesque non porta lacus. Morbi molesti"+ 
								"e mauris sed justo vehicula vulputate. Aliquam erat volutpat. Integer placerat t"+ 
								"empor nisl id auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean vi"+ 
								"verra dapibus felis eget cursus. Maecenas suscipit tincidunt vestibulum. <br></p"+ 
								"><p style=\'padding-left: 30px;\'><br><img id=\'widget_embedcontent_${refid}27\' "+ 
								"class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' sr"+ 
								"c=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embe"+ 
								"dcontent/images/content.png\' data-mce-style=\'display: block; padding: 10px; ma"+ 
								"rgin: 4px;\' border=\'1\'><br></p>'"
							},
							"${refid}27": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
							},
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
								"diam arcu, tristique \nauctor sem.</p><p style=\'padding-left: 30px;\'><img id=\'"+ 
								"widget_embedcontent_${refid}33\' class=\'widget_inline\' style=\'display: block;"+ 
								" padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/content.png"+ 
								"\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-style=\'"+ 
								"display: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p><h1 style=\'f"+ 
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
									"layout": "horizontal"
								}
							},
							"${refid}33": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
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
								" sodales sollicitudin. Praesent id diam arcu, tristique \nauctor sem.</p><p><img"+ 
								" id=\'widget_embedcontent_${refid}35\' class=\'widget_inline\' style=\'display: b"+ 
								"lock; padding: 10px; margin: 4px;\' src=\'/devwidgets/embedcontent/images/conten"+ 
								"t.png\' data-mce-src=\'devwidgets/embedcontent/images/content.png\' data-mce-sty"+ 
								"le=\'display: block; padding: 10px; margin: 4px;\' border=\'1\'><br></p>"
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
									"layout": "horizontal"
								}
							},
							"${refid}35": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
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
									"layout": "horizontal"
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
									"layout": "horizontal"
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
				                page: "<p><img src=\'/devwidgets/embedcontent/images/content.png\' id=\'widget_embedcon"+ 
								"tent_${refid}39\' class=\'widget_inline\' style=\'display: block; padding: 10px; m"+ 
								"argin: 4px;\' border=\'1\'></p><h1 style=\'font-family: Arial,Helvetica,sans-ser"+ 
								"if; font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom:"+ 
								" thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rg"+ 
								"b(29, 95, 144);\'>Management Meetings</span><br></h1><p><span style=\'color: rgb"+ 
								"(0, 0, 0);\' data-mce-style=\'color: #000000;\'>Lorem ipsum dolor sit amet, cons"+ 
								"ectetur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque ali"+ 
								"quam tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lo"+ 
								"rem, eu auctor sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aen"+ 
								"ean commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molesti"+ 
								"e. Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br><"+ 
								"br></span><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'"+ 
								"><strong>Meeting 1: 'Date'</strong><br>Lorem ipsum dolor sit amet, consectetur "+ 
								"adipiscing elit.<br><br></span></p><p style=\'padding-left: 30px;\' data-mce-sty"+ 
								"le=\'padding-left: 30px;\'><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'"+ 
								"color: #000000;\'><img id=\'widget_embedcontent_${refid}40\' class=\'widget_inli"+ 
								"ne\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'https://ucamoae"+ 
								".caret.cam.ac.uk/devwidgets/embedcontent/images/content.png\' data-mce-src=\'dev"+ 
								"widgets/embedcontent/images/content.png\' data-mce-style=\'display: block; paddi"+ 
								"ng: 10px; margin: 4px;\' border=\'1\'><br></span></p><p style=\'\'><span style=\'"+ 
								"color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'><strong>Meeting 2: 'D"+ 
								"ate'</strong><br></span><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'co"+ 
								"lor: #000000;\'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><"+ 
								"br><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'><br><"+ 
								"br><br></span></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size"+ 
								": 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted "+ 
								"rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144"+ 
								");\'>Steering Committee Meetings</span><br></h1>\n<p><span style=\'color: rgb(0,"+ 
								" 0, 0);\' data-mce-style=\'color: #000000;\'>Lorem ipsum dolor sit amet, consect"+ 
								"etur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliqua"+ 
								"m tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem"+ 
								", eu auctor sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean"+ 
								" commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. "+ 
								"Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br></sp"+ 
								"an><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'><stro"+ 
								"ng>Meeting 1: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipis"+ 
								"cing elit.</span></p><p style=\'padding-left: 30px;\'><span style=\'color: rgb(0"+ 
								", 0, 0);\' data-mce-style=\'color: #000000;\'><img id=\'widget_embedcontent_"+ 
								"${refid}41\' class=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4"+ 
								"px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidg"+ 
								"ets/embedcontent/images/content.png\' data-mce-style=\'display: block; padding: "+ 
								"10px; margin: 4px;\' border=\'1\'><br></span><span style=\'color: rgb(0, 0, 0);\'"+ 
								" data-mce-style=\'color: #000000;\'><strong></strong></span></p><p style=\'\'><"+ 
								"span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'><strong>M"+ 
								"eeting 2: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipiscing"+ 
								" elit.</span><br><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #0"+ 
								"00000;\'><br><br></span></p><h1 style=\'font-family: Arial,Helvetica,sans-serif;"+ 
								" font-size: 21px; font-weight: bold; color: rgb(204, 102, 51); border-bottom: th"+ 
								"in dotted rgb(204, 204, 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(2"+ 
								"9, 95, 144);\'>Progress Meetings</span><br></h1>\n<p><span style=\'color: rgb(0,"+ 
								" 0, 0);\' data-mce-style=\'color: #000000;\'>Lorem ipsum dolor sit amet, consect"+ 
								"etur adipiscing elit. Aenean commodo dignissim quam ac fermentum. Quisque aliqua"+ 
								"m tristique mi at molestie. Mauris vitae sapien mauris. Ut pulvinar sapien lorem"+ 
								", eu auctor sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean"+ 
								" commodo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. "+ 
								"Mauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem.<br><br></sp"+ 
								"an><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'><stro"+ 
								"ng>Meeting 1: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipis"+ 
								"cing elit.</span></p><p style=\'padding-left: 30px;\'><span style=\'color: rgb(0"+ 
								", 0, 0);\' data-mce-style=\'color: #000000;\'><br><img id=\'widget_embedcontent_"+ 
								"${refid}42\' class=\'widget_inline\' style=\'display: block; padding: 10px; margin"+ 
								": 4px;\' src=\'/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devw"+ 
								"idgets/embedcontent/images/content.png\' data-mce-style=\'display: block; paddin"+ 
								"g: 10px; margin: 4px;\' border=\'1\'><br></span><span style=\'color: rgb(0, 0, 0"+ 
								");\' data-mce-style=\'color: #000000;\'><strong></strong></span></p><p style=\'\'"+ 
								"><span style=\'color: rgb(0, 0, 0);\' data-mce-style=\'color: #000000;\'><stron"+ 
								"g>Meeting 2: 'Date'</strong><br> Lorem ipsum dolor sit amet, consectetur adipisc"+ 
								"ing elit.</span></p><p style=\'\' data-mce-style=\'\'><br><span style=\'color: r"+ 
								"gb(0, 0, 0);\' data-mce-style=\'color: #000000;\'></span></p><p><br></p>"
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
									"layout": "horizontal"
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
									"layout": "horizontal"
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
									"layout": "horizontal"
								}
							},
							"${refid}42": {
								embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
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
									"layout": "horizontal"
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
									"layout": "horizontal"
								}
							}
						}
				    },
				    structure: {
				        "library": {
				            "_title": "Library",
				            "_order": 7,
				            "_docref": "${pid}0",
				            "_nonEditable": true,
				            "_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead", "-researcher"]
				        },
				        "participants": {
				            "_title": "Participants",
				            "_order": 8,
				            "_docref": "${pid}1",
				            "_nonEditable": true,
				            "_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
				        },
				        "about": {
				            "_title": "About",
				            "_order": 0,
				            "_docref": "${pid}2",
				            "_nonEditable": false,
				            "_view": ["anonymous","everyone", "-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
				        },
				        "schedule-announcements": {
				            "_title": "Schedule & Announcements",
				            "_order": 1,
				            "_docref": "${pid}3",
				            "_nonEditable": false,
				           	"_view": ["everyone", "-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
				        },
				        "our-my-research": {
				            "_title": "Our/My Research",
				            "_order": 2,
				            "_docref": "${pid}4",
				            "_nonEditable": false,
				           	"_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead", "-researcher"]
				        },
				        "literature-collaborations-input": {
				            "_title": "Literature & Collaborations input",
				            "_order": 3,
				            "_docref": "${pid}5",
				            "_nonEditable": false,
				           	"_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead", "-researcher"]
				        },
				        "events": {
				            "_title": "Events",
				            "_order": 4,
				            "_docref": "${pid}6",
				            "_nonEditable": false,
				            "_view": ["-lurker"],
                            "_edit": ["-participant"]
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
				        }
				    },
				    joinRole: "observer",
				    creatorRole: "lead"
				},
				{
                    id: "basicproject",
                    title: "Research project",
                    img: "/dev/images/worldtemplates/researchproject-full.png",
                    fullImg: "/dev/images/worldtemplates/researchproject.png",
                    perfectFor: "smaller group collaborations or as a basic template"+
                    " to support PhD or Master Research projects.",
					roles: [
				        {
				            id: "lead",
				            roleTitle: "Lead",
				            title: "Lead",
				            allowManage: true
				        },
						{
                            id: "researcher",
                            roleTitle: "Researchers",
                            title: "Researcher",
                            allowManage: false
                       	},
                       	{
                            id: "mentor",
                            roleTitle: "Mentors",
                            title: "Mentor",
                            allowManage: false
                       	},
                       	{
                            id: "observer",
                            roleTitle: "Observer",
                            title: "Mentor",
                            allowManage: false
                       	}
				    ],
                    docs: {
                        "${pid}0": {
                            structure0: {
                                "participants":{
                                    "_ref":"${refid}0",
                                    "_order":0,
                                    "_nonEditable": true,
                                    "_title":"Participants",
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
                        },
						"${pid}1": {
                             structure0: {
                                "planning": {
                                    "_ref":"${refid}7",
                                    "_order":1,
                                    "_title":"Planning",
                                    "main": {
                                        "_ref":"${refid}7",
                                        "_order":1,
                                        "_title":"Planning"
                                    }
                                }
                            },
                           "${refid}7": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>1. Planning"+ 
								"</span><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean"+ 
								" commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molestie"+ 
								". \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNulla"+ 
								" vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauctor sem. P"+ 
								"ellentesque non porta lacus. Morbi molestie mauris sed \njusto vehicula vulputat"+ 
								"e. Aliquam erat volutpat. Integer placerat tempor\n nisl id auctor. Vestibulum a"+ 
								"c velit in dolor pharetra elementum. Aenean\n viverra dapibus felis eget cursus."+ 
								" Maecenas suscipit tincidunt \nvestibulum.\n<br></p><ol><li>Planning</li><li>Top"+ 
								"ic 1</li><li>Topic 2<br>...<br></li><li>Conclusions</li><li>Reflection</li></ol>"+ 
								"<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>2. Topic 1</s"+ 
								"pan><br></h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenea"+ 
								"n commodo \ndignissim quam ac fermentum. Quisque aliquam tristique mi at molesti"+ 
								"e. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNull"+ 
								"a vehicula sodales sollicitudin. Praesent id diam arcu, tristique \nauctor sem. "+ 
								"Pellentesque non porta lacus. Morbi molestie mauris sed \njusto vehicula vulputa"+ 
								"te. Aliquam erat volutpat. Integer placerat tempor\n nisl id auctor. Vestibulum "+ 
								"ac velit in dolor pharetra elementum. Aenean\n viverra dapibus felis eget cursus"+ 
								". Maecenas suscipit tincidunt \nvestibulum.\n<br><br></p><h1 style=\'font-family"+ 
								": Arial,Helvetica,sans-serif; font-size: 21px; font-weight: bold; color: rgb(204"+ 
								", 102, 51); border-bottom: thin dotted rgb(204, 204, 204); padding: 0px 0px 3px;"+ 
								"\'><span style=\'color: rgb(29, 95, 144);\'>3. Topic 2</span><br></h1><p>\nLorem"+ 
								" ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo \ndignissim q"+ 
								"uam ac fermentum. Quisque aliquam tristique mi at molestie. \nMauris vitae sapie"+ 
								"n mauris. Ut pulvinar sapien lorem, eu auctor sem. \nNulla vehicula sodales soll"+ 
								"icitudin. Praesent id diam arcu, tristique \nauctor sem. Pellentesque non porta "+ 
								"lacus. Morbi molestie mauris sed \njusto vehicula vulputate. Aliquam erat volutp"+ 
								"at. Integer placerat tempor\n nisl id auctor. Vestibulum ac velit in dolor phare"+ 
								"tra elementum. Aenean\n viverra dapibus felis eget cursus. Maecenas suscipit tin"+ 
								"cidunt \nvestibulum.\n</p>"
                            }
						},
                        "${pid}2": {
                             structure0: {
                                "about": {
                                    "_ref":"${refid}3",
                                    "_order":0,
                                    "_title":"About",
                                    "main": {
                                        "_ref":"${refid}3",
                                        "_order":0,
                                        "_title":"About"
                                    }
                                }
                            },
                            "${refid}3": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>About the pro"+ 
								"ject</span><br></h1><p><img src=\'http://www.eng.cam.ac.uk/admissions/images/yr2"+ 
								"a.jpg\' alt=\'2nd year lab\' class=\'pic_right block_image_right\' style=\'borde"+ 
								"r: 1px solid rgb(204, 102, 51); margin: 0px 0px 5px 8px; float: right;\' align=\'"+ 
								"right\' height=\'119\' width=\'183\'>Lorem ipsum dolor sit amet, consectetur ad"+ 
								"ipiscing elit. Aenean commodo \ndignissim quam ac fermentum. Quisque aliquam tri"+ 
								"stique mi at molestie. \nMauris vitae sapien mauris. Ut pulvinar sapien lorem, e"+ 
								"u auctor sem. \nNulla vehicula sodales sollicitudin. Praesent id diam arcu, tris"+ 
								"tique \nauctor sem. Pellentesque non porta lacus. Morbi molestie mauris sed \nju"+ 
								"sto vehicula vulputate. Aliquam erat volutpat. Integer placerat tempor\n nisl id"+ 
								" auctor. Vestibulum ac velit in dolor pharetra elementum. Aenean\n viverra dapib"+ 
								"us felis eget cursus. Maecenas suscipit tincidunt \nvestibulum.\n<br><br><br><br"+ 
								"></p><h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-"+ 
								"weight: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204,"+ 
								" 204); padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Contact<"+ 
								"/span><br></h1><p style=\'\'>Project Name<br>Address<span style=\'color: rgb(128"+ 
								", 128, 128);\'><em></em></span><br></p><p>\nMobile: 0123 456 789<br><span style="+ 
								"\'color: rgb(128, 128, 128);\'><em></em></span>Fax: 0123 456 789<br>Email: proje"+ 
								"ctsname @ mail.com<br><span style=\'color: rgb(128, 128, 128);\'><em></em></span"+ 
								"><br><span style=\'color: rgb(128, 128, 128);\'><em></em></span>Or follow me on "+ 
								"Twitter: Name project<br></p><p><br><br></p><p><br></p><p><br></p>"
                            }
                        },
						"${pid}3": {
                             structure0: {
                                "library": {
                                    "_ref":"${refid}4",
                                    "_order":0,
                                    "_title":"Library",
                                    "main": {
                                        "_ref":"${refid}4",
                                        "_order":0,
                                        "_title":"Library"
                                    }
                                }
                            },
                           "${refid}4": {
                                page: "<img id='widget_mylibrary_${refid}5' class='widget_inline' style='display: blo"+
                                "ck; padding: 10px; margin: 4px;' src='/devwidgets/mylibrary/images/mylibrary.pn"+
                                "g' data-mce-src='/devwidgets/mylibrary/images/mylibrary.png' data-mce-style='di"+
                                "splay: block; padding: 10px; margin: 4px;' border='1'><br></p>"
                            },
                            "${refid}5": {
                                mylibrary: {
                                    "groupid": "${groupid}"
                                }
                            }
                       },
                       "${pid}4": {
                             structure0: {
                                "content": {
                                    "_ref":"${refid}6",
                                    "_order":2,
                                    "_title":"Content",
                                    "main": {
                                        "_ref":"${refid}6",
                                        "_order":2,
                                        "_title":"Content"
                                    }
                                }
                            },
                           "${refid}6": {
                                page: "<h1 style=\'font-family: Arial,Helvetica,sans-serif; font-size: 21px; font-weigh"+ 
								"t: bold; color: rgb(204, 102, 51); border-bottom: thin dotted rgb(204, 204, 204)"+ 
								"; padding: 0px 0px 3px;\'><span style=\'color: rgb(29, 95, 144);\'>Content</span"+ 
								"><br></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean com"+ 
								"modo dignissim quam ac fermentum. Quisque aliquam tristique mi at molestie. Maur"+ 
								"is vitae sapien mauris. Ut pulvinar sapien lorem, eu auctor sem. Nulla vehicula "+ 
								"sodales sollicitudin. Praesent id diam arcu, tristique auctor sem. Pellentesque "+ 
								"non porta lacus. Morbi molestie mauris sed justo vehicula vulputate. Aliquam era"+ 
								"t volutpat. Integer placerat tempor nisl id auctor. Vestibulum ac velit in dolor"+ 
								" pharetra elementum. Aenean viverra dapibus felis eget cursus. Maecenas suscipit"+ 
								" tincidunt vestibulum. <br><br><br><img id=\'widget_embedcontent_${refid}7\' cla"+ 
								"ss=\'widget_inline\' style=\'display: block; padding: 10px; margin: 4px;\' src=\'"+ 
								"/devwidgets/embedcontent/images/content.png\' data-mce-src=\'devwidgets/embedco"+ 
								"ntent/images/content.png\' data-mce-style=\'display: block; padding: 10px; margi"+ 
								"n: 4px;\' border=\'1\'><br></p>"
                            },
                            "${refid}7": {
                               embedcontent:{
									"embedmethod": "thumbnail",
									"sakai:indexed-fields": "title,description",
									"download": false,
									"sling:resourceType": "sakai/widget-data",
									"title": "",
									"details": false,
									"description": "",
									"name": true,
									"layout": "horizontal"
								}
                            }
						}
                    },
                    structure: {
                        "participants": {
                            "_title": "Participants",
                            "_order": 4,
                            "_docref": "${pid}0",
                            "_nonEditable": true,
                            "_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
                        },
                        "about": {
                            "_title": "About",
                            "_order": 0,
                            "_docref": "${pid}2",
                            "_nonEditable": false,
                            "_view": ["everyone", "anonymous", "-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
                        },
                        "library": {
                            "_title": "Library",
                            "_order": 3,
                            "_docref": "${pid}3",
                            "_nonEditable": false,
                            "_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
                        },
                        "content": {
                            "_title": "Content",
                            "_order": 2,
                            "_docref": "${pid}4",
                            "_nonEditable": false,
                            "_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
                        },
                        "planning": {
                            "_title": "Planning",
                            "_order": 1,
                            "_docref": "${pid}1",
                            "_nonEditable": true,
                            "_view": ["-lead", "-researcher", "-mentor", "-observer"],
                            "_edit": ["-lead"]
                        }
                    },
                    joinRole: "observer",
                    creatorRole: "lead"
                }
            ]
        }
    ]

    // Kaltura config
    config.kaltura = {        
        serverURL:  "http://ucamoae-100-69.dmz.caret.local", // Kaltura Server URL
        partnerId: 102, // INSERT YOUR PARTNER ID HERE
        playerId: 4421535 // INSERT YOUR PLAYER ID (UICONF_ID - from Kaltura Studio tab)
    };
    
    // Add Kaltura mime-type
    config.MimeTypes["kaltura/video"] = {
            cssClass: "icon-video-sprite",
            URL: "/dev/images/mimetypes/video.png",
            description: "KALTURA_VIDEO_FILE"
    };
    
    return config;
});



