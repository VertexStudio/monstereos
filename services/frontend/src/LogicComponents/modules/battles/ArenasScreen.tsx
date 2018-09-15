import * as React from "react"
import { connect } from "react-redux"
import { State, pushNotification, GlobalConfig } from "../../../store" // , NOTIFICATION_SUCCESS, NOTIFICATION_ERROR
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery/dist/jquery.min.js"
import "jquery/dist/jquery.slim.min.js"
import { Link } from "react-router-dom"
// import PageContainer from "../shared/PageContainer"
// import TitleBar from "../shared/TitleBar"
import { Arena } from "./battles" // import { Arena , getCurrentBattle, getAvailableMonstersToBattle} from "./battles" 
// import { loadArenas, createBattle, joinBattle } from "../../../utils/eos" 
// import BattleCard from "./BattleCard"
// import { getEosAccount } from "../../../utils/scatter"
import { MonsterProps } from "../monsters/monsters"
import TopMenu from "../shared/TopMenu"
import Footer from "../shared/Footer"
// import BattleMonsterPickModal from "./BattleMonsterPickModal"
import ArenaTitle from "../../../assets/UI_Elements/Arena/Arena_0008_Arena_Title.png"
import Separation from "../../../assets/UI_Elements/Arena/Arena_0007_Separacion_Menu.png"
import UpIcon from "../../../assets/UI_Elements/Arena/Arena_0006_Up_Icon.png"
import BackArena from "../../../assets/UI_Elements/Arena/Arena_0019_Back_SelectArena.png"
import NameArena from "../../../assets/UI_Elements/Arena/Arena_0016_Arena_Name.png"
import DownIcon from "../../../assets/UI_Elements/Arena/Arena_0005_Down_Icon.png"
import AvalaibleArena from "../../../assets/UI_Elements/Arena/Arena_0009_Avalaible_Arena.png"
import BattleArena from "../../../assets/UI_Elements/Arena/Arena_0014_Battle_Arena.png"
import WatchArena from "../../../assets/UI_Elements/Arena/Arena_0010_Watch_Icon_Arena.png"
import joinBattleModal from "../../../assets/UI_Elements/Arena/JoinBattle/Arena_0002_Join-battle.png"
import textModal1 from "../../../assets/UI_Elements/Arena/JoinBattle/Arena_0003.png"
import watchBattleModal from "../../../assets/UI_Elements/Arena/WatchBattle/Arena_0000_watch-battle.png"
import textModal2 from "../../../assets/UI_Elements/Arena/WatchBattle/Arena_0001.png"
import acceptBattle from "../../../assets/UI_Elements/General/Submit_Button.png"
import cancelBattle from "../../../assets/UI_Elements/General/Decline_Button.png"


interface Props {
  globalConfig: GlobalConfig,
  dispatchPushNotification: any,
  scatter: any,
  identity: string,
  history: any,
  myMonsters: MonsterProps[]
}

interface ReactState {
  arenas: Arena[],
  showMonstersSelection: boolean,
  arenaHost: string
}

class ArenasScreen extends React.Component<Props, ReactState> {

  public state = { arenas: [], showMonstersSelection: false, arenaHost: "" }

  // public componentDidMount() {
  //   this.refresh()
  // }

