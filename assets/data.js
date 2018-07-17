var data = {
	"categories": [
		{
			"name": "Client Value and Impact",
			"weight": 40,
			"questions": [
				{
					"text": "How much additional functionality is being created for what kinds of clients?",
					"weight": 50,
					"answers": [
						{ "text": "No new functionality" },
						{ "text": "Some new functionality; same users" },
						{ "text": "Some new functionality; new users" },
						{ "text": "Significant new functionality; same users" },
						{ "text": "Significant new functionality; new users" },
					]
				},
				{
					"text": "How many students will this impact directly?",
					"weight": 25,
					"answers": [
						{ "text": "0-100" },
						{ "text": "100-500" },
						{ "text": "500-1000" },
						{ "text": "1000-10000" },
						{ "text": "10000+" },
					]
				},
				{
					"text": "How many faculty and/or staff members will this impact directly?",
					"weight": 25,
					"answers": [
						{ "text": "Individual" },
						{ "text": "Group" },
						{ "text": "Department" },
						{ "text": "Unit / College" },
						{ "text": "University" },
					]
				},
			]
		},
		{
			"name": "Perception of Value",
			"weight": 15,
			"questions": [
				{
					"text": "How valuable does the Scrum team find this work?",
					"weight": 33.3,
					"answers": [
						{ "text": "Low" },
						{ "text": "Medium" },
						{ "text": "High" },
					]
				},
				{
					"text": "How valuable does the staff client find this work?",
					"weight": 33.3,
					"answers": [
						{ "text": "Low" },
						{ "text": "Medium" },
						{ "text": "High" },
					]
				},
				{
					"text": "How valuable will the affectd students find this work?",
					"weight": 33.3,
					"answers": [
						{ "text": "Low" },
						{ "text": "Medium" },
						{ "text": "High" }
					]
				},
			]
		},
		{
			"name": "Risk Mitigation",
			"weight": 25,
			"questions": [
				{
					"text": "Will the result of this item replace a deprecated approach or technology with a supported one, according to the team's current baselines?",
					"weight": 60,
					"answers": [
						{ "text": "No" },
						{ "text": "Yes" },
					]
				},
				{
					"text": "Is this item proactively (i.e., not mandated) dealing with a situation that would almost certainly result in danger or failure in the future? Examples may include hard-coded values assumed to change, replacing workaround code with permanent code, etc.",
					"weight": 40,
					"answers": [
						{ "text": "No" },
						{ "text": "Yes" },
					]
				},
			]
		},
		{
			"name": "Consolidation and Retirement",
			"weight": 20,
			"questions": [
				{
					"text": "Will this result in the consolidation and/or retirement of applications and/or resources (VMs, databases, etc.)?",
					"weight": 100,
					"answers": [
						{ "text": "No" },
						{ "text": "Yes, some code" },
						{ "text": "Yes, an entire feature" },
						{ "text": "Yes, an entire area" },
						{ "text": "Yes, an entire app/resource" },
						{ "text": "Yes, multiple apps/resources" },
					]
				}
			]
		},
	]
};