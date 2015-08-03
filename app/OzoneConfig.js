// @exclude
//
// This file is preprocessed by gulp to create the config file
// based on environment variables and/or defaults.
//
// Only modify this file to change the defaults.  In order to set actual configuration values
// for production, modify the file that gets built from this. To temporarily set configurations
// during dev (or at build time), use enviroment variables
//
// @endexclude
window.OzoneConfig = {
    // @ifdef API_URL
    "API_URL": '/* @echo API_URL */',
    // @endif
    // @ifndef API_URL
    "API_URL": 'https://localhost:8443/marketplace',
    // @endif
    // @ifdef HELP_URL
    "HELP_URL": '/* @echo HELP_URL */',
    // @endif
    // @ifndef HELP_URL
    "HELP_URL": "https://localhost:8088/dist/assets/PlaceholderUserGuide.pdf",
    // @endif
    // @ifdef METRICS_URL
    "METRICS_URL": '/* @echo METRICS_URL */',
    // @endif
    // @ifndef METRICS_URL
    "METRICS_URL": "https://www.owfgoss.org:10443/dev/metrics/",
    // @endif
    // @ifdef CENTER_URL
    "CENTER_URL": '/* @echo CENTER_URL */',
    // @endif
    // @ifndef CENTER_URL
    "CENTER_URL": "http://localhost:8000/dist",
    // @endif
    // @ifdef HUD_URL
    "HUD_URL": '/* @echo HUD_URL */',
    // @endif
    // @ifndef HUD_URL
    "HUD_URL": "http://localhost:8088/dist",
    // @endif
    // @ifdef WEBTOP_URL
    "WEBTOP_URL": '/* @echo WEBTOP_URL */',
    // @endif
    // @ifndef WEBTOP_URL
    "WEBTOP_URL": "http://localhost:9000/",
    // @endif
    // @ifdef IWC_URL
    "IWC_URL": '/* @echo IWC_URL */',
    // @endif
    // @ifndef IWC_URL
    "IWC_URL": "https://ozone-development.github.io/iwc",
    // @endif
    // @ifdef DEVELOPER_RESOURCES_URL
    "DEVELOPER_RESOURCES_URL": '/* @echo DEVELOPER_RESOURCES_URL */',
    // @endif
    // @ifndef DEVELOPER_RESOURCES_URL
    "DEVELOPER_RESOURCES_URL": "#",
    // @endif
    // @ifdef APP_TITLE
    "APP_TITLE": '/* @echo APP_TITLE */',
    // @endif
    // @ifndef APP_TITLE
    "APP_TITLE": "AppsMall",
    // @endif
    // @ifdef FEEDBACK_ADDRESS
    "FEEDBACK_ADDRESS": '/* @echo FEEDBACK_ADDRESS */',
    // @endif
    // @ifndef FEEDBACK_ADDRESS
    "FEEDBACK_ADDRESS": "mailto:person@address.com",
    // @endif
    // @ifdef FEEDBACK_ADDRESS
    "HELPDESK_ADDRESS": '/* @echo FEEDBACK_ADDRESS */',
    // @endif
    // @ifndef FEEDBACK_ADDRESS
    "HELPDESK_ADDRESS": "mailto:helpdesk@address.com",
    // @endif
    // @ifndef HELP_DOCS
    'HELP_DOCS': {
        'Help doc 1': '/path/to/document',
        'Help doc 2': '/path/to/document',
        'Help doc 3': '/path/to/document',
        'Help doc 4': '/path/to/document',
        'Help doc 5': '/path/to/document'
    },
    // @endif
    // @ifndef HELP_VIDEOS
    'HELP_VIDEOS': {
        'Video 1': '/path/to/video',
        'Video 2': '/path/to/video',
        'Video 3': '/path/to/video',
        'Video 4': '/path/to/video',
        'Video 5': '/path/to/video'
    }
    // @endif
};
