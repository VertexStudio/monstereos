import * as React from "react"
import * as moment from "moment"
import { MonsterProps } from "./monsters"
import { State, GlobalConfig, pushNotification } from "../../../store" // NOTIFICATION_SUCCESS, pushNotification, NOTIFICATION_ERROR, NOTIFICATION_WARNING } from "../../../store"
import { connect } from "react-redux"
// import { getEosAccount } from "../../../utils/scatter"
// import { trxPet } from "../../../utils/eos"
import { Link } from "react-router-dom"
import { Monster3DProfile, ActionType } from "react-monstereos-profile"
import monster3D from "../../../assets/models/Devil.gltf"

interface Props {
  monster: MonsterProps,
  eosAccount: string,
  globalConfig: GlobalConfig,
  requestUpdate?: any,
  dispatchPushNotification: any,
  scatter: any,
  selected?: boolean,
  hideLink?: boolean,
  hideActions?: boolean,
  customActions?: MonsterAction[]
}

export interface MonsterAction {
  label: string,
  action: any
}

class MonsterCard extends React.Component<Props, {}> {

  public render() {

    const { monster, eosAccount, selected } = this.props

    const hasControl = eosAccount === monster.owner

    const selectedClass = selected ? "monster-selected" : ""

    return (
      <div className="column monster-column">
        <div className={`card ${selectedClass}`}>
          <div className="card-content">
            {this.renderHeader()}
          </div>
          {this.renderImage()}
          {!monster.deathAt && this.renderStats()}
          {hasControl && this.renderFooter()}
        </div>
      </div>
    )
  }

  private renderImage() {

    const { monster } = this.props

    // const figureClass = `image monster-image ${monster.deathAt ? "grayscale" : ""}`
    // const monsterImage = monsterImageSrc(monster.type)

    // const sleepingClass = monster.isSleeping ? "sleeping" : ""
    // const sleepingAnimation = monster.isSleeping && <img src="/images/zzz.gif" className="sleep-gif" />

    return (
      <div className="card-image">
        <figure className={monster.name}>
        <Monster3DProfile
            typeId={554845454654474}
            action={ActionType.IDLE}
            path={monster3D}
            size={{ width: "250px", height: "250px" }}
            background={{ alpha: 0 }}
          />
          {/* <img
            alt={monster.name}
            className={sleepingClass}
            src={monsterImage} />
          {sleepingAnimation} */}
        </figure>
      </div>
    )
  }

  private renderHeader() {

    const { monster, hideLink } = this.props

    // const createdAt = moment(monster.createdAt)
    // const createdAtText = createdAt.format("MMMM, D YYYY @ h:mm a")
    // const createdAtIso = createdAt.toLocaleString()

    const deathAt = moment(monster.deathAt)
    const deathAtText = deathAt.format("MMMM, D YYYY @ h:mm a")
    const deathAtIso = deathAt.toLocaleString()

    const aliveDuration = (monster.deathAt ? monster.deathAt : Date.now()) - monster.createdAt
    const aliveDurationText = moment.duration(aliveDuration).humanize()

    const headerContent =
      <React.Fragment>
        <span className={`title is-4 ${monster.deathAt ? "has-text-danger" : ""}`}>
          {monster.name}
          <small className="is-pulled-right">#{monster.id}</small>
        </span>
        <br/>
        { monster.deathAt ?
        <React.Fragment>
          <span className="is-6 has-text-danger">Stayed alive for {aliveDurationText}</span>
          <br/>
          <span className="is-6 has-text-danger"><time dateTime={deathAtIso}>DEAD IN {deathAtText}</time></span>
        </React.Fragment>
        : <span className="has-text-success">Is alive for {aliveDurationText}</span>
        }
      </React.Fragment>

    return (
      <div className="monster-card-header">
        { !hideLink ?
          <Link to={`/monster/${monster.id}`} className="monster-header-link">
            {headerContent}
          </Link>
        :
          headerContent
        }
      </div>
    )
  }

