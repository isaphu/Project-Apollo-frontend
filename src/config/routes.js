//PivatePages
import AddingShipper from '../components/pages/PrivatePages/AddingShipper';
import CreateUser from '../components/pages/PrivatePages/CreateUser';
import DeleteAllData from '../components/pages/PrivatePages/DeleteAllData';
import ResetPassword from '../components/pages/PrivatePages/ResetPassword';
import Tools from '../components/pages/PrivatePages/Tools';
import UserList from '../components/pages/PrivatePages/UserList';
import About from '../components/pages/PrivatePages/About';
import AddingCompanyDetails from '../components/pages/PrivatePages/AddingCompanyDetails';
import AddingProductDetails from '../components/pages/PrivatePages/AddingProductDetails';
import AddingProductUom from '../components/pages/PrivatePages/AddingProductUom';
import ContactUs from '../components/pages/PrivatePages/ContactUs';
import Entry from '../components/pages/PrivatePages/Entry';
import ExportEntry from '../components/pages/PrivatePages/ExportEntry';
import Help from '../components/pages/PrivatePages/Help';
import ImportEntry from '../components/pages/PrivatePages/ImportEntry';
import Product from '../components/pages/PrivatePages/Product';

//PublicPages
import Login from '../components/pages/PublicPages/Login';

const components = {

    //PrivatePages

    addingShipper: {
        url: '/addingShipper',
        component: AddingShipper
    },
    createUser: {
        url: '/createUser',
        component: CreateUser
    },
    deleteAllData: {
        url: '/deleteAllData',
        component: DeleteAllData
    },
    resetPassword: {
        url: '/resetPassword',
        component: ResetPassword
    },
    toolsPage: {
        url: '/toolsPage',
        component: Tools
    },
    userList: {
        url: '/userList',
        component: UserList
    },
  

    //PublicPage

    about: {
        url: '/about',
        component: About
    },
    addingCompanyDetails: {
        url: '/addingCompanyDetails',
        component: AddingCompanyDetails
    },
    addingProductDetails: {
        url: '/addingProductDetails',
        component: AddingProductDetails
    },
    addingProductUom: {
        url: '/addingProductUom',
        component: AddingProductUom
    },
    contactUs: {
        url: '/contactUs',
        component: ContactUs
    },
    entry: {
        url: '/entry',
        component: Entry
    },
    exportEntry: {
        url: '/exportEntry',
        component: ExportEntry
    },
    help: {
        url: '/help',
        component: Help
    },
    importEntry: {
        url: '/importEntry',
        component: ImportEntry
    },
    login: {
        url: '/login',
        component: Login
    },
    
    product: {
        url: '/product',
        component: Product
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

