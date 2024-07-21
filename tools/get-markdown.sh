#!/usr/bin/env bash

# This shell script automates the process of exporting Obsidian notes into
# Markdown format. 

deleteOldDirs() {
  for THISDIR in "${VFOLDERS[@]}"
  do
    THISDIR_SF=$(slugify "${THISDIR}")
    rm -rf "$DOCS_DIR/$THISDIR"
    rm -rf "$DOCS_DIR/$THISDIR_SF"
    mkdir -p "$DOCS_DIR/$THISDIR"
  done
}

# It takes two arguments: the path to the Obsidian vault and
# the path to the directory where you want to export the notes.
getObsidianFiles() {
  printf "Get 💎 Obsidian -> Markdown from:\n  %s\n\n Into:\n  %s\n" "$VAULT_DIR" "$DOCS_DIR"
  
  obsidian-export \
    "$VAULT_DIR" "$DOCS_DIR" # --frontmatter=always
}

getGitHubFiles() {
  GH_URL="https://raw.githubusercontent.com/jv-k"
  CAUTH="Authorization: token ${PAT_TOKEN}"

  # Get CURRENT changelogs
  mkdir -p "${DOCS_DIR}/${VFOLDERS[1]}/Changelogs"

  REPO="tlp-master/master"
  curl -H "${CAUTH}" -L "${GH_URL}/${REPO}/CHANGELOG.md" -o "${DOCS_DIR}/${VFOLDERS[1]}/Changelogs/tlp-master.md"

  REPO="tlp-frontend/master"
  curl -H "${CAUTH}" -L "${GH_URL}/${REPO}/CHANGELOG.md" -o "${DOCS_DIR}/${VFOLDERS[1]}/Changelogs/tlp-frontend.md"

  # Get OLD changelogs
  mkdir -p "${DOCS_DIR}/${VFOLDERS[0]}/Changelogs"

  REPO="annaslittleprince/main"
  curl -H "${CAUTH}" -L "${GH_URL}/${REPO}/CHANGELOG.md" -o "${DOCS_DIR}/${VFOLDERS[0]}/Changelogs/changelog.md"
}

# Load variables from .env
if [ -f ./.env ]; then
  source ./.env
else
  echo "Error: .env file not found."
  exit 1
fi

# Rock 'n roll 
if [ -n "$VAULT_DIR" ] && [ -n "$DOCS_DIR" ]; then
  deleteOldDirs && \
  getObsidianFiles && \
  getGitHubFiles
else
  echo "Error: VAULT_DIR and/or DOCS_DIR are empty."
  exit 1
fi
