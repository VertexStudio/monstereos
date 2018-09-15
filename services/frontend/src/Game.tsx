import * as React from "react"
import { Switch } from "react-router-dom"
// import Footer from "./modules/interface/Footer"
import HeadBattle from "./modules/interface/HeadBattle"
// import Body from "./modules/interface/body"
import SelectMonster from "./modules/interface/selectMonster"
import InitBattle from "./modules/interface/initBattle"
import "bulma/css/bulma.css"
import "./styles/index.css"
import "./styles/home.css"
// import ArenaX from "./modules/interface/ArenaX"

class MonsterEOS extends React.Component<{}, {}> {
    public render() {
        return (
            <Switch >
              <React.Fragment>
                <div className="ContainerSelectMonster">
                    <div style={{height: "90vh", width: "90%", paddingTop: "10px", paddingLeft: "5%", display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                      <HeadBattle />
                      <SelectMonster/>
                      {/* <div className="statistics">
                        <Body />
                        <Body />
                        <Body />
                      </div>
                      <ArenaX />
                      <Footer /> */}
                    </div>
                    <div>
                      <InitBattle/>
                    </div>
                </div>       
              </React.Fragment>
            </Switch>
          )
    }
}

export default MonsterEOS
