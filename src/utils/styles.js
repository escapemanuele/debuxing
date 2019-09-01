export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#1c1c1c`,
  mainYellow: `#d2aa5c`,
  mainYellow2: `#F2AF29`,
  mainGrey: `#474747`,
  mainBlue: `#1a9cfc`
}

export const shadows = {
  lightShadow: `4px 10px 6px 0px rgba(0, 0, 0, 0.5)`,
  darkShadow: `8px 20px 10px 0px rgba(0, 0, 0, 0.5)`
}

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}
export const textSlanted = `font-family:'Open Sans', sans-serif;`

export const transDefault = 'transition:all 0.5s ease-in-out'
export const transFunction = (
  property = 'all',
  time = '0.5s',
  type = 'linear'
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}
