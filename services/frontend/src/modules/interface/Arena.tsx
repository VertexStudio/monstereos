import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "jquery/dist/jquery.min.js"
import "jquery/dist/jquery.slim.min.js"

import UpIcon from "../../assets/UI_Elements/Arena/Arena_0006_Up_Icon.png"
import BackArena from "../../assets/UI_Elements/Arena/Arena_0019_Back_SelectArena.png"
import NameArena from "../../assets/UI_Elements/Arena/Arena_0016_Arena_Name.png"
import DownIcon from "../../assets/UI_Elements/Arena/Arena_0005_Down_Icon.png"
import AvalaibleArena from "../../assets/UI_Elements/Arena/Arena_0009_Avalaible_Arena.png"
import BattleArena from "../../assets/UI_Elements/Arena/Arena_0014_Battle_Arena.png"
import WatchArena from "../../assets/UI_Elements/Arena/Arena_0010_Watch_Icon_Arena.png"
import joinBattleModal from "../../assets/UI_Elements/Arena/JoinBattle/Arena_0002_Join-battle.png"
import textModal1 from "../../assets/UI_Elements/Arena/Arena_0003_Are-you-sure-you-want-to-join-the-battle_.png"
import watchBattleModal from "../../assets/UI_Elements/Arena/WatchBattle/Arena_0000_watch-battle.png"
import textModal2 from "../../assets/UI_Elements/Arena/WatchBattle/Arena_0001_Are-you-sure-you-want-to-watch-the-battle_.png"
import acceptBattle from "../../assets/UI_Elements/General/Submit_Button.png"
import cancelBattle from "../../assets/UI_Elements/General/Decline_Button.png"


class Arena extends React.Component<{}, {}> {
    public render() {
      return (
        <div className="arena">
          <a href="#carouselExampleControls" role="button" data-slide="prev">
              <img className = "up-icon" src={UpIcon} aria-hidden="true"/>
          </a>
          <div id="carouselExampleControls" className="carousel vert slide" data-ride="carousel" data-interval="0">
            <div className="carousel-inner">
              <div className="carousel-item active content-arena">
                <img className="d-block mx-auto img-fluid" src={BackArena} />
                <img className = "nameArena" src={NameArena}/>
                <input type="image" className="avalaibleArena" src={AvalaibleArena}/>
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
      )
    }
  }

  export default Arena