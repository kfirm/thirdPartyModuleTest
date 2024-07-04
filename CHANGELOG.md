# v43.3.2 (2024-07-04)
### Bug Fixes
* some random change
* testing

# Changelog

# 43.3.0 (03-07-2024)
### Feature Change
* `spt-schedule-cron-expression`: formChange will emmit tasks even if cron is invalid with an empty cron string

# 43.2.0 (01-07-2024)
### Feature
* `spt-input`: v2 design component, add formControl mapping for sync of error states with host formControl

# 43.1.1 (02-07-2024)
### Feature
* `spt-gird-loaders`: Expose the spt-grid-loaders component to public api


# 43.1.1 (23-06-2024)
### Internal
* Moving primeicons left/right loading chevron to a seperated SCSS file


# 43.1.0 (27-06-2024)
### Feature Changes
* `spt-select`: incorporate spt-banner and popover directive and fix spt-select-region and spt-select-in-modal
* `spt-select-regions`: split v1 and v2, update styling in component and stories
* `spt-chip`: update max-width in v2 and update logic on doubleclick
* `mat-checkbox`: update color on unselected disabled checkbox
* `number-token`: fix spelling

# 43.0.2 (25-06-2024)
### Internal
* `spot-icons`: Updated to 2.7.2

# 43.0.1 (25-06-2024)
### Fix
* `spt-filter-search-bar`: Clearing search parameters will no longer force open search dropdown

