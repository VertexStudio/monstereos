import * as React from "react"
import { Switch, Route} from "react-router-dom"
// import TopMenu from "./LogicComponents/modules/shared/TopMenu"
import HomeScreen from "./LogicComponents/modules/pages/HomeScreen"
import RankScreen from "./LogicComponents/modules/ranking/RankScreen"
import AboutScreen from "./LogicComponents/modules/pages/AboutScreen"
import FaqScreen from "./LogicComponents/modules/pages/FaqScreen"

import "bulma/css/bulma.css"
import "./styles/index.css"
import "./styles/home.css"

// import Footer from "./LogicComponents/modules/shared/Footer"
import ArenasScreen from "./LogicComponents/modules/battles/ArenasScreen"
import BattleScreen from "./LogicComponents/modules/battles/BattleScreen"
import MyMonstersScreen from "./LogicComponents/modules/monsters/MyMonstersScreen"
// import MarketScreen from "./LogicComponents/modules/market/MarketScreen"
import MonsterDetailsScreen from "./LogicComponents/modules/monsters/MonsterDetailsScreen"
// import Toaster from "./LogicComponents/modules/shared/Toaster"

import MonsterSelectScreen from "./ViewComponents/MonsterSelect"
  
  interface AppState {
    current_view: any,
    modal:boolean
  }
  
class AppNew extends React.Component<{}, AppState> {
    public render() {
        return (
            <Switch >
                <div className="ContainerSelectMonster">
                    <div style={{height: "93vh", width: "90%", paddingTop: "10px", paddingLeft: "5%", display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                      
                        {/* <Toaster /> */}
                        <Route path="/" exact component={HomeScreen} />
                        <Route path="/arenas" exact component={ArenasScreen} />
                        <Route path="/arenas/:host" exact component={BattleScreen} />
                        <Route path="/my-monsters" exact component={MyMonstersScreen} />
                        <Route path="/monster/:id" component={MonsterDetailsScreen} />
                        <Route path="/select" component={MonsterSelectScreen} />
                        {/* <Route path="/market" component={MarketScreen} /> */}
                        <Route path="/rank" exact component={RankScreen} />
                        <Route path="/about" exact component={AboutScreen} />
                        <Route path="/faq" exact component={FaqScreen} />
          
                </div>
              </div>
            </Switch>
        )
    }
}

export default AppNew
