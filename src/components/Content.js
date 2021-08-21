import { ContentWrapper, ContentRight, ContentLeft } from "../styles/content";

import { SideNavigation } from "./index";

const Content = ({ children }) => {
  // const { hidden } = useSelector((state) => state.navToggle);
  // useEffect(() => {}, [hidden]);
  return (
    <ContentWrapper>
      <ContentLeft>
        <SideNavigation />
      </ContentLeft>
      <ContentRight>{children}</ContentRight>
    </ContentWrapper>
  );
};

export default Content;
