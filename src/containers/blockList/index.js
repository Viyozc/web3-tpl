import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Input, Button,  Paper, Grid} from '@material-ui/core'
import TableList from './TableList'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Web3 from 'web3'
import {connect} from 'react-redux'
import {getData} from '../../utils'
import './index.css';

class App extends Component {
  state = {
    currentPage: 1
  }
  async componentDidMount () {
    // const testUrl = 'https://rinkeby.infura.io/1JxnanpAnDAITgF9oHh1' 
    // var testUrl = 'http://localhost:8545'; // TODO: remote URL
    var testUrl = 'http://10.164.96.26:8545'; // TODO: remote URL
    let web3 = this.web3 = window.web3 = new Web3(new Web3.providers.HttpProvider(testUrl))
    var version = web3.version.node;
    console.log(this.props)
    console.log(version)  
    console.log(web3.eth.defaultAccount)
    console.log(web3.eth.accounts)

    
    var coinbase = web3.eth.coinbase;
    
    web3.eth.getBalance(coinbase, (err, res) => {
      console.log(res)
    })
    web3.eth.getBlockNumber((err, res) => {
      console.log('block', res) // 11598
      this._latest = res
      this.setState({totalCount: res})
      let data = new Array(10).fill(1).map((v, i) => {
        return web3.eth.getBlock(this._latest - i)
      })
      console.log(data)
      this.setState({data})
    })

    // console.log('block info', info);

    console.log(coinbase)

    var addr = "0xeeca6f52e6728f03bb2b2b826e81d4cfbe9a2c9a9dd6b4207acaffb3947ff1ed"
    var number = web3.eth.getBlockTransactionCount(addr);
    console.log(number); // 1

    let balance = web3.eth.getBalance('0xcdc0f25c6c99800604fa7fa5194a55f20a9dc7ee')

    this.setState({list: this.web3.eth.accounts})
 
    console.log(balance); // instanceof BigNumber
    console.log(balance.toString(10)); // '1000000000000'
    console.log(balance.toNumber()); // 1000000000000
    if(!web3.isConnected()) {
        
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          列表
        </header>
        <div style={{margin: '0 10px'}}>
              <Paper>
                <TableList 
                  data={this.state.data}
                  totalCount={this.state.totalCount}
                  currentPage={this.state.currentPage}
                  onPageChange={this.onPageChange.bind(this)}
                />
              </Paper>
        </div>
        <Footer />
      </div>
    );
  }
  onPageChange = (v) => {
    this.setState({currentPage: v})
  }
  _search = async () => {
    let a = await getData('/', {
      name: 1
    })
    console.log(a)
    const info = await this.web3.eth.getAccounts((err, res) => {
  
    })
    console.log(info)
  }
}

export default App;

const Footer = () => {
  return (
      <footer className='footer'>Footer</footer>
  )
}