/**
 * Uses repository names contained in a JSON object and retrieves the version number
 * and description from the package.json contained in the default branch, and
 * writes it to a new json file.
 *
 * 1. Load environment variables to get the GitHub access token.
 * 2. Fetch repository details from the GitHub API.
 * 3. Extract the package.json file from the repository.
 * 4. Parse the package.json file to get the version number and description.
 * 5. Write the results to a new JSON file.
 */

import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { formatDate } from '@/lib/utils';

dotenv.config();

const GITHUB_TOKEN = process.env.PAT_TOKEN;
const REPO_FILE = './tlp-repos.json';
const OUTPUT_FILE = './remote-content/tlp-components.json';

if (!GITHUB_TOKEN) {
  console.error('GitHub token not found in .env file');
  process.exit(1);
}

interface RepoInfo {
  name: string;
  version: string;
  description: string;
  date?: string; // Optional field for last published date
}

/**
 * Fetch repository details from the GitHub API.
 */
async function fetchLatestReleaseDate(
  owner: string,
  repo: string,
): Promise<string | undefined> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    return response.data.published_at || null;
  } catch (error) {
    console.error(
      `Error fetching latest release date for ${owner}/${repo}:`,
      error.message,
    );
    return;
  }
}

/**
 * Extract info from the package.json file from a repository.
 * Parse the package.json file to get the version number and description.
 */
async function fetchRepoInfo(
  owner: string,
  repo: string,
): Promise<RepoInfo | null> {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/package.json`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3.raw',
      },
    });

    const packageJson = response.data;
    const lastPublishedDateIso = (await fetchLatestReleaseDate(
      owner,
      repo,
    )) as string;

    return {
      name: packageJson.name,
      description: packageJson.description,
      version: packageJson.version,
      date: formatDate(lastPublishedDateIso),
    };
  } catch (error: any) {
    console.error(
      `Error fetching repo info for ${owner}/${repo}:`,
      error.message,
    );
    return null;
  }
}

async function main() {
  const repos = JSON.parse(fs.readFileSync(REPO_FILE, 'utf-8')) as string[];

  const results: {
    [key: string]: RepoInfo | null;
  } = {};

  for (const fullName of repos) {
    const [owner, repo] = fullName.split('/');
    const repoInfo = await fetchRepoInfo(owner, repo);
    results[fullName] = repoInfo;
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Results written to ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error('Error in main execution:', error.message);
});
