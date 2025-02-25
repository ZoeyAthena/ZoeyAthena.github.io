import React from 'react';
import { Flex } from 'rebass';

import StandardHeader from '../../components/StandardHeader';
import MlgFrog from '../../components/MlgFrog';
import Sanik from '../../components/Sanik';
import useCounter from '../../hooks/useCounter';
import MemesFolder from './MemesFolder';

import * as Styled from './styles';

const myPostId = "CgZSrvxOaC0";

function MemesPage() {
  const counter = useCounter();

  return (
    <React.Fragment>
      <StandardHeader title="Zoey's Website of Dank Memes" />
      <div className="content-body">
        <p>You can drag these memes (and their folders) around!</p>
        <p>To click on a post instead of dragging it, please double-click instead.</p>
        <p>Click on the left bar of a folder to put all of the memes back inside it.</p>
        <p>This is just a proof-of-concept for now; more memes coming eventually! Also some UI improvements, eventually...</p>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Even more memes
        </a>
        <MlgFrog />
      </div>
      <Flex flex={1} flexDirection="row" flexWrap="wrap">
        <Styled.FolderWrapper>
          <MemesFolder
            memeIds={[myPostId, myPostId]}
            counter={counter}
          />
        </Styled.FolderWrapper>
        <Styled.FolderWrapper>
          <MemesFolder
            memeIds={[myPostId]}
            counter={counter}
          />
        </Styled.FolderWrapper>
      </Flex>
      <Styled.Spacer height="69px" />
      <Sanik />
    </React.Fragment>
  );
}

export default MemesPage;
