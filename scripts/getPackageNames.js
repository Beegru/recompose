import fs from 'fs';
import path from 'path';

export const PACKAGES_SRC_DIR = './src/packages';
export const PACKAGES_OUT_DIR = './lib/packages';

let names

export const getPackageNames = () => {
  if (!names) {
    names = fs.readdirSync(PACKAGES_SRC_DIR).filter(file => {
      try {
        const packageJsonPath = path.resolve(
          PACKAGES_SRC_DIR,
          file,
          'package.json'
        )
        return fs.statSync(packageJsonPath).isFile()
      } catch (error) {
        return false
      }
    })
  }
  return names
}
