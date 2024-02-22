const config = {
    coverageDirectory: "reports",
    coverageReporters: ['clover', 'json', 'lcov', 'html', ['text', { skipFull: true }]],
    collectCoverage: true,
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Snippets Tests",
            "outputPath": "./reports/test-report.html"
        }]
    ]
};

module.exports = config;