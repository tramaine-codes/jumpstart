import { packageDirectorySync } from 'pkg-dir';

export class Package {
  rootDir = () => packageDirectorySync();
}