# 43.0.0 (24-06-2024)
### Breaking Change
* `spt-busy`: Removed.
* `SummaryCardLoadingTypes`: Renamed to `CardLoadingTypes`.
* `SummaryCardLoadersTemplates`: Renamed to `CardLoadersTemplates`.
* `ngx-ui-loader`: npm package removed [https://www.npmjs.com/package/ngx-ui-loader]
* `spt-carousel`: Added 'isLoading' state.

# 42.4.1 (24-06-2024)
### Fix
* `spt-az-rank-card`: use rounded score value for deciding if to recommend on az


# 42.4.0 (21-06-2024)
### Fix
* `spt-select`: add spt-select v2 from new design system, add relevant styling and stories
* `spt-chip`: change logic on close spt-icon and click event
* `spt-color-token`: fix spelling
* `mat-dialog`: fix color token used

# 42.3.0 (20-06-2024)
### Fix
* `spt-select`: disabled items show correctly in chips and are not un-selectable
* `spt-button-toggle`: Using version 2 of spt-icon

# 42.2.0 (13-06-2024)
### Fix
* `spt-select`: extrapolate loader from select component.

# 42.1.1 (13-06-2024)
### Fix (13-06-2024)
* `spt-schedule-cron-expression`: Fix Tasks state mutation errors using deepClone

# 42.1.0 (13-06-2024)
### Feature
* `spt-slider`: Added error state/messages for value inputs for V1

# 42.0.0 (13-06-2024)
### Internal
* Published as a major version **by mistake**. No changes were made.

# 41.9.0 (10-06-2024)
### Feature
* `spt-chip`: add chip v2 from new design system.

# 41.8.0 (09-06-2024)
### Feature
* `color-tokens`: Add new tokens
* `number-tokens`: Add new tokens

# 41.7.1 (05-06-2024)
### Fix
* `spt-slider`: Fix v1 and v2 component support of ControlValueAccessor interface

# 41.7.0 (05-06-2024)
### Feature
* `spt-cron-expression`: support text input for week days and month, add the / option and disable mode.

# 41.6.0 (04-06-2024)
### Feature
* `sptPopoverTooltip`: Added time to live feature, allow for programmatically opening tooltip
### Fix
* `spt-copy-to-clipboard`: Version 2: Using new features for popover tooltip

# 41.5.4 (03-06-2024)
### Internal
* `notification services`: add NotificationType enum for notification services

# 41.5.3 (02-06-2024)
### Feature
* `az-summary-card`: update insufficient data tooltip

# 41.5.2 (30-05-2024)
### Fix
* `spt-frequency`: monthly frequency - fix end time
*
# 41.5.1 (30-05-2024)
### Fix
* `spt-icon`: missing null check before startWith

# 41.5.0 (29-05-2024)
### Feature
* `spt-grid`: added the option to remove the expand icon from group rows

# 41.4.1 (29-05-2024)
### Fix
* `spt-frequency`: export models

# 41.4.0 (27-05-2024)
### Internal
* `spt-slider`: Rearrange to v1 and v2 folders with full support of ControlValueAccessor interface

# 41.3.1 (27-05-2024)
### Fix
* `spt-select-regions`: Add control value accessor

# 41.3.0 (26-05-2024)
### Feature
* `spt-frequency`: Add new frequency component

# 41.2.1 (26-05-2024)
### Internal
* `spt-slider`: shouldIgnoreInternalValidationError temporary input
*
# 41.2.0 (24-05-2024)
### Feature
* `spt-copy-to-clipboard`: Version 2 to adhere to New Design System

# 41.1.0 (22-05-2024)
### Feature
* `spt-button-toggle`: Added new button toggle component to adhere to New Design System

# 41.0.4 (21-05-2024)
### Fix
* `spt-az-rank-card`: fix score box to long az

# 41.0.3 (21-05-2024)
### Fix
* `spt-icon`: for flag icons - fix to filter-greyscale for disabled state
* `spt-breadcumbs`: replace mat-tooltip with popover-tooltip directive
* `spt-banner`: replace mat-tooltip with popover-tooltip directive

# 41.0.2 (21-05-2024)
### Fix
* `spt-slider`: Revert folders arrangement changes

# 41.0.1 (21-05-2024)
### Feature
* `spt-az-rank-card`: add tooltip to not supported types

# 41.0.0 (16-05-2024)
### Breaking Change
<a href="https://spotinst.atlassian.net/wiki/spaces/COM/pages/2760671513/Breaking+Changes+Log#%5BinlineExtension%5D%5BhardBreak%5D41.0.0---13.05.2024----%231120%5BhardBreak%5DNotification-Service-Removal">
Breaking Change Confluence</a>

* `notification-service`: Removed notification service, relevant models, constants and styling from spot-client-shared.

# 40.1.1 (16-05-2024)
### Internal
* `spt-az-rank-card`: Add data-aid to differentiate between recommendation to no-recommendation

# 40.1.0 (16-05-2024)
### Feature
* `spt-icon`: Add v2 version
* `spt-popover-directive`: Add support for simple text
* ### Internal
* `spt-slider`: rearrange component to v1 and v2 folders

# 40.0.9 (15-05-2024)
### Bug Fix
* `spt-button`: Fix press styling fix for spt-secondary-button
* `spt-overview`: Fix inconsistent space styling

# 40.0.8 (15-05-2024)
### Internal
* `spt-select-regions`: expose spt-select-regions to public api

# 40.0.7 (13-05-2024)
### Bug Fix
* `spt-banner`: expose ng-content spt-banner-right

# 40.0.6 (10-05-2024)
### Internal
* `spt-vertical-stepper`: add trackBy to steps ngFor rendering

# 40.0.5 (09-05-2024)
### Bug Fix
* `spt-chart`: Fix styling leaking in spt-chart tooltip v2

# 40.0.4 (07-05-2024)
### Internal
* `spt-date-picker`: Fix minDate and maxDate in date picker with preDefinedRange story

# 40.0.3 (06-05-2024)
### Bug Fix
* `ExpectionManagerService`: Error objects fully logged to the console

# 40.0.2 (02-05-2024)
### Bug Fix
* `spt-schedule-cron-expression`: Fix bug for formGroup status when action type is invalid

# 40.0.1 (01-05-2024)
### Bug Fix
* `spt-az-rank-card`: Card improvements

# 40.0.0 (29-04-2024)
### Breaking Change
<a href="https://spotinst.atlassian.net/wiki/spaces/COM/pages/2760671513/Breaking+Changes+Log#%5BinlineExtension%5D%5BhardBreak%5D40.0.0---29.04.2024---%231108%5BhardBreak%5Dspt-diff-code-editor">
Breaking Change Confluence</a>

* `spt-diff-code-editor`: Change export module and component name. Add styling upgrade and storybook for spt-diff-code-editor version 2

# 39.12.0 (29-04-2024)
### Feature
* `spt-breadcrumbs`: Version 2 breadcrumbs that adheres to new Design System styling
* `spt-code-editor`: Version 2 editor that adheres to new Design System styling
* `spt-selector`: Remove NG_VALIDATORS token

# 39.11.0 (25-04-2024)
### Feature
* `color-tokens`: Add new tokens
* `number-tokens`: Add new tokens

# 39.10.2 (15-04-2024)
### Bug fix
* `spt-loader`: fix loader not showing in some cases

# 39.10.1 (15-04-2024)
### Bug fix
* `spt-map-chart`: increase turboThreshold in case of data length is bigger than default (1000) has negative values

# 39.10.0 (12-04-2024)
### Feature
* `spt-charts`: Add v2 tooltip

# 39.9.5 (11-04-2024)
### Internal
* `spt-grid`: Update readme and demo for row options with no visible checkboxes

# 39.9.4 (10-04-2024)
### Internal
* `karma`: Add karma-parallel library for faster testing running as part of the github workflow

# 39.9.3 (10-04-2024)
### Internal
* `spt-code-editor`: Add example for code editor with body text

# 39.9.2 (08-04-2024)
### Bug Fix
* `spt-account-connection-funnel`: prevent switching or setCurrentAccount to unconnected account;
* `spt-account-connection-funnel`: only after successfully connected account to CP - call setCurrentAccount;

# 39.9.1 (04-04-2024)
### Internal
* `readme-template.stories`: Add a readme-template file for Storybook.
* `spt-gauge`: Remove component - not in use anymore.
* `permission-policy.stories`: Remove from Storybook.

# 39.9.0 (04-04-2024)
### Feature
* `spt-banner`: new design system spt-banner component.

# 39.8.0 (02-04-2024)
### Feature
* `spt-tabs`: New component for new Design Systems - Tabs

# 39.7.2 (02-04-2024)
### Internal
* `spt-slider`: Allow high/low ranges to be of equal size for form control

<a name="39.7.1"></a>
# 39.7.1 (02-04-2024)
### Internal
* `spt-grid`: update ag-grid license

# 39.7.0 (02-04-2024)
### Feature
* `spt-chart-loaders`: Added DOUGHNUT loader for charts based on CSS, and improved PIE loader

# 39.6.0 (31-03-2024)
### Feature
* `color-tokens`: Add violet color tokens

# 39.5.0 (28-03-2024)
### Feature
* `spt-popover-directive`: Add new popover directive which includes custom-tooltip and truncate directive
* `mat-tooltip`: Add mat-tooltip styling
### Bug Fix
* `spt-icon`: Fix run time error

# 39.4.0 (28-03-2024)
### Feature
* `az-summary-card`: Add helper text when there are recommended az-s that are non-configured

# 39.3.0 (27-03-2024)
### Feature
* `spt-page-title`: Add page title with tabs story

# 39.2.0 (26-03-2024)
### Feature
* `spt-grid`: Add custom sort-menu header

# 39.1.0 (25-03-2024)
### Internal
* `spt-select`: Split the group item template into separate component for easier maintenance

# 39.0.0 (20-03-2024)
### Fix
* `spt-summary-card`: Fix broken loaders

### BREAKING CHANGE
<a href="https://spotinst.atlassian.net/wiki/spaces/COM/pages/2760671513/Breaking+Changes+Log#%5BinlineExtension%5D%5BhardBreak%5D39.0.0---20.3.2024---%231072-%5BhardBreak%5Dspt-summary-card">
Breaking Change Confluence
</a>

* `spt-summary-card`: Change SummaryCardLoadingTypes and SummaryCardLoadersTemplates models values

# 38.44.1 (19-03-2024)
### Fix
* `spt-summary-card`: Fix storybook controls

# 38.44.0 (18-03-2024)
### Feature
* `spt-summary-card`: Add support for custom stripe color

# 38.43.1 (17-03-2024)
### Feature
* `spt-dialog`: fix story

# 38.43.0 (17-03-2024)
### Feature
* `spt-dialog`: added new dialog component based on the new design system

# 38.42.0 (14-03-2024)
### Feature
* `spt-slider`: Update slider styling, improve API and storybook
* `spt-selector`: Create spt-selector component and add relevant stories
* `mat-checkbox`, `mat-slide-toggle`, `mat-radio-button`: Add material styling override

# 38.41.0 (14-03-2024)
### Feature
* `shadow css`: added shadow css tokens

# 38.40.0 (12-03-2024)
### Feature
* `spt-account-connection-funnel`: added FinOps card for Azure flow;
* `spt-account-connection-funnel`: aws management card redirect to Eco AWS Onboarding;

# 38.39.0 (12-03-2024)
### Feature
* `spt-box-list`: Added new BoxList component
* `spt-schedule-cron-expression`: Integrate with spt-box-list component and spt-cron-expression component
* `spt-busy`: Remove custom-template

# 38.38.5 (10-03-2024)
### Internal
* `spt-select`: Split the header template into separate component for easier maintenance

# 38.38.4 (08-03-2024)
### Fix
* `spt-date-picker`: Reduced z-index to 50 for calendar

# 38.38.3 (07-03-2024)
### Fix
* `spt-az-rank-card`: Various improvements to the az rank card and display

# 38.38.2 (06-03-2024)
### Internal
* `package.json`: `spot-icons` update package to 2.2.0

# 38.38.1 (06-03-2024)
### Internal
* `package.json`: `primeicons` package removal (redundant)


# 38.38.0 (05-03-2024)
### Features
* `spt-input`: Add spt-input component and relevant stories and styling

# 38.37.5 (05-03-2024)
### Fix
* `spt-select`: Fix placeholder wrong counter when used with grouping, and all checkbox

# 38.37.4 (28-02-2024)
### Fix
* `spt-expansion-panel`: Fix header expanded height and hover color

# 38.37.3 (27-02-2024)
### Fix
* `mat-input.scss`, `mat-button.scss`,`az-rank-card.component.ts`: clean up unused imports

# 38.37.2 (26-02-2024)
### Fix
* `preview.ts`: fixing stories decorator to apply custom background only for required stories

# 38.37.1 (26-02-2024)
### Fix
* `spt-select`: when passing a `formControl`, change detection was not being triggered upon the formControl's enabled/disabled changes
* bad import in new mat-input styles

# 38.37.0 (21-02-2024)
### Feature
* `mat-menu`: angular v15 migration add new design system styling sheets and stories for mat-menu
* `mat-input`: Add updated styling and relevant story to mat-input

# 38.36.0 (20-02-2024)
### Fix
* `spt-az-rank-card`: Various improvements to the az rank card and removed some internal logic

# 38.34.2 (15-02-2024)
### Internal
* `package.json`: Moved spot-icons to dependency
* `ng-package.json`: Added spot-icons to allowedNonPeerDependency

# 38.35.1 (15-02-2024)
### Fix
* `number-tokens`: Fix Effect tokens display on Storybook

# 38.35.0 (15-02-2024)
### Feature
* `spt-select`: expose close method to close the dropdown panel

# 38.34.0 (14-02-2024)
### Features
* `spt-select`: Added optional descriptions for select options
* `spt-vertical-stepper`: Added collapsible option to hide step labels

### Internal
* `Storybook loaders`: Fix loaders not showing for some SB features.

# 38.33.2 (14-02-2024)
### Fix
* `spt-select`: when passing a `formControl`, change detection was not being triggered upon the formControl's value changes

# 38.33.1 (13-02-2024)
### Fix
* `theme.scss`: Removing Poppins font temporarily from mat-typographies

# 38.33.0 (11-02-2024)
### Feature
* `color-tokens`: Add shadow tokens
* `number-tokens`: Add effect tokens + opacity-32 token

# 38.32.1 (08-02-2024)
### Fix
* `storybook`: fix lint issues

# 38.32.0 (08-02-2024)
### Feature
* `spt-grid`: added setDomLayout method to SptGridApi;

# 38.31.1 (06-02-2024)
### Fix
* `sptTruncateTooltip` directive: tooltip should be removed on destroy, but it's not

# 38.31.0 (05-02-2024)
### Feature
* `spt-az-rank-card`: Add az rank card

# 38.30.4 (04-02-2024)
### Fix
* `spt-chart-empty-states`: fix height bug

# 38.30.3 (04-02-2024)
### Fix
* `spt-chart-loaders`: improve pie-chart loader

# 38.30.2 (04-02-2024)
### Fix
* `spt-button`: fix bug in dark colors

# 38.30.1 (01-02-2024)
### Fix
* `spt-info-text-list`: fix horizontal css width

# 38.30.0 (01-02-2024)
### Feature
* `spt-button`: New button wrapper for material based on the new design system

# 38.29.0 (31-01-2024)
### Feature
* `spt-grid`: added domLayout to grid

# 38.28.1 (31-01-2024)
### Fix
* `spt-filter-search-bar`: Fix console error on init with filters for server side search and support keys with '.'

# 38.28.0 (31-01-2024)
### Feature
* `spt-info-text-list`: Enabling setting list content direction to horizontal or vertical

# 38.27.0 (31-01-2024)
### Feature
* `spt-chart-loaders`: New BARS loader for charts based on CSS instead of SVGs

# 38.26.2 (30-01-2024)
### Fix
* `spt-grid`: Exposing isGridSummaryRow function

# 38.26.1 (29-01-2024)
### Fix
* `spt-select`: fix group header checkbox checked when selected and all options disabled

# 38.26.0 (29-01-2024)
### Feature
* `spt-chart-loaders`: New loaders for charts based on CSS instead of SVGs (Area, Pie, Bar Horizontal)
* `spt-charts`: Support new chart-loaders via input

# 38.25.0 (25-01-2024)
### Feature
* `fonts.scss`: Adding Poppins font

# 38.24.2 (25-01-2024)
### Fix
* `spt-select`: revert ng-select version 10.0.4 -> 10.0.3

# 38.24.1 (24-01-2024)
### Fix
* `spt-select`: Fix show all bug in multi select chips

# 38.24.0 (24-01-2024)
### Feature
* `spt-charts`: Introduce scatter plot and add area scatter plot story

# 38.23.1 (24-01-2024)
### Fix
* `filter-search-bar`: fix grid server side filter search bar loading
* `filter-search-bar`: fix icons missing in second menu

# 38.23.0 (24-01-2024)
### Feature
* `color-tokens`: Add greyAbsolute token
* `main.scss`: Export color and number tokens

# 38.22.0 (24-01-2024)
### Feature
* `spt-cron-expression`: New component for creating cron expression

# 38.21.1 (23-01-2024)
### Fix
* `spt-select`: fix support of group by with selected objects

# 38.21.0 (21-01-2024)
### Feature
* `spt-grid-loaders`: New loader for grid based on CSS instead of SVGs
* `spt-grid`: Support new grid-loaders via input

# 38.20.0 (21-01-2024)
### Feature
* `spt-icon`: support applying icon colors globally

### Internal
* `spt-grid`: fix documentation in story

# 38.19.3 (21-01-2024)
### Fix
* `number-tokens`: fix all token names: --spt-numbers --> --spt-number
* `number-tokens`: change primitives style

# 38.19.2 (18-01-2024)
### Fix
* `spt-select`: fix unexpected scroll in safari when open dropdown;

# 38.19.1 (16-01-2024)
### Fix
* `spt-logs`: Fix hint style at top of logs

# 38.19.0 (16-01-2024)
### Feature
* `spt-summary-card-loaders`: New loaders for summary card based on CSS instead of SVGs
* `spt-summary-card`: Support new summary-card-loaders (Based on css-only loaders) via input (instead of using spt-busy)
* `number-tokens`: Adding CSS number tokens

# 38.18.3 (11-01-2024)
### Fix
* `spt-grid`: SelectionChange output emitted value before first data rendered

# 38.18.2 (09-01-2024)
### Fix
* `spt-busy`: Add missing imports, SVG is now background-image

# 38.18.1 (07-01-2024)
### Fix
* `spt-logs`: Padding at the top of the screen

# 38.18.0 (07-01-2024)
### Feature
* `color-tokens`: Adding CSS color tokens

# 38.17.0 (05-01-2024)
### Feature
* `sptIconRegistryService`: Enable private icons to be registered through shared icons service

# 38.16.1 (04-01-2024)
### Fix
* `spt-charts`: Make empty-states-img and no-data-img dynamic size and fit to the chart container

# 38.16.0 (04-01-2024)
### Feature
* `spt-grid`: Allow checkbox in header to select all groups

# 38.15.3 (2-1-2024)
### Fix
* `spt-grid`: SelectionChange output emitted value even if the selection don't changed

# 38.15.2 (24-12-2023)
### Fix
* `spt-select`:
    * Selected items in fromControl value were not updated properly
    * when using groupBy field, invalid items were deleted on close
    * wrong number of selected items was displayed in case the selection included invalid items

# 38.15.1 (24-12-2023)
### Feature
* `@spotinst/spot-icons`: Change package peer dependency to always require the 'latest' version

# 38.15.0 (18-12-2023)
### Feature
* `spt-select`: Added input showInvalidOptionsRemoveButton

# 38.14.0 (15-12-2023)
### Feature
* `spt-chart`: Introduce Sunburst chart and enable fully customizable legend

# 38.13.0 (14-12-2023)
### Feature
* `spt-logs`: Add whitelist for event details link

# 38.12.2 (12-12-2023)
### Fix
* `spt-logs`: Reset filters button resets both select and date picker

# 38.12.1 (11-12-2023)
### Internal
* `IconSizeDirective`: Export the directive as a module

# 38.12.0 (11-12-2023)
### Feature
* `spt-account-connection-funnel`: small business logic change;

# 38.11.1 (10-12-2023)
### Internal
* `spt-select-region`: Flags icons are automatically registered when using the component

# 38.11.0 (07-12-2023)
### Feature
* `spt-charts`: Enable dynamic text in legend on datapoint hover and legend styling

# 38.10.0 (07-12-2023)
### Feature
* `IconSizeDirective`: Add IconSizeDirective to control icon size

# 38.9.1 (05-12-2023)
### Fix
* `spt-grid`: Allow custom component for master ColDef

# 38.9.0 (04-12-2023)
### Feature
* `spt-diff-code-editor`: reduce bundle size of monaco editor

# 38.8.4 (30-11-2023)
### Fix
* `spt-icon`: Revert tooltip changes

# 38.8.2 (29-11-2023)
### Fix
* `spt-select`: compareWith function now performs loose comparison of objects

# 38.8.1 (28-11-2023)
### Fix
* `spt-grid`: Expose expand all header component

# 38.8.0 (28-11-2023)
### Feature
* `spt-grid`: Add expand all button and function to grouped grid

# 38.7.1(28-11-2023)
### Fix
* `spt-account-funnel`: costIntelligence url fix;

# 38.7.0(28-11-2023)
### Feature
* `spt-account-funnel`: new finOps card in AWS connection funnel;

# 38.6.1
### Internal
Refactor mat-icon to spt-icon for Storybook demos

* `spt-account-funnel`: mat-icon to spt-icon
* `spt-badge`: mat-icon to spt-icon
* `spt-date-picker`: header mat-icon to spt-icon

# 38.6.0 (09-11-2023)
### Feature
* `spt-empty-state`: New feature for a chart/table with no visible data

# 38.5.2 (08-11-2023)
### Fix
* `spt-chart`: hide pie/doughnut chart when clicking on deselectAll

# 38.5.1 (03-11-2023)
### Fix
* `spt-map-chart`: export MapChartType enum

# 38.5.0 (01-11-2023)
### Feature
* `spt-custom-tooltip`: support display custom tooltip conditionally

# 38.4.0 (01-11-2023)
### Feature
* `spt-chart`: emit event of legend item click when isSelectAll is true

# 38.3.1 (31-10-2023)
### Fix
* `spt-diff-code-editor`: Add glob to storybook build angular.json

# 38.3.0 (31-10-2023)
### Feature
* `spt-diff-code-editor`: Create spt-diff-code-editor and introduce relevant libraries

# 38.2.1 (29-10-2023)
### Fix
* `spt-code-editor`: export UploadFile model

# 38.2.0 (24-10-2023)
### Feature
* `spt-code-editor`: Add support for upload file

# 38.1.4 (19-10-2023)
### Internal
* `Icons and Logos`: Add vulnerability icon to navigation-icons-registry.module

# 38.1.3 (18-10-2023)
### Internal
* Guards changed from class-based to functional guards:
* `AuthGuard`
* `InfraCredsGuard`
* `CapabilitiesGuard`
* `FeatureFlagGuard`

# 38.1.2 (17-10-2023)
### Internal
* MatIcon replaced with SptIcon in these components/Storybook:
* `spt-select`
* `spt-tags`
* `spt-vertical-stepper`
* `spt-walkthrough-popover`

# 38.1.1 (17-10-2023)
### Fixes
* `spt-upload`: Max uploadable/size files messages on one line

# 38.1.0 (10-10-2023)
### Feature
* `spt-chart`: Replace highcharts with highstock and add story demonstrating crosshair label
* `spt-map-chart`: add max-width and ellipsis to y-axis label

# 38.0.1 (13-10-2023)
### Internal
MatIcon replaced with SptIcon in these components/Storybook:
* `spt-logs`
* `spt-filter-search-bar`
* `spt-logs`

* `spt-page-title`: Removed mat-icon and replace with spt-icon in Storybook

# 38.0.0 (06-10-2023)
### BREAKING CHANGE

<a href="https://spotinst.atlassian.net/wiki/spaces/COM/pages/2760671513/Breaking+Changes+Log#%5BinlineExtension%5D%5BhardBreak%5D38.0.0---06.10.2023---%23933%5BhardBreak%5Dspt-banner">
Breaking Change Confluence
</a>

* `spt-banner`: Content projection for mat-icon changed to spt-icon
* `spt-busy`: templateIDs INFO_TEXT_VERTICAL, INFO_TEXT_HORIZONTAL, INFO_TEXT_NO_LABEL, SUMMARY_CARD_12 removed

### Internal
* MatIcon replaced with SptIcon in these components:
* `spt-banner`
* `spt-busy`
* `spt-summary-card`
* `spt-chip`
* `spt-copy-to-clipboard`
* `spt-forms-list`
* `spt-expansion-panel`

# 37.11.0 (05-10-2023)
### Internal
* `spt-account-funnel`: Remove MatIcon
* `spt-overview`: Remove MatIcon from component and SB
* `spt-charts`: Using spt-icon for all empty states, remove unnecessary mapper
* `spt-grid`: Remove MatIcon from component and SB
* `spt-map-chart`: Using spt-icon for empty state
* `spt-code-editor`: Remove MatIcon from component and SB

# 37.10.0 (29-09-2023)
### Feature
* `spt-upload-file`: Multiple files scrolls after 4 files, max allowed 100 files for upload.

# 37.9.0 (28-09-2023)
### Feature
* `spt-charts`: add support for dynamic size

# 37.8.0 (28-09-2023)
### Feature
* `spt-grid`: support sortIndex on colDef

# 37.7.1 (28-09-2023)
### Internal
* `spt-select`: change loader size
* `spt-search-bar`: change loader size

# 37.7.0 (26-09-2023)
### Feature
* `spt-code-editor`: style changes based on Figma design, add option showLineNumbers

# 37.6.0 (21-09-2023)
### Feature
* `spt-schedule-cron-expression`: Add support for external actions types and custom action options dropdown

# 37.5.0 (20-09-2023)
### Feature
* `spt-code-editor`: Support default and custom placeholder text

# 37.4.1 (20-09-2023)
### Fix
* `processing-animated.svg`: Animate without relying on another animation id's

# 37.4.0 (20-09-2023)
### Feature
* `spt-charts`: Empty chart svg/message displayed on all unselected

# 37.3.2 (20-09-2023)
### Internal
* `spt-code-editor`: Hide the reset button if readonly mode is true and showEditMode is false.

# 37.3.1 (18-09-2023)
### Fix
* `spt-select`: Objects with equal labels can be compared for displaying selected options

# 37.3.0 (14-09-2023)
### Feature
* `date-time-formatter`: Add SHORT_DATE_S and SHORT_DATE_L to DateTimeFormatter
* `button stories`: Sort button stories and remove duplicate

# 37.2.2 (07-09-2023)
### Internal
* `spt-overview`: fix disabled section having extra indentation

# 37.2.1 (07-09-2023)
### Internal
* `font-face`: Replace IBM font from assets with a link to s3 server

# 37.2.0 (06-09-2023)
### Feature
* `spt-upload-file`: New component for uploading files to the browser

# 37.1.2 (04-09-2023)
### Bug Fix
* `spt-code-editor`: Setting isReadOnly after init is ignored by ace

# 37.1.1 (03-09-2023)
### Bug Fix
* `spt-grid`: Fix a bug where custom summary row wouldn't show the custom component

# 37.1.0 (31-08-2023)
### Feature
* `spt-form-list`: add support for form list disabled mode and delete button disabled mode

# 37.0.0 (30-08-2023)
### BREAKING CHANGE
* `spot-icons`: Moved to peer dependency in lib package. Addresses dependency issues from spot-icons dependency in version 36.8.0

# 36.12.0 (28-08-2023)
### Feature
* `spt-grid`: add custom loading cell per spot design for server side grids

# 36.11.6 (24-08-2023)
### Internal
* `LocalStorageService`: Fix demo for Storybook

# 36.11.5 (24-08-2023)
### Internal
* `LocalStorageService`: Demo removed from gallery, added to Storybook
### Fix
* `spt-charts`: Fix fonts for x- and y-axis for Charts storybook

# 36.11.4 (23-08-2023)
### Bug Fix
* `spt-date-picker`: Fixed dropdown issue in different timezones
### Internal
* `spt-select`: Added story for custom not found message

# 36.11.3 (22-08-2023)
### Internal
* `mat-slider`: Remove mat slider css file from library

# 36.11.2 (21-08-2023)
### Internal
* `spt-code-editor`: Renamed and exposed DownloadStatus enum

# 36.11.1 (17-08-2023)
### Fix
* `spt-account-connection-funnel`: Removed description from management acc

# 36.11.0 (17-08-2023)
### Feature
* Add stars icon to general-icon.registry.module

# 36.10.0 (16-08-2023)
### Feature
* `icons`: IL region icon added to flag registries

# 36.9.2 (16-08-2023)
### Fix
* `spt-account-connection-funnel`: Customize restricted for GovCloud and China

# 36.9.1 (14-08-2023)
### Internal
* `spt-map-chart`: update heatmap color palette and data labels styling

# 36.9.0 (10-08-2023)
### Feature
* `sptCustomTooltip`: add support for closing the tooltip on demand.

# 36.8.0 (11-08-2023)
### Feature
* `spt-icon`: New component to render spot icons and spt-icon-old component
### Internal
* `iconsRegistry`: All registries have been deprecated
* `icon-registry`: Deprecated
* `spt-icon-registry`: New registry service to store and retrieve spot icons
* `spt-icon-old`: Deprecation

# 36.7.0 (10-08-2023)
### Feature
* `spt-select`: add support for customizable invalid options warning under select

# 36.6.1 (10-08-2023)
### Fix
* `spt-code-editor`: fixed memory leak

# 36.6.0 (10-08-2023)
### Feature
* `spt-busy`: spt-busy supports custom images from urls

# 36.5.0 (09-08-2023)
### Feature
* Added new general icon: `unlock`, `manage`

# 36.4.0 (09-08-2023)
### Feature
* Added new navigation icon: `notebook`

# 36.3.0 (08-08-2023)
### Feature
* `spt-charts`: add support and stories for marker configuration

# 36.2.4 (08-08-2023)
### Bug Fix
* `spt-logs`: update color for default severity and change severity display in logs to all uppercase

# 36.2.3 (08-08-2023)
### Fix
* `spt-charts`: Custom tooltip will render over legend when isSelectAll is true

# 36.2.2 (07-08-2023)
### Feature
* Added new general icon: `common-blue`

# 36.2.1 (06-08-2023)
### Fix
* `spt-select`: dropdown position was broken when using appendTo="body"

# 36.2.0 (04-08-2023)
### Feature
* `spt-filter-search-bar`: add support for server side grid

# 36.1.0 (03-08-2023)
### Feature
* `spt-date-picker`,`spt-logs`: increase interactivity between dateTimeRange in date-picker-header and presets in date-picker-footer

# 36.0.0 (02-08-2023)
### BREAKING CHANGE
* `spt-select-old`: remove old spt-select component
### Feature
* `spt-select`: add template and control for not found message

# 35.5.0 (01-08-2023)
### Feature
* `spt-select`: added dropDownPosition attribute
* `spt-tags`: added autoScroll to attribute to last element

# 35.4.2 (01-08-2023)
### Feature
* Added new general icon: `common`

# 35.4.1 (30-07-2023)

### Fix
* `spt-service-card`: fix broken style
* `spt-search-bar`: fix story example
* `mat-dialog`: add display: flex to header

# 35.4.0 (27-07-2023)
### Feature
* `spt-date-picker`: add support for 14D preset

# 35.3.0 (26-07-2023)
### Feature
* `spt-code-editor`: add reset function and button
* `spt-logs`: align range in spt-logs with range passed in from parent component

# 35.2.0 (26-07-2023)
### Feature
* `filter-search-bar`: add flag to restrict to searching categorically.

# 35.1.0 (21-07-2023)
### Feature
* `spt-code-editor`: add catch error and event emitter for code download status

# 35.0.0 (20-07-2023)
### BREAKING CHANGE
* `spt-filter-search-bar`, `spt-value-selector`: allow for multiple sets of icons

# 34.14.4 (20-07-2023)
### Bug Fix
* `spt-form-list`: enable validation on initialization when form list already exists

# 34.14.3 (20-07-2023)
### Fix
* `spt-charts`: fix empty states flex display
* `spt-map-chart`: fix empty states flex display

# 34.14.2 (19-07-2023)
### Internal
* `mat-spinner`: remove mat-spinner usages
* `menu`: mat-menu style fixes

# 34.14.1 (17-07-2023)
### Internal
* `iconsRegistry`: rename cloud-bi icon to cost-intelligence
* `iconsRegistry`: rename cloud-billing icon to billing-engine

# 34.14.0 (17-07-2023)
### Features
* `spt-charts`: add custom tooltip option.

# 34.13.6 (17-07-2023)
### Fix
* `scroll-to-invalid`: fix scroll-to-invalid story not working

# 34.13.5 (14-07-2023)
### Fix
* `update-ng-package.json`: change assets path to exclude stories files from lib/dist folder

# 34.13.4 (13-07-2023)
### Fix
* `update-package`: update @storybook/addon-designs package to stable version.
* `update-storybook`: update @storybook package to latest version

# 34.13.3 (12-07-2023)
### Fix
* `layout.scss`: add flex-cross-stretch and flex-1-1-100

# 34.13.2 (12-07-2023)
### Internal
* removed unused Components from gallery
### Features
* Added info-outline icon in general-icon.registry.module

# 34.13.1 (11-07-2023)
### Fix
* `directive-export`: add the ScrollToInvalidFieldModule to directive module

# 34.13.0 (11-07-2023)
### Features
* `spt-grid`: add an option to customize the summary row in a customized cell

# 34.12.0 (07-07-2023)
### Features
* `spt-slider`: add percentage distribution slider

# 34.11.3 (05-07-2023)
### Features
* `mat-dialog`: Added mat-dialog to storybook

# 34.11.2 (05-07-2023)
### Internal
* `spt-date-picker`: Convert untyped form to typed form
* `spt-date-picker`: Convert untyped form to typed form
* `spt-form-list`: Convert untyped form to typed form
* `spt-tags`: Convert untyped form to typed form
* `spt-schedule-cron-expression`: Convert untyped form to typed form
* `spt-slider`: Convert untyped form to typed form

# 34.11.1 (06-07-2023)
### Fix
* `spt-custom-tooltip`: Event subscribers are only created once for each tooltip

# 34.11.0 (05-07-2023)
### Feature
* `spt-badge`: add support for custom colors

# 34.10.0 (05-07-2023)
### Feature
* `spt-logs`: add selected preset in date-picker for initialization

# 34.9.0 (05-07-2023)
### Feature
* `spt-select`: add typeahead and onscroll options and story for server side search select

# 34.8.1 (30-06-2023)
### Features
* `spt-info-text-loader`: add new loader

# 34.8.0 (29-06-2023)
### Feature
* `custom-tooltip`: Add option to maintain tooltip on element with children elements

# 34.7.1 (29-06-2023)
### Internal
* `clean lint`: all lint issues fixed

# 34.7.0 (26-06-2023)
### Feature
* `spt-date-picker`: enable keyboard navigation in time input dropdown
### Internal
* `mat-tab`: move tab stories from gallery to storybook

# 34.6.2 (23-06-2023)
### Fixes
* `spt-code-editor`: Fix ngOnChanges will no longer reinitialize editor on code change

# 34.6.1 (18-06-2023)
### Features
* `spt-carousel`: Added a loader story
### Bug Fix
* `spt-select` : Fix X icon size in remove button

# 34.5.1 (18-06-2023)
### Bug Fix
* `mat-input`: style fixes

# 34.5.0 (16-06-2023)
### Features
* `spt-schedule-cron-expression`: add numerical ranges to the valid cron expressions
### Bug Fix
* `spt-schedule-cron-expression`: fix commas for cron scheduler

# 34.4.0 (14-06-2023)
### Feature
* `spt-grid`: enable custom component for group titles and secondary items in grouped columns

# 34.3.4 (14-06-2023)
### Bug Fix
* `spt-chart`: Bug fix console errors
### Features
* `spt-account-connection-funnel`: Added data-aid attributes for QA

# 34.3.3 (13-06-2023)
### Bug Fix
* `lint diff`: fix the warnings for lint:diff

# 34.3.2 (13-06-2023)
### Bug Fix
* `spt-date-picker`: remove focus box shadow on right/left arrows when focused
* `spt-carousel-card`: remove focus box shadow on right/left arrows when focused

# 34.3.1 (13-06-2023)
### Bug Fixes
* `spt-chart`: Bug fix console errors
* `spt-filter-search-bar`: Fixed chips top and bottom spacing

# 34.3.0 (12-06-2023)
### Features
* `spt-chart`: Add ng-content on the side of the legend box

# 34.2.4 (11-06-2023)
### Bug Fix
* `mat-input`: Fix bug storybook not loading

# 34.2.3 (09-06-2023)
### Features
* `mat-menu`: Add mat-menu to storybook

# 34.2.2 (08-06-2023)
### Internal
* `spt-select`: added documentation to Storybook readme for proper isDisabled use
* `spt-breadcrumbs`: change currentPage from const to Input
* `mat-input`: Move mat-input-field demo from Gallery to Storybook

# 34.2.1 (08-06-2023)
### Internal
* `spt-gauge`: Add demo for gauge component to Storybook

# 34.2.0 (07-06-2023)
### Features
* `breadcrumbs`: Improved breadcrumbs design in storybook

# 34.1.0 (07-06-2023)
### Features
* `spt-charts`: Add Select All option for charts legend

# 34.0.0 (06-06-2023)
### BREAKING CHANGE
* `spt-date-picker`: Change time input and display to 12-hour format. Enable time input by manual input and selecting time in dropdown.

# 33.2.0 (06-06-2023)
### Features
* `spt-simple-search-bar`: add spt-simple-search-bar

# 33.1.0 (06-06-2023)
### Features
* `spt-permission-policy`: removed error message logic;

# 33.0.2 (06-06-2023)
### Bug Fix
* `date-picker`: Fix presets for 7D 1W 1M 6M 1Y to be correct

# 33.0.1 (05-06-2023)
### Internal
* `spt-header`: remove spt-header from shared library, remove header-demo and sidebar-demo from gallery

# 33.0.0 (05-06-2023)
### BREAKING CHANGE
* `spt-grid`: Only import necessary ag-grid modules for spt-grid

# 32.2.1 (04-06-2023)
### Internal
* `Icons and Logos`: Add threats icon to navigation-icons-registry.module

# 32.2.0 (31-05-2023)
### Features
* `Icons and Logos`: Added threats icon

# 32.1.9 (29-05-2023)
### Bug Fix
* `spt-chips`: fix controllers not working in storybook
* `storybook`: fix Story Store v7 problem in .storybook/main.js

# 32.1.8 (24-05-2023)
### Bug Fix
* `spt-select`: add number of items in group title and all

# 32.1.7 (23-05-2023)
### Bug Fix
* `tests`: stabilizing component creation on some tests

# 32.1.6 (23-05-2023)
### Bug Fix
* `tests`: fix missing icons on all tests
* `storybook`: fix comodoc build so it ignores dist folder

# 32.1.5 (22-05-2023)
### Bug Fix
* `spt-account-connection-funnel`: Various UI fixes

# 32.1.4 (22-05-2023)
### Internal
* `spt-carousel`: Added spt-carousel to storybook
* `spt-carousel`: style adjustment to the default empty state

# 32.1.3 (19-05-2023)
### Bug Fix
* `spt-form-list`: fix trigger validation programmatically for form-list derived component

# 32.1.2 (18-05-2023)
### Bug Fix
* `spt-vertical-stepper`: remove extra padding-bottom from sub-steps container (.mat-vertical-content)

# 32.1.1 (17-05-2023)
### Internal
* `spt-busy`: Added Log loaders to storybook
* `spt-logs`: Refactor log component styling

# 32.1.0 (17-05-2023)
### Features
* `sptMarkFormFieldValidity`: add directive to mark invalid form fields
* `sptScrollToInvalidForm`: add directive to scroll to invalid form fields
* `spt-expansion-panel`: expose afterExpand and afterCollapse outputs
* `spt-vertical-stepper`: add stepLabelClicked output

# 32.0.0 (16-05-2023)
### BREAKING CHANGE
* `spt-search-bar`: remove old version, version 2 is the only existing one.

# 31.0.3 (16-05-2023)
### Bug Fix
* `Angular 15 upgrade`: return coverage

# 31.0.2 (15-05-2023)
### Bug Fix
* `Angular 15 upgrade`: version bump

# 31.0.1 (14-05-2023)
### Bug Fix
* `Angular 15 upgrade`: version bump

# 31.0.0 (14-05-2023)

### BREAKING CHANGE

* `Angular 15 upgrade`: upgrade client shared to angular 15

<a name="30.1.3"></a>
# 30.1.3 (11-05-2023)
### Features
* `Icons and Logos`: Update security logo in Storybook

### Internal
* `spt-busy`: Added loaders to storybook

<a name="30.1.2"></a>
# 30.1.2 (10-05-2023)
### Bug Fixes
* `spt-gauge`: Remove Flex Layout Module and refactor all styling to css
* `spt-search-bar`: Remove Flex Layout Module and refactor all styling to css
* `spt-expansion panel`: Remove Flex Layout Module and refactor all styling to css

<a name="30.1.2"></a>
# 30.1.2 (10-05-2023)
### Features
* `spt-grid`: Added cssClass property to gridGroupedColumn model

<a name="30.1.1"></a>
# 30.1.1 (09-05-2023)
### Bug Fixes
* `spt-select`: Added truncated tooltip to defaultMultiLabel template
* `button-toggle`: Centered button text content

<a name="30.1.0"></a>
# 30.1.0 (09-05-2023)
### Features
* `iconsRegistry`: added cloud-bi and cloud-billing app logo icon

<a name="30.0.8"></a>
# 30.0.8 (08-05-2023)
### Bug Fixes
* `custom-tooltip-story`: Update Info icon

<a name="30.0.7"></a>
# 30.0.7 (08-05-2023)
### Bug Fixes
`spt-select`: When isChips and searching first chip is clickable

<a name="30.0.6"></a>
# 30.0.6 (04-05-2023)
### Bug Fixes
* `spt-funnel-step`: Selecting 'Azure Billing Account' should redirect to Eco Azure registration form

<a name="30.0.5"></a>
# 30.0.5 (04-05-2023)
### Bug Fixes
* `spt-select`: MultiSelect error when selectedItem is null (length of undefined)

<a name="30.0.4"></a>
# 30.0.4 (03-05-2023)
### Bug Fixes
* `spt-select`: MultiSelect and Chips are hidden while searching
* `spt-select`: Adjust height of options child to match group option. Remove disabling virtual scroll on groupByField

<a name="30.0.3"></a>
# 30.0.3 (02-05-2023)
### Bug Fixes
* `spt-select`: selecting items no longer changes chips ordering, all items selected will scroll items to top on open
* `spt-select`: Added indeterminate state for group options

<a name="30.0.2"></a>
# 30.0.2 (01-05-2023)
### Bug Fixes
* `spt-date-picker`: fix console error

<a name="30.0.1"></a>
# 30.0.1 (30-04-2023)

### Bug Fixes
* `spt-account-connection-funnel`: ff returns default cf link;

<a name="30.0.0"></a>

# 30.0.0 (30-04-2023)

### BREAKING CHANGE

* `client-core-services-types`: upgrade to version 4.0.0
* Replace public api with interfaces

<a name="29.3.0"></a>
# 29.3.0 (30-04-2023)

### Features
* `spt-azure-connection-funnel`: Add new button to download ocaen aks 2.0 policy

<a name="29.2.4"></a>
# 29.2.4 (27-04-2023)
### Internal
* `spt-summary-card`: Updated titles and relevant styling

<a name="29.2.3"></a>
# 29.2.3 (27-04-2023)
### Internal
* `spt-grid`: added server side infinite scroll demonstration to storybook
### Bug Fixes
* `spt-date-picker`: fix the error message on end time input

<a name="29.2.2"></a>
# 29.2.2 (27-04-2023)

### Bug Fixes
* `spt-account-connection-funnel`: fix hide text under ff;
* `spt-account-connection-funnel`: fix generate external id on each run;

<a name="29.2.1"></a>
# 29.2.1 (27-04-2023)

### Features
* `spt-badge`: Add grey badge color

<a name="29.2.0"></a>
# 29.2.0 (25-04-2023)
### Feature
* `spt-account-connection-funnel`: added aws permission customization

<a name="29.1.0"></a>
# 29.1.0 (25-04-2023)

### Feature
* `spt-http-params`: added encoder prop;
### Bug Fixes
* `spt-account-connection-funnel`: fix request with custom encoder;

<a name="29.0.5"></a>
# 29.0.5 (24-04-2023)

### Bug Fixes
* `spt-permission-policy`: Fix logic for processing json response;


<a name="29.0.4"></a>
# 29.0.4 (23-04-2023)

### Bug Fixes
* `spt-map-chart`: Fix error when heatmap is empty

<a name="29.0.3"></a>
# 29.0.3 (21-04-2023)
### Internal
* `spt-schedule-cron-expression`: Update error message for required error
* `spt-tags`: Update error message for required error

<a name="29.0.2"></a>
# 29.0.2 (20-04-2023)
### Internal
* `spt-select`: Add demo to Storybook for handling select component in modal

<a name="29.0.1"></a>
# 29.0.1 (13-04-2023)
### Internal
* `spt-chips`: Remove Flex Layout Module and refactor all styling to css
* `spt-chip-list`: Remove Flex Layout Module and refactor all styling to css
* `spt-date-picker`: Remove Flex Layout Module and refactor all styling to css

<a name="29.0.0"></a>
# 29.0.0 (13-04-2023)
### BREAKING CHANGE
* `spt-summary-card`: Add summary card with two titles and relevant styling

<a name="28.0.1"></a>
# 28.0.1 (11-04-2023)
### Bug Fixes
* `spt-charts`: Removed tooltip border color for Doughnut & Pie chart

<a name="28.0.0"></a>
# 28.0.0 (10-04-2023)
### BREAKING CHANGE
* `spt-select`: Updated default chip template to support multiselect collapsable/expandable chips when overflowed

<a name="27.9.0"></a>
# 27.9.0 (10-04-2023)
### Feature
* `spt-vertical-stepper`: support both linear and not-linear stepper

<a name="27.8.2"></a>
# 27.8.2 (07-04-2023)
### Bug Fixes
* `spt-charts`: Fixed tooltip legend and chart name position in Doughnut and Pie charts

<a name="27.8.1"></a>
# 27.8.1 (07-04-2023)
### Bug Fixes
* `spt-forms-list`: Fix flex for input section filling entire container

<a name="27.8.0"></a>
# 27.8.0 (07-04-2023)
### Feature
* `version-service`: Add version service to be used by MFEs

<a name="27.7.5"></a>
# 27.7.5 (06-04-2023)
### Bug Fixes
* `spt-date-picker`: Fix date become null on manual input and update error messages

<a name="27.7.4"></a>
# 27.7.4 (04-04-2023)
### Internal
* `spt-badge`: Add data-aid to icon
* `spt-date-picker`: Add data-aid to preset dates, clear and apply buttons
* `spt-select`: Add data-aid to select all, group item, multi item and default item checkboxes
* `spt-search-bar-input-old`: Add data-aid to input box, search and clear buttons
* `spt-search-bar-input`: Add data-aid to input box, search and clear buttons
* `spt-grid`: Add data-aid to empty-state

<a name="27.7.3"></a>
# 27.7.3 (04-04-2023)
### Bug Fixes
* `spt-account-connection-funnel`: fix HttpParams encode method;

<a name="27.7.2"></a>
# 27.7.2 (31-03-2023)
### Bug Fixes
* `spt-summary-card`: Add summary card with hyperlink title
* `mat-stepper `: add disabled state class in scss

<a name="27.7.1"></a>
# 27.7.1 (30-03-2023)
### Bug Fixes
* `spt-logs`: Removed flex-layout
* `spt-forms-list`: Removed flex-layout
* `spt-summary-card`: Removed flex-layout

<a name="27.7.0"></a>
# 27.7.0 (29-03-2023)
### Bug Fixes
* `spt-filter-search-bar`:
    * Remove min width of search bar
### Features
* `spt-button`:
    * Add trailing button story example

<a name="27.6.1"></a>
# 27.6.1 (27-03-2023)
### Bug Fixes
* `spt-select`:
    * 'Clear all' logic fix

<a name="27.6.0"></a>
# 27.6.0 (26-03-2023)
### Features
* `spt-busy`:
    * Add single line busy to spt-busy

<a name="27.5.3"></a>
# 27.5.3 (22-03-2023)
### Bug Fixes
* `spt-select`: Add hierarchical rules for css styling for dropdown panels appended to body
* `spt-select`: Added conditional for virtual scroll on initialization if options are being grouped

<a name="27.5.2"></a>
# 27.5.2 (21-03-2023)
### Bug Fixes
* `spt-permission-policy`:
    * show attention icon when update permissions;
    * added rootItem logic;

<a name="27.5.1"></a>
# 27.5.1 (20-03-2023)
### Bug Fixes
* `spt-select`: fix outer control markAsTouched dependency

<a name="27.5.0"></a>

# 27.5.0 (19-03-2023)

### Features

* `iconsRegistry`:
    * Added processing-animated icon

<a name="27.4.6"></a>
# 27.4.6 (17-03-2023)
### Bug Fixes
* `spt-select`: Remove redundant circle on hover for mat-icon

<a name="27.4.5"></a>
# 27.4.5 (15-03-2023)
### Bug Fixes
* `spt-filter-search-bar`: Add escape regex handler for special characters

<a name="27.4.4"></a>

# 27.4.4 (14-03-2023)

### Bug Fixes

* `mat-horizontal-stepper`: styling adjustments including font size, step-icon size, step width and separator line width

<a name="27.4.3"></a>
# 27.4.3 (14-03-2023)
### Fixes
* `spt-date-picker`: date field changes dynamically when changing start/end time

<a name="27.4.2"></a>
# 27.4.2 (14-03-2023)
### Fixes
* `spt-expansion-panel`: padding added for header title when chevron icon is on the right

<a name="27.4.1"></a>

# 27.4.1 (13-03-2023)
### Bug Fixes
* `spt-account-connection-funnel`: call updateAccountUserMappings$ after account was connected;

<a name="27.4.0"></a>

# 27.4.0 (13-03-2023)

### Features

* `spt-scroll-section`: Add output for scroll event

<a name="27.3.0"></a>
# 27.3.0 (13-03-2023)
### Features
* `spt-permission-policy`:
    * new PermissionPolicyModule;
    * storybook examples;

<a name="27.2.3"></a>

# 27.2.3 (10-03-2023)

### Fixes

* `spt-code-editor`: Add maxLines parameter, default and lower bound for maxLines and minLines

<a name="27.2.2"></a>
# 27.2.2 (08-03-2023)
### Fixes
* `spt-code-editor`: change export tooltip text

<a name="27.2.1"></a>
# 27.2.1 (06-03-2023)
### Fixes
* `spt-select`: fix this.selectedItemsByGroup is not iterable error
* `spt-select`: fix condition for updating selectedItemsByGroup
* `spt-select`: fix collapse icon rotation

<a name="27.2.0"></a>
# 27.2.0 (06-03-2023)
### Features
* `storybook sort`: storybook will now be sorted by the ABC
### Fixes
* `icons-readme.stories.mdx`: fix the errors in the mdx file

<a name="27.1.0"></a>
# 27.1.0 (06-03-2023)
### Fixes
* `pricing-plan.model`: extended pricing-plan.model (added contractTypes)

<a name="27.0.2"></a>
# 27.0.2 (01-03-2023)
### Fixes
* `spt-select`: Aligned groups and item text color

<a name="27.0.1"></a>
# 27.0.1 (01-03-2023)
### Fixes
* `azure-new-v2`: name change for new azure icon

<a name="27.0.0"></a>
# 27.0.0 (01-03-2023)
### BREAKING CHANGE
* `expansion-panel`: 'title' input changed to 'titleText'
### Features
* `expansion-panel`: Added truncate tooltip for long text in the title

<a name="26.9.2"></a>
# 26.9.2 (27-02-2023)
### Fixes
* `spt-select`: "invalid options" displayed unexpectedly (FINF-4087)

<a name="26.9.1"></a>

# 26.9.1 (27-02-2023)

### Fixes

* `spt-select`: fix exception when bindValue not in use
*
<a name="26.9.0"></a>

# 26.9.0 (26-02-2023)

### Features

* `azure-agreements-step`: When creating a new account if selecting Azure, then connecting with EA agreement (selection box) will redirect to Eco. Therefore `azure-ea-connect-step` component was removed.

<a name="26.8.9"></a>
# 26.8.9 (23-02-2023)
### Fixes
* `spt-select`: Remove button no longer centered to div when using custom invalid options template

<a name="26.8.8"></a>

# 26.8.8 (21-02-2023)

### Fixes

* `azure-new.svg`: change fill=url path structure to style attribute

<a name="26.8.7"></a>

# 26.8.7 (20-02-2023)

### Fixes

* `spt-cron-schedule`: fix float value and whitespace in ends of fetched values

<a name="26.8.6"></a>

# 26.8.6 (19-02-2023)

### Features

* `spt-grid`: update ag-grid license

<a name="26.8.5"></a>

# 26.8.5 (16-02-2023)

### Fixes

* `spt-grid-tooltip`: fix tooltip for grouped column

<a name="26.8.4"></a>

# 26.8.4 (16-02-2023)

### Fixes

* `spt-date-picker`: date field changes dynamically when clicking set to now

<a name="26.8.3"></a>

# 26.8.3 (16-02-2023)

### Fixes

* `filter-search-bar-v2` - opening a model doesn't work bug

<a name="26.8.2"></a>

# 26.8.2 (16-02-2023)

### Fixes

* `schedule-cron-expression` - trigger mark as touched for all formList fields

<a name="26.8.1"></a>

# 26.8.1 (15-02-2023)

### Fixes

* `spt-slider`: fix value indicator changed to NaN when clicking on bar

<a name="26.8.0"></a>

# 26.8.0 (15-02-2023)

### Features

* `spt-select` - New custom invalid options template directive added for custom message content projection to spt-select header

<a name="26.7.2"></a>

# 26.7.2 (15-02-2023)

### Features

* `spt-select` - Added min-width/height to avoid icon size shrink
* `spt-select` - Aligned Placeholder text to be centered for single select

<a name="26.7.1"></a>

# 26.7.1 (15-02-2023)

### Fixes

* `spt-charts`- Updated the chart legend styling
* `spt-charts`- Updated storybook and readme for color in bar-line chart

<a name="26.7.0"></a>

# 26.7.0 (15-02-2023)

### Features

* `spt-grid-header-info-tooltip` - New custom header component to be used in spt-grid

<a name="26.6.3"></a>

# 26.6.3 (15-02-2023)

### Fixes

* `spt-code-editor` - add id attribute to code editor div

<a name="26.6.2"></a>

# 26.6.2 (14-02-2023)

### Fixes

* `form-list` - dynamic bindValue.
* `schedule-cron-expression` - convert cron expression to TaskParams object.

<a name="26.6.1"></a>

# 26.6.1 (14-02-2023)

### Fixes

* `spt-select` - fix remove invalid options by using immutable object

<a name="26.6.0"></a>

# 26.6.0 (13-02-2023)

### Features

* `iconsRegistry`:
    * Added QA (Qatar) region flag

<a name="26.5.1"></a>

# 26.5.1 (13-02-2023)

### Fixes

* `spt-grid` - excessive column properties are stored when column selection is saved to localStorage
  using `columnsSelectionLocalStorageKey` (FINF-3919)

<a name="26.5.0"></a>

# 26.5.0 (12-02-2023)

### Fixes

* revert - Add data-aid to all components exposed in public.api.ts

<a name="26.4.1"></a>

# 26.4.1 (12-02-2023)

### Fixes

* `spt-select` - trigger mark as touched only when isOnlySelf set to true

<a name="26.4.0"></a>

# 26.4.0 (10-02-2023)

### Features

* Add data-aid to all components exposed in public.api.ts

<a name="26.3.0"></a>

# 26.3.0 (09-02-2023)

### Fixes

* `spt-select`: for every markAsTouched event, the component will run change detection.
  it allows users to programmatically touch each from control.

<a name="26.2.4"></a>

# 26.2.4 (09-02-2023)

### Fixes

* `spt-select`: 'All' checkbox should revaluate onChanges.

<a name="26.2.3"></a>

# 26.2.3 (08-02-2023)

### Fixes

* `spt-form-list`: Add debounce to input

<a name="26.2.2"></a>

# 26.2.2 (08-02-2023)

### Internal

* `spt-code-editor`: Change maxLines back to default Infinity

<a name="26.2.1"></a>

# 26.2.1 (06-02-2023)

### Fixes

* `spt-overview`: Remove left padding.
* `spt-form-list`: Move summary content to the bottom
* `spt-expansion-panel`: Remove body's left & right padding

<a name="26.2.0"></a>

# 26.2.0 (06-02-2023)

### Features

* `expansion-panel`: Add secondary expansion panel option

<a name="26.1.4"></a>

# 26.1.4 (05-02-2023)

### Fixes

* `spt-select`: 'All' checkbox appears on multiselect only after open it on the second time.

<a name="26.1.3"></a>

# 26.1.3 (01-02-2023)

### Maintenance (internal)

* `icons`: Add stories for icon color and size override

<a name="26.1.2"></a>

# 26.1.2 (01-02-2023)

### Fixes

* `spt-banner`: adjust banner icons size to align with design

<a name="26.1.1"></a>

# 26.1.1 (01-02-2023)

### Fixes

* `spt-select`: added input isCollapsible for expand/collapse feature
* Fix styling issues for single/multi select

<a name="26.1.0"></a>

# 26.1.0 (01-02-2023)

### Features

* `spt-grid`: expose new `SptGridApi` for allowing more control over row expansion state

### Fixes

* `spt-grid`: empty state was not displayed when using the `externallyFilteredIds` option

<a name="26.0.1"></a>

# 26.0.1 (01-02-2023)

### Fixes

* `NavigationIconsRegistryModule`: added missing ocean-spark logo

<a name="26.0.0"></a>

# 26.0.0 (01-02-2023)

### BREAKING CHANGES

* `spt-select`: limited the width of the container for `spt-select-multi-item-tmp` directive
* `spt-select`: the type cursor appear on the left side of the Placeholder text
* `spt-select`: new logic when groupByField & isSearchable & isMultiSelect

<a name="25.24.3"></a>

# 25.24.3 (31-1-2023)

### Fixes

* `spt-select`: fixed group name undefined - added ?

<a name="25.24.2"></a>

# 25.24.2 (30-1-2023)

### Fixes

* `spt-banner`: Update close and error icons

<a name="25.24.1"></a>

# 25.24.1 (30-01-2023)

### Fixes

* `spt-code-editor`: Add data aid to component

<a name="25.24.0"></a>

# 25.24.0 (29-01-2023)

### Features

* `date-time-formatter-directive`: support the date-time-formatter directive to unify date and time to a string

### Fixes

* `spt-select`: remove multiple selection "All" when item list is empty

<a name="25.23.1"></a>

# 25.23.1 (29-01-2023)

### Features

* `spt-filter-search-bar`: option to add icons to dropdown items and dropdown sub items

<a name="25.23.0"></a>

# 25.23.0 (26-01-2023)

### Features

* `iconsRegistry`:
    * add new Azure icon to external logos
    * add all navigation logos
    * add cloud-checkr to spot product logos
    * add sns to external logos
    * add announcement, bell, chevron-down, chevron-left,
      chevron-up, email-black, instances-horizontal, manage-user, settings-black, sort-ascending, sort-descending,
      triangle-up, triangle-up-and-down, user, users to general icons

<a name="25.22.1"></a>

# 25.22.1 (26-01-2023)

### Fixes

* `spt-grid`: tooltip styling adjustments

<a name="25.22.0"></a>

# 25.22.0 (25-01-2023)

### Features

* `spt-select-regions`: new spt-select wrapper component for regions
* Demo/readme added to Storybook

<a name="25.21.4"></a>

# 25.21.4 (24-01-2023)

### Fixes

* `spt-expansion-panel`: nested expansion-panel arrow icon is always open

<a name="25.21.3"></a>

# 25.21.3 (23-01-2023)

### Fixes

* `spt-overview`: added ngOnChanges, css fix - added spaces

<a name="25.21.2"></a>

# 25.21.2 (20-01-2023)

### Fixes

* `NotificationsService`: fix word wrap in toast component and add notification demo for demonstration

<a name="25.21.1"></a>

# 25.21.1 (20-01-2023)

### Breaking Changes

* `spt-code-editor`: fix maxLines parameter and add validation for minLines

<a name="25.21.0"></a>

# 25.21.0 (20-01-2023)

### Features

* `spt-filter-search-bar`: Added disabled state story

<a name="25.20.0"></a>

# 25.20.0 (20-01-2023)

### Features

* `spt-select`: grouped spt-select will have expandable/collapsible group options

<a name="25.19.0"></a>

# 25.19.0 (17-01-2023)

### Features

* `spt-select`: support single-selection with grouping

<a name="25.18.5"></a>

# 25.18.5 (17-01-2023)

### Fixes

* `spt-select`: change placeholder text

<a name="25.18.4"></a>

# 25.18.4 (11-01-2023)

### Fixes

* `spt-filter-search-bar`: clicking outside the auto complete panel closes it

<a name="25.18.3"></a>

# 25.18.3 (10-01-2023)

### Fixes

* `route-based-communication`: fixed switch account mechanism using deep clone to `tempRouterReuseStrategyConfig` so it
  won't be overridden

<a name="25.18.2"></a>

# 25.18.2 (09-01-2023)

### Fixes

* `spt-expansion-panel`: remove left margin and border radius

<a name="25.18.1"></a>

# 25.18.1 (08-01-2023)

### Fixes

* `spt-slider`: content didn't fill the whole container + missing null checks

<a name="25.18.0"></a>

# 25.18.0 (08-01-2023)

### Features

* `spt-overview`: support optional custom icons & tooltips
* `spt-overview`: support disabled sections

<a name="25.17.0"></a>

# 25.17.0 (08-01-2023)

### Features

* `spt-filter-search-bar`: search and x right icons float in the middle of search bar

<a name="25.16.0"></a>

# 25.16.0 (05-01-2023)

### Features

* `iconsRegistry`: add spot-settings icon

<a name="25.15.4"></a>

# 25.15.4 (05-01-2023)

### Fixes

* `spt-tags`: remove left margin

<a name="25.15.3"></a>

# 25.15.3 (05-01-2023)

### Maintenance (internal)

* `spt-select`: Storybook custom items uses custom-multi-label-tmp to show icon

<a name="25.15.2"></a>

# 25.15.2 (04-01-2023)

### Fixes

* `spt-grid`: Grid with header checkbox now selects only filtered items

<a name="25.15.1"></a>

# 25.15.1 (4-1-2022)

### Fixes

* `spt-filter-search-bar`: fix bug where old search bar wouldn't filter

<a name="25.15.0"></a>

# 25.15.0 (04-01-2023)

### Features

* `spt-filter-search-bar`: Show All is floating left to the last chip

<a name="25.14.1"></a>

# 25.14.1 (4-1-2022)

### Fixes

* `spt-select`: Added hidden/disabled functionality for custom multi label tmp

<a name="25.14.0"></a>

# 25.14.0 (3-1-2023)

### Features

* `spt-map-chart`: added a new chart type - heatmap

<a name="25.13.1"></a>

# 25.13.1 (2-1-2023)

### Fixes

* `spt-slider`: ngModel wasn't working well on init.
* `spt-slider`: form control value was returning incorrect value.
* `spt-slider`: range value indicators changed their color when too close.
* `spt-slider`: component had a redundant gap on the left border.

<a name="25.13.0"></a>

# 25.13.0 (27-12-2022)

### Features

* `routing.consts`: Changed default route to overview/dashboard instead of spt/dashboard

<a name="25.12.0"></a>

# 25.12.0 (26-12-2022)

### Fixes

* `spt-tags`: fix duplications when passing empty tags array
* `spt-tags`: fix input tags bug

### Features

* `spt-select`: exposed new trackBy function from ngSelect
* `spt-select`: disable checkbox on defaultCustomMulti template when model's disable: true

<a name="25.11.0”></a>

# 25.11.0 (26-12-2022)

### Features

* `spt-filter-search-bar`:
    * Upgrade to V2 - Chips can now be shown inside the filter search bar and not over it (add [isNewVersion] = ‘true’
      to use the new version)

<a name="25.10.0"></a>

# 25.10.0 (25-12-2022)

### Features

* `spt-custom-tooltip`: new directive

<a name="25.9.3"></a>

# 25.9.3 (22-12-2022)

### Fixes

* `spt-overview`: models exported in public api

<a name="25.9.2"></a>

# 25.9.2 (20-12-2022)

### Fixes

* `mat-button-toggle`: Demo/readme added to Storybook

<a name="25.9.1"></a>

# 25.9.1 (20-12-2022)

### Internal

* `GitHub Actions Workflow`: Requires clean-install on PR workflow in GH. `package.json` changes must be in sync
  with `package-lock.json`
* `Karma`: Updated spec reporter for easier parsing of unit test failures at end
* `Lint`: Added script to run differential linting only on changed files

<a name="25.9.0"></a>

# 25.9.0 (19-12-2022)

### Features

* `spt-overview`: Added ability to add custom icon to spt-overview row value using `customIcon` in the
  overviewDataConfig.
* `spt-overview`: Added ability to add custom link with text of choice to spt-overview row value using `customLink`
  and `customLinkText` in the overviewDataConfig.
* `spt-code-editor`: Added support for plain text mode.

<a name="25.8.2"></a>

# 25.8.2 (19-12-2022)

### Features

* `flags`:
    * indonesia/disabled added
* `region-flags`:
    * ES/disabled added

<a name="25.8.1"></a>

# 25.8.1 (19-12-2022)

### Fixes

* `spt-tags`: validation fixed

# 25.8.0 (18-12-2022)

### Features

* `spt-filter-search-bar`: added directive 'hideGroupTitle' that will hide or show the title of groups in the auto
  complete

<a name="25.7.0"></a>

# 25.7.0 (15-12-2022)

### Features

* `spt-grid`: Add 'sort' function, in order to sort columns by default.

<a name="25.6.0"></a>

# 25.6.0 (13-12-2022)

### Features

* `spt-tags`:
    * tags title as input
    * key and value custom validations

### Fixes

* `spt-tags`: controlValueAccessor onChange works

<a name="25.5.0"></a>

# 25.5.0 (14-12-2022)

### Features

* `spt-select`: Add custom footer to spt-select (directive + template).
* `spt-select`: expose custom search function ability.
* `spt-select`: removed unused scroll event.

<a name="25.4.0"></a>

# 25.4.0 (13-12-2022)

### Features

* `iconsRegistry`: added migration app logo icon

<a name="25.3.2"></a>

# 25.3.2 (12-12-2022)

### Fixes

* `spt-tags`: styling adjustments for tag icon and padding
* `spt-forms-list`: added icon to delete input value on hover of form field
* `spt-logs`: logs exceeded message/styling changes

<a name="25.3.1"></a>

# 25.3.1 (12-12-2022)

### Bug Fixes

* `spt-account-connection-funnel`: fix pollingRequest for AWS connection.

<a name="25.3.0"></a>

# 25.3.0 (12-12-2022)

### Features

* `spt-grid`:
    * support custom tooltips in grid
    * support displaying rows as disabled

<a name="25.2.1"></a>

# 25.2.1 (11-12-2022)

### Fixes

* `breadcrumbs`: css fixes and breadcrumbs demo has been removed from Gallery

<a name="25.2.0"></a>

# 25.2.0 (11-12-2022)

### Features

* `capability-guard`: added the ability to add a guard to route based on a capability state

<a name="25.1.0"></a>

# 25.1.0 (8-12-2022)

### Features

* `spt-form-list`: added ability to update component by new formList input
* `spt-tags`: de-couple title from component

<a name="25.0.3"></a>

# 25.0.3 (07-12-2022)

### Fixes

* `spt-account-connection-funnel`: update constant variable name and navigation route for new Eco MFE

<a name="25.0.2"></a>

# 25.0.2 (1-12-2022)

### Fixes

* `spt-forms-list`:
    * disabled functionality on select
    * styling adjustments

<a name="25.0.1"></a>

# 25.0.1 (30-11-2022)

### Fixes

* `spt-slider`: remove redundant margins

<a name="25.0.0"></a>

# 25.0.0 (29-11-2022)

### BREAKING CHANGES

* `spt-slider`:
    * Slider component is now supporting single slider and range slider. The consumer needs to indicate which slider
      he's using by setting isRange argument.
    * showBubble and showBubbleAlways is no longer exist, instead there is showValueIndicators argument.
    * showNumberInput was changed to showValueInputs.

<a name="24.30.1"></a>

# 24.30.1 (27-11-2022)

### Features

* `spt-grid`: Added ability to create custom component using `sptGridCellComponentConfig` for grouped row.
* `spt-grid`: Added a field named `groupDefaultExpanded` that determines from which row level the rows will be expanded
  on init.

<a name="24.30.0"></a>

# 24.30.0 (23-11-2022)

### Features

* `single-spa`: getAppStatus method added

<a name="24.29.1"></a>

# 24.29.1 (23-11-2022)

### Fixes

* `spt-grid`: GridColumn's `cellCssClass` property was not working for columns displaying custom components

<a name="24.29.0"></a>

# 24.29.0 (21-11-2022)

### Features

* new spt-busy template
* added 'AccountProviderStatus' enum to public api

<a name="24.28.1"></a>

# 24.28.1 (17-11-2022)

### Fixes

* `spt-overview`: fix runtime error when passing multiple values as string array

<a name="24.28.0"></a>

# 24.28.0 (15-11-2022)

### Features

* `spt-grid`: added tooltip to grid header

<a name="24.27.0"></a>

# 24.27.0 (10-11-2022)

### Features

* new component: `spt-info-text-list`
* `spt-overview`:
    * edit button is now configurable
    * long values are now truncated & display tooltip
    * new `isCopyable` option for allowing copy-to-clipboard by click

### Fixes

* `spt-overview`:
    * fixed wrong indentation
* `spt-tooltip`: added max-width

<a name="24.26.2"></a>

# 24.26.2 (10-11-2022)

### Bug Fixes

* `spt-select`:
    * Fixed defaultSingleLabelTemplate label to avoid showing item.name property when it doesn't have bindValue set

<a name="24.26.1"></a>

# 24.26.1 (10-11-2022)

### Fixes

* `iconsRegistry`:
    * Replacing organization-1-grey icon
      <a name="24.26.1"></a>

# 24.26.0 (07-11-2022)

### Features

* `spt-logs`:
    * Added inputs for changing options in severity dropdown plus related labels
    * Added inputs for displaying different property in place of severity on the table

<a name="24.25.0"></a>

# 24.25.0 (07-11-2022)

### Features

* `spt-select`:
    * Exposed onScroll and onScrollEnd outputs for virtual scrolling

<a name="24.24.0"></a>

# 24.24.0 (06-11-2022)

### Features

* `FeatureFlagGuard`:
    * Added guard used to check if the route is active or not based on ff

<a name="24.23.0"></a>

# 24.23.0 (03-11-2022)

### Features

* `iconsRegistry`:
    * Added globe icon
    * Added globe-grey icon
    * Added organization-1-grey icon

<a name="24.22.1"></a>

# 24.22.1 (31-10-2022)

### Maintenance (internal)

* `spt-grid`: Added flex column example to storybook.

<a name="24.22.0"></a>

# 24.22.0 (30-10-2022)

### Features

* `iconsRegistry`:
    * Added ID (Indonesia) region flag

<a name="24.21.0"></a>

# 24.21.0 (30-10-2022)

### Features

* `spt-code-editor`: Add support for min lines

<a name="24.20.2"></a>

# 24.20.2 (27-10-2022)

### Bug Fixes

* `spt-select`: Handle overflow item labels

<a name="24.20.1"></a>

# 24.20.1 (26-10-2022)

### Bug Fixes

* `spt-date-picker`: fix nan/nan/nan bug

<a name="24.20.0"></a>

# 24.20.0 (26-10-2022)

### Features

* `spt-code-editor`: Add support for content projection header.

<a name="24.19.0"></a>

# 24.19.0 (24-10-2022)

### Features

* `spt-grid`:
    * EmptyStateComponent - the default empty state component is now available and supports content projection
    * Add support for setting a custom component when table is empty

<a name="24.18.4"></a>

# 24.18.4 (24-10-2022)

### Fixes

* `spt-logs`: change empty state text

<a name="24.18.3"></a>

# 24.18.3 (18-10-2022)

### Maintenance (internal)

* `spt-account-connection-funnel`: inject window object to components and using it from unit tests.

<a name="24.18.2"></a>

# 24.18.2 (17-10-2022)

### Bug Fixes

* `spt-account-connection-funnel`: removed setCurrentAccountProvider after azure management account connected

<a name="24.18.1"></a>

# 24.18.1 (16-10-2022)

### Bug Fixes

* `account-funnel`:
    * Replaced mat-icon with spt-icon in order to have a ripple for the icons while hovering

<a name="24.18.0"></a>

# 24.18.0 (16-10-2022)

### Features

* `spt-grid`:
    * add support for storing column selection in local storage

<a name="24.17.3"></a>

# 24.17.3 (13-10-2022)

### Bug Fixes

* `code-editor`:
    * background wouldn't change when switching between edit and read mode
* `spt-slider`:
    * when slider disabled, button color was black instead of grey

### Maintenance (internal)

* `spt-slider`: Added to storybook.

<a name="24.17.2"></a>

# 24.17.2 (13-10-2022)

### Features

* `spt-route-data`:
    * Added redirectRouteOnSwitchAccount field,
      which is can be used in the routing module of
      MFEs to determine the desired url to redirect when
      switching account to same or other cloud provider.

* `route-based-communication`:
    * Added switch account logic that checks the boolean
      value of shouldMFEHandleSwitchAccountBS$ (from client-core-services)
      to check if the MFE is handling the switch account behavior, if true we will
      check the value of redirectRouteOnSwitchAccount and redirect accordingly.

<a name="24.17.1"></a>

# 24.17.1 (12-10-2022)

### Maintenance (internal)

* `spt-account-connection-funnel`: disable problematic unit test

<a name="24.17.0"></a>

# 24.17.0 (11-10-2022)

### Features

* `spt-selectable-chip`:
    * added spt-selectable-chip component.
      <a name="24.16.0"></a>

# 24.16.0 (28-09-2022)

### Features

* `interceptors`: empty-body-interceptor added to intercept delete response with empty body
  <a name="24.15.1"></a>

# 24.15.1 (28-09-2022)

### Bug Fixes

* `date-picker`:
    * predefined range resets when dialog closes if apply wasn't clicked

<a name="24.15.0"></a>

# 24.15.0 (06-10-2022)

### Features

* `connection-funnel`:
    * create azure/aws management account flow;

<a name="24.14.2"></a>

# 24.14.2 (22-09-2022)

### Maintenance (internal)

* `sptToolTip`: Added to storybook.

<a name="24.14.1"></a>

# 24.14.1 (22-09-2022)

### Bug Fixes

* `spt-code-editor`:
    * all action buttons should be optional

<a name="24.14.0"></a>

# 24.14.0 (21-09-2022)

### Features

* `spt-date-picker`:
    * new compact design
    * removed the title section in the date picker header
    * set to now buttons are now text link

### Bug Fixes

* `spt-date-picker`:
    * changed all paddings and margins to 4 multiples
    * aligned titles and dividers to center

<a name="24.13.1"></a>

# 24.13.1 (20-09-2022)

### Bug Fixes

* `connection-funnel`:
    * fix azure create request
    * remove duration after clicking on runTemplate btn for AWS management

### Maintenance (internal)

* date-picker.utils: fixed flaky test
* auto-complete.component: disabled flaky tests

<a name="24.13.0"></a>

# 24.13.0 (14-09-2022)

### Features

* `sptLogs`:
    * sort button added
    * download icon to spt-icon
    * severity is not all caps

<a name="24.12.1"></a>

# 24.12.1 (14-09-2022)

### Bug Fixes

* `date-picker`:
    * invalid date with more than one error, shows only the first error

<a name="24.12.0"></a>

# 24.12.0 (13-09-2022)

### Features

* new color added to vars.scss: $spt-blue-600: #025DBE

<a name="24.11.1"></a>

# 24.11.1 (13-09-2022)

### Bug Fixes

* `date-picker`: fix bug - can't choose same date when activePreset is given

<a name="24.11.0"></a>

# 24.11.0 (13-09-2022)

### Features

* `spt-busy`: add new loader
* `date-picker`: change title to be optional

<a name="24.10.0"></a>

# 24.10.0 (12-09-2022)

### Features

* `spt-service-card`:
    * Added styling element for services
* `spt-clickable-card-list`:
    * Added additional controls for styling selected spt-service-cards

<a name="24.9.1"></a>

# 24.9.1 (12-09-2022)

### Bug Fixes

* `date-picker`: fix calculation for TODAY predefined date range

<a name="24.9.0"></a>

# 24.9.0 (11-09-2022)

### Features

* `logger-provider`:
    * report exception to client logger.
    * add logger service to be used by mfe's

<a name="24.8.0"></a>

# 24.8.0 (06-09-2022)

### Features

* `spt-clickable-card-list`:
    * Added wrapping component for tracking clicked ids

<a name="24.7.1"></a>

# 24.7.1 (06-09-2022)

### Bug Fixes

* `awsGetRegionFromZone`: added to the public api

<a name="24.7.0"></a>

# 24.7.0 (05-09-2022)

### Features

* `awsGetRegionFromZone`: Provide AWS util function to parse zone to region

<a name="24.6.2"></a>

# 24.6.2 (31-08-2022)

### Bug Fixes

* `connection-funnel`: update accountUserMapping$ after account create

<a name="24.6.1"></a>

# 24.6.1 (29-08-2022)

### Bug Fixes

* removed play icon from general-icon.registry.module

<a name="24.6.0"></a>

# 24.6.0 (29-08-2022)

### Features

* `spt-account-funnel`: Provide Azure EA connect step component

<a name="24.5.4"></a>

# 24.5.4 (25-08-2022)

### Bug Fixes

* `sptDatePicker`: clear is working even if inputs are invalid.

<a name="24.5.3"></a>

# 24.5.3 (25-08-2022)

### Maintenance (internal)

* `sptDatePicker`: Added to storybook.

<a name="24.5.3"></a>

# 24.5.3 (25-08-2022)

### Maintenance (internal)

* `sptDatePicker`: Added to storybook.

<a name="24.5.2"></a>

# 24.5.2 (22-08-2022)

### Bug Fixes

* `spt-filter-search-bar`: Fix free text search. Exclude row keys from search

<a name="24.5.0"></a>

# 24.5.1 (18-08-2022)

### Bug Fixes

* `spt-select`:
    * All option checkbox and selected indicator disappear when clicking the X button .
    * No hover on group selection (https://github.com/spotinst/spot-client-shared/pull/443)

<a name="24.5.0"></a>

# 24.5.0 (16-08-2022)

### Features

* `search-bar-filter-utils`:
    * Add a support for searching in an array type value.

<a name="24.4.0"></a>

# 24.4.0 (14-08-2022)

### Features

* `spt-grid`:
    * Added sidebar to show / hide /re-arrange columns.

<a name="24.3.0"></a>

# 24.3.0 (14-08-2022)

### Features

* `spt-gauge`: added `spt-gauge` component.
    * added examples to gallery

<a name="24.2.0"></a>

# 24.2.0 (08-08-2022)

### Features

* `spt-select`: added `spt-select-loader-tmp` custom-directive.

### Bug Fixes

* `spt-select`: object values are not identified as selected items.

<a name="24.1.5"></a>

# 24.1.5 (08-08-2022)

### Maintenance (internal)

* `spt-date-picker`: add unit test for set to now functionality

<a name="24.1.4"></a>

# 24.1.4 (04-08-2022)

### Bug Fixes

* `spt-form-list`:
    * Added input placeholder as variable
    * Added validity check on changes
    * Add button is now disabled when form is invalid
* `spt-schedule-cron-expression`:
    * Cron validations updated

<a name="24.1.3"></a>

# 24.1.3 (04-08-2022)

### Bug Fixes

* `spt-overview`:
    * Edit button now emits event with section key
    * Clicking on edit icon doesn't collapse section

<a name="24.1.2"></a>

# 24.1.2 (04-08-2022)

### Bug Fixes

* `spt-overview`: UI fixes, added truncate tooltip.

<a name="24.1.1"></a>

# 24.1.1 (03-08-2022)

### Bug Fixes

* `spt-select`:
    * Added logic to avoid dropdown opening when chip is dismissed

<a name="24.1.0"></a>

# 24.1.0 (02-08-2022)

### Features

* `spt-grid`:
    * Added the option to use custom aggregation function.
    * Added the option to customize the displayed text of the grids' components (e.g. placeholders, labels, titles,
      etc.)
    * Added CellRenderer to customize specific cells in the grid.

<a name="24.0.0"></a>

# 24.0.0 (31-07-2022)

### BREAKING CHANGES

* `spt-grid`: from now on, MFEs that consume `spt-grid` are responsible for
  importing `~@spotinst/spot-client-shared/src/styles/ag-grid-custom-styles.scss` and applying the `customize-ag-grid`
  mixin (this is needeed in order to fix a regression that made `ag-grid` a mandatory dependency instead of an optional
  one)

### Internal

* `gallery`: fix build failure (failed due to dead references to demos)

<a name="23.2.0"></a>

# 23.2.0 (28-07-2022)

### Features

* `sptTruncateTooltip`: Added directive for basic truncation/tooltip combo.

### Internal

* `spt-grid`: moved demo to Storybook

<a name="23.1.0"></a>

# 23.1.0 (25-07-2022)

### Features

* Added new general icons:
* `chevron-right`, `searching`

<a name="23.1.0"></a>

# ~~23.1.0 (25-07-2022)~~ UNPUBLISHED!

### ~~Features~~

* ~~Added new general icons:~~
* ~~-`chevron-right`, `searching`-~~

<a name="23.0.2"></a>

# ~~23.0.2 (25-07-2022)~~ UNPUBLISHED!

### ~~Bug Fixes~~

* ~~-`spt-select`: Truncated the overflow text~~
* ~~-`spt-chip`: Added div container around text for overflow~~

<a name="23.0.1"></a>

# 23.0.1 (25-07-2022)

### Bug Fixes

* `spt-date-picker`: Clear preset selection on date or time change from header controls.

<a name="23.0.0"></a>

# 23.0.0 (25-07-2022)

### BREAKING CHANGES

* `spt-date-picker`: Definition of the following Pre Defined DateRanges has changed : ONE_MONTH, THREE_MONTH,
  SIX_MONTHS, ONE_YEAR

### Bug Fixes

* `spt-date-picker`:
    * Range Presets in the footer are now synced with the selected range of the calendar
    * Disabled style adjustment

### Features

*`spt-select`: Added selectSearch output that fired on input change

<a name="22.5.3"></a>

# 22.5.3 (25-07-2022)

### Bug Fixes

* `spt-date-picker`: To date can be set while end time is null.

<a name="22.5.2"></a>

# 22.5.2 (21-07-2022)

### Maintenance (internal)

* `spt-summary-card`: moved summary card demo to storybook

<a name="22.5.1"></a>

# 22.5.1 (21-07-2022)

### Bug Fixes

* `mat-slide-toggle`: Matched the design from Spotlight.

<a name="22.5.0"></a>

# 22.5.0 (18-07-2022)

### Features

* Added new general icons:
  `email-all-read`, `email-unread`, `empty-flag`, `notifications-empty`, `unflag`, `unread-indicator`

<a name="22.4.0"></a>

# 22.4.0 (18-07-2022)

### Features

* `spt-grid`: added row grouping drag & drop panel

<a name="22.3.0"></a>

# 22.3.0 (17-07-2022)

### Features

* `spt-select`: added `spt-select-multi-item-tmp` custom-directive.
* `spt-select`: added `spt-select-not-found-tmp` custom-directive.

<a name="22.2.3"></a>

# 22.2.3 (11-07-2022)

### Bug Fixes

* `spt-account-connection-funnel`: added unit tests

<a name="22.2.2"></a>

# 22.2.2 (05-07-2022)

### Bug Fixes

* `spt-filter-search-bar`: close panel on irregular search filter applied

<a name="22.2.1"></a>

# 22.2.1 (05-07-2022)

### Bug Fixes

* `expansion-panel`: fix `SINGLE_PANEL_PROJECTED_TEMPLATE` story.

<a name="22.2.0"></a>

# 22.2.0 (05-07-2022)

### Features

* `expansion-panel`: added `removeBottomBorder` input.
* `spt-slider`: added `ControlValueAccessor` support.

### Bug Fixes

* `mat-input`: fix disabled color

<a name="22.1.1"></a>

# 22.1.1 (04-07-2022)

### Bug Fixes

* `spt-account-connection-funnel`: UI/content fixes

<a name="22.1.0"></a>

# 22.1.0 (3-07-2022)

### Features

* `spt-overview, spt-overvview-unit, spt-overview-row, spt-overview-dialog` components created
* `expansion-panel` subtitle added as ng-content
* `expansion-panel` added iconTooltipText input ,iconClicked output

<a name="22.0.3"></a>

# 22.0.3 (03-07-2022)

### Bug Fixes

* `spt-icon`: exported sptIconModule in "component.module.ts"

<a name="22.0.2"></a>

# 22.0.2 (30-06-2022)

### Bug Fixes

* `spt-select`: "single select" mode broken due to missing null check

<a name="22.0.1"></a>

# 22.0.1 (29-06-2022)

### Bug Fixes

* `spt-date-picker`: 'Set to now' button behaviour improvement

<a name="22.0.0"></a>

# 22.0.0 (27-06-2022)

### BREAKING CHANGES

* `spt-icon`: changed selector name

<a name="21.3.1"></a>

# 21.3.1 (27-06-2022)

### Bug Fixes

* `spt-select`: focus scroll-bar on the top selected item

<a name="21.3.0"></a>

# 21.3.0 (27-06-2022)

### Features

* `spt-grid`: add callback func to emptyState arguments

<a name="21.2.2"></a>

# 21.2.2 (22-06-2022)

### Bug Fixes

* `spt-icon`: removed unnecessary import of 'BrowserAnimationModule'

<a name="21.2.1"></a>

# 21.2.1 (23-06-2022)

### Bug Fixes

* `spt-select`: Added a blue background for hover state

### Maintenance (internal)

* `spt-page-title`: Converted the page-title demo to the storybook

<a name="21.2.0"></a>

# 21.2.0 (22-06-2022)

### Features

* `spt-account-connection-funnel`: open funnel with account context

<a name="21.1.4"></a>

# 21.1.4 (22-06-2022)

### Bug Fixes

* `spt-select`:
    * The option to remove selection with backspace is now disabled
    * The 'ALL' checkbox is now removed when filtering
    * The 'selected' label is now removed when filtering

<a name="21.1.3"></a>

# 21.1.3 (22-06-2022)

### Bug Fixes

* `spt-account-funnel`: in the `createNewAccount`removed duplicated Error handler

<a name="21.1.2"></a>

# 21.1.2 (22-06-2022)

### Bug Fixes

* `spt-filter-search-bar`: in the `spt-value-selector` when there are no selected values the "select" button will be
  disabled
* `spt-filter-search-bar`: changed the margin between the buttons

<a name="21.1.1"></a>

# 21.1.1 (21-06-2022)

### Bug Fixes

* `spt-date-picker`: When hiding header - changed visibility of header from ngIf to hidden
* `filter-search-bar`: filter search bar behavior (hover and focus)
* `spt-select`: fix disabled input color

<a name="21.1.0"></a>

# 21.1.0 (19-06-2022)

### Features

* new `spt-icon (with toolTip)` component

<a name="21.0.1"></a>

# 21.0.1 (16-06-2022)

### Bug Fixes

* `spt-select`: fix un/select-all with reactive forms

<a name="21.0.0"></a>

# 21.0.0 (16-06-2022)

### BREAKING CHANGES

* `mat-dialog` change margin to padding in the dialog content

### Bug Fixes

* `mat-radio-button` fix ripple

<a name="20.3.0"></a>

# 20.3.0 (15-06-2022)

### Features

* `icons`- add new flags icons to `region-flags`
* `spt-select`: add virtual scroll support - default true

<a name="20.2.0"></a>

# 20.2.0 (09-06-2022)

### Features

* new `pretty-json-print` component

<a name="20.1.3"></a>

# 20.1.3 (09-06-2022)

### Bug Fixes

* `spt-logs`: removed "ALL" option from severity filter (because it doesn't work as expected)

<a name="20.1.2"></a>

# 20.1.2 (08-06-2022)

### Bug Fixes

* `spt-date-picker`: date-out-of-range validation should ignore the time

<a name="20.1.1"></a>

# 20.1.1 (06-06-2022)

### Bug Fixes

* `spt-account-connection-funnel`
* fix Linked Preset behavior.
* UI fixes

<a name="20.1.0"></a>

# 20.1.0 (06-06-2022)

### Features

* `spt-date-picker`: Added `appendTo` property - target element to attach the overlay, valid values are "body" or a
  local ng-template variable
* `spt-grid`: Added `wrapText` column property to make text wrapped inside cells

<a name="20.0.1"></a>

# 20.0.1 (31-05-2022)

### Bug Fixes

* `WalkthroughModule` could not be used in lazy-loaded modules, because it imported Angular's `BrowserModule` (which
  should only be imported by the application's root module)

### Maintenance (internal)

* added an eslint rule for disallowing `BrowserModule` imports in `spot-client-shared/lib`

<a name="20.0.0"></a>

# 20.0.0 (30-05-2022)

### BREAKING CHANGES

* `spt-page-title` fix nested center styling

<a name="19.6.1"></a>

# 19.6.1 (30-05-2022)

### Maintenance (internal)

* `spt-grid.component`: fix flaky unit test
* `filter-search-bar-grid.stories`: fix story (grid selection was not preserved after filtering)

<a name="19.6.0"></a>

# 19.6.0 (30-05-2022)

### Features

* `spt-busy`:
    * Added busy states for "Doughnut Chart" & "Bar Chart"
* `spt-grid`:
    * Added Server-Side Row Model support to handle infinite scroll

<a name="19.5.1"></a>

# 19.5.1 (29-05-2022)

### Bug Fixes

* `spt-copy-to-clipboard` fix delay

<a name="19.5.0"></a>

# 19.5.0 (26-05-2022)

### Features

* new `spt-copy-to-clipboard` component

<a name="19.4.1"></a>

# 19.4.1 (25-05-2022)

### Bug Fixes

* `spt-account-connection-funnel`
* UI & content fixes

<a name="19.4.0"></a>

# 19.4.0 (25-05-2022)

### Features

* `spt-grid`
    * added isRowMaster - callback to determine if a row should be a master row
    * added getRowClass - callback to add css classes to a row

<a name="19.3.1"></a>

# 19.3.1 (25-05-2022)

### Bug Fixes

* `spt-date-picker`:
    * Fixed time validations.
    * changed calendar icon according to the design system
    * changed selected date range color according to the design.
* `spt-logs`:
    * changed severity DD to spt-select.

<a name="19.3.0"></a>

# 19.3.0 (25-05-2022)

### Features

* new `spt-vertical-stepper` component
* new anchor-scroll directives:
    * `sptScrollManager`
    * `sptScrollAnchor`
    * `sptScrollSection`

<a name="19.2.1"></a>

# 19.2.1 (25-05-2022)

### Bug Fixes

* `spt-charts`:
    * Preserve previous series fix - added oneToOne
      property (https://github.com/highcharts/highcharts-angular#options-details)

<a name="19.2.0"></a>

# 19.2.0 (25-05-2022)

### Features (experimental)

* `spt-account-connection-funnel`
* connection funnel opens in dialog

<a name="19.1.1"></a>

# 19.1.1 (24-05-2022)

### Bug Fixes

* `spt-date-picker`:
    * Changes on input field are now also changing the input inside the header
    * Add disabled option to the component

<a name="19.1.0"></a>

# 19.1.0 (23-05-2022)

### Features

* new `spt-walk-through-popover` component

<a name="19.0.1"></a>

# 19.0.1 (19-05-2022)

### Bug Fixes

* `spt-select`:
    * z-index issue: dropdown panel doesn't hide (cover) other `spt-select`s
* `spt-schedule-cron-expression`:
    * fix initFromTasks in case of null params

<a name="19.0.0"></a>

# 19.0.0 (19-05-2022)

### BREAKING CHANGES

* `spt-date-picker`:
  change from\to time zone from utc to local
* `spt-logs`:
  styling changes

### Bug Fixes

* `spt-date-picker`:
    * added pre-defined time range of 1H,12H and 24H,
      and updated 1D to Today
    * added from\to time validations.
    * align to date before from validation error text with figma.
    * added from date after to validation error text

* `spt-logs`:
    * added input labels.
    * disabled inputs while loading.
    * added pre-defined time range of 1H,12H and 24H, and removed 1D.
    * When opening the date picker >
        - By default, Select the last 12 hours.
        - The end time is now (the moment the user clicked), the max time range can be up to 23:59 of that day.

<a name="18.1.0"></a>

# 18.1.0 (17-05-2022)

### Features

* `icons`- added spot 'connect' icon

<a name="18.0.1"></a>

# 18.0.1 (16-05-2022)

### Bug Fixes

* `spt-account-connection-funnel`:
    * fix blocker loader (aws funnel);

<a name="18.0.0"></a>

# 18.0.0 (12-05-2022)

### BREAKING CHANGES

* `tags`:
    * validForm event removed
    * formChange event emits tags object instead of form
    * tags object changed

* `schedule-cron-exression`:
    * validForm event removed
    * formChange event emits tasks object instead of form
    * tasks object changed

<a name="17.4.0"></a>

# 17.4.0 (12-05-2022)

### Features (experimental)

* `spt-date-picker`:
    * added `withHeader` input.
    * Indicates if to include the header, default is true

<a name="17.3.0"></a>

# 17.3.0 (12-05-2022)

### Features (experimental)

* `spt-account-connection-funnel`:
    * added AZURE account connection funnel

<a name="17.2.0"></a>

# 17.2.0 (10-05-2022)

### Features (experimental)

* `spt-account-connection-funnel`:
    * added GCP account connection funnel

<a name="17.1.1"></a>

# 17.1.1 (08-05-2022)

### Bug Fixes

* `spt-select`:
    * Fixed wrong label when in multi-select, items are in the form an array and only one item available and is
      selected.

<a name="17.1.0"></a>

# 17.1.0 (03-05-2022)

### Features (experimental)

* `spt-account-connection-funnel`:
    * added module with new account connection funnel
    * contains AWS account connection
    * added examples to gallery

<a name=“17.0.0”></a>

# 17.0.0 (2-05-2022)

### BREAKING CHANGES

* `Account` model: removed the `preferences` property
    * related to the following fix
      in `spot-client-core-services`: https://github.com/spotinst/spot-client-core-services/pull/36
* removed `ScsAuthProvider`, `ScsOrganizationProvider` & `AccountPreferences` interfaces from public API

### Bug Fixes

* `CurrencySymbolAsyncPipe`: fix required following the `spot-client-core-services` change mentioned above

<a name=“16.7.4”></a>

# 16.7.4 (02-05-2022)

### Bug Fixes

* `spt-code-editor`:
  *Updated isReadOnly input behaviour

<a name=“16.7.3”></a>

# 16.7.3 (02-05-2022)

### Bug Fixes

* `code-editor`:
    * Fixed expand/collapse buttons

<a name=“16.7.2”></a>

# 16.7.2 (27-04-2022)

* `mat-checkbox`:
    * style adjustments - hover state and border radius

<a name=“16.7.1”></a>

# 16.7.1 (26-04-2022)

### Bug Fixes

* `spt-select`:
    * Show X icon only when hover and focus. Also change X icon size and color when hover

<a name=“16.7.0”></a>

# 16.7.0 (26-04-2022)

### Features

* `spt-badge`:
  *added to Storybook and removed from gallery

<a name=“16.6.0”></a>

# 16.6.0 (25-04-2022)

### Features

* `spt-slider`:
    * New slider with min/max labels and number-input

<a name=“16.5.0”></a>

# 16.5.0 (24-04-2022)

### Bug Fixes

* `spt-grid`:
    * fix missing tooltip on grouped-by
* `spt-log`
    * fix log order

### Features

* `spt-grid`:
    * background color as variable

<a name=“16.4.12”></a>

# 16.4.12 (24-04-2022)

### Bug Fixes

* `mat-tabs`:
    * fix color
    * disabled hover grey
    * selected tab’s underline should be thinner - 2px

<a name=“16.4.11”></a>

# 16.4.11 (24-04-2022)

### Bug Fixes

* `spt-select`:
    * searchable: style adjustments
* `mat-menu`:
    * style adjustments: menu shadow
* `mat-expansion-panel`:
    * style adjustments: hover state
    * `form-list`:
    * inout changed to design system - using mat-form-field
* `tags`:
    * icons sizes changed to large class

<a name=“16.4.10”></a>

# 16.4.10 (24-04-2022)

### Bug Fixes

* `spt-select`:
    * style-adjustments: tooltip

<a name=“16.4.9”></a>

# 16.4.9 (24-04-2022)

### Bug Fixes

* `empty state`:
    * Added background color, changed titles color

<a name=“16.4.8”></a>

# 16.4.8 (24-04-2022)

### Bug Fixes

* `spt-grid`:
    * Hide ag-grid context menu

<a name=“16.4.7”></a>

# 16.4.7 (24-04-2022)

* `spt-radio-button`:
  *added to Storybook and removed from gallery
* `spt-checkbox`:
  *added to Storybook and removed from gallery

<a name=“16.4.6”></a>

# 16.4.6 (24-04-2022)

### Bug Fixes

* `spt-badge`:
    * Fix font weight
* `spt-chip`:
    * Fix font weight
    * Fix text color

<a name=“16.4.5”></a>

# 16.4.5 (24-04-2022)

### Bug Fixes

* `mat dialog`:
    * Remove box shadow from header
* page-title: style adjustments
    * Font size, components height,padding between the text and the separator

<a name=“16.4.4”></a>

# 16.4.4 (24-04-2022)

### Bug Fixes

* `breadcrumbs`:
    * Fix text color

<a name=“16.4.3”></a>

# 16.4.3 (24-04-2022)

### Bug Fixes

* `mat tooltip`:
    * Fix dark mat-tooltip

<a name=“16.4.2”></a>

# 16.4.2 (24-04-2022)

### Bug Fixes

* `summary card`:
    * Fix number text’s weight to 400

<a name=“16.4.1”></a>

# 16.4.1 (18-04-2022)

### Bug Fixes

* `material-custom-styles`:
    * Stop tabs from moving when hover

<a name="16.4.0"></a>

## 16.4.0 (11-04-2022)

### Features

* `spt-code-editor`:
    * Updated isReadOnly variable to work as a optional boolean input to Enable / Disable editmode of code editor.
* `spt-breadcrumbs`:
    * Added queryParams support to breadcrumbs link.

<a name=“16.3.0”></a>

# 16.3.0 (11-04-2022)

### Features

* `spt-code-editor`:
    * change the name of the download (export) file:
        * add new Input() - `filePrefix` - for the download file
        * add date and time to the file name.

<a name="16.2.0"></a>

## 16.2.0 (07-04-2022)

### Features

* `icons`- added spot 'overview' icon

<a name=“16.1.4”></a>

# 16.1.4 (04-04-2022)

### Bug Fixes

* `spt-logs`:
    * export view details event.

<a name=“16.1.3”></a>

# 16.1.3 (04-04-2022)

### Bug Fixes

* `spt-banner`:
    * Change the info svg in information banner to blue (info-blue.svg)

<a name=“16.1.2”></a>

# 16.1.2 (03-04-2022)

### Bug Fixes

* `button`:
    * Remove clicked styling (cdk-focused)

<a name=“16.1.1”></a>

# 16.1.1 (31-03-2022)

### Bug Fixes

* `spt-logs`:
    * After reset filters, sent request.

<a name=“16.1.0”></a>

# 16.1.0 (31-03-2022)

### Features

* `spt-grid`
    * Added master detail option.

<a name=“16.0.7”></a>

# 16.0.7 (29-03-2022)

### Bug Fixes

* `spt-date-picker`:
    * 'set-to-now' button wasn't updating the time properly.
* `spt-log`:
    * change the max date of the filters for today at 23:59.

<a name=“16.0.6”></a>

# 16.0.6 (29-03-2022)

### Bug Fixes

* `spt-search-bar-input`:
    * Add X icon to remove text from search bar, also escape button press remove text from search bar

<a name=“16.0.5”></a>

# 16.0.5 (27-03-2022)

### Bug Fixes

* Reverted storybook version to `6.3.12` from `6.4.19`.
    * spt-chips and filter-search-bar components were broken because of storybook upgrade.

<a name=“16.0.4”></a>

# 16.0.4 (28-03-2022)

### Bug Fixes

* `spt-logs`:
    * Fix limit message bug
    * Update max logs limit message

<a name=“16.0.3”></a>

# 16.0.3 (27-03-2022)

### Bug Fixes

* `spt-logs`:
    * Remove space character from each value when download logs as csv

<a name=“16.0.2”></a>

# 16.0.2 (24-03-2022)

### Bug Fixes

* `date-picker`:
    * set-to-now button not updating the selected range in the calendar
        * This change done to support mac Numbers app to display logs contains comma as csv

<a name=“16.0.1”></a>

# 16.0.1 (24-03-2022)

### Bug Fixes

* `spt-grid` -
    * suppress column header menu

<a name=“16.0.0”></a>

# 16.0.0 (24-03-2022)

### BREAKING CHANGES

* `spt-code-editor` -
    * Fixed JSON code editor language type from JSON5 to JSON
        * This change can break the existing application after upgrade - make sure the json is encoded with double
          quotes and not single quotes(As per JSON standards).

### Bug Fixes

* `spt-code-editor` -
    * Fixed JSON code editor language type from JSON5 to JSON.
    * Added JSON5 code support.
    * Updated storybook version(Storybook was breaking when the input variables were having double quotes).
* `spt-select` -
    * Fixed wrong label when in multi-select and only one item available and is selected.

### Features

* `spt-grid`
    * Added getter and setter events to capture and update `initialSelectedIds` input data.

<a name=“15.0.4”></a>

# 15.0.4 (21-03-2022)

### Bug Fixes

* `spt-logs` -
    * align left buttons
    * keyboard 'enter' event will apply changes
    * 'busy' will align to left with max-height in spt-logs
* `mat-tabs` - only selected will be bold

<a name=“15.0.3”></a>

# 15.0.3 (20-03-2022)

### Bug Fixes

* `date-picker`:
    * `date-picker-header` inputs were not aligned with `p-calendar`
    * set-to-now button wasn't working properly
    * no validator in case that selected (to) date is before (from) date

<a name=“15.0.2”></a>

## 15.0.2 (17-03-2022)

### Bug Fixes

* `spt-select` displays empty/wrong label when in multi-select and 1 item is selected (expecting string indexes but
  getting functions instead)

<a name=“15.0.1”></a>

## 15.0.1 (16-03-2022)

### Bug Fixes

* `filter-search-bar` & `filter-chips` throw errors after visiting client-main routes
    * this happened because one of client-main's 3rd party deps (AMD-dateTimePicker) monkey-patches Array.prototype with
      special functions,
      and then `filter-search-bar` & `filter-chips` use "for...in" loops on arrays (expecting string indexes but getting
      functions instead)

<a name=“15.0.0”></a>

# 15.0.0 (10-03-2022)

### BREAKING CHANGES

* added new peer dependency - 'ag-grid-enterprise'
    * added license in shared library

### Features

* `spt-grid` new features
    * `GridGroupedColumn` - Support row grouping, this column definition is included as the first column in the grid.
        * use the `groupedByFields` to define by which columns to group

### Bug Fixes

* `spt-select` fixed height on single select mode

<a name=“14.4.1”></a>

## 14.4.1 (09-03-2022)

### Features

* `spt-select` - Statement addition to the text shown in multi select

### Bug Fixes

* `mat-button-toggle` - Changed the color of the button toggle to $spt-grey-400
* `spt-select` - fixed padding according to design system

<a name=“14.4.0”></a>

## 14.4.0 (09-03-2022)

### Features

* `spt-busy` - added 2 more options for "summary card" & "barchart"

<a name="14.3.1"></a>

## 14.3.1 (08-03-2022)

### Bug Fixes

* `button` added styling to center content when width is applied
* `button` stories updated to use correct icon color class
* `spot-storage` svg logo updated to new color

<a name=“14.3.0”></a>

## 14.3.0 (08-03-2022)

### Features

* `spt-code-editor` add YAML format support

<a name=“14.2.0”></a>

## 14.2.0 (07-03-2022)

### Features

* `spt-filter-search-bar` remove 'no-results' message from filter-search-bar

<a name=“14.1.0”></a>

## 14.1.0 (02-03-2022)

### Features

* `spt-chart` exposed chart instance (to register event handlers)

<a name="14.0.0"></a>

# 14.0.0 (22-02-2022)

### BREAKING CHANGES

* `error.svg` removed from top-level icons folder and now taken from `status` folder.
* `post-add.svg` changed to correct size.
* `resume.svg` changed to correct size.
* `triangle-down.svg` changed to correct size.

<a name=“13.8.0”></a>

## 13.8.0 (20-02-2022)

### Features

* new `spt-schedule-cron-expression`component
    * [demo](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-schedulecronexpression--schedule-cron-expression)
    * [readme](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-schedulecronexpression-schedulecronexpression-readme--page)

* new `spt-tags`component
    * [demo](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-tags--tags)
    * [readme](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-tags-tags-readme--page)

* new `spt-form-list`component
    * [demo](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-formlist--form-list)
    * [readme](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-formlist-formlist-readme--page)

<a name="13.7.0"></a>

## 13.7.0 (17-02-2022)

### Features

* `button` updated colors from palette and added new active/focus state
* Storybook: added button stories

### Bug Fixes

* `button` fixed height and padding

<a name="13.6.0"></a>

## 13.6.0 (17-02-2022)

### Features

* Notifications can be setup to work via client-core-services, for better UX
    * how to: in your application, simply provide the new `NotificationsProvider` from `client-core-services` under the
      new `SCS_NOTIFICATION_PROVIDER_TOKEN`

### Deprecations

* `NotificationsModule` and `NotificationsService` are now deprecated

<a name="13.5.0"></a>

## 13.5.0 (16-02-2022)

### Features

* `spt-grid`- added single row selection support

### Bug Fixes

* `spt-grid`- fix missing icon for empty state

<a name="13.4.0"></a>

## 13.4.0 (08-02-2022)

### Features

* updated and aligned Spotlight color palette and spacing variables with Spotlight, and cleaned up references in
  stylesheets.
* added new color palette story to SB

<a name="13.3.0"></a>

## 13.3.0 (07-02-2022)

### Features

* `spt-chip`: added Read Only Chip property and state
* Updated and aligned `spt-chip` styling to more closely match Spotlight Design
    * Chips are smaller: aligned height, layout spacing, font size
    * Colors updated and added border outline
    * `close.svg` replaced with smaller icon from Spotlight for `/assets/icons` and `assets/icons/general`
* Migrated `spt-chip` & `spt-chip-list` to Storybook and removed from Gallery

<a name="13.2.3"></a>

## 13.2.3 (06-02-2022)

### Bug Fixes

* `interceptors`- `moved-permanently-response.interceptor` & `temporary-redirect-response.interceptor` should throw and
  error instead of "swallowing it", otherwise the issuer of the request cannot react to failures

<a name="13.2.2"></a>

## 13.2.2 (01-02-2022)

### Bug Fixes

* `icons`- added 'cancel' status, changed 'error' status (was X, now !)

<a name="13.2.1"></a>

## 13.2.1 (27-01-2022)

### Bug Fixes

* `spt-logs`- fix log height, width and date format

<a name="13.2.0"></a>

## 13.2.0 (20-01-2022)

### Features

* `icons`- added `warning-2` icon (alternative warning symbol)
* `spt-banner`- fixed line height for a single line banner

<a name="13.1.0"></a>

## 13.1.0 (12-01-2022)

### Features

* `spt-badge`- add `preview` badge

<a name="13.0.0"></a>

# 13.0.0 (06-01-2022)

### BREAKING CHANGES

* `spt-code-editor` moved to a secondary entry point and should be imported explicitly

### Bug Fixes

* `spt-code-editor`- add debounce to `codeChange` event

<a name="12.1.0"></a>

## 12.1.0 (06-01-2022)

### Features

* `spt-code-editor`- add `codeChange` event
* Icons - add new names for region icons (to support backend region icons naming)

<a name="12.0.3"></a>

## 12.0.3 (05-01-2022)

### Features

* `spt-charts`- add `zoomType` allow zoom on display of chart

<a name="12.0.2"></a>

## 12.0.2 (04-01-2022)

### Bug Fixes

* `spt-logs`- export Default consts and change Severities order

<a name="12.0.1"></a>

## 12.0.1 (02-01-2022)

### Bug Fixes

* `spt-logs`- removed `HttpClientModule` from the logs module
* `spt-select`- add `onChange` event to de/select all

<a name="12.0.0"></a>

# 12.0.0 (20-12-2021)

### BREAKING CHANGES

[PR#193](https://github.com/spotinst/spot-client-shared/pull/193) - Updated repo Angular version from v11.1.0 to
v12.2.13

* Library has been updated to **Angular 12**, aka Ng12. All versions moving forward including this will build the
  library with the Ivy view engine.
* Ivy Library is **incompatible with previous versions**. To consume the new version of the library please first update
  your corresponding client MFE to Ng12.
* For help to update your respective MFE application:
    * Please reach out in the *#sig-frontend-developers* slack channel
    * For reference the PR to update `spot-client-template` repository
        - [spot-client-template Ng12 Upgrade PR#11](https://github.com/spotinst/spot-client-template/pull/11)
    * Helpful Links:
        * [Angular Update Guide/Tool](https://update.angular.io/)
        * [Angular Releases Guide](https://angular.io/guide/releases)
        * [GitHub: Angular Changelog](https://github.com/angular/angular/blob/master/CHANGELOG.md)
* Known Issues in WebStorm (and other JetBrains IDEs) with respect to intelilisense IDE highlighting errors incorrectly
    * [JetBrains Issue](https://youtrack.jetbrains.com/issue/WEB-45118)
    * Verified fix in 2021.3 works. Link to latest WebStorm for Mac
        - [DL Latest WebStorm](https://www.jetbrains.com/webstorm/download/#section=mac)

### Features

* Angular updated to v12 🎉
* Library dependencies have been updated for Ng12!
    * See the following commit hashes:
        * [Ng12 Update Commit - diff package.json](https://github.com/spotinst/spot-client-shared/commit/24734e52e3a78719ca96fe0ad8fc9ec49f382626#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)
        * [Ng12 Update Commit - diff lib/package.json](https://github.com/spotinst/spot-client-shared/commit/24734e52e3a78719ca96fe0ad8fc9ec49f382626#diff-1e946220773aef913945326261b7ee8d08b8ec29ccc66ef7c348950439212ffb)
    * To maintain backwards compatibility with Storybook@6.3 `ngx-valdemort` and `primeng` were only updated to
      ngx-valdemort@5.1.0 and primeng@11.4.5
        * [SB@6.3 Update - diff package.json](https://github.com/spotinst/spot-client-shared/pull/193/commits/a3450addcf7092cf470626ea7b10e08a215c613c#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)
        * [SB@6.3 Update - diff lib/package.json](https://github.com/spotinst/spot-client-shared/pull/193/commits/a3450addcf7092cf470626ea7b10e08a215c613c#diff-1e946220773aef913945326261b7ee8d08b8ec29ccc66ef7c348950439212ffb)

<a name="11.2.0"></a>

## 11.2.0 (20-12-2021)

### Features

* `spt-grid`- add `autoHeight` set row height based on the contents of the cells
* Add “Set to now” buttons to the date picker:
    * Clicking the button should set the date and time to the current time

### Bug Fixes

* `spt-grid`- checkbox cell disable rendering instead of hiding

<a name="11.1.0"></a>

## 11.1.0 (20-12-2021)

### Features

* `spt-grid`- add `disableSelectionRowIds` allow to disable the selection of the specified rows

<a name="11.0.0"></a>

# 11.0.0 (19-12-2021)

### BREAKING CHANGES

* `AG-Grid` upgrade to version `26.2.0`

### Bug Fixes

* `spt-datepicker` fix height

* `NumeralPipe` change default number of decimals from 1 to 2

<a name="10.2.1"></a>

## 10.3.1 (19-12-2021)

### Bug Fixes

* `spt-logs`:
    * Change the min date of the date picker from 30 days to 90 days

    * Add one more preset to the date picker: *3M*

    * <b>*Reset Filters*</b> button should be disabled as long as none of the filters wasn’t changed from the default

    * <b>*Download*</b> button should be disabled in case of log viewer loading + empty state

    * The “more than 1000” records message should be updated with the following text:

        * "Spot presents the latest 1000 log records. Use the filters to view specific types of logs."

    * The empty state message should be replaced with the following text:

        * "There were no events found for the filters chosen."

<a name="10.3.0"></a>

## 10.3.0 (15-12-2021)

### Features

* `spt-select`- add appendTo - Allows to append the dropdown to body or any other element using css selector.

### Bug Fixes

* `spt-select`- style fix

<a name="10.2.0"></a>

## 10.2.0 (08-12-2021)

### Features

* Added AWS Service logos(`cloudwatch`, `vpc`, `elbv2`) to `ExternalLogosRegistryModule`.

### Bug Fixes

* `spt-code-editor`- fixed expand and collapse option based on input value

<a name="10.1.0"></a>

## 10.1.0 (08-12-2021)

### Features

* `spt-select` add isClearable - Allow removing clear button in the select label

### Bug Fixes

* add `secops-app` icon to the `SpotLogosRegistryModule`
* `spt-select` - fix invalid options check on items change

<a name="10.0.1"></a>

## 10.0.1 (06-12-2021)

### Bug Fixes

* `NavbarService` null check fixes

<a name="10.0.0"></a>

# 10.0.0 (05-12-2021)

### BREAKING CHANGES

* original `spt-select` component is renamed: `spt-select-old`
  This component is deprecated ☠️ and will be removed in version `12.0.0` - please use the new and improved spt-select
* all route definitions must now contain a new flag `shouldShowNavbar`, for example:

```jsonc
    {
        path:      '',
        component: AccountComponent,
        data:      {
            isPublic:           false,
            infraCredsRequired: false,
            shouldShowHeader:   true,
            isAllAccountsMode:  false,
            shouldShowNavbar:   true // <- this
        },
        children:  [...]
    }
```

### Features

* new `spt-select` component
    * [demo](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-select--simple-select)
    * [readme](http://storybook-public.dev.spotinst.com:8890/?path=/story/components-select-select-readme--page)
* `spt-chips` improvements
    * add isDisabled support
    * changed style
* “route-based communication” with the upcoming navbar MFE

### Bug Fixes

* `NotificationsService` fix missing icons
# v43.3.1 (04/07/2024)
patch
### Internal
* some random change
* testing
