import * as React from "react"
import { connect } from "react-redux"
import { State, pushNotification, GlobalConfig, NOTIFICATION_ERROR, NOTIFICATION_SUCCESS } from "../../../store"
import { Link } from "react-router-dom"

import PageContainer from "../shared/PageContainer"
import { Arena, getCurrentBattle, getBattleText, isPlayerReady, BATTLE_PHASE_STARTING, MonsterType, BATTLE_PHASE_GOING, BATTLE_PHASE_FINISHED, BATTLE_PHASE_JOINING, battleCountdownText, Element, getBattleCountdown } from "./battles"
import {
  // loadArenaByHost,
  leaveBattle,
  // startBattle,
  loadElements as apiLoadElements,
  loadPetTypes,
  // attackBattle,
  // getWinner
} from "../../../utils/eos"
// import { getEosAccount } from "../../../utils/scatter"
import BattleConfirmation from "./BattleConfirmation"
import BattleHeader from "./BattleHeader"
import BattleArena from "./BattleArena"

interface Props {
  globalConfig: GlobalConfig,
  dispatchPushNotification: any,
  scatter: any,
  match: any,
  history: any,
  identity: string,
}

interface ReactState {
  arena?: Arena,
  elements: Element[],
  monsterTypes: MonsterType[],
  selectedAttackPetId: number,
  selectedAttackElementId: number,
  selectedAttackEnemyId: number,
  winner?: string,
  turnCountdown: number,
  isOver: boolean
}

class BattleScreen extends React.Component<Props, ReactState> {

  private refreshHandler: any = undefined

  constructor(props: Props) {
    super(props)
    this.state = {
      arena: undefined,
      elements: [],
      monsterTypes: [],
      selectedAttackPetId: 0,
      selectedAttackElementId: -1,
      selectedAttackEnemyId: 0,
      turnCountdown: -1,
      winner: undefined,
      isOver: false
    }
  }

  public componentDidMount() {
    // this.refresh()
    this.loadElements()
    this.loadMonsterTypes()
  }

  public componentWillUnmount() {
    clearTimeout(this.refreshHandler)
  }

  public render() {

    const { identity, globalConfig } = this.props

    const {
      arena,
      winner,
      elements,
      monsterTypes,
      selectedAttackElementId,
      selectedAttackEnemyId,
      selectedAttackPetId,
    } = this.state

    if (!arena) {
      return (
        <span>
          <i className="fa fa-spin fa-spinner" /> Loading Battle....
        </span>
      )
    }

    const currentBattle = getCurrentBattle([arena], identity)

    const isMyBattle = !!currentBattle

    const allowLeaveBattle = isMyBattle &&
      (arena.phase === BATTLE_PHASE_STARTING ||
      arena.phase === BATTLE_PHASE_JOINING) ?
      () => this.doLeaveBattle(arena.host) :
      null

    const countdownText = battleCountdownText(arena, globalConfig)

    const isConfirmed = isPlayerReady(arena, identity)
    const allowConfirmation = isMyBattle && !isConfirmed 
    // && arena.phase === BATTLE_PHASE_STARTING ?
    //   () => this.doStartBattle(arena.host) :
    //   null

    const isOver = arena.phase === BATTLE_PHASE_FINISHED

    const myTurn = arena.commits[0].player === identity

    const battleCountdown = getBattleCountdown(arena, globalConfig)
    const mobileCountdownText = battleCountdown > 0 ? battleCountdown : "Attack!"

    return (
      <PageContainer>
        <BattleHeader
          battleText={getBattleText(arena)}
          host={arena.host}
          isMyBattle={isMyBattle}
          isOver={isOver}
          countdownText={countdownText}
          allowConfirmation={allowConfirmation}
          allowLeaveBattle={allowLeaveBattle} />
        {arena.phase === BATTLE_PHASE_STARTING &&
        <BattleConfirmation
          commits={arena.commits} />
        }
        {(arena.phase === BATTLE_PHASE_GOING ||
        arena.phase === BATTLE_PHASE_FINISHED) &&
        <BattleArena
          arena={arena}
          attackSelection={this.attackSelection}
          enemySelection={this.enemySelection}
          submitAttack={() => Math.random() }// this.submitAttack(arena.host)}
          selectedEnemyId={selectedAttackEnemyId}
          selectedPetId={selectedAttackPetId}
          selectedElementId={selectedAttackElementId}
          elements={elements}
          winner={winner}
          monsterTypes={monsterTypes!} />
        }
        {/* mobile controls */}
        <div className="is-hidden-tablet">
        {arena.phase === BATTLE_PHASE_GOING &&
          <div className={`mobile-arena-countdown ${myTurn || battleCountdown < 0 ? "has-text-success" : "has-text-danger"}`}>
            {battleCountdown > 0 ? (myTurn ? "Your turn " : "Enemy turn ") : ""}
            {mobileCountdownText}
          </div>
        }
        {(!isMyBattle || isOver) &&
          <Link className="mobile-arena-back" to="/arenas">
            Back to Arenas
          </Link>}
        </div>

      </PageContainer>
    )
  }

