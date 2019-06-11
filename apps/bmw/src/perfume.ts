import Perfume from 'perfume.js';


export const PERFUME_CONFIG = {
    // Metrics
    firstContentfulPaint: true,
    firstPaint: true,
    firstInputDelay: true,
    // Analytics
    analyticsTracker: undefined,
    googleAnalytics: {
        enable: false,
        timingVar: "name"
    },
    // Logging
    logPrefix: "🍻 xthecapx Hacks",
    logging: true,
    maxMeasureTime: 30000,
    warning: false,
    debugging: false,
};

export const TIMERS = new Map<string, string>([
    ['FormlyComponentFI', 'FormlyComponent First Interaction Took: '],
    ['FillForm', 'Total Time Filling the Form: '],
]);

export const perfume = (function () {
    let perfume = null;

    function createInstance() {
        const object = new Perfume(PERFUME_CONFIG);
        return object;
    }

    return {
        getInstance: function () {
            if (!perfume) {
                perfume = createInstance();
            }
            return perfume;
        }
    };
})();