import path from 'path';
import shelljs from 'shelljs';
import { getPackageNames, PACKAGES_SRC_DIR } from './getPackageNames.js';

const { exec } = shelljs;

const packageNames = getPackageNames()

packageNames.forEach(packageName => {
  const sourceDir = path.resolve(PACKAGES_SRC_DIR, packageName)
  exec(`cd ${sourceDir} && yarn`, { async: true })
})
