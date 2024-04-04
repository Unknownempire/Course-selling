import React, { useState } from 'react';
import { Box, Container, Divider, Typography, Stack, Pagination, Card, Tab } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../config';


export default function BlockChainContent() {
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    }

    const renderComponent = () => {
        switch (currentPage) {
            case 1:
                return <Page1 />;
            case 2:
                return <Page2 />;
            case 3:
                return <Page3 />;
            case 4:
                return <Page4 />;

            default:
                return null;
        }
    };

    return (
        <div style={{
            margin: '0',
            padding: '0',
            // border:'2px solid green',
            maxWidth: '100vw',
            display: 'flex'
        }}>
            <Container fixed maxWidth='xl' sx={{
                // border:"2px solid purple",
                width: '70%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    padding: "1rem",
                    width: '70%',
                    // border:'2px solid red',
                    // display:'flex',
                    // flexDirection:'column',
                    // justifyContent:'center',
                }}>
                    {renderComponent()}
                </Box>
                {/* <Stack spacing={2} sx={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                padding: '1rem',
                marginTop:'2rem',
                border:'2px solid yellow'

            }}> */}
                <Pagination count={4} color='primary' shape="rounded" page={currentPage} onChange={handleChange} style={{
                    position: 'fixed',
                    bottom: '0.5rem',
                    backdropFilter: 'blur(2px)',
                    padding: '3px',
                    // border: '2px solid yellow',
                }} />
                {/* </Stack> */}

            </Container>
            <div style={{
                position: 'fixed',
                right: '1rem',
            }}>
                <ContentTable setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
};

function Page1() {
    return (
        <>
            <Card sx={{
                padding: '1rem'
            }}>
                <Typography variant="h5" paragraph="true" sx={{
                    fontStyle: 'italic',
                    // color:'#1565c0',
                    color: '#1b86ff'
                }}>Blockchain technology is one of our time’s most talked-about and revolutionary technologies. It’s the backbone of cryptocurrencies like Bitcoin and Ethereum, but it has the potential to change so much more. Using Blockchain, financial institutions can save up to $12 billion annually. But what exactly is Blockchain, and how does it work? This article will give you the comprehensive guide to Blockchain technology that you need. Let’s get started!
                </Typography>
                <Divider />
                <Typography variant="h4" paragraph="true">What is Blockchain? Definition & Meaning</Typography>
                <Typography paragraph="true">Imagine a digital ledger that records transactions. But it is not stored in one central location. Instead, it’s spread out across a network of computers. This means that the information stored on the ledger is decentralized and can’t be controlled by any single entity. This decentralized digital ledger is known as Blockchain.
                </Typography>
                <Typography variant='h4' paragraph="true">Blockchain Definition for Kids</Typography>
                <Typography paragraph='true'>Imagine you and your friends have a secret club. Now, you want to keep track of all the fun things you do together. You could use a regular notebook to write it all down, but what if one of your friends loses it or someone else finds it and changes what’s written? That’s where Blockchain comes in! It’s like a special notebook that you can all write in, but once something is written, it can’t be erased or changed. And, instead of keeping it in one place, it’s kept in many different places, so all your friends can see what’s written. It’s like a secret club diary that everyone can see and trust!
                </Typography>
                <Typography variant='h4' paragraph="true">Blockchain Definition for Beginners</Typography>
                <Typography paragraph='true'>A Blockchain is a distributed ledger. It records transactions on numerous computers all over the world. These are registered in a way that prevents further change of them. Blockchain development is the process of building a shared, immutable distributed ledger technology (DLT) that safely records transactions and tracks assets inside a network, whether those assets are actual, like money or real estate, or nonphysical, like copyrights.
                </Typography>
                <Divider />
                <Typography variant='h4' paragraph="true">History of BlockChain</Typography>
                <Typography paragraph='true'>W. Scott Stornetta and Stuart Haber, two research experts, made the first public disclosure of Blockchain technology. In 1991, they started working on a cryptographically secure chain of blocks that would prevent tampering with document timestamps. The system was modified in 1992 to include Merkle trees, which increased performance and allowed for the accumulation of more documents on a single block.
                    In order to establish a “secured chain of blocks,” Merkle Trees are utilized. It kept a number of data records, each of which was linked to the one before it. This chain’s most recent record includes the chain’s history. The patent for this technology expired in 2004 since it was never used.
                    Also Read: Merkle Trees Vs. Verkle Trees: All You Need To Know
                    Reusable Proof of Work, a cryptocurrency mechanism, was introduced by crypto campaigner Hal Finney in 2004. This action changed the course of Blockchain technology and cryptography as a whole. By maintaining token ownership registered on a reliable server, this system aids others in solving the Double Spending Problem.
                    Additionally, Satoshi Nakamoto developed the principle of distributed Blockchains in 2008. He makes a special improvement to the design that makes it possible to add blocks to the initial chain without needing them to be signed by reliable parties. The updated trees would include a safe record of data transfers. In 2009, Satoshi Nakamoto published the first whitepaper on the subject. He explained in the whitepaper how the decentralized feature of the technology meant that nobody would ever be in charge of anything and that it was, therefore, well suited to enhancing digital trust.

                </Typography>
            </Card>
        </>
    )

}

