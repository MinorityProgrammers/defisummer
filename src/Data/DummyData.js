//Help Icons
import Help1Img from '../assets/icons/Group 52.svg'
import Help2Img from '../assets/icons/Group 66.svg'
import Help3Img from '../assets/icons/Group 58.svg'
import Help4Img from '../assets/icons/Group 83.svg'
import Help5Img from '../assets/icons/Group 49.svg'

//Sponsors
import Stellar from '../assets/images/Stellar_Development_Foundation.svg'
import Mpa from '../assets/images/MPA-Exec.svg'
import Mtt from '../assets/images/MTTLogo 3.svg'
import Pluto from '../assets/images/pluto.svg'
import Enzyme from '../assets/images/enzyme.svg'
import Saint from '../assets/images/saintgits-white.svg'
import Echelon from '../assets/images/image 63.svg'
import Blockchain from '../assets/images/image 67.svg'
import Idle from '../assets/images/idle.svg'

//Socials
import Twitter from '../assets/icons/Rectangle 272.svg'
import Second from '../assets/icons/Rectangle 271.svg'

//Events
const learn = [
    {id: '1', month: 'June', date: '1st', time: '-', event: 'Prize Tracks Announced'},
    {id: '2', month: 'June', date: '4th', time: '-', event: 'Kick Off Ceremony'},
    {id: '3', month: 'June', date: '8th', time: '5:00 PM EST', event: 'Introduction to Blockchain/Defi'},
    {id: '4', month: 'June', date: '9th', time: '3:00 PM EST', event: 'Introduction to NFTs'},
    {id: '5', month: 'June', date: '10th', time: '2:00 PM EST', event: 'Introduction to DAOs,Governance, Business Use Cases'},
    {id: '6', month: 'June', date: '11th', time: '12:00 PM EST', event: 'Introduction to Stellar'},
    {id: '7', month: 'June', date: '14th', time: '3:00 PM EST', event: 'Deploying NFTs on Testnet'},
    {id: '8', month: 'June', date: '14th', time: '3:00 PM EST', event: 'Deploying NFTs on Testnet'},
    {id: '9', month: 'June', date: '15th', time: '12:00 PM EST', event: 'How to get started developing on Stellar'},
    {id: '10', month: 'June', date: '16th', time: '6:00 PM EST', event: 'What is On-Chain Asset Management, Intro to Enzyme'},
    {id: '11', month: 'June', date: '17th', time: '6:00 PM EST', event: 'Look at Governance Platforms & Designing A DAO'},
    {id: '12', month: 'June', date: '18th', time: '11:00 AM EST', event: 'Blockchain Consultancy: Case Study 1'},
    {id: '13', month: 'June', date: '21st', time: '6:00 PM EST', event: 'Building React dApps'},
    {id: '14', month: 'June', date: '22nd', time: '3:00 PM EST', event: 'How to Integrate Web3 Wallets'},
    {id: '15', month: 'June', date: '23rd', time: '6:00 PM EST', event: 'Blockchain Consultancy Case Study 2'},
    {id: '16', month: 'June', date: '24th', time: '-', event: 'Designing Gaming Contracts'},
    {id: '17', month: 'June', date: '28th', time: '2:00 PM EST', event: 'Tokenomics Workshop'},
    {id: '18', month: 'June', date: '29th', time: '5:00 PM EST', event: 'Learning Incentivization Explained - Combining eLearning & Blockchain'},
    {id: '19', month: 'June', date: '30th', time: 'TBD EST', event: 'Using Enzyme SDK'},
]

const hack = [
    {id:'1', month: 'July', date:'1st' ,time:'-', event:'Start of Hackathon Build'},
    {id:'2', month: 'July', date:'6th' ,time:'3:00 PM EST', event:'Team Formation, Ideation, Market Research'},
    {id:'3', month: 'July', date:'8th' ,time:'3:00 PM EST', event:'Formal Verification for DeFi projects'},
    {id:'4', month: 'July', date:'8th' ,time:'6:00 PM EST', event:'Test Driven Development on Solidity & Truffle'},
    {id:'5', month: 'July', date:'12th' ,time:'-', event:'Office Hours'},
    {id:'6', month: 'July', date:'14th' ,time:'-', event:'Office Hours'},
    {id:'7', month: 'July', date:'19th' ,time:'-', event:'Office Hours'},
    {id:'8', month: 'July', date:'21st' ,time:'-', event:'Office Hours'},
    {id:'9', month: 'July', date:'26th' ,time:'-', event:'Office Hours'},
    {id:'10', month: 'July', date:'28th' ,time:'-', event:'Office Hours'},
    {id:'11', month: 'Auguest', date:'2nd' ,time:'-', event:'Office Hours'},
    {id:'12', month: 'August', date:'4th' ,time:'-', event:'Office Hours'},
    {id:'13', month: 'August', date:'9th' ,time:'-', event:'Office Hours'},
    {id:'14', month: 'August', date:'11th' ,time:'-', event:'Office Hours'},
    {id:'15', month: 'August', date:'15th' ,time:'-', event:'Submission Deadline'},
]

