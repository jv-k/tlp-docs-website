---
title: ' Work Breakdown'
---

# ✅ Breakdown of Work Done

Note: Items marked "✨ Backlog" are to be fixed in the future, during the next maintenance project. These items are mostly automated tests, where a bot 🤖 simulates clicking all the buttons and visits all the pages to make sure that any new changes don't break anything, and that every function is working on the website.

![tlp-master-task-list.png](../assets/tlp-master-task-list.png)

## 🔍 Detailed Breakdown

Each step above sometimes took multiple changes to the code, therefore below is the individual steps taken to fix the issues.

### 🌠 Frontend Component



### 🌠 Control Panel Component

````
[2022-10-25] - chore: ✨ first commit of v3
[2022-10-27] - refactor: using laravel's env() instead of unreliable getenv()
[2022-10-27] - chore: added .npmignore to avoid unnecessary files from being uploaded by composer
[2022-10-27] - chore: updated pkg.info, - lower case name is better as it becomes the composer module's folder name
[2022-10-30] - refactor: rename TLP_ to Tlp format
[2022-10-30] - bugfix: changed template name
[2022-10-30] - chore: update pkg info
[2022-10-30] - chore: updated package.json, updated composer.json, bumped 3.0.1 -> 3.0.2
[2022-10-31] - bug: fixed fancybox asset
[2022-10-31] - chore: updated package.json, updated composer.json, bumped 3.0.2 -> 3.0.3
[2022-10-31] - fix: fancybox css
[2022-10-31] - chore: updated package.json, updated composer.json, bumped 3.0.3 -> 3.0.4
[2022-10-31] - chore: add datatables dependency
[2022-10-31] - chore: updated package.json, updated composer.json, bumped 3.0.4 -> 3.0.5
[2022-10-31] - bug: fixed folder name
[2022-10-31] - chore: updated package.json, updated composer.json, bumped 3.0.5 -> 3.0.6
[2022-11-01] - chore: discard vendors
[2022-11-01] - bug: fix `block not defined` exception
[2022-11-01] - bug: fix alertify dependency path
[2022-11-02] - chore: added umpirsky/twig-php-function vendor
[2022-11-02] - bug: fixed undefined value error
[2022-11-02] - chore: updated package.json, updated composer.json, bumped 3.0.6 -> 3.0.7
[2022-11-02] - chore: changed bump to push changes
[2022-11-02] - chore: downgrade umpirsky/twig-php-function for php8
[2022-11-02] - chore: updated package.json, updated composer.json, bumped 3.0.7 -> 3.0.8
[2022-11-02] - chore: updated package.json, updated composer.json, bumped 3.0.8 -> 3.0.9
[2022-11-02] - refactor: removed old twig php function runner - replaced it with native twig code
[2022-11-02] - chore: updated package.json, updated composer.json, bumped 3.0.6 -> 3.0.10
[2022-11-02] - chore: update alertifyjs dependency - hope to fix 'default' console error.
[2022-11-02] - chore: updated package.json, updated package-lock.json, updated composer.json, bumped 3.0.10 -> 3.0.11
[2022-11-02] - bug: fixed alertify depn path
[2022-11-02] - chore: updated package.json, updated package-lock.json, updated composer.json, bumped 3.0.11 -> 3.0.12
[2022-11-02] - chore: revert back to old alertify, new one is not the same package
[2022-11-02] - chore: updated package.json, updated package-lock.json, updated composer.json, bumped 3.0.12 -> 3.0.13
[2022-11-02] - chore: added alertify css
[2022-11-02] - chore: updated package.json, updated package-lock.json, updated composer.json, bumped 3.0.13 -> 3.0.14
[2022-11-03] - chore: updated fontawesome to newer version for icons
[2022-11-03] - chore: add margin below uf-alerts
[2022-11-03] - chore: fixed comments
[2022-11-03] - chore: updated package.json, updated package-lock.json, updated composer.json, bumped 3.0.14 -> 3.0.15
[2022-11-03] - style: cp — change edit & delete icon size
[2022-11-03] - chore: updated package.json, updated package-lock.json, updated composer.json, bumped 3.0.15 -> 3.0.16
[2022-11-04] - fix: sanitised more variables pre-emptively
[2022-11-04] - chore: updated package.json, updated package-lock.json, updated composer.json, bumped 3.0.16 -> 3.0.17
[2022-11-04] - feat: re-enable submit button for book->add after an error
[2022-11-06] - fix: btn size
[2022-11-06] - chore: updated package.json, updated composer.json, bumped 3.0.17 -> 3.0.18
[2022-11-08] - refactor: removed unused + misplaced function
[2022-11-08] - feat: added books table pagination + new look + polished table + simplified vendor bundle
[2022-11-08] - feat: added overlay + control script - this lets language dropdown load safely without user messing with it
[2022-11-08] - fix+feat: fixed issue with persistent alerts - added more useful message for aprés-edit - added error dump to console after edit
[2022-11-08] - chore: updated package.json, updated package-lock.json, updated composer.json, created CHANGELOG.md, bumped 3.0.18 -> 3.1.0
[2022-11-10] - style: cleaning up + added better console log
[2022-11-10] - feat: dataTables state saving + pagination added - updated dataTables.js
[2022-11-10] - feat: disabled no-image thumbnail lightbox activation
[2022-11-10] - feat: disabled big title, made breadcrumbs page title bolder
[2022-11-10] - fix: multiple alerts issue fixed - click event was added on top of previous clicks without disabling previous
[2022-11-10] - feat: better post-edit/add messaging - with link to book edited/added - modifications present in tlp-core too
[2022-11-10] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.1.0 -> 3.2.0
[2022-11-10] - style: change number of dataTable items
[2022-11-10] - feat: file box fields for add/edit book - corrected input label associations
[2022-11-10] - feat: display '—' when no language for book
[2022-11-10] - style: modified overlay to be modal from start instead of activated with JQ
[2022-11-10] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.0 -> 3.3.0
[2022-11-16] - refactor: fixed depracated
[2022-11-16] - fixes/refactoring: books pages various updates: disabled cancel button on submit enabled cancel on error scroll to top on error updated ufAlerts fetch on error added icon for update book btn
[2022-11-16] - feat: added more info to books delete dialog confirmation modal - added re-init for delete btn to keep buttons updated for pagination and sort to work properly
[2022-11-16] - fix: dealt with either img field being 'null'
[2022-11-16] - style: heading new style
[2022-11-16] - feat: edit book: display '—' after image is deleted
[2022-11-16] - fix: fixed image caching issue with ?random_no
[2022-11-16] - feat: added edit icon + new style icons
[2022-11-16] - refactor: lil cleanup
[2022-11-16] - style: objects: lots of cleaning up
[2022-11-18] - style: changed styling of header and status msgs
[2022-11-18] - feat: disabled cancel button on submit and ensure proper alert retrieval
[2022-11-18] - style: cleanup
[2022-11-18] - feat(objects): added name field to table - changed order of sort to accomodate
[2022-11-18] - feat(objects): added pagination + stateSave plugin + additional length
[2022-11-18] - feat(objects): removed lightbox from thumbnail + tidied centering/standardised size
[2022-11-18] - fix(objects): fixed pagination bug where delete btn links got screwed
[2022-11-18] - feat(object): added preview button + lots of html feats in here
[2022-11-18] - feat(objects): updated button style
[2022-11-18] - refactor(object): changed to .on('click')
[2022-11-18] - feat(objects): added box around image input + shows '—' when field empty
[2022-11-18] - feat: added better log msg
[2022-11-18] - refactor: update ufAlert class
[2022-11-18] - fix(object): fixed to correct image field name
[2022-11-18] - feat: proper return messages for add + edit
[2022-11-18] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.3.0 -> 3.3.1
[2022-11-19] - feat(lang): modernised language page
[2022-11-19] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.3.1 -> 3.4.0
[2022-11-19] - style: change dataTables show label + table border colour
[2022-11-19] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.4.0 -> 3.4.1
[2022-11-20] - style: boldened title
[2022-11-20] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.4.1 -> 3.4.2
[2022-11-22] - bug: fixed null/not set value
[2022-11-22] - feat: ✨add tlp-* sprinkle versions in footer
[2022-11-22] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.4.2 -> 3.5.0
[2022-11-22] - bug: fix cp version in footer
[2022-11-22] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.0 -> 3.5.1
[2022-12-06] - fix: Renamed TLPController -> TlpController - bug seems to affect online version only
[2022-12-06] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.1 -> 3.5.2
[2022-12-10] - feat: removed tlp component version from controller -> tlp-config default config + out tlp component versions at top of html as a comment
[2022-12-10] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.2 -> 3.5.3
[2022-12-12] - bug: made cp route private
[2022-12-12] - chore: add build version / build random hash into html
[2022-12-12] - chore: add build commit and unique hash to footer info
[2022-12-12] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.3 -> 3.5.4
[2022-12-12] - style: cleanup
[2022-12-12] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.4 -> 3.5.5
[2023-01-02] - feat(chore): release task
[2023-01-02] - refactor: moved siteoffline functionality into tlp-maintenance
[2023-01-02] - refactor: 💅🏻
[2023-01-03] - refactor: normalise filenames / remove named space
[2023-01-04] - chore: update menu link for tlp-maintenance
[2023-01-07] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.5 -> 3.6.0
[2023-01-10] - refactor: rename TlpControlPanel classname -> TlpControlpanel
[2023-01-10] - refactor: rename checkOffline middleware -> checkOfflineMode
[2023-01-10] - chore: add no-cache middleware
[2023-01-10] - bug: closes #6
[2023-01-10] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.6.0 -> 3.6.1
[2023-01-11] - feat: added option to let tlp-mnt inject its own footer partial for the ribbon + added ribbon.css
[2023-01-11] - style: clean-up
[2023-01-11] - feat: new release script for auto changelog generation
[2023-01-11] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.6.1 -> 3.6.2
[2023-01-12] - chore: locked CP link under permission
[2023-01-12] - refactor: cp nav links -> all into a var
[2023-01-12] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.6.2 -> 3.6.3
[2023-01-12] - bug: updated cp permission name
[2023-01-13] - refactor: move book functions to own controller class
[2023-01-13] - refactor: create helper class
[2023-01-13] - refactor: move gallery controller to its own controller class
[2023-01-13] - refactor: move cp home handler to its own controller class
[2023-01-13] - refactor: move cp image files handler to its own controller class
[2023-01-13] - refactor: moved language handlers into their own controller class
[2023-01-13] - refactor: 💅🏻
[2023-01-14] - bug: fixed repeating overflow issue
[2023-01-13] - refactor: moved object related to own controller class
[2023-01-14] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.6.3 -> 3.7.0
[2023-01-21] - refactor: add comments + refactor + abstraction
[2023-02-08] - refactor: html id names to kebab-case
[2023-02-08] - chore: added ESLint + config
[2023-02-24] - refactor: made route more RESTful
[2023-02-26] - refactor: clean up html
[2023-02-26] - refactor: create a library out of commonly used logic
[2023-02-26] - refactor+fixes(books): javascript + html
[2023-02-26] - refactor+fixes(objects): js + html
[2023-02-26] - refactor+fixes(languages): js + html
[2023-02-26] - refactor(gallery): js + html
[2023-02-26] - style: hide X btn, etc
[2023-02-26] - refactor: small backend adjustment
[2023-02-26] - chore: remove legacy code
[2023-02-26] - Closes #23
[2023-02-28] - feature: Added form reset item
[2023-02-28] - bug/chore: Fixed form update bug + cleanups
[2023-02-28] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.7.0 -> 3.8.0
[2023-02-28] - chore: remove eslint from devDeps
[2023-02-28] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.8.0 -> 3.8.1
[2023-03-02] - Closes #26
[2023-03-03] - style+refactor: homogenised buttons, icons, titles, modals
[2023-03-03] - feature: object more images / when blank, dash makes more sense
[2023-03-03] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.8.1 -> 3.8.2
[2023-03-03] - bug: fix modal cancel (secondary) button disable upon form submit
[2023-03-03] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.8.2 -> 3.8.3
[2023-03-07] - style: changed image numbering location
[2023-03-08] - Closes #33
[2023-03-09] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.8.3 -> 3.8.4
[2023-04-14] - refactor: add versions info for CP twig template
[2023-04-14] - bug: fix php undefined variable warning
[2023-04-14] - refactor: add versions info for CP twig template
[2023-04-27] - chore: create README.md
[2023-04-14] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.8.4 -> 3.8.5
````

