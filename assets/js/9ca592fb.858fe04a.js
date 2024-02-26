"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[81930],{21154:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"final prefs = await SharedPreferences.getInstance();\nfinal privateKey = prefs.getString('privateKey') ?? '0';\nfinal client = Web3Client(rpcUrl, Client());\nfinal credential = EthPrivateKey.fromHex(privateKey);\n\nvar list = utf8.encode(TestContract.byteCode);\nUint8List payload = Uint8List.fromList(list);\nfinal Transaction transaction = Transaction(\n  to: null,\n  from: credential.address,\n  data: payload,\n  maxGas: 2000000);\nfinal String transactionId =\n  await client.sendTransaction(credential, transaction);\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},22779:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Get Account\n              ElevatedButton(\n                onPressed: () async {\n                  // highlight-start\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  debugPrint(\"Account, ${address.hexEip55}\");\n                  // highlight-end\n                },\n                child: const Text('Get Address'),\n              ),\n            ])));\n  }\n\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},58023:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Get Balance\n              ElevatedButton(\n                onPressed: () async {\n                  // highlight-start\n                  final prefs = await SharedPreferences.getInstance();\n                  final privateKey = prefs.getString('privateKey') ?? '0';\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final client = Web3Client(rpcUrl, Client());\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  final balance = await client.getBalance(address);\n                  debugPrint(\"Balance, ${balance}\");\n                  // highlight-end\n                },\n                child: const Text('Get Balance'),\n              ),\n            ])));\n  }\n\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},694:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n// highlight-next-line\nimport 'package:web3auth_flutter/web3auth_flutter.dart';\nimport 'package:web3auth_flutter/enums.dart';\nimport 'package:web3auth_flutter/input.dart';\nimport 'package:web3auth_flutter/output.dart';\nimport 'package:http/http.dart';\n// highlight-next-line\nimport 'package:web3dart/web3dart.dart';\nimport 'package:shared_preferences/shared_preferences.dart';\n\nvoid main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatefulWidget {\n  @override\n  _MyAppState createState() => _MyAppState();\n}\n\nclass _MyAppState extends State<MyApp> {\n\n  // highlight-next-line\n  String rpcUrl = \"\"; // EVM chain RPC URL\n\n  @override\n  void initState() {\n    super.initState();\n    initPlatformState();\n  }\n\n  Future<void> initPlatformState() async {\n    Uri redirectUrl;\n    if (Platform.isAndroid) {\n      redirectUrl = Uri.parse('{SCHEME}://{HOST}/auth');\n      // w3a://com.example.w3aflutter/auth\n    } else if (Platform.isIOS) {\n      redirectUrl = Uri.parse('{bundleId}://auth');\n      // com.example.w3aflutter://openlogin\n    } else {\n      throw UnKnownException('Unknown platform');\n    }\n\n    // highlight-start\n    await Web3AuthFlutter.init(Web3AuthOptions(\n        clientId: 'WEB3AUTH_CLIENT_ID_FROM_DASHBOARD',\n        network: Network.testnet,\n        redirectUrl: redirectUrl));\n    // highlight-end\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // Your page\n  }\n}\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},84853:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To interact with the Ethereum blockchain in Flutter, you can use any ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:(0,r.jsx)(n.code,{children:"EIP1193"})})," compatible package. Here,\nwe're using ",(0,r.jsx)(n.a,{href:"https://pub.dev/packages/web3dart",children:"web3dart"})," to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"flutter pub add web3dart shared_preferences\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Note: We will also be using ",(0,r.jsx)(n.code,{children:"shared_preferences"})," package to share ",(0,r.jsx)(n.code,{children:"privateKey"}),", used for making credentials for ",(0,r.jsx)(n.code,{children:"web3dart"}),", at various places in the\ncodes below."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},69170:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"final client = Web3Client(rpcUrl, Client());\n\nfinal contract = DeployedContract(\n    ContractAbi.fromJson(TestContract.contractAbi, ''),\n    TestContract.deployedAddress);\nfinal messageFunction = contract.function('message');\nvar message = await client.call(\ncontract: contract, function: messageFunction, params: []);\ndebugPrint(\"Contract Read Message, $message\");\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},25999:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Send Transaction\n              ElevatedButton(\n                onPressed: () async {\n                  final prefs = await SharedPreferences.getInstance();\n                  final privateKey = prefs.getString('privateKey') ?? '0';\n                  final client = Web3Client(rpcUrl, Client());\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  // highlight-start\n                  final receipt = await client.sendTransaction(\n                      credentials,\n                      Transaction(\n                        from: address,\n                        to: EthereumAddress.fromHex(\n                            '0x809D4310d578649D8539e718030EE11e603Ee8f3'),\n                        value: EtherAmount.fromUnitAndValue(\n                            EtherUnit.gwei, 50000000), // 0.05 ETH\n                      ),\n                      chainId: 5); // change chainId as per your chain.\n                  debugPrint(\"Receipt, ${receipt}\");\n                  // highlight-end\n                },\n                child: const Text('Send Transaction'),\n              ),\n            ])));\n  }\n\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},53248:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Send Transaction\n              ElevatedButton(\n                onPressed: () async {\n                  final prefs = await SharedPreferences.getInstance();\n                  final privateKey = prefs.getString('privateKey') ?? '0';\n                  final client = Web3Client(rpcUrl, Client());\n                  final credentials = EthPrivateKey.fromHex(privateKey);\n                  final address = credentials.address;\n                  // highlight-start\n                  final receipt = await client.signTransaction(\n                      credentials,\n                      Transaction(\n                        from: address,\n                        to: EthereumAddress.fromHex(\n                            '0x809D4310d578649D8539e718030EE11e603Ee8f3'),\n                        value: EtherAmount.fromUnitAndValue(\n                            EtherUnit.gwei, 50000000), // 0.05 ETH\n                      ),\n                      chainId: 5); // change chainId as per your chain.\n                  debugPrint(\"Receipt, ${receipt}\");\n                  // highlight-end\n                },\n                child: const Text('Sign Transaction'),\n              ),\n            ])));\n  }\n\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},11904:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this example, we'll be demonstrating how to use ",(0,r.jsx)(n.code,{children:"Web3Auth"})," with ",(0,r.jsx)(n.code,{children:"web3dart"})," to interact with Solidity Smart Contracts. The simple Hello World\ncontract allows anyone to read and write a message to it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"pragma solidity ^0.5.10;\n\ncontract HelloWorld {\n\n  string public message;\n\n  constructor(string memory initMessage) public {\n    message = initMessage;\n  }\n\n  function update(string memory newMessage) public {\n    message = newMessage;\n  }\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'class TestContract {\n  static final deployedAddress =\n  EthereumAddress.fromHex("0x1dce94bb358785c2fa27b74551f8aea24d3d0afe");\n  static const contractAbi = \'[{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"update","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"message","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initMessage","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]\';\n  static const byteCode =\n      "0x608060405234801561001057600080fd5b506040516104623803806104628339818101604052602081101561003357600080fd5b81019080805164010000000081111561004b57600080fd5b8281019050602081018481111561006157600080fd5b815185600182028301116401000000008211171561007e57600080fd5b5050929190505050806000908051906020019061009c9291906100a3565b5050610148565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610112565b82800160010185558215610112579182015b828111156101115782518255916020019190600101906100f6565b5b50905061011f9190610123565b5090565b61014591905b80821115610141576000816000905550600101610129565b5090565b90565b61030b806101576000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633d7403a31461003b578063e21f37ce146100f6575b600080fd5b6100f46004803603602081101561005157600080fd5b810190808035906020019064010000000081111561006e57600080fd5b82018360208201111561008057600080fd5b803590602001918460018302840111640100000000831117156100a257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610179565b005b6100fe610193565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013e578082015181840152602081019050610123565b50505050905090810190601f16801561016b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b806000908051906020019061018f929190610231565b5050565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102295780601f106101fe57610100808354040283529160200191610229565b820191906000526020600020905b81548152906001019060200180831161020c57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061027257805160ff19168380011785556102a0565b828001600101855582156102a0579182015b8281111561029f578251825591602001919060010190610284565b5b5090506102ad91906102b1565b5090565b6102d391905b808211156102cf5760008160009055506001016102b7565b5090565b9056fea265627a7a72305820a58716d2c2342b3cc5028e49842810b98f5c3f2c1591e8c7f3ec916096f6a03264736f6c634300050a0032";\n}\n'})})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},59841:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You get the user information after a successful login returned from the ",(0,r.jsx)(n.code,{children:"login"})," method. The ",(0,r.jsx)(n.code,{children:"userInfo"})," object contains the user information, whereas\nthe ",(0,r.jsx)(n.code,{children:"privKey"})," object contains the private key that can be used to make blockchain calls."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"// Use codes from Initialization here,\n// and replace the `Widget build` from the below code:\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        body: Center(\n            child:\n            Column(mainAxisAlignment: MainAxisAlignment.center, children: [\n              // Get Account\n              ElevatedButton(\n                onPressed: () async {\n                  // highlight-start\n                  // Upon ligin, gets the UserInfo along with priavteKey.\n                  final response = await Web3AuthFlutter.login(\n                    LoginParams(loginProvider: Provider.google)\n                    );\n                  debugPrint(\"UserInfo, ${response?.userinfo?.toString()}\");\n                  // highlight-end\n                  final prefs = await SharedPreferences.getInstance();\n                  // highlight-next-line\n                  await prefs.setString('privateKey', response?.privKey.toString());\n                  // Setting the privateKey to shared_preferences\n                },\n                child: const Text('Login'),\n              ),\n            ])));\n  }\n\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},71077:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"final prefs = await SharedPreferences.getInstance();\nfinal privateKey = prefs.getString('privateKey') ?? '0';\nfinal client = Web3Client(rpcUrl, Client());\nfinal credential = EthPrivateKey.fromHex(privateKey);\n\nfinal contract = DeployedContract(\n  ContractAbi.fromJson(TestContract.contractAbi, ''),\n  TestContract.deployedAddress);\nfinal updateFunction = contract.function('update');\nvar transactionId = await client.sendTransaction(\n  credential,\n  Transaction.callContract(\n    contract: contract,\n    function: updateFunction,\n    parameters: [\"NEW_MESSAGE\"]));\ndebugPrint(\"Transaction Id, $transactionId\");\n"})})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},41394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>j,default:()=>C,frontMatter:()=>v,metadata:()=>w,toc:()=>k});var r=t(85893),a=t(11151),i=t(84853),o=t(22779),s=t(59841),c=t(58023),l=t(694),d=t(53248),u=t(25999),h=t(11904),p=t(21154),m=t(69170),f=t(71077),b=t(74866),g=t(85162),x=t(30831);const v={title:"Integrate Web3Auth with the Songbird Blockchain in Flutter",sidebar_label:"Flutter",image:"content-hub/guides/banners/songbird.png",displayed_sidebar:"docs",keywords:["flutter","songbird","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Songbird Blockchain in Flutter | Documentation - Web3Auth"},j=void 0,w={id:"connect-blockchain/evm/songbird/flutter",title:"Integrate Web3Auth with the Songbird Blockchain in Flutter",description:"Integrate Web3Auth with the Songbird Blockchain in Flutter | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/evm/songbird/flutter.mdx",sourceDirName:"connect-blockchain/evm/songbird",slug:"/connect-blockchain/evm/songbird/flutter",permalink:"/docs/connect-blockchain/evm/songbird/flutter",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/evm/songbird/flutter.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Songbird Blockchain in Flutter",sidebar_label:"Flutter",image:"content-hub/guides/banners/songbird.png",displayed_sidebar:"docs",keywords:["flutter","songbird","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Songbird Blockchain in Flutter | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"React Native",permalink:"/docs/connect-blockchain/evm/songbird/react-native"},next:{title:"Unity",permalink:"/docs/connect-blockchain/evm/songbird/unity"}},y={},k=[{value:"Installation",id:"installation",level:2},{value:"Chain Details for Songbird",id:"chain-details-for-songbird",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account",id:"get-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2},{value:"Sign Transaction",id:"sign-transaction",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Deploy Contract",id:"deploy-contract",level:3},{value:"Read From Contract",id:"read-from-contract",level:3},{value:"Write to Contract",id:"write-to-contract",level:3}];function A(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Z,{title:"Integrate Web3Auth with the Songbird Blockchain in Flutter",description:"Integrate Web3Auth with the Songbird Blockchain in Flutter | Documentation - Web3Auth",image:"https://web3auth.io/docs/content-hub/guides/banners/songbird.png",slug:"/connect-blockchain/evm/songbird/flutter"}),"\n",(0,r.jsxs)(n.p,{children:["While using the Web3Auth Flutter SDK, you get the private key within the user scope. This private key can interact with\n",(0,r.jsx)(n.a,{href:"https://www.flare.network",children:"Songbird"})," to make any blockchain calls, like getting the user's ",(0,r.jsx)(n.code,{children:"account"}),", fetch ",(0,r.jsx)(n.code,{children:"balance"}),", ",(0,r.jsx)(n.code,{children:"sign transaction"}),",\n",(0,r.jsx)(n.code,{children:"send transaction"}),", ",(0,r.jsx)(n.code,{children:"read"})," from and ",(0,r.jsx)(n.code,{children:"write"})," to the smart contract, etc. We have highlighted a few here to get you started quickly on that."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(i.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"chain-details-for-songbird",children:"Chain Details for Songbird"}),"\n",(0,r.jsxs)(b.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,r.jsx)(g.Z,{value:"mainnet",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Chain ID: 0x13"}),"\n",(0,r.jsxs)(n.li,{children:["Public RPC URL: ",(0,r.jsx)(n.a,{href:"https://songbird-api.flare.network/ext/C/rpc",children:"https://songbird-api.flare.network/ext/C/rpc"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,r.jsx)(n.li,{children:"Display Name: Songbird canary network"}),"\n",(0,r.jsxs)(n.li,{children:["Block Explorer Link: ",(0,r.jsx)(n.a,{href:"https://songbird-explorer.flare.network",children:"https://songbird-explorer.flare.network"})]}),"\n",(0,r.jsx)(n.li,{children:"Ticker: SGB"}),"\n",(0,r.jsx)(n.li,{children:"Ticker Name: SGB"}),"\n"]})}),(0,r.jsx)(g.Z,{value:"testnet",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Chain ID: 0x10"}),"\n",(0,r.jsxs)(n.li,{children:["Public RPC URL: ",(0,r.jsx)(n.a,{href:"https://coston-api.flare.network/ext/C/rpc",children:"https://coston-api.flare.network/ext/C/rpc"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,r.jsx)(n.li,{children:"Display Name: Coston testnet"}),"\n",(0,r.jsxs)(n.li,{children:["Block Explorer Link: ",(0,r.jsx)(n.a,{href:"https://coston-explorer.flare.network",children:"https://coston-explorer.flare.network"})]}),"\n",(0,r.jsx)(n.li,{children:"Ticker: CFLR"}),"\n",(0,r.jsx)(n.li,{children:"Ticker Name: CFLR"}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"initialize",children:"Initialize"}),"\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-account",children:"Get Account"}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,r.jsx)(c.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,r.jsx)(u.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"sign-transaction",children:"Sign Transaction"}),"\n",(0,r.jsx)(d.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,r.jsx)(h.ZP,{}),"\n",(0,r.jsx)(n.h3,{id:"deploy-contract",children:"Deploy Contract"}),"\n",(0,r.jsx)(p.ZP,{}),"\n",(0,r.jsx)(n.h3,{id:"read-from-contract",children:"Read From Contract"}),"\n",(0,r.jsx)(m.ZP,{}),"\n",(0,r.jsx)(n.h3,{id:"write-to-contract",children:"Write to Contract"}),"\n",(0,r.jsx)(f.ZP,{})]})}function C(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),i=t(12466),o=t(16550),s=t(20469),c=t(91980),l=t(67392),d=t(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==r&&(l(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},30831:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(35742),a=t(85893);function i(e){const{title:n,description:t,image:i,slug:o,keywords:s}=e;return(0,a.jsxs)(r.Z,{children:[n?(0,a.jsxs)("title",{children:[n," | Web3Auth "]}):(0,a.jsx)("title",{children:"Documentation | Web3Auth"}),t?(0,a.jsx)("meta",{name:"description",content:t}):(0,a.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?s.length>0&&(0,a.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${s.join(", ")}`}):(0,a.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,a.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),n?(0,a.jsx)("meta",{property:"og:title",content:n}):(0,a.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),t?(0,a.jsx)("meta",{property:"og:description",content:t}):(0,a.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),o?(0,a.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${o}`}):(0,a.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),i?(0,a.jsx)("meta",{property:"og:image",content:i}):(0,a.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),i?(0,a.jsx)("meta",{name:"twitter:image",content:i}):(0,a.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),n?(0,a.jsx)("meta",{itemProp:"name",content:n}):(0,a.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),t?(0,a.jsx)("meta",{itemProp:"description",content:t}):(0,a.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),i?(0,a.jsx)("meta",{itemProp:"image",content:i}):(0,a.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,a.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);