import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogRocket from "logrocket";
import Signin from "./pages/admin/auth/Signin";
import Signup from "./pages/admin/auth/Signup";
import ForgotPassword from "./pages/admin/auth/ForgotPassword";
import Loans from "./pages/admin/loans/Loans";
import Layout from "./layout/Layout";
import AdminDashboard from "./pages/admin/dashboard/Dashboard";
import DataUpload from "./pages/admin/dataUpload/DataUpload";
import NoticeDraft from "./pages/admin/noticeDraft/NoticeDraft";
import LitigationDashBorad from "./pages/admin/litigatonDashboard/LitigationDashboard";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  // useEffect(() => {
  //   const user = {
  //     email: "pawanpatidar.devkraft@gmail.com",
  //     recordFrontEndLoggingFalse: true,
  //     recordFrontendNetworkCalls: false,
  //     recordFronendUi: false,
  //     associateFrontendLogsWithUser: true,
  //   };
  //   LogRocket.init("atrfje/creadeasy", {});
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/signup"
            element={
              <Layout noSidebar>
                <Signup />
              </Layout>
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <Layout noSidebar>
                <Signin />
              </Layout>
            }
          />
          <Route
            exact
            path="/forgotPassword"
            element={
              <Layout noSidebar>
                <ForgotPassword />
              </Layout>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Loans />
              </Layout>
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <Layout>
                <AdminDashboard />
              </Layout>
            }
          />
          <Route
            exact
            path="/data-upload"
            element={
              <Layout>
                <DataUpload />
              </Layout>
            }
          />
          <Route
            exact
            path="/notice-drafts"
            element={
              <Layout>
                <NoticeDraft />
              </Layout>
            }
          />
          <Route
            exact
            path="/litigation-dashboard"
            element={
              <Layout>
                <LitigationDashBorad />
              </Layout>
            }
          />
          {/* <Route
          exact
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        /> */}
          {/* <Route
          exact
          path="/viewCase"
          element={
            <Layout>
              <CaseView />
            </Layout>
          }
        /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