  private attackSelection = (monsterId: number, elementId: number) => {
    this.setState({
      selectedAttackPetId: monsterId,
      selectedAttackElementId: elementId,
    })
  }

  private enemySelection = (monsterId: number) => {
    this.setState({
      selectedAttackEnemyId: monsterId,
    })
  }

  // private refresh = async () => {
  //   const { dispatchPushNotification } = this.props
  //   const { match: {params: { host } } } = this.props
  //   const { isOver, arena } = this.state

  //   try {
  //     const newArena = await loadArenaByHost(host)

  //     if (newArena) {
  //       this.setState({arena: newArena})
  //     } else if (arena !== null && arena !== undefined && arena.petsStats.length) {
  //       const confirmedArena = arena as Arena
  //       const winner = await getWinner(confirmedArena.host)

  //       const updatedStats =
  //         confirmedArena.petsStats.map((stat) => {
  //           return stat.player !== winner ?
  //             Object.assign({}, stat, {hp: 0})
  //             : stat
  //         })

  //       const updatedArena: Arena = Object.assign(
  //         {},
  //         arena,
  //         {phase: BATTLE_PHASE_FINISHED, petsStats: updatedStats}
  //       )

  //       this.setState({isOver: true, arena: updatedArena, winner})
  //     }

  //     // TODO: implement websockets
  //     // if (!isOver) {
  //     //   this.refreshHandler = setTimeout(this.refresh, 1000)
  //     // }
  //   } catch (error) {
  //     console.error("Fail to load Arena", error)
  //     dispatchPushNotification("Fail to load Arena")
  //   }
  // }

  // private submitAttack = async (host: string) => {
  //   const { scatter, dispatchPushNotification } = this.props

  //   const {
  //     selectedAttackElementId,
  //     selectedAttackPetId,
  //     selectedAttackEnemyId
  //   } = this.state

  //   await attackBattle(scatter, host, selectedAttackPetId, selectedAttackEnemyId, selectedAttackElementId)
  //     .catch((error: any) => {
  //       console.error("Fail to submit attack", error)
  //       dispatchPushNotification("Fail to Submit Attack", NOTIFICATION_ERROR)
  //     })
  // }

  private doLeaveBattle = async (host: string) => {
    const { scatter, dispatchPushNotification, history } = this.props
    leaveBattle(scatter, host)
      .then(() => {
        setTimeout(() => history.push("/arenas"), 500)
        dispatchPushNotification("Leaving Battle Successfully...", NOTIFICATION_SUCCESS)
      })
      .catch((error: any) => {
        console.error("Fail to leave battle", error)
        dispatchPushNotification("Fail to Leave Battle", NOTIFICATION_ERROR)
      })
  }

  // private doStartBattle = async (host: string) => {
  //   const { scatter, dispatchPushNotification } = this.props
  //   startBattle(scatter, host)
  //     .then(() => {
  //       setTimeout(this.refresh, 500)
  //       dispatchPushNotification("Ready to Battle!", NOTIFICATION_SUCCESS)
  //     })
  //     .catch((error: any) => {
  //       console.error("Fail to confirm battle", error)
  //       setTimeout(this.refresh, 500)
  //       dispatchPushNotification("Fail to confirm Battle", NOTIFICATION_ERROR)
  //     })
  // }

  private loadElements = async () => {
    const elements = await apiLoadElements()
    this.setState({elements})
  }

  private loadMonsterTypes = async () => {
    const monsterTypes = await loadPetTypes()
    this.setState({monsterTypes})
  }
}

const mapStateToProps = (state: State) => {
  return {
    globalConfig: state.globalConfig,
    scatter: state.scatter,
    identity: "eosio"// getEosAccount(state.identity)
  }
}

const mapDispatchToProps = {
  dispatchPushNotification: pushNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleScreen)