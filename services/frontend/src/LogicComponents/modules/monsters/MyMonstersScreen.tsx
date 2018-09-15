import * as React from "react"
// import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { State, doLoadMyMonsters } from "../../../store"
// import { getEosAccount } from "../../../utils/scatter"

import PageContainer from "../shared/PageContainer"
// import MonsterCard from "./MonsterCard"
// import TitleBar from "../shared/TitleBar"
import TopMenu from "../shared/TopMenu"
import Footer from "../shared/Footer"
import NewMonsterModal from "./NewMonsterModal"
import { MonsterProps } from "./monsters"
import MonstersTitle from "../../../assets/UI_Elements/MyMonster/MyMonster_0020_MyMonster_Title.png"
import Separation from "../../../assets/UI_Elements/Arena/Arena_0007_Separacion_Menu.png" 
import Body  from "../../../modules/interface/body"
interface Props {
  eosAccount: string,
  myMonsters: MonsterProps[],
  globalConfig: any,
  dispatchDoLoadMyMonsters: any
}

interface ReactState {
  showNewMonsterModal: boolean
}

class MyMonstersScreen extends React.Component<Props, ReactState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showNewMonsterModal: false
    }
  }


  public render() {
    const { dispatchDoLoadMyMonsters,eosAccount } = this.props
    const { showNewMonsterModal } = this.state
    const refetchMonsters = () => {
      setTimeout(() => dispatchDoLoadMyMonsters(), 500)
    }

    const newMonsterClosure = (doRefetch: boolean) => {
      this.setState({showNewMonsterModal: false})
      if (doRefetch) {
        refetchMonsters()
      }
    }

    if (eosAccount) {
      // return this.renderMonsters(eosAccount)
      return(
        <React.Fragment>
          <TopMenu />
          <div className="statistics">
            <div className="title-monsters">
              <div className="sub-head">
                  <img className="icon-monsters" src = {MonstersTitle}  />
              </div>
              <img className="Separation" src =  {Separation}/>
            </div>
            <Body />
            <Body />
            <Body />
          </div>
          <Footer />


          {showNewMonsterModal &&
            <NewMonsterModal
              closeModal={newMonsterClosure} 
              />
          }
        </React.Fragment>
        
      )
    } else {
      return <PageContainer>
          <div>Ooopss... looks like you are not identified</div>
        </PageContainer>
    }
  }

//   private renderMonsters(eosAccount: string) {

//     const { myMonsters, dispatchDoLoadMyMonsters } = this.props
//     const { showNewMonsterModal } = this.state

//     const subHeader = (<small className="is-hidden-mobile">
//       You have {myMonsters.length} monsters
//       </small>)

//     const newMonsterButton = (
//       <a
//         className="button is-success"
//         onClick={() => this.setState({showNewMonsterModal: true})}>
//         New Monster
//       </a>
//     )

//     const aliveMonsters = myMonsters.filter((monster: any) => !monster.deathAt)
//     const deadMonsters = myMonsters.filter((monster: any) => monster.deathAt)

//     const refetchMonsters = () => {
//       setTimeout(() => dispatchDoLoadMyMonsters(), 500)
//     }

//     const newMonsterClosure = (doRefetch: boolean) => {
//       this.setState({showNewMonsterModal: false})
//       if (doRefetch) {
//         refetchMonsters()
//       }
//     }

//     return (
//       <PageContainer>
//         <TitleBar
//           title="My Monsters"
//           menu={[subHeader, newMonsterButton]} />
//         {aliveMonsters &&
//           <MonstersList
//             monsters={aliveMonsters}
//             update={refetchMonsters} 
//             />}

//         {deadMonsters &&
//           <React.Fragment>
//             <h3>My Dead Monsters</h3>
//             <MonstersList
//               monsters={deadMonsters}
//               update={refetchMonsters} 
//               />
//           </React.Fragment>}

//         {showNewMonsterModal &&
//           <NewMonsterModal
//             closeModal={newMonsterClosure} 
//             />
//         }
//       </PageContainer>
//     )
//   }
// }
}

// const MonstersList = ({ monsters, update }: any) => (
//   <div className="columns is-multiline">
//     {monsters.map((monster: any) => (
//       <MonsterCard
//         key={monster.id}
//         monster={monster}
//         requestUpdate={update} />
//     ))}
//   </div>
// )

const mapStateToProps = (state: State) => {
  const eosAccount = "eosio"// getEosAccount(state.identity)

  return {
    eosAccount,
    myMonsters: state.myMonsters,
    globalConfig: state.globalConfig,
  }
}

const mapDispatchToProps = {
  dispatchDoLoadMyMonsters: doLoadMyMonsters
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMonstersScreen)