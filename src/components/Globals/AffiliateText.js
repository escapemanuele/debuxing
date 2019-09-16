import React from 'react';
import styled from 'styled-components'
import {styles} from '../../utils'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'

const AffiliateText = (link) => (
  <AffiliateWrapper>
    <p>
      Ready to host your new project?<br/>
    </p>
    <FaArrowRight className="arrow-right" />
    <FaArrowDown className="arrow-down" />
    <a className="affiliate_link" href="https://www.siteground.com/go/debuxing">
      SITEGROUND
    </a>
  </AffiliateWrapper>
);

const AffiliateWrapper = styled.div`

  display: block;
  text-align: center;
  margin-bottom: 1.2rem;
  margin-top:1.2rem;
  padding: 0.8rem;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  color: ${styles.colors.mainBlack};
  ${styles.border({color:`${styles.colors.mainBlue}`})};

  .arrow-right {
    visibility: hidden;
    display: none;
  }
  .arrow-down {
    visibility: visible;
  }

  .affiliate_link {
    display: block;
    font-weight: 900;
    font-size: 1.2rem;
    color: ${styles.colors.mainBlue};
  }

   @media(min-width: ${styles.size.tablet}) {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .arrow-down {
    visibility: hidden;
    }
    .arrow-right {
      visibility: visible;
      display: inline-block;
    }

   }

`

export default AffiliateText;