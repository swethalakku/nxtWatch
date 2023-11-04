import {
  NotFoundContainer,
  NotFoundCard,
  LeftSection,
  RightSection,
  Image,
  Heading,
  Description,
} from './styledComponents'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import SideBar from '../SideBar'

const NotFound = () => (
  <NxtWatchContext>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <NotFoundContainer bgColor={backgroundColor}>
          <Header />
          <NotFoundCard>
            <LeftSection bgColor={backgroundColor}>
              <SideBar />
            </LeftSection>
            <RightSection>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <Heading color={textColor}>Page Not Found</Heading>
              <Description>
                We are sorry, the page you requested could not be found.
              </Description>
            </RightSection>
          </NotFoundCard>
        </NotFoundContainer>
      )
    }}
  </NxtWatchContext>
)

export default NotFound
