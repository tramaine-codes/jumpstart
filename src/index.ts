import { Package } from './pkg/package.js';
import { LiquidRenderer } from './renderer/liquid-renderer.js';
import { Synthesizer } from './synthesizer/synthesizer.js';
import { Commitlint } from './template/linting/commitlint.js';
import { EslintIgnore } from './template/linting/eslint/eslint-ignore.js';
import { Eslint } from './template/linting/eslint/eslint.js';
import { LintStaged } from './template/linting/lint-staged.js';
import { C8 } from './template/testing/c8.js';
import { PackageJson } from './template/typescript/package-json.js';
import { GitIgnore } from './template/vcs/git-ignore.js';

new Synthesizer(new LiquidRenderer(), new Package(), {
  configFiles: [
    new PackageJson(),
    new Eslint(),
    new EslintIgnore(),
    new Commitlint(),
    new LintStaged(),
    new C8(),
    new GitIgnore(),
  ],
}).synth();