function Page2() {
    return (
        <>
            <Card sx={{
                padding: '1rem'
            }}>
                <Typography variant="h5" paragraph="true">BlockChain Technology Real-Life Use Cases
                </Typography>
                <Box sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    // border: '2px solid blue',
                    // borderRadius:'7px',
                }}>
                    <Accordion sx={{
                        marginBottom: '4px',
                        // border: '1px solid blue',
                        border: '1px solid #1565c0',
                        borderRadius: '6px',
                    }}>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>Supply Chain Management</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Supply chains are becoming more transparent and traceable thanks to Blockchain technology. Walmart Canada, for instance, used Blockchain to develop an automated system for controlling payments to and invoices from its 70 third-party freight providers. The company currently uses a Blockchain-based system to track the origin of over 25 products from 5 different suppliers. This aids the business in ensuring food safety and enhancing client confidence.</Typography>
                        </AccordionDetails>
                    </Accordion >
                    <Accordion sx={{
                        marginBottom: '4px',
                        border: '1px solid #1565c0',
                        borderRadius: '6px',
                    }}>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>Banking and Finance</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Supply chains are becoming more transparent and traceable thanks to Blockchain technology. Walmart Canada, for instance, used Blockchain to develop an automated system for controlling payments to and invoices from its 70 third-party freight providers. The company currently uses a Blockchain-based system to track the origin of over 25 products from 5 different suppliers. This aids the business in ensuring food safety and enhancing client confidence.</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        border: '1px solid #1565c0',
                        borderRadius: '6px',
                    }}>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>Music Industry</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Supply chains are becoming more transparent and traceable thanks to Blockchain technology. Walmart Canada, for instance, used Blockchain to develop an automated system for controlling payments to and invoices from its 70 third-party freight providers. The company currently uses a Blockchain-based system to track the origin of over 25 products from 5 different suppliers. This aids the business in ensuring food safety and enhancing client confidence.</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Divider />
                <Typography variant="h4" paragraph="true" sx={{
                    fontWeight: '630'
                }}>Types of BlockChain
                </Typography>
                <Typography variant="h5" paragraph="true">Public BlockChain</Typography>
                <Typography paragraph="true">A distributed ledger system without restrictions, and permissions is known as a public Blockchain. It makes the system transparent and trustless by allowing anybody to join the network and validate transactions. Such Blockchains are primarily used for cryptocurrency exchange and mining. The Bitcoin Blockchain, the most well-known example of a public Blockchain, uses a proof-of-work consensus process to confirm transactions and add them to the Blockchain.
                </Typography>
                <Typography variant='h5' paragraph="true">Consortium Blockchain</Typography>
                <Typography paragraph='true'>A private Blockchain that is owned and run by a number of different companies is referred to as a consortium Blockchain, sometimes known as a federated Blockchain. In this type, more than one organization is involved in providing access to pre-selected nodes for reading, writing, and auditing the Blockchain, or we might say that more than one central authority is in control. The creation of a consortium Blockchain aims to make it easier for a collection of complementary Blockchains to work together. A particular kind of semi-decentralized network is a consortium Blockchain. An example of a consortium Blockchain is IBM Food Trust.
                </Typography>
                <Typography variant='h5' paragraph="true">Hybrid Blockchain</Typography>
                <Typography >
                    The term “hybrid Blockchain” is frequently used to describe a system that combines both public and private Blockchains. It combines key elements from both private and public Blockchains. Blockchain hybrid architecture is completely programmable. Members of the hybrid Blockchain can determine which transactions are made public and who is allowed to use the Blockchain. In such Blockchains, transactions can be made public for verification purposes but are often not made accessible to everyone. One of the initiatives that use both public and private Blockchains is XDC.
                </Typography>
            </Card>
        </>
    )

}
function Page3() {
    return (
        <div>
            <Card sx={{
                padding: '1rem'
            }}>
                <Typography variant="h4" paragraph="true">How to Build a Blockchain?
                </Typography>
                <Typography paragraph="true">Building a Blockchain requires an in-depth understanding of the programming languages & libraries required to develop protocols and smart contracts. Some languages like python, js, and node are prerequisites to becoming a full-stack Blockchain developer before starting any course or certification in the market. Blockchain Council courses cover all of that for beginners. For instance, Check this python code for creating a basic Blockchain:
                </Typography>
                <Card sx={{
                    width: 'fit-content',
                    margin: '1rem',
                    border: '0.5px solid #1565c0',
                }}>
                    <pre className="code-block" style={{
                        padding: '1rem',
                    }}>
                        <code>
                            import hashlib{"\n"}
                            import json{"\n\n"}
                            class Block:{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, index, timestamp, data, previous_hash):{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;self.index = index{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;self.timestamp = timestamp{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;self.data = data{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;self.previous_hash = previous_hash{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;self.hash = self.hash_block(){"\n"}

                            def hash_block(self):{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;sha = hashlib.sha256(){"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;sha.update(str(self.index) +{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;str(self.timestamp) +{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;str(self.data) +{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;str(self.previous_hash)){"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;return sha.hexdigest(){"\n\n"}

                            class Blockchain:{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self):{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.chain = [self.create_genesis_block()]{"\n\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;def create_genesis_block(self):{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return Block(0, "01/01/2018", "Genesis Block", "0"){"\n\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;def get_latest_block(self):{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self.chain[-1]{"\n\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;def add_block(self, new_block):{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_block.previous_hash = self.get_latest_block().hash{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_block.hash = new_block.hash_block(){"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.chain.append(new_block){"\n\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;def is_chain_valid(self):{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for i in range(1, len(self.chain)):

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_block = self.chain[i]{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;previous_block = self.chain[i-1]{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if current_block.hash != current_block.hash_block():{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if current_block.previous_hash != previous_block.hash:{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return True{"\n\n"}

                            blockchain = Blockchain(){"\n"}
                            blockchain.add_block(Block(1, "20/07/2022", &#123;"amount": 4 &#125;)){"\n"}
                            blockchain.add_block(Block(2, "20/07/2022", &#123;"amount": 8 &#125;)){"\n\n"}

                            print(json.dumps(blockchain.__dict__, indent=4)){"\n"}
                            print("Is blockchain valid? " + str(blockchain.is_chain_valid())){"\n"}

                        </code>
                    </pre>

                </Card>
                <Card sx={{
                    width: 'fit-content',
                    margin: '1rem',
                    border: '0.5px solid #1565c0'
                }}>
                    <pre className="code-block" style={{
                        padding: '1rem',
                    }}>
                        <code>
                            pragma solidity ^0.8.0;{"\n\n"}
                            contract DAO {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;address public owner;{"\n"}
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;mapping(address => bool) public members;{"\n"} */}
                            &nbsp;&nbsp;&nbsp;&nbsp;event MemberAdded(address member);{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;event MemberRemoved(address member);{"\n\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;constructor() public {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;owner = msg.sender;{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;function addMember(address member) public {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;require(msg.sender == owner, "Only owner can add members.");{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;members[member] = true;{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emit MemberAdded(member);{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;function removeMember(address member) public {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;require(msg.sender == owner, "Only owner can remove members.");{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delete members[member];{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emit MemberRemoved(member);{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"\n"}

                            &nbsp;&nbsp;&nbsp;&nbsp;function isMember(address member) public view returns (bool) {"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return members[member];{"\n"}
                            &nbsp;&nbsp;&nbsp;&nbsp;{"\n"}
                            {"}"}
                        </code>
                    </pre>

                </Card>
                <Typography paragraph='true'>These codes are just for understanding how different creating a smart contract on Solidity is from other famous programming language. Blockchain Council’s Interactive-Live Training help you understand and develop these skills with live trainers & provides networking opportunities with like-minded people. Click here to learn more.
                </Typography>
            </Card>
        </div>
    );

}
function Page4() {
    return (
        <>
            <Card sx={{
                padding: '1rem'
            }}>
                <Typography variant="h4" paragraph="true">BlockChain Future
                </Typography>
                <Typography paragraph="true">The Blockchain industry will be worth $163.83 billion by 2029. It is expected to come with a compound annual growth rate of 56.3%. So we can say the future of Blockchain is looking pretty exciting! With the technology still in its early stages, there are a lot of possibilities for where it could go.
                </Typography>
                <Typography variant='h4' paragraph="true">Future Possibilties
                </Typography>
                <Typography paragraph="true">Bitcoin and other cryptocurrencies are inextricably linked to Blockchain technology. Cryptocurrency alone will not be enough to propel Blockchain to its full potential. Blockchain, in addition to providing a foundation for immutable ledgers, has several marketable career opportunities. Any industry or organization that is involved in the recording and oversight of any type of transaction stands to benefit from shifting its operations to a Blockchain-based platform.</Typography>
                <Typography paragraph="true">Imagine you and your friends have a secret club. Now, you want to keep track of all the fun things you do together. You could use a regular notebook to write it all down, but what if one of your friends loses it or someone else finds it and changes what’s written? That’s where Blockchain comes in! It’s like a special notebook that you can all write in, but once something is written, it can’t be erased or changed. And, instead of keeping it in one place, it’s kept in many different places, so all your friends can see what’s written. It’s like a secret club diary that everyone can see and trust!
                </Typography>
                <Divider />
                <Typography variant='h4'>Conclusion</Typography>
                <Typography paragraph='true'>Since its inception in 2008, Blockchain technology has come a long way. It has evolved from a simple solution for digital currency transactions to a powerful tool with the potential to disrupt industries and change the way we live, work, and conduct business. However, the journey is still ongoing as we continue to test the limits of what Blockchain can do. The potential of this technology is limitless, from improving supply chain management to revolutionizing the way we think about digital identity. Overall, Blockchain technology is a game-changer that has the potential to shape the future in ways we can’t even imagine. It’s an exciting time to be a part of this emerging industry, and we can’t wait to see what the future holds for Blockchain.
                </Typography>
            </Card>
        </>
    )

}

function ContentTable({ setCurrentPage }) {
    const navigate = useNavigate();
    return (
        <div>
            <aside>
                <Container fixed maxWidth="md">
                    <Card sx={{
                        padding: '1rem',
                    }}>
                        <Typography variant='h5' sx={{
                            marginBottom: '1rem',
                            textDecoration: 'underline'
                        }} >Table of Content</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(1)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Definition</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(2)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Examples</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(3)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Code</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={() => setCurrentPage(4)}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Future</Typography>
                        <Typography paragraph='true' sx={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            borderRadius: '0.2rem',
                            paddingLeft: '0.3rem',
                        }} onClick={async() => {
                                const result = window.confirm('Do you want to attempt the test');
                                const courseId = localStorage.getItem('courseid')
                                if (result === true) {
                                    const response = await axios.get(`${BASE_URL}/user/learn/Test/` + String(courseId),
                                    {
                                        headers: {
                                            "Content-type": "application/json",
                                            "Authorization": "Bearer " + localStorage.getItem("token")
                                        }

                                    })
                                    if (response.data.attempts === 0) {
                                        navigate("Test");
                                    } else {
                                        alert("Test already Attempted");
                                        navigate("/repayment/" + courseId);
                                    }
                                } 
                                // if (result === true) {
                                //     const courseId = localStorage.getItem('courseid');
                                //     const resAttempt = await axios.get(`${BASE_URL}/user/learn/${courseId}/attempt`, {
                                //         headers: {
                                //             Authorization: `Bearer ${localStorage.getItem('token')}`
                                //         }
                                //     });

                                //     if (resAttempt.data.attemptNumber > 0) {
                                //         alert("Test already attempted..Pay to attempt again");
                                //     } else {
                                //         navigate("Test");
                                //     }
                                // }
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(86, 153, 219)';
                                e.target.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '';
                                e.target.style.boxShadow = '';
                            }}
                        >Test</Typography>
                    </Card>
                </Container>
            </aside>
        </div>
    );
}