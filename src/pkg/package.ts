import { packageDirectorySync } from 'package-directory';

export class Package {
  rootDir = () => packageDirectorySync();
}