  public render() {

    // const { identity, myMonsters } = this.props
    // const { battle_max_arenas } = this.props.globalConfig
    // const { arenas, showMonstersSelection } = this.state

    // const arenasCounter =
    //   <ArenasCounter
    //     availableArenas={battle_max_arenas - arenas.length}
    //     maxArenas={battle_max_arenas} />

    // const currentBattle = getCurrentBattle(arenas, identity)

    // const availableMonsters = getAvailableMonstersToBattle(myMonsters)

    // const battleButton =
    //   currentBattle ?
    //   <Link className="button is-warning" to={`/arenas/${currentBattle.host}`}>
    //     Reconnect to Battle
    //   </Link> :
    //   identity ?
    //   <a className="button is-success"
    //     onClick={() => this.setState({showMonstersSelection: true, arenaHost: ""})}>
    //     Create a Battle
    //   </a> :
    //   null

    // const availableToBattle = !!identity && !currentBattle
    //   && availableMonsters.length > 0

    return (
      <React.Fragment>
        <TopMenu />
         <div className="title-monsters">
            <div className="sub-head">
                <img className="icon-monsters" src = {ArenaTitle}  />
            </div>
            <img className="Separation" src =  {Separation}/>
        </div>
        <div className="arena">
          <a href="#carouselExampleControls" role="button" data-slide="prev">
              <img className = "up-icon" src={UpIcon} aria-hidden="true"/>
          </a>
          <div id="carouselExampleControls" className="carousel vert slide" data-ride="carousel" data-interval="0">
            <div className="carousel-inner">
              <div className="carousel-item active content-arena">
                <img className="d-block mx-auto img-fluid" src={BackArena} />
                <img className = "nameArena" src={NameArena}/>
                <Link to="/select">
                  <input type="image" className="avalaibleArena" src={AvalaibleArena}/>
                </Link>
              </div>
              <div className="carousel-item">
                <img className="d-block mx-auto img-fluid" src={BackArena} />
                <img className = "nameArena" src={NameArena}/>
                <input type="image" className="battleArena" src={BattleArena} data-toggle="modal" data-target="#myModal"/>
              </div>
              <div className="carousel-item">
                <img className="d-block mx-auto img-fluid" src={BackArena} />
                <img className = "nameArena" src={NameArena}/>
                <input type="image" className="watchArena" src={WatchArena} data-toggle="modal" data-target="#myModa2"/>
              </div>
            </div>
          </div>  
          <a href="#carouselExampleControls" role="button" data-slide="next">
            <img className = "down-icon" src={DownIcon} aria-hidden="true"/>   
          </a>
          <div className="modal fade" id="myModal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="vertical-alignment-helper">
                    <div className="modal-dialog vertical-align-center">
                        <div className="modal-content">
                            <img className = "joinBattleModal" src={joinBattleModal}/>
                            <img className = "textModal" src={textModal1}/>
                            <div>
                                <input type="image" className="btn acceptBattle" src={acceptBattle}/>
                                <input type="image" className="btn cancelBattle" src={cancelBattle} data-dismiss="modal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModa2"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="vertical-alignment-helper">
                    <div className="modal-dialog vertical-align-center">
                        <div className="modal-content">
                            <img className = "watchBattleModal" src={watchBattleModal}/>
                            <img className = "textModal" src={textModal2}/>
                            <div>
                                <input type="image" className="btn acceptBattle" src={acceptBattle}/>
                                <input type="image" className="btn cancelBattle" src={cancelBattle} data-dismiss="modal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        {/* <TitleBar
          notMobile
          title="Welcome to the Arena!"
          menu={[arenasCounter, battleButton]} /> */}
        {/* {arenas.map((arena: Arena, index: number) =>
          <BattleCard
            key={index}
            myBattle={!!currentBattle && currentBattle.host === arena.host}
            availableToBattle={availableToBattle}
            joinBattle={() => this.setState({showMonstersSelection: true, arenaHost: arena.host})}
            arena={arena} />
        )} */}

        {/* { showMonstersSelection &&
        <BattleMonsterPickModal closeModal={this.confirmSelection} />
        } */}
        <Footer />
      </React.Fragment>
    )
  }


  //   try {
  //     const arenas = await loadArenas()
  //     this.setState({arenas})
  //   } catch (error) {
  //     console.error("Fail to load Arenas", error)
  //     dispatchPushNotification("Fail to load Arenas")
  //   }
  // }

  // private confirmSelection = async (pets: number[]) => {
  //   console.info("selected pets >>> ", pets)

  //   const { arenaHost } = this.state
  //   // const { dispatchPushNotification } = this.props

  //   if (pets && pets.length) {
  //     if (arenaHost) {
  //         this.doJoinBattle(arenaHost, pets)
  //       } else {
  //         this.doCreateBattle(pets)
  //       }
  //     // if (pets.length > 1) { // TODO: current 1v1 mode only
  //     //   return dispatchPushNotification("You can only select 1 monster", NOTIFICATION_ERROR)
  //     // } else if (arenaHost) {
  //     //   this.doJoinBattle(arenaHost, pets)
  //     // } else {
  //     //   this.doCreateBattle(pets)
  //     // }

  //   } else {
  //     this.setState({showMonstersSelection: false, arenaHost: ""})
  //   }
  // }

  // private doCreateBattle = async (pets: number[]) => {
  //   const { scatter,  history, identity } = this.props // dispatchPushNotification,
  //   createBattle(scatter, 1, pets)
  //     .then(() => {
  //       setTimeout(() => history.push(`/arenas/${identity}`), 500)
  //       // dispatchPushNotification("Joining Created Battle...", NOTIFICATION_SUCCESS)
  //     })
  //     .catch((error: any) => {
  //       console.error("Fail to create battle", error)
  //       // dispatchPushNotification("Fail to Create Battle", NOTIFICATION_ERROR)
  //     })
  // }

  // private doJoinBattle = async (host: string, pets: number[]) => {
  //   const { scatter , history } = this.props // dispatchPushNotification,
  //   joinBattle(scatter, host, pets)
  //     .then(() => {
  //       setTimeout(() => history.push(`/arenas/${host}`), 500)
  //       // dispatchPushNotification("Joining Battle...", NOTIFICATION_SUCCESS)
  //     })
  //     .catch((error: any) => {
  //       console.error("Fail to join battle", error)
  //       // dispatchPushNotification("Fail to Join Battle", NOTIFICATION_ERROR)
  //     })
  // }
}

// const ArenasCounter = ({availableArenas, maxArenas}: any) => (
//   <span>
//     Available Arenas: {availableArenas}/{maxArenas}
//   </span>
// )

const mapStateToProps = (state: State) => {
  return {
    globalConfig: state.globalConfig,
    scatter: state.scatter,
    identity: "eosio", // getEosAccount(state.identity),
    myMonsters: state.myMonsters
  }
}

const mapDispatchToProps = {
  dispatchPushNotification: pushNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(ArenasScreen)