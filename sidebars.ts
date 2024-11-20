import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    Sidebar: [
        'welcome',
        {
            type: 'category',
            label: 'MythicalDash v3 (Legacy)',
            collapsed: false,
            items: [
                'mythicaldash-v3/welcome',
                {
                    type: 'category',
                    label: 'Install',
                    items: [
                        'mythicaldash-v3/install',
                        'mythicaldash-v3/create_ssl',
                        'mythicaldash-v3/webserver',
                        'mythicaldash-v3/congratulations',
                    ]
                },
                {
                    type: 'category',
                    label: 'Update',
                    items: [
                        'mythicaldash-v3/upgrade',
                    ]
                },
                {
                    type: 'category',
                    label: 'Uninstall',
                    items: [
                        'mythicaldash-v3/uninstall',
                    ]
                },
                "mythicaldash-v3/faq",
            ]
        },
        {
            type: 'category',
            label: 'MythicalDash v4 (Nightly)',
            collapsed: false,
            items: [
                'mythicalclient-v4/welcome'
            ]
        }
    ]
    // By default, Docusaurus generates a sidebar from the docs folder structure
};

export default sidebars;
