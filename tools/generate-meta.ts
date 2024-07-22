import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import slugify from '@sindresorhus/slugify';
import matter from 'gray-matter';

dotenv.config();

/**
 * Get a list of markdown files and directories in the directory tree.
 * @param {string} dir - The directory to scan for markdown files and directories.
 * @returns {Object} - An object with `files` and `dirs` arrays.
 */
const getMarkdownAndDirs = ({dir, recurse = true}) => {
  const mdFiles = [];
  const dirs = [];

  // Recursive call to process subdirectories
  const recProcessDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const filePath = path.join(dir, item);
      if (fs.statSync(filePath).isDirectory() && filePath.indexOf('assets') == -1) {
        dirs.push(filePath);
        recurse && recProcessDirectory(filePath);  // Recurse into subdirectory
      } else if (/\.(md|mdx)$/i.test(item)) {
        mdFiles.push(filePath);
      }
    });
  };
  
  recProcessDirectory(dir);
  return { files: mdFiles, dirs };
};

/**
 * Extract the title from the front matter of the markdown content.
 * @param {string} content - The content of the markdown file.
 * @returns {string|null} - The title if found, otherwise null.
 */
const extractTitleFromFrontMatter = (content) => {
  const { data } = matter(content);
  return data.title || null;
};

/**
 * Generate a JSON object from the markdown files in the directory.
 * @param {string} dir - The directory to scan for markdown files.
 * @returns {Object} - JSON object with filenames as keys and titles as properties.
 */
const generateJsonFromMarkdownFiles = ({ dir, isRoot = false }) => {
  const { files, dirs } = getMarkdownAndDirs({ dir, recurse: isRoot && false });
  const jsonResult = {};
  
  // Process markdown files
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const title = extractTitleFromFrontMatter(content);
    if (title) {
      const key = path.basename(filePath, path.extname(filePath));
      const slug = slugify(key, { preserveLeadingUnderscore: true }); 
      jsonResult[slug] = { title };
    }
  }

  // Add folders to the JSON result with type: "page"
  for (const folder of dirs) {
    const folderName = path.basename(folder);
    const slug = slugify(folderName, { preserveLeadingUnderscore: true }); 
    jsonResult[slug] = isRoot ? { title: folderName, type: 'page'} : folderName;
  }

  return jsonResult;
};

/**
 * Write the _meta.json file for the directory.
 * @param {string} dir - The directory where the _meta.json file should be written.
 * @param {Object} jsonResult - The JSON object to write to the file.
 */
const writeMetaJson = (dir, jsonResult) => {
  const metaFilePath = path.join(dir, '_meta.json');
  fs.writeFileSync(metaFilePath, JSON.stringify(jsonResult, null, 2));
};

/**
 * Generate JSON files for each directory and handle the root folder.
 * @param {string} rootDir - The root directory to start scanning.
 */
const processDirectories = (rootDir) => {
  const { dirs } = getMarkdownAndDirs({ dir: rootDir, recurse: false });
  
  // Process root directory
  const rootJsonResult = generateJsonFromMarkdownFiles({ dir: rootDir, isRoot: true });
  writeMetaJson(rootDir, rootJsonResult);

  // Process each subdirectory
  for (const dir of dirs) {
    const jsonResult = generateJsonFromMarkdownFiles({ dir });
    writeMetaJson(dir, jsonResult);
  }
};

/**
 * Generate JSON from markdown files
 * @param {string} markdownDir - The directory containing markdown files.
 * @param {string} outputFile - The output JSON file.
 */
const main = (markdownDir, outputFile) => {
  processDirectories(markdownDir);
  console.log('JSON files generated.');
};

// Go!
if (process.env.NODE_ENV !== 'test') {
  const markdownPath = process.env.DOCS_DIR;
  const outputPath = path.join(markdownPath, '_meta.json');

  if (markdownPath) {
    console.info(`Generating _meta.json files from '${markdownPath}' ... \n`);
    try {
      main(markdownPath, outputPath);
      console.info(`\n Created _meta.json files successfully 👌🏻`);
    } catch (e) {
      console.error('Error:', e);
    }
  } else {
    console.error(`Error loading .env!`);
  }  
}
