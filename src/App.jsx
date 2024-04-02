import HomeLayout from "./Layouts/HomeLayout";
import DiagnosisProcedure4 from "./Pages/DiagnosisProcedure4";
import EditProviderDetails3_2 from "./Pages/EditProviderDetails3_2";
import Home from "./Pages/Home";
import IntakeDetails2 from "./Pages/IntakeDetails2";
import OverView from "./Pages/OverView";
import Page00 from "./Pages/Page00";
import Procedure5 from "./Pages/Procedure5";
import ProviderDetail3_1 from "./Pages/ProviderDetail3_1";
import ProviderDetails3 from "./Pages/ProviderDetails3";
import RequestHistory from "./Pages/RequestHistory";
import RequestStarted01 from "./Pages/RequestStarted01";
import RequestStarted1 from "./Pages/RequestStarted1";
import RequestStarted1_1 from "./Pages/RequestStarted1_1";
import RequestStarted1_2 from "./Pages/RequestStarted1_2";
import Rx5_1 from "./Pages/Rx5_1";
import SelectPlan from "./Pages/SelectPlan";
import AdditionalDocuments5_2 from "./Pages/AdditionalDocuments5_2.jsx";
import AdditionalDocumention5_3 from "./Pages/AdditionalDocumention5_3.jsx";
import Review6 from "./Pages/Review6.jsx";
import RequestPreview6_1 from "./Pages/RequestPreview6_1.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-white">
      {/* <HomeLayout /> */}
      {/* <Home /> */}
      {/* <Page00 /> */}
      {/* <RequestStarted01 /> */}
      {/* <OverView /> */}
      {/* <RequestStarted1 /> */}
      {/* <RequestStarted1_1 /> */}
      {/* <RequestStarted1_2 /> */}
      {/* <RequestHistory /> */}
      {/* <SelectPlan /> */}
      {/* <IntakeDetails2 /> */}
      {/* <ProviderDetails3 /> */}
      {/* <ProviderDetail3_1 /> */}
      {/* <EditProviderDetails3_2 /> */}
      {/* <DiagnosisProcedure4 /> */}
      {/* <Procedure5 /> */}
      {/* <Rx5_1 /> */}
      {/* <AdditionalDocuments5_2 /> */}
      {/* <AdditionalDocumention5_3 /> */}
      {/* <Review6 /> */}
      {/* <RequestPreview6_1 /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/page0" element={<Home />} />
          <Route path="/" element={<Page00 />} />
          <Route path="/request-started-01" element={<RequestStarted01 />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/request-started-1" element={<RequestStarted1 />} />
          <Route path="/request-started-1-1" element={<RequestStarted1_1 />} />
          <Route path="/request-started-1-2" element={<RequestStarted1_2 />} />
          <Route path="/request-history" element={<RequestHistory />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/intake-details-2" element={<IntakeDetails2 />} />
          <Route path="/provider-details-3" element={<ProviderDetails3 />} />
          <Route path="/provider-details-3-1" element={<ProviderDetail3_1 />} />
          <Route
            path="/edit-provider-details-3-2"
            element={<EditProviderDetails3_2 />}
          />
          <Route
            path="/diagnosisProcedure-4"
            element={<DiagnosisProcedure4 />}
          />
          <Route path="/procedure-5" element={<Procedure5 />} />
          <Route path="/rx5-1" element={<Rx5_1 />} />
          <Route
            path="/additionalDocuments5-2 "
            element={<AdditionalDocuments5_2 />}
          />
          <Route
            path="/additionalDocumention5-3"
            element={<AdditionalDocumention5_3 />}
          />
          <Route path="/Review-6" element={<Review6 />} />
          <Route path="/RequestPreview6" element={<RequestPreview6_1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