### 🌠 Website Master Component

````
[2022-10-25] - chore: ✨ first commit of v3! 🎉
[2022-10-26] - chore: added 'composer composer-link' for 'composer update' - can develop the packages locally instead of installing them from GHw
[2022-10-28] - chore: added rest of TLP + UF core files
[2022-10-28] - chore: added script for creating symlinks for TLP sprinkles + symlinking TLP images files from its separate repository
[2022-10-28] - chore: update UF core stu
[2022-10-29] - chore: disabled loading of child composer.json files - They will now be only loaded from sprinkles.json - The master composer.json file will load all child composer.json files, even in Sprinkles that haven't been loaded in your site's sprinkles.json.
[2022-10-29] - chore: configured xdebug debugging
[2022-10-29] - docs: added extra comments
[2022-10-29] - refactor: change rest of TLP_* —> tlp-*
[2022-10-29] - chore: mount tlp-* modules inside container instead of 'composer link' - composer link has issues, as composer's find file function only recognises absolute paths, and the link module doesn't do this
[2022-11-02] - bug: fixed exception for cp filemanager
[2022-11-02] - chore: activated settings for sprinkles (minus tlp-maintenance)
[2022-11-02] - chore: moved DB settings to ENV vars + added NPM scripts for running docker
[2022-11-02] - chore: updated + added scripts for building/bundling/distributing production + dev
[2022-11-02] - bugfix: disabled Aviary photo editor, it's been discontinued - you can't find the source files
[2022-11-05] - refactor: moved the only custom setting pertaining to TLP in core to TLP module
[2022-11-06] - feat: added uf-debug sprinkle
[2022-11-06] - chore: renamed sprinkles json -> production version
[2022-11-06] - chore: updated to latest php dependencies
[2022-11-06] - chore: updated package.json, created CHANGELOG.md, bumped 3.0.0 -> 3.0.0-beta
[2022-11-08] - chore: ignore all non-internal sprinkles
[2022-11-18] - chore: added tlp-maintenance sprinkle + updated dependencies
[2022-11-18] - chore: update dependencies
[2022-11-21] - chore: rename config scripts
[2022-11-22] - - renamed env debug->dev + updated the terms and filenames to match - removed zip utils - add yarn + mysql-client to Docker - updated composer dependencies
[2022-11-22] - chore: new build tool
[2022-11-22] - chore: updated package.json, updated CHANGELOG.md, bumped 3.0.0-beta -> 3.1.0-beta
[2022-11-22] - fix: changed image data folder
[2022-11-22] - fix: changed task + fn names to make them work with bin/bash when run with yarn inside Docker
[2022-11-22] - chore: rename dev task back to debug
[2022-11-24] - chore: update dependencies
[2022-11-25] - chore: move package tasks into bash + add task timer
[2022-11-25] - chore: update composer dependencies
[2022-11-30] - chore: updated dependencies
[2022-11-30] - chore: created continuous deployment workflow
[2022-11-30] - chore: updated package.json, updated CHANGELOG.md, bumped 3.0.0-beta -> 3.0.1
[2022-11-30] - chore: updated package.json, updated CHANGELOG.md, bumped 3.1.0-beta -> 3.2.0
[2022-11-30] - bug: fix dependencies lock file is not found
[2022-12-01] - chore: add vendor install method
[2022-12-01] - bug: fix unresolved path -  Error: Some specified paths were not resolved
[2022-12-01] - chore: change build mode to PROD
[2022-12-01] - chore: added utility to change source file app mode
[2022-12-01] - chore: add GH secret for composer update of private package
[2022-12-01] - chore: Ignore local config files
[2022-12-01] - chore: change TLP private sprinkles from SSH -> HTTPS
[2022-12-01] - chore: adjust composer settings
[2022-12-01] - chore: change vendor_update -> vendor_install
[2022-12-01] - chore: adjust ENV for composer
[2022-12-02] - chore: update composer dependencies
[2022-12-02] - chore: fixed composer secret
[2022-12-02] - chore: change wf trigger for dev
[2022-12-02] - chore: downgrade node in wf to be like docker
[2022-12-02] - bug: fixed issue with setting website mode
[2022-12-02] - bug: fix corrupted composer.lock
[2022-12-02] - chore: update dependencies
[2022-12-02] - chore: further workflow dev
[2022-12-02] - bug: fixed awk pipe error
[2022-12-02] - chore: move cache to the top
[2022-12-03] - chore: activate FTP deploy action
[2022-12-03] - chore: add zip task + correct artifact
[2022-12-03] - chore: add image build task to workflow
[2022-12-03] - chore: update gitignore
[2022-12-03] - chore: workflow update
[2022-12-05] - chore: fix FTDeploy action
[2022-12-05] - chore: re-enable all build tasks
[2022-12-05] - chore: disable TLP image build for test
[2022-12-05] - docs: added badge for tlp-data-images CD status
[2022-12-05] - chore: enable TLP image build + remove tools sourcing
[2022-12-05] - docs: added status badge for tlp-data-images
[2022-12-05] - chore: add .htaccess for tlp.jvk.to
[2022-12-06] - chore: update .gitignore
[2022-12-06] - chore: update jvktjvsw details
[2022-12-06] - chore: added docker task to test prod build folder
[2022-12-07] - chore: separate modes into local/prod/dev
[2022-12-07] - chore: update composer dependencies
[2022-12-07] - bug: fix workflow dblquote issue + rename
[2022-12-07] - chore: updated package.json, updated CHANGELOG.md, bumped 3.2.0 -> 3.3.0
[2022-12-07] - chore: workflow dev
[2022-12-07] - chore: allow build workflow to fail on error
[2022-12-07] - chore: re-enable images workflow
[2022-12-07] - docs: update CI/CD badge
[2022-12-07] - chore: workflow conditionals correction + change run triggers
[2022-12-07] - chore/docs: update badge names
[2022-12-07] - chore: updated package.json, updated CHANGELOG.md, bumped 3.3.0 -> 3.3.1
[2022-12-07] - bug: fixed workflow npm cache issue on master
[2022-12-07] - chore: updated package.json, updated CHANGELOG.md, bumped 3.3.1 -> 3.3.2
[2022-12-07] - bug: fixed FTPDeploy task
[2022-12-07] - bug: fix concurrency group name
[2022-12-07] - chore: add workflow debug info
[2022-12-07] - chore: update CI/CD workflow trigger + concurrency groupname
[2022-12-07] - feat: workflows: add smarts to public/assets + build folder  copy tasks
[2022-12-07] - chore: updated package.json, updated CHANGELOG.md, bumped 3.3.2 -> 3.3.3
[2022-12-07] - bug: updated forcing HTTPS conditional
[2022-12-08] - chore: updated package.json, updated CHANGELOG.md, bumped 3.3.3 -> 3.3.4
[2022-12-08] - chore: add build task for local
[2022-12-08] - chore: update dependencies
[2022-12-08] - chore: updated package.json, updated CHANGELOG.md, bumped 3.3.4 -> 3.3.5
[2022-12-08] - chore: update composer dependencies
[2022-12-08] - chore: updated package.json, updated CHANGELOG.md, bumped 3.3.5 -> 3.3.6
[2022-12-08] - chore: updated composer deps
[2022-12-08] - chore: make all bash cmds verbose
[2022-12-08] - chore: removed re-used cmds from workflow +  split image add task
[2022-12-08] - chore: removed some of the super verbose cmd output
[2022-12-08] - chore: added checks before trying to delete non-existent files
[2022-12-08] - bug: fixed bundle.result.json not being produced
[2022-12-08] - chore: ensure dependencies from composer.lock are loaded and NOT update
[2022-12-09] - chore: update tlp-frontend
[2022-12-09] - chore: updated package.json, updated package-lock.json, updated CHANGELOG.md, bumped 3.4.0 -> 3.4.1
[2022-12-10] - chore: update ver
[2022-12-10] - chore: put tlp info into composer file for site-wide access through site config var
[2022-12-10] - chore: ensure env/sprinkle/htaccess is properly configured for each docker task mode
[2022-12-10] - chore: update tlp + other composer dependencies
[2022-12-12] - feat: add build hash/id to .env
[2022-12-12] - refactor: build scripts: set_mode -> setmode
[2022-12-12] - feat(build): new build utility to serve dist-* files locally
[2022-12-12] - bug: fixed commit info env logging
[2022-12-12] - bug(workflow): fixed env newline issue
[2022-12-12] - bug(build): fix bad substitution error
[2022-12-12] - bug: fixed untrusted folder issue with git inside Docker
[2022-12-12] - style: build scr logo change
[2022-12-12] - feat: add release task
[2022-12-12] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.3.1 -> 3.4.2
[2022-12-12] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.3.1 -> 3.4.2
[2022-12-14] - refactor: moved welcome to its own fn + added version
[2022-12-14] - feat: add build info to dist-* for testing
[2022-12-14] - bug(build): fix permission on files for UF
[2022-12-14] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.4.2 -> 3.5.0
[2022-12-17] - chore: update gitignore
[2022-12-28] - tests: ✨ added Selenium Chrome Standalone
[2022-12-28] - refactor: cleaned up php / xdebug config
[2022-12-31] - refactor(build): added file checks
[2022-12-31] - refactor(build): made credits neater
[2022-12-31] - feat: added testing env variable + build code to activate it
[2023-01-01] - testing: added test db + yarn task
[2023-01-01] - chore: tidy up
[2023-01-01] - chore: add port for VSCode debug
[2023-01-03] - bug: fixed 'Cannot load Xdebug - it was already loaded' in Docker shell
[2023-01-03] - bug: fixed issue with file permissions for composer install/upgrade
[2023-01-03] - feat(build): added db build script
[2023-01-03] - chore(docker): add php logfile
[2023-01-03] - docs/refactor: 💅🏻
[2023-01-03] - chore: updated lockfile
[2023-01-05] - chore: added test DBs for Docker Maria-DB
[2023-01-05] - chore: removed uf-debug
[2023-01-05] - chore: add db start sql to .gi
[2023-01-05] - chore: remove uf-debug from remainder
[2023-01-05] - docs: update
[2023-01-05] - chore(debug): adjust xdebug config
[2023-01-05] - chore(build): adjust name of docker up task
[2023-01-05] - chore: add maintenance to all sprinkles / clean-up
[2023-01-05] - bug(build): fixed major headache with composer permissions by using --no-cache for updates + installs
[2023-01-07] - chore(build): update build workflow / fix issue with TLP modules not updating
[2023-01-07] - chore: update tlp dependencies
[2023-01-07] - chore(build): delete workflow artifacts after 3 days
[2023-01-08] - fix: shellcheck issues
[2023-01-08] - refactor: declare local + global vars properly
[2023-01-08] - chore(build): add --ninja silence mode to sush the credits
[2023-01-08] - chore: some refactoring
[2023-01-08] - feat: 🎊 added comprehensive changelog since previous commit
[2023-02-28] - chore: update build script + npm tasks
[2023-02-28] - chore: remove TODO
[2023-03-09] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.0 -> 3.5.1
[2023-03-09] - chore(buildtool): update ftp-deploy-action
[2023-03-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.1 -> 3.5.2
[2023-03-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.1 -> 3.5.2
[2023-03-10] - chore: update deprecating save-state command
[2023-03-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.2 -> 3.5.3
[2023-03-11] - chore(ci/cd): fixes #31
[2023-03-11] - chore(ci/cd): turn on verbose logging for ftp-deploy-action for troubleshooting
[2023-03-11] - bugfix(ci/cd): Fixes #33
[2023-03-11] - chore(build): corrected prompt
[2023-03-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.2 -> 3.5.3
[2023-03-11] - chore(ci/cd): fixes #31
[2023-03-11] - chore(ci/cd): turn on verbose logging for ftp-deploy-action for troubleshooting
[2023-03-11] - chore(ci/cd): added removal of build artifact
[2023-03-11] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.3 -> 3.5.4
[2023-03-11] - chore(cd/ci): turn off verbose logging for FTP
[2023-03-12] - chore(cd/ci): turn off deleting artifacts for PROD
[2023-03-12] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.4 -> 3.5.5
[2023-03-15] - chore(buildtool): added line break
[2023-03-15] - chore: update dependencies lockfile
[2023-03-15] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.5 -> 3.5.6
[2023-03-15] - chore(ci/cd): change deps update to all
[2023-03-15] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.6 -> 3.5.7
[2023-03-16] - chore(ci/cd): disable installing composer dev dependencies + restore package.json formatting
[2023-03-17] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.7 -> 3.5.8
[2023-03-17] - chore(ci/cd): update lockfile + adjust composer deps install
[2023-03-17] - chore(ci/cd): update lockfile + adjust composer deps install
[2023-03-18] - chore(ci/cd): added permissions setting for prod before FTP upload
[2023-03-18] - chore(ci/cd): added permissions setting for prod before FTP upload
[2023-03-18] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.8 -> 3.5.9
[2023-03-18] - bug(ci/cd): fix directory permission set error
[2023-03-18] - chore(ci/cd): disable verbose logging for FTP-Deploy
[2023-03-18] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.9 -> 3.5.10
[2023-03-30] - bugfix: revert filp/whoops to shipped version
[2023-03-31] - chore: added JWT secret
[2023-03-31] - chore(ci/cd): fix tlp vendor install
[2023-03-31] - style: clean-up
[2023-04-01] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.10 -> 3.5.11
[2023-04-01] - docs: added db nightly workflow badge
[2023-04-01] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.11 -> 3.5.12
[2023-04-01] - chore: update dependencies
[2023-04-01] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.12 -> 3.5.13
[2023-04-03] - chore: update ftp-deploy-action
[2023-04-03] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.13 -> 3.5.14
[2023-04-03] - bug(ci/cd): fixed file permissions
[2023-04-14] - refactor(cd/ci): renamed vendor + assets -> backend + frontend
[2023-04-14] - refactor(cd/ci): typo correction
[2023-04-19] - chore(ci/cd): update deps
[2023-04-20] - chore(cd/ci): fix chmod
[2023-04-20] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.14 -> 3.5.15
[2023-04-23] - feat(ci/cd): add special mode for releasenotes to build-tool for logo
[2023-04-23] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.15 -> 3.5.16
[2023-04-23] - chore: updated CHANGELOG.md, bumped to 3.5.16
[2023-04-24] - bug(ci/cd): fixes #42
[2023-04-24] - chore: made docker test sql smaller in size
[2023-04-24] - chore: update local docker node version
[2023-04-24] - bug: fix double changelog logo
[2023-04-24] - chore(ci/cd): update workflow comments
[2023-04-24] - bug(ci/cd): corrected file permissions
[2023-04-24] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.16 -> 3.5.17
[2023-04-11] - bug: Integrating upstream Whoops issue 752/PR 751
[2023-04-17] - bug: Apply fixes from StyleCI
[2023-04-16] - bug: Fix error with hardcoded date
[2023-04-17] - chore: update defines.php
[2023-04-25] - chore: revert filp/whoops version
[2023-04-25] - chore: add GA token to dev + local config env
[2023-04-26] - chiore: remove empty package.lock
[2023-04-26] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.17 -> 3.5.18
[2023-04-26] - bug: removed double changelog welcome msg
[2023-04-26] - chore: rename workflow
[2023-04-26] - feat(ci/cd): adjust changelog msg
[2023-04-26] - refactor: 💅🏻
[2023-04-26] - bug: fixes #47
[2023-04-26] - bug: fixed extra curly braces
[2023-04-26] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.18 -> 3.5.19-rc.0
[2023-04-27] - bug: fix file not found [expect]
[2023-04-27] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.19-rc.0 -> 3.5.19-rc.1
[2023-04-27] - docs: fix ci/cd status badge
[2023-04-27] - docs: update title
[2023-04-27] - bug(ci/cd): fix root error
[2023-04-27] - bug(ci/cd): fix sftp user input requirement error
[2023-04-28] - chore(ci/cd): add linux expect cli to docker container
[2023-04-28] - debug: add verbose output to sftp
[2023-04-28] - docs: fix deploy workflow badge
[2023-04-28] - chore(ci/cd): add timing to script
[2023-04-28] - bug(ci/cd): fix sftp error
[2023-04-29] - chore(ci/cd): remove sftp verbose output
[2023-04-29] - chore(ci/cd): update workflow titles
[2023-04-29] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.19-rc.1 -> 3.5.19-rc.2
[2023-04-29] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.19-rc.2 -> 3.5.19
[2023-04-29] - docs: create jekyll-gh-pages.yml
[2023-04-30] - docs: update license
[2023-04-30] - docs: update style guide
[2023-04-30] - chore: reformat package.json
[2023-04-30] - docs: saving update / wip
[2023-05-01] - docs: saving update / wip
[2023-05-01] - chore(build-tool): rename docker main task
[2023-05-01] - docs: update README
[2023-05-01] - docs: added ToC workflow + placeholder
[2023-05-01] - chore(docs): update TOC
[2023-05-01] - chore(docs): add PR for toc generator
[2023-05-01] - docs: update readme.md
[2023-05-01] - chore(docs): update TOC
[2023-05-01] - docs: update readme
[2023-05-01] - chore(ci/cd): ignore push of .md files
[2023-05-01] - chore(ci/cd): toc generate only on .md push
[2023-05-01] - docs: add info on linking tlp images repo
[2023-05-01] - chore(docs): update TOC
[2023-05-02] - chore(ci/cd): rename workflow
[2023-05-02] - chore(ci/cd): change workflow to only trigger on release
[2023-05-02] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.19 -> 3.5.20-rc.0
[2023-05-02] - chore(ci/cd): fix workflow trigger
[2023-05-02] - chore(ci/cd): remove unnecessary perm setting
[2023-05-02] - chore: touch-up
[2023-05-02] - chore(ci/cd): fix cache step order
[2023-05-02] - bug(task runner): fixed error with bash arrays
[2023-05-02] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.20-rc.0 -> 3.5.20-rc.1
[2023-05-02] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.19 -> 3.5.20
[2023-05-02] - chore: updated CHANGELOG.md, bumped to 3.5.20
[2023-05-03] - chore(ci/cd): rename env.OUT -> BUILD_DIR
[2023-05-03] - bug(ci/cd): fix branch deploy issue
[2023-05-03] - chore(ci/cd): update concurrency id
[2023-05-03] - chore(ci/cd): restrict gh pages triggers / change title
[2023-05-03] - chore(ci/cd): set ToC workflow title
[2023-05-03] - chore(ci/cd): update job title
[2023-05-03] - chore(ci/cd): add spaces / comments
[2023-05-03] - chore: updated package.json, updated package-lock.json, updated composer.json, updated CHANGELOG.md, bumped 3.5.20 -> 3.5.21
[2023-05-03] - chore(ci/cd): rename workflow title + file
[2023-05-03] - docs: update readme
[2023-05-03] - chore(docs): update TOC
[2023-05-06] - docs: update component table
[2023-08-13] - docs: update README.md
````

### 🌠 Website Core Component

````
[2022-10-24] - chore: ✨ first commit of v3
[2022-10-25] - bugfix: Replaced  with superglobal
[2022-10-25] - chore: updated package.json, updated composer.json, created CHANGELOG.md, bumped 3.0.0 -> 3.0.1
[2022-10-25] - chore: updated package info in json files
[2022-10-25] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.1 -> 3.0.2
[2022-10-27] - chore: added .npmignore to avoid unnecessary files from being uploaded by composer
[2022-10-27] - chore: updated pkg.info, - lower case name is better as it becomes the composer module's folder name
[2022-10-28] - refactor: changed package name to tlp-core / TLPCore
[2022-10-28] - chore: updated package.json, updated CHANGELOG.md, bumped 3.0.2 -> 3.0.3
[2022-10-28] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.2 -> 3.0.3
[2022-10-29] - refactor: rename TLPCore namespace to TlpCore
[2022-10-29] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.3 -> 3.0.4
[2022-11-01] - bug: fix PDOException when bindings have null value - SQLSTATE[HY093]: Invalid parameter number: number of bound variables does not match number of tokens
[2022-11-01] - bugfix: sanitise input vars + removed undefined vars + corrected array key names + fixed typos in var names
[2022-11-01] - bugfix: fixed issue with the gallery not loading - phpFlickr class needed to be updated for PHP8 - debug breakpoint didn't work before
[2022-11-01] - bugfix: fixed issue with local ip address causing issues
[2022-11-01] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.4 -> 3.0.5
[2022-11-01] - chores: updated ver-bump task to not create a branch
[2022-11-01] - chore: updated package.json, updated composer.json, bumped 3.0.5 -> 3.0.6
[2022-11-01] - bug: fixed undefined variable exception
[2022-11-01] - chore: updated package.json, updated composer.json, bumped 3.0.6 -> 3.0.7
[2022-11-01] - bug: changed Google Maps API -> openstreetmap free API for getting location coordinates
[2022-11-01] - chore: updated package.json, updated composer.json, bumped 3.0.7 -> 3.0.8
[2022-11-02] - bug: fixed unset variable problem
[2022-11-02] - bugfix: fixed issues with unset / wrong number of vars
[2022-11-02] - chore: updated package.json, updated composer.json, bumped 3.0.8 -> 3.0.9
[2022-11-02] - chore: changed bump to push changes
[2022-11-02] - chore: add verot image upload vendor
[2022-11-02] - chore: fixed bindings, added some checks for unchanged file value
[2022-11-02] - chore: updated package.json, updated composer.json, bumped 3.0.9 -> 3.0.10
[2022-11-03] - bugfix: fixed issue with the category not being passed to Twig properly - fixed broken edit link in cp->books->edit
[2022-11-03] - chore: changed map query from city to general, to accomodate country names
[2022-11-03] - bugfix: fixed issue when language isn't set (languageid = 0)
[2022-11-03] - chore: updated package.json, updated composer.json, bumped 3.0.10 -> 3.0.11
[2022-11-03] - chore: updated package.json, updated composer.json, bumped 3.0.11 -> 3.0.12
[2022-11-03] - bug: fix null variable issue
[2022-11-03] - bug: refactor + fix sanitize filepath input
[2022-11-03] - chore: updated package.json, updated composer.json, bumped 3.0.12 -> 3.0.13
[2022-11-03] - bugfix: sanitise uploadImages input
[2022-11-03] - chore: updated package.json, updated composer.json, bumped 3.0.13 -> 3.0.14
[2022-11-05] - refactor: moved settings from uf core settings to tlp config + cleaned up settings
[2022-11-06] - feat: created database seed for filemanager access permission
[2022-11-06] - chore: added debug site configs
[2022-11-08] - fix: fixed image insertion / deletion issues
[2022-11-08] - fix: many sanity checks, fixed mysql null value issue
[2022-11-08] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.14 -> 3.1.0
[2022-11-10] - feat: better post-edit/add return alerts to support CP sprinkle
[2022-11-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.1.0 -> 3.2.0
[2022-11-18] - fix(objects): fixed issue with other pictures not showing when main pic not found
[2022-11-18] - chore: removed prod config, new config works for both dev/prod
[2022-11-18] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.0 -> 3.2.1
[2022-11-19] - fix(lang): fixed image not present issue
[2022-11-19] - fix(lang): issue with ID not being returned
[2022-11-19] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.1 -> 3.2.2
[2022-11-21] - fix: null error, was never used anyway
[2022-11-21] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.2 -> 3.2.3
[2022-11-22] - bug: fixed issue with unset / "-" country
[2022-11-22] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.3 -> 3.2.4
[2022-12-06] - fix: Renamed TLPController -> TlpController - bug seems to affect online version only
[2022-12-06] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.4 -> 3.2.5
[2022-12-08] - bug: added public uri to default settings
[2022-12-08] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.5 -> 3.2.6
[2022-12-10] - feat: add TLP component versions for all components to use
[2022-12-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.6 -> 3.2.7
[2022-12-12] - chore: add env build info to config for access in templates etc
[2022-12-12] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.7 -> 3.2.8
[2022-12-14] - chore: shorted version number to SemVer
[2022-12-14] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.8 -> 3.2.9
[2023-01-02] - tests: added testing mode site settings
[2023-01-03] - feat: 🎊 custom error page
[2023-01-03] - chore[cd/ci]: added release script
[2023-01-03] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.9 -> 3.2.10
[2023-01-03] - style: lil saturation for the lil prince
[2023-01-03] - feat: override uf core routes
[2023-01-03] - bug: fix / removed hyphen from bundle name
[2023-01-05] - bug: fixed img relative -> absolute path
[2023-01-05] - chore: add fontawesome dep
[2023-01-05] - bug: fixed gradient repeat
[2023-01-07] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.2.10 -> 3.3.0
[2023-03-03] - bugfix: closes #6
[2023-03-03] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.3.0 -> 3.3.1
[2023-03-30] - chore: update release task
[2023-04-14] - refactor: tidy up formatting
[2023-04-14] - bug: fixes #9 when popular object array is null
[2023-04-14] - refactor: add comments to config files
[2023-04-14] - Closes #12
[2023-04-14] - Fixes #13
[2023-04-14] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.3.1 -> 3.3.2
[2023-04-20] - feat(cd/ci): permission setter utility for GH Actions
[2023-04-20] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.3.2 -> 3.4.0
[2023-04-27] - chore: create README.md
[2023-04-29] - bug: fix root version
[2023-04-29] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.4.0 -> 3.4.1
### 🤖 Database Automatic Backup Component

[2022-11-21] - chore: ✨ first commit 
[2023-03-30] - chore: add GI
[2023-03-30] - feature: added automated workflow for backup up DB
[2023-03-30] - feat: added GH workflow for automated DB backup
[2023-03-30] - bug: fix wf folder name
[2023-03-30] - bug: add npm install
[2023-03-30] - bug: fix env variable
[2023-03-30] - bug: fixed dev route
[2023-03-31] - feature: added download + commit
[2023-03-31] - bug: fixed env shared between jobs + made dbdumper return DB filename
[2023-03-31] - bug: fixed non-persisten repo files across jobs
[2023-04-01] - chore: remove .sql from gitignore
[2023-04-01] - Update Db from TLP website
[2023-04-01] - chore: updated package.json, updated package-lock.json, created CHANGELOG.md, bumped 0.1.0 -> 1.0.0
[2023-04-01] - Update Db from TLP website
[2023-04-01] - feature(ci/cd): add nightly cron job
[2023-04-01] - Update Db from TLP website
[2023-04-01] - docs: added readme + wf basge
[2023-04-01] - chore: updated package.json, updated package-lock.json, updated CHANGELOG.md, bumped 1.0.0 -> 1.0.1
[2023-04-01] - chore(🤖): updated db from tlp website
[2023-04-01] - docs: added readme + wf basge
[2023-04-01] - chore(🤖): updated db from tlp website
[2023-04-01] - chore: adjusted commit message
[2023-04-01] - chore(🤖): updated db from tlp website
[2023-04-01] - chore(🤖): updated db from tlp website
[2023-04-22] - bug: fixed authorization header
[2023-04-22] - chore: updated package.json, updated package-lock.json, updated CHANGELOG.md, bumped 1.0.1 -> 1.1.0
[2023-04-23] - feat(cd/ci): added git lfs for the large files
[2023-04-22] - chore(🤖): updated db from tlp website
[2023-04-23] - feature: created proper bash backup tool for downloading db dumps
[2023-04-23] - docs: update
[2023-04-23] - chore(🤖): updated db from tlp website
[2023-04-23] - bug: fixes #8
[2023-04-23] - chore(🤖): updated db from tlp website
[2023-04-23] - chore: updated package.json, updated package-lock.json, updated CHANGELOG.md, bumped 1.1.0 -> 1.2.0
[2023-04-23] - docs: updated README
[2023-04-23] - chore: updated package.json, updated package-lock.json, updated CHANGELOG.md, bumped 1.2.0 -> 1.3.0
[2023-04-23] - chore: pretty gfx!!
[2023-04-24] - chore(🤖): updated db from tlp website
[2023-04-29] - bug: fix LFS caching

### 🤖 Images Automatic Backup Component

[2022-11-21] - chore: ✨ first commit
[2022-11-21] - chore: created CHANGELOG.md, bumped to 0.1.0
[2022-11-21] - chore: added archive_221121_062857
[2022-11-21] - chore: bump taste + GI update
[2022-11-21] - chore: updated package.json, updated CHANGELOG.md, bumped 0.1.0 -> 0.1.1
[2022-11-21] - chore: changed folder struct
[2022-11-21] - chore: updated package.json, updated CHANGELOG.md, bumped 0.1.1 -> 0.2.0
[2022-11-22] - chore: changed folder ACL in theory
[2022-11-22] - chore: updated package.json, updated CHANGELOG.md, bumped 0.2.0 -> 0.2.1
[2022-12-05] - chore: create image download workflow
[2022-12-05] - chore: add workflow status badge
[2022-12-05] - chore: add workflow status badge
[2022-12-05] - chore: updated package.json, updated CHANGELOG.md, bumped 0.2.1 -> 3.0.0
[2022-12-05] - Update images from TLP website
[2022-12-05] - chore: change cron job time
[2022-12-07] - Update scheduled-download.yml
[2022-12-07] - added larger transparent homepage hero image
[2022-12-07] - chore: updated package.json, updated CHANGELOG.md, bumped 3.0.0 -> 3.0.1
[2022-12-29] - Update images from TLP website
[2023-01-06] - chore: changed artifact retention 90 -> 3 days
[2023-01-15] - Update images from TLP website
[2023-03-06] - Update images from TLP website
[2023-03-11] - Update workflow
[2023-04-24] - Update images from TLP website
[2023-04-27] - Update README.md
````

### 🤖 Maintenance Control Panel Component

````
022-11-10] - chore: ✨ first commit of data! 🎉
[2022-11-10] - chore: created CHANGELOG.md, bumped to 3.0.0
[2022-11-10] - fix: psr-4 classname corrected + console msg update
[2022-11-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.0 -> 3.0.1
[2022-11-18] - chore: changed dump folder
[2022-11-18] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.1 -> 3.0.2
[2022-11-20] - style: updated pagetitle
[2022-11-20] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.2 -> 3.0.3
[2023-01-02] - feat: added warning for user before closing window when db back-up is running
[2023-01-05] - chore: added clean state after ajax call
[2023-01-05] - chore: 💅🏻
[2023-01-05] - refactor: change maint route
[2023-01-05] - chore: rename default page fn name
[2023-01-05] - feat(build): add release and addonly tasks
[2023-01-05] - feat: 🎊 add site offline feature for other parts of TLP to use
[2023-01-05] - refactor: rename script/bundle
[2023-01-05] - chore: discard
[2023-01-05] - feat: launch 🚀 of v4
[2023-01-05] - feat: 🎊 launch db backup panel
[2023-01-05] - refactor: tidied up related to db panel
[2023-01-05] - feat: 🎊 launch uf-config panel
[2023-01-05] - refactor: changed db-backup endpoint + api format
[2023-01-05] - refactor: changed dir structure
[2023-01-05] - feat: add offline prompt
[2023-01-05] - style: update
[2023-01-05] - feat: site maintenance / cont'd dev / added prompt and handler function
[2023-01-05] - chore: add form processing for site settings
[2023-01-05] - chore(build): task for installing modules without d/l
[2023-01-05] - chore: files backup first commit
[2023-01-05] - chore: keep notes for potential auth
[2023-01-06] - chore: add phpinfo page content provider
[2023-01-06] - chore: restore offline middleware
[2023-01-06] - chore: correct env value passing + added screenshot
[2023-01-06] - feat: finalised mnt settings panel 🚀
[2023-01-06] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 3.0.3 -> 4.0.0
[2023-01-05] - feat: 🎊 launch uf-config panel
[2023-01-06] - bug: fixed artifact from merge
[2023-01-06] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.0.0 -> 4.0.1
[2023-01-06] - bug/refactor: fix what the merge borked / rename files for consistency
[2023-01-06] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.0.1 -> 4.0.2
[2023-01-08] - refactor: change to ServiceProvider design pattern from UF
[2023-01-10] - refactor: changed to ServiceProvider pattern
[2023-01-10] - chore: add no-cache and fix image path
[2023-01-10] - feat: added tlp_maintenance_access authorization check
[2023-01-10] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.0.2 -> 4.1.0
[2023-01-11] - feat: 🎊 added ribbon offline indicator
[2023-01-11] - feat: 🎊 added ribbon offline indicator
[2023-01-11] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.1.0 -> 4.2.0
[2023-03-04] - feature: added github actions repo info
[2023-03-04] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.2.0 -> 4.2.1
[2023-03-29] - feature: add API for GH Actions to download a db dump
[2023-03-30] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.2.1 -> 4.3.0
[2023-03-31] - chore: remove throttler from getDbDump
[2023-03-31] - chore: Switch on logging + refactor/clean up
[2023-03-31] - feature: added check for JWT_SECRET
[2023-03-31] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.3.0 -> 4.4.0
[2023-03-31] - bugfix: disable logging
[2023-03-31] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.4.0 -> 4.4.1
[2023-03-31] - chore: change returned filename
[2023-03-31] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.4.1 -> 4.4.2
[2023-04-04] - bug: fixed hard-coded cp route issue
[2023-04-04] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.4.2 -> 4.4.3
[2023-04-14] - Add versions info for CP twig template
[2023-04-14] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.4.3 -> 4.4.4
[2023-04-21] - feat: add check for token not supplied
[2023-04-21] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.4.4 -> 4.4.5
[2023-04-22] - bug: fixed authorization header
[2023-04-22] - chore: updated package.json, updated composer.json, updated CHANGELOG.md, bumped 4.4.5 -> 4.5.0
````