const build = [
    {id: '1', month: 'August', date: '16th', time: 'TBA', event: 'Judging Begins'},
    {id: '2', month: 'August', date: '17th', time: 'TBA', event: 'TBA'},
    {id: '3', month: 'August', date: '18th', time: 'TBA', event: 'TBA'},
    {id: '4', month: 'August', date: '19th', time: 'TBA', event: 'TBA'},
    {id: '5', month: 'August', date: '20th', time: 'TBA', event: 'TBA'},
]

export const data = {
    prize: [
        {id: '4', title: 'Learning Incentivization', description: 'Learning Incentivization: Develop an e-learning application that rewards individuals crypto for learning STEM concepts. The winners of this will be given a chance at Blockchain Engineering internships with MPA.'},
        {id: '5', title: 'DefiSummer NFT Art Grand Prize', description: 'You are to design a one of the kind DeFiSummer NFT. Make it iconic. Think the DeFi Woodstock. Your non-fungible token will be forever minted in DeFi Hall of Fame.'},
        {id: '6', title: 'Blockchain Consulting Award (2)', description: 'Blockchain Consulting: Case Study - Design a system that turns Minority Programmers Association into a DAO with its own utility token. Winner with be given an Internship as Blockchain Research Intern at Minority Programmers or Echelon Digital Consulting'},
        {id: '7', title: 'Trading Automation Prize - Enzyme ($4000 in $MLN)', description: 'Trading Automation: Develop an interface and bot that allows hedge funds on Enzyme finance to easily build trading strategies, fund allocation, etc generates and a bot that uses the enzyme protocol to trade accordingly.'},
        {id: '8', title: '“Choose Your Own Adventure Governance” - PlutoPepe ($1000 in $PLUTO)', description: '“Choose Your Own Adventure Governance” - Build a dAPP with a stunningUI that allows individuals to vote on the outcome of a storyline for having a certain amount of tokens in their wallet.'},
        {id: '9', title: 'NFT Meme Marketplace Prize - PlutoPepe ($1000 in $PLUTO)', description: 'NFT Meme Marketplace - Develop an NFT marketplace on BSC/Matic that allows anyone to easily build a meme, use as nft, share on social media, bid, buy and view and even respond with NFT comments.'},
        {id: '10', title: 'Gaming Utility Token - PlutoPepe ($1000 in $PLUTO)', description: 'This goes to the team that can implement a smart contract game; ex; CoinFlip, Predictions, Roulette, Dice, that pays out rewards in $PEPE token'},
    ],
    stellar: [
        {id: '1', title: 'Stellar Challenge - 1st Place ($1500 in $XLM)',subTitle: '1 Winner - $1,500 cash value', description: 'The way the global financial establishment is structured today, people are born into an economy just like they’re born into a political system. Stellar is a way out: it lets people participate in a worldwide, stable financial network regardless of where they live. In this challenge, your job is to build a project on the Stellar test network that solves a specific real-world problem. Examples include Uhuru Wallet, a WhatsApp-based wallet that allows for sending intra-African payments, Vibrant, a dollar-savings app for Argentines, and DSTOQ, which makes investing accessible and affordable for people in emerging markets.'},
        {id: '2', title: 'Stellar Challenge - 2nd Place ($1000 in $XLM)',subTitle: '1 Winner - $1,000 cash value', description: 'In this challenge, your job is to build a project on the Stellar test network that solves a specific real-world problem. Examples include Uhuru Wallet, a WhatsApp-based wallet that allows for sending intra-African payments, Vibrant, a dollar-savings app for Argentines, and DSTOQ, which makes investing accessible and affordable for people in emerging markets.'},
        {id: '3', title: 'Stellar Challenge - 3rd Place ($500 in $XLM)',subTitle: '1 Winner - $500 cash value', description: 'In this challenge, your job is to build a project on the Stellar test network that solves a specific real-world problem. Examples include Uhuru Wallet, a WhatsApp-based wallet that allows for sending intra-African payments, Vibrant, a dollar-savings app for Argentines, and DSTOQ, which makes investing accessible and affordable for people in emerging markets.'},
        {id: '4', title: 'IDLE - Protocol/Strategy Integration', subTitle: 'Implementing Idle as yield sources into other protocols or build something on top of Idle \nAwarded in $2000 in IDLE ERC-20 token to the BEST project for this prize track'},
        {id: '5', title: 'IDLE - Open Track (2)', subTitle: 'Open track: an opportunity to bring innovation and develop new ideas that involve \nIdle protocol. Here’s a list of some inspirations that might help you to build projects,\n but we encourage you to experiment with more ideas: \n Flash loan case-study \n(https://developers.idle.finance/integrators/flash-loans) \n Enable automatic reinvesting of stablecoin profits into other assets (e.g. ETH,WBTC)'},
    ],
    help: [
        {id: '1', image:Help1Img , title: 'Host a Workshop'},
        {id: '2', image:Help2Img , title: 'Become a Judge'},
        {id: '3', image:Help3Img , title: 'Become a Mentor'},
        {id: '4', image:Help4Img , title: 'Do Outreach & Marketing'},
        {id: '5', image:Help5Img , title: 'Contribute Ideas'},
    ],
    faq: [
        {id: '1', title: 'What is DeFi? ', answer: 'Decentralized finance is an experimental form of finance that does not rely on central financial intermediaries such as brokerages, exchanges, or banks to offer traditional financial instruments, and instead utilizes smart contracts on blockchains, the most common being Ethereum.'},
        {id: '2', title: 'How long is DefiSummerHacks?', answer: 'All Summer. Broken up into 4 parts. The first month a series of educational events (all June), the next 1.5 months (July-midAugust) is the hackathon build, the next week a summit of leading speakers (August 16- 22), and the final week a celebration (August 23-31st)!'},
        {id: '3', title: 'Who can participate?', answer: 'Anyone is welcome to join! Defi is for everybody.'},
        {id: '4', title: 'How can I get prepared before June?', answer: 'Start by learning blockchain, smart contracts, and code reviewing the leading blockchain technologies.'},
    ],
    judges:[
        {id:'1', name: 'Shadman Hossain', position: 'Blockchain Engineer', image: 'https://avatars3.githubusercontent.com/u/34666977?type=normal&v=4'},
        {id:'2', name: 'Roshaan Khan', position: 'Product/ Strategy @Block-One', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/412/930/datas/large.png'},
        {id:'3', name: 'Mona El Isa', position: 'Founder of Enzyme Finance', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/490/800/datas/large.png'},
        {id:'4', name: 'Robin Roy Thomas', position: 'Content Writer, Ethereum Push, Notification Services', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/496/434/datas/large.png'},
        {id:'5', name: 'Kirill Kazakov', position: 'Senior DevOps Engineer', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/526/680/datas/large.png'},
        {id:'6', name: 'Alexander Makeev', position: 'Software Engineer @ Arcadia', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/526/681/datas/large.png'},
        {id:'7', name: 'Taras Baranyuk', position: 'Senior Data Scientist @Bideose', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/526/682/datas/large.png'},
        {id:'8', name: 'David Medvedik', position: 'Principal Software Engineer', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/552/702/datas/large.png'},
        {id:'9', name: 'Aliaksandr Shulyak', position: 'Senior SRE', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/553/153/datas/large.png'},
        {id:'10', name: 'Aleksandr Zakharov', position: 'Software Engineer at Recall Masters, Inc', image: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/judge_photos/001/553/200/datas/large.png'},
    ],
    sponsors:[
        {id: '1', image: Stellar, link: 'https://www.stellar.org/foundation'},
        {id: '2', image: Mpa, link: 'https://minorityprogrammers.com/'},
        {id: '3', image: Mtt, link: 'https://minorityprogrammers.com/'},
        {id: '4', image: Pluto, link: 'https://www.plutopepe.com/'},
        {id: '9', image: Idle, link: 'https://idle.finance/'},
        {id: '5', image: Enzyme, link: 'https://enzyme.finance//'},
        {id: '6', image: Saint, link: 'https://saintgits.org/'},
        {id: '7', image: Echelon, link: 'https://www.echelondigital.com/'},
        {id: '8', image: Blockchain, link: 'https://www.blockchainacceleration.org/'},
    ],
    socials:[
        {id: '1', image: Second, link: "https://www.reddit.com/r/defisummer"},
        {id: '2', image: Twitter,link: 'https://twitter.com/DefiSummer'},
    ],
    tableData: [
        {id: '1', row1Title: 'Quality of Features', row1Desc: 'Are your features meaningful and add to the overall quality of the product?', row2Title: 'Accesibility', row2Desc:'Will your solution work in places with no access to financial systems? Mobile', row3Title:'UX Design', row3Desc:'Does your UX Design consider a wide variety of applications?'},
        {id: '2', row1Title: 'Comprehensive Project', row1Desc: 'Does your solution have comprehensive feature or does it look like you just put something together?',row1Desc2: 'Did you tackle multiple proniems at once concering decentralized finance?',row2Title:'Effectiveness' ,row2Desc:'Does it actually solve a problem converning decentralized finance?',row3Title:'Code Cleanliness',row3Desc:'is your code easy to understand?'},
        {id: '3', row1Title: 'Efficiency', row1Desc: 'is your code efficient? Do you use an efficient algorithm? Do your plugins and APIs run smoothly',row2Title:'Portability and Usability',row2Desc:'is your code easy to run and works on multiple systems?',row3Title:'Originality of Work',row3Desc:'is your idea novel? Do you not plagiarize and property credit others for their contribution?'}
    ],
    events: [
        {id: '1', name: 'Learn', events: learn},
        {id: '2', name: 'Hack', events: hack},
        {id: '3', name: 'Build', events: build},
    ]
}