"use strict";
const symfonyCommandList = [
    {
        "label": "account:info",
        "detail": "Show info about your Symfony account"
    },
    {
        "label": "account:ips",
        "detail": "List SymfonyCloud IPs for use in scripts"
    },
    {
        "label": "account:login",
        "detail": "Log in with your SymfonyConnect account"
    },
    {
        "label": "account:logout",
        "detail": "Logout from your SymfonyConnect account"
    },
    {
        "label": "account:ssh:key:add",
        "detail": "Add an SSH key"
    },
    {
        "label": "account:ssh:key:remove",
        "detail": "Remove an SSH key"
    },
    {
        "label": "account:ssh:keys",
        "detail": "List project's SSH keys"
    },
    {
        "label": "book:check",
        "detail": "Check that you have all the pre-requisites locally to code while reading the 'Symfony 5: The Fast Track' book"
    },
    {
        "label": "book:checkout",
        "detail": "Check out a step of the 'Symfony 5: The Fast Track' book repository"
    },
    {
        "label": "domain:attach",
        "detail": "Attach a domain"
    },
    {
        "label": "cname",
        "detail": "Display the CNAME value to use in DNS entries"
    },
    {
        "label": "domain:default",
        "detail": "Display/Set the default domain"
    },
    {
        "label": "domain:detach",
        "detail": "Detach a domain"
    },
    {
        "label": "domain:get",
        "detail": "Show detailed information for a domain"
    },
    {
        "label": "domains",
        "detail": "List domains"
    },
    {
        "label": "domain:update",
        "detail": "Update a domain"
    },
    {
        "label": "env:activate",
        "detail": "Activate one or several environments"
    },
    {
        "label": "env:activity",
        "detail": "Display activity history for an environment"
    },
    {
        "label": "env:checkout",
        "detail": "Checkout a SymfonyCloud environment as a local Git branch"
    },
    {
        "label": "env:cp",
        "detail": "Copy files/folders between your host and the local machine"
    },
    {
        "label": "env:create",
        "detail": "Create an environment"
    },
    {
        "label": "env:cron",
        "detail": "Run a cron for the environment"
    },
    {
        "label": "env:db:dump",
        "detail": "Dump remote database"
    },
    {
        "label": "env:db:size",
        "detail": "Estimate the disk usage of a database"
    },
    {
        "label": "env:deactivate",
        "detail": "Deactivate one or several environments"
    },
    {
        "label": "env:debug",
        "detail": "Debug an environment by switching Symfony to the debug mode temporarily"
    },
    {
        "label": "env:delete",
        "detail": "Delete an environment"
    },
    {
        "label": "env:deploy",
        "detail": "Deploy an environment"
    },
    {
        "label": "env:fpm:status",
        "detail": "Get PHP-FPM status"
    },
    {
        "label": "env:link",
        "detail": "Link a local branch to an environment"
    },
    {
        "label": "env:list",
        "detail": "List environments"
    },
    {
        "label": "env:logs",
        "detail": "Display logs for an environment"
    },
    {
        "label": "env:mount:list",
        "detail": "Get a list of mounts"
    },
    {
        "label": "env:mount:size",
        "detail": "Check the disk usage of mounts"
    },
    {
        "label": "env:needs-deploy",
        "detail": "Check if the current environment needs to be deployed"
    },
    {
        "label": "env:redeploy",
        "detail": "Redeploy an environment, shortcut for deploy --reuse-build"
    },
    {
        "label": "env:rsync",
        "detail": "Rsync files/folders between your host and the local machine"
    },
    {
        "label": "env:setting:list",
        "detail": "List settings for an environment"
    },
    {
        "label": "env:setting:set",
        "detail": "Change setting value for an environment"
    },
    {
        "label": "env:snapshot:create",
        "detail": "Make a snapshot of an environment"
    },
    {
        "label": "env:snapshot:list",
        "detail": "List project snapshots"
    },
    {
        "label": "env:snapshot:restore",
        "detail": "Restore an environment snapshot"
    },
    {
        "label": "env:sql",
        "detail": "Run SQL on the remote database"
    },
    {
        "label": "env:ssh",
        "detail": "Open an SSH connection to the app container"
    },
    {
        "label": "env:sync",
        "detail": "Synchronize environment's data from the parent one"
    },
    {
        "label": "env:urls",
        "detail": "Show public URLs for this environment"
    },
    {
        "label": "env:validate",
        "detail": "Validate an environment configuration"
    },
    {
        "label": "integration:add",
        "detail": "Configure an integration with a third-party service"
    },
    {
        "label": "integration:delete",
        "detail": "Delete an integration"
    },
    {
        "label": "integration:get",
        "detail": "Display details for an integration"
    },
    {
        "label": "integration:list",
        "detail": "List project integrations"
    },
    {
        "label": "local:check:requirements",
        "detail": "Check requirements for Symfony projects."
    },
    {
        "label": "local:check:security",
        "detail": "Check security issues in project dependencies"
    },
    {
        "label": "local:new",
        "detail": "Create a new Symfony project"
    },
    {
        "label": "local:php:list",
        "detail": "List locally available PHP versions"
    },
    {
        "label": "local:php:refresh",
        "detail": "Auto-discover the list of available PHP version"
    },
    {
        "label": "local:proxy:domain:attach",
        "detail": "Attach a local domain for the proxy"
    },
    {
        "label": "local:proxy:domain:detach",
        "detail": "Detach domains from the proxy"
    },
    {
        "label": "local:proxy:start",
        "detail": "Start the local proxy server (local domains support)"
    },
    {
        "label": "local:proxy:status",
        "detail": "Get the local proxy server status"
    },
    {
        "label": "local:proxy:stop",
        "detail": "Stop the local proxy server"
    },
    {
        "label": "local:run",
        "detail": "Run a program with environment variables set depending on the current context"
    },
    {
        "label": "local:server:ca:install",
        "detail": "Create a local Certificate Authority for serving HTTPS"
    },
    {
        "label": "local:server:ca:uninstall",
        "detail": "Uninstall the local Certificate Authority"
    },
    {
        "label": "local:server:list",
        "detail": "List all configured local web servers"
    },
    {
        "label": "local:server:log",
        "detail": "Display local web server logs"
    },
    {
        "label": "local:server:prod",
        "detail": "Switch a project to use Symfony's production environment"
    },
    {
        "label": "server:start",
        "detail": "Run a local web server"
    },
    {
        "label": "server:status",
        "detail": "Get the local web server status"
    },
    {
        "label": "server:stop",
        "detail": "Stop the local web server"
    },
    {
        "label": "open:docs",
        "detail": "Open the online Web documentation"
    },
    {
        "label": "open:local",
        "detail": "Open the local project in a browser"
    },
    {
        "label": "open:local:rabbitmq",
        "detail": "Open the local project RabbitMQ web management interface in a browser"
    },
    {
        "label": "open:local:webmail",
        "detail": "Open the local project mail catcher web interface in a browser"
    },
    {
        "label": "open:remote",
        "detail": "Open the remote project in a browser"
    },
    {
        "label": "open:remote:rabbitmq",
        "detail": "Open the remote project RabbitMQ web management interface in a browser"
    },
    {
        "label": "open:support",
        "detail": "Open the web support page"
    },
    {
        "label": "project:create",
        "detail": "Create a new project"
    },
    {
        "label": "project:delete",
        "detail": "Delete current project"
    },
    {
        "label": "project:deploy-key",
        "detail": "Display the SSH deploy key of a project"
    },
    {
        "label": "project:edit",
        "detail": "Edit a project's quota"
    },
    {
        "label": "project:git-url",
        "detail": "Display the Git remote URL of a project"
    },
    {
        "label": "project:info",
        "detail": "Display information about the current project"
    },
    {
        "label": "project:init",
        "detail": "Initialize a new project using templates"
    },
    {
        "label": "project:link",
        "detail": "Link current git repository to a SymfonyCloud project"
    },
    {
        "label": "project:list",
        "detail": "List active projects"
    },
    {
        "label": "project:rename",
        "detail": "Rename a project"
    },
    {
        "label": "project:scale",
        "detail": "Scale a project up or down"
    },
    {
        "label": "project:unlink",
        "detail": "Unlink current git repository"
    },
    {
        "label": "project:billing:accept",
        "detail": "Confirm that the project should not be ended (charging will occur at the end of the trial period)"
    },
    {
        "label": "project:billing:unsuspend",
        "detail": "Unsuspend (reactivate) a project by paying unpaid invoices (charging will occur immediately)"
    },
    {
        "label": "project:billing",
        "detail": "Update card used for billing"
    },
    {
        "label": "self:about",
        "detail": "Display legal information"
    },
    {
        "label": "self:cleanup",
        "detail": "Cleanup previous versions from CLI updates"
    },
    {
        "label": "self:help",
        "detail": "Display help for a command or a category of commands"
    },
    {
        "label": "self:rollback",
        "detail": "Rollback the CLI to the previous version"
    },
    {
        "label": "self:update",
        "detail": "Update the CLI to the latest version"
    },
    {
        "label": "self:version",
        "detail": "Display the application version"
    },
    {
        "label": "tunnel:close",
        "detail": "Close SSH tunnels"
    },
    {
        "label": "tunnel:info",
        "detail": "View relationships for SSH tunnels"
    },
    {
        "label": "tunnel:list",
        "detail": "List SSH tunnels"
    },
    {
        "label": "tunnel:open",
        "detail": "Open SSH tunnels to the app's services"
    },
    {
        "label": "user:add",
        "detail": "Add a user to the project"
    },
    {
        "label": "user:list",
        "detail": "List project users"
    },
    {
        "label": "user:remove",
        "detail": "Remove a user from the project"
    },
    {
        "label": "var:delete",
        "detail": "Delete one or more variables from a project or an environment"
    },
    {
        "label": "var:disable",
        "detail": "Disable one or more variables for an environment"
    },
    {
        "label": "var:enable",
        "detail": "Enable one or more variables for an environment"
    },
    {
        "label": "var:export",
        "detail": "Export environment variables depending on the current context"
    },
    {
        "label": "var:get",
        "detail": "List variables"
    },
    {
        "label": "var:set",
        "detail": "Set one or multiple variables for a project or an environment"
    }
];
//# sourceMappingURL=symfonyCommandList.js.map