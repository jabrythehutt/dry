import * as angularConfig from '../angular.json';
import makeDir from 'make-dir';

async function prime() {
  const defaultProjectName = angularConfig.defaultProject;
  const projectConfig = angularConfig.projects[defaultProjectName];
  const outputDir = projectConfig.architect.build.options.outputPath;
  await makeDir(outputDir);
}

prime();
