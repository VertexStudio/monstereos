import * as React from "react"

export default class SelectMonster extends React.Component<any, any> {
  public render() {
    return (
      <div className="SelectMonsters">
        <div className="cardMonsters">
          <div className="selectMonstersBack">
            <img className="TheThing" src="/images/SelectMonster/TheThing.png" />
            <p>The Thing</p>
            <img className="SelectHP" src="/images/icon/HP.png" />
          </div>
          <div className="selectMonstersBack">
            <img className="selectMonstersImg" src="/images/SelectMonster/Mariposa.png" />
            <p>San</p>
            <img className="SelectHP" src="/images/icon/HP.png" />
          </div>
        </div>

        <div className="cardMonsters">
          <div className="selectMonstersBack">
            <img className="selectMonstersImg" src="/images/SelectMonster/Mariposa.png" />
            <p>Sam</p>
            <img className="SelectHP" src="/images/icon/HP.png" />
          </div>
          <div className="selectMonstersBack">
            <img className="TheThing" src="/images/SelectMonster/TheThing.png" />
            <p>The Thing</p>
            <img className="SelectHP" src="/images/icon/HP.png" />
          </div>
        </div>

        <div className="cardMonsters">
          <div className="selectMonstersBack">
            <img className="selectMonstersImg" src="/images/SelectMonster/Mariposa.png" />
            <p>Sam</p>
            <img className="SelectHP" src="/images/icon/HP.png" />
          </div>
          <div className="selectMonstersBack">
            <img className="TheThing" src="/images/SelectMonster/TheThing.png" />
            <p>The Thing</p>
            <img className="SelectHP" src="/images/icon/HP.png" />
          </div>
        </div>
      </div>
    )
  }
}
