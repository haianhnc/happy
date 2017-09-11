import {combineReducers} from 'redux';
import {header_reducer} from './header';
import {tracks_reducer} from './track';
import {today_contest_ranking_reducer} from './ContestRanking';
import {pickup_unit_reducer} from './PickUpUnit';
import {today_best_friend_reducer} from './TodayBestFriend';
import {today_ranking_unit_reducer} from './RankingUnit';
import {common_unit_reducer} from './CommonUnit';
import {psychological_reducer} from './Psychological';
import {expert_unit_reducer} from './ExpertUnit';
import {tags_reducer} from './Tags'

export const rootReducer = combineReducers({
    header_state: header_reducer,
    tracks_state: tracks_reducer,
    today_contest_ranking_state: today_contest_ranking_reducer,
    pickup_unit_state: pickup_unit_reducer,
    today_best_friend_state: today_best_friend_reducer,
    today_ranking_unit_state: today_ranking_unit_reducer,
    common_unit_state: common_unit_reducer,
    psychological_state: psychological_reducer,
    expert_unit_state: expert_unit_reducer,
    tags_state: tags_reducer
});