import React from 'react';
import styled from 'styled-components'
import {styles} from '../../utils'
import { FaArrowDown } from 'react-icons/fa'

const AffiliateText = (link) => (
  <AffiliateWrapper>
    <a title="We recommend SiteGround for your hosting"  href="https://www.siteground.com/go/debuxing">
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
  
  ${styles.border({color: `${styles.colors.mainBlack}`})};
  background: ${styles.colors.mainBlue};

  a {
    display: block;
    width: 100%;
    padding:0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    ${styles.transDefault};
    color: ${styles.colors.mainWhite};

    &:hover {
      background: ${styles.colors.mainWhite};
      color: ${styles.colors.mainBlack};

      .affiliate_link {
        color: ${styles.colors.mainBlue};
        font-size: 2.4rem;
      }
    }
  }

  .affiliate_link {
    display: block;
    align-items: center;
    font-weight: 900;
    font-size: 1.6rem;
    color: ${styles.colors.mainBlack};
    ${styles.transDefault};
    
  }

   @media(min-width: ${styles.size.tablet}) {
      width: 40vw;

      .affiliate_link {
        margin-top: 0.8rem;
      }
   }

`

export default AffiliateText;