import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPassword";
import CustomerService from "./pages/CustomerService";
import ProfilePage from "./pages/ProfilePage";
import Wallet from "./pages/Wallet";
import ActivityPage from "./pages/ActivityPage";
import PromotionPage from "./pages/PromotionPage";
import Subordinate from "./pages/Promotion/Subordinate";
import Attandancebonus from "./pages/Activity/AttendanceBonus";
import GameStatistics from "./pages/Profile/GameStatisticsProfile";
import ActivityAward from "./pages/Activity/ActivityAward";
import CommissionDetailsPage from "./pages/Promotion/CommissionDetailPage";
import PromotionRule from "./pages/Promotion/PromotionRule";
import AgentCustomer from "./pages/Promotion/AgentCustomer";
import RebateRatio from "./pages/Promotion/RebateRatio";
import Rebate from "./pages/Activity/rebate";
import Jackpot from "./pages/Activity/Jackpot";
import Gift from "./pages/Activity/Gift";
import Home from "./pages/Home";
import LotteryWingo from "./../src/pages/Lottery/LotteryWingo/LotteryWingo";
import LotteryK3 from "./../src/pages/Lottery/LotteryK3/LotteryK3";
import Lottery5d from "./../src/pages/Lottery/Lottery5d/Lottery5d";
import LotteryTrxWingo from "./../src/pages/Lottery/LotteryTrx/LotteryTrxWingo";
import Deposit from "./pages/Wallet/Deposit";
import Withdraw from "./pages/Wallet/Withdraw";
// import withdrawHistory from "./pages/Wallet/WithdrawHistory";
// import DepositHistory from './pages/Wallet/DepositHistory';
import AboutusProfile from "./pages/Profile/AboutusProfile";
import ARWallet from "./pages/Profile/ARWallet";
import BeginnerGuide from "./pages/Profile/BeginnerGuide";
import CustomerServiceProfile from "./pages/Profile/CustomerServiceProfile";
import DepositHistoryProfile from "./pages/Profile/DepositHistoryProfile";
import DepositProfile from "./pages/Profile/DepositProfile";
import FeedbackProfile from "./pages/Profile/FeedbackProfile";
import GameHistoryProfile from "./pages/Profile/GameHistoryProfile";
import GiftsProfile from "./pages/Profile/GiftsProfile";
import NotificationProfile from "./pages/Profile/NotificationProfile";
import Notifications from "./pages/Profile/NotificationsService";
import SafeProfile from "./pages/Profile/SafeProfile";
import SettingsProfile from "./pages/Profile/SettingsProfile";
import TransactionProfile from "./pages/Profile/TransactionProfile";
import VIPProfile from "./pages/Profile/VIPProfile";
import WithdrawHistoryProfile from "./pages/Profile/WithdrawHistoryProfile";
import WithdrawProfile from "./pages/Profile/WithdrawProfile";
import PrivacyAgreement from "./pages/PrivacyAgreement";
import DepositWingo from "./pages/Lottery/LotteryWingo/DepositWingo";
import WithdrawWingo from "./pages/Lottery/LotteryWingo/WithdrawWingo";
import DepositK3 from "./pages/Lottery/LotteryK3/DepositK3";
import WithdrawK3 from "./pages/Lottery/LotteryK3/WithdrawK3";
import Deposit5d from "./pages/Lottery/Lottery5d/Deposit5d";
import Withdraw5d from "./pages/Lottery/Lottery5d/Withdraw5d";
import DepositTrx from "./pages/Lottery/LotteryTrx/DepositTrx";
import WithdrawTrx from "./pages/Lottery/LotteryTrx/WithdrawTrx";
import NewSubordinate from "./pages/Promotion/NewSubordinate";
import InvitePage from "./pages/Promotion/InvitePage";
// import WithdrawHistory from "./pages/Wallet/WithdrawHistory";
import Settings from "./pages/Settings";
import DepositHistory from "./pages/Wallet/depositHistory";
import WithdrawHistory from "./pages/Wallet/withdrawHistory";

