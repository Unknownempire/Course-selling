import React, { useState } from 'react';
import { Box, Container, Divider, Typography, Stack, Pagination} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


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
        // <Container maxWidth="xl">
        <Box sx={{
            padding: "1rem",
        }}>
            {renderComponent()};
            {/* <Page1 /> */}
            <Stack spacing={2} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: '1rem',
            }}>
                <Pagination count={4} color='primary' shape="rounded" page={currentPage} onChange={handleChange} />
            </Stack>
        </Box>
        // </Container>
    );
};

function Page1() {
    return (
        <>
            <Typography variant="h5" paragraph="true">Blockchain technology is one of our time’s most talked-about and revolutionary technologies. It’s the backbone of cryptocurrencies like Bitcoin and Ethereum, but it has the potential to change so much more. Using Blockchain, financial institutions can save up to $12 billion annually. But what exactly is Blockchain, and how does it work? This article will give you the comprehensive guide to Blockchain technology that you need. Let’s get started!
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

        </>
    )

}

function Page2() {
    return (
        <>
            <Typography variant="h5" paragraph="true">BlockChain Technology Real-Life Use Cases
            </Typography>
            <Box sx={{
                paddingTop:"1rem",
                paddingBottom:"1rem",
            }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon=""
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>Supply Chain Management</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Supply chains are becoming more transparent and traceable thanks to Blockchain technology. Walmart Canada, for instance, used Blockchain to develop an automated system for controlling payments to and invoices from its 70 third-party freight providers. The company currently uses a Blockchain-based system to track the origin of over 25 products from 5 different suppliers. This aids the business in ensuring food safety and enhancing client confidence.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
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
                <Accordion>
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
            <Typography variant="h5" paragraph="true">Types of BlockChain
            </Typography>
            <Divider />
            <Typography variant="h4" paragraph="true">What is Blockchain? Definition & Meaning</Typography>
            <Typography paragraph="true">Imagine a digital ledger that records transactions. But it is not stored in one central location. Instead, it’s spread out across a network of computers. This means that the information stored on the ledger is decentralized and can’t be controlled by any single entity. This decentralized digital ledger is known as Blockchain.
            </Typography>
            <Typography variant='h4' paragraph="true">Blockchain Definition for Kids</Typography>
            <Typography  >Imagine you and your friends have a secret club. Now, you want to keep track of all the fun things you do together. You could use a regular notebook to write it all down, but what if one of your friends loses it or someone else finds it and changes what’s written? That’s where Blockchain comes in! It’s like a special notebook that you can all write in, but once something is written, it can’t be erased or changed. And, instead of keeping it in one place, it’s kept in many different places, so all your friends can see what’s written. It’s like a secret club diary that everyone can see and trust!
            </Typography>
            <Typography variant='h4' paragraph="true">Blockchain Definition for Beginners</Typography>
            <Typography  >A Blockchain is a distributed ledger. It records transactions on numerous computers all over the world. These are registered in a way that prevents further change of them. Blockchain development is the process of building a shared, immutable distributed ledger technology (DLT) that safely records transactions and tracks assets inside a network, whether those assets are actual, like money or real estate, or nonphysical, like copyrights.
            </Typography>
        </>
    )

}
function Page3() {
    return (
        <>
            <Typography variant="h5" paragraph="true">Blockchain technology is one of our time’s most talked-about and revolutionary technologies. It’s the backbone of cryptocurrencies like Bitcoin and Ethereum, but it has the potential to change so much more. Using Blockchain, financial institutions can save up to $12 billion annually. But what exactly is Blockchain, and how does it work? This article will give you the comprehensive guide to Blockchain technology that you need. Let’s get started!
            </Typography>
            <Divider />
            <Typography variant="h4" paragraph="true">What is Blockchain? Definition & Meaning</Typography>
            <Typography paragraph="true">Imagine a digital ledger that records transactions. But it is not stored in one central location. Instead, it’s spread out across a network of computers. This means that the information stored on the ledger is decentralized and can’t be controlled by any single entity. This decentralized digital ledger is known as Blockchain.
            </Typography>
            <Typography variant='h4' paragraph="true">Blockchain Definition for Kids</Typography>
            <Typography  >Imagine you and your friends have a secret club. Now, you want to keep track of all the fun things you do together. You could use a regular notebook to write it all down, but what if one of your friends loses it or someone else finds it and changes what’s written? That’s where Blockchain comes in! It’s like a special notebook that you can all write in, but once something is written, it can’t be erased or changed. And, instead of keeping it in one place, it’s kept in many different places, so all your friends can see what’s written. It’s like a secret club diary that everyone can see and trust!
            </Typography>
            <Typography variant='h4' paragraph="true">Blockchain Definition for Beginners</Typography>
            <Typography  >A Blockchain is a distributed ledger. It records transactions on numerous computers all over the world. These are registered in a way that prevents further change of them. Blockchain development is the process of building a shared, immutable distributed ledger technology (DLT) that safely records transactions and tracks assets inside a network, whether those assets are actual, like money or real estate, or nonphysical, like copyrights.
            </Typography>
        </>
    )

}
function Page4() {
    return (
        <>
            <Typography variant="h5" paragraph="true">Blockchain technology is one of our time’s most talked-about and revolutionary technologies. It’s the backbone of cryptocurrencies like Bitcoin and Ethereum, but it has the potential to change so much more. Using Blockchain, financial institutions can save up to $12 billion annually. But what exactly is Blockchain, and how does it work? This article will give you the comprehensive guide to Blockchain technology that you need. Let’s get started!
            </Typography>
            <Divider />
            <Typography variant="h4" paragraph="true">What is Blockchain? Definition & Meaning</Typography>
            <Typography paragraph="true">Imagine a digital ledger that records transactions. But it is not stored in one central location. Instead, it’s spread out across a network of computers. This means that the information stored on the ledger is decentralized and can’t be controlled by any single entity. This decentralized digital ledger is known as Blockchain.
            </Typography>
            <Typography variant='h4' paragraph="true">Blockchain Definition for Kids</Typography>
            <Typography  >Imagine you and your friends have a secret club. Now, you want to keep track of all the fun things you do together. You could use a regular notebook to write it all down, but what if one of your friends loses it or someone else finds it and changes what’s written? That’s where Blockchain comes in! It’s like a special notebook that you can all write in, but once something is written, it can’t be erased or changed. And, instead of keeping it in one place, it’s kept in many different places, so all your friends can see what’s written. It’s like a secret club diary that everyone can see and trust!
            </Typography>
            <Typography variant='h4' paragraph="true">Blockchain Definition for Beginners</Typography>
            <Typography  >A Blockchain is a distributed ledger. It records transactions on numerous computers all over the world. These are registered in a way that prevents further change of them. Blockchain development is the process of building a shared, immutable distributed ledger technology (DLT) that safely records transactions and tracks assets inside a network, whether those assets are actual, like money or real estate, or nonphysical, like copyrights.
            </Typography>
        </>
    )

}