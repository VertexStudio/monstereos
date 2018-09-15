import * as React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { State, doLogout } from "../../../store" // , requestScatterIdentity
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

interface FooterProps {
  scatter: any
  dispatchDoLogout: any // ,
  // dispatchRequestScatterIdentity: any
}

interface FooterState {
  current_view: any,
  modal:boolean
}

class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props)

        this.state = {
          current_view: "My Monsters",
          modal: false
        }
    }

    public toggle = () => {
      this.setState({
        modal: !this.state.modal
      })
    }

    public render() {
        return (
          <React.Fragment>
          <footer className="menu-footer">
            {this.logoutButton()}
            {this.myMonstersButton()}
            {this.arenasButton()}
            {this.rankButton()}
            {/* {this.marketButton()} */}
            {this.aboutButton()}
          </footer>
          <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Log Out</ModalHeader>
          <ModalBody>
            ARE YOU SURE YOU WANT YO LOG OUT?
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>ACCEPT</Button>
            <Button color="secondary" onClick={this.toggle}>DECLINE</Button>
          </ModalFooter>
        </Modal>
          </React.Fragment>
        
        )
    }

    //   private marketButton() {
    //   return (
    //     <Link  to="/market">
    //       <i className="fa fa-money" />
          
    //     </Link>
    //   )
    // }

    private rankButton() {
      return (
        <div className="menu-icon">
         <p className="text-icon">Top Rank</p>
          <Link  to="/rank">
            <img className="menu-home" src="/images/icon/Rank_Icon.png" />
          </Link>
        </div>
      )
    }

    private arenasButton() {
      return (
        <div className="menu-icon">
         <p className="text-icon">Arenas</p>
          <Link  to="/arenas">
          <img className="menu-home" src="/images/icon/Arena.png" />
          </Link>
        </div>
      )
    }

    private logoutButton() {
      // const { dispatchDoLogout } = this.props
      return (
          <div className="menu-icon">
          <p className="text-icon">Log Out</p>
          <img className="menu-home" src="/images/icon/LogOut_Icon.png" 
            onClick={this.toggle}
          // onClick={dispatchDoLogout}
          />
        </div>
      )
    }


   private aboutButton() {
      return (
        <div className="menu-icon">
         <p className="text-icon">About</p>
          <Link  to="/about">
            <img className="menu-home" src="/images/icon/Info_Icon.png" />
          </Link>
        </div>
      )
    }

    private myMonstersButton() {
      return (
        <div className="menu-icon">
            <p className="text-icon">My Monsters</p>
          <Link  to="/my-monsters">
          <img className="menu-home" src="/images/icon/Monster_Icon.png" />
          </Link>
        </div>
      )
    }
}

const mapStateToProps = (state: State) => ({
  current_view: "My Monsters",
  scatter: state.scatter,
})

const mapDispatchToProps = {
  dispatchDoLogout: doLogout // ,
    // dispatchRequestScatterIdentity: requestScatterIdentity
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)