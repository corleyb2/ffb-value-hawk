import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getScopes = () => {
  const scopes = ['global']; // Add generic scopes here
  ['apps', 'packages'].forEach((dir) => {
    const dirPath = path.join(__dirname, dir);
    if (fs.existsSync(dirPath)) {
      scopes.push(...fs.readdirSync(dirPath));
    }
  });
  return scopes;
};

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', getScopes()],
  },
};
