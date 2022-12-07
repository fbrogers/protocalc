var data = {
    "categories": [
        {
            "name": "Students",
            "weight": 15,
            "questions": [
                {
                    "text": "How many students will this impact directly?",
                    "weight": 50,
                    "answers": [
                        { "text": "0-10" },
                        { "text": "11-100" },
                        { "text": "101-1,000" },
                        { "text": "1,001-10,000" },
                        { "text": "10,000+" },
                    ]
                },
                {
                    "text": "Will this substantially increase student access to higher education?",
                    "weight": 25,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                },
                {
                    "text": "Will this project make a meaningful impact on retention and/or graduation rates?",
                    "weight": 25,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                },
            ]
        },
        {
            "name": "Faculty and Staff",
            "weight": 10,
            "questions": [
                {
                    "text": "What is the scale of faculty/staff members this will impact directly?",
                    "weight": 40,
                    "answers": [
                        { "text": "None" },
                        { "text": "Individual / Small Group" },
                        { "text": "Department" },
                        { "text": "Unit / College" },
                        { "text": "University" }
                    ]
                },
                {
                    "text": "Will this project make a significant positive impact on the organizational culture or work environment?",
                    "weight": 30,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                },
                {
                    "text": "Will this project significantly increase faculty provenance and/or the number of tenured faculty?",
                    "weight": 30,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                },
            ]
        },
        {
            "name": "Research and Graduate Programs",
            "weight": 10,
            "questions": [
                {
                    "text": "Will this project significantly impact UCF’s research efforts and/or related awards?",
                    "weight": 40,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                },
                {
                    "text": "Will this project significantly increase graduate student research engagement and/or prominence?",
                    "weight": 30,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                },
                {
                    "text": "Will this project grant UCF new, significant patent and commercialization opportunities?",
                    "weight": 30,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                },
            ]
        },
        {
            "name": "Partnerships",
            "weight": 5,
            "questions": [
                {
                    "text": "Will this project create and/or significantly improve community partnerships that amplify our academic, economic, social, and cultural impact and reputation?",
                    "weight": 100,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                }
            ]
        },
        {
            "name": "Innovation",
            "weight": 10,
            "questions": [
                {
                    "text": "Will this project significantly innovate (with an aim to transform higher education) in any of the following areas: operational, academic, financial, technology?",
                    "weight": 100,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes" }
                    ]
                }
            ]
        },
        {
            "name": "Revenue",
            "weight": 5,
            "questions": [
                {
                    "text": "How much profit is this project expected to generate (revenue after costs)?",
                    "weight": 100,
                    "answers": [
                        { "text": "None" },
                        { "text": "< $10,000" },
                        { "text": "$10,000 - $100,000" },
                        { "text": "$100,000 - $500,000" },
                        { "text": "$500,000+" }
                    ]
                }
            ]
        },
        {
            "name": "Business Process Improvement",
            "weight": 5,
            "questions": [
                {
                    "text": "How large of an impact will this project have on an existing business process?",
                    "weight": 50,
                    "answers": [
                        { "text": "None" },
                        { "text": "Low - negligent reduction of staff time" },
                        { "text": "Medium - meaningful reduction of staff time" },
                        { "text": "High - dramatic reduction of staff time" },
                        { "text": "Very high - Less staff required" }
                    ]
                },
                {
                    "text": "Will this result in the consolidation and/or retirement of assets (VMs, databases, domains, etc.)?",
                    "weight": 50,
                    "answers": [
                        { "text": "No" },
                        { "text": "Yes - small/medium reduction" },
                        { "text": "Yes - large/significant reduction" }
                    ]
                }
            ]
        },
        {
            "name": "Risk Impact",
            "weight": 10,
            "questions": [
                {
                    "text": "What would be the financial impact of project failure?",
                    "weight": 50,
                    "answers": [
                        { "text": "None" },
                        { "text": "< $10,000" },
                        { "text": "$10,000 - $25,000" },
                        { "text": "$25,000 - $100,000" },
                        { "text": "$100,000+" }
                    ]
                },
                {
                    "text": "How widespread would the reputational impact of project failure be?",
                    "weight": 50,
                    "answers": [
                        { "text": "Minimal" },
                        { "text": "Within IT" },
                        { "text": "Customer" },
                        { "text": "UCF Executive" },
                        { "text": "Outside UCF / Media" }
                    ]
                }
            ]
        },
        {
            "name": "Security",
            "weight": 10,
            "questions": [
                {
                    "text": "What type of security threat, if any, will the outcome of this project address?",
                    "weight": 100,
                    "answers": [
                        { "text": "None" },
                        { "text": "Low / Medium threat exposure to an existing non-enterprise product/tool" },
                        { "text": "High threat exposure to an existing non-enterprise product/tool" },
                        { "text": "Low / Medium threat exposure to an existing enterprise product/tool" },
                        { "text": "High threat exposure to an existing enterprise product/tool" }
                    ]
                }
            ]
        },
        {
            "name": "Delivery Timeline",
            "weight": 10,
            "questions": [
                {
                    "text": "When does project need to be delivered for the maximum business value to be delivered?",
                    "weight": 100,
                    "answers": [
                        { "text": "Any time" },
                        { "text": "In 24+ months" },
                        { "text": "In 12-24 months" },
                        { "text": "In 0-12 months" },
                        { "text": "Immediately" }
                    ]
                }
            ]
        },
        {
            "name": "Sponsor Priority",
            "weight": 5,
            "questions": [
                {
                    "text": "Where does this project’s initiation stem from?",
                    "weight": 100,
                    "answers": [
                        { "text": "Internal to UCF IT" },
                        { "text": "Dept/unit external to UCF IT" },
                        { "text": "IT / ISO leadership" },
                        { "text": "University leadership (President, Provost, University audit etc.)" },
                        { "text": "State of Florida (Board of Governors, new/changed law)" }
                    ]
                }
            ]
        },
        {
            "name": "Perception of Value",
            "weight": 5,
            "questions": [
                {
                    "text": "How valuable does UCF IT find this project?",
                    "weight": 100,
                    "answers": [
                        { "text": "Low" },
                        { "text": "Medium" },
                        { "text": "High" }
                    ]
                }
            ]
        }
   ]
};