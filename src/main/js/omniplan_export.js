const API_BASE_URL = "http://localhost:8080";

/**
 * @param project
 * @returns {{name: *, start: string|string, end: string|string, customData, resourceAssignments: []}[]}
 */
function extractTaskDataFromProject(project) {
    const rootTask = project.actual.rootTask;
    const allTasks = rootTask.descendents();

    const dateFormatter = Formatter.Date.withFormat("yyyy-MM-dd HH:mm:ss");

    // Build an array of task data objects including name, start, end, and custom data
    return allTasks.map(task => {
        // Safely handle assignments: if none exist, default to an empty array.
        let assignments = [];
        if (task.assignments && task.assignments.length > 0) {
            assignments = task.assignments.map(assignment => {
                const a = {
                    resourceName: assignment.resource ? assignment.resource.name : "Unknown",
                    percentage: assignment.unitsAssigned || 0
                };
                return a;
            });
        }
        return {
            name: task.title,
            start: task.startDate ? dateFormatter.stringFromDate(task.startDate) : "N/A",
            end: task.endDate ? dateFormatter.stringFromDate(task.endDate) : "N/A",
            customData: task.customData || null,
            resourceAssignments: assignments
        };
    });
}

async function postTaskData(tasksData) {

    const url = API_BASE_URL + "/tasks";
    let request = URL.FetchRequest.fromString(url);
    request.method = "POST";
    request.headers = {"Content-Type": "application/json"};
    request.bodyString = JSON.stringify(tasksData);

    return await request.fetch();
}

/**
 * Main function to extract task data from the current project and send it to a local server.
 */
(async () => {
    try {
        const tasksData = extractTaskDataFromProject(document.project);
        const response = await postTaskData(tasksData);
        const statusCode = response.statusCode;

        // 5. Check response status and log result
        if (statusCode >= 200 && statusCode < 300) {
            console.log(`✅ Tasks data successfully sent. HTTP status ${statusCode}.`);
        } else {
            console.error(`❌ Failed to send tasks data. HTTP status ${statusCode}.`);
            console.error(`Response body: ${response.bodyString || "<no response body>"}`);
        }
    } catch (err) {
        console.error("❌ Error sending tasks data: " + err.message);
    }
})();