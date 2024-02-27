import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlockChainContent } from '../../Courses-components/BlockChain/BlockChainContent';

function BlockChainRoutes() {
    return (
        <Route path={"/course/BlockChainBeginner"} element={<BlockChainContent />} />
    );
}

export default BlockChainRoutes;