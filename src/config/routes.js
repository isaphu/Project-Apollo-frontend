//PirvatePages
import AddingShipperPage from '../components/pages/PrivatePages/AddingShipper';
import CreateUserPage from '../components/pages/PrivatePages/CreateUser';
import DeleteAllDataPage from '../components/pages/PrivatePages/DeleteAllData';
import ResetPasswordPage from '../components/pages/PrivatePages/ResetPassword';
import ToolsPage from '../components/pages/PrivatePages/Tools';
import UserListPage from '../components/pages/PrivatePages/UserList';

//PublicPages
import AboutPage from '../components/pages/PublicPages/About';
import AddingCompanyDetailsPage from '../components/pages/PublicPages/AddingCompanyDetails';
import AddingProductDetailsPage from '../components/pages/PublicPages/AddingProductDetails';
import AddingProductUomPage from '../components/pages/PublicPages/AddingProductUom';
import ContactUsPage from '../components/pages/PublicPages/ContactUs';
import EntryPage from '../components/pages/PublicPages/Entry';
import ExportEntryPage from '../components/pages/PublicPages/ExportEntry';
import HelpPage from '../components/pages/PublicPages/Help';
import ImportEntryPage from '../components/pages/PublicPages/ImportEntry';
import LoginPage from '../components/pages/PublicPages/Login';
import LogoutPage from '../components/pages/PublicPages/Logout';
import MyHomePage from '../components/pages/PublicPages/MyHome';
import ProductPage from '../components/pages/PublicPages/Product';

const components = {
    
    //PrivatePages

    AddingShipperPage: {
        url: '/AddingShipperPage',
        component: AddingShipperPage
    },
    CreateUserPage: {
        url: '/CreateUserPage',
        component: CreateUserPage
    },
    DeleteAllDataPage: {
        url: '/DeleteAllDataPage',
        component: DeleteAllDataPage
    },
    ResetPasswordPage: {
        url: '/ResetPasswordPage',
        component: ResetPasswordPage
    },
    ToolsPage: {
        url: '/ToolsPage',
        component: ToolsPage
    },
    UserListPage: {
        url: '/UserListPage',
        component: UserListPage
    },

    //PublicPage

    About: {
        url: '/About',
        component: AboutPage
    },
    AddingCompanyDetails: {
        url: '/AddingCompanyDetails',
        component: AddingCompanyDetailsPage
    },
    AddingProductDetails: {
        url: '/AddingProductDetails',
        component: AddingProductDetailsPage
    },
    AddingProductUom: {
        url: '/AddingProductUom',
        component: AddingProductUomPage
    },
    ContactUs: {
        url: '/ContactUs',
        component: ContactUsPage
    },
    Entry: {
        url: '/Entry',
        component: EntryPage
    },
    ExportEntry: {
        url: '/ExportEntry',
        component: ExportEntryPage
    },
    Help: {
        url: '/Help',
        component: HelpPage
    },
    ImportEntry: {
        url: '/ImportEntry',
        component: ImportEntryPage
    },
    Login: {
        url: '/Login',
        component: LoginPage
    },
    Logout: {
        url: '/Logout',
        component: LogoutPage
    },
    MyHome: {
        url: '/MyHome',
        component: MyHomePage
    },
    Product: {
        url: '/Product',
        component: ProductPage
    },


}