import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
// import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import NotFound from "./pages/OtherPage/NotFound";
import IsOddNumber from "./pages/IsOddNumber";
import IsEvenNumber from "./pages/IsEvenNumber";
import AbsoluteValue from "./pages/AbsoluteValue";
import IsPrimeNumber from "./pages/IsPrimeNumber";
import SumOfNumbers from "./pages/SumOfNumbers";
import SumOfOddNumber from "./pages/SumOfOddNumber";
import SumOfEvenNumber from "./pages/SumOfEvenNumber";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
       {
          index:true,
          path:'/',
          element: <Home />

       },
       {
          path:'/isoddnumber',
          element: <IsOddNumber />
       },
       {
          path:'/isevennumber',
          element: <IsEvenNumber />
       },
       {
          path:'/absolute-value',
          element: <AbsoluteValue />
       },
       {
          path:'/is-prime-number',
          element: <IsPrimeNumber />
       },
       {
          path:'/sum-of-numbers',
          element: <SumOfNumbers />
       },
       {
          path:'/sum-of-odd-number',
          element: <SumOfOddNumber />
       },
       {
          path:'/sum-of-even-number',
          element: <SumOfEvenNumber />
       },
    ]
  },
  {
     path:'*',
     element: <NotFound />
  }
]);



export default function App() {
  return (
    <>

      <RouterProvider router={router} />

    </>
  );
}

// import {Routes, Route } from "react-router-dom";
// import AppLayout from "./layout/AppLayout";
// import Home from "./pages/Dashboard/Home";
// import NotFound from "./pages/OtherPage/NotFound";
// import IsOddNumber from "./pages/IsOddNumber";
// import IsEvenNumber from "./pages/IsEvenNumber";
// import AbsoluteValue from "./pages/AbsoluteValue";
// import IsPrimeNumber from "./pages/IsPrimeNumber";
// import SumOfNumbers from "./pages/SumOfNumbers";
// import SumOfOddNumber from "./pages/SumOfOddNumber";
// import SumOfEvenNumber from "./pages/SumOfEvenNumber";

// export default function App() {
//    return (
   
//          <Routes>
//             <Route path="/" element={<AppLayout />}>
//                <Route index element={<Home />} />
//                <Route path="isoddnumber" element={<IsOddNumber />} />
//                <Route path="isevennumber" element={<IsEvenNumber />} />
//                <Route path="absolute-value" element={<AbsoluteValue />} />
//                <Route path="is-prime-number" element={<IsPrimeNumber />} />
//                <Route path="sum-of-numbers" element={<SumOfNumbers />} />
//                <Route path="sum-of-odd-number" element={<SumOfOddNumber />} />
//                <Route path="sum-of-even-number" element={<SumOfEvenNumber />} />
//             </Route>
//             <Route path="*" element={<NotFound />} />
//          </Routes>
    

//    )
// }