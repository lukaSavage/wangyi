import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './css/index.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <NavLink to="/index" className="footer-item" activeClassName="on" >
                    <span className="item_icon">
                        <i className="iconfont icon-shouye"></i>
                    </span>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/item" className="footer-item" activeClassName="on" >
                    <span className="item_icon">
                        <i className="iconfont icon-choutigui"></i>
                    </span>
                    <span>分类</span>
                </NavLink >
                <NavLink to="/topic" className="footer-item" activeClassName="on" >
                    <span className="item_icon">
                        <i className="iconfont icon-tupian"></i>
                    </span>
                    <span>值得买</span>
                </NavLink >
                <NavLink to="cart" className="footer-item" activeClassName="on" >
                    <span className="item_icon">
                        <i className="iconfont icon-gouwuche"></i>
                    </span>
                    <span>购物车</span>
                </NavLink >
                <NavLink to="personal" className="footer-item" activeClassName="on" >
                    <span className="item_icon">
                        <i className="iconfont icon-geren"></i>
                    </span>
                    <span>个人</span>
                </NavLink >
            </footer >
        )
    }
}
