import Pages from "../pages"

const PageObj = {
  Home: Pages.Home,
  About: Pages.About,
  Resume: Pages.Resume,
  Projects: Pages.Projects,
  Blog: Pages.Blog
}

function PageContainer(props){

  const {pageView, titles, name} = props;

  const CurrPage = PageObj[pageView];

  if (CurrPage){
    return <CurrPage titles={titles} name={name} />;
  }
    return null;
  }

export default PageContainer;