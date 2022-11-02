import Pages from "../pages"

const PageObj = {
  home: Pages.Home,
  about: Pages.About,
  resume: Pages.Resume,
  projects: Pages.Projects,
  blog: Pages.Blog
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