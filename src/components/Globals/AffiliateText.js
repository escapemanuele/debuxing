import React from 'react';
import styled from 'styled-components'
import {styles} from '../../utils'
import { FaArrowDown } from 'react-icons/fa'

const AffiliateText = (link) => (
  <AffiliateWrapper>
    <a href="https://www.siteground.com/go/debuxing">
      <p>
        Ready to host your new project?<br/>
      </p>
      <div className="affiliate_link" href="https://www.siteground.com/go/debuxing">
        <FaArrowDown />
        <p>SITEGROUND</p>
      </div>
    </a>
  </AffiliateWrapper>
);

const AffiliateWrapper = styled.div`

  text-align: center;
  margin-bottom: 1.2rem;
  margin-top:1.2rem;
  
  width: 80vw;
  
  margin-left: auto;
  margin-right: auto;
  color: ${styles.colors.mainBlack};
  ${styles.border({color: `${styles.colors.mainBlue}`})};

  a {
    display: block;
    width: 100%;
    padding:0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    ${styles.transDefault};

    &:hover {
      background: ${styles.colors.mainBlue};

      .affiliate_link {
        color: ${styles.colors.mainWhite};
        font-size: 1.8rem;
      }
    }
  }

  .affiliate_link {
    display: block;
    align-items: center;
    font-weight: 900;
    font-size: 1.6rem;
    color: ${styles.colors.mainBlue};
    ${styles.transDefault};
  }

   @media(min-width: ${styles.size.tablet}) {
      width: 40vw;
   }

`

export default AffiliateText;