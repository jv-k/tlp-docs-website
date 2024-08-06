import dotenv from 'dotenv';
import slugify from '@sindresorhus/slugify';
import fs from 'fs';
import path from 'path';

dotenv.config();
let somethingChanged = false;

/**
 * Recursively process files + filders and rename them to make them suitable
 * for NextJS pages folder.
 * @param {string} dirPath
 */
const processDirectory = (dirPath) => {
  const newItems = [];

  const recProcessDirectory = (dirPath) => {
    const items = fs.readdirSync(dirPath);
    items.forEach((item) => {
      const oldPath = path.join(dirPath, item);

      if (fs.statSync(oldPath).isDirectory()) {
        // Process directory name
        const newName = slugify(item, { preserveLeadingUnderscore: true });
        const newPath = path.join(dirPath, newName);

        if (oldPath !== newPath) {
          somethingChanged = true;
          newItems.push({ oldName: item, newName });

          // Delete old directory
          /^${oldPath}$/i.test(newPath) &&
            fs.rmSync(newPath, { recursive: true, force: true });

          // Rename directory
          fs.renameSync(oldPath, newPath);
          console.log(`  Renamed directory: ${item} to ${newName}`);
        }
        // Recursive call to process subdirectories
        recProcessDirectory(newPath);
      } else if (/\.(md|png|jpg|mdx)$/i.test(item)) {
        // Process file name
        let newName = slugify(item.substring(0, item.lastIndexOf('.')), {
          preserveLeadingUnderscore: true,
        });
        // Add back extension
        newName += item.substring(item.lastIndexOf('.'));
        const newPath = path.join(dirPath, newName);

        if (newName !== item) {
          somethingChanged = true;
          newItems.push({ oldName: item, newName });

          // Rename file
          fs.renameSync(oldPath, newPath);
          console.log(`  Renamed file: ${item} to ${newName}`);
        }
      }
    });
  };
  // Slugify shit
  recProcessDirectory(dirPath);

  // Update references in .md and .mdx files
  newItems.length > 0 && updateReferences({ dirPath, newItems });
};

/**
 * Update references of old image name to new image name in .md and .mdx files.
 * @param {string} dirPath - The directory path
 * @param {string} oldName - The old image file name
 * @param {string} newName - The new image file name
 */
const updateReferences = ({ dirPath, newItems }) => {
  /**
   * encodeURIComponent escapes all characters except:
   * A-Z a-z 0-9 - _ . ! ~ * ' ( ) - so this function takes care of that
   * @param {string} value - The string to encode
   * @returns {string} - The encoded string
   */
  const encodeUriAll = (value) => {
    return value.replace(
      /[^A-Za-z0-9]/g,
      (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
    );
  };

  /**
   * Recursively update references of old image name -> new image name
   * @param {string} {dirPath}
   * @param {string} newItems}
   */
  const recUpdateReferences = ({ dirPath, newItems }) => {
    const items = fs.readdirSync(dirPath);
    // Open renamed markdown files and look for old filenames/pathnames + replace them
    items.forEach((item) => {
      const filePath = path.join(dirPath, item);

      if (fs.statSync(filePath).isDirectory()) {
        // Recursive call to process subdirectories
        recUpdateReferences({ dirPath: filePath, newItems });
      } else if (/\.(md|mdx)$/.test(item)) {
        let content = fs.readFileSync(filePath, 'utf8');
        newItems.forEach(({ oldName, newName }) => {
          const regex = new RegExp(encodeUriAll(oldName), 'gi');
          if (regex.test(content)) {
            content = content.replace(regex, encodeUriAll(newName));
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`  Updated references in file: ${item}`);
          }
        });
      }
    });
  };
  recUpdateReferences({ dirPath, newItems });
};

if (process.env.NODE_ENV !== 'test') {
  const rootDir = process.env.DOCS_DIR || './pages/documentation';
  if (rootDir) {
    console.info(`Processing: '${rootDir}' ... \n`);
    processDirectory(rootDir);
    !somethingChanged && console.warn('Nothing to change!');
    console.info(`\nProcessing complete 👌🏻`);
  } else {
    console.error(`Error loading .env!`);
  }
}

export { processDirectory, updateReferences };
