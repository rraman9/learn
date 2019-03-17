from atlassian import Jira

def getSummary(issue):
    return issue['fields']['summary']

jira = Jira(
    url='https://tools.publicis.sapient.com/jira',
    username='rajraman',
    password='##')

JQL = 'project in (WGT) and priority in ("P1 - Blocker") and status not in (Closed)'
data = jira.jql(JQL)
issues = data['issues']
if (len(issues)==0):
    print("No issues")
else:
    print("There are ", len(issues), " issues")
    # Print the issues
    for issue in data['issues']:
        print(getSummary(issue))