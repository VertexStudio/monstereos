import * as React from "react"
import { Monster3DProfile, ActionType } from "react-monstereos-profile"
import Butterfly from "../../assets/models/Butterfly.gltf"
import Devil from "../../assets/models/Devil.gltf"
import Ghost from "../../assets/models/Ghost.gltf"
import Rocky from "../../assets/models/Rocky.gltf"
import Tree from "../../assets/models/Tree.gltf"
import Ness from "../../assets/models/Ness.gltf"
import Bear from "../../assets/models/Bear.gltf"
import TheThing from "../../assets/models/TheThing.gltf"
import RockWorm from "../../assets/models/RockWorm.gltf"
import Tucan from "../../assets/models/Tucan.gltf"
class Body extends React.Component<any, any> {
  public render() {
    const monsters3D = [
      Butterfly,
      Devil,
      Ghost,
      Rocky,
      Tree,
      Ness,
      Bear,
      TheThing,
      RockWorm,
      Tucan
    ]
    return (
      <div className="monsters">
        <div style={{display:"flex"}}>
          <div className="BackMonster">
            <Monster3DProfile
              typeId={554845454654474}
              action={ActionType.ATTACK}
              path={monsters3D[Math.floor( Math.random() * 7 )]}
              size={{ width: "155px", height: "230px" }}
              background={{ alpha: 0 }}
              rotation={{y:-2.25}}
              zoom={false}
            />
          </div>
        
          {/* <img className="BackMonster" src="/images/monsters/monster-103.png" /> */}
          <div style={{ width: "50%", marginLeft: "-5px", marginTop:"1px"}}>
            <div className="monsterName">
              <p>Name</p>
              <p>Alive for 3 day</p>
              <img className="N1" src="/images/icon/N1.png" />
            </div>
            <div>
              <img src="/images/icon/HP.png" />
            </div>
            <div className="stats">
              <div>
                <p>Food</p>
                <img src="/images/icon/Food.png" />
                <p>Energy</p>
                <img src="/images/icon/Energy.png" />
              </div>
              <div>
                <p>Happiness</p>
                <img src="/images/icon/Happiness.png" />
                <p>Clean</p>
                <img src="/images/icon/Clean.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
