// Get the current path
var path = request.pathInfo;

// README is the default value
if (path == null) {
	path = "README.md";
} else if (path.endsWith("/")) {
	path = path + "README.md";
} else if (!path.endsWith(".md")) {
	path = path + "/README.md";
}

// Let's convert the file from Markdown to HTML
var markdown = providers.pegdown.toHtml(path);

// Put that in a variable
response.variable("markdown", markdown);

// Call the template
response.view("index.ftl");