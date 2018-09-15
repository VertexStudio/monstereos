import * as React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { State, doLogout } from "../../../store" // , requestScatterIdentity
// import {  SCATTER_EXTENSION_LINK } from "../../../utils/scatter"

interface Props {
    scatter: any
    identity: any
    dispatchDoLogout: any // ,
    // dispatchRequestScatterIdentity: any
}

interface ReactState {
  eos_ammount: number
}

class TopMenu extends React.Component<Props, ReactState> {
    public state: ReactState = { eos_ammount: 10000 }

    public render() {
        // const { identity } = this.props
        // const { activeMenu } = this.state

        const eosAccount = "eosio" // getEosAccount(identity)

        return (
            <div className="head">
                <div className="head-player">
                    <div className="info-player">
                        <Link to="/">
                            <img
                                className="menu-home"
                                src="/images/icon/User_Icon.png"
                            />
                        </Link>
                        <div className="info">
                            <p className="head-text">Hello</p>
                            <p
                                className="head-text"
                                style={{ color: "#00ffea" }}
                            >
                                {eosAccount}
                            </p>
                        </div>
                    </div>
                    <div className="eos-player">
                        <Link to="/my-wallet">
                            <img
                                className="coin-eos"
                                src="/images/icon/Coin_Icon.png"
                            />
                        </Link>
                        <div className="info-coin">
                            <p
                                className="head-text-coin"
                                style={{ fontSize: "16px" }}
                            >
                                {this.state.eos_ammount}
                            </p>
                            <p
                                className="head-text-eos"
                                style={{ color: "#00ffea" }}
                            >
                                EOS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: State) => ({
    scatter: state.scatter,
    identity: state.identity
})

const mapDispatchToProps = {
    dispatchDoLogout: doLogout // ,
    // dispatchRequestScatterIdentity: requestScatterIdentity
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopMenu)