function App() {
  return (
    <BrowserRouter>
      <main className="flex-grow">
        <Routes>
          {/* Public Route */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/customerservice" element={<CustomerService />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/activityPage" element={<ActivityPage />} />
          <Route path="/promotionPage" element={<PromotionPage />} />
          <Route path="/privacyagreement" element={<PrivacyAgreement/>} />
          <Route path="/home" element={<Home />} />

          {/* Promotion Pages */} 
          <Route path="/subordinate" element={<Subordinate />} />
          <Route path="/commissiondetailpage"element={<CommissionDetailsPage />}/>
          <Route path="/promotionrule" element={<PromotionRule />} />
          <Route path="/agentcustomer" element={<AgentCustomer />} />
          <Route path="/rebateratio" element={<RebateRatio />} />
          <Route path="/newsubordinate" element={<NewSubordinate />} />
          <Route path="/invitepage" element={<InvitePage />} />

          {/* Activity Pages */}
          <Route path="/activityaward" element={<ActivityAward />} />
          <Route path="/rebate" element={<Rebate />} />
          <Route path="/jackpot" element={<Jackpot />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/Attendancebonus" element={<Attandancebonus />} />

          {/* Lottery Pages */}
          <Route path="/lotterywingo" element={<LotteryWingo />} />
          <Route path="/depositwingo" element={<DepositWingo />} />
          <Route path="/withdrawwingo" element={<WithdrawWingo/>} />
          <Route path="/lotteryk3" element={<LotteryK3 />} />
          <Route path="/depositk3" element={<DepositK3 />} />
          <Route path="/withdrawk3" element={<WithdrawK3 />} />
          <Route path="/lottery5d" element={<Lottery5d />} />
          <Route path="/deposit5d" element={<Deposit5d />} />
          <Route path="/withdraw5d" element={<Withdraw5d />} />
          <Route path="/lotterytrxwingo" element={<LotteryTrxWingo />} />
          <Route path="/deposittrx" element={< DepositTrx/>} />
          <Route path="/withdrawtrx" element={<WithdrawTrx />} />
          
          {/* Wallet Pages */}
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          {/* <Route path="/depositHistory" element={<DepositHistory/>} /> */}
          <Route path="/withdraw-history" element= {<WithdrawHistory/>} />
          <Route path="/deposit-history" element={<DepositHistory />} />

          {/* Profile Pages */}
          <Route path="/aboutusprofile" element={<AboutusProfile />} />
          <Route path="/arwallet" element={<ARWallet />} />
          <Route path="/beginnerguide" element={<BeginnerGuide/>} />
          <Route path="/CustomerServiceProfile" element={<CustomerServiceProfile />} />
          <Route path="/depositHistoryProfile" element={<DepositHistoryProfile/>} />
          <Route path="/depositProfile" element={<DepositProfile />} />
          <Route path="/feedbackProfile" element={<FeedbackProfile/>} />
          <Route path="/gamehistoryProfile" element={<GameHistoryProfile />} />
          <Route path="/gamestatistics" element={<GameStatistics />} />
          <Route path="/giftsProfile" element={<Gift/>} />
          <Route path="/notificationProfile" element={<NotificationProfile/>} />
          <Route path="/notificationsService" element={<Notifications/>} />
          <Route path="/safeProfile" element={<SafeProfile />} />
          <Route path="/settingsProfile" element={<SettingsProfile/>} />
          <Route path="/transactionProfile" element={<TransactionProfile />} />
          <Route path="/vipprofile" element={<VIPProfile />} />
          <Route path="/withdrawHistoryProfile" element={<WithdrawHistoryProfile/>} />
          <Route path="/withdrawProfile" element={<WithdrawProfile />} />
          <Route path="/settings" element={<Settings/>} />
          {/* Redirect to /login if no routes match */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