  private renderStats() {

    const { monster } = this.props

    return (
      <div className="monster-card-stats">
        <p className="is-large has-margin-top">
          <progress className="progress is-danger" max="100" value={monster.health} data-label="HP" />
        </p>
        <div className="columns is-multiline is-mobile">
          <div className="column is-half">
            <progress className="progress is-primary" max="100" value={monster.hunger} data-label="Food" />
          </div>
          <div className="column is-half">
            <progress className="progress is-success" max="100" value={monster.awake} data-label="Energy" />
          </div>
        </div>
      </div>
    )
  }

  private renderFooter() {

    const { customActions } = this.props // monster, hideActions, customActions } = this.props

    let actions: MonsterAction[] = []

    // if (!hideActions && monster.deathAt) {
    //   actions.push({action: this.requestDestroy, label: "Delete Monster"})
    // } else if (!hideActions && monster.isSleeping) {
    //   actions.push({action: this.requestAwake, label: "Wake up!"})
    // } else if (!hideActions) {
    //   actions.push({action: this.requestFeed, label: "Feed"})
    //   actions.push({action: this.requestSleep, label: "Bed Time!"})
    // }

    if (customActions) {
      actions = actions.concat(customActions)
    }

    return (
      <footer className="card-footer">
        {actions.map((action, index) => (
          <a key={index}
            className="card-footer-item"
            onClick={action.action}>
            {action.label}
          </a>
        ))}
      </footer>
    )
  }

  // private requestFeed = () => {
  //   const { monster, globalConfig } = this.props

  //   const feedInterval = (Date.now() - monster.lastFeedAt) / 1000
  //   if (feedInterval < globalConfig.min_hunger_interval) {
  //     return this.warnAction(`${monster.name} is not hungry yet`)
  //   }

  //   // this.petAction("feedpet", "feed")
  // }

  // private requestAwake = async () => {
  //   const { monster, globalConfig } = this.props

  //   const awakeInterval = (Date.now() - monster.lastBedAt) / 1000
  //   if (awakeInterval < globalConfig.min_sleep_period) {
  //     return this.warnAction(`${monster.name} is not recovered yet`)
  //   }

  //   // this.petAction("awakepet", "wake")
  // }

  // private requestSleep = async () => {
  //   const { monster, globalConfig } = this.props

  //   const bedInterval = (Date.now() - monster.lastAwakeAt) / 1000
  //   if (bedInterval < globalConfig.min_awake_interval) {
  //     return this.warnAction(`${monster.name} is not tired yet`)
  //   }

  //   // this.petAction("bedpet", "bed")
  // }

  // private requestDestroy = async () => {
  //   this.petAction("destroypet", "destroy")
  // }

  // private warnAction = (text: string) => {
  //   const { dispatchPushNotification } = this.props
  //   dispatchPushNotification(text, NOTIFICATION_WARNING)
  // }

  // private petAction = (action: string, text: string) => {
  //   const { scatter, monster, requestUpdate, dispatchPushNotification } = this.props

  //   trxPet(action, scatter, monster.id)
  //     .then((res: any) => {
  //       console.info(`Pet ${monster.id} ${text} successfully`, res)
  //       dispatchPushNotification(`Pet ${monster.name} ${text} successfully`, NOTIFICATION_SUCCESS)
  //       if (requestUpdate) {
  //         requestUpdate()
  //       }
  //     }).catch((err: any) => {
  //       console.error(`Fail to ${text} ${monster.id}`, err)
  //       dispatchPushNotification(`Fail to ${text} ${monster.name}`, NOTIFICATION_ERROR)
  //     })
  // }
}

const mapStateToProps = (state: State) => {
  const eosAccount = "eosio" // getEosAccount(state.identity)

  return {
    eosAccount,
    globalConfig: state.globalConfig,
    scatter: state.scatter
  }
}

const mapDispatchToProps = {
  dispatchPushNotification: pushNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterCard)