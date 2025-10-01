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
            label: 'FeatherPanel',
            collapsed: false,
            items: [
                'featherpanel/welcome-featherpanel',
                'featherpanel/ssl-certificates',
                'featherpanel/welcome-featherwings',
                {
                    type: 'category',
                    label: 'Development Guides',
                    items: [
                        {
                            type: 'category',
                            label: 'Install',
                            items: [
                                'featherpanel/development-guides/install/install-featherpanel-devs',
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Codebase',
                            items: [
                                'featherpanel/development-guides/codebase/welcome-codebase',
                                {
                                    type: 'category',
                                    label: 'Frontend & UI / UX',
                                    items: [
                                        'featherpanel/development-guides/codebase/frontend/frontend',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Filesystem & Directories',
                                    items: [
                                        'featherpanel/development-guides/codebase/dirs/dirs',
                                        'featherpanel/development-guides/codebase/dirs/filetypes',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Core Systems',
                                    items: [
                                        'featherpanel/development-guides/codebase/permissions/permissions',
                                        'featherpanel/development-guides/codebase/config/config',
                                        'featherpanel/development-guides/codebase/logger/logger',
                                        'featherpanel/development-guides/codebase/cache/cache',
                                        'featherpanel/development-guides/codebase/middleware/middleware',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Database & Models',
                                    items: [
                                        'featherpanel/development-guides/codebase/chat/chat',
                                        'featherpanel/development-guides/codebase/migrations/migrations',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Web Framework',
                                    items: [
                                        'featherpanel/development-guides/codebase/routes/routes',
                                        'featherpanel/development-guides/codebase/controllers/controllers',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Background Services',
                                    items: [
                                        'featherpanel/development-guides/codebase/cron/cron',
                                        'featherpanel/development-guides/codebase/mail/mail',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Command Line Interface',
                                    items: [
                                        'featherpanel/development-guides/codebase/cli/cli',
                                    ]
                                }
                            ]
                        },

                        {
                            type: 'category',
                            label: 'Plugins',
                            items: [
                                'featherpanel/development-guides/plugins/welcome-developers',
                                'featherpanel/development-guides/plugins/architecture',
                                'featherpanel/development-guides/plugins/configuration',
                                'featherpanel/development-guides/plugins/events',
                                'featherpanel/development-guides/plugins/development',
                                'featherpanel/development-guides/plugins/dependencies',
                                'featherpanel/development-guides/plugins/plugin-manager',
                                'featherpanel/development-guides/plugins/installation',
                                'featherpanel/development-guides/plugins/examples',
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Spells',
                            items: [
                                'featherpanel/development-guides/spells/welcome-spells',
                                'featherpanel/development-guides/spells/architecture',
                                'featherpanel/development-guides/spells/creating-spells',
                                'featherpanel/development-guides/spells/docker-images',
                                'featherpanel/development-guides/spells/configuration',
                                'featherpanel/development-guides/spells/variables',
                                'featherpanel/development-guides/spells/process-management',
                                'featherpanel/development-guides/spells/examples',
                            ]
                        }
                    ]
                }

            ]
        },
        {
            type: 'category',
            label: 'MythicalDash v3 (Remastered)',
            collapsed: false,
            items: [
                'mythicaldash-v3-remastered/welcome',
                {
                    type: 'category',
                    label: 'Installation',
                    items: [
                        'mythicaldash-v3-remastered/os/pick',
                        'mythicaldash-v3-remastered/os/docker',
                        'mythicaldash-v3-remastered/os/ubuntu',
                        'mythicaldash-v3-remastered/os/debian',
                        'mythicaldash-v3-remastered/install',
                    ]
                },
                'mythicaldash-v3-remastered/create_ssl',
                'mythicaldash-v3-remastered/webserver',
                'mythicaldash-v3-remastered/congratulations',
                'mythicaldash-v3-remastered/cloudflare-tunnels',
                {
                    type: 'category',
                    label: 'Upgrade',
                    items: [
                        'mythicaldash-v3-remastered/upgrade',
                        'mythicaldash-v3-remastered/upgrade/manual',
                        'mythicaldash-v3-remastered/upgrade/docker',
                    ]
                },
                {
                    type: 'category',
                    label: 'Uninstall',
                    items: [
                        'mythicaldash-v3-remastered/uninstall',
                        'mythicaldash-v3-remastered/uninstall/manual',
                        'mythicaldash-v3-remastered/uninstall/docker',
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'MythicalAdmin',
            collapsed: true,
            items: [
                'mythicaladmin/intro',
                'mythicaladmin/customize',
            ]
        },
        {
            type: 'category',
            label: 'FeatherEggs-Store',
            collapsed: true,
            items: [
                'feathereggs/install',
            ]
        },
        {
            type: 'category',
            label: 'McUtils',
            collapsed: true,
            items: [
                'mcutils/intro',
                'mcutils/standalone',
                'mcutils/blueprint'
            ]
        },
        {
            type: 'category',
            label: 'MythicalDash v3 (Legacy)',
            collapsed: true,
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

    ]
    // By default, Docusaurus generates a sidebar from the docs folder structure
};

export default sidebars;
