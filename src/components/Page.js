import Header from "./Header";
import Main from "./Main";

const Page = ({page}) => {
return <div>
    <Header title={page.pageTitle}/>
    <Main pageBody={page.pageBody}/>
    </div>
};

export default Page;

