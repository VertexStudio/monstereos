import * as React from "react"
import HeadBattle from "../modules/interface/HeadBattle"
import SelectMonster from "../modules/interface/selectMonster"
import InitBattle from "../modules/interface/initBattle"

const MonsterSelect = (props: any) => (
  <React.Fragment>
    <HeadBattle/>
    <SelectMonster/>
    <InitBattle/>
  </React.Fragment>
)

export default MonsterSelect