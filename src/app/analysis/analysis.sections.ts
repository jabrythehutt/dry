import {AnalysisSection} from '../analysis-section/analysis.section';
import {EntityType} from 'aws-sdk/clients/comprehend';

export interface AnalysisSections {
  text: string;
  entityType: EntityType;
  sections: AnalysisSection[];
}
