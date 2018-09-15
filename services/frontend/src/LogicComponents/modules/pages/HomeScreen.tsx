import * as React from "react"
import { Monster3DProfile, ActionType } from "react-monstereos-profile"
import monster3D from "../../../assets/models/Devil.gltf"
import TopMenu from "../shared/TopMenu"
import Footer from "../shared/Footer"

const HomeScreen = (props: any) => (
  <React.Fragment>
  <TopMenu />
  <div className="about" style={{background:"radial-gradient(rgba(38, 55, 121,1),rgba(24,38,92,1))"}}>
    <div className="rows">
      <div className="row" style={{display:"flex",justifyContent:"center"}}>
        <h1 className="title logo" style={{color:"white"}}>
          MonsterEOS
        </h1>
      </div>
      <div className="rows">
        <Monster3DProfile
          typeId={554845454654474}
          action={ActionType.ATTACK}
          path={monster3D}
          size={{ width: "auto", height: "350px" }}
          background={{ alpha: 0 }}
          rotation={{y:0.75}}
          zoom={false}
        />
      </div>
      <div className="row" style={{display:"flex",justifyContent:"center"}}>{"  "}
        <h1 className="title logo" style={{color:"white",fontSize:"20px"}}>
          I'm a Monster Tamagotchi alike game for EOS blockchain! :)
        </h1>
      </div>
    </div>
  </div>
  <Footer />
  </React.Fragment>
)

export default HomeScreen