import * as React from "react"

const Footer = (props: any) => (
    <footer className="menu-footer">
        <div className="menu-icon">
            <p>Log out</p>
            <img className="menu-home IconLogOut" src="/images/icon/LogOut_Icon.png" />
        </div>
        <div className="menu-icon ">
            <p>My monsters</p>
            <img className="menu-home IconMonster" src="/images/icon/Monster_Icon.png" />
        </div>
        <div className="menu-icon">
            <p>Arena</p>
            <img className="menu-home IconArena" src="/images/icon/Arena.png" />
        </div>
        <div className="menu-icon">
            <p>Rank</p>
            <img className="menu-home IconRank" src="/images/icon/Rank_Icon.png" />
        </div>
        <div className="menu-icon">
            <p>About</p>
            <img className="menu-home IconInfo" src="/images/icon/Info_Icon.png" />
        </div>
    </footer>
  )
  
  export default Footer