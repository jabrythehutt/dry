import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user/user';
import {UserDaoService} from '../user/user-dao.service';
import {Optional} from '../data/optional';
import {Analysis} from '../analysis/analysis';
import {AnalysisDaoService} from '../analysis/analysis-dao.service';
import {TitleService} from '../title.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {

  @Input()
  userId: string;

  userPromise: Promise<Optional<User>>;

  analysisResultsPromise: Promise<Analysis[]>;

  constructor(private dao: UserDaoService,
              private analysisDao: AnalysisDaoService,
              private titleService: TitleService) { }

  ngOnInit() {
    this.userPromise = this.dao.find({id: this.userId});
    this.analysisResultsPromise = this.analysisDao.findByUserId(this.userId);
    this.applyTitle();
  }

  async applyTitle() {
    const user = await this.userPromise;
    this.titleService.title = `${user.item.name} notes`;

  }

}
