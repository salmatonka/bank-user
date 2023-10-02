import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Pages/Home/Home";
import ErrorPage from "../Components/Shares/ErrorPage/ErrorPage";
import LogIn from "../Components/Pages/Forms/LogIn";
import Register from "../Components/Pages/Forms/Register";
import ContactUs from "../Components/Pages/ExtraPages/ContactUs";
import OurOffers from "../Components/Pages/ExtraPages/OurOffers";
import AccountDetails from "../Components/Pages/Details/AccountDetails";
import CardDetails from "../Components/Pages/Details/CardDetails";
import LoanDetails from "../Components/Pages/Details/LoanDetails";
import AccountsForm from "../Components/Pages/AccountsForm/AccountsForm";
import AccountDeposit from "../Components/Pages/MyUsers/MyAccount/AccountDeposit";
import AccountsProfile from "../Components/Pages/Profile/AccountsProfile";
import MoneyTransfer  from "../Components/Pages/MyUsers/MoneyTransfer/MoneyTransfer";
import CardRequest  from "../Components/Pages/Dashboard/Request/CardRequest/CardRequest";
import LoanDeposit  from "../Components/Pages/Dashboard/Request/LoanRequest/LoanRequest";
import DebtRepay  from "../Components/Pages/MyUsers/DebtRepay/DebtRepay";
import DashboardLayout from "../Layouts/DashboardLayout";
import AccountInfo from "../Components/Pages/Dashboard/AccountInfo/AccountInfo";
import OpenAccountDetail from "../Components/Pages/Dashboard/OpenAccountDetail/OpenAccountDetail"; 
import UserCardRequest from "../Components/Pages/Dashboard/Request/CardRequest/UserCardRequest"; 
import UserLoanRequest from "../Components/Pages/Dashboard/Request/LoanRequest/UserLoanRequest"; 
import AllUsers from "../Components/Pages/Dashboard/AllUsers/AllUsers"; 
import MyAccount from "../Components/Pages/MyUsers/MyAccount/MyAccount"; 
import MyCard from "../Components/Pages/MyUsers/MyCard/MyCard"; 
import MyLoan from "../Components/Pages/MyUsers/MyLoan/MyLoan"; 
import DepositRequest from "../Components/Pages/Dashboard/Request/DepositRequest/DepositRequest"; 
import LoanRequest  from "../Components/Pages/Dashboard/Request/LoanRequest/LoanRequest"; 
 




const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
              },
              {
                path: '/ourOffers',
                element: <OurOffers />
              },
              {
                path: '/accountDetails/:accountType',
                element: <AccountDetails />
              },
              {
                path: '/cardDetails/:cardType',
                element: <CardDetails/>
              },
              {
                path: '/loanDetails/:loanType',
                element: <LoanDetails />
              },
              {
                path: '/accountsForm',
                element: <AccountsForm />
              },
              {
                path: '/accountsProfile',
                element: <AccountsProfile />
              },
              {
                path: '/myAccount',
                element: <MyAccount />
              },
              {
                path: '/accountDeposit/:id',
                element: <AccountDeposit />
              },
              {
                path: '/moneyTransfer/:id',
                element: <MoneyTransfer />
              },
              {
                path: '/myCard',
                element: <MyCard />
              },
              {
                path: '/cardRequest/:id',
                element: <CardRequest />
              },
              {
                path: '/myLoan',
                element: <MyLoan />
              },
              {
                path: '/loanDeposit/:id',
                element: <LoanDeposit />
              },
              {
                path: '/loanRequest/:id',
                element: <LoanRequest />
              },
              {
                path: '/debtRepay/:id',
                element: <DebtRepay />
              },
            
        ]
    },
    {
      path: "/dashboard",
      errorElement: <ErrorPage />,
      element: <DashboardLayout />,
      children: [
        {
          path: '/dashboard',
          element: <AccountInfo />
        },
        {
          path: '/dashboard/openAccountDetail/:id',
          element: <OpenAccountDetail />
        },
        {
          path: '/dashboard/depositRequest',
          element: <DepositRequest />
        },
        {
          path: "/dashboard/userCardRequest",
          element: <UserCardRequest />,
        },
        {
          path: "/dashboard/userLoanRequest",
          element: <UserLoanRequest />,
        },
        {
          path: "/dashboard/allUsers",
          element: <AllUsers />,
        },
      ]
    }

])
export default routes;