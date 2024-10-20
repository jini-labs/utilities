import React, { useState } from 'react'
import Main from '../components/section/Main';

const Cidr = () => {
  const [inputIpaddr, setInputIpaddr] = useState({ ipaddr: '', subnet: '', });
  const [cidrInfo, setCidrInfo] = useState({
    startIp: '',
    endIp: '',
    ipBitCount: '',
    ipToBinary: '',
    ipToDecimal: '',
    ipCount: '',
    ipBroadcast: '',
    ipNetwork: '',
  })

  const handleInputChange = (e) => {
    let inputData = {[e.target.name]: e.target.value};
      setInputIpaddr((prev) => ({
        ...prev,
        ...inputData
      }))
  }
  
  const getBroadCastIp = (ip, subnet) => {
    let ipParts = ip.split('.').map(Number);
    let snParts = subnet.split('.').map(Number);
    const broadcastParts = ipParts.map((part, index) => { return part | (~snParts[index] & 255); });
    return broadcastParts.join('.');
  }
  const getNetworkIp = (ip, subnet) => {
    const ipParts = ip.split('.').map(Number);
    const snParts = subnet.split('.').map(Number);
    const networkParts = ipParts.map((part, index) => { return part & snParts[index]; });
    return networkParts.join('.');
  }
  const getAssignableIp = (subnet) => {
    const snParts = subnet.split('.').map(Number);
    let binarySubnet = snParts
        .map(part => part.toString(2).padStart(8, '0'))
        .join('');

    const networkBits = binarySubnet.split('1').length - 1;
    const hostBits = 32 - networkBits;

    return Math.pow(2, hostBits) - 2;
  }
  const getCountSubnetBits = (subnet) => {
    const snParts = subnet.split('.').map(Number);
    const onesCount = snParts
        .map(part => part.toString(2).padStart(8, '0'))
        .join('')
        .split('')
        .filter(bit => bit === '1').length;

    return onesCount;
  }
  const calcIpaddress = () => {
    if (inputIpaddr.ipaddr) {
      let ipBitCount = '';
      let ipToBinary = inputIpaddr.ipaddr.split('.').map(element => parseInt(element).toString(2).padStart(8,'0')).join(' ');
      let ipToDecimal = parseInt(ipToBinary.replaceAll(' ', ''), 2);
      let ipToHexa = ipToDecimal.toString(16).toUpperCase();
      let ipCount = getAssignableIp(inputIpaddr.subnet);
      let ipBroadcast = '';
      let ipNetwork = '';
      if (inputIpaddr.subnet) {
        ipBitCount = getCountSubnetBits(inputIpaddr.subnet);
        ipBroadcast = getBroadCastIp(inputIpaddr.ipaddr, inputIpaddr.subnet);
        ipNetwork = getNetworkIp(inputIpaddr.ipaddr, inputIpaddr.subnet);
      }

      setCidrInfo((prev) => ({
        ...prev,
        ipBitCount,
        ipToBinary,
        ipToDecimal,
        ipToHexa,
        ipCount,
        ipBroadcast,
        ipNetwork,
      }))
    }
  }
  return (
    <div className='cidr'>
      <div className='cidr__inner'>
        <div className='cidr__title'>
          <h2>CIDRとは？</h2>
        </div>
        <div className='cidr__description'>
          <p>Classless Inter-Domain Routing (CIDR) </p>
          <p>
          インターネット上のデータルーティング効率を高めるため、CIDR を使用して IP アドレスを効率的に割り当てます。IP アドレスは各デバイスに割り当てられ、通信の際に利用されます。
          </p>
        </div>
        <br />
        <hr />
        <div className='cidr__input'>
          <label>
            Ip Address
            <input type='text' name='ipaddr' value={inputIpaddr.ipaddr} onChange={handleInputChange}></input>
          </label>
          <label>
            Subnet
            <input type='text' name='subnet' value={inputIpaddr.subnet} onChange={handleInputChange}></input>
          </label>
          <button onClick={calcIpaddress}>calc</button>
        </div>

        <hr />
        <table>
          <tr>
            <th> 項目 </th>
            <th> 値 </th>
          </tr>
          <tr>
            <td>入力値</td>
            <td> {inputIpaddr.ipaddr} </td>
          </tr>
          <tr>
            <td>入力サーブネット</td>
            <td> {inputIpaddr.subnet} </td>
          </tr>
          <tr>
            <td>CIDR</td>
            <td>{cidrInfo.ipNetwork} / {cidrInfo.ipBitCount}</td>
          </tr>
          <tr>
            <td>サブネット表記</td>
            <td>{cidrInfo.ipNetwork} / {cidrInfo.ipBroadcast}</td>
          </tr>
          <tr>
            <td>IPアドレス範囲</td>
            <td>{cidrInfo.ipNetwork} - {cidrInfo.ipBroadcast}</td>
          </tr>
          <tr>
            <td>IPアドレス数</td>
            <td>{cidrInfo.ipCount}</td>
          </tr>
          <tr>
            <td>ネットワークIP</td>
            <td>{cidrInfo.ipNetwork}</td>
          </tr>
          <tr>
            <td>ブロードキャストIP</td>
            <td>{cidrInfo.ipBroadcast}</td>
          </tr>
          <tr>
            <td>サブネットマスク（2進数）</td>	
            <td>{cidrInfo.ipToBinary}</td>
          </tr>
          <tr>
            <td>IPアドレス（2進数）</td>
            <td>{cidrInfo.ipToBinary}</td>
          </tr>
          <tr>
            <td>IPアドレス（10進数）</td>
            <td>{cidrInfo.ipToDecimal}</td>
          </tr>
          <tr>
            <td>IPアドレス（16進数）</td>
            <td>{cidrInfo.ipToHexa}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Cidr
