import React, { Suspense } from 'react';
import PublicLayout from './layouts/PublicLayout';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, protectedRoutes } from 'src/routes/route';
import ProtectedLayout from './layouts/ProtectedLayout';
import LinearLoader from './components/loaders/LinearLoader';
import ResponseModal from './components/modals/ResponseModal';
import useCommonStore from './store/useCommonStore';

function App() {
  const { showResponseModal } = useCommonStore();
  return (
    <React.Fragment>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />} >
          {
            publicRoutes.map(({ path, component: Component }, idx) => {
              return (
                <Route
                  key={`${path}-${idx}`}
                  path={path}
                  element={
                    <Suspense fallback={<LinearLoader />}>
                      <Component />
                    </Suspense>
                  }
                />
              )
            })
          }
        </Route>
        {/* Protected Routes */}
        <Route element={<ProtectedLayout />} >
          {
            protectedRoutes.map(({ path, component: Component, childRoutes }, idx) => {
              return (
                <>
                  <Route
                    key={`${path}-${idx}`}
                    path={path}
                    element={
                      <Suspense fallback={<LinearLoader />}>
                        <Component />
                      </Suspense>
                    }
                  />
                  {
                    Array.isArray(childRoutes)
                    &&
                    childRoutes.map(({ path, component: Component }) => {
                      return (
                        <Route
                          key={`${path}-${idx}`}
                          path={path}
                          element={
                            <Suspense fallback={<LinearLoader />}>
                              <Component />
                            </Suspense>
                          }
                        />
                      )
                    })
                  }
                </>
              )
            })
          }
        </Route>
      </Routes>
      {
        showResponseModal
        &&
        <ResponseModal />
      }
    </React.Fragment>
  )
}

export default App
