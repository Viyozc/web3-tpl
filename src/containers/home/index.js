import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Input, Button, Table, TableCell, TableBody,TablePagination, TableFooter, TableRow, Paper, Grid} from '@material-ui/core'
import TableComp from './Table'
import Web3 from 'web3'
import {connect} from 'react-redux'
import {getData} from '../../utils'
import './index.css';

class App extends Component {
  state = {

  }
  async componentDidMount () {
    // const testUrl = 'https://rinkeby.infura.io/1JxnanpAnDAITgF9oHh1' 
    // var testUrl = 'http://localhost:8545'; // TODO: remote URL
    var testUrl = 'http://10.164.96.26:8545'; // TODO: remote URL
    let web3 = this.web3 = new Web3(new Web3.providers.HttpProvider(testUrl))
    var version = web3.version.node;
    console.log(version)  
    console.log(web3.eth.defaultAccount)
    console.log(web3.eth.accounts)
    // console.log(web3.eth.defaultBlock = 2638910)
    // console.log(web3.eth.getGasPrice((err, res) => {console.log(res.toString(10))}))
    // web3.eth.getBlock(web3.toHex("0xc1Bb1Ee870CcC01af5Ccf61d854DB9b24cf2E392"), (err, res) => {
    //   debugger
    // })
    // debugger
    
    var coinbase = web3.eth.coinbase;
    
    web3.eth.getBalance(coinbase, (err, res) => {
      console.log(res)
    })
    web3.eth.getBlockNumber((err, res) => {
      console.log('block', res) // 11598
    })
    
    var info = web3.eth.getBlock(3150);
    console.log('block info', info);

    console.log(coinbase)
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
        </header>
        <div>        
          <Input style={{width: 600, height: 50}} />
          <Button color="primary" onClick={this._search} >
            查徇
          </Button>
        </div>
        <div>
          <Grid container spacing={16} >
          <Grid item sm={1} xs={false}/>
          <Grid item  sm={5} xs={12}>
            <Paper><TableComp data={[]}/></Paper>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Paper><TableComp data={[]}/></Paper>
          </Grid>
          </Grid>
        </div>
        <div>
          {/* <Button color="primary" >
            <Link to='/detail/1'>详情</Link>
          </Button> */}
        </div>
      </div>
    );
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
