'use strict';

var nconf = require('nconf');

module.exports = function loopmocha(grunt) {
	nconf.env()
		.argv();
	// Load task
	grunt.loadNpmTasks('grunt-loop-mocha');
	// Options
	return {
  "src": ["<%=loopmocha.basedir%>/spec/first-spec.js"],
    "basedir": process.cwd() + "/" + "test/functional",
    "options": {
        "mocha": {
            "reportLocation": grunt.option("reportLocation") || "<%=loopmocha.basedir%>/report",
            "timeout": grunt.option("timeout") || 120000,
            "grep": grunt.option("grep") || 0,
            "debug": grunt.option("debug") || 0,
            "reporter": grunt.option("reporter") || "spec"
        },
        "nemoData": {
            "autoBaseDir": "<%=loopmocha.basedir%>",
            "targetBrowser": nconf.get("TARGET_BROWSER") || "chrome",
            "targetServer": nconf.get("TARGET_SERVER") || "localhost",
            "targetBaseUrl": "http://www.google.com",
            "seleniumJar": nconf.get("SELENIUM_JAR") || "",
            "serverProps": {"port": 4444}
        },
        "iterations": [
            {
                "description": "default"
            }
        ]
    },
    "local": {
        "src": "<%=loopmocha.src%>"
    }
};
};
