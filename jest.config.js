const config = {
    coverageDirectory: "reports",
    coverageReporters: ['clover', 'json', 'lcov', 'html', ['text', { skipFull: true }]],
    collectCoverage: true,
};

module.exports = config;