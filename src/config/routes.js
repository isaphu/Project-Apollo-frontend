//PivatePages
import AddingShipperPage from '../components/pages/PrivatePages/AddingShipper';
import CreateUserPage from '../components/pages/PrivatePages/CreateUser';
import DeleteAllDataPage from '../components/pages/PrivatePages/DeleteAllData';
import ResetPasswordPage from '../components/pages/PrivatePages/ResetPassword';
import ToolsPage from '../components/pages/PrivatePages/Tools';
import UserListPage from '../components/pages/PrivatePages/UserList';
import AboutPage from '../components/pages/PrivatePages/About';
import AddingCompanyDetailsPage from '../components/pages/PrivatePages/AddingCompanyDetails';
import AddingProductDetailsPage from '../components/pages/PrivatePages/AddingProductDetails';
import AddingProductUomPage from '../components/pages/PrivatePages/AddingProductUom';
import ContactUsPage from '../components/pages/PrivatePages/ContactUs';
import EntryPage from '../components/pages/PrivatePages/Entry';
import ExportEntryPage from '../components/pages/PrivatePages/ExportEntry';
import HelpPage from '../components/pages/PrivatePages/Help';
import ImportEntryPage from '../components/pages/PrivatePages/ImportEntry';
import MyHomePage from '../components/pages/PrivatePages/MyHome';
import ProductPage from '../components/pages/PrivatePages/Product';

//PublicPages
import LoginPage from '../components/pages/PublicPages/Login';

const components = {

    //PrivatePages

    addingShipper: {
        url: '/addingShipper',
        component: AddingShipperPage
    },
    createUser: {
        url: '/createUser',
        component: CreateUserPage
    },
    deleteAllData: {
        url: '/deleteAllData',
        component: DeleteAllDataPage
    },
    resetPassword: {
        url: '/resetPassword',
        component: ResetPasswordPage
    },
    toolsPage: {
        url: '/toolsPage',
        component: ToolsPage
    },
    userList: {
        url: '/userList',
        component: UserListPage
    },

    //PublicPage

    about: {
        url: '/about',
        component: AboutPage
    },
    addingCompanyDetails: {
        url: '/addingCompanyDetails',
        component: AddingCompanyDetailsPage
    },
    addingProductDetails: {
        url: '/addingProductDetails',
        component: AddingProductDetailsPage
    },
    addingProductUom: {
        url: '/addingProductUom',
        component: AddingProductUomPage
    },
    contactUs: {
        url: '/contactUs',
        component: ContactUsPage
    },
    entry: {
        url: '/entry',
        component: EntryPage
    },
    exportEntry: {
        url: '/exportEntry',
        component: ExportEntryPage
    },
    help: {
        url: '/help',
        component: HelpPage
    },
    importEntry: {
        url: '/importEntry',
        component: ImportEntryPage
    },
    login: {
        url: '/login',
        component: LoginPage
    },
    myHome: {
        url: '/myHome',
        component: MyHomePage
    },
    product: {
        url: '/product',
        component: ProductPage
    },

}

export default {
    user: {
        allowedRoutes: [
            components.about,
            components.addingCompanyDetails,
            components.addingProductDetails,
            components.addingProductUom,
            components.contactUs,
            components.exportEntry,
            components.help,
            components.importEntry,
            components.login,
            components.myHome,
            components.product,
        ],
        redirectRoutes: '/login',
    },
    Admin: {
        allowedRoutes: [
            components.addingShipper,
            components.createUser,
            components.deleteAllData,
            components.resetPassword,
            components.tools,
            components.userList,
            components.login,
        ],
        redirectRoutes: '/login'
    },
}