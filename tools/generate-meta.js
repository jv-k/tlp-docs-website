import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

dotenv.config();

/**
 * Get a list of markdown files in the directory tree.
 * @param {string} dir - The directory to scan for markdown files.
 * @returns {string[]} - Array of markdown filepaths.
 */
const getMarkdownFiles = (dir) => {
  const mdFiles = [];

  // Recursive call to process subdirectories
  const recProcessDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const filePath = path.join(dir, item);
      if (fs.statSync(filePath).isDirectory()) {
        recProcessDirectory(filePath);
      } else if (/\.(md|mdx)$/i.test(item)) {
        mdFiles.push(filePath);
      }
    });
    return mdFiles;
  };
  return recProcessDirectory(dir);
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
const generateJsonFromMarkdownFiles = (dir) => {
  const markdownFiles = getMarkdownFiles(dir);
  const jsonResult = {};
  for (const filePath of markdownFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const title = extractTitleFromFrontMatter(content);
    if (title) {
      const key = path.basename(filePath, '.md');
      jsonResult[key] = { title };
    }
  }

  return jsonResult;
};

/**
 * Generate JSON from markdown files
 * @param {string} markdownDir
 * @param {string} outputFile
 * @returns {nothing}
 */
const main = (markdownDir, outputFile) => {
  // Directory containing your markdown files
  const result = generateJsonFromMarkdownFiles(markdownDir);

  // Output result to a JSON file
  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
  console.log('JSON file generated:', result);
};

// Go!
if (process.env.NODE_ENV !== 'test') {
  const markdownPath = `${process.env.DOCS_DIR}/`;
  const outputPath = `${process.env.DOCS_DIR}/_meta.json`;

  if (markdownPath) {
    console.info(`Generating _meta.json from '${markdownPath}' ... \n`);
    try {
      main(markdownPath, outputPath);
      console.info(`\n Created ${outputPath} 👌🏻`);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.error(`Error loading .env!`);
  }  
}