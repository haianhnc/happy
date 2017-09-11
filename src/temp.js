  render(){
    return(
        <div className="App">
          <Header header={this.props.header} />
          <TodayContestRanking contest={this.props.contest} />
          <PickUpUnit pickupunit={this.props.pickupunit} />
          <TodayBestFriend bestfriend={this.props.bestfriend} />
          <RankingUnit rankingunit={this.props.rankingunit} />
          <CommonUnit common={this.props.common}/>
          <Psychological psychological={this.props.psychological}/>
          <ExpertUnit experts={EXPERTS}/>
          <Tags tags={TAGS}/>
        </div>
    );
  }